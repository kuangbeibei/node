const {Subscription} = require('egg');

class NewsSubscription extends Subscription {
    static get schedule() {
        return {
            interval: '1m',
            type: 'all' // 指定所有worker都需要執行
        }
    }
    async subscribe() {
        const {
            ctx,
            config
        } = this;
        const res = await ctx.curl(config.cache.url, {
            method: 'GET',
            dataType: 'json'
        });
        ctx.app.cache = res.data;
    }
}

module.exports = NewsSubscription;