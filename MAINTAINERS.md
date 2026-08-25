# 维护者手册

本文定义公开社区仓库的日常维护方式。产品事故、客户数据和安全事件仍应进入内部支持与响应流程。

## Issue 分流

新 Issue 先保留 `status: triage`，确认类型、影响和信息完整度后再调整。推荐标签体系：

| 维度 | 标签 | 用途 |
| --- | --- | --- |
| 类型 | `type: bug`、`type: feature`、`type: question`、`type: discussion` | 表示反馈性质，只保留一个主要类型 |
| 状态 | `status: triage`、`status: needs-info`、`status: accepted`、`status: planned`、`status: released` | 表示处理阶段 |
| 范围 | `area: api`、`area: routing`、`area: access`、`area: billing`、`area: observability`、`area: console`、`area: documentation`、`area: community` | 表示主要责任域 |
| 结论 | `resolution: duplicate`、`resolution: not-planned`、`resolution: cannot-reproduce` | 表示关闭原因 |
| 发布 | `release: skip` | 不进入自动生成的 Release notes |

维护者应完成以下动作：

1. 删除误贴的凭证或个人数据；如果内容仍可通过历史记录访问，升级为安全事件处理。
2. 判断是否属于安全、账户、账单、合同或生产事故，并转入非公开渠道。
3. 确认复现信息、影响范围和期望结果，缺少信息时添加 `status: needs-info`。
4. 合并重复项并保留信息最完整的 Issue 为主记录。
5. 记录接受、暂不处理或发布结论，不用无说明的关闭代替决策。

## 需求决策

`status: accepted` 只表示问题和方向被认可。只有确定进入交付计划后才使用 `status: planned`，只有对应版本已正式发布后才使用 `status: released`。

评估时至少考虑用户影响、战略一致性、安全与合规、接口兼容性、计费正确性、实现成本和长期运维复杂度。讨论中不得透露私有源码、内部路线图、未公开客户或生产配置。

## 发布检查

1. 根据将要发布的实际版本创建 Draft Release，不预先补造内部历史版本。
2. 使用自动生成的分类作为初稿，改写为用户可理解的新增、改进和修复。
3. 明确 API、认证、权限、计费、配置和数据行为是否变化。
4. 写明管理员或调用方动作、兼容性、弃用项、已知限制及回滚注意事项。
5. 检查所有关联 Issue 和公开链接，删除内部提交、地址和敏感信息。
6. 发布后将对应 Issue 标记为 `status: released`，并检查官网或指南是否需要同步。

## 仓库设置基线

- 默认分支：`main`。
- 开启 Issues、Discussions、Private vulnerability reporting 和自动删除已合并分支。
- `main` 使用分支保护要求 Pull Request、至少一名维护者审批、对话已解决和 `validate` 检查通过。
- 不允许强制推送和删除 `main`。
- 标签名称与本文件保持一致；修改标签时同步 Issue Forms 和 `.github/release.yml`。

## 定期复查

至少在每次正式发布时复查 README、能力说明、路线图、支持入口、安全邮箱、表单和分支规则。失效链接、过期能力描述和无人负责的计划项应及时修正或移除。
