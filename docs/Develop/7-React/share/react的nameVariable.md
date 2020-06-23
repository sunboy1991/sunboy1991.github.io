# react的nameVariable

## 核心原则：语义化

1.  合理正确的单词

    ```javascript
    //bad
    function offBind() {} //解绑

    //good
    function unBind() {} //解绑

    //bad
    var shequId; //社区id

    //good
    var communityId; //社区id

    //bad
    var isUnLine; //是否离线

    //bad
    var isOutLine; //是否离线

    //good
    var isOffline; //是否离线
    ```

    宁可花点时间百度翻译一下，也不要写出这种随意的命名。

1.  变量、类名统统使用名词。

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

1.  函数名、方法名、事件名应当有动词。

    不要使用函数或者方法返回值的含义去命名函数或者方法，应当带有一个准确的动词来表示该函数或者方法的行为。

    ```javascript
    //bad
    function isCode404(){}

    //good
    function checkIsCode404(){}

    //good
    var isCode404=checkIsCode404()

    //bad
    <div className={this.rootClassName()} />

    //good
    <div className={this.setRootClassName()} />

    //good
    <div className={this.calcRootClassName()} />
    ```

    -   组件的方法命名、事件接口命名注意

    组件对外提供的方法，是指通过 React 的 ref 进行调用的方法，命名直接一个动词开头。

    ```javascript
    <Component ref={c=>this.test} />
    ...

    //bad
    this.test.onFocus();

    //bad
    this.test.setFocus();

    //good
    this.test.focus();
    ```

    当要表达对组件内部具体某个元素或者状态进行操作时，命名为`动词+名词`。

    ```javascript
    <Component ref={c=>this.test} />
    ...

    //good
    this.test.focusNumberInputer();
    this.test.focusTextInputer();

    //bad
    this.test.numberInputerFocus();
    this.test.textInputerFocus();
    ```

    事件接口一律在前面加`on`，命名为`on + 动词 + 名词`，名词有时可省略。

    如果想表达这个事件是由谁触发的，命名为`on + 动词 + 名词 + By + 主语（触发者）`

    比如社区里面的需求，一个按钮被版主点击和普通用户点击处理事件不一样，需要这个按钮组件暴露出`onClickByUser`和`onClickByLeader`两个事件出来。

    ```javascript
    //bad
    <Component click={this.onClick} />

    //good
    <Component onClick={this.onClick} />

    //bad
    <Component onSthClick={this.onClick}/>

    //good
    <Component onClickSth={this.onClick} />

    //bad
    <Component onSbClick={this.onClick}/>

    //good
    <Component onClickBySb={this.onClick} />

    //bad
    <Component onSbClickSth={this.onClick}/>

    //good
    <Component onClickSthBySb={this.onClick} />
    ```

    -   组件 其他函数型 props 命名注意

    往组件传函数一般两种，一种是上面的事件回调函数。而另一种基本上通过 props 进行渲染插值。React 不像 Vue 那样有`<slot>`标签进行方便的插值，它对`jsx`的插值基本上通过 props 进行，这种类型的 props 的命名为`render + 名词`。这个名词不可省略，它可以是表达位置的词如`footer/header/body...`，也可以是表达功能的词`editor/collecter/user`。

    ```javascript
    //bad
    <Component footer={()=><footer/>} />

    //bad
    <Component setfooter={()=><footer/>} />

    //bad
    <Component footerRender={()=><footer/>} />

    //good
    <Component renderFooter={()=><footer/>} />
    ```

    > 注意，这种 renderFooter 要求传入的函数必须返回 jsx!
    > 如果还有其他用途的函数型 props，命名按照正常函数、方法名进行命名

1.  类名使用大驼峰命名方式，其他使用小驼峰。

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

1.  路由命名与设计遵循 restfulAPI 路由设计原则

    目前来说，我们的 React 项目主要集中在移动端，用户是看不到我们的路由的。而把路由写好最大的意义，是为了让开发其他业务的小伙伴更好的拼接 url 跳转到你的页面里面去。所以，语义化同样重要。
    而 restfulAPI 在路由描述上的理念十分出色，所以参考它来设计我们的命名规范：

    -   所有页面都是资源，对资源的单词描述应当清晰、明确。

    ```javascript
    // 真实案例
    // bad
    location.href = "/bbs/onIndex"; // 访问游戏社区首页的路由

    // good
    location.href = "/bbs/game"; // 访问游戏社区首页的路由
    ```

    -   不得出现驼峰，如果资源的描述需要多个单词，使用`-`符号连接单词

    ```javascript
    // bad
    location.href = "/user/phoneBinder";

    // good
    location.href = "/user/phone-binder";
    ```

    -   不得出现动词

    ```javascript
    // bad
    location.href = "/user/bind-phone"; // 用户绑定手机页

    // good
    location.href = "/user/phone-binder"; // 用户绑定手机页

    // good
    location.href = "/user/binder/phone"; // 用户绑定手机页
    ```

    -   参数名与值应该一一对应

    ```javascript
    // 真实案例...

    // bad
    location.href = "/bbs/moreComm/5/7/8"; // 访问评论详情页(游戏社区id:7,话题id:8,评论id:5)

    // good
    location.href = "/bbs/comment/5/game/7/topic/8"; // 访问评论详情页(游戏社区id:7,话题id:8,评论id:5)

    // best!
    location.href = "/bbs/game/7/topic/8/comment/5"; // 按照层级层层递进！
    ```

    -   额外参数使用`search query`传入，同样遵循上面的原则，但参数名使用`_`连接单词，与后端统一风格。

    ```javascript
    // bad
    // param 意为输入，含义太广不明确
    location.href = "/welfare/record?param=fs12"; // 福利记录页，使id为fs12的记录置顶

    // bad
    location.href = "/welfare/record?topId=fs12";

    // bad
    location.href = "/welfare/record?top-id=fs12";

    // good
    location.href = "/welfare/record?top_id=fs12";
    ```

1. 项目中组件命名显示遵循上述原则，其次根据分类，  
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
