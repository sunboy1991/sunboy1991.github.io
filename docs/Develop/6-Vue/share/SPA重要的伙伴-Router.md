# SPA重要的伙伴-Router

> `vue-router` 的使用可能在MPA项目中并不多见的，但是对于SPA项目中是一个比较重要的部分，它和 `Vue.js` 的核心深度集成，让构建单页面应用变得更为容易。

* 响应路由参数变化
* 如何对router进行劫持
* 路由的懒加载
* History模式和404

### 响应路由参数变化

有时我们在开发过程中，可能会复用同一个页面，比如文章、订单等，这时我们就需要使用`动态路径参数`来区分页面，已达到多个页面的效果：

```
export default [
    // 动态路径参数 以冒号开头
    {
        path: '/order/:id', 
        component: Order,
    }
]
```

对于`路径参数`，其参数值将会被设置到 `this.$route.params` ，当我们在页面时，可以使用`this.$route.params.<name>` 的方式进行获取。

而由于使用路由参数，原来的组件实例会被复用，所以当`路径参数`发生变化时，页面是不会重新刷新的，这时我们就需要进行监听路由的变化。

虽然页面没有刷新，但是 `this.$route.params` 的参数值还是发生了变化的，所以我们可以通过监听 `$route` 来响应：

```
export default {
    watch: {
        '$route' (to, from) {
            //...
        }
    }
}
```

或者通过监听 `beforeRouteUpdate` 来响应：

```
export default {
    beforeRouteUpdate (to, from, next) {
        //...
    }

}
```

### 如何对router进行劫持

有时我们使用vue-router构建单页面时，用户可能没有页面权限或其他原因，这时我们就需要对路由进行拦截，让用户重定向到指定的页面。

```
// 路由钩子
router.beforeEach(({ meta, path }, from, next) => {
    //进入登录或注册页面
    if (path == "/login" || path == "/reg") {
        if (isLogin) {
            //如果用户已登录，则跳转到用户页面
            return next({ path: "/admin" });
        }  
    } 
    //进入需要用户权限的页面
    else if (true === meta.auth) {
        if (!isLogin) {
            //如果用户未登录，则跳转到登录页面
            return next({ path: "/login" });
        }
    }
    next();
});
```

### 路由的懒加载

这里与前面组件道理是一样的，由于SPA项目在进行路由配置时需要载入各个页面组件，如果没有应用懒加载，则 `webpack` 打包后的文件将会异常的大，造成进入首页时，需要加载的内容过多，时间也过长之类的问题，所以我们运用懒加载可以有效的将页面进行划分，在需要时才进行加载页面，减少首页加载的用时，写法如下：

懒加载的写法：
```
export default [
    {
        path: "/home",
        component: resolve => require(["@/views/Home"], resolve),
    },
    {
        path: "/about",
        component: resolve => require(["@/views/About"], resolve),
    },
    {
        path: "/admin",
        component: resolve => require(["@/views/Admin"], resolve),
    },
    //...
];
```

非懒加载的写法：
```
import Home from "@/views/Home";
import About from "@/views/About";
import Admin from "@/views/Admin";

export default [
    {
        path: "/home",
        component: Home,
    },
    {
        path: "/about",
        component: About,
    },
    {
        path: "/admin",
        component: Admin,
    },
    //...
];
```

### *History模式和404

`vue-router` 默认是使用 `hash` 模式，使用 URL 的 `hash` 来模拟一个完整的 URL，如果不想使用 `hash` 的话，可以使用路由的 `history` 模式，这种模式通过 `history.pushState` 来完成 URL 的跳转而不需要重新加载页面。

```
    http://blog.hsuna.com/#article/5b3b2e5eb77bde617ca41666

    =>

    http://blog.hsuna.com/article/5b3b2e5eb77bde617ca41666
```

然而使用 `history` 模式的话，由于所有 URL 都是虚拟路径，所以发布到服务器时，我们则需要配置服务器，将所有访问 URL 指向到 `index.html`，例如

nginx：
```
location / {
  try_files $uri $uri/ /index.html;
}
```

由于URL全部被指向到该html文件，即使是不存在的URL也会被指向，所以我们需要在 `router` 上进行通配配置，将不存在的页面指向到404页面上。
```
export default [
    //... 
    { 
        path: '*',
        component: resolve => require(["@/views/404"], resolve),
    }
]
```