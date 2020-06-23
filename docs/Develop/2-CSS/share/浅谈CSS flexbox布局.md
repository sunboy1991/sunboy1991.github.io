# 浅谈CSS flexbox 布局

[TOC]

## 一、序言

CSS作为构建Web生态的三大支柱之一，和JS相比，发展的步伐走的十分缓慢。1999年W3C推出CSS3后，时隔7年，诞生了sass类型的预处理器，直到2014年推出的 CSS Next并结合时下较为流行的CSS Modules后，CSS才勉强跟上野蛮生长的Web工程。

其间，CSS布局经历了从早期table布局到DIV + CSS 布局的演进，应移动互联网主流的呼唤，标准委员会推出了弹性布局系统 flexbox 以及略有争议的网格布局 Grid。

一切归结于这样的一个问题：怎样通过 CSS 简单而优雅完成静态页面布局。《CSS揭秘》的作者xxx形象说到，“多年以来，垂直进行水平居中已经成为了CSS领域的圣杯”，她还引用了James Anderson的推文

> 44年前我们就把人类送上月球了，但现在我们仍然无法在CSS中实现垂直居中

为了解决这样一个常见的布局问题，FE们绞尽脑汁，想出了许多不甚优雅的方案，像表格布局法，行内块法，绝对定位法（即大家熟悉的固定尺寸利用absolute的方法），基于视窗单位法（指vw, vh）等等，这些方案能在特定的条件下解决问题，但都不是通过一种直观的方式来解决。

终于，在2009年，W3C制定了早期flexbox布局草案。时至今日，flexbox毋庸置疑成为业内最为推崇的布局解决方案，现在，我们试着用flexbox 实现垂直居中：

```css
/* 使用 flex 布局首先要设置父容器 display: flex，然后再设置 justify-content: center 实现水平居中，最后设置 align-items: center 实现垂直居中。 */
#myBox {
    display: flex;
    justify-content: center;
    align-items: center;
}
```

***So easy, right ?***

下面，我们来详细认识flexbox.

## 二、flexbox布局

### flexbox 基本概念

#### flexbox布局是什么

flexbox是CSS3中一个新特性，旨在提供一种更为有效、可控的布局方式，来更好地控制元素对齐和空间的分配，甚至是在元素未知大小或者动态的情况下，因而flexbox也被称作"Flex布局"。flexbox背后的主要思想是给容器控制元素的宽度、高度的能力，让其可以自动填满容器的可用空间。

这个特性为Web开发带来极大的简便，特别是在移动终端的布局下，各大厂都有针对自身的一套布局最佳实践。一些常见的布局场景，像可伸缩、可拓展的内容、元素垂直居中、元素空间等分等，用flexbox来布局优势显现的更为强大。

#### flexbox 模型

首先，flexbox是一个布局的模块，这意味着，它包含着一系列的东西，而不是单一的属性。

flex 的核心的概念就是 容器 和 轴。容器包括外层的 父容器 和内层的 子容器，轴包括 主轴 和 交叉轴。

作为容器的父元素，称为 flex容器（flex container），而容器的子元素，称为 flex项目（flex item）。

规范中的一张图，解释了Flex布局的主要思想：

![来自https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox](http://other-1251009253.file.myqcloud.com/for20171107/flex_terms.png)

flex item是沿着main axis(从main-start向main-end)或者cross axis(从cross-start向cross-end)排列。

下面解释下各属性的概念：

| props                    | description                              |
| :----------------------- | ---------------------------------------- |
| main axis                | 沿着 flex 元素放置的方向延伸的轴                      |
| main-start \| main-end   | 主轴的开始与结束                                 |
| main size                | Flex项目的在主轴方向的宽度或高度就是项目的主轴长度，Flex项目的主轴长度属性是width或height属性，由哪个对着主轴方向决定 |
| cross axis               | 垂直于 flex 元素放置方向的轴                        |
| cross-start \| cross-end | 交叉轴的开始与结束                                |
| cross size               | Flex项目的在侧轴方向的宽度或高度就是项目的侧轴长度，Flex项目的侧轴长度属性是width或height属性，由哪个对着侧轴方向决定 |

### 基础语法

![](http://other-1251009253.file.myqcloud.com/for20171107/Flexbox-map.png)

#### 1. 容器属性

**display**

定义一个flex container，根据其取的值来决定是内联还是块。flex container会为其内容建立新的伸缩格式化上下文。

**flex-direction**

改属性主要决定flex item在容器内的排列方式：

| props          | description                   |
| -------------- | ----------------------------- |
| row            | 表示flex item以横向且从左到右的方式排列（ltr） |
| row-reverse    | 表示flex item以横向且从右到左的方式排列（rtl） |
| column         | 表示flex item以纵向且从上到下的方式排列（ttb） |
| column-reverse | 表示以纵向且从下到上的方式排列（btt）          |

**flex-warp**

默认情况下会让flex item保持在一行内，可以通过这个属性来设置让flex item是否换行（/列），这个属性结合着flex-direction属性可以决定换行后新的一行或一列的排序方式。

| props        | description                              |
| ------------ | ---------------------------------------- |
| nowrap       | 表示flex item保持在一行或一列（当flex-direction为column或column-reverse的时候）不换行/列 |
| wrap         | 跟nowrap相反，表示flex item换行或换列，但以默认（左到右或上到下）的方式排列 |
| wrap-reverse | 表示flex item换行且反向排列（右到左或下到上）              |

**flex-flow**

flex-direction和flex-wrap属性的简写
```css
flex-flow: <flex-direction> || <flex-wrap>  /* default row nowrap*/
```

**justify-content**

这个属性定义了flex item在横轴方向的对齐方式，当flex item的尺寸在横轴方向都是不变的或者达到最大尺寸的情况下，用来分配额外剩余的可用空间，或者当flex item在横轴排布要超出容器的时候，进行压缩控制：

| props         | description                              |
| ------------- | ---------------------------------------- |
| flex-start    | flex item在main轴开始方向对齐                    |
| flex-end      | flex item在main轴结尾方向对齐                    |
| center        | flex item在main轴居中对齐                      |
| space-between | flex item始终保持在一行，main轴两端对齐               |
| space-around  | flex item等间距对齐，但第一个元素距离容器左边的间隔是跟下一个元素间隔的二分之一，因为第一个元素右边有一个单元的间隔，第二个元素左边也有一个单元的间隔 |

**align-items**

该属性定义了flex item在纵轴方向的对齐方式，可以把它想象为justify-content在纵轴方向的定义：

| props      | description                              |
| ---------- | ---------------------------------------- |
| flex-start | flex item在cross轴方向以开始方向对齐                |
| flex-end   | flex item在cross轴方向以结尾方向对齐                |
| center     | flex item在cross轴方向居中对齐（该属性值能很方便地让元素在容器内垂直居中对齐） |
| baseline   | flex item在cross轴方向以其文本的基准线对齐             |
| stretch    | flex item在cross轴方向填满整个容器（当固定尺寸的时候该属性不生效） |

**align-content**

当伸缩容器的侧轴还有多余空间时，`align-content`属性可以用来调准伸缩行在伸缩容器里的对齐方式，这与调准伸缩项目在主轴上对齐方式的`justify-content`属性类似。

| props         | description                              |
| ------------- | ---------------------------------------- |
| flex-start    | 各行向伸缩容器的起点位置堆叠。伸缩容器中第一行在侧轴起点的边会紧靠住伸缩容器在侧轴起点的边，之后的每一行都紧靠住前面一行。 |
| flex-end      | 各行向伸缩容器的结束位置堆叠。伸缩容器中最后一行在侧轴终点的边会紧靠住该伸缩容器在侧轴终点的边，之前的每一行都紧靠住后面一行。 |
| center        | 各行向伸缩容器的中间位置堆叠。各行两两紧靠住同时在伸缩容器中居中对齐，保持伸缩容器在侧轴起点边的内容边和第一行之间的距离与该容器在侧轴终点边的内容边与第最后一行之间的距离相等。（如果剩下的空间是负数，则行的堆叠会向两个方向溢出的相等距离） |
| space-between | 各行在伸缩容器中平均分布。如果剩余的空间是负数或伸缩容器中只有一行，该值等效于`flex-start`。在其它情况下，第一行在侧轴起点的边会紧靠住伸缩容器在侧轴起点边的内容边，最后一行在侧轴终点的边会紧靠住伸缩容器在侧轴终点的内容边，剩余的行在保持两两之间的空间相等的状况下排列。 |
| space-around  | 各行在伸缩容器中平均分布，在两边各有一半的空间。如果剩余的空间是负数或伸缩容器中只有一行，该值等效于`center`。在其它情况下，各行会在保持两两之间的空间相等，同时第一行前面及最后一行后面的空间是其他空间的一半的状况下排列。 |
| stretch       | 各行将会伸展以占用剩余的空间。如果剩余的空间是负数，该值等效于`flex-start`。在其它情况下，剩余空间被所有行平分，扩大各行的侧轴尺寸。 |

> 只有多行的伸缩容器才会在侧轴上有多余的空间以供对齐，因为仅包含一行的伸缩容器中，唯一的一行会自动伸展填充全部的空间。著作权归作者所有。

#### 2. 元素属性

**order**

该属性用于flex item相对于兄弟元素的排序，其接收一个整数值（负数也生效），数值越小，排序越前

```css
order: <integer>
```

**flex-grow**

该属性定义了flex item在有需要的时候进行尺寸扩展，接收一个无单位的数值作为比例（负数值无效），其决定了该flex item占用多少容器内可用的空间。

比如，当所有的flex item都是设置了该属性为1的时候，容器内剩余的可用空间就平分给每个flex item，当某个flex item的flex-grow值为2的时候，该flex item就占用两倍于其他flex item的可用空间。

```css
flex-grow: <number> /* default 0*/
```

**flex-shrink**

该属性定义了该flex item在必要时候的收缩属性，跟flex-grow的效果相反，使用方法一致，负数值无效

```css
flex-shrink: <number>/* default 1*/
```

**flex-basis**

定义该flex item默认的初始尺寸，它可以是一个长度值也可以是一个关键词，跟width和height属性相同，用来指定子项初始的尺寸值。

```css
flex-basis: <length> | auto /* default auto*/
```

**flex**

该属性是flex-grow,，flex-shrink，flex-basis三个值的简写方式，默认值为0 1 auto，其中第二三个属性flex-shrink和flex-basis值是可选的：

```css
flex: none | [ <flex-grow> <flex-shrink>? || <flex-basis> ]
```

> 如果flex取值为none时，其相当于取值为0 0 auto

**align-self**

对比align-items属性，我们知道这个是针对某个flex item在cross axis方向的对齐方式定义，该属性可以覆盖对容器上定义的align-items属性

| props      | description                              |
| ---------- | ---------------------------------------- |
| flex-start | 伸缩项目在侧轴起点边的外边距紧靠住该行在侧轴起始的边。              |
| flex-end   | 伸缩项目在侧轴终点边的外边距靠住该行在侧轴终点的边 。              |
| center     | 伸缩项目的外边距盒在该行的侧轴上居中放置。（如果伸缩行的尺寸小于伸缩项目，则伸缩项目会向两个方向溢出相同的量）。 |
| baseline   | 如果伸缩项目的行内轴与侧轴为同一条，则该值和`flex-start`等效。其它情况下，该值将参与基线对齐。所有参与该对齐方式的伸缩项目将按下列方式排列：首先将这些伸缩项目的基线进行对齐，随后其中基线至侧轴起点边的外边距距离最长的那个项目将紧靠住该行在侧轴起点的边。 |
| stretch    | 如果侧轴长度属性的值为`auto`，则此值会使项目的外边距盒的尺寸在遵照`min/max-width/height`属性的限制下尽可能接近所在行的尺寸。 |

### 浏览器支持

在移动端由于新语法还没完全确定，所以flexbox语法一些设备并不完全支持。

兼容性可以查询下 caniuse 网站：

![来自 https://caniuse.com/#search=flex](http://other-1251009253.file.myqcloud.com/for20171107/flexbox_caniuse.png)

目前flexbox规范浏览器支持情况如下：

> Chrome 29+
> Firefox 28+
> Internet Explorer 11+
> Opera 17+
> Safari 6.1+ (prefixed with -webkit-)
> Android 4.4+
> iOS 7.1+ (prefixed with -webkit-)

#### 怎么兼容

1. 使用 autoprefixer 处理浏览器前缀

浏览器厂商以前就一直在实施CSS3，但它还未成为真正的标准，当一些CSS3样式语法还存在波动时，它们提供针对浏览器的前缀。

在使用构建工具，像fis, gulp, webpack的时候，可以使用autoprefixer模块，配合 post-css 使用，以 fis 举例：

```javascript
// fis 匹配到所有css, less, scss文件，在预处理阶段，调用autoprefixer插件，
// 将新的css特性语法尽可能的降级处理到可以支持市面上所占份额大于5%的浏览器
fis.match('*.{css,less,scss}', {
	preprocessor: fis.plugin("autoprefixer", {
		"browsers": ["> 5%"]
	})
})
```

2. 使用旧版本的box布局，可以配合less, sass之类的预处理器使用：

```less
.box(){
  display:-webkit-box;
  display:-moz-box;
}
.box-align(@arg){
  -webkit-box-align: @arg;
  -moz-box-align: @arg;
}
.box-pack(@arg){
  -webkit-box-pack: @arg;
  -moz-box-pack: @arg;
}
.box-orient(@arg){
  -webkit-box-orient: @arg;
  -moz-box-orient: @arg;
}
.box-flex(@arg){
  -moz-box-flex: @arg;
  -webkit-box-flex: @arg;
}
.box-flex(@arg){
  -moz-box-flex: @arg;
  -webkit-box-flex: @arg;
}
```

## 三、flexbox布局实践

认识到flexbox布局之后，是不是已经迫不及待想要应用到项目中去了？

现在，让我们手持flexbox这柄利器，开始布局圣战！从零搭建一个简洁的个人博客网站。

### 规划

![http://other-1251009253.file.myqcloud.com/for20171107/Blog-struct.png](http://other-1251009253.file.myqcloud.com/for20171107/Blog-struct.png)

一个常规的Blog，主要包含文章列表页和文章详情页，常见的结构是页头作为导航，底部作为版权或者其他。

设计上，我们崇尚扁平化的极简风格，在极简的UI框架wing.css我们稍作改造以便适应我们网站所需要的风格。

技术选欣上，我们采用media query来做响应式，兼容各种移动设备，用CSS rem单位来覆盖浏览器默认样式。

目录组织上，我们约定用经典的 css + img + js 行为、表现，结构分离的形式。

样式书写过程中，尽可能的遵循OOCSS规范，做到简单、可维护以及高复用。

另外，考虑非现代浏览器对flexbox完全不支持，这里我们就不考虑旧版浏览器兼容性了，推荐用chrome访问。

### Hello World


#### 结构层
整站采用 utf-8 国际编码，在meta 头，统一所有浏览器的视口

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0,minimal-ui">
```

导航栏，使用html5的 nav 标签，大体内容如下：

```html
<nav class="nav">
    <a href="#" class="nav-logo">logo</a>
    <a href="index.html" class="nav-item">Home</a>
    <a href="about.html" class="nav-item">About</a>
    <a href="#" class="nav-item">More</a>
</nav>
```

页面底部，使用 footer标签：

```html
<footer>
    <h5>copyright 2017</h5>
</footer>
```

组件容器，用 section 标签包裹，80%宽度，使其居中：

```html
<section class="content center">
	some code ...		
</section>
```

列表卡片，单个卡片作为一个flex item，其父元素作为flex container

```html
<div class="card">
    <h5 class="card-header">Title</h5>
    <p class="card-body">something...</p>
    <div class="card-footer center text-center">
        <p>
            <a href="#">article detail link</a>
        </p>
    </div>
</div>
```

#### 表现层

我们先用统一一下font-size和浏览器各个标签控件的默认样式：

```css
* {
  box-sizing: border-box;
}
html,
body {
  margin: 0;
  padding: 0;
}
body {
  line-height: 1.6;
  color: #111;
  font-size: 1rem;
  font-weight: 400;
  font-family: -apple-system, BlinkMacSystemFont, Avenir, "Avenir Next", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
}

...

.row {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
}

...

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin-top: 0;
  margin-bottom: 10px;
  font-family: -apple-system, BlinkMacSystemFont, Avenir, "Avenir Next", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 500;
}
h1 {
  font-size: 2.986rem;
  line-height: 1.2;
}
h2 {
  font-size: 2.488rem;
  line-height: 1.25;
}
h3 {
  font-size: 2.074rem;
  line-height: 1.3;
}
h4 {
  font-size: 1.728rem;
  line-height: 1.35;
}
h5 {
  font-size: 1.44rem;
  line-height: 1.5;
}
h6 {
  font-size: 1.2rem;
  line-height: 1.6;
}
p {
  font-size: 1rem;
}
```

再针对移动设备作响应式处理：

```css
@media (max-width: 768px) {
  h1 {
    font-size: 2.027rem;
  }
  h2 {
    font-size: 1.802rem;
  }
  h3 {
    font-size: 1.602rem;
  }
  h4 {
    font-size: 1.424rem;
  }
  h5 {
    font-size: 1.266rem;
  }
  h6 {
    font-size: 1.125rem;
  }
}
```

有了以上样式作为全局样式基础，再针对页面业务来单独定制样式，页面主要以flexbox为主：

```css
.content {
	width: 80%;
    margin: 0 auto;
    text-align: left;
}

......

.article > p {
	width: 100%;
}
```

更多内容请参照源码 ./resource/css/**.css

之后，可以开始收集素材资料，为我们的页面填充内容，时刻记住：内容为王。

最终效果，可以直接浏览 xxx
源码可参见 xxx

## 四、总结

## 参考文献

https://segmentfault.com/a/1190000004070556

https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox

https://developer.mozilla.org/en-US/docs/Web/CSS/flex

https://github.com/ohansemmanuel/Understanding-Flexbox

http://the-echoplex.net/flexyboxes/

http://www.w3cplus.com/css3/a-guide-to-flexbox-new.html

http://www.w3cplus.com/css3/flexbox-adventures.html

http://www.xiaoxiangzi.com/Programme/CSS/2540.html

https://juejin.im/post/58e3a5a0a0bb9f0069fc16bb

http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html

https://segmentfault.com/a/1190000002490633

https://chriswrightdesign.com/experiments/flexbox-adventures/

https://www.w3.org/html/ig/zh/css-flex-1/

https://www.w3.org/TR/css-flexbox/#box-model

https://scotch.io/tutorials/a-visual-guide-to-css3-flexbox-properties

https://css-tricks.com/snippets/css/a-guide-to-flexbox/
