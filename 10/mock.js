/**
 * 模擬後端接口
 */
let express = require('express');
let app = express();
let Mock = require('mockjs');
app.get('/news', (req, res) => {

    let result = Mock.mock({
        code: 0,
        message: 'success',
        [`data|${req.query.limit}`]: [{
            "id": "@id",
            "title": "@csentence",
            "url": "@url",
            "image": "@image('200*100', 'indianred', '#fff', 'mockjs')",
            "createAt": "@datetime"
        }] 
    });
    res.json(result);
});

app.get('/cache', (req, res) => {
    res.json(`新的新聞標題 ${Date.now()}`)
})

app.listen(3000);