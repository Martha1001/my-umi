import styles from './index.less'

export default function IndexPage() {
	return (
		<div>
			<h1 className={styles.title}>Page index</h1>
			<p>window.DEPLOY_ENV: {window.DEPLOY_ENV}</p>
		</div>
	)
}
