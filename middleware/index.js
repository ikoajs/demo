// const Koa = require('koa')
const Koa = require('../../ikoa/lib/application')
const app = new Koa()
const port = process.argv.slice(2).pop() || 2000
const koaStatic = require('./static')

app.use(koaStatic({ dir: '/Users/jerret/Places/Resources' }))
app.listen(port, () => {
  console.log(`server listen http://localhost:${port}`)
})
