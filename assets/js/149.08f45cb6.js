(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{516:function(t,s,a){"use strict";a.r(s);var n=a(27),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#规范"}},[t._v("#")]),t._v(" 规范")]),t._v(" "),a("h2",{attrs:{id:"glsl命名规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#glsl命名规范"}},[t._v("#")]),t._v(" glsl命名规范")]),t._v(" "),a("p",[t._v("任何变量、函数，都应该使用下划线命名法")]),t._v(" "),a("div",{staticClass:"language-glsl extra-class"},[a("pre",{pre:!0,attrs:{class:"language-glsl"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//bad")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("vec4")]),t._v(" oneColor "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("vec4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createPointSize")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//good")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("vec4")]),t._v(" one_color "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("vec4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("create_point_size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("关于特殊变量：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("attribute")]),t._v("类型的变量，需要使用小写字母"),a("code",[t._v("a")]),t._v("开头")]),t._v(" "),a("li",[a("code",[t._v("uniform")]),t._v("类型的变量，需要使用小写字母"),a("code",[t._v("u")]),t._v("开头")]),t._v(" "),a("li",[a("code",[t._v("varying")]),t._v("类型的变量，需要使用小写字母"),a("code",[t._v("v")]),t._v("开头")])]),t._v(" "),a("div",{staticClass:"language-glsl extra-class"},[a("pre",{pre:!0,attrs:{class:"language-glsl"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//bad")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("attribute")]),t._v(" positions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("uniform")]),t._v(" size"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varying")]),t._v(" calc_positions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//good")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("attribute")]),t._v(" a_position"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("uniform")]),t._v(" u_size"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varying")]),t._v(" v_calc_position"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("参考glsl内置变量，第一个下划线后紧跟着的字母大写是允许的")]),t._v(" "),a("div",{staticClass:"language-glsl extra-class"},[a("pre",{pre:!0,attrs:{class:"language-glsl"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//good")]),t._v("\ngl_Position"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\na_Position"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nv_Color"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmy_Value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"glsl变量名含义参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#glsl变量名含义参考"}},[t._v("#")]),t._v(" glsl变量名含义参考")]),t._v(" "),a("h2",{attrs:{id:"与glsl相关的js命名规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#与glsl相关的js命名规则"}},[t._v("#")]),t._v(" 与glsl相关的js命名规则")]),t._v(" "),a("p",[t._v("对于获取到的glsl变量地址，名称必须与glsl的变量名一致，但下划线部分需要换成js的驼峰，且后面需要加上"),a("code",[t._v("Loc|Idx")]),t._v("后缀")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//bad")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" oneColor "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" gl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getUniformLocation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("program"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'u_One_color'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" posLoc "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" gl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAttribLocation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("program"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a_Position'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//good")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" uOneColorLoc "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" gl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getUniformLocation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("program"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'u_One_color'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" aPositionLoc "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" gl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAttribLocation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("program"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a_Position'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//good")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" uOneColorIdx "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" gl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getUniformLocation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("program"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'u_One_color'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" aPositionIdx "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" gl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAttribLocation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("program"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a_Position'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("而获取变量值的时候，则不需要加上后缀，直接名称一致，下划线转驼峰即可")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//bad")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" oneColor "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" gl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getUniform")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("program"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("uOneColorLoc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" posLoc "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" gl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAttrib")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("program"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("aPositionLoc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//good")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" uOneColor "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" gl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getUniformLocation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("program"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("uOneColorLoc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" aPosition "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" gl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAttribLocation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("program"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("aPositionLoc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);