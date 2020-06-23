# 规范

## 命名

组件的命名需遵从以下原则：

* 有意义的: 不过于具体，也不过于抽象
* 简短: 2 到 3 个单词
* 具有可读性: 以便于沟通交流 

<b>注意：组件命名必须符合自定义元素规范</b>

### 命名切勿使用保留字

1. 组件命名不能和模板中 `html` 标签重名如 `header`，模板中的标签名不能与 Vue 保留的 `slot`、`partial`、`component` 重名     

1. 定义 `data` 对象不能跟 `props`、`methods` 方法、`computed` 方法重名

### 组件名为多个单词，根组件 `App` 除外

这样做可以避免跟现有的以及未来的 `HTML` 元素相冲突，因为 `HTML` 元素名称都是单个单词的。

正例：       
```javascript
export default {  
    name: 'TodoItem',  
}  
```

反例： 
 ```javascript
export default {  
    name: 'Todo',  
}   
```

### 单文件组件的文件名要以单词大写开头 (PascalCase)  

单词大写开头对于代码编辑器的自动补全较为友好，使得在 JS(X) 和模板中引用组件的方式尽可能的一致。

正例： 
``` 
components/  
|- MyComponent.vue  
```

反例：
```
components/  
|- myComponent.vue  
|- mycomponent.vue  
```

### 基础组件名
应用特定样式和约定的基础组件 (也就是展示类的、无逻辑的或无状态的组件) 应该全部以一个特定的前缀开头，比如 `Base`、`App` 或 `V` 

正例： 
```
components/  
|- BaseButton.vue  
|- BaseTable.vue  
|- BaseIcon.vue  
```
反例： 
```
components/  
|- MyButton.vue  
|- VueTable.vue  
|- Icon.vue  
```

### 组件名应该倾向于完整单词而不是缩写  

正例：  
```
components/  
|- StudentDashboardSettings.vue  
|- UserProfileOptions.vue  
```

反例：  
```
components/  
|- SdSettings.vue  
|- UProfOpts.vue 
```

### `Prop` 名大小写
在声明 `prop` 的时候，其命名应该始终使用 camelCase，而在模板和 `JSX` 中应该始终使用 kebab-case

正例：  
```jsx
props: {
    greetingText: String
}
<WelcomeMessage greeting-text="hi"/>
```

反例：  
```jsx
props: {
    'greeting-text': String
}
<WelcomeMessage greetingText="hi"/>
```

### 私有属性名
在插件、混入等扩展中始终为自定义的私有属性使用 `$_` 前缀。并附带一个命名空间以回避和其它开发者的冲突

Vue 使用 `_` 前缀来定义其自身的私有属性，所以使用相同的前缀 (比如 `_update`) 有覆写实例属性的风险。

对于 `$` 前缀来说，其在 Vue 生态系统中的目的是暴露给用户的一个特殊的实例属性，所以把它用于私有属性并不合适。推荐把这两个前缀结合为 `$_`，作为一个用户定义的私有属性的约定，以确保不会和 Vue 自身相冲突

正例：
      
```javascript
var myGreatMixin = {
    methods: {
        $_myGreatMixin_update: function () {
        }
    }
}    
```

反例：  
```javascript
var myGreatMixin = {
    methods: {
        _update: function () {
        }
    }
}

var myGreatMixin = {
    methods: {
        $update: function () {
        }
    }
}

var myGreatMixin = {
    methods: {
        $_update: function () {
        }
    }
}
```

## 模板

### 为 `v-for` 设置键值  

当 Vue.js 用 `v-for` 正在更新已渲染过的元素列表时，它默认用“就地复用”策略。为了给 Vue 一个提示，以便它能跟踪每个节点的身份，从而重用和重新排序现有元素，你需要为每项提供一个唯一 `key` 属性。

```html
<!-- bad -->
<ul>
    <li v-for="todo in todos">
      {{ todo.text }}
    </li>
</ul>

<!-- good -->
<ul>
    <li
      v-for="todo in todos"
      :key="todo.id"
    >
      {{ todo.text }}
    </li>
</ul>
```

### 避免 `v-if` 和` v-for` 用在一起 
 
永远不要把 `v-if` 和 `v-for` 同时用在同一个元素上。
  * 为了过滤一个列表中的项目 (比如 `v-for="user in users" v-if="user.isActive"`)。在这种情形下，请将 `users` 替换为一个计算属性 (比如 `activeUsers`)，让其返回过滤后的列表。
  * 为了避免渲染本应该被隐藏的列表 (比如 `v-for="user in users" v-if="shouldShowUsers"`)。这种情形下，请将 `v-if` 移动至容器元素上 (比如 ul, ol)。

```html
<!-- bad -->
<ul>  
    <li  
      v-for="user in users"  
      v-if="shouldShowUsers"  
      :key="user.id"  
    >  
      {{ user.name }}  
    </li>  
</ul >   

<!-- good -->
<ul v-if="shouldShowUsers">    
      <li    
        v-for="user in users"    
        :key="user.id" 
      >    
        {{ user.name }}    
    </li>    
</ul> 
```

### `Prop` 定义

`prop` 的定义应该尽量详细，至少需要指定其类型    
详细的 `prop` 定义有两个好处：
* 它们写明了组件的 `API`，所以很容易看懂组件的用法；
* 在开发环境下，如果向一个组件提供格式不正确的 `prop`，Vue 将会告警，以帮助你捕获潜在的错误来源。

```javascript
// bad
props: ['status']

// good
props: {
    status: String
}

// better
props: {
    status: {
        type: String,
        required: true,
        validator: function (value) {
            // ...
        }
    }
}
```

### 模板中使用简单的表达式  

组件模板应该只包含简单的表达式，复杂的表达式则应该重构为计算属性或方法。  
复杂表达式会让你的模板变得不那么声明式。我们应该尽量描述应该出现的是什么，而非如何计算那个值。而且计算属性和方法使得代码可以重用。  

```javascript
// bad
{{    
    fullName.split(' ').map(function (word) {    
      return word[0].toUpperCase() + word.slice(1)  
    }).join(' ')  
}}  

// good
{{ normalizedFullName }}  

// 复杂表达式移入一个计算属性
computed: {  
    normalizedFullName: function () {    
      return this.fullName.split(' ').map(function (word) {    
        return word[0].toUpperCase() + word.slice(1)    
      }).join(' ')    
    }    
}  
```

## Vuex

1. 应用层级的状态应该集中到 Store 对象中

1. 提前在 Store 中初始化所有所需属性

1. 更改 Store 中的状态的唯一方法是提交 mutation，mutation 必须是同步函数，异步逻辑应该封装在 action 中

1. 当应用状态比较复杂时，可以将 Store 分割成模块（module）。每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块。

```javascript
const moduleA = {
    state: { ... },
    mutations: { ... },
    actions: { ... },
    getters: { ... }
}

const moduleB = {
    state: { ... },
    mutations: { ... },
    actions: { ... }
}

const store = new Vuex.Store({
    modules: {
        a: moduleA,
        b: moduleB
    }
})

store.state.a  // -> moduleA 的状态
store.state.b  // -> moduleB 的状态
```

### 项目结构

当store文件太大时，将action、mutation 和 getter 分割到单独的文件

```
..src/
├── App.vue
├── main.js
├── api
│   └── ... # 抽取出API函数
├── components
│   ├── header.vue
│   └── ...
└── store
    ├── index.js          # 组装模块并导出 store
    ├── actions.js        # 根级别的 action
    ├── mutations.js      # 根级别的 mutation
    └── modules
        ├── moduleA.js    # 模块A
        └── moduleB.js    # 模块B
```

### 推荐

使用常量替代 Mutation 事件类型  

   对于小项目来说，使用单独的模块或文件来定义 action types 常量不是必须的。但是在大型项目中显式地定义成常量还是利大于弊。将 action types 定义为常量有如下好处：

   1. 帮助维护命名一致性，因为所有的 action type 汇总在同一位置 

   1. 在开发一个新功能之前你想看到所有现存的 actions 。而你的团队里可能已经有人添加了你所需要的action，而你并不知道
    
   1. Action types 列表在 Pull Request 中能查到所有添加，删除，修改的记录。这能帮助团队中的所有人及时追踪新功能的范围与实现

   1. 如果在 import 一个 Action 常量的时候拼写错了，你会得到 undefined 。在 dispatch 这个 action 的时候，会立即抛出这个错误，你也会马上发现错误

   同时把这些常量放在单独的文件中可以让你的代码合作者对整个 app 包含的 mutation 一目了然：

```javascript
// mutation-types.js
export const SOME_MUTATION = 'SOME_MUTATION'

// store.js
import Vuex from 'vuex'
import { SOME_MUTATION } from './mutation-types'
const store = new Vuex.Store({
    state: { ... },
    mutations: {
        // 我们可以使用 ES2015 风格的计算属性命名功能来使用一个常量作为函数名
        [SOME_MUTATION] (state) {
            // mutate state
        }
    }
})
```