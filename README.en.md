# Elevo AI Gateway

**Enterprise AI runtime governance**

Unify model access, control organizational usage, maintain service quality, and trace the cost and ownership of every AI request.

[Start free](https://gateway.elevo.vip/portal/register) | [Models and pricing](https://gateway.elevo.vip/portal/public/pricing) | [Integration guide](https://gateway.elevo.vip/portal/public/guide) | [Service status](https://gateway.elevo.vip/portal/public/status) | [简体中文](README.md)

[![Elevo AI Gateway enterprise AI operations workspace](https://gateway.elevo.vip/portal/elevo-ai-gateway-og.png)](https://gateway.elevo.vip)

## When AI usage grows beyond one application

Calling a provider API directly is usually enough for one model and one application. Once several teams use different models, providers, and internal services, organizations need consistent answers to four questions:

- Who is using AI, and which models are they calling?
- How much usage and cost belongs to each team, application, and member?
- Which models or upstream connections are affecting service quality?
- How can models and providers change without repeated application rewrites?

Elevo AI Gateway provides a shared governance layer between applications and model providers. It brings model access, access control, usage and cost, service quality, and auditability into one operating model.

## Three core outcomes

| Outcome | Capability |
| --- | --- |
| Unified access | Use familiar OpenAI Chat Completions, OpenAI Responses, and Anthropic Messages interfaces with platform models or existing enterprise provider accounts |
| Controlled cost | Attribute usage and cost by organization, member, application, API key, and model; apply quotas, rate limits, and model access policies |
| Visible quality | Compare success rate, latency, errors, and upstream health; reduce the impact of provider instability through policy-based routing and bounded recovery |

Elevo AI Gateway is not simply a larger model catalog. It helps organizations operate AI as manageable, measurable, traceable, and sustainable infrastructure.

Available models, endpoints, and capabilities depend on tenant configuration and the current console publication state. See the [feature and capability boundaries](docs/features.md).

## Who it is for

- Organizations already running multiple AI applications, teams, or model providers;
- SaaS companies that need AI cost attribution by tenant, customer, project, or team;
- Organizations combining public model services with existing enterprise provider accounts;
- IT and AI platform teams that need shared controls for access, quotas, quality, and usage records.

For one model, one application, and a small developer group, using a provider API directly is often simpler. The value of Elevo AI Gateway grows with the number of models, applications, and users.

## Get started in five minutes

1. [Create an account](https://gateway.elevo.vip/portal/register) and an organization.
2. Select an available model and create an API key in the console.
3. Point your existing SDK at Elevo AI Gateway.

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

## Product and service access

| Need | Destination |
| --- | --- |
| Try the online service | [Register for Elevo AI Gateway](https://gateway.elevo.vip/portal/register) |
| Review currently published models and prices | [Models and pricing](https://gateway.elevo.vip/portal/public/pricing) |
| Integrate a production application | [Integration guide](https://gateway.elevo.vip/portal/public/guide) |
| Discuss accounts, contracts, billing, or procurement | [support@elevo.vip](mailto:support@elevo.vip) |

This repository is not an installable software distribution and does not contain the Elevo AI Gateway product source code. It is the public hub for product information, releases, and community collaboration. Contact support to confirm deployment and procurement options.

## Releases and product direction

- Read the [release policy](docs/releases.md), [feature overview](docs/features.md), and [public roadmap](ROADMAP.md).
- Starting with the first public release, formal release notes are archived in [GitHub Releases](https://github.com/OpenElevo/AiGateway/releases).
- Roadmap entries communicate direction, not delivery dates or contractual commitments.

## Questions, requests, and discussions

- [Report a reproducible bug](https://github.com/OpenElevo/AiGateway/issues/new?template=bug.yml)
- [Request a capability or improvement](https://github.com/OpenElevo/AiGateway/issues/new?template=feature.yml)
- [Ask an integration or usage question](https://github.com/OpenElevo/AiGateway/issues/new?template=question.yml)
- [Discuss an open-ended product idea](https://github.com/OpenElevo/AiGateway/discussions)
- For vulnerabilities, credentials, or privacy incidents, follow the [security policy](SECURITY.md) instead of posting publicly

We triage public feedback according to the [support policy](SUPPORT.md). Remove API keys, tokens, cookies, complete business data, personal information, and internal addresses before posting.

Read [CONTRIBUTING.md](CONTRIBUTING.md) and [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) before participating.

Unless an explicit license file states otherwise, public visibility does not grant an open-source license to repository content or product software. Elevo, Elevo AI Gateway, and related marks remain the property of their respective owners.
