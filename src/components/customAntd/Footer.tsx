import { useMemo } from 'react'
import { DefaultFooter, FooterProps } from '@ant-design/pro-layout'
import { SmileOutlined } from '@ant-design/icons'

const DEFAULT_FOOTER = {
	copyright: `${new Date().getFullYear()} umi study`,
	links: [
		{
			key: 'Ant Design Pro',
			title: 'Ant Design Pro',
			href: 'https://pro.ant.design',
			blankTarget: true,
		},
		{
			key: 'test',
			title: (
				<>
					<SmileOutlined /> martha
				</>
			),
			href: 'https://github.com/ant-design/ant-design-pro',
			blankTarget: true,
		},
		{
			key: 'Ant Design',
			title: 'Ant Design',
			href: 'https://ant.design',
			blankTarget: true,
		},
	],
}

export default (props: FooterProps) => {
	const _props = props?.copyright ? props : DEFAULT_FOOTER
	return useMemo(() => {
		// console.log('<useMemo Footer>', _props)
		return <DefaultFooter {..._props} />
	}, [_props])
}
