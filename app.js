const Koa = require('koa')
const router = require('koa-router')();
const bodyparse = require('koa-bodyparser');  // 格式化 post请求的body数据


// const MysqlStore = require('koa-mysql-session');
// const session = require('koa-session-minimal');
// 使用koa-session-minimal   koa-mysql-session来进行数据库的操作


const app = new Koa();










































// session存储配置
// const sessionMysqlConfig= {
//   user: config.database.USERNAME,
//   password: config.database.PASSWORD,
//   database: config.database.DATABASE,
//   host: config.database.HOST,
// }

// 配置session中间件
// app.use(session({
//   key: 'USER_SID',
//   store: new MysqlStore(sessionMysqlConfig)
// }))






app.use(bodyparse());






































app.use(require('./routers/signin.js').routes())








































































app.use(router.routes())

app.listen(3000, () => {
    console.log('server is running at http://localhost:3000')
})

// app.on('error', (err, ctx) => {
//     log.error('server error', err, ctx)
// });


//  执行顺序说明
/*
app.use(async(ctx, next)=>{
    console.log(111);
    await next();
    ctx.response.type="text/html";
    ctx.response.body = '<div>hello world111</div>';
    console.log(11100000);

});


app.use(async(ctx, next)=>{
    console.log(222);

    await next();
    ctx.response.type="text/html";
    ctx.response.body = '<div>hello world222</div>';
    console.log(2220000);

    
})


app.use(async(ctx, next)=>{
    console.log(333);
    ctx.response.type="text/html";
    ctx.response.body = '<div>hello world333</div>';
    console.log(3330000);
})

111
222
333
3330000
2220000
11100000
*/




// router.get('/api/getSliderImg', async(ctx, next)=>{
//     let data = await fs.readFileSync('./getSliderImg.js','utf-8');
//     ctx.response.type="application/json";
//     ctx.response.body = data;
// })

// router.get('/api/getHotNews', async(ctx, next)=>{
//     let data = await fs.readFileSync('./getHotNews.js','utf-8');
//     ctx.response.type="application/json";
//     ctx.response.body = data;
// })

// router.get('/api/getSaveNews', async(ctx, next)=>{
//     let data = await fs.readFileSync('./getSaveNews.js','utf-8');
//     ctx.response.type="application/json";
//     ctx.response.body = data;
// })




















