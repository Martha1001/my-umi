const fs = require('fs')
const execa = require('execa')
const inquirer = require('inquirer')

/** tsconfig.json 配置 */
const FILE_TSCONFIG_JSON = `
{
  "compilerOptions": {
    "module": "commonjs",
    "target": "esnext",
    "outDir": "nodeTool/dist",
    "noImplicitAny": false,
    "sourceMap": true,
    "removeComments": true,
  },
  "include": ["nodeTool/**/*.ts"],
  "exclude": [
    "node_modules",
    "lib",
    "es",
    "dist",
    "typings",
    "**/__test__",
    "test",
    "docs",
    "tests"
  ]
}

`

/** 命令行参数 */
const ARGV = {
	/** 强制更新 */
	UPDATE: '--update',
}

/** tsconfig.json 路径 */
const PATH_TSCONFIG_JSON = 'tsconfig.nodeTool.json'
/** /dist 路径 */
const PATH_DIST = 'nodeTool/dist'
/** /utils 路径 */
const PATH_UTILS = './dist/utils'

/**
 * 创建 tsconfig.nodeTool.json 文件
 */
const existsTsconfig = ({ isUpdate }) => {
	const isExists = fs.existsSync(PATH_TSCONFIG_JSON)
	if (isUpdate || !isExists) {
		console.log(`【tsconfig】正在创建 ${PATH_TSCONFIG_JSON} 文件`)
		fs.writeFileSync(PATH_TSCONFIG_JSON, FILE_TSCONFIG_JSON)
		console.log(`【tsconfig】创建成功 '(•̀ᴗ•́)و ̑̑\n`)
	}
}

/**
 * 编译 ts 文件
 */
const existsDist = async ({ isUpdate }) => {
	const isExists = fs.existsSync(PATH_DIST)
	if (isUpdate || !isExists) {
		console.log('【dist】正在编译 ts 文件')
		await execa.command(`tsc -p ${PATH_TSCONFIG_JSON}`)
		console.log(`【dist】编译成功 '(•̀ᴗ•́)و ̑̑\n`)
	}
}

/**
 * 触发提问
 */
const runInquirer = async () => {
	const utils = require(PATH_UTILS)
	const answers = await inquirer.prompt(utils.createPrompt())
	utils.onHandle(answers)
}

;(async () => {
	const argv = process.argv.splice(2) || []
	const isUpdate = argv.includes(ARGV.UPDATE)
	await existsTsconfig({ isUpdate })
	await existsDist({ isUpdate })
	await runInquirer()
})()
