/**
 * 配置目录和文件路径
 */
let nunjucks = require('nunjucks');
let path = require('path');

nunjucks.configure(path.resolve('view'), { // 第一个参数配置文件所在路径
    autoescape: true //自动转义特殊字符 
});

let result = nunjucks.render('index.html', {name: 'zhufeng'});
console.log('result', result);

