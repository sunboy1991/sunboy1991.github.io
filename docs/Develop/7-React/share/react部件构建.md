# react部件构建

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