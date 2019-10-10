const Router = require('koa-router');
const router = new Router();

// classic/index
router.post('/v1/:id/classic/index', (ctx, next) => {

    let path = ctx.params;
    let query = ctx.request.query;
    let headers = ctx.request.header;
    // 拿到post请求中body所带参数，需要在app.js中引入 koa-parser中间件并使用
    let body = ctx.request.body;

    ctx.body = {
        name: 'classic'
    };
});

module.exports = router;