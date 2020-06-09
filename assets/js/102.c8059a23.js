(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{560:function(t,s,a){"use strict";a.r(s);var e=a(27),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"react视图页面构建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react视图页面构建"}},[t._v("#")]),t._v(" react视图页面构建")]),t._v(" "),a("p",[t._v("同样的，页面基本上也是业务给我们拆分好的。"),a("br"),t._v("\n我们要做的，就是规划好这个页面的路由与路由上面的参数，这个往往跟业务关系很大，有时候其他业务会跳转到你写的页面里面来，如果你把路由的含义写得清楚，把路由参数写得明白，那么开发其他业务的小伙伴就会一下子明白如何针对你的路由进行写跳转。其次就是写好这个页面的 UI，原原本本还原设计稿。最后就是处理页面事件逻辑，处理用户交互，完成业务逻辑。")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PGameList")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("React"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Component")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"PGameList"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("header "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("section "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("footer "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("注意一下页面的根"),a("code",[t._v("<div>")]),t._v("标签上有个 id，id 的值与类名的值一样。因为路由是唯一的，页面也是唯一的，所以，这个 id 也将会是唯一的。除了标识页面之外，这个 id 也非常适合在 css 选择器当中使用，特别是当选择器层数一样，带有 id 的选择器优先级比类名的优先级高，有利于构建页面私有样式以及防止 css 样式污染。")]),t._v(" "),a("p",[t._v("一个简单的页面目录大致如下：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("Game \t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 游戏模块目录")]),t._v("\n│    index.js \t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 模块入口文件，分发子路由")]),t._v("\n├─── List \t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 游戏列表页目录")]),t._v("\n│         index.js  \t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 游戏列表页文件")]),t._v("\n├─── Detail \t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 游戏详情页目录")]),t._v("\n│         index.js  \t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 游戏列表页文件")]),t._v("\n└─── Comment \t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 游戏评论页目录")]),t._v("\n          index.js  \t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 游戏列表页文件")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);