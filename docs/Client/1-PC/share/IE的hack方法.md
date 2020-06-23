# IE的hack方法

## HTML hack

IE9 以下不支持 HTML5 新增的语义化标签，IE9 以上也是部分支持。[参考caniuse](https://www.caniuse.com/#search=html5)

针对 IE 浏览器，可结合条件注释引入 `html5shiv.js` 文件。`html5shiv.js` 是一个针对 IE 浏览器的 `HTML5 JavaScript` 补丁，目的是让 IE 识别并支持 HTML5 元素。

```html
<!-- IE9 以下版本的IE浏览器会引入html5shiv.js -->
<!--[if lt IE9]>
    <script src="https://cdn.bootcss.com/html5shiv/3.7.2/html5shiv.js"></script>
<![endif]-->
```

条件注释是 IE 浏览器特有的 hack 方式，用法如下：

```html
<!--[if !IE]> 除IE外都可识别 <![endif]-->

<!--[if IE]> 所有的IE可识别 <![endif]-->

<!--[if IE 6]> 仅IE6可识别 <![endif]-->

<!--[if lt IE 6]> IE6以及IE6以下版本可识别 <![endif]-->

<!--[if gte IE 6]> IE6以及IE6以上版本可识别 <![endif]-->
```

符号解释：

* `!`(非)：`[if !IE]`
 
* `lt`(小于)：`[if lt IE 6]`
 
* `lte`(小于或等于)：`[if lte IE 6]`
 
* `gt`(大于)：`[if gt IE 8]`
 
* `gte`(大于或等于)：`[if gte IE 9]`
 
* `&`(与)：`[if (gt IE 6)&(lt IE 8)]`
 
* `|`(或)：`[if (IE 6)|(IE 7)]`

## CSS hack

### 属性兼容

```css
/* IE6 */
Selector { _property: value; } 
Selector { -property: value; }

/* 兼容IE6、7 */
Selector { *property: value; }
Selector { #property: value; }
Selector { +property: value; }

/* IE8 */
Selector { property: value\0; }

/* IE9 */
Selector { property: value\9\0; }
```

符号说明：

* `-` IE6 专有的 hack
 
* `\9` IE6/7/8/9/10 都生效
 
* `\0` IE8/9/10 都生效，是IE8/9/10 的 hack
 
* `\9\0` 只对 IE9/10 生效，是 IE9/10 的 hack

**注意：给同一个元素设置的兼容写法必须写在后面，否则会被层叠掉**

### 样式兼容

```css
/* opacity 兼容 */
.opacity{
    opacity: 0.5; /* 支持opacity的浏览器*/
    filter:alpha(opacity=50); /* IE */
}

/* rgba 兼容*/
.rgba{
    background:rgba(0,0,0,0.5);
    filter:progid:DXImageTransform.Microsoft.gradient(startcolorstr=#7F000000,endcolorstr=#7F000000);
}
```

常用的`rgba` 和 IE下 `filter` 数值的转换：

| rgba透明度值 | IE filter值 |
| :----------: | :---------: |
|     0.1      |     19      |
|     0.2      |     33      |
|     0.3      |     4C      |
|     0.4      |     66      |
|     0.5      |     7F      |
|     0.6      |     99      |
|     0.7      |     B2      |
|     0.8      |     C8      |
|     0.9      |     E5      |

## JS hack

js检测浏览器类型：

```js
var isIE= !!window.ActiveXObject || navigator.appName === "Microsoft Internet Explorer";

if(isIE && navigator.appVersion.match(/6./i) === "6."){ 
	alert('IE 6'); 
} 
else if(isIE && navigator.appVersion.match(/7./i) === "7."){ 
	alert('IE 7'); 
}
...
```

## Q&A

1. swiper3.0 以上不支持 IE9？
  
* IE9 不支持 `transform` 等 CSS3 变换属性，换swiper2.*版本，或者换插件。

2. IE不支持 ES5 API？

* 引入 [babel-polyfill](https://www.npmjs.com/package/@babel/polyfill) 或对应 API 补丁

