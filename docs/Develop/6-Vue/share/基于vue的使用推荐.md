# 基于vue的使用推荐

> `vue` 为我们的开发提供了许多便利，有时我们在使用过程中可能会面对用法的选择，本章主要对于 `vue` 一些用法进行讲述，提供更好的建议给大家。

* `v-show` 和 `v-if`用谁更好
* 捣蛋的 `this.$patent` 和 `this.$refs` 
* 组件异步加载和同步加载
* css之 `scoped` 加还是不加

### `v-show` 和 `v-if` 用谁更好

对于 `v-show` 和 `v-if` 是我们开发vue时经常用于进行元素的显示/隐藏的：

```
    <div v-show="visible"></div>

    <div v-if="visible"></div>
    <div v-else></div>
```

但是对于两者的区别，或许会有人说，当存在多个判断是就用 `v-if`，而如果只是一个的话那两者都可以使用；其实这种说法是错误的，无论是否多个，两者都有本质性的区别：

`v-if` 是根据条件的真假，进行元素及内部事件和子组件的重建和销毁的。

而相比之下，`v-show` 不管初始条件是什么，元素从一开始就会被渲染，其显隐只是单纯的CSS改变。

所以一般来说，对于需要频繁地切换的元素，我们使用 `v-show` 可以减少切换开销，而对于变化较少的条件，我们使用 `v-if` 可以减少初始的渲染开销。


### 捣蛋的 `this.$patent` 和 `this.$refs`

vue支持组件间的嵌套，所以有时我们进行组件之间的通信时，有可能会使用到 `this.$patent` 和 `this.$refs` 去获取组件或者是dom元素的上下文，大部分情况这种情况应该是被禁止，不给予使用的。因为组件本身从设计来说就应该是独立的，具有封装性的，一个不能应用其他场景的组件是不合格的，不是通过组件提供的属性和方法进行获取组件都可能导致组件在其他业务场景不可重用，针对这种情况应当完善组件间的通信或者设计好组件的api。


### 组件异步加载和同步加载

所谓的异步加载，其实就是懒加载或延迟加载，对于这两种模式的使用需要根据场景。
```
components: {
    // 异步加载
    aview: resolve => require(["./a.vue"], resolve),
    bview: resolve => require(["./b.vue"], resolve),

    // 同步加载
    aview:require("./a.vue"),
    bview:require("./b.vue"),
} 
```
1. 异步加载
* 优点：最大化的实现随用随载，团队开发不会因为沟通问题造成资源的重复浪费
* 缺点：当一个页面中嵌套多个组件时将发送多次的http请求，可能会造成网页显示过慢且渲染参差不齐的问题

2. 同步加载
* 优点：能够减少页面中的http请求，页面显示效果好
* 缺点：需要团队事先交流， 在框架中分别建立懒加载组件与非懒加载组件文件夹

有一点需要注意的是，虽然组件加载完将会缓存起来，以供再次调用，但是加载同个组件不能既使用同步加载又使用异步加载，这样会造成资源重用，因为异步加载是另外打包到chunk的，而同步则是在页面上嵌入组件代码。


### css的 `scoped` 加还是不加

在vue组件中，为了使样式模块化，可以在style标签上添加scoped属性，告诉vue在编译时给每个类名都加一个后缀，从而避免污染其余组件或者全局样式。
```
<template>
  <div class="button-warp">
    <button class="button">text</button>
  </div>
</template>

<style scoped>
  .button{
    color: #000;
  }
</style>

=>

<div data-v-2134c06c class="button-warp">
  <button data-v-2134c06c class="button">text</button>
</div>

.button[data-v-2134c06c]{
  color: #000;
}
```

这是一个非常好的举措，但是有时我们嵌套使用组件时，scoped往往会造成更多的麻烦。
```
<template>
    <div class="content">
        <my-button></my-button>
    </div>
</template>
    
<style>
    .content .button{
        color: #f00;
    }
</style>

=>

<div class="content">
    <div data-v-2134c06c class="button-warp">
        <button data-v-2134c06c class="button">text</button>
    </div>
</div>

.button[data-v-2134c06c]{
  color: #000;
}
.content .button{
    color: #f00;
}
```
从上面我们可以看出，我们本意是想对`.button`的样式进行重写，但是由于样式的权重，生效的依然是组件内的样式，如果要达到修改样式的目的，就必须加重我们要修改样式的权重。
或许有人说在嵌套组件也使用`scoped`不就可以加重权重了，但是结果并非我们所想：
```
<template>
    <div class="content">
        <my-button></my-button>
    </div>
</template>
    
<style scoped>
    .content .button{
        color: #f00;
    }
</style>

=>

<div data-v-512e5a43 class="content">
    <div data-v-512e5a43 data-v-2134c06c class="button-warp">
        <button data-v-2134c06c class="button">text</button>
    </div>
</div>

.button[data-v-2134c06c]{
  color: #000;
}
.content .button[data-v-512e5a43]{
    color: #f00;
}
```

从上面我们可以看出，组件内部并没有加上外部的标识的，这样重写的样式根本就没作用到实际的dom节点上，其实这也是可以理解的，`scoped`设计的初衷原本就是不让当前组件的样式修改其他任何地方的样式，所以对于内部样式，当然也不可以被修改到。

回到我们的问题，对于`scoped`加还是不加，取决于组件本身的样式是否足够完整，其次是是否不允许外部修改（当然，暴力是可以修改的，这里指的是创建本意），如果满足这些条件，则可以使用`scoped`，否则不要随意添加，造成使用者重写样式时的不便。