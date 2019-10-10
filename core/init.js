const Router = require('koa-router');
const requireDirectory = require('require-directory');

class InitManager {
    static main(app) {
        // 将app挂载到路由
        InitManager.app = app;
        // 初始化路由
        InitManager.initLoadRouters();
    }

    // 路由初始化处理
    static initLoadRouters() {
        const apiDirectory = `${process.cwd()}/app/api/v1`;
        requireDirectory(module, apiDirectory, {
            visit: (obj) => {
                if (obj instanceof Router) {
                    InitManager.app.use(obj.routes());
                }
            }
        });
    }
}

module.exports = InitManager;