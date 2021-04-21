import { useMemo } from 'react'
import { Tabs } from 'antd'
import { ITabsProps } from './interface'

export default (props: ITabsProps) => {
	const { configs = [], ...reset } = props

	return useMemo(
		() => (
			<Tabs {...reset}>
				{configs.map(({ tabKey, children, ...cReset }) => (
					<Tabs.TabPane key={tabKey} {...cReset}>
						{children}
					</Tabs.TabPane>
				))}
			</Tabs>
		),
		[props],
	)
}
