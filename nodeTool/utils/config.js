const execa = require('execa')
const { TOOL } = require('./constants')

/**
 * 一键导出文件
 * @param choice 问题 0 的选项
 * @param prompts 需要追加的问题
 * @param handle 回调处理
 */
const exportFile = {
	choice: { name: '一键导出文件', value: TOOL.EXPORT_FILE },
	prompts: [
		{
			when: ({ type }) => type === TOOL.EXPORT_FILE,
			type: 'input',
			name: 'folderPath',
			message: '请输入目标路径',
		},
		{
			when: ({ type }) => type === TOOL.EXPORT_FILE,
			type: 'input',
			name: 'fileName',
			message: '请输入文件名',
			default: 'index.ts',
		},
	],
	handle: ({ folderPath, fileName }) => {
		if (!folderPath) {
			return console.log('\n【error】未获取到目标路径\n')
		}
		const command = `node ./nodeTool/tools/exportFile ${folderPath} ${fileName}`
		execa.command(command).then(res => {
			console.log(res.stdout)
		})
	},
}

module.exports = {
	exportFile,
}
