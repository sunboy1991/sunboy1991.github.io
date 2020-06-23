# react组件拆分标准

## 概念解析

为了防止读者对文中一些用词产生一些模糊的概念，这里先解释对 react 组件划分的四个标准：

> 这四个标准都是结合我们自己的业务与开发习惯提出来的。

-   **模块 Module**：
    这里的模块不是指`javascript`里面的模块，而是指业务逻辑上的模块，业务模块。

-   **页面 Page**：
    页面，即 UI 页面，组成业务模块的单位，也是用户产生交互的地方。

-   **部件 Section**：
    Section，如同 html 里面的`<section>`标签一样，是组成一个页面的一部分。比如常见的页面头部`header`，底部`footer`，导航`nav`，头图`banner`，列表`list`等等。

-   **组件 Component**：
    这里的组件不是指 react 里面的组件，而是能够单独实现页面某一个功能、某一个 ui 的基本单位。

## 拆分标准

#### 模块构建

通常项目伊始，我们前端会拿到产品给的需求文档以及原型图，通过通读需求文档和原型图，我们可以对我们要做的产品与业务逻辑有个大概的理解，这时候就可以根据业务需求，划分项目模块路由。

> 所有页面的路由，都是项目模块的子路由！

模块的拆分非常容易，因为这个是业务给我们拆分好的。而它的作用，就是划分好页面路由，是页面的入口：

```javascript
class MGame extends React.Component {
    constructor(props) {
        super(props);
        const base = props.match.url;
        this.routes = [
            {
                path: `${base}/`,
                component: () => import("游戏列表页")
            },
            {
                path: `${base}/:id/detail`,
                component: () => import("游戏详情页")
            },
            {
                path: `${base}/:id/comment`,
                component: () => import("游戏评论页")
            }
        ];
    }

    render() {
        return (
            <Switch>
                {this.routes.map((item, i) => <Route key={i} {...item} />)}
            </Switch>
        );
    }
}
```

切记，模块里面是不涉及具体的业务逻辑处理的，也不提供 UI，所有 UI 都由页面提供。模块存在的意义是为了更好的组织起你的页面和代码，为了更好的多人分工。

项目目录里面会有一个 pages 目录，那里放着我们要写的页面代码：

```shell
pages
│
├─── Game # 游戏模块目录
│    │    index.js # 模块入口文件，分发子路由
│    ├─── List # 游戏列表页目录
│    ├─── Detail # 游戏详情页目录
│    └─── Comment # 游戏评论页目录
├─── User # 用户模块目录
...
```

一个简单的模块大致目录结构如上所示。

---

#### 页面构建

同样的，页面基本上也是业务给我们拆分好的。  
我们要做的，就是规划好这个页面的路由与路由上面的参数，这个往往跟业务关系很大，有时候其他业务会跳转到你写的页面里面来，如果你把路由的含义写得清楚，把路由参数写得明白，那么开发其他业务的小伙伴就会一下子明白如何针对你的路由进行写跳转。其次就是写好这个页面的 UI，原原本本还原设计稿。最后就是处理页面事件逻辑，处理用户交互，完成业务逻辑。

```javascript
class PGameList extends React.Component {
    render() {
        return (
            <div id="PGameList">
                <header />
                <section />
                ...
                <footer />
            </div>
        );
    }
}
```

注意一下页面的根`<div>`标签上有个 id，id 的值与类名的值一样。因为路由是唯一的，页面也是唯一的，所以，这个 id 也将会是唯一的。除了标识页面之外，这个 id 也非常适合在 css 选择器当中使用，特别是当选择器层数一样，带有 id 的选择器优先级比类名的优先级高，有利于构建页面私有样式以及防止 css 样式污染。

一个简单的页面目录大致如下：

```shell
Game 		# 游戏模块目录
│    index.js 	# 模块入口文件，分发子路由
├─── List 			# 游戏列表页目录
│         index.js  	# 游戏列表页文件
├─── Detail 		# 游戏详情页目录
│         index.js  	# 游戏列表页文件
└─── Comment 		# 游戏评论页目录
          index.js  	# 游戏列表页文件
```

---

> 上面两个，因为有产品需求文档、原型图的指引，区分并不困难，代码构建起来也非常直观。但是接下来的部件、组件、元件，区分起来就带有太大的主观性了。往往稍微不注意，代码就散乱起来。因此你需要注意区分这下面三者的关系

#### 部件构建

使用 react 开发的项目一般在我们公司前端开发里面都是属于那些大型的需要长期维护的项目，自然，一个页面也简单不到那里去。页面设计一复杂，构建页面的代码就复杂起来，所有结构功能统统堆在一个类里面，这就导致了后期维护十分难受。
因此，部件的出现，纯粹是为了将页面庞大的代码进行拆分，减少阅读页面代码、维护页面代码的复杂度。但是需要注意的是，部件的构建必须严格按照页面的布局结构去拆分构建，不能随意东拼西凑。

```javascript
// Game/List/header.js
class SHeader extends React.Component{
	render(){
		return (
			<header>
				{/*这里省去200行代码*/}
			</header>
		)
	}
}


// Game/List/index.js
import SHeader from "./header.js"
...
class PGameList extends React.Component{
	render(){
		return (
			<div id="PGameList">
				<SHeader/>
				<SNav/>
				<SSearch/>
				<SList/>
				<SFooter/>
			</div>
		)
	}
}
```

如上面的例子所示，假设一个页面里面的 header 很复杂至少有 200 行堆在里面，那你把它拆出去之后成为一个 SHeader 部件，页面结构瞬间简单起来了，如果哪个地方需要修改或者出现 bug，你可以迅速定位到具体的文件里面去修改而不用怕影响了其他部分的逻辑。

同时，部件是作为组成页面的一部分，可以跟页面一样，在内部处理业务逻辑，而组件、元件、模块不行，这一点很容易将他与其他概念区分开来。
部件一般与页面同目录存放:

```shell
Game 		# 游戏模块目录
│    index.js 	# 模块入口文件，分发子路由
├─── List 			# 游戏列表页目录
│         index.js  	# 游戏列表页文件
│         header.js  	# 游戏列表页头部部件文件
│         footer.js  	# 游戏列表页底部部件文件
│         list.js  	    # 游戏列表页列表部件文件
│         nav.js  	    # 游戏列表页导航部件文件
│         search.js  	# 游戏列表页搜索部件文件
├─── Detail 		# 游戏详情页目录
│         index.js  	# 游戏列表页文件
└─── Comment 		# 游戏评论页目录
          index.js  	# 游戏列表页文件
```

#### 组件构建

我们可以将一些功能性的，多个页面或者多个部件重复性出现的代码封装起来，成为一个组件。

与部件不同，组件不参与业务逻辑处理，就是不得在组件内部修改业务数据。它可以接受其他组件、部件、页面上的数据作为参数输入，然后将这些输出成页面 UI。

当存在用户交互产生事件处理时，组件可以在不涉及业务数据的情况下进行处理，而当这部分事件会造成业务数据的变动时，组件应当将事件暴露给部件或者页面去处理。

> 什么是业务数据？业务数据主要是那些从后端请求来或者需要提交给后端的数据，简而言之，就是与后端交互产生的数据。

之所以不让组件涉及到业务数据的处理，目的是尽量让组件与页面解耦，当其耦合性越低，复用率就越高，就能写越少的代码。

其次是为组件的改动或者 debug 考虑的，只要保持好组件参数字段与对外的事件接口不变，组件内部可以随意改动而不会影响业务逻辑。

一个简单的组件

```javascript
class CItem extends React.Component {
    render() {
        const { url, name } = this.props;
        return (
            <li onClick={this.onClick}>
                <img src={url} />
                <span>{name}</span>
            </li>
        );
    }

    onClick = () => {
        typeof this.props.onClick === "function" && this.props.onClick();
    };
}
```

一般来讲，一个组件的状态最好由外部来控制，但更多的时候，外部并不需要关心你的组件内部是怎么样的，只关心对组件的输入和输出。  
打个比方，一个数字输入框组件，如果用户对其输入一个字母，我们要让输入框的边框变红对用户的行为进行警告。输入框边框颜色我们自然可以交给外部去控制，仅仅是让外部传一个参数进来就可以了。但是，当外部更加关心用户输入的内容的时候，我们建议将边框变红的行为让组件内部自己处理。

```javascript
{%raw %}
class CNumberInputer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isWarn: false,
            value: ""
        };
    }
    render() {
        return (
            <input
                type="tel"
            style={{
                    borderColor:this.state.isWarn ? "red" : "blue"
			}}
                value={this.state.value}
                onChange={this.onChange}
            />
        );
    }

    onChange = e => {
        let value = e.target.value;
        let isWarn = false;
        if (/[^\d\.]/.test(value)) {
            isWarn = true;
        }
        this.setState({ value, isWarn });
        !isWarn &&
            typeof this.props.onChange === "function" &&
            this.props.onChange(value);
    };
}
{%endraw %}
```

是要让外部尽量去控制你组件的状态，还是要让组件只暴露关键事件和接受关键传参，这个要靠你自己的需求了。具体情况具体分析，不同组件作用不一样，这里没法给出一个统一的答案。

最后，如果这个组件是可以让不同模块使用的，就把组件文件放到项目目录下的`components/Common`目录下。  
如果这个组件只是模块内页面使用的，就把组件放到项目目录下的`components/模块名`下。  
如果这个组件只是页面内部件使用的，就把组件放到项目目录下的`pages/模块名/页面名/components`目录下

```shell
src
│
├─── components                # 组件
│    │
│    ├─── Common                   # 全局用组件目录
│    │    │
│    │    └─── NumberInput             # 组件目录
│    │         │    index.js
│    │
│    ├─── Game                     # 模块通用组件目录
│    │    │
│    │    └─── Item                    # 组件目录
│    │         │    index.js
│    │
│    └─── User                     # 模块通用组件目录
│
├─── pages
│    │
│    ├─── Game                 # 游戏模块目录
│    │    │    index.js            # 模块入口文件，分发子路由
│    │    └─── List                # 游戏评论页目录
│    │         │    index.js
│    │         │    header.js
│    │         │    xxx.js
│    │         └─── components         # 私有组件目录
│    │              │
│    │              └─── Item          # 组件目录
│    ├─── User                 # 用户模块目录
```

---
## 无状态组件、Component和PureComponent
react里面有三种方式创建组件:
```javascript
无状态组件:{
	const Test = (props) => <div {...props}/>
}

Component:{
	class Test extends React.Component{
		constructor(props){
			super(props);
			this.state={a:0}
		}
		render(){
			return <div {...this.props}>{this.state.a}</div>
		}
	}
}

PureComponent:{
	class Test extends React.PureComponent{
		render(){
			return <div {...this.props} />
		}
	}
}
```

无状态组件的特点是，它所有状态都是外部给予的，本身没有任何状态，非常适合用在一些纯UI渲染或者纯粹为了拆分代码的部件上。一般来说，如果你写了下面类似的代码，请使用无状态组件代替：
```javascript
class Test extends React.Component{
	render(){
		return <div {...this.props}/>
	}
}
```
没有构造器，没有使用state，没有绑定mobx，这种统统使用无状态组件进行构建。

而当你判断出这个组件应该将一些状态封装起来不需要外部操作，那你应该使用component的方式。这个也是我们最常用的方式。

PureComponent这个是React后来出的一个继承类，它是一个优化方式，特点是在`shouldComponentUpdate`这个生命周期里面替我们判断了一下`props`和`state`是否有变化，当然这个判断是一个浅复制的判断，然后一旦有变化再更新组件的内容。在一些状态更新频繁的组件或者页面里面，你可以使用它，可以大大减少页面dom更新的内容与数量从而提高页面性能。
