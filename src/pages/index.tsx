import styles from './index.less'
import { getMenuData } from '@ant-design/pro-layout'

export default function IndexPage() {
	// const { breadcrumb, menuData } = getMenuData(routes, menu, formatMessage, menuDataRender)

	return (
		<div>
			<h1 className={styles.title}>Page index</h1>
			<p>window.DEPLOY_ENV: {window.DEPLOY_ENV}</p>
		</div>
	)
}
