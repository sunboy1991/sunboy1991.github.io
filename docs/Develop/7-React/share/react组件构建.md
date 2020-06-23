# react组件构建

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

### 注意事项
如果你将你写好的组件丢到通用目录里面，要注意写好该组件的文档，以及对props参数进行校验。  
组件的文档建议是使用jsdoc注释加在文件里面
```javascript
import somthing from 'xxx'
import somthing from 'xxx'
import somthing from 'xxx'

/**
 * @class 测试组件
 * @desc 简单写一下组件的功能
 * @prop {Number} value - 值
 * @prop {Number} TimeStamp - 时间戳
 * @prop {Function} onClick - 点击回调
 * @prop {Function} onTranslateEnd - ...
 * @method focus
 * @method blur
 * @method createItem
*/
export default class CTest extends React.Component{
//	...
}

```