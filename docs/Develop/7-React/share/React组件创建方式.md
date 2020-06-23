# React组件创建方式

> 无状态组件、Component和PureComponent

react里面有三种方式创建React组件:
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

而当你判断出这个React组件应该将一些状态封装起来不需要外部操作，那你应该使用component的方式。这个也是我们最常用的方式。

PureComponent这个是React后来出的一个继承类，它是一个优化方式，特点是在`shouldComponentUpdate`这个生命周期里面替我们判断了一下`props`和`state`是否有变化，当然这个判断是一个浅复制的判断，然后一旦有变化再更新组件的内容。在一些状态更新频繁的组件或者页面里面，你可以使用它，可以大大减少页面dom更新的内容与数量从而提高页面性能。