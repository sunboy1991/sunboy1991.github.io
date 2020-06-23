# 使用 pre-commit 在 git 提交前测试

pre-commit 工具 [官方文档](https://github.com/observing/pre-commit)

## 快速使用

1. 安装

```sh
npm install pre-commit -D
```

2. 修改 package.json 文件，如一个提交前格式化的例子：

```json
"scripts": {
  "prettier": "prettier --write --print-width 100 --tab-width 2 --no-semi \"./src/**/*.js\" \"**/*.vue\" \"**/*.ts\""
},
"pre-commit": [
  "prettier"
],

```

