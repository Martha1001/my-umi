/**
 * waitTime
 *
 * @param time 延迟时间[毫秒]
 */
export const waitTime = (time: number = 2e3) => new Promise(resolve => setTimeout(() => resolve(true), time))

/**
 * 获取对象的属性值
 *
 * @param obj 对象 eg: {a: {b: {c: 1}}}
 * @param keyString 属性字符串 eg: 'a.b.c'
 */
export const getStringAttribute = (object: any, string: string) => {
	const keys = string?.split('.') || []
	let out
	keys.find((k, i) => {
		out = i === 0 ? object?.[k] : out?.[k]
		return !out
	})
	return out
}
