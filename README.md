# Elevo AI Gateway

企业大模型统一接入、成本治理与服务质量平台。

[English](README.en.md) | [产品官网](https://gateway.elevo.vip) | [接入指南](https://gateway.elevo.vip/portal/public/guide) | [服务状态](https://gateway.elevo.vip/portal/public/status) | [问题与需求](https://github.com/OpenElevo/AiGateway/issues)

> 本仓库是 Elevo AI Gateway 的公开产品与社区协作入口，用于发布版本信息、特性更新，受理问题并讨论需求。产品源代码目前不在本仓库公开。

## 为什么需要 Elevo AI Gateway

当团队同时使用多个模型、供应商和 AI 应用时，接入方式、费用归属、权限边界和故障排查会迅速变得复杂。Elevo AI Gateway 在业务应用与模型供应商之间提供一个稳定入口，让模型持续演进，而业务接入保持一致。

| 能力 | 解决的问题 |
| --- | --- |
| 统一模型入口 | 通过 OpenAI 兼容接口接入多个模型与渠道 |
| 智能路由与恢复 | 按配置选择可用渠道，并在允许的范围内执行故障恢复 |
| 组织与权限治理 | 按组织、成员、应用和 API Key 控制模型访问范围 |
| 用量与成本管理 | 记录用量和费用，支持额度、预算及多维分析 |
| 服务质量观测 | 分析成功率、延迟、错误和渠道运行情况 |
| 审计与追溯 | 将请求归属到明确的组织、应用、成员和凭证 |

具体模型、协议和能力以当前租户配置及控制台展示为准。完整边界见[特性说明](docs/features.md)。

## 快速接入

Elevo AI Gateway 可使用 OpenAI SDK。先在控制台创建 API Key，再将 SDK 的 `base_url` 指向网关：

```python
import os
from openai import OpenAI

client = OpenAI(
    api_key=os.environ["ELEVO_API_KEY"],
    base_url="https://gateway.elevo.vip/v1",
)

response = client.chat.completions.create(
    model="<控制台中可用的模型>",
    messages=[{"role": "user", "content": "你好"}],
)

print(response.choices[0].message.content)
```

不要把 API Key 写入源码、浏览器代码、日志或 Issue。生产接入前请阅读[在线接入指南](https://gateway.elevo.vip/portal/public/guide)。

## 版本与更新

- [版本与发布策略](docs/releases.md)：版本号、稳定性、兼容性和升级信息如何发布。
- [特性与能力](docs/features.md)：当前公开能力和支持边界。
- [公开路线图](ROADMAP.md)：正在评估和推进的方向，不承诺未经发布的日期。
- [GitHub Releases](https://github.com/OpenElevo/AiGateway/releases)：正式版本说明的唯一公开归档。

## 反馈与讨论

提交前请先搜索现有内容，避免重复：

- 遇到可复现的产品问题：[报告 Bug](https://github.com/OpenElevo/AiGateway/issues/new?template=bug.yml)
- 希望新增或改进能力：[提出功能需求](https://github.com/OpenElevo/AiGateway/issues/new?template=feature.yml)
- 接入、配置或使用疑问：[提出问题](https://github.com/OpenElevo/AiGateway/issues/new?template=question.yml)
- 需要开放式交流：[参与 Discussions](https://github.com/OpenElevo/AiGateway/discussions)
- 涉及漏洞、凭证或隐私数据：不要创建公开 Issue，请遵循[安全策略](SECURITY.md)

我们会按[支持策略](SUPPORT.md)进行分流和响应。提交内容时请删除 API Key、Token、Cookie、完整请求正文、个人信息和内部地址。

## 参与维护

欢迎改进公开文档、补充可复现案例并参与需求讨论。开始前请阅读[贡献指南](CONTRIBUTING.md)与[社区行为准则](CODE_OF_CONDUCT.md)。仓库维护规则见[维护者手册](MAINTAINERS.md)。

除非仓库中另有明确的许可证文件，本仓库内容及产品软件均不因公开可见而自动获得开源许可。Elevo、Elevo AI Gateway 及相关标识的权利归其各自权利人所有。
