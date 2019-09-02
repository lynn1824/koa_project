const Koa = require('koa');
const axios = require('axios');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

// classic/index
router.get('/classic/index', (ctx, next) => {
    ctx.body = {
        name: 'may13149',
        age: 30
    };
});

// 将router挂载到中间件
app.use(router.routes()).use(router.allowedMethods());

// app.use(async (ctx, next) => {
//     await next();
//     console.log('结果：', ctx.r);
//     if (ctx.method === 'GET' && ctx.path === '/classic/index') {
//         ctx.body = {
//             name: 'May13149',
//             age: 30
//         };
//     }
// });

// app.use(async (ctx, next) => {
//     // const res = await axios.get('https://jiazhang.qq.com/jz/home.html'); // 开始阻塞
//     console.log('path', ctx.path);
//     console.log('method', ctx.method);
//     ctx.r = `测试`;
// });

app.listen(3000);
console.log('service is staring..., port is 3000');