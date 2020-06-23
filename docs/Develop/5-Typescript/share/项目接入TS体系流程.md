# 项目接入TS体系流程

## 快速使用 TS

1. 全局安装 TS

```sh
npm install -g typescript
```

2. 书写 ts 文件

在文件夹新建 greeter.ts  文件，内容如下：

```typescript
class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Jane", "M.", "User");

document.body.innerHTML = greeter(user);
```

3. 构建代码

```sh
tsc greeter.ts
```

## Vue 项目接入 TS

参见 - [Vue 项目接入 TS](./Vue项目接入TS.md)

## React 项目接入 TS

参见 - [React 项目接入 TS](./React项目接入TS.md)

## Nodejs 项目使用 TS

参见 - [Nodejs 项目使用 TS](./Nodejs项目使用TS.md)

## 公共库接入 TS

参见 - [公共库如何使用 TS](./公共库如何使用TS.md)


