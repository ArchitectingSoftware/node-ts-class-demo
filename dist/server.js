"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const KoaRouter = require("koa-router");
const app = new Koa();
const router = new KoaRouter();
const serverPort = process.env.SERVER_PORT || 3000;
router.get('/', async (http) => {
    http.response.body = "Hello CS575";
});
app.use(router.routes());
app.listen({ port: serverPort }, () => {
    console.log('App listening at port: ', serverPort);
});
//# sourceMappingURL=server.js.map