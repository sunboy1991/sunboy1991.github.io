(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{541:function(e,n,a){"use strict";a.r(n);var t=a(27),s=Object(t.a)({},(function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"vue更有效地结合webpack"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue更有效地结合webpack"}},[e._v("#")]),e._v(" vue更有效地结合webpack")]),e._v(" "),a("blockquote",[a("p",[a("code",[e._v("webpack")]),e._v(" 是一个 JavaScript 应用程序的静态模块打包器，它能帮助我们分析项目结构，找到 JavaScript 模块以及其它的一些浏览器不能直接运行的拓展语言，并将其打包为合适的格式以供浏览器使用。")])]),e._v(" "),a("ul",[a("li",[e._v("如何给你的项目添加环境变量")]),e._v(" "),a("li",[e._v("多页面项目的配置")])]),e._v(" "),a("h3",{attrs:{id:"如何给你的项目添加环境变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何给你的项目添加环境变量"}},[e._v("#")]),e._v(" *如何给你的项目添加环境变量")]),e._v(" "),a("p",[e._v("由于我们发布项目时通常要根据部署时的环境来切换配置，有时如果忘记修改，则将会引起不必要的错误，当然我们可以根据location进行判断，这也是个不错的方法。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("window.ENV = '';\nif (location.port) ENV = 'local';\nif (/test/.test(location.hostname)) ENV = 'test';\nif (/demo/.test(location.hostname)) ENV = 'dev';\n\n")])])]),a("p",[e._v("对于上面这种方法，根据发布环境的不同自动切换其实也是比较推荐的，下面介绍的是webpack根据环境配置不同变量--"),a("code",[e._v("webpack.DefinePlugin")])]),e._v(" "),a("p",[e._v("例如，我们向window注入一个全局变量"),a("code",[e._v("DEBUG")]),e._v("，则在webpack配置可以这样添加：")]),e._v(" "),a("p",[e._v("webpack.dev.config.js:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("plugins: [\n    new webpack.DefinePlugin({\n        DEBUG: JSON.stringify(true),\n    }),\n    //...\n]\n")])])]),a("p",[e._v("webpack.prod.config.js:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("plugins: [\n    new webpack.DefinePlugin({\n        DEBUG: JSON.stringify(false),\n    }),\n    //...\n]\n")])])]),a("p",[e._v("utils.js")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("window.ENV = '';\nif(DEBUG){\n    window.ENV = 'local';\n}else{\n    window.ENV = 'production';\n}\n")])])]),a("p",[e._v("甚至，我们可以直接使用根据npm的参数"),a("code",[e._v("process.argv")]),e._v("进行判断:")]),e._v(" "),a("p",[e._v("package.json")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('"scripts": {\n    "start": "npm run local",\n    "build": "npm run production"\n}, \n')])])]),a("p",[e._v("webpack.config.js:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("plugins: [\n    new webpack.DefinePlugin({\n        ENV: JSON.stringify(process.argv[2]),\n    }),\n    //...\n]\n")])])]),a("h3",{attrs:{id:"多页面项目的配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多页面项目的配置"}},[e._v("#")]),e._v(" *多页面项目的配置")]),e._v(" "),a("p",[e._v("由于 "),a("code",[e._v("vue-cli 3.x")]),e._v(" 配置差异较大，这里主要讲述 "),a("code",[e._v("vue-cli 2.x")]),e._v(" 是如何使用 "),a("code",[e._v("webpack")]),e._v(" 配置多页面项目的，其项目结构如下：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("./src\n└── pages                   // 多页面\n    ├── page1               // 页面1\n    │   ├── main.js         // 输出文件\n    │   ├── App.vue         // vue总组件\n    ├── page2               // 页面2\n    ├── page3               // 页面3\n    └── index.html          // html模板\n")])])]),a("p",[e._v("在 "),a("code",[e._v("utils.js")]),e._v(" 中添加 "),a("code",[e._v("entries")]),e._v(" 和 "),a("code",[e._v("exits")]),e._v(" 方法，用于多页文件的识别：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// 多入口配置\nexports.entries = () => {\n  let entryFiles = glob.sync(__dirname, '../src/pages/*/main.js');\n  let map = {};\n  entryFiles.forEach(filePath => {\n    map[path.basename(path.dirname(filePath))] = filePath;\n  })\n  return map;\n}\n\n//多页面输出配置\nexports.exits = (conf) => {\n  let entryHtml = glob.sync(__dirname, '../src/pages/*/main.js');\n  return entryHtml.map(filePath => {\n    let filename = path.basename(path.dirname(filePath));\n    return Object.assign({\n      // 模板来源\n      template: path.resolve(__dirname, '../src/pages/index.html'),\n      // 文件名称\n      filename: filename + '.html',\n      // 页面模板需要加对应的js脚本，如果不加这行则每个页面都会引入所有的js脚本\n      chunks: [\n        'manifest',\n        'vendor',\n        filename,\n      ]\n    }, conf);\n  });\n}\n")])])]),a("p",[e._v("在 "),a("code",[e._v("webpack.base.conf.js")]),e._v(" 中，修改入口配置：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("entry: {\n    app: './src/main.js'\n}\n\n// => 修改为\n\nentry: utils.entries()\n\n")])])]),a("p",[e._v("在 "),a("code",[e._v("webpack.dev.conf.js")]),e._v(" 和 "),a("code",[e._v("webpack.prod.conf.js")]),e._v(" 中，修改输出配置：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("plugins: [\n    new HtmlWebpackPlugin({\n        //...\n    })\n\n    // => 修改为\n\n    ...utils.exits({\n        //conf...\n    }).map(conf => new HtmlWebpackPlugin(conf)),\n]\n")])])])])}),[],!1,null,null,null);n.default=s.exports}}]);