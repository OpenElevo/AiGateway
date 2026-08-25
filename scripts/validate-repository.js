const fs = require('node:fs');
const path = require('node:path');
const YAML = require('yaml');

const REQUIRED_FILES = [
  'README.md',
  'README.en.md',
  'ROADMAP.md',
  'SUPPORT.md',
  'CONTRIBUTING.md',
  'MAINTAINERS.md',
  'SECURITY.md',
  'CODE_OF_CONDUCT.md',
];

function walk(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    if (entry.name === '.git' || entry.name === 'node_modules') return [];
    const absolutePath = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(absolutePath) : [absolutePath];
  });
}

function validateRepository(root) {
  const errors = [];
  const files = walk(root).sort();

  for (const relativePath of REQUIRED_FILES) {
    if (!fs.existsSync(path.join(root, relativePath))) {
      errors.push(`missing required file: ${relativePath}`);
    }
  }

  for (const file of files.filter((candidate) => /\.ya?ml$/.test(candidate))) {
    try {
      YAML.parse(fs.readFileSync(file, 'utf8'), { strict: true });
    } catch (error) {
      errors.push(`invalid YAML in ${path.relative(root, file)}: ${error.message.split('\n')[0]}`);
    }
  }

  const markdownLink = /(?<!!)\[[^\]]+\]\(([^)]+)\)/g;
  for (const file of files.filter((candidate) => candidate.endsWith('.md'))) {
    const relativeFile = path.relative(root, file);
    const lines = fs.readFileSync(file, 'utf8').split('\n');
    lines.forEach((line, index) => {
      if (/[ \t]+$/.test(line)) {
        errors.push(`trailing whitespace: ${relativeFile}:${index + 1}`);
      }

      for (const match of line.matchAll(markdownLink)) {
        const target = match[1].trim().split(/\s+/, 1)[0];
        if (!target || /^(#|https?:\/\/|mailto:)/.test(target)) continue;

        const localPath = decodeURIComponent(target.split('#', 1)[0]);
        if (!localPath) continue;

        const resolved = path.resolve(path.dirname(file), localPath);
        const isInsideRoot = resolved.startsWith(`${path.resolve(root)}${path.sep}`);
        if (!isInsideRoot || !fs.existsSync(resolved)) {
          errors.push(`broken local link: ${relativeFile}:${index + 1} -> ${target}`);
        }
      }
    });
  }

  return errors;
}

if (require.main === module) {
  const errors = validateRepository(path.resolve(__dirname, '..'));
  if (errors.length > 0) {
    console.error(errors.join('\n'));
    process.exitCode = 1;
  } else {
    console.log('Repository validation passed.');
  }
}

module.exports = { validateRepository };
