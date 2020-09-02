/**
 * nunjucks过滤器
 */
let nunjucks = require('nunjucks');

nunjucks.configure({
    autoescape: true
})

let result = nunjucks.renderString(
    `hello {{name | replace('zhu', 'da') | capitalize}}`, {name: 'zhu feng'} // pipe管道的概念
);
console.log(result)

let result2 = nunjucks.renderString(
    `hello {{names | join('-')}}`, {names: ['a', 'b', 'c']}
);
console.log(result2);