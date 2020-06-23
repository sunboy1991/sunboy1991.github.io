# mobx树型结构组织项目状态管理
> 遵循[mobx定义数据存储](https://cn.mobx.js.org/best/store.html)

一个简单的mobx数据仓库:
```javascript
class Player{
	@observable name="charten"
	@observable position=[0,0]

	@action rename(name){
		this.name=name;
	}
	@action moveTo([x,y]){
		this.position=[x,y]
	}
}
```
因为使用了mobx作为状态管理工具，因此严格按照mobx的开发规范进行开发，对于数据的操作，一律使用`@action`修饰符的方法进行修改，所有请求一律写在mobx里面。
```javascript
//bad in page or section
class PGameList extends React.Component{
	async requestGameList(){
		const res = await ajax();
	}
}

//bad without `@action`
class PGameListStore {
	async requestGameList(){
		const res = await ajax();
	}
}

//good in mobx with `@action`
class PGameListStore {
	@action async requestGameList(){
		const res = await ajax();
	}
}
```

项目里的mobx对数据的管理分两种，一种为**全局缓存**，另一种为**伴随页面**

全局缓存的数据的生命周期是从应用打开到离开应用，不会因为路由切换而销毁。它由各个数据模块组成，各个数据模块之间的关系如同下文的项目结构图，总的来说，其形状是一颗树，根节点是root，每个业务模块都是一个节点，一个节点下面又分为多个子节点组成，这个子节点可以是页面的数据状态仓库，也可以是部件的数据状态仓库。

<p style="text-align:center;">mobx树，每个节点都是一个类</p>

每个节点又保存着对父节点和根节点的引用，所以不同节点之间数据的交互可以通过根节点或者父节点进行访问与修改

```javascript
/**@name 一个子节点*/
import ChildNode from "..."

/**
 * @name 一个基本节点的实现
 * @class Node
 * @param {MobxNode} root 根节点的引用
 * @param {MobxNode} parent 父节点的引用
 */
class Node {
	constructor(root,parent){
		this.rootStore=root;
		this.parentStore=parent;
		this.childNode=new ChildNode(root,this);
	}
	/**修改子节点的数据*/	
	@action setChildData(){
		this.childNode.data=0;
	}
	/**调用父节点的方法*/
	@action callParentMethod(){
		this.parentStore.doSomething();
	}
	/**调用根节点的请求*/
	@action requestSomethingByRootRequestMethod(){
		this.rootStore.request.getGameList();
	}
}
```

因此，对于一些需求，比如在A页面点一个按钮要让B页面某个UI做出反应，这种ui状态应该使用全局缓存存起来。

伴随页面的数据如同字面意思，其生命周期就是从页面进来到页面销毁。与全局缓存不一样的是，它是在单独一个js文件在页面或者部件里面引进进来，使用方式与组件非常相似。

伴随页面的数据管理可以是React的state，写在页面的`index.js`里面。但是，如果使用了React的state就不要使用mobx，使用mobx就不要使用React的state。
```javascript
import PageData from "...";

//bad
class PPage extends React.Component{
	constructor(props){
		super(props);
		this.store=new PageData();
		this.states={

		}
	}
}

//good
class PPage extends React.Component{
	constructor(props){
		super(props);
		this.store=new PageData();
	}
}

//good
class PPage extends React.Component{
	constructor(props){
		super(props);
		this.states={

		}
	}
}

```



> <b style="font-size:25px;color:#fa0;">⚠️</b>  注意，mobx并不提供本地长期缓存的方法，如果有这方面需求可以自己写入localStroage
