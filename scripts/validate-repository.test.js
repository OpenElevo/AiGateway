const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const test = require('node:test');
const { validateRepository } = require('./validate-repository');

function createRepository() {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'aigateway-validator-'));
  for (const file of [
    'README.md',
    'README.en.md',
    'ROADMAP.md',
    'SUPPORT.md',
    'CONTRIBUTING.md',
    'MAINTAINERS.md',
    'SECURITY.md',
    'CODE_OF_CONDUCT.md',
  ]) {
    fs.writeFileSync(path.join(root, file), '# Test\n');
  }
  return root;
}

test('accepts valid configuration and local links', (context) => {
  const root = createRepository();
  context.after(() => fs.rmSync(root, { recursive: true, force: true }));
  fs.mkdirSync(path.join(root, '.github'));
  fs.writeFileSync(path.join(root, '.github', 'config.yml'), 'enabled: true\n');
  fs.writeFileSync(path.join(root, 'README.md'), '[Support](SUPPORT.md)\n');

  assert.deepEqual(validateRepository(root), []);
});

test('reports missing files, invalid YAML, and broken links', (context) => {
  const root = createRepository();
  context.after(() => fs.rmSync(root, { recursive: true, force: true }));
  fs.rmSync(path.join(root, 'SECURITY.md'));
  fs.writeFileSync(path.join(root, 'bad.yml'), 'field: [unterminated\n');
  fs.writeFileSync(path.join(root, 'README.md'), '[Missing](docs/missing.md)\n');

  const errors = validateRepository(root);
  assert(errors.includes('missing required file: SECURITY.md'));
  assert(errors.some((error) => error.startsWith('invalid YAML in bad.yml:')));
  assert(errors.includes('broken local link: README.md:1 -> docs/missing.md'));
});

test('rejects links that escape the repository', (context) => {
  const root = createRepository();
  context.after(() => fs.rmSync(root, { recursive: true, force: true }));
  fs.writeFileSync(path.join(root, 'README.md'), '[Outside](../outside.md)\n');

  assert(validateRepository(root).includes('broken local link: README.md:1 -> ../outside.md'));
});
