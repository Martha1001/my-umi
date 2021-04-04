const inquirer = require('inquirer')
const utils = require('./utils/index')

inquirer.prompt(utils.createPrompt()).then(answers => {
	// console.log('answers =>', answers)
	utils.onHandle(answers)
})
