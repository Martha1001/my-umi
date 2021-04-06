/** 工具枚举 */
export enum TOOL {
	/** 一键导出文件 */
	EXPORT_FILE = 'exportFile',
}

/** 编译后路径 /config */
export const PATH_DIST_TOOLS = 'nodeTool/dist/tools'

/** 第一题：请选择工具 */
export enum PROMP_0 {
	type = 'list',
	name = 'type',
	message = '请选择工具',
	default = 0,
}
