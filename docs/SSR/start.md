# 介绍

## 什么是SSR
SSR（**S**erver **S**ide **R**endering），即服务端渲染。是一种在服务端渲染html的能力，在早期的web没有ajax的时候，所有web服务都是通过SSR实现。

与SSR相对的，是CSR(**C**lient **S**ide **R**endering)，客户端渲染，指的是利用js在客户端生成渲染html。使用CSR，可以使前后端分工更合理，从而加快web应用的开发速度。同时服务端不需要再渲染html了，可以节约出运算资源和带宽去提高其他方面的性能。  

还有SSR与CSR中间的过渡模式，预渲染（Pre-Rendering），本质上预渲染是SSR的一种，与SSR不同的是，每当有请求访问到服务器时，SSR会立即渲染出一个新页面响应请求。而预渲染则是在服务启动之初立即将所有页面渲染成静态html文件，之后再有请求访问进来服务器时，服务器直接返回静态html文件，不再需要动态渲染。业界知名cms系统wordpress就是采用此技术。

> 我们公司的大多数游戏pc官网采用的是预渲染技术，移动官网以及平台活动、平台社区等采用CSR技术，后端自己搭建的后台系统、旧客服系统的一些表单页采用SSR

## 为什么需要SSR
主要有两方面需求：
### 1.SEO
在CSR虽然有种种优势，但是却不利于搜索引擎的爬虫对页面内容进行爬取收集，自然没办法提高站点的SEO。这个只能通过SSR或者预渲染解决。(实在没条件还可以花钱，不过这不在本文讨论范围之内)

### 2.加快首屏加载速度
采用SSR或者预渲染的页面，因为html在页面加载之前就已经准备好了，所以只要服务器响应了html，用户即可看到页面内容。而采用CSR的页面，因为服务端发送过来的只是一个空html页面和一大段js代码，所以用户还需要等待js代码生成html的时间，而在这段时间里面，浏览器无法为用户展示出内容，如果没有其他样式的话，呈现给用户的就是一片空白。

## NodeJS的SSR
早期Nodejs的SSR与php类似，本质上都是使用字符串模板，比较有代表性的是原始字符串模板、ejs模板引擎和pug模板引擎：
```javascript
//js原生字符串模板
responce.end(`
<html>
    <head></head>
    <body>
        <ul>
            ${new Array(100).fill(1).map(i=>`<li>${i}</li>`)}
        </ul>
    </body>
</html>
`)
```
```ejs
<!-- ejs模板 -->
<html>
    <head></head>
    <body>
        <ul>
            <% for(let i=0;i<100;i++) {%>
                <li><%=i%></li>
            <%}%>
        </ul>
    </body>
</html>
```
```pug
// pug 模板
html
  head
  body
    ul
      each val in [1, 2, 3, 4, 5]
      li= val
```
由于nodejs的特殊性，同一行代码即可以在浏览器上跑，也可以在服务器上运行。因此，对于用于CSR的js代码，如果能在服务端执行，那么一个web应用就同时兼具了CSR和SSR的优点！  
- 当站点开发的时候，采用CSR，后端开发不需要关注前端，前端也不需要去维护后端模板引擎代码，合理分工提高开发效率。  
- 当站点部署需要SEO或者首屏加载速度的时候，则在服务器里面跑一个node服务用于SSR，将代码生成html发送回给客户端。  
- 当站点压力过大时，关闭node的SSR服务，改从静态服务器中发送静态文件用于CSR，减轻服务端压力，使站点不容易崩溃。

目前前端三大框架：React/Vue/Angular都实现了对SSR的支持！  
而任何使用的虚拟DOM（[Virtual DOM](/VirtualDOM/start.html)）技术的前端框架，同样也有能力实现SSR。

## 前端框架实现SSR原理
原本的前端框架怎么一跃成为服务端渲染工具呢？  

首先，使用前端框架开发的时候，编写的不是浏览器真实的html，而是框架定义的模板。其次，这些模板不一定能在浏览器内运行，它的语法不一定是浏览器支持的，需要js进一步编译成为可执行的js代码或js对象，这一步可以在浏览器内完成。但在生产环境里面不会这样做，而是打包时通过nodejs先将这些模板编译成可执行的js代码或js对象。之后浏览器拿到这些js代码或对象就直接构建页面，省去了编译的开销。  

这些可执行的js代码或js对象，就是虚拟DOM（[Virtual DOM](/VirtualDOM/start.html)）

所以，只需要针对虚拟DOM，分别生成两份js文件，一份是专门放在客户端执行的js文件，它依赖于各种浏览器API，将虚拟DOM构建成为真实的页面。另一份是专门放在服务端执行的js文件，它仅依赖js自己的功能，将虚拟DOM生成html字符串。

以vue为例子，
有一个app.vue的文件，它将展示一个红色的"APP"单词
```vue
<!--app.vue-->
<template>
    <div id="app">APP</div>
</template>
<script></script>
<style>
#app{
    color:#f00
}
</style>
```
在客户端，我们直接拿到它之后把它展现到页面上
```javascript
import Vue from 'vue'
import App from 'app.vue'
new Vue({
    el:'body',
    template:'<app/>'
    components:{App},
})

```

在服务端，我们直接拿到它之后把它生成为html字符串
```javascript
// 第 1 步：创建一个 Vue 实例
import Vue from 'vue'
import App from 'app.vue'
import VueSSR from 'vue-server-renderer';
const app = new Vue({
  template: `<app/>`
  components:{App}
})

// 第 2 步：创建一个 renderer
const renderer = VueSSR.createRenderer()

// 第 3 步：将 Vue 实例渲染为 HTML
renderer.renderToString(app, (err, html) => {
  if (err) throw err
  console.log(html)
})
```
这个过程还是很简单的。困难的是，在组件里面如何区分环境去执行不同环境下的代码而已

## 开箱即用
React SSR开箱即用版本：[Next.js](https://nextjs.org/)  
Vue SSR开箱即用版本：[Nuxt.js](https://zh.nuxtjs.org/)

## 直出同构
当使用nodejs做SSR，且nodejs承担中台或者后台的作用时，称为直出同构。  

直出同构可以最大限度的复用公共模块，比如前后端共同使用同一个加解密函数、使用同一个数据结构、同一个单元测试乃至同一套打包配置等等。

> 毫不夸张地说，只要你愿意，你甚至可以把前后端的代码都塞到同一个js文件里面去，比如上一行是服务端的代码声明了一个接口，下一行就是客户端针对这个接口的ajax请求函数....，详见[babel-plugin-label-switch](https://github.com/Char-Ten/babel-plugin-label-switch)    

如果项目再采用typescript开发，前后端可以共同维护一套接口数据，开发或迭代过程中，任何一端修改了接口数据格式，另一端的代码在IDE里面会立即报错，且无法打包。因此在开发阶段就可以保证前后端数据一致，最大程度地减少由于前后端在接口问题上的沟通成本以及由这个问题可能带来的bug。

## 总结
SSR就是服务端渲染，为的就是解决SEO和首屏加载速度问题。如果没有这两个需求，直接选择CSR客户端渲染。预渲染介于这两者之间，当需要SEO的内容变动不频繁的情况下可以先把页面渲染成静态文件。    
因为Nodejs的特殊性，相比其他后端语言，做SSR的同时可以兼具CSR的优点，而且当SSR压力大时可以动态切换到CSR上。而其原理是前端框架同个模板，不同平台的采用不同的渲染方式。  
直出同构可以使前后端模块相互复用，采用ts还可以保证前后端数据一致性，减少沟通成本和相关bug。
