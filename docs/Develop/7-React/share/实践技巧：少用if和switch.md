# 实践技巧：少用if和switch

非常常见，使用switch或者if进行判断取值。但事实上，用一个Object去取值效率更高一点，代码也更少。
```javascript
//bad
class extends React.Component{
	//...
	render(){
		return <div>{this.renderDialog(this.state.type)}</div>
	}
	renderDialog(type){
		switch(type){
			case 'foo' :return <Dialog1/>;
			case 'bar' :return <Dialog2/>;
			case 'dsa' :return <Dialog3/>;
			case 'aaa' :return <Dialog4/>;
			case 'bbb' :return <Dialog5/>;
			default:<Dialog6/>;
		}
	}
}

//bad
class extends React.Component{
	//...
	render(){
		return <div>{this.renderDialog(this.state.type)}</div>
	}
	renderDialog(type){
		if(type==='foo'){
			return <Dialog1/>
		}
		if(type==='bar'){
			return <Dialog2/>
		}
		if(type==='dsa'){
			return <Dialog3/>
		}
		if(type==='aaa'){
			return <Dialog4/>
		}
		if(type==='bbb'){
			return <Dialog5/>
		}
		return <Dialog6/>
	}
}

//good
class extends React.Component{
	//...
	render(){
		return <div>{this.renderDialog(this.state.type)}</div>
	}
	renderDialog(type){
		const dialog={
			'foo':<Dialog1/>,
			'bar':<Dialog2/>,
			'dsa':<Dialog3/>,
			'aaa':<Dialog4/>,
			'bbb':<Dialog5/>,
		}
		if(dialog[type]){
			return dialog[type]
		}
		return <Dialog6/>
	}
}


```