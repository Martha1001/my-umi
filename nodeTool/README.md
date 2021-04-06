# node 工具合集 (●’◡’●)ﾉ

## 运行
package.json 新增 scripts: { "tool": "node nodeTool -- --update强制更新" }
npm i inquirer execa -D
npm run tool

## 文件概述
nodeTool/tools 具体运行的 node 工具函数
nodeTool/utils/constants 项目常量
nodeTool/utils/config 使用配置

## 新增工具
1. nodeTool/tools 新增工具函数
2. nodeTool/utils/constants 扩展 TOOL 枚举值
3. nodeTool/utils/config 新增使用配置（需使用 TOOL 内枚举值做为对象名）

## npm 依赖
[inquirer 命令行交互工具](https://github.com/SBoudrias/Inquirer.js#readme)
[execa 调用shell/本地外部程序的javascript封装](https://github.com/sindresorhus/execa#readme)
