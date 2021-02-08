import * as path from 'path'
import * as Koa from 'koa'
import * as render from 'koa-ejs'
import * as koaBody from 'koa-body'
import * as koaStatic from 'koa-static'
import router from './routes'
import historyApiFallback from './middleware/historyApiFallback'

const app = new Koa()

render(app, {
	root: path.resolve('dist'),
	layout: 'index',
	viewExt: 'html',
	cache: false,
	debug: false,
})

app
	.use(koaBody({ multipart: true }))
	.use(router.routes())
	.use(historyApiFallback)
	.use(koaStatic(path.resolve('dist')))
	.listen(8080, () => {
		console.log(`Success: Ready at http://localhost:8080`)
	})
