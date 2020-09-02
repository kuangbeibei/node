/**
 * 在nunjucks中写逻辑
 */

 let nunjucks = require('nunjucks');
 let path = require('path');

 nunjucks.configure({
     autoescape: true
 })

 let result = nunjucks.renderString(
    `
        {% if score > 90 %}
            优秀
        {% elseif score >= 60 %}
            及格
        {% else %}
            不及格
        {% endif %}
    `,
    {
        score: 57
    }
 );

 console.log(result);