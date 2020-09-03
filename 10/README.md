1. npm i -S egg egg核心模块
2. npm i -D egg-bin egg开发模块
3. npm i -S egg-view-nunjucks
4. config目錄配置，config/plugins目錄專門放置egg.js的插件
5. config.default.js放置對keys的配置、對view模板渲染的配置、對接口地址的配置、對緩存的配置
6. app目錄下，controller、service、view、schedule名稱是固定不變的
7. schedule目錄下放置計劃任務，eggjs默認採用node集群管理
8. 
