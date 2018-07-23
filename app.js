require('babel-core/register');
const webpack = require("webpack");
const webpackConfig = require("./webpack.config");

const {
    spawn
} = require("child_process");
const process = require("process");

var hasBuild = false;

const api = spawn("node", ["server/api.js"]);

// api.stdout.on("data", (data) => {
//     console.log(`${data}`);
// })

// api.stderr.on("data", (data) => {
//     console.log("error:" + data);
// })

// api.on("code", (code) => {
//     console.log(code);
// })


var devInfo = {};
const compiled = webpack(webpackConfig(process.argv[2]));

console.log(process.argv[2]);
compiled.watch({}, (err, stats) => {

    if (hasBuild == false) {

        api.stdout.on('data', (data) => {
            console.log(`${data}`);
        });

        api.stderr.on('data', (data) => {
            console.log('error: ' + data);
        });

        api.on('close', (code) => {
            console.log(code)
        });

    }


    console.log('change: ' + stats);

    hasBuild = true;

})