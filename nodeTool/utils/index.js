const { TOOL, PROMP_0 } = require('./constants')
const config = require('./config')

/** 生成问题列表 */
const createPrompt = () => {
	const choices = []
	let prompts = []
	Object.keys(TOOL).map(t => {
		const toolType = TOOL[t]
		const _config = config[toolType]
		choices.push(_config.choice)
		prompts = [...prompts, ..._config.prompts]
	})
	return [{ ...PROMP_0, choices }, ...prompts]
}

/**
 * 获取处理函数
 * @param type 工具类型
 */
const onHandle = answers => {
	const type = answers[PROMP_0.name]
	config[type].handle(answers)
}

module.exports = {
	createPrompt,
	onHandle,
}
