/**
 * @see https://umijs.org/zh-CN/plugins/plugin-access
 */
export default function (initialState = {} as any) {
	console.log('access.ts =>', initialState)

	// const { isAdmin, isUser, canEdit } = initialState

	return {
		...initialState,
	}
}
