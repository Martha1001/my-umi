import { useMemo, useCallback } from 'react'
import { Result as AntdResult } from 'antd'
import * as Icon from '@ant-design/icons'
import { ButtonLink, IButtonLinkProps } from '@/components/customAntd'
import { IResultProps } from './interface'

const HOME = { path: '/', name: '首页', component: '@/index', icon: Icon.AimOutlined }

export const Result = (props: IResultProps) => {
	const { status, title, buttonLinkProps = HOME } = props

	const RenderExtra = useCallback(() => <ButtonLink {...buttonLinkProps} />, [buttonLinkProps])

	return useMemo(() => {
		return <AntdResult extra={<RenderExtra />} title={title || status} {...props} />
	}, [props])
}

const _HOME: IButtonLinkProps = { ...HOME, name: '返回首页' }
export const NotPermission = ({ buttonLinkProps = _HOME }: IResultProps) => (
	<Result status={403} subTitle="抱歉，您无权访问此页" buttonLinkProps={buttonLinkProps} />
)
export const NotExist = ({ buttonLinkProps = _HOME }: IResultProps) => (
	<Result status={404} subTitle="抱歉，您访问的页面不存在" buttonLinkProps={buttonLinkProps} />
)
export const GoWrong = ({ buttonLinkProps = _HOME }: IResultProps) => (
	<Result status={500} subTitle="出错啦，请稍后再试" buttonLinkProps={buttonLinkProps} />
)
