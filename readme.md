## Course tutorial, Node, Typescript, Docker

1. Ensure that you have nodejs installed `node --version`

2. Create an empty directory for your project

3. Initialize new node project `npm init` and fill out prompts or accept the defaults

4. Check out the `package.json` file.  Mine looks like this: 
```json
{
  "name": "ts-class-demo",
  "version": "1.0.0",
  "description": "Demo project for CS575",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Brian Mitchell, Ph.D",
  "license": "MIT"
}
```

5. Install runtime dependencies with `npm --save ...`  For this demo we will examine the Koa web framework.  Use this command:  `npm install --save koa koa-bodyparser koa-router`

6. Install development dependencies with `npm --save-dev ...`  For this demo we will examine the Koa web framework.  Use this command:  `npm install --save-dev typescript tslint ts-node nodemon`
7. Install development typescript type definition dependencies with `npm --save-dev ...`  For this demo we will examine the Koa web framework.  Use this command:  `npm install --save-dev @types/koa @types/koa-bodyparser @types/koa-router @types/node`
8. create a file called `tsconfig.json` in the root directory and place the following inside to configure the typescript compiler to wrok with the koa framework correctly:

```json
{
    "compilerOptions": {
      "module": "commonjs",
      "target": "es2017",
      "noImplicitAny": true,
      "outDir": "./dist",
      "sourceMap": true,
      "types": [
        "koa"
      ]
    },
    "include": [
      "src/**/*"
    ],
    "exclude": [
      "node_modules"
    ]
  }
```
9. Make a directory called src - `mkdir src`
10. Create a file in the new directory called `server.ts`.  Place this code in the file to create a minimal server:

```typescript
import * as Koa from 'koa';
import * as KoaRouter from 'koa-router';

const app = new Koa();
const router = new KoaRouter()

router.get('/', async http =>{
    http.response.body = "Hello CS575"
})

app.use(router.routes())

app.listen( { port:5001 }, () => {
    console.log('App listening at port 5001')
});
```

11. Now update the `package.json` file to add steps to build and run your node project.  In the `scripts` section, add:

```json
  "scripts": {
    "watch-server":"nodemon --watch 'src/**/*' -e ts,tsx --exec ts-node src/server.ts",
    "build" : "tslint --project . && tsc",
    "test": "echo \"Error: no test specified\" && exit 1"
  }
```

12.  Start the server: `npm run watch-server`

13.  Try it out go to `http://localhost:5001` in a browser