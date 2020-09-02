/**
 * 通过express结合模板引擎渲染模板文件
 */
let express = require('express');
let path = require('path');
let nunjucks = require('nunjucks');

let app = express();

nunjucks.configure('view', {
    autoescape: true,
    express: app, //把express和nunjucks关联起来
})

app.get('/', (req, res) => {
    res.render('index.html', {name: '架构'})
})

app.listen('8080')