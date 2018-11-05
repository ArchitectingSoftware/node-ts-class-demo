import * as Koa from 'koa';
import * as KoaRouter from 'koa-router';

const app = new Koa();
const router = new KoaRouter();
const serverPort = process.env.SERVER_PORT || 3000

interface DataResponse{
    fname: string,
    lname: string
}

router.get('/', async http =>{
    http.response.body = "Hello CS575"
})

router.get('/obj', async http =>{
    http.response.body = {class:"CS575", meets:"MONDAY 6PM-9PM", msg: "HELLO CS575"}
})

router.get('/param', async http =>{
    let rspObj: DataResponse;

    rspObj = {
        fname: http.query["first"],
        lname: http.query["last"]
    }

    http.response.body = rspObj
})

app.use(router.routes())

app.listen( { port:serverPort }, () => {
    console.log('App listening at port: ', serverPort)
});
