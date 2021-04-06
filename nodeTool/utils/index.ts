import { TOOL, PROMP_0 } from '../constants'
import * as config from '../config'

/** 生成问题列表 */
export const createPrompt = () => {
	const choices: any[] = []
	let prompts: any[] = []
	Object.keys(TOOL).map(t => {
		const toolType = TOOL[t]
		const _config = config[toolType]
		if (!_config) {
			return console.log(`\n【err】未获取到 ${toolType} 配置\n`)
		}
		choices.push(_config.choice)
		prompts = [...prompts, ..._config.prompts]
	})
	return [{ ...PROMP_0, choices }, ...prompts]
}

/**
 * 问题回调处理
 * @param answers 答案
 */
export const onHandle = answers => {
	const type = answers[PROMP_0.name]
	const _config = config[type]
	if (!_config) {
		return console.log(`\n【err】未获取到 ${type} 配置\n`)
	}
	config[type].handle(answers)
}
