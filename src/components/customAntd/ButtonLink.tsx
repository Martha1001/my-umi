import { useMemo } from 'react'
import { Link } from 'umi'
import { Button } from 'antd'
import { IButtonLinkProps } from './interface'

export default (props: IButtonLinkProps) => {
	const { path, name, replace, buttonProps } = props

	return useMemo(
		() => (
			<Button type="primary" {...buttonProps}>
				<Link to={path} replace={replace}>
					{name}
				</Link>
			</Button>
		),
		[props],
	)
}
