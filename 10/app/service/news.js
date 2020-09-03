const {Service} = require('egg');

class NewsService extends Service {
    async list(limit) {
        const {
            ctx
        } = this;
        // const {
        //     url
        // } = this.config.news;
        // let result = await ctx.curl(url, {
        //     method: 'GET',
        //     data: {limit},
        //     dataType:'json',
        // });
        // return result.data.data;

        /**
         * 改為通過執行數據庫操作來獲取數據
         */
        let result = this.app.mysql.query(`SELECT * FROM news LIMIT ${limit}`);
        console.log('result:', result);
        return result;
    }
}

module.exports = NewsService;