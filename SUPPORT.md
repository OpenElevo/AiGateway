# 支持策略

## 选择正确入口

| 场景 | 入口 | 是否公开 |
| --- | --- | --- |
| 可复现的产品错误 | [Bug 表单](https://github.com/OpenElevo/AiGateway/issues/new?template=bug.yml) | 是 |
| 新能力或体验改进 | [功能需求表单](https://github.com/OpenElevo/AiGateway/issues/new?template=feature.yml) | 是 |
| 接入、配置和使用问题 | [问题表单](https://github.com/OpenElevo/AiGateway/issues/new?template=question.yml) | 是 |
| 开放式方案交流 | [GitHub Discussions](https://github.com/OpenElevo/AiGateway/discussions) | 是 |
| 安全漏洞、凭证或隐私事件 | [安全策略](SECURITY.md) | 否 |
| 账户、合同、账单或租户数据 | [support@elevo.vip](mailto:support@elevo.vip) | 否 |

## 公开反馈边界

公开 Issue 适合讨论可泛化、可脱敏的问题。以下内容必须先删除或替换：

- API Key、Access Token、Cookie、密码和签名 URL；
- 完整请求或响应正文、提示词、文件内容和个人信息；
- 内部域名、IP、租户名称、组织成员和商业数据；
- 可被用于绕过权限、配额或审计机制的细节。

只保留复现所需的最小信息，例如时间范围、脱敏请求 ID、客户端与 SDK 版本、入口协议、HTTP 状态码和最小请求结构。

## 处理流程

维护者会先确认分类和信息是否完整，然后进行复现、影响评估和优先级判断。可能的状态包括：需要信息、已确认、已接受、计划中、已发布、重复或暂不处理。

社区仓库不承诺固定响应时限。生产事故、账户或商业支持应使用合同约定的支持渠道；GitHub Issue 不能替代紧急支持流程。
