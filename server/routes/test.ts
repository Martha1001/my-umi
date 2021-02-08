import * as Router from 'koa-router'

const router = new Router({ prefix: '/api/test' })

router.get('/env', ctx => {
	ctx.status = 200
	ctx.body = { env: process.env.DEPLOY_ENV }
})

router.get('/a', ctx => {
	ctx.status = 200
	ctx.body = {
		a: 'this is test a',
	}
})

export default router
