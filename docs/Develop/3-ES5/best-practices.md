# 最佳实践


## 文档注释

开发组件、模块的时候需要添加文档注释 eg.

```javascript
/**
 * @func
 * @desc 一个xxx函数
 * @param {string} a - 参数 a
 * @param {number} b=1 - 参数 b 默认值为 1
 * @param {string} c=1 - 参数 c 有两种支持的取值 1—表示 x 2—表示 xx
 * @param {object} d - 参数 d 为一个对象
 * @param {string} d.e - 参数 d 的 e 属性
 * @param {string} d.f - 参数 d 的 f 属性
 * @param {object[]} g - 参数 g 为一个对象数组
 * @param {string} g.h - 参数 g 数组中一项的 h 属性
 * @param {string} g.i - 参数 g 数组中一项的 i 属性
 * @param {string} [j] - 参数 j 是一个可选参数
 * @return {Element} element - 函数返回值 element 是 一个 dom 元素
 */
function foo(a, b, c, d, g, j) {
    ...
}
```
使用 // FIXME: 标注问题 使用 // TODO: 标注问题的解决方式

详情参照 - [JSDoc Guide](http://yuri4ever.github.io/jsdoc/)

## 库，框架，工具命名

稳定版 : name.js
稳定版压缩：name.min.js
历史版本： name-[版本号].js eg: swiper-3.3.1.js
历史版本压缩： name-[版本号].min.js eg: swiper-3.3.1.min.js

## 与库，框架，工具相关的资源

与对应库，框架，工具同名，并且应位于其目录的 assets 目录下 eg: swiper-3.3.1.min.js -> assets/swiper-3.3.1.min.css