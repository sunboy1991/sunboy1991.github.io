# vue更有效地结合webpack

> `webpack` 是一个 JavaScript 应用程序的静态模块打包器，它能帮助我们分析项目结构，找到 JavaScript 模块以及其它的一些浏览器不能直接运行的拓展语言，并将其打包为合适的格式以供浏览器使用。

* 如何给你的项目添加环境变量
* 多页面项目的配置

### *如何给你的项目添加环境变量

由于我们发布项目时通常要根据部署时的环境来切换配置，有时如果忘记修改，则将会引起不必要的错误，当然我们可以根据location进行判断，这也是个不错的方法。

```
window.ENV = '';
if (location.port) ENV = 'local';
if (/test/.test(location.hostname)) ENV = 'test';
if (/demo/.test(location.hostname)) ENV = 'dev';

```

对于上面这种方法，根据发布环境的不同自动切换其实也是比较推荐的，下面介绍的是webpack根据环境配置不同变量--`webpack.DefinePlugin`

例如，我们向window注入一个全局变量`DEBUG`，则在webpack配置可以这样添加：

webpack.dev.config.js:
```
plugins: [
    new webpack.DefinePlugin({
        DEBUG: JSON.stringify(true),
    }),
    //...
]
```

webpack.prod.config.js:
```
plugins: [
    new webpack.DefinePlugin({
        DEBUG: JSON.stringify(false),
    }),
    //...
]
```

utils.js
```
window.ENV = '';
if(DEBUG){
    window.ENV = 'local';
}else{
    window.ENV = 'production';
}
```

甚至，我们可以直接使用根据npm的参数`process.argv`进行判断:

package.json
```
"scripts": {
    "start": "npm run local",
    "build": "npm run production"
}, 
```

webpack.config.js:
```
plugins: [
    new webpack.DefinePlugin({
        ENV: JSON.stringify(process.argv[2]),
    }),
    //...
]
```

### *多页面项目的配置

由于 `vue-cli 3.x` 配置差异较大，这里主要讲述 `vue-cli 2.x` 是如何使用 `webpack` 配置多页面项目的，其项目结构如下：

```
./src
└── pages                   // 多页面
    ├── page1               // 页面1
    │   ├── main.js         // 输出文件
    │   ├── App.vue         // vue总组件
    ├── page2               // 页面2
    ├── page3               // 页面3
    └── index.html          // html模板
```


在 `utils.js` 中添加 `entries` 和 `exits` 方法，用于多页文件的识别：

```
// 多入口配置
exports.entries = () => {
  let entryFiles = glob.sync(__dirname, '../src/pages/*/main.js');
  let map = {};
  entryFiles.forEach(filePath => {
    map[path.basename(path.dirname(filePath))] = filePath;
  })
  return map;
}

//多页面输出配置
exports.exits = (conf) => {
  let entryHtml = glob.sync(__dirname, '../src/pages/*/main.js');
  return entryHtml.map(filePath => {
    let filename = path.basename(path.dirname(filePath));
    return Object.assign({
      // 模板来源
      template: path.resolve(__dirname, '../src/pages/index.html'),
      // 文件名称
      filename: filename + '.html',
      // 页面模板需要加对应的js脚本，如果不加这行则每个页面都会引入所有的js脚本
      chunks: [
        'manifest',
        'vendor',
        filename,
      ]
    }, conf);
  });
}
```
在 `webpack.base.conf.js` 中，修改入口配置：

```
entry: {
    app: './src/main.js'
}

// => 修改为

entry: utils.entries()

```


在 `webpack.dev.conf.js` 和 `webpack.prod.conf.js` 中，修改输出配置：

```
plugins: [
    new HtmlWebpackPlugin({
        //...
    })

    // => 修改为

    ...utils.exits({
        //conf...
    }).map(conf => new HtmlWebpackPlugin(conf)),
]
```