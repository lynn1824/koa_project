const Router = require('koa-router');
const router = new Router();

// classic/index
router.get('/v1/books/index', (ctx, next) => {
    ctx.body = {
        name: 'books',
        age: 18
    };
});

module.exports = router;