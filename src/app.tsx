import type { Settings as LayoutSettings } from '@ant-design/pro-layout'
import { history, Link } from 'umi'
import type { RequestConfig, RunTimeLayoutConfig } from 'umi'
import * as Icon from '@ant-design/icons'
import { Avatar } from 'antd'
import { Footer, NotPermission } from '@/components/customAntd'
import { getJson } from './utils/tools'
import routes from '../config/routes'

/**
 * @see https://umijs.org/zh-CN/plugins/plugin-initial-state
 */
export async function getInitialState() {
	const res = await fetch('/api/trans/sysUser/info', {
		headers: {
			'x-token': window.localStorage.token,
		},
	})
		.then(re => re.json())
		.then(({ result = {} }) => result)
		.catch(e => console.log('Oops, error', e))
	console.log('getInitialState =>', res)

	return {
		isAdmin: true,
		isUser: false,
		canEdit: true,
		currentUser: {
			name: 'antdPro5',
		},
		// settings: {},
	}
}

/**
 * @see https://procomponents.ant.design/components/layout/#api
 */
export const layout: RunTimeLayoutConfig = ({ initialState }) => {
	console.log('layout =>', history)
	return {
		// title: 'app title', // 优先级大于 config/config.ts
		// logo: '/assets/logo.png', // 优先级大于 config/config.ts
		// pure: true,
		// loading: true,

		// menuFooterRender: menuProps => console.log('menuFooterRender =>', menuProps),
		// onMenuHeaderClick: e => console.log('onMenuHeaderClick =>', e),
		// menuExtraRender: menuProps => console.log('menuExtraRender =>', menuProps),
		// onTopMixMenuHeaderClick: e => console.log('onTopMixMenuHeaderClick =>', e),
		contentStyle: {
			height: 'calc(100vh - 48px)',
		},
		layout: 'side',
		contentWidth: 'Fixed',
		navTheme: 'dark',
		// actionRef: '',

		headerTheme: 'dark',
		fixedHeader: true,
		fixSiderbar: true,
		// breakpoint: 'lg',

		menu: {
			locale: false,
			// defaultOpenAll: false,
			// type: 'group',
			// autoClose: true,
			// loading: false,
			// onLoadingChange: loading => console.log('menu.onLoadingChange =>', loading),
			// request: (params, defaultMenuDat) => console.log('menu.request =>', params, defaultMenuDat),
		},
		// menuHeaderRender: () => <>menuHeaderRender</>, // 优先级大于 config/config.ts
		// menuHeaderRender: (logo, title) => (
		// 	<>
		// 		{logo},{title}
		// 	</>
		// ),
		// menuRender: props => console.log('menuRender =>', props),
		// menuItemRender: itemProps => console.log('menuItemRender =>', itemProps),
		// subMenuItemRender: itemProps => console.log('subMenuItemRender =>', itemProps),
		postMenuData: menuData => console.log('postMenuData =>', menuData),
		menuDataRender: menuData => routes,
		// menuDataRender: menuData => console.log('menuDataRender =>', menuData),
		// menuProps: MenuProps,

		// breadcrumbRender: route => console.log('breadcrumbRender =>', route),

		// route: route,

		locale: false,
		// settings: {},

		// siderWidth: 208,
		// defaultCollapsed: true,
		// collapsed: true,
		// onCollapse: (collapsed: boolean) => console.log('onCollapse =>', collapsed),
		// collapsedButtonRender: (collapsed: boolean) => console.log('collapsedButtonRender =>', collapsed),

		onPageChange: (location: Location) => {
			console.log('onPageChange1 =>', location)
			console.log('onPageChange2 =>', history.location)

			// 如果没有登录，重定向到 login
			// if (!initialState?.currentUser && location.pathname !== loginPath) {
			// 	history.push(loginPath)
			// }
		},

		// headerRender: props => console.log('headerRender =>', props),
		// headerTitleRender: (logo, title, props) => console.log('headerTitleRender =>', props),
		// headerContentRender: props => console.log('headerContentRender =>', props),
		// rightContentRender: props => console.log('rightContentRender =>', props),

		// footerRender: props => {
		// 	console.log('footerRender =>', props)
		// 	return <Footer />
		// },
		// pageTitleRender: props => console.log('pageTitleRender =>', props),

		// disableMobile: false,

		links: [
			<Link to="/" target="_blank">
				<Icon.LinkOutlined />
				<span>openAPI 文档</span>
			</Link>,
			<Link to="/">
				<Icon.BookOutlined />
				<span>业务组件文档</span>
			</Link>,
		],
		waterMarkProps: {
			// 水印是 PageContainer 的功能，layout 只是透传给 PageContainer
			content: initialState?.currentUser?.name,
		},

		// disableContentMargin: false, // ???

		// 自定义 403 页面
		unAccessible: <NotPermission />,
		// ...initialState?.settings,
	}
}
