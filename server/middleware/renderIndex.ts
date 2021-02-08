export default async (ctx: any) => {
	try {
		const DEPLOY_ENV = process.env.DEPLOY_ENV
		await ctx.render('index', {
			DEPLOY_ENV,
		})
	} catch (error) {
		console.log('renderIndex err', error)
	}
}
