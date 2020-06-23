# react开发变量命名

## 变量、类名统统使用名词

普通变量使用名词命名。

```javascript
//bad
var set = {}; //设置表

//good
var settings = {}; //设置表

//bad
class BindAccount extends React.Component {} //绑定账号页

//bad
class BindingAccount extends React.Component {} //绑定账号页

//good
class AccountBinder extends React.Components {} //绑定账号页
```

-   类名命名注意

如果一个类名上出现了动作性的词汇，类似`bind/create/report/edit/manage...`这些，需要将这些词转变为表述对于动作执行者的名词`binder/creater/reporter/editor/manager...`。

所以上面的`BindingAccount`中，`Binding`和`Account`都是名词，但是在命名上，更推荐使用`AccountBinder`(账户绑定者)这个称号。

最简单例子，有人问你：你是做什么的？回答一：我是写程序的/敲代码的。回答二：我是程序员。显然回答二更正式一些。

把你所写的对象当成你自己，想象一下你希望别人根据你的工作如何称呼你显得更正式一些。

```javascript
//bad
class WritingCode {}

//bad 不推荐，因为不合理不够语义化
class CodeWriter {}

//good
class Programmer {}

//good
class Coder {}
```

-   布尔值命名注意

布尔值需要在变量名前加上 is 或者 has

```javascript
//bad
var hidden = true;

//good
var isHidden = true;
```

> 扩展：如果要表达曾经的状态，可以考虑使用`was`或者`had`。  
> 比如在社区 K 钻详情页里面，有一个需求是这样的，为了防止用户误以为可以重复绑定手机解绑手机刷 K 钻，需要判断用户是否曾经绑定过手机，如果绑定过的话就不需要显示绑定奖励了。
> 那么这个表达曾经绑定过手机的布尔状态变量，你可以使用*是否为第一次绑定*`hasFirstBindPhone`或者`isFirstBindPhone`这个名字去判断。但是更简单点，`wasBindPhone`或者`hadBindPhone`就可在时态上与`isBindPhone`和`hasBindPhone`区分开来。

-   数组、JSON 类型变量命名注意

数组命名，需要使用单词的复数形式（如果该单词是可数名词的话）或者在后面加个`list`后缀：

```javascript
//bad
var topic = [];

//good
var topics = [];

//good
var topicList = [];

//bad 使用了List就不要使用其复数形式了。
var topicsList = [];

//good，因为weather本身是不可数名词，没有复数形式
var weather = [];

//good，不可数名词后面随便加List
var weatherList = [];
```

具体单词使用的时候百度翻译一下，看看有没有复数形式，有的话，一定要在数组命名上使用。

JSON 类型的变量，一般来说，没有太多规则，它是什么就是什么。当然你也可以给它加类似`states/map/store/data/info/config`这些后缀来更具体表达它的内容。

```javascript
//good
var user = {}; //泛指用户相关的数据

//good
var userStates = {}; //特指用户状态的数据

//good
var userMap = {}; //特指跟用户相关的映射表

//good
var userStore = {}; //特指存储用户数据的仓库

//good
var userData = {}; //特指用户相关的原始数据

//good
var userInfo = {}; //特指用户相关的经过处理的数据

//good
var userConfig = {}; //特指用户相关的配置数据

//good 跟数组一样
var userList = [{}];
var users = [{}];

//good
var userMapList = [{}];
var userMaps = [{}];

//good
var userStoreList = [{}];
var userStores = [{}];

//good
var userDataList = [{}];

//bad
// data本身就是个复数词，
// 为了与单个 userData区分，这里推荐在data后面加list表达复数
var userData = [{}];

//good
var userInfoList = [{}];

//good
var userInfoes = [{}]; //info是个简写，简写可以直接加s或者es表达复数

//good
var userConfigList = [{}];
var userConfigs = [{}]; //实际上config也是个简写词
```

虽然这些命名规则相当繁琐，但是使用之后，可读性更高，B 格也跟着起来了。特别是当你的代码交给别人去维护的时候。
