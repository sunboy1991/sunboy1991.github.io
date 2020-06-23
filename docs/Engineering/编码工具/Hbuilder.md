# Hbuilder

## 什么是HBuilder

HBuilder是DCloud（数字天堂）推出的一款支持HTML5的Web开发IDE。HBuilder的编写用到了Java、C、Web和Ruby。HBuilder本身主体是由Java编写，它基于Eclipse，所以顺其自然地兼容了Eclipse的插件。快，是HBuilder的最大优势，通过完整的语法提示和代码输入法、代码块等，大幅提升HTML、js、css的开发效率。

## 如何安装 HBuilder

HBuilder下载地址：在HBuilder官网[http://www.dcloud.io/](https://www.dcloud.io/)，下载最新版的HBuilder。

HBuilder目前有两个版本，一个是windows版，一个是mac版。下载的时候根据自己的电脑选择适合自己的版本。

## 使用HBuilder新建项目

依次点击文件→新建→选择Web项目(按下Ctrl+N,W可以触发快速新建(MacOS请使用Command+N,然后左键点击Web项目))

![图片](./img/hbuilder_1.png)

![图片](./img/hbuilder_2.png)

如上图，请在A处填写新建项目的名称，B处填写(或选择)项目保存路径(更改此路径HBuilder会记录，下次默认使用更改后的路径)，C处可选择使用的模板(可点击自定义模板,参照打开目录中的readme.txt自定义模板)


## 使用HBuilder创建HTML页面

在项目资源管理器中选择刚才新建的项目,依次点击文件→新建→选择HTML文件(按下Ctrl+N,W可以触发快速新建(MacOS请使用Command+N,然后左键点击HTML文件)),并选择空白文件模板,如下图

![图片](./img/hbuilder_3.png)

## 使用HBuilder边改边看试试查看编程效果

win系统按下Ctrl+P(MacOS为Command+P)进入边改边看模式,在此模式下,如果当前打开的是HTML文件，每次保存均会自动刷新以显示当前页面效果(若为JS、CSS文件，如与当前浏览器视图打开的页面有引用关系，也会刷新)

## HBuilder代码块大量减少重复代码工作量

在打开的getstart.html中输入H,如下图

![图片](./img/hbuilder_4.png)

然后按下8,自动生成HTML的基本代码如下图

![图片](./img/hbuilder_5.png)

#### 什么是代码块?

代码块是常用的代码组合，比如在js中输入$，回车，则可以自动输入document.getElementById(id)。

查看、编辑代码块可以在工具-自定义代码块中，选择相应的代码块进行查看和编辑。也可以在激活代码块的代码助手中，点击详细信息右下角的修改图标进行修改和查看。

* **代码块激活字符原则1:** 连续单词的首字母。比如：dg激活document.getElementById("");vari激活var i=0;dn激活display: none;

* **代码块激活字符原则2:** 整段HTML一般使用tag的名称。比如script、style，通常，敲最多4个字母即可匹配到需要的代码块，不需要完整录入，如sc回车、st回车，即可完成script、style标签的输入。

* **代码块激活字符原则3:** 同一个tag，有多个代码块输出，则在最后加后缀。比如 meta 输出 <meta name="" content=""/> 但 metau 则输出 <meta charset="UTF-8"/>，metag同理。

* **代码块激活字符原则4:** 如果原始语法超过4个字符，针对常用语法，则第一个单词的激活符使用缩写。比如input button，缩写为inbutton，同理intext是输入框。

* **代码块激活字符原则5:** js的关键字代码块，是在关键字最后加一个重复字母。比如if直接敲会提示if关键字，但iff回车，则出现if代码块。类似的有forr、withh等。由于funtion字母较长，为加快输入速度，取fun缩写，比如funn，输出function代码块，而funa和func，分别输出匿名函数和闭包。

## 灵活的快捷键使得编程过程手不离键盘

效果如下图

![图片](./img/hbuilder_6.gif)

* 新建html基本模板后,当前光标处于title标签内,此时我们给HTML设置title:hellohbuilder,完成后使用Ctrl+回车在当前的下一行插入空行,并将光标移动到下一行

* 我们在此处使用sc代码块生成一个script块来编写js代码(输入sc,回车)如下图

![图片](./img/hbuilder_7.png)

* 使用funn代码块编写一个JS方法helloworld(输入funn,回车)如下图

![图片](./img/hbuilder_8.png)

* 此时生成的方法的方法名是选中状态,我们只需要直接输入新的方法名helloworld即可,如下图

![图片](./img/hbuilder_9.png)

* 上图中的绿色竖线，是代码块中指定的下一个编辑位置,敲击回车光标会直接跳转至竖线位置

* 此时按向下、向下,Ctrl+回车,输入style回车,生成css代码区域

* 定义一个Css类classA：输入. c l a s s A { 回车,f o n t 回车 回车 回车

* 然后按alt+下,alt+下跳转至下一个编辑区域

* 依次输入< d i v 也可输入< d v 回车、< i v 回车,语法助手可以通过模糊匹配获知想要生成的标签)如下图

![图片](./img/hbuilder_10.png)

* 如上图所示,代码助手左侧包含数字，可以使用这些数字选择对应的条目,右侧包含浏览器兼容性数据及示例

* 输入i 回车 d 1,右箭头,空格,c 回车 回车

* 鼠标在div标签的class属性classA上悬浮,按下Alt和左键,点击后可跳转至classA定义处

* Ctrl+回车

* div也可以通过代码块生成如输入divc回车回车回车,输入helloworld如下图

* 向下,回车


## 使用CSS选择器语法来快速开发HTML和CSS(支持Emmet)

输入div#page>div.logo+ul#navigation>li*2>a,按下tab生成代码如下图

![图片](./img/hbuilder_11.gif)

HBuilder集成了Emmet功能,可以通过CSS选择器语法来快速开发HTML和CSS,如想深入了解Emmet请移步[http://www.emmet.io/](http://www.emmet.io/)


## 强大的JS解析引擎大大加快JS开发的速度

#### JS中提示HTML、CSS

JS提示html的ID

![图片](./img/hbuilder_12.gif)

JS提示html的tagname

![图片](./img/hbuilder_13.gif)

JS提示css类名

![图片](./img/hbuilder_14.gif)

JS通过ID、tagname、css类名不但可以获取HTML元素,还可以精确分析出其元素类型,准确提示其属性,如上图可以提示出list[0].type

#### JS中提示JSON

![图片](./img/hbuilder_15.gif)

#### JS提示自定义系统方法

![图片](./img/hbuilder_16.gif)

#### JS提示对象引用及其属性、方法

![图片](./img/hbuilder_17.gif)

#### JS提示闭包对象

![图片](./img/hbuilder_18.gif)

![图片](./img/hbuilder_19.gif)

## 跳转到class、id、js方法定义处

按下Alt,左键点击引用的方法名、ID、CSS类、文件(链接、图片),均可跳转到引用的地方,跨文件的引用也可以哦

#### 跳转到JS方法定义处 如下图

![图片](./img/hbuilder_20.gif)

跳转到CSS类定义处 如下图

![图片](./img/hbuilder_21.gif)

跳转到ID定义处 如下图

![图片](./img/hbuilder_22.gif)

跳转到文件 如下图

![图片](./img/hbuilder_23.gif)

## 更多挖宝

* 跳转助手、选择助手、转义助手、快捷键助手，让你手不离键盘。

* HTML5+支持、手机真机连调、云编译，方便开发跨手机平台的APP。

* 更多精彩功能：重构 | 大纲 | 任务 | 版本历史 | 内置webserver | 实时升级 | 安全工程管理 | 包围 | 掩码转换 | 智能纠错 | 折叠代码 | 转到定义 | 格式化代码 | URL编解码 | 进制转换 | 自动闭合。

* 还不满足？下载插件增强更多功能，高手更可开发插件，并共享插件造福所有开发者。