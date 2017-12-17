const Koa = require('koa')
const koaStatic = require('ikoa-static')
const app = new Koa()
const port = process.argv.slice(2).pop() || 2000

app.use(koaStatic({ dir: '/Users/jerret/Places/Resources' }))
app.listen(port, () => {
  console.log(`server listen http://localhost:${port}`)
})
