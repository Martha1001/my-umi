import { useMemo } from 'react'
import { Spin as AntdSpin, SpinProps } from 'antd'

interface ISpinProps extends SpinProps {
	wrapStyle?: React.CSSProperties
}
export default (props: ISpinProps) => {
	const { wrapStyle } = props

	return useMemo(
		() => (
			<div style={wrapStyle}>
				<AntdSpin {...props} />
			</div>
		),
		[props],
	)
}
