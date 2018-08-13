require('babel-core/register');

const Koa = require('koa');
const cors = require('@koa/cors');
const app = new Koa();
const path = require("path");
const fs = require('fs');
// const qs = require('qs');
const mount = require("koa-mount");
// const koaBody = require("koa-body");
const serverStatic = require("koa-static");



app.use(mount('/assets', serverStatic(path.resolve(__dirname, "../assets"))));
app.use(ctx => {
    // ctx.body = "Hello Koa";
    // console.log(ctx)
    if (ctx.url == "/") {
        ctx.body = fs.readFileSync(path.join(__dirname, "../assets/index.html"), "utf8")
    }
})

//跨域部分配置
app.use(cors({
    origin: "http://localhost:3288",
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE', "PUT"],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}));

app.listen(3288, (data) => {
    console.log("Page is run http://localhost:3288")
});