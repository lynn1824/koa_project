const Koa = require('koa');
const Router = require('koa-router');
const parser = require('koa-bodyparser');

const app = new Koa();
// post请求参数解析中间件
app.use(parser());
// 初始化管理
const InitManager = require('./core/init');
// 开始初始化
InitManager.main(app);

app.listen(3000);
console.log('service is staring..., port is 3000'); 