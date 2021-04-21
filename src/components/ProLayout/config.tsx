/**
 * layout 的左上角 的 title
 * @type {React.ReactNode} 'Ant Design Pro'
 */
 export const title: React.ReactNode = 'Ant Design Pro'


 /**
  * layout 的左上角 logo 的 url
  * @type {React.ReactNode | ()=> React.ReactNode} -
  */
 export const logo: React.ReactNode | (()=> React.ReactNode) = undefined as any
 
 
 /**
  * 是否删除掉所有的自带界面
  * @type {boolean} -
  */
 export const pure: boolean = false
 
 
 /**
  * layout 的加载态
  * @type {boolean} -
  */
 export const loading: boolean = false
 
 
 /**
  * 当前应用会话的位置信息。如果你的应用创建了自定义的 history，则需要显示指定 location 属性，详见 issue
  * @type {history.location} isBrowser ? window.location : undefined
  */
 export const location: history.location = isBrowser ? window.location : undefined
 
 
 /**
  * 渲染 logo 和 title
  * @type {React.ReactNode | (logo,title)=>React.ReactNode} -
  */
 export const menuHeaderRender: React.ReactNode | ((logo,title)=>React.ReactNode) = undefined as any
 
 
 /**
  * 在 layout 底部渲染一个块
  * @type {(menuProps)=>React.ReactNode} -
  */
 export const menuFooterRender: (menuProps)=>React.ReactNode = undefined as any
 
 
 /**
  * menu 菜单的头部点击事件
  * @type {(e: React.MouseEvent<HTMLDivElement>) => void} -
  */
 export const onMenuHeaderClick: (e: React.MouseEvent<HTMLDivElement>) => void = undefined as any
 
 
 /**
  * 在菜单标题的下面渲染一个区域
  * @type {(menuProps)=>React.ReactNode} -
  */
 export const menuExtraRender: (menuProps)=>React.ReactNode = undefined as any
 
 
 /**
  * mix 模式下顶部栏的头部点击事件
  * @type {(e: React.MouseEvent<HTMLDivElement>) => void} -
  */
 export const onTopMixMenuHeaderClick: (e: React.MouseEvent<HTMLDivElement>) => void = undefined as any
 
 
 /**
  * layout 的内容区 style
  * @type {React.CSSProperties} -
  */
 export const contentStyle: React.CSSProperties = undefined as any
 
 
 /**
  * layout 的菜单模式,side：右侧导航，top：顶部导航
  * @type {side | top} side
  */
 export const layout: side | top = side
 
 
 /**
  * layout 的内容模式,Fluid：自适应，Fixed：定宽 1200px
  * @type {Fluid | Fixed} Fluid
  */
 export const contentWidth: Fluid | Fixed = Fluid
 
 
 /**
  * 导航的主题，side 和 mix 模式下是左侧菜单的主题，top 模式下是顶部菜单
  * @type {light | dark} dark
  */
 export const navTheme: light | dark = dark
 
 
 /**
  * layout 的常见的操作，比如刷新菜单
  * @type {MutableRefObject<ActionType>} -
  */
 export const actionRef: MutableRefObject<ActionType> = undefined as any
 
 
 /**
  * 顶部导航的主题，mix 模式生效
  * @type {light | dark} dark
  */
 export const headerTheme: light | dark = dark
 
 
 /**
  * 是否固定 header 到顶部
  * @type {boolean} false
  */
 export const fixedHeader: boolean = false
 
 
 /**
  * 是否固定导航
  * @type {boolean} false
  */
 export const fixSiderbar: boolean = false
 
 
 /**
  * 触发响应式布局的断点
  * @type {Enum { 'xs', 'sm', 'md', 'lg', 'xl', 'xxl' }} lg
  */
 export const breakpoint: Enum { 'xs', 'sm', 'md', 'lg', 'xl', 'xxl' } = lg
 
 
 /**
  * 关于 menu 的配置，暂时只有 locale,locale 可以关闭 menu 的自带的全球化
  * @type {menuConfig} { locale: true }
  */
 export const menu: menuConfig = { locale: true }
 
 
 /**
  * 使用 IconFont 的图标配置
  * @type {URL} -
  */
 export const iconfontUrl: URL = undefined as any
 
 
 /**
  * 当前 layout 的语言设置
  * @type {zh-CN | zh-TW | en-US} navigator.language
  */
 export const locale: zh-CN | zh-TW | en-US = navigator.language
 
 
 /**
  * layout 的设置
  * @type {Settings} -
  */
 export const settings: Settings = undefined as any
 
 
 /**
  * 侧边菜单宽度
  * @type {number} 208
  */
 export const siderWidth: number = 208
 
 
 /**
  * 默认的菜单的收起和展开
  * @type {boolean} -
  */
 export const defaultCollapsed: boolean = false
 
 
 /**
  * 控制菜单的收起和展开
  * @type {boolean} -
  */
 export const collapsed: boolean = false
 
 
 /**
  * 菜单的折叠收起事件
  * @type {(collapsed: boolean) => void} -
  */
 export const onCollapse: (collapsed: boolean) => void = undefined as any
 
 
 /**
  * 页面切换时触发
  * @type {(location: Location) => void} -
  */
 export const onPageChange: (location: Location) => void = undefined as any
 
 
 /**
  * 自定义头的 render 方法
  * @type {(props: BasicLayoutProps) => React.ReactNode} -
  */
 export const headerRender: (props: BasicLayoutProps) => React.ReactNode = undefined as any
 
 
 /**
  * 自定义头标题的方法,mix 模式下生效
  * @type {(logo,title,props)=>React.ReactNode} -
  */
 export const headerTitleRender: (logo,title,props)=>React.ReactNode = undefined as any
 
 
 /**
  * 自定义头内容的方法
  * @type {(props: BasicLayoutProps) => React.ReactNode} -
  */
 export const headerContentRender: (props: BasicLayoutProps) => React.ReactNode = undefined as any
 
 
 /**
  * 自定义头右部的 render 方法
  * @type {(props: HeaderViewProps) => React.ReactNode} -
  */
 export const rightContentRender: (props: HeaderViewProps) => React.ReactNode = undefined as any
 
 
 /**
  * 自定义 collapsed button 的方法
  * @type {(collapsed: boolean) => React.ReactNode} -
  */
 export const collapsedButtonRender: (collapsed: boolean) => React.ReactNode = undefined as any
 
 
 /**
  * 自定义页脚的 render 方法
  * @type {(props: BasicLayoutProps) => React.ReactNode} -
  */
 export const footerRender: (props: BasicLayoutProps) => React.ReactNode = undefined as any
 
 
 /**
  * 自定义页面标题的显示方法
  * @type {(props: BasicLayoutProps) => React.ReactNode} -
  */
 export const pageTitleRender: (props: BasicLayoutProps) => React.ReactNode = undefined as any
 
 
 /**
  * 自定义菜单的 render 方法
  * @type {(props: HeaderViewProps) => React.ReactNode} -
  */
 export const menuRender: (props: HeaderViewProps) => React.ReactNode = undefined as any
 
 
 /**
  * 在显示前对菜单数据进行查看，修改不会触发重新渲染
  * @type {(menuData: MenuDataItem[]) => MenuDataItem[]} -
  */
 export const postMenuData: (menuData: MenuDataItem[]) => MenuDataItem[] = undefined as any
 
 
 /**
  * 自定义菜单项的 render 方法
  * @type {(itemProps: MenuDataItem) => React.ReactNode} -
  */
 export const menuItemRender: (itemProps: MenuDataItem) => React.ReactNode = undefined as any
 
 
 /**
  * 自定义拥有子菜单菜单项的 render 方法
  * @type {(itemProps: MenuDataItem) => React.ReactNode} -
  */
 export const subMenuItemRender: (itemProps: MenuDataItem) => React.ReactNode = undefined as any
 
 
 /**
  * menuData 的 render 方法，用来自定义 menuData
  * @type {(menuData: MenuDataItem[]) => MenuDataItem[]} -
  */
 export const menuDataRender: (menuData: MenuDataItem[]) => MenuDataItem[] = undefined as any
 
 
 /**
  * 自定义面包屑的数据
  * @type {(route)=>route} -
  */
 export const breadcrumbRender: (route)=>route = undefined as any
 
 
 /**
  * 用于生成菜单和面包屑。umi 的 Layout 会自动带有
  * @type {route} -
  */
 export const route: route = undefined as any
 
 
 /**
  * 禁止自动切换到移动页面
  * @type {boolean} false
  */
 export const disableMobile: boolean = false
 
 
 /**
  * 显示在菜单右下角的快捷操作
  * @type {React.ReactNode[]} -
  */
 export const links: React.ReactNode[] = undefined as any
 
 
 /**
  * 传递到 antd menu 组件的 props, 参考 (https://ant.design/components/menu-cn/)
  * @type {MenuProps} undefined
  */
 export const menuProps: MenuProps = undefined
 
 
 /**
  * 配置水印，水印是 PageContainer 的功能，layout 只是透传给 PageContainer
  * @type {WaterMarkProps} -
  */
 export const waterMarkProps: WaterMarkProps = undefined as any
 