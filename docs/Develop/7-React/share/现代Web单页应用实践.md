# 现代Web单页应用实践

[TOC]

## 引言

2015到2017这三年间，前端开发领域风生水起，除了开发语言本身的完善，无数优秀的框架、工具呈涌现、迸发的状态，还出现了一大波体验优秀的Web应用产品，前端工程师实现了从切图仔到大前端开发工程师的华丽转变。而现代Web应用有一个明显是特征：它是个单页面应用。

## 什么是单页面应用

>单页面应用（SPA）是旨在对Web应用发动革命的软件运动中可信度很高的一种。此类应用有望进行更加模块化的开发，令应用更加容易地适配与多个设备，并拥有更好的应用生命周期管理—这些几乎是软件架构师希望的全部

单页面应用提供传统webapp难以企及的流畅体验，具有桌面应用的即时性、网站的可移植性和可访问性，用户体验好、快，内容的改变不需要重新加载整个页面，web应用更具响应性和更令人着迷。

## 构建现代Web应用

### webpack不完全指北

wiki百科对软件工程早有解释

> 软件工程是一门研究用工程化方法构建和维护有效的、实用的和高质量的软件的学科。

石器时代的前端，页面只需要直接写 HTML, CSS和JS就能满足我们的日常需求，但随着业务发展，按照这样传统的开发方式，会让前端的复杂度除了变大外还增加了不可维护性，几近失控。而解决这个问题的最佳途径，就是进行工程化。早期的做法是使用Grunt、Gulp等构建工具，进行源码级别的优化，实际上它们是任务调度工具，按需组合，通过插件机制，将开发过程自动化和工具化，这样可以大大提升了前端工程师的开发效率，不过，它们在解决资源依赖上的能力是较弱的，而且因为过于灵活，实际上工程师花在写配置文件上的精力是十分可观的。后来，Webpack这支后起之秀，以一种非常优雅的方式解决了前端资源依赖管理的问题，曾经百度推出的fis3也很好地解决工程化难题，不过因其和社区水土不服，即便它有着超时代的理念和背后优秀的技术团队，还是未能得到社区的认可。webpack可以最大限度地使用最新的技术，各种技术栈之间能够自由组合，加上丰富的生态，几乎是恰到好处解决我们所有的痛点。

选用webpack打包单页面应用显然是不二之选。

### 健壮应用需要静态类型检测

静态类型检测旨在解决Javascript本身的“痛点”：

社区有FlowType和Typescript两种选择，它们之间相互借鉴模仿，变得非常像，差距越来越小，可以未来唯一的区别就是，Typescript是JS的超集，因而严格意义上可以算作另一门语言了，FlowType可以保证无侵入地书写JS，可以说是一款类型检测的插件，因此我们习惯称它为flow.js。考虑到微软推出Visual Studio Code这款IDE，可以在Typescript开发下带来极为流畅的开发体验，这里我们采用Typescript来做静态检测。
在项目中引入Typescript是十分简单的，这里简单介绍一下typescript的使用:

首先，安装typescript
```javascript
npm install -g typescript
```
书写ts文件
```typescript
function greeter(person: string) {
    return "Hello, " + person;
}
var user = "Jane User";
document.body.innerHTML = greeter(user);
```

在该文件目录运行编译

```bash
tsc yourfile.ts
```

具体语法，请参照typescript api文档

### 应用状态管理

在单页面应用上， 谁都绕不开状态管理。Google推出 Flux 架构思想，用于在构建客户端 Web 应用中规范数据在 Web 应用中的流动方式，它与MVC架构是属于同一类东西，但相较简单和清晰，Flux 有许多种实现。它的一大特色就是单向数据流：

![http://www.ruanyifeng.com/blogimg/asset/2016/bg2016011503.png](http://www.ruanyifeng.com/blogimg/asset/2016/bg2016011503.png)

这里不详细展开，有兴趣可以参照 http://www.ruanyifeng.com/blog/2016/01/flux.html 

国内比较流行的单页面开发技术选型vue，也有自己的状态管理库vuex

![http://other-1251009253.file.myqcloud.com/for20171110/vuex.png](http://other-1251009253.file.myqcloud.com/for20171110/vuex.png)

当然还有比较热门的Redux，然而，对于很多 JavaScript 开发人员来说，对 Redux 最大的抱怨无非就是需要大量实现功能的样板代码。另外一个更好的替代品 MobX 提供了类似的功能，但是代码量要更少一些：

![http://other-1251009253.file.myqcloud.com/for20171110/flow.png](http://other-1251009253.file.myqcloud.com/for20171110/flow.png)

这里采用 MobX 来管理我们应用的状态。

## 实战：Web 图灵聊天应用

现在，通过实战开发一个单页应用，来掌握单页应用开发所需要的技能。

### 架构

![http://other-1251009253.file.myqcloud.com/for20171107/webapp-map.png](http://other-1251009253.file.myqcloud.com/for20171107/webapp-map.png)

### 目录约定

```bash
├─assets                静态资源
├─components            组件
├─config                通用配置
├─pages                 页面
├─stores                状态
├─style                 样式
│  ├─app                业务对应样式
│  └─_modules less      方法函数
└─tools                 工具/库
    └─lib
        └─helper
```

### 脚手架搭建

初始化package.json, 通过 npm 安装依赖

```json
...
"@types/classnames": "^2.2.3",
"@types/node": "^8.0.33",
"@types/react": "^16.0.10",
"@types/react-dom": "^16.0.1",
"@types/react-router": "^4.0.15",
"@types/react-router-dom": "^4.0.8",
"@types/webpack": "^3.0.13",
"autoprefixer": "^7.1.5",
"babel-core": "^6.23.1",
"babel-loader": "^7.1.2",
"babel-plugin-transform-async-to-generator": "^6.16.0",
...
```

相关的执行命令如下：

```javascript
"dev": "node build/server.js",
"prod": "webpack --config ./build/webpack.prod.js --progress --colors",
"preview": "pushstate-server ./dist 1234",
"prettier": "prettier --write --print-width 100 --tab-width 2 --no-semi \"**/*.js\" \"**/*.jsx\" \"**/*.tsx\" \"**/*.ts\""
```

添加tsconfig.json提供Typescript编译能力

```json
{
  "compilerOptions": {
    "allowJs": true,
    "sourceMap": true,
    "target": "es6",
    "jsx": "react",
    "moduleResolution": "node",
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "declaration": false,
    "noImplicitAny": false,
    "noImplicitReturns": false,
    "removeComments": true,
    "strictNullChecks": false
  },
  "exclude": [
    "dist",
    "build",
    "node_modules"
  ]
}
```

添加入口文件模板：

```html
<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, minimal-ui">
  <meta name="screen-orientation" content="portrait" />
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="format-detection" content="telephone=no">
  <meta name="full-screen" content="yes">
  <meta name="x5-fullscreen" content="true">
  <title>Title</title>
</head>
<body>
  <div id="root"></div>
</body>
</html>
```

添加 .gitignore

```bash
/node_modules
package-lock.json
/.vscode
/dist
```

建立公共配置：

```javascript
module.exports = {
  vendor: ["react", "react-dom", "react-router", "mobx", "mobx-react"],
  babel: {
    presets: [["es2015", { modules: false }], "stage-0", "react"],
    plugins: ["transform-async-to-generator", "transform-decorators-legacy"]
  },
  server: {
    port: 2000,
    host: getLocalIP() || "localhost",
    browser: "chrome"
  },
  build: {
    // publicPath: "/"
    publicPath: "http://other-1251009253.file.myqcloud.com/for20171110/"
  },
  path: {
    src: path.join(__dirname, "../src"),
    dist: path.join(__dirname, "../dist"),
    tests: path.join(__dirname, "../tests")
  },
  useGzip: false,
  postcss: {
    plugins: [
      require("postcss-px2rem")({
        remUnit: 100
      }),
      require("autoprefixer")({
        browsers: ["last 2 versions"],
        cascade: false
      })
    ]
  },
  // https://webpack.js.org/configuration/dev-server/
  devServer: {
    contentBase: path.join(__dirname, "../src"),
    hot: true,
    historyApiFallback: false,
    disableHostCheck: true,
    stats: {
      colors: true,
      hash: false,
      timings: false,
      version: false,
      chunks: false,
      modules: false,
      children: false,
      chunkModules: false
    },
    open: true,
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  }
}
```

添加开发webpack打包配置文件：

```javascript

// 编译typescript, es6, react
{
  test: /\.(js|jsx|ts|tsx)$/,
  exclude: /node_modules/,
  use: [
    {
      loader: "babel-loader",
      options: setting.babel
    },
    {
      loader: "ts-loader"
    }
  ]
},

// 编译less样式，使用 postcss 自动补全浏览器前缀和单位转换
{
  test: /\.less$/,
  use: ExtractTextPlugin.extract({
    fallback: "style-loader",
    use: [
      "css-loader",
      {
        loader: "postcss-loader",
        options: {
          ident: "postcss",
          plugins: setting.postcss.plugins
        }
      },
      "less-loader"
    ]
  })
},

// 图片和其他的静态资源
{ test: /\.html$/, use: "html-loader" },
{ test: /\.png$/, use: "url-loader?limit=10000" },
{ test: /\.(jpg|svg)$/, use: "file-loader" }

// 入口规定

entry: {
  main: [
    "react-hot-loader/patch",
    "webpack-dev-server/client?http://0.0.0.0:" + setting.server.port,
    "webpack/hot/only-dev-server",
    "babel-polyfill",
    "./index"
  ],
  vendor: setting.vendor
},
// 调试工具
devtool: "#eval-source-map",

```

添加server.js, 为dev开发提供入口,使用webpack-dev-server作为静态资源服务器


```javascript
var webpack = require("webpack")
var opn = require("opn")
var WebpackDevServer = require("webpack-dev-server")
var setting = require("./setting")
var dev = require("./webpack.dev")
  
new WebpackDevServer(webpack(dev), setting.devServer).listen(
  setting.server.port,
  setting.server.host,
  function(err, result) {
    if (err) {
      console.log(err)
    }
    opn("http://" + setting.server.host + ":" + setting.server.port, { app: "chrome" })
    console.log("Listening at " + setting.server.host + ":" + setting.server.port)
  }
)
```

添加生成环境webpack配置：

```javascript
...
output: {
  path: setting.path.dist,
  filename: "[name].[hash].js",
  publicPath: setting.build.publicPath
},
plugins: [
  new webpack.DefinePlugin({
    "process.env.NODE_ENV": JSON.stringify("production")
  }),
  new webpack.LoaderOptionsPlugin({
    options: {
      context: setting.path.src
    }
  }),
  new webpack.optimize.UglifyJsPlugin({
    comments: false,
    compress: {
      warnings: false
    }
  }),
  new ExtractTextPlugin("[name].[contenthash].css"),
  new webpack.optimize.CommonsChunkPlugin({
    name: "vendor",
    filename: "vendor.[hash].js",
    minChunks: Infinity
  }),
  new webpack.optimize.AggressiveMergingPlugin(),
  new HtmlWebpackPlugin({
    hash: false,
    template: "../index.hbs",
    filename: "index.html"
  }),
  setting.useGzip
    ? new CompressionWebpackPlugin({
        asset: "[path].gz[query]",
        algorithm: "gzip",
        test: new RegExp("\\.(js|css)$"),
        threshold: 10240,
        minRatio: 0.8
      })
    : n => n
]
...
```

至此，一个大致的项目脚手架搭建完毕。下面开始项目开发

### 正式进入开发

首先，我们需要添加入口文件：

```typescript
import "./tools/liveUrl"

import * as React from "react"
import { render } from "react-dom"
import { HashRouter } from "react-router-dom" //HashRouter  BrowserRouter

import { AppContainer } from "react-hot-loader"
import { Provider } from "mobx-react"

import { useStrict } from "mobx"
import App from "./config/app"

import stores from "./stores"

import "babel-polyfill"

// For Mobile
import "./style/reset.css"
import "./tools/initRem"

import "./style/common.less"

// useStrict(true)

const main = stores => (
  <AppContainer>
    <HashRouter>
      <Provider {...stores}>
        <App />
      </Provider>
    </HashRouter>
  </AppContainer>
)

render(main(stores), document.getElementById("root"))
window["stores"] = stores
// Hot Module Replacement API
if (process.env.NODE_ENV === "development" && (module as any).hot) {
  ;(module as any).hot.accept(App, () => {
    render(main(stores), document.getElementById("root"))
  })
}
```

规定应用的store:

```javascript
import Article from "./article"
import Chat from "./chat"
export default {
  article: new Article(),
  chat: new Chat()
}

```

页面路由配置：

```javascript
import { lazyRoutes } from "../tools/lazyRoutes"

export default lazyRoutes([
  {
    path: "/article",
    component: () => import("../pages/article")
  },
  {
    path: "/about",
    component: () => import("../pages/about")
  }
])
```

异步路由加载组件：

```javascript
import * as Loadable from "react-loadable" //https://github.com/thejameskyle/react-loadable
import loading from "../components/loading"

export const lazyRoutes = config =>
  config.map(route => ({
    ...route,
    component: Loadable({
      loader: route.component,
      loading: route.loading || loading
    })
  }))
```

因为整个应用是面向移动端的，以rem作为单位，这里是核心算法：

```javascript
function setFontSize(k) {
  document.documentElement.style.fontSize = k / 750 * 100 / 16 * 100 + "%"
}
```

使用我们应用的用户，我们应该为他们提供状态保存，这时候，可以通过分配全局ID，配合sessionStorage来达到我们的目标。
guid的算法如下：

```javascript
const uuid = () => {
  const S4 = () => (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
  return S4() + S4() + "QK" + S4() + "QK" + S4() + "QK" + S4() + "QK" + S4() + S4() + S4()
}
```

使用图灵API, 建立对话系统内部的store:

```javascript
import { observable, action } from 'mobx'
import FN from '../tools/fn'
import { Tween } from '../tools/lib/stream-tween'

export default class Chat {
  el = ''
  @observable val = ''
  @observable list = [{
    type: 'tulin',
    msg: 'Hello',
    url: ''
  }]
  constructor() {
    let id = FN.getSession('userData').id
    if(id){
      this.session = id
    } else {
      this.session = FN.uuid()
      FN.saveSession('userData',{
        id: this.session
      })
    }
  }
  sendMsg(msg) {
    this.list.push({
      type: 'user',
      msg: this.val
    })
    this.callTuLing(this.val)
    this.scrollTo()
    this.val = ''
  }
  scrollTo(){
    setTimeout(() => {
      Tween(this.el.scrollTop, this.el.scrollHeight, 600, n => {
        this.el.scrollTop = n
      })
    }, 0)
  }
  async callTuLing(msg) {
    let res = await FN.ajax('callTuLing', {
      key: 'de86fb2db51a49eb8d13bfcd44298a02',
      info: msg,
      userid: this.session
    },{
      domain:'//www.tuling123.com/openapi/api',
      sleep: 600
    })
    console.log(res)
    this.list.push({
      type: 'tulin',
      msg: res.text,
      url: res.url
    })
    this.scrollTo()
  }
}
```

聊天的主要视图如下：

```javascript
<QueueAnim animConfig={[
  { opacity: [1, 0], translateX: [0, 50] },
  { opacity: [1, 0], translateX: [0, -50] }
]} duration={900} interval={100} delay={0}>
  {list.length > 0
    ? [
      list.map((e, i) => {
        let classList = ["msgBar", e.type].join(' ')
        return (
          <div key={i} className={classList}>
            <img
              src={icon_resource[e.type]}
              alt=""
              className="icon"
            />
            <p className="msg">
            {e.msg}
            {e.url && <a href={e.url}>
              {e.url}
            </a>}
            </p>
          </div>
        ))
      ]
    : null}
</QueueAnim>
```

固定在页面底部输入框：

```javascript
<div className="inputBar">
  <input
    type="text"
    placeholder="你想和我说什么呢？"
    onInput={this.changeInput.bind(this)}
    value={this.store.val}
  />
  <a href="javascript:;" className="send enable" onClick={this.sendMsg.bind(this)}>
    发送
  </a>
</div>
```

到这里，我们的图灵聊天界面功能已经完成了，现在添加关于页面：

视图如下:

```javascript
<QueueAnim
  className="demo-content"
  key="demo"
  type={['right', 'left']}
  ease={['easeOutQuart', 'easeInOutQuart']}
>
  {[
    <div className="about" key="about">
      <h1>Follow Me</h1>
      {
        <img
          src="http://other-1251009253.file.myqcloud.com/for20171107/avator.png"
          alt=""
        />
      }
      <a href="https://github.com/qkorbit">github.com/qkorbit</a>
    </div>
  ]}
</QueueAnim>
```

所有视图的样式参照 style.less

为了增强应用的交互体验，我们使用CSS3动画和JS动画来优化我们的应用，这里提及下JS动画核心————关键帧插值算法：

```javascript
window.requestAnimationFrame =
  window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.msRequestAnimationFrame

const DEFAULT_FN = n => n

const TWEEN = {
  Linear(t, b, c, d) {
    return c * t / d + b
  },
  QuartEaseInOut(t, b, c, d) {
    if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b
    return -c / 2 * ((t -= 2) * t * t * t - 2) + b
  }
}

export const Tween = (from = 0, to = 0, duration = 0, fn = DEFAULT_FN, easing = "Linear") => {
  return new Promise(resolve => {
    let t = 0
    let d = Math.ceil(duration / 17)
    const step = () => {
      let n = TWEEN[easing](t, from, to - from, d)
      ++t
      if (t <= d) {
        fn(n, this)
        requestAnimationFrame(step)
      } else {
        fn(to, this)
        resolve()
      }
    }
    step()
  })
}

```

源码可参见 xxx.

## 结尾

到这里，我们整个应用已经搭建完毕，向Git服务器推送我们的commit, 接着执行发布命令：

```bash
npm run prod
```

将dist文件夹打包好的文件发布到我们的服务器，上线我们的应用。

应用截图：

![http://other-1251009253.file.myqcloud.com/for20171110/cont-1.png](http://other-1251009253.file.myqcloud.com/for20171110/cont-1.png)

## 参考文献

https://zhuanlan.zhihu.com/p/26426054

http://webpack.github.io/

http://www.tslang.cn

https://mobx.js.org/

https://vuex.vuejs.org/zh-cn/intro.html