/**
 * nunjucks中的包含
 */
let nunjucks = require('nunjucks');
let path = require('path');

nunjucks.configure(path.resolve('view'), {
    autoescape: true
});

let result = nunjucks.render('users.html', {
    users: [
        {name: 'zhufeng1', id: 1}, {name: 'zhufeng2', id: 2}
    ]
});

console.log(result);