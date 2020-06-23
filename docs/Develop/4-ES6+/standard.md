# 规范

ES6 代码风格应该保持一致，容易被理解和被维护。

### 通用

* 声明式原则

* 最少复杂度原则

* 最少全局变量原则

* 最大复用原则

* 必要注释

### 风格

1. 缩进使用 tab（2 个空格），不混用tab和space
2. 结尾不需要加分号 ;
3. 空格添加遵循社区风格，语句、代码块适当留空使其易读美观
4. If 语句不缩写，必须有大括号
5. 字符串使用单引号包裹

### 命名

编码命名：

> * 驼峰式命名
> * 有意义的单词
> * 类首字母大写
> * 常量全大写，用下划线连接
> * 对象，数组，字符串，数字，函数，布尔，特殊对象如 undefined null NaN 可不使用前缀, Symbol ，dom元素，日期，正则要加前缀


```javascript
function getName(){
  ...
}

let el_article = document.getElementById('article');
let $article = document.getElementById('article');

const RegExp_URL = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/;
const Date_now = new Date();
```

JS 文件命名：

> * 逻辑内容，全部小写，使用编码命名
> * 视图组件相关使用驼峰式，首字母大写
> * 类库相关使用 . 进行间隔

