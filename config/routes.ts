/**
 * @see https://umijs.org/docs/routing
 */
export default [
	{
		path: '/user',
		// layout: false,
		routes: [
			{
				path: '/user',
				title: 'user',
				routes: [
					{
						// access: 'isAdmin',
						access: 'isUser',
						path: '/user/welcome',
						component: 'user/welcome',
						name: 'welcome',
						title: 'welcome',
					},
				],
			},
		],
	},
	{
		path: '/',
		component: 'index',
		title: 'Home',
	},
	// {
	// 	component: '403',
	// 	title: '403',
	// },
	{
		component: '404',
		title: '404',
	},
]
