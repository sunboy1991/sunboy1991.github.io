# 规范

HTML 代码书写风格应该保持一致，容易被理解和被维护。
遵循最小标签量，最少复杂度原则。

### 风格

1. 缩进使用 tab（2 个空格）
2. 嵌套节点需要缩进
3. 标签属性使用双引号，不用单引号
4. 标签、属性名全部小写
5. 自闭合标签需要在结尾处添加 / （如 < img /> ）

### doctype

html 文档第一行需要添加

```html
<!DOCTYPE html>
```

### lang

"应在html标签上加上lang属性。这会给语音工具和翻译工具帮助，告诉它们应当怎么去发音和翻译。"

参照 
- [w3 lang](http://www.w3.org/html/wg/drafts/html/master/semantics.html#the-html-element)
- [语言 sitepoint 列表](https://www.sitepoint.com/iso-2-letter-language-codes/)

### 字符编码

如无特殊要求，统一使用 utf-8

```html
<meta charset="UTF-8">
```

### 资源引用

资源不指定其 charset 属性，跟随页面即可

* link

引用 CSS 资源不需要声明其 type，text/css 是其默认值

* script

引用 JS 脚本（es5,es3）资源不需要声明其 type，text/javascript 是其默认值，如果资源是模块或者自定义语法等，则需要声明 type

### 语义化

标签使用必须符合标签嵌套规则

* HTML 标签的使用应该遵循标签的语义

eg.

|   p  | 段落 |
|:--------:|:-------:|
| h1,h2,h3,h4,h5,h6 | 层级标题 |
| strong,em | 强调 |
| ins  | 插入 |
| del  | 删除 |
| abbr | 缩写 |
| code | 代码标识 |
| cite | 引述来源作品的标题 |
| q  | 引用 |
| blockquote  | 一段或长篇引用 |
| ul | 无序列表 |
| ol | 有序列表 |
|dl,dt,dd  | 定义列表 |


