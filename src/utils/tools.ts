export const getJson = (text: string) => {
	try {
		return JSON.parse(text)
	} catch (e) {
		console.error('getJson =>', e)
	}
}
export const setJson = (value: any) => {
	try {
		return JSON.stringify(value)
	} catch (e) {
		console.error('setJson =>', e)
	}
}
