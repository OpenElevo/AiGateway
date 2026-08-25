# Elevo AI Gateway

Unified model access, cost governance, and service quality management for organizations.

[简体中文](README.md) | [Website](https://gateway.elevo.vip) | [Integration guide](https://gateway.elevo.vip/portal/public/guide) | [Service status](https://gateway.elevo.vip/portal/public/status) | [Issues](https://github.com/OpenElevo/AiGateway/issues)

> This repository is the public product and community hub for Elevo AI Gateway. It publishes release information and feature updates and hosts questions and requirement discussions. The product source code is not currently published here.

## What it provides

| Capability | Purpose |
| --- | --- |
| Unified model endpoint | Connect applications to multiple models and channels through OpenAI-compatible APIs |
| Routing and recovery | Select eligible channels and recover from failures within configured policies |
| Organization governance | Control model access by organization, member, application, and API key |
| Usage and cost controls | Attribute usage and cost, with quotas, budgets, and multidimensional analysis |
| Service quality insights | Analyze success rate, latency, errors, and channel health |
| Auditability | Trace requests to the responsible organization, application, member, and credential |

Available models, protocols, and capabilities depend on tenant configuration and what the console currently reports. See the [feature overview](docs/features.md) for boundaries.

## Quick start

Create an API key in the console and point an OpenAI SDK at the gateway:

```python
import os
from openai import OpenAI

client = OpenAI(
    api_key=os.environ["ELEVO_API_KEY"],
    base_url="https://gateway.elevo.vip/v1",
)

response = client.chat.completions.create(
    model="<a model available in your console>",
    messages=[{"role": "user", "content": "Hello"}],
)

print(response.choices[0].message.content)
```

Never place API keys in source code, browser code, logs, or GitHub issues. Read the [integration guide](https://gateway.elevo.vip/portal/public/guide) before a production rollout.

## Releases and feedback

- Read the [release policy](docs/releases.md), [feature overview](docs/features.md), and [public roadmap](ROADMAP.md).
- Formal release notes are archived in [GitHub Releases](https://github.com/OpenElevo/AiGateway/releases).
- Use the issue forms to [report a bug](https://github.com/OpenElevo/AiGateway/issues/new?template=bug.yml), [request a feature](https://github.com/OpenElevo/AiGateway/issues/new?template=feature.yml), or [ask a question](https://github.com/OpenElevo/AiGateway/issues/new?template=question.yml).
- Use [Discussions](https://github.com/OpenElevo/AiGateway/discussions) for open-ended conversation.
- Do not disclose vulnerabilities, credentials, or personal data publicly. Follow the [security policy](SECURITY.md).

See [SUPPORT.md](SUPPORT.md), [CONTRIBUTING.md](CONTRIBUTING.md), and [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) before participating.

Unless an explicit license file states otherwise, public visibility does not grant an open-source license to repository content or product software. Elevo, Elevo AI Gateway, and related marks remain the property of their respective owners.
