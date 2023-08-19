const express = require("express");
const indexRouter = require("./indexRouter.js");
const productsRouter = require("./productsRouter");
function routerApi(app) {
    const router = express.Router();
    app.use("/api/v1", router);
    router.use("/", indexRouter);
    router.use("/products",productsRouter)

}
module.exports = routerApi;
