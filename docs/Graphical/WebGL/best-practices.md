# 最佳实践

## 使用webgl的场景

一般情况下，普通的业务中很少有特别需要使用webgl的场景，除非以下几种情况，建议使用webgl开发：
- 3D显示
- 粒子动画中，粒子数量大于1000个，且渲染有卡顿时
- 一些简单的特效，但canvsa2D或者css3动画无法实现时
- 无引擎小游戏
- 需要遍历像素或者直接更改像素值时

## 相关webgl库
目前业界比较出名和稳定的webgl开发库有两个：
- three.js
- babylon.js

如果需要3d显示，请从上面两个库中挑一个即可。  
如果需要开发3d游戏，babylon.js的表现则比three.js更为优秀。  
如果仅仅是为了优化2d图形2d动画，建议使用原生技术开发！

## 工程化
webgl是浏览器原生技术，工程化、整合进现有开发体系的方式跟其他技术差不多。
### .glsl文件
shader程序，在一些教程中常常写在`<script>`标签中，或者写在js的字符串里，但是在工程体系里面，应该把这部分单独写在一个.glsl文件中，通过后缀区分着色器类型：
- `.v.glsl`或`.vtx.glsl`：代表当前着色器程序文件里写的是一个顶点着色器。
- `.f.glsl`或`.fgm.glsl`：代表当前着色器程序文件里写的是一个片元着色器。

通过不同的文件，可以更好地开发、管理、维护代码。

### vscode
在vscode中，下载glsl语言支持的插件，针对`.glsl`文件语法高亮。

### webpack
在webpack配置中，module.rules中添加一个加载器：
```js
export default {
    module:{
        rules:[
            //...其他加载器
            {
                test:/\.glsl$/,
                loader:'raw-loader'
            }

        ]
    }
}
```
通过`raw-loader`把glsl文件当成文本读取。  
这样便可以通过webapck的模块系统，使用`require`或`import`将代码导入进程序中。
如果还有动态修改shader代码的需要，可以试试自己写一个loader将glsl文件当成js字符串模板生成函数读取。

### rollup
rollup只需要安装一个glsl的plugin即可通过rollup的模块系统使用

### 浏览器环境
浏览器环境，建议通过ajax请求glsl文件，content-type设置为文本类型即可。


## glsl语言
参考 [GLSL语言指南](./share/GLSL语言.md)

## 学习资源
详见 [学习资源](./share/WebGL学习资源.md)