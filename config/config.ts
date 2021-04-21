import { defineConfig } from 'umi'
import defaultSettings from './defaultSettings'
import routes from './routes'
import theme from './theme'

// 无需修改系统host文件
const target = 'http://10.91.105.20'
// 注意没有 http:// 前缀
const host = '73547-wxtech-lighthouse.test.za-tech.net'

/**
 * @see https://umijs.org/config
 */
export default defineConfig({
	hash: true,
	dva: {
		hmr: true,
	},
	antd: {
		// dark: true, // 开启暗色主题
		// compact: true, // 开启紧凑主题
	},
	layout: {
		locale: false,
		pwa: false, // 渐进式WEB应用
		logo: '/assets/logo.png',
		...defaultSettings,
	},
	// manifest: {
	// 	basePath: '/',
	// },
	dynamicImport: {
		loading: '@ant-design/pro-layout/es/PageLoading',
	},
	targets: {
		ie: 11,
	},
	routes,
	theme: theme,
	title: 'hi',
	ignoreMomentLocale: true,
	proxy: {
		'/api/trans': {
			target,
			changeOrigin: false,
			pathRewrite: { '^/api/trans': '' },
			onProxyReq: (proxyReq: any) => {
				if (proxyReq.getHeader('origin')) {
					proxyReq.setHeader('origin', `http://${host}`)
				}
				proxyReq.setHeader('host', host)
			},
		},
	},
})
