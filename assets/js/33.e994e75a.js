(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{461:function(t,s,a){"use strict";a.r(s);var n=a(27),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"使用-css-栅格和-flexbox-打造-trello-布局"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-css-栅格和-flexbox-打造-trello-布局"}},[t._v("#")]),t._v(" 使用 CSS 栅格和 Flexbox 打造 Trello 布局")]),t._v(" "),a("blockquote",[a("ul",[a("li",[t._v("原文地址："),a("a",{attrs:{href:"https://www.sitepoint.com/building-trello-layout-css-grid-flexbox/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Building a Trello Layout with CSS Grid and Flexbox"),a("OutboundLink")],1)])])]),t._v(" "),a("p",[t._v("通过本教程，我将带你完成 "),a("a",{attrs:{href:"https://trello.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Trello"),a("OutboundLink")],1),t._v(" 看板 ("),a("a",{attrs:{href:"https://trello.com/b/nC8QJJoZ/trello-development-roadmap",target:"_blank",rel:"noopener noreferrer"}},[t._v("查看示例"),a("OutboundLink")],1),t._v(")的基本布局。这是一个响应式的、纯 CSS 的解决方案，并且我们将只开发布局的结构特性。")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://codepen.io/SitePoint/pen/brmXRX?editors=0100",target:"_blank",rel:"noopener noreferrer"}},[t._v("这是一个 CodePen demo"),a("OutboundLink")],1),t._v("，可预览一下最终结果。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2017/08/1504250645trello-screen.png",alt:""}})]),t._v(" "),a("p",[t._v("除了"),a("a",{attrs:{href:"https://www.sitepoint.com/introduction-css-grid-layout-module/",target:"_blank",rel:"noopener noreferrer"}},[t._v("栅格布局"),a("OutboundLink")],1),t._v("和 "),a("a",{attrs:{href:"https://www.sitepoint.com/flexbox-css-flexible-box-layout/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Flexbox"),a("OutboundLink")],1),t._v("，这个方案还采用了 "),a("a",{attrs:{href:"https://www.sitepoint.com/css3-calc-function/",target:"_blank",rel:"noopener noreferrer"}},[t._v("calc"),a("OutboundLink")],1),t._v(" 和"),a("a",{attrs:{href:"https://www.sitepoint.com/css-viewport-units-quick-start/",target:"_blank",rel:"noopener noreferrer"}},[t._v("视图单位"),a("OutboundLink")],1),t._v("。我们也将利用 "),a("a",{attrs:{href:"http://sass-lang.com/documentation/file.SASS_REFERENCE.html#variables_",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sass 变量"),a("OutboundLink")],1),t._v("，让代码更可读和高效。")]),t._v(" "),a("p",[t._v("不提供向下兼容，所以请确保在支持的浏览器上运行。一切就绪，就让我们开始一步一步开发看板组件吧。")]),t._v(" "),a("h2",{attrs:{id:"屏幕布局"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#屏幕布局"}},[t._v("#")]),t._v(" 屏幕布局")]),t._v(" "),a("p",[t._v("一个 Trello 看板由一个 app 栏、一个 board 栏和一个包含卡片列表的部分组成。我使用以下标签骨架搭建出这一结构：")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("ui"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("nav")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("navbar app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("..."),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("nav")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("nav")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("navbar board"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("..."),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("nav")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("lists"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("header")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("..."),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("header")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ul")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("li")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("..."),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("li")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        ...\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("li")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("..."),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("li")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ul")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("footer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("..."),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("footer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("这个布局将通过 CSS 栅格实现。确切地说是 3×1 栅格（就是指一列三行）。第一行用于 app 栏，第二行用于 board 栏，第三行用于 "),a("code",[t._v(".lists")]),t._v(" 元素。")]),t._v(" "),a("p",[t._v("前两行各自有一个固定的高度，而第三行将撑起可变窗口高度的其余部分：")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".ui")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100vh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" grid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-template-rows")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $appbar-height $navbar-height 1fr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("视图单位可以确保 "),a("code",[t._v(".ui")]),t._v(" 容器总是和浏览器的窗口高度一致。")]),t._v(" "),a("p",[t._v("一个栅格化的上下文被分配给容器，并且指定了上文说的行和列。确切地说，是只指定了行，因为声明单独的列是没有必要的。一对 Sass 变量指定了两个栏目的高度，使用 "),a("code",[t._v("fr")]),t._v(" 单位指定 "),a("code",[t._v(".lists")]),t._v(" 元素高度使其撑起可变窗口高度的其余部分，这样每行的大小就设定完成了。")]),t._v(" "),a("h2",{attrs:{id:"卡片列表部分"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#卡片列表部分"}},[t._v("#")]),t._v(" 卡片列表部分")]),t._v(" "),a("p",[t._v("如上所述，屏幕栅格的第三行托管着卡片列表的容器。这是标签的轮廓：")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("lists"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    ...\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  ...\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    ...\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("我用一个满屏宽的 Flexbox 单行行容器来格式化列表：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(".lists {\n  display: flex;\n  overflow-x: auto;\n  > * {\n    flex: 0 0 auto; // 'rigid' lists\n    margin-left: $gap;\n  }\n  &::after {\n    content: '';\n    flex: 0 0 $gap;\n  }\n}\n")])])]),a("p",[t._v("给 "),a("code",[t._v("overflow-x")]),t._v(" 指定 auto 值，当列表不适合视口提供的宽度时，浏览器会在屏幕底部显示一个水平滚动条。")]),t._v(" "),a("p",[a("code",[t._v("flex")]),t._v(" 简写属性用于 flex item 使列表更严格。"),a("code",[t._v("flex-basis")]),t._v(" （简写的方式使用）的 auto 值指示布局引擎从 "),a("code",[t._v(".list")]),t._v(" 元素的宽度属性取值，"),a("code",[t._v("flex-grow")]),t._v(" 和 "),a("code",[t._v("flex-shrink")]),t._v(" 的 0 值可以防止宽度的改变。")]),t._v(" "),a("p",[t._v("接下来我将在列表之间添加一个水平分隔。如果给列表设置右间距，当水平溢出时看板上最后一个列表之后的间距不会被渲染。为了解决这个问题，列表被一个左间距分隔并且最后一个列表和窗口右边缘的间距通过给每个 "),a("code",[t._v(".lists")]),t._v(" 元素添加一个伪元素 "),a("code",[t._v("::after")]),t._v(" 来实现。默认值 "),a("code",[t._v("flex-shrink: 1")]),t._v(" 一定要被重写，否则这个伪元素会”吸收“所有的负空间，然后消失。")]),t._v(" "),a("p",[t._v("注意在 Firefox < 54 的版本上要给 "),a("code",[t._v(".lists")]),t._v(" 指定 "),a("code",[t._v("width: 100%")]),t._v(" 以确保正确的布局渲染。")]),t._v(" "),a("h2",{attrs:{id:"卡片列表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#卡片列表"}},[t._v("#")]),t._v(" 卡片列表")]),t._v(" "),a("p",[t._v("每个卡片列表由一个 header 栏、一个卡片序列和一个 footer 栏目组成。以下 HTML 代码段实现了这一结构：")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("header")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("List header"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("header")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ul")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("li")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("..."),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("li")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    ...\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("li")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("..."),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("li")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ul")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("footer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Add a card..."),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("footer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("这里的关键任务是如何管理列表的高度。header 和 footer 有固定的高度(未必相等)。然后有一些不定数量的卡片，每个卡片都有不定量的内容。因此随着卡片的添加和移除，这个列表也会增大和缩小。")]),t._v(" "),a("p",[t._v("但是高度不能无限增大，它需要有一个取决于 "),a("code",[t._v(".lists")]),t._v(" 元素高度的上限。一旦突破上线，我想有一个垂直滚动条出现来允许访问溢出列表的卡片。")]),t._v(" "),a("p",[t._v("这听起来是 "),a("code",[t._v("max-height")]),t._v(" 和 "),a("code",[t._v("overflow")]),t._v(" 属性能做的。但如果根容器 "),a("code",[t._v(".list")]),t._v(" 提供了这些属性，一旦列表达到了它的最大高度，所有的 "),a("code",[t._v(".list")]),t._v(" 元素包括 header 和 footer 在内都会出现滚动条。下图左右两边分别显示错误的和正确的侧边条：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2017/08/1503994870wrong-right-sidebars.jpg",alt:""}})]),t._v(" "),a("p",[t._v("因此，让我们把 "),a("code",[t._v("max-height")]),t._v(" 约束给内部的 "),a("code",[t._v("<ul>")]),t._v("。应该提供什么值呢？header 和 footer 的高度必须从列表父容器("),a("code",[t._v(".lists")]),t._v(")的高度之中扣除：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("ul {\n  max-height: calc(100% - #{$list-header-height} - #{$list-footer-height});\n}\n")])])]),a("p",[t._v("但还有一个问题。百分比数值并不参照 "),a("code",[t._v(".lists")]),t._v(" 而是参照 "),a("code",[t._v("<ul>")]),t._v(" 元素的父元素  "),a("code",[t._v(".list")]),t._v("，并且这个元素没有定义高度，因此这个百分比不能确定。这个问题可以通过设置 "),a("code",[t._v(".list")]),t._v(" 和 "),a("code",[t._v(".lists")]),t._v(" 同样高度来解决：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(".list {\n  height: 100%;\n}\n")])])]),a("p",[t._v("这样，既然 "),a("code",[t._v(".list")]),t._v(" 和 "),a("code",[t._v(".lists")]),t._v(" 总是一样高，它的 "),a("code",[t._v("background-color")]),t._v(" 属性不能用于列表背景色，但可以使用它的子元素（header, footer 和卡片）来实现这一目的。")]),t._v(" "),a("p",[t._v("最后一个 list 高度的调整很有必要，可用来计算列表底部和窗口底部的一点空间（"),a("code",[t._v("$gap")]),t._v("）。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(".list {\n  height: calc(100% - #{$gap} - #{$scrollbar-thickness});\n}\n")])])]),a("p",[t._v("还有一个 "),a("code",[t._v("$scrollbar-thickness")]),t._v(" 需要被减去，防止列表触及 "),a("code",[t._v(".list")]),t._v(" 元素的水平滚动条。 事实上这个滚动条”增长“在 "),a("code",[t._v(".lists")]),t._v(" 盒子内部。也就是说，100% 这个值是指包括滚动条在内的 "),a("code",[t._v(".lists")]),t._v(" 的高度。")]),t._v(" "),a("p",[t._v("而在火狐中，这个滚动条被”附加“给 "),a("code",[t._v(".lists")]),t._v(" 高度的外部，就是说 "),a("code",[t._v(".lists")]),t._v(" 高度的 100% 并不包含滚动条。所以这个减法就没什么必要了。结果是当滚动条可见时，在火狐中已经触及最大高度的底部边框和滚动条的顶部之间的可视空间会稍大一些。")]),t._v(" "),a("p",[t._v("这是这个组件相应的 CSS 规则：")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".list")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $list-width"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(";\n  height: calc(100% - #")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("$gap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("- #")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("$scrollbar-thickness"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(";\n\n  > *")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $list-bg-color"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #333"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0 $gap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("header")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("line-height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $list-header-height"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 16px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-weight")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" bold"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-top-left-radius")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $list-border-radius"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-top-right-radius")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $list-border-radius"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("footer")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("line-height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $list-footer-height"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-bottom-left-radius")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $list-border-radius"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-bottom-right-radius")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $list-border-radius"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #888"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("ul")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("list-style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" none"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(";\n    max-height: calc(100% - #")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("$list-header-height"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("- #")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("$list-footer-height"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("overflow-y")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" auto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("如上所述，列表背景色通过给每一个 "),a("code",[t._v(".list")]),t._v(" 元素的子元素的 "),a("code",[t._v("background-color")]),t._v(" 属性指定 "),a("code",[t._v("$list-bg-color")]),t._v(" 值而被渲染。"),a("code",[t._v("overflow-y")]),t._v(" 使得卡片滚动条只有按需显示。最后，给 header 和 footer 添加一些简单的样式。")]),t._v(" "),a("h2",{attrs:{id:"完成收尾"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#完成收尾"}},[t._v("#")]),t._v(" 完成收尾")]),t._v(" "),a("p",[t._v("单个卡片包含的一个列表元素 HTML：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>\n")])])]),a("p",[t._v("卡片也有可能包含一个封面图片：")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("li")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("..."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("alt")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("..."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  Lorem ipsum dolor sit amet\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("li")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("这是相应的样式：")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("li")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #fff"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $gap"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(";\n\n  &:not(:last-child)")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin-bottom")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $gap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-radius")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $card-border-radius"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("box-shadow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0 1px 1px "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rgba")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0.1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(";\n\n  img")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" block"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(";\n    width: calc(100% + 2 * #")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("$gap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" -$gap 0 $gap "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("-$gap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-top-left-radius")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $card-border-radius"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-top-right-radius")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $card-border-radius"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("设置完一个背景、填充、和底部间距就差背景图片的布局了。这个图片宽度一定是跨越整个卡片的，从左填充的边缘到右填充的边缘：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("width: calc(100% + 2 * #{$gap});\n")])])]),a("p",[t._v("然后，指定负边距以使图片水平和垂直对齐：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("margin: -$gap 0 $gap (-$gap);\n")])])]),a("p",[t._v("第三个正边距的值用于指定封面图片和文字之间的空间。")]),t._v(" "),a("p",[t._v("最后我给占据屏幕布局第一行的两条添加了一个 flex 格式化上下文，但它们只是草图。通过"),a("a",{attrs:{href:"https://codepen.io/SitePoint/pen/brmXRX?editors=0100",target:"_blank",rel:"noopener noreferrer"}},[t._v("扩展 demo"),a("OutboundLink")],1),t._v(" 自由构建你自己的实现吧。")]),t._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("p",[t._v("这只是实现这种设计的一种可行方法，如果能看见其他方式那一定很有趣。此外，如果能完成整个布局那就更好了，比如完成最后的两个栏目。")]),t._v(" "),a("p",[t._v("另一个潜在的改进是能够为卡片列表实现自定义的滚动条。")]),t._v(" "),a("p",[t._v("所以，"),a("a",{attrs:{href:"https://codepen.io/SitePoint/pen/brmXRX?editors=0100",target:"_blank",rel:"noopener noreferrer"}},[t._v("fork 这个 demo"),a("OutboundLink")],1),t._v(" 尽情发挥吧，记得在下面的讨论区留下你的链接哦。")])])}),[],!1,null,null,null);s.default=e.exports}}]);