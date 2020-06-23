# Vue 项目接入 TS

这里可参照微软官方推荐的用法：

- [TypeScript-Vue-Starter](https://github.com/microsoft/TypeScript-Vue-Starter)

## 环境

- Node v10.15.3

```json
"dependencies": {
  "vue": "^2.5.2",
  "vue-class-component": "^6.0.0",
  "vue-property-decorator": "^6.0.0",
  "vue-router": "^3.0.1"
},
"devDependencies": {
  "@types/jest": "^23.3.2",
  "@vue/test-utils": "^1.0.0-beta.25",
  "css-loader": "^0.28.1",
  "jest": "^23.6.0",
  "ts-jest": "^23.10.3",
  "ts-loader": "^2.0.3",
  "typescript": "^2.7.2",
  "vue-jest": "^2.6.0",
  "vue-loader": "^12.0.3",
  "vue-template-compiler": "^2.5.2",
  "webpack": "^2.5.0"
}
```

## 示例

1. 创建 配置文件

```sh
tsc --init
```

```json
{
  "compilerOptions": {
    "outDir": "./built/",
    "sourceMap": true,
    "strict": true,
    "noImplicitReturns": true,
    "module": "es2015",
    "moduleResolution": "node",
    "target": "es5"
  },
  "include": [
    "./src/**/*"
  ]
}
```

2. 新增 webpack.config.js 配置文件

```js
var path = require('path')
var webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            // the "scss" and "sass" values for the lang attribute to the right configs here.
            // other preprocessors should work out of the box, no loader config like this necessary.
            'scss': 'vue-style-loader!css-loader!sass-loader',
            'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/],
        }
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map',
  plugins: [
    // make sure to include the plugin for the magic
    new VueLoaderPlugin()
  ]
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
```

3. 在 package.json 添加脚本

```json
"scripts": {
  "build": "webpack",
  "test": "echo \"Error: no test specified\" && exit 1"
},
```

4. 执行构建

```sh
npm run build
```

## 示例项目

- [vue-webpack-typescript](https://github.com/ducksoupdev/vue-webpack-typescript)