const fs = require('fs')

/**
 * 一键生成汇总导出文件
 * node [exportFile.js] [folderPath] [fileName]?
 */
;(() => {
	try {
		console.log('\n=============== exportFile begin ===============\n')
		const [folderPath, fileName = 'index.ts'] = process.argv.splice(2)
		if (!folderPath) {
			return console.log('err => 未获取到 path（相对路径）')
		}
		const _fileName = fileName.includes('.ts') ? fileName : `${fileName}.ts`
		const relativePath = `./${folderPath}`
		const exportFilePath = `${relativePath}/${_fileName}`
		const exportList = []
		let writeStr = ''
		const firstUpperCase = s => s.replace(/^\S/, s => s.toUpperCase())
		const isEffectiveFile = dir => dir !== _fileName && dir.includes('.') && dir.indexOf('.') !== 0
		const imgFolders = ['img', 'image']
		const isImgFolder = imgFolders.some(f => relativePath.includes(f))
		const readDir = fs.readdirSync(relativePath) || []

		// import
		readDir.sort().map(dir => {
			if (!isEffectiveFile(dir)) {
				return
			}
			const dirList = dir.split('.')
			dirList.pop()
			const fullPath = dirList.join('.')
			const isTsxFolder = dirList[1] === 'tsx'
			const fullName = dirList.map(d => (isTsxFolder ? firstUpperCase(d) : d)).join('')
			const sourceFile = fs.readFileSync(`${relativePath}/${dir}`, 'utf-8')
			// 移除注释文本
			const regNotes = /("([^\\\"]*(\\.)?)*")|('([^\\\']*(\\.)?)*')|(\/{2,}.*?(\r|\n|$))|(\/\*(\n|.)*?\*\/)/g
			const file = sourceFile.replace(regNotes, word => (/^\/{2,}/.test(word) || /^\/\*/.test(word) ? '' : word))
			// 导出逻辑处理
			const getExportType = k => file.includes(`export ${k}`)
			const isExportDefault = getExportType('default')
			const types = ['const', 'class', 'interface', 'enum']
			const exportTypes = types.map(t => getExportType(t))
			if (isImgFolder || (isExportDefault && exportTypes.every(e => !e))) {
				// 图片导出 or 仅默认导出
				exportList.push([fullName])
				writeStr += `import ${fullName} from './${isImgFolder ? dir : fullPath}'\n`
			} else {
				// 其他导出
				const regStrList = [
					'export const (\\S*) =',
					'export const (\\S*):',
					'export class (\\S*) =',
					'export interface (\\S*) {',
					'export interface (\\S*) extends',
					'export type (\\S*) =',
					'export enum (\\S*) {',
				]
				const regStr = regStrList.join('|')
				const reg = eval(`/${regStr.substring(0, regStr.length - 1)}/g`)
				const matchList = [...file.matchAll(reg)].map(match => {
					let _match
					regStrList.some((_, i) => match[i + 1] && (_match = match[i + 1]))
					return _match
				})
				if (!matchList.length) {
					return
				}
				const aliasList = []
				const exportItemList = matchList.map(match => {
					let alias = match
					if (`${exportList.join()},`.includes(`${match},`)) {
						match = fullName + firstUpperCase(match)
						alias = `${alias} as ${match}`
					}
					aliasList.push(alias)
					return match
				})

				isExportDefault ? exportList.push([fullName, ...exportItemList]) : exportList.push(exportItemList)
				writeStr += `import ${isExportDefault ? `${fullName}, ` : ''}{ ${aliasList.join(', ')} } from './${fullPath}'\n`
			}
			// console.log('file =>', dir)
		})
		if (!writeStr) {
			console.log('[失败]', '未发现可导出内容 Σ(っ°Д°)っ')
			return console.log('\n================ exportFile end ================\n')
		}
		// export
		writeStr += '\nexport {\n'
		exportList.map(item => {
			writeStr += item.length === 0 ? `  ${item.join()}\n` : `  ${item.join(', ')},\n`
		})
		writeStr += '}\n'

		// write
		fs.writeFileSync(exportFilePath, writeStr)
		console.log('[成功] =>', exportFilePath, '(•̀ᴗ•́)و ̑̑')
		console.log('\n================ exportFile end ================\n')
	} catch (err) {
		console.log('exportFile err =>', err)
	}
})()
