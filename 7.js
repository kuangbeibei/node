/**
 * nunjucks 模板的继承
 */
let nunjucks = require('nunjucks');
let path = require('path');

nunjucks.configure(path.resolve('view'), {
    autoescape: true
});

let result = nunjucks.render('sub.html');

console.log(result);

