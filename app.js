const Koa = require('koa')
// 注意 require('koa-router') 返回的是函数:
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser')



const app = new Koa()
app.use(bodyParser())




// 添加路由
router.get(
    '/users/:id',
    async(ctx, next) => {
        console.log(ctx);
        ctx.body = { name: 111, age: 22222 };

        // next();
        // await User.findOne(ctx.params.id).then(function(user) {
        //     // 首先读取用户的信息，异步操作
        //     ctx.user = user;
        //     next();
        // });
    }
);

// 调用路由中间件
app.use(router.routes())

app.listen(3000, () => {
    console.log('server is running at http://localhost:3000')
})

app.on('error', (err, ctx) => {
    log.error('server error', err, ctx)
});