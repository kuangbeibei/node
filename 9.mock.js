let Mock = require('mockjs');
let result = Mock.mock({
    code: 0,
    message: 'success',
    "data|5": [{
        "id": "@id",
        "ip": "@ip",
        "name": "@cname",
        "userId": "@id",
        "stars|2": ["※"],
        "avatar": "@image('200*100', 'indianred', '#fff', 'mockjs')",
        "createAt": "@datetime"
    }] 
});
console.log(JSON.stringify(result));
