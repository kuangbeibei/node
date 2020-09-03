const {Controller} = require('egg');

class NewsController extends Controller {
    async index () {
        // this.ctx.body = 'hello news index';
        const {
            ctx,
        } = this;
        // const list=[
        //     {
        //         id: '45154322_0',
        //         title: '世界首富早晚是这个人，坐拥7家独角兽公司，估值破数万！',
        //         url: 'http://tech.ifeng.com/a/20180904/45154322_0.shtml',
        //         image:'http://p0.ifengimg.com/pmop/2018/0905/CFFF918B94D561D2A61FB434ADA81589E8972025_size41_w640_h479.jpeg',
        //         createAt:new Date().toLocaleString()
        //     },
        //     {
        //         id: '16491630_0',
        //         title: '支付宝们来了！将来人民币会消失吗？',
        //         url: 'http://finance.ifeng.com/a/20180907/16491630_0.shtml',
        //         image:'http://p0.ifengimg.com/pmop/2018/0907/2AF684C2EC49B7E3C17FCB13D6DEEF08401D4567_size27_w530_h369.jpeg',
        //         createAt:new Date().toLocaleString()
        //     },
        //     {
        //         id: '2451982',
        //         title: '《福布斯》专访贝索斯：无业务边界的亚马逊 令对手生畏的CEO',
        //         url: 'https://www.jiemian.com/article/2451982.html',
        //         image:'https://img1.jiemian.com/101/original/20180907/153628523948814900_a580x330.jpg',
        //         createAt:new Date().toLocaleString()
        //     }
        // ];

        // 在controller這一層把參數拿到，接受、處理、轉換參數，然後調用服務層
        // 拿到請求路徑的參數
        let limit = ctx.query ? ctx.query.limit : 5;

        // 然後去調服務層
        let list = await this.service.news.list(limit);
        await ctx.render('news', {list: Array.isArray(list) ? list : [list], title: ctx.app.cache ||'默認title'}); // 補充獲取新聞標題的定時任務的數據
    }
}

module.exports = NewsController;