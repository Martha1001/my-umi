import { ButtonProps, ResultProps, TabsProps, TabPaneProps } from 'antd'
import { IRoute } from '@/router/route'

export interface IButtonLinkProps extends IRoute {
	replace?: boolean
	buttonProps?: ButtonProps
}

export interface IResultProps extends ResultProps {
	buttonLinkProps?: IButtonLinkProps
}

export interface ITabsProps extends TabsProps {
	configs: TabPaneProps[]
}
