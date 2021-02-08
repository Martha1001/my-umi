import * as Koa from 'koa'
import renderIndex from './renderIndex'

export default async (ctx: Koa.Context, next: Function) => {
	try {
		await next()
		const url = ctx?.request?.url?.split('?')?.[0] || ''
		if (ctx.response.status === 404 && !/\..+$/.test(url)) {
			await renderIndex(ctx)
		}
	} catch (error) {
		console.log('historyApiFallback err', error)
	}
}
