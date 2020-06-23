# react命名风格

## 一般命名风格

类名使用大驼峰命名方式，其他使用小驼峰。

```javascript
//bad
class user {}

//good
class User {}

//bad
var User = {};

//good
var user = {};

//bad
var RichEditor;

//bad
var rich_editor;

//bad
class rich_editor {}

//bad
class richEditor {}

//good
var richEditor;

//good
class RichEditor {}
```

## 特殊组件命名风格

首先遵循上面的原则，其次根据分类，  
模块级别组件命名为`M + 模块名`，模块名首字母要大写。  
页面级别组件命名为`P + 页面名`，页面名首字母要大写。  
部件级别组件命名为`S + 部件名`，部件名首字母要大写。  
组件级别组件命名为`C + 组件名`，组件名首字母要大写。
```javascript
class MGame extends React.Component{} //游戏模块
class PGameHome extends React.Component{} //游戏模块首页
class SHeader extends React.Component{} //页面头部
class CTextInputer extends React.Component{} //文本输入组件
```