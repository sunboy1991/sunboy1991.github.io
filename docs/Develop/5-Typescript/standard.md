# 规范

## 项目规范

## 编码规范

采用社区推荐规范：

### tslint-eslint-rules

1. 安装

```sh
npm install --save-dev tslint-eslint-rules
```

2. 在 tslint.json 文件追加

```json
{
  "rules": {
    "no-constant-condition": true
  },
  "rulesDirectory": [
    "node_modules/tslint-eslint-rules/dist/rules"
  ]
}
```

### tslint-config-standard

工具库推荐使用

1. 安装

```sh
npm install tslint-config-standard --save-dev
```

2. 在 tslint.json 文件追加

```json
{
  "extends": "tslint-config-standard",
  "rules": {
    "space-before-function-paren": false
  }
}
```

## 测试规范

* 公共库

1. 通过 tslint 校验通过
2. 通过单元测试，覆盖率不低于 90%

* 维护型

1. 通过 tslint 校验通过
2. 通过集成测试



## 提交规范

TS 项目的提交前需要通过 pre-commit 脚本进行测试，提交前测试工具

参见 - [使用 pre-commit 在 git 提交前测试](../../../Engineering/4-测试工具/使用pre-commit在git提交前测试.md)

## tslint 规则

参见 - [tslint-eslint-rules 规则字典](./tslint-eslint-rules规则字典.md)