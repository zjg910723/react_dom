const Koa = require('koa');
const app = new Koa();
const path = require("path");
const fs = require('fs');
const mount = require("koa-mount");
const serverStatic = require("koa-static");


app.use(mount('/assets', serverStatic(path.resolve(__dirname, "../assets"))));
app.use(ctx => {
    // ctx.body = "Hello Koa";
    // console.log(ctx)
    if (ctx.url == "/") {
        ctx.body = fs.readFileSync(path.join(__dirname, "../index.html"), "utf8")
    }
})

app.listen(3298, (data) => {
    console.log("Page is run http://localhost:3298")
});