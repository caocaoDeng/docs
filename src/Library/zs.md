- 日志平台迁移：针对目前日志平台(Logcenter)无法灰度的问题，进行WebStatic迁移使其能够使用灰度的能力；使用流水线build，自动发布，改善发布流程。

#### FAQ（APPKEY 关键）

1. webStatic

> WebStatic是静态网站托管服务，由资源访问、资源管理、资源部署组成，核心能力有前端服务发现、泳道、灰度、纯静态项目CI/CD，以及集成了Web站点的通用组件，例如限流、登陆认证和授权等。接入WebStatic，项目的静态资源（HTML、CSS、JavaScript、字体等）默认接入美团私有云CDN服务，分发由对象存储 S3 和拥有多个边缘网点的 CDN 服务提供支持。

> WebStatic 与常用 CI/CD 工具集成，在 CI/CD 的构建环境中提供了特定构建环境所需的环境变量 process.env.PUBLIC_PATH，表示静态资源的公共前缀

> 灰度策略：新建灰度策略选择范围【org组织架构、mis号、百分比】，然后在构建组件中关联策略灰度，允许流水线后开启灰度。

2. Oceanus

> 七层网关服务，接入公司所有HTTP服务和HTTP流量。进行域名转发。

- Node CatClient单测接入：使用AI Agent(claude-sonnet-4.5) 结合CatClient SOP中的使用示例进行单测写入，然后根据OpenApi文档生成调用示例，最后对比查询结果是否单测写入的一致达成自动化测试的目的

### FAQ

1. token

> token管理平台申请token，调用openAPI使用

2. CatClient

> 打点工具；安装依赖并初始化cat-client后，可以通过newTransaction监控代码运行耗时、错误等指标，支持自定义事件和错误上报。

- 页面埋点：在 ocean 平台上为页面注cid和bid，通过灵犀对外暴露的埋点事件和每个页面或组件bid进行mv和mc的埋点上报。

### FAQ

> 灵犀：灵犀是一个集用户行为采报、用户行为上下文串联为一体的基础组件sdk，主要使用场景为用户行为埋点采集上报，对外提供埋点事件上报、关键环境参数、归因参数设置api接口。

- 列表优化：使用 vue-virtual-scroller 对上千个Appkey进行虚拟列表处理，防止页面出现卡顿。
