let express = require('express');
let app = express();
let Mock = require('mockjs');
app.get('/news', (req, res) => {
    let result = Mock.mock({
        code: 0,
        message: 'success',
        "data|5": [{
            "id": "@id",
            "title": "@csentence",
            "url": "url",
            "image": "@image('200*100', 'indianred', '#fff', 'mockjs')",
            "createAt": "@datetime"
        }] 
    });
    res.json(result);
});

app.listen(3000);