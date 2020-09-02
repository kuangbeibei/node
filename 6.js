/**
 * nunjucks写循环 
 */

let nunjucks = require('nunjucks');
nunjucks.configure({
    autoescape: true
});

// loop.index, loop.index0
 let result = nunjucks.renderString(
    `
        <ul>
            {% for user in users %}
                <li>{{loop.index}}: {{user.name}}</li>
            {% endfor %}
        </ul>
    `,
    {
        users: [
            {
                name: 'zhufeng1',
                id: 1
            },
            {
                name: 'zhufeng2',
                id: 2
            }
        ]
    }
 );
 console.log(result);