// exports.keys = "kk"; // 改写成下面这种

module.exports = app => {
    let config = {};

    // 配置keys，用来加密cookie，验证客户端身份的
    let salt = '202009021537'
    config.keys = app.name + salt;

    // 配置视图
    config.view = {
        defaultExtension: '.html', // 默認的擴展名，如果要渲染的文件沒有指定擴展名，則默認用.html
        defaultViewEngin: 'nunjucks', // 默認的模板引擎，如果某個要渲染的文件沒有在mapping裡面指定用什麼模板引擎進行渲染，則默認用nunjucks渲染
        mapping: {
            '.html': 'nunjucks',
            // '.ejs': 'ejs'
            // ...
        }
    }

    // news list接口地址
    config.news = {
        url: 'http://localhost:3000/news'
    }

    // news title接口地址，用作緩存title數據
    config.cache = {
        url: 'http://localhost:3000/cache'
    }

    return config;
}