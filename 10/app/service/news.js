const {Service} = require('egg');

class NewsService extends Service {
    async list(limit) {
        const {
            ctx
        } = this;
        const {
            url
        } = this.config.news;
        let result = await ctx.curl(url, {
            method: 'GET',
            data: {limit},
            dataType:'json',
        });
        console.log(result);
        return result.data.data;
    }
}