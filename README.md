## vue-teamplete-cli(SAP)

webpack-sap-vue

feature-list:

// !! babel-core 为了 兼容 jest can't find babel-core

TODOLIST:

- npm run dev or yarn dev 本地开发 ✅
- npm run build or yarn build 打包配置 ✅
  - 分环境打包 build:sit、build:uat、build:pre、build:prod 环境 ❌
- npm run analyzer 分析打包节点时间、打包体积 ✅
- npm run start 运行本地打包好的文件 ✅
- babel 7.x、webpack 4.x ✅
- 支持sass、less、stylus、postcss ✅
- eslint、husky、pre-commit 代码检测✅
- mock 功能 ❌
- router 规划 ❌
- vuex 规划 ❌
- 单元测试 jest ✅
  - npm run test or yarn test 执行单元测试 ✅
  - npm run test-c or yarn test-c 执行单元测试、并且显示测试覆盖率 ✅
- 支持typescript ❌
- 优化打包速度 terserPulgin/hardsourcewebpackpulgin、cache-lodaer、thread-lodaer/happypack等等优化✅
- 添加Etag、Gzip✅、serverworker ❌
- 部署为npm包，支持命令行交互 ❌
- 定制自己的loader、plugin，如懒加载vuex state中的数据、router动态注册 ❌
