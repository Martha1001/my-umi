import got, { Method, ExtendOptions } from 'got'
import { IRouterContext } from 'koa-router'
import serviceConf from '../config/service'
import { getServiceDomin } from '../utils/index'

type IServiceName = keyof typeof serviceConf.prd

export default (serviceName: IServiceName) => async (ctx: IRouterContext, next: Function) => {
	const { url = '', body, method } = ctx.request || {}
	const apiPrefix = `/api/${serviceName}`
	const paths = url.split(apiPrefix)
	let path = paths[1]
	if (!path) {
		return next()
	}

	const headers = ctx.header
	const reqHeaders = {
		'user-agent': headers['user-agent'],
		cookie: headers.cookie,
	}
	const config: ExtendOptions = {
		method: method as Method,
		responseType: 'json',
		headers: reqHeaders,
	}
	if (method === 'POST') {
		config.json = body
	}
	const serviceDomin = getServiceDomin(serviceName)
	const gotUrl = serviceDomin + path

	console.log('\n===================== 【request】 req =====================')
	console.log('url =>', method, gotUrl)
	console.log('config =>', config)
	console.log('==========================================================\n')

	try {
		const { headers: resHeaders, body: resBody }: any = await got(gotUrl, config)
		ctx.response.set(resHeaders)
		console.log('\n===================== 【request】 res =====================')
		console.log('headers =>', resHeaders)
		console.log('body =>', resBody)
		console.log('==========================================================\n')
		ctx.body = resBody
	} catch (err) {
		console.log('\n===================== 【request】 err =====================')
		console.log('err=>', err)
		console.log('==========================================================\n')
		ctx.body = err.response.body
	}

	return next()
}
