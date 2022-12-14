import express from "express";
import path from "path";
import open from "open";
import webpack from "webpack";
import config from "../webpack.config.dev";
import wdm from "webpack-dev-middleware"

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(wdm(compiler, {
    publicPath: config.output.publicPath
}));

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../src/index.html"));
});

app.listen(port, function(err) {
    if (err) {
        console.log(err);
    } else {
        open("http://localhost:" + port);
    }
});