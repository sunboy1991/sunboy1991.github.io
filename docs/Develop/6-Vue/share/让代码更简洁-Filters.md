# 让代码更简洁-Filters

> 格式化是我们比较常见的数据处理手段，但是如果需要多个方法进行格式化数据，那么其写法就会变得异常臃肿，所以 `vue` 中提供了过滤器这一极为简洁的用法。

对于 `filter` 中使用 `|` 的用法，相信使用过 `Shell` 命令的读者都知道管道符，两者的用法是一样的；而对于`filter` 分为全局过滤器和本地过滤器，你可以跨所有组件访问全局过滤器，而本地过滤器只允许你在其定义的组件内部使用。

### 全局过滤器

在注册一个全局过滤器，我们必须在 `vue` 实列之前定义，否则你将会得到一个 `"Failed to resolve filter: xxx"` 的错误信息。

通过 `vue.filter` 注册方法，

```javascript
Vue.filter("capitalize", (str) => {
    //...
})

//实例化vue
new Vue({
    //...
});
```

### 本地过滤器

注册一个本地过滤器，只需要在 `Vue` 组件中的 `filters` 属性中，添加一个过滤器就可以了。

```javascript
export default {
    filters:{
        capitalize(str) {
            //...
        }
    }
}
```

### 多参数过滤器

过滤器提供了多个参数的写法，在我们需要多个参数进行格式化数据，或者使用非默认值时使用。

```javascript
/** 时间戳格式化 */
Vue.filter("timeStampFormat", (timeStamp, fmt = "yyyy-MM-dd hh:mm:ss") => {
  //...
});
```

多参数用法：

```html
<div>\{\{ date, 'yyyy-MM-dd' | timeStampFormat \}\}</div>

//或者

<div>\{\{ date | timeStampFormat('yyyy-MM-dd') \}\}</div>
```

### 多个过滤器使用

就像管道符一样，`Vue` 同样允许我们同时使用多个过滤器，如：

```javascript
Vue.filter('capitalize', function (str){
    return `${str[0].toUpperCase()}${str.slice(1)}`;
});

Vue.filter('lowercase', function (str) {
    return str.toLowerCase();
});


<div>\{\{ "ABC" | lowercase | capitalize \}\}</div>
//<div>Abc</div>
```
