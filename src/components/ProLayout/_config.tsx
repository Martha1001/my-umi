import type { BasicLayoutProps } from '@ant-design/pro-layout'

/**
 * layout 的左上角 的 title
 * @type {React.ReactNode} 'Ant Design Pro'
 */
export const title: BasicLayoutProps['title'] = 'Ant Design Pro'

/**
 * layout 的左上角 logo 的 url
 * @type {React.ReactNode | ()=> React.ReactNode} -
 */
export const logo: BasicLayoutProps['logo'] = undefined

/**
 * 是否删除掉所有的自带界面
 * @type {boolean} -
 */
export const pure: BasicLayoutProps['pure'] = false

/**
 * layout 的加载态
 * @type {boolean} -
 */
export const loading: BasicLayoutProps['loading'] = false

/**
 * 当前应用会话的位置信息。如果你的应用创建了自定义的 history，则需要显示指定 location 属性，详见 issue
 * @type {history.location} isBrowser ? window.location : undefined
 */
export const location: BasicLayoutProps['location'] = window?.location || undefined

/**
 * 渲染 logo 和 title
 * @type {React.ReactNode | (logo,title)=>React.ReactNode} -
 */
export const menuHeaderRender: BasicLayoutProps['menuHeaderRender'] = undefined

/**
 * 在 layout 底部渲染一个块
 * @type {(menuProps)=>React.ReactNode} -
 */
export const menuFooterRender: BasicLayoutProps['menuFooterRender'] = undefined

/**
 * menu 菜单的头部点击事件
 * @type {(e: React.MouseEvent<HTMLDivElement>) => void} -
 */
export const onMenuHeaderClick: BasicLayoutProps['onMenuHeaderClick'] = undefined

/**
 * 在菜单标题的下面渲染一个区域
 * @type {(menuProps)=>React.ReactNode} -
 */
export const menuExtraRender: BasicLayoutProps['menuExtraRender'] = undefined

/**
 * mix 模式下顶部栏的头部点击事件
 * @type {(e: React.MouseEvent<HTMLDivElement>) => void} -
 */
export const onTopMixMenuHeaderClick: BasicLayoutProps['onMenuHeaderClick'] = undefined

/**
 * layout 的内容区 style
 * @type {React.CSSProperties} -
 */
export const contentStyle: BasicLayoutProps['contentStyle'] = undefined

/**
 * layout 的菜单模式,side：右侧导航，top：顶部导航
 * @type {side | top|mix} side
 */
export const layout: BasicLayoutProps['layout'] = 'side'

/**
 * layout 的内容模式,Fluid：自适应，Fixed：定宽 1200px
 * @type {Fluid | Fixed} Fluid
 */
export const contentWidth: BasicLayoutProps['contentWidth'] = 'Fluid'

/**
 * 导航的主题，side 和 mix 模式下是左侧菜单的主题，top 模式下是顶部菜单
 * @type {light | dark} dark
 */
export const navTheme: BasicLayoutProps['navTheme'] = 'dark'

/**
 * layout 的常见的操作，比如刷新菜单
 * @type {MutableRefObject<ActionType>} -
 */
export const actionRef: BasicLayoutProps['actionRef'] = undefined

/**
 * 顶部导航的主题，mix 模式生效
 * @type {light | dark} dark
 */
export const headerTheme: BasicLayoutProps['headerTheme'] = 'dark'

/**
 * 是否固定 header 到顶部
 * @type {boolean} false
 */
export const fixedHeader: BasicLayoutProps['fixedHeader'] = false

/**
 * 是否固定导航
 * @type {boolean} false
 */
export const fixSiderbar: BasicLayoutProps['fixSiderbar'] = false

/**
 * 触发响应式布局的断点
 * @type {Enum { 'xs', 'sm', 'md', 'lg', 'xl', 'xxl' }} lg
 */
export const breakpoint: BasicLayoutProps['breakpoint'] = 'lg'

/**
 * 关于 menu 的配置，暂时只有 locale,locale 可以关闭 menu 的自带的全球化
 * @type {menuConfig} { locale: true }
 */
export const menu: BasicLayoutProps['menu'] = { locale: true }

/**
 * 使用 IconFont 的图标配置
 * @type {URL} -
 */
export const iconfontUrl: BasicLayoutProps['iconfontUrl'] = undefined

/**
 * 当前 layout 的语言设置
 * @type {zh-CN | zh-TW | en-US} navigator.language
 */
export const locale: BasicLayoutProps['locale'] = undefined

/**
 * layout 的设置
 * @type {Settings} -
 */
export const settings: BasicLayoutProps = {}

/**
 * 侧边菜单宽度
 * @type {number} 208
 */
export const siderWidth: BasicLayoutProps['siderWidth'] = 208

/**
 * 默认的菜单的收起和展开
 * @type {boolean} -
 */
export const defaultCollapsed: BasicLayoutProps['defaultCollapsed'] = false

/**
 * 控制菜单的收起和展开
 * @type {boolean} -
 */
export const collapsed: BasicLayoutProps['collapsed'] = false

/**
 * 菜单的折叠收起事件
 * @type {(collapsed: boolean) => void} -
 */
export const onCollapse: BasicLayoutProps['onCollapse'] = undefined

/**
 * 页面切换时触发
 * @type {(location: Location) => void} -
 */
export const onPageChange: BasicLayoutProps['onPageChange'] = undefined

/**
 * 自定义头的 render 方法
 * @type {(props: BasicLayoutProps) => React.ReactNode} -
 */
export const headerRender: BasicLayoutProps['headerRender'] = undefined

/**
 * 自定义头标题的方法,mix 模式下生效
 * @type {(logo,title,props)=>React.ReactNode} -
 */
export const headerTitleRender: BasicLayoutProps['headerTitleRender'] = undefined

/**
 * 自定义头内容的方法
 * @type {(props: BasicLayoutProps) => React.ReactNode} -
 */
export const headerContentRender: BasicLayoutProps['headerContentRender'] = undefined

/**
 * 自定义头右部的 render 方法
 * @type {(props: HeaderViewProps) => React.ReactNode} -
 */
export const rightContentRender: BasicLayoutProps['rightContentRender'] = undefined

/**
 * 自定义 collapsed button 的方法
 * @type {(collapsed: boolean) => React.ReactNode} -
 */
export const collapsedButtonRender: BasicLayoutProps['collapsedButtonRender'] = undefined

/**
 * 自定义页脚的 render 方法
 * @type {(props: BasicLayoutProps) => React.ReactNode} -
 */
export const footerRender: BasicLayoutProps['footerRender'] = undefined

/**
 * 自定义页面标题的显示方法
 * @type {(props: BasicLayoutProps) => React.ReactNode} -
 */
export const pageTitleRender: BasicLayoutProps['pageTitleRender'] = undefined

/**
 * 自定义菜单的 render 方法
 * @type {(props: HeaderViewProps) => React.ReactNode} -
 */
export const menuRender: BasicLayoutProps['menuRender'] = undefined

/**
 * 在显示前对菜单数据进行查看，修改不会触发重新渲染
 * @type {(menuData: MenuDataItem[]) => MenuDataItem[]} -
 */
export const postMenuData: BasicLayoutProps['postMenuData'] = undefined

/**
 * 自定义菜单项的 render 方法
 * @type {(itemProps: MenuDataItem) => React.ReactNode} -
 */
export const menuItemRender: BasicLayoutProps['menuItemRender'] = undefined

/**
 * 自定义拥有子菜单菜单项的 render 方法
 * @type {(itemProps: MenuDataItem) => React.ReactNode} -
 */
export const subMenuItemRender: BasicLayoutProps['subMenuItemRender'] = undefined

/**
 * menuData 的 render 方法，用来自定义 menuData
 * @type {(menuData: MenuDataItem[]) => MenuDataItem[]} -
 */
export const menuDataRender: BasicLayoutProps['menuDataRender'] = undefined

/**
 * 自定义面包屑的数据
 * @type {(route)=>route} -
 */
export const breadcrumbRender: BasicLayoutProps['breadcrumbRender'] = undefined

/**
 * 用于生成菜单和面包屑。umi 的 Layout 会自动带有
 * @type {route} -
 */
export const route: BasicLayoutProps['route'] = undefined

/**
 * 禁止自动切换到移动页面
 * @type {boolean} false
 */
export const disableMobile: BasicLayoutProps['disableMobile'] = false

/**
 * 显示在菜单右下角的快捷操作
 * @type {React.ReactNode[]} -
 */
export const links: BasicLayoutProps['links'] = undefined

/**
 * 传递到 antd menu 组件的 props, 参考 (https://ant.design/components/menu-cn/)
 * @type {MenuProps} undefined
 */
export const menuProps: BasicLayoutProps['menuProps'] = undefined

/**
 * 配置水印，水印是 PageContainer 的功能，layout 只是透传给 PageContainer
 * @type {WaterMarkProps} -
 */
export const waterMarkProps: BasicLayoutProps['waterMarkProps'] = undefined
