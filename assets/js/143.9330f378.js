(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{525:function(s,t,a){"use strict";a.r(t);var e=a(27),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"最佳实践"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最佳实践"}},[s._v("#")]),s._v(" 最佳实践")]),s._v(" "),a("h2",{attrs:{id:"使用webgl的场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用webgl的场景"}},[s._v("#")]),s._v(" 使用webgl的场景")]),s._v(" "),a("p",[s._v("一般情况下，普通的业务中很少有特别需要使用webgl的场景，除非以下几种情况，建议使用webgl开发：")]),s._v(" "),a("ul",[a("li",[s._v("3D显示")]),s._v(" "),a("li",[s._v("粒子动画中，粒子数量大于1000个，且渲染有卡顿时")]),s._v(" "),a("li",[s._v("一些简单的特效，但canvsa2D或者css3动画无法实现时")]),s._v(" "),a("li",[s._v("无引擎小游戏")]),s._v(" "),a("li",[s._v("需要遍历像素或者直接更改像素值时")])]),s._v(" "),a("h2",{attrs:{id:"相关webgl库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相关webgl库"}},[s._v("#")]),s._v(" 相关webgl库")]),s._v(" "),a("p",[s._v("目前业界比较出名和稳定的webgl开发库有两个：")]),s._v(" "),a("ul",[a("li",[s._v("three.js")]),s._v(" "),a("li",[s._v("babylon.js")])]),s._v(" "),a("p",[s._v("如果需要3d显示，请从上面两个库中挑一个即可。"),a("br"),s._v("\n如果需要开发3d游戏，babylon.js的表现则比three.js更为优秀。"),a("br"),s._v("\n如果仅仅是为了优化2d图形2d动画，建议使用原生技术开发！")]),s._v(" "),a("h2",{attrs:{id:"工程化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#工程化"}},[s._v("#")]),s._v(" 工程化")]),s._v(" "),a("p",[s._v("webgl是浏览器原生技术，工程化、整合进现有开发体系的方式跟其他技术差不多。")]),s._v(" "),a("h3",{attrs:{id:"glsl文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#glsl文件"}},[s._v("#")]),s._v(" .glsl文件")]),s._v(" "),a("p",[s._v("shader程序，在一些教程中常常写在"),a("code",[s._v("<script>")]),s._v("标签中，或者写在js的字符串里，但是在工程体系里面，应该把这部分单独写在一个.glsl文件中，通过后缀区分着色器类型：")]),s._v(" "),a("ul",[a("li",[a("code",[s._v(".v.glsl")]),s._v("或"),a("code",[s._v(".vtx.glsl")]),s._v("：代表当前着色器程序文件里写的是一个顶点着色器。")]),s._v(" "),a("li",[a("code",[s._v(".f.glsl")]),s._v("或"),a("code",[s._v(".fgm.glsl")]),s._v("：代表当前着色器程序文件里写的是一个片元着色器。")])]),s._v(" "),a("p",[s._v("通过不同的文件，可以更好地开发、管理、维护代码。")]),s._v(" "),a("h3",{attrs:{id:"vscode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vscode"}},[s._v("#")]),s._v(" vscode")]),s._v(" "),a("p",[s._v("在vscode中，下载glsl语言支持的插件，针对"),a("code",[s._v(".glsl")]),s._v("文件语法高亮。")]),s._v(" "),a("h3",{attrs:{id:"webpack"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack"}},[s._v("#")]),s._v(" webpack")]),s._v(" "),a("p",[s._v("在webpack配置中，module.rules中添加一个加载器：")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    module"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        rules"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//...其他加载器")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                test"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token regex"}},[s._v("/\\.glsl$/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                loader"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'raw-loader'")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("通过"),a("code",[s._v("raw-loader")]),s._v("把glsl文件当成文本读取。"),a("br"),s._v("\n这样便可以通过webapck的模块系统，使用"),a("code",[s._v("require")]),s._v("或"),a("code",[s._v("import")]),s._v("将代码导入进程序中。\n如果还有动态修改shader代码的需要，可以试试自己写一个loader将glsl文件当成js字符串模板生成函数读取。")]),s._v(" "),a("h3",{attrs:{id:"rollup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rollup"}},[s._v("#")]),s._v(" rollup")]),s._v(" "),a("p",[s._v("rollup只需要安装一个glsl的plugin即可通过rollup的模块系统使用")]),s._v(" "),a("h3",{attrs:{id:"浏览器环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器环境"}},[s._v("#")]),s._v(" 浏览器环境")]),s._v(" "),a("p",[s._v("浏览器环境，建议通过ajax请求glsl文件，content-type设置为文本类型即可。")]),s._v(" "),a("h2",{attrs:{id:"glsl语言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#glsl语言"}},[s._v("#")]),s._v(" glsl语言")]),s._v(" "),a("p",[s._v("参考 "),a("RouterLink",{attrs:{to:"/Graphical/WebGL/share/GLSL语言.html"}},[s._v("GLSL语言指南")])],1),s._v(" "),a("h2",{attrs:{id:"学习资源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#学习资源"}},[s._v("#")]),s._v(" 学习资源")]),s._v(" "),a("p",[s._v("详见 "),a("RouterLink",{attrs:{to:"/Graphical/WebGL/share/WebGL学习资源.html"}},[s._v("学习资源")])],1)])}),[],!1,null,null,null);t.default=r.exports}}]);