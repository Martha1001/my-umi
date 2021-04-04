/**
 * 工具枚举（❌不可重复）
 * @enum EXPORT_FILE 一键导出文件
 */
const TOOL = {
	EXPORT_FILE: 'exportFile',
}

/** 固定第一题：工具列表 */
const PROMP_0 = {
	type: 'list',
	name: 'type',
	message: '请选择工具',
	default: 0,
}

module.exports = {
	TOOL,
	PROMP_0,
}
