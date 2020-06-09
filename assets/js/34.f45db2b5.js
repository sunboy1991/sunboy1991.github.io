(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{460:function(e,r,t){"use strict";t.r(r);var n=t(27),a=Object(n.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"减少-jpg-文件大小"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#减少-jpg-文件大小"}},[e._v("#")]),e._v(" 减少 JPG 文件大小")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn-images-1.medium.com/max/2000/1*sRYE2_-ROxbzz1y1s4M9GQ.png",alt:""}})]),e._v(" "),t("p",[e._v("如果你是一个现代的开发者，无论你是网站开发、移动开发、还是一些奇怪的系统管理程序，你一定会使用 JPG 文件。JPG 是你工作的一部分，并且对于用户体验有着极其重要的作用。")]),e._v(" "),t("p",[e._v("为什么让 JPG 文件尽量小这么重要呢？由于 "),t("a",{attrs:{href:"http://www.wired.com/2016/04/average-webpage-now-size-original-doom/",target:"_blank",rel:"noopener noreferrer"}},[e._v("当今平均网页体积与一个毁灭战士游戏（译者注：一款经典网络游戏）相当"),t("OutboundLink")],1),e._v("，你应该自问页面上那么多字节都是从哪里来的，怎样做才能尽量削减它们（我不想从移动应用的大小开始讲）。")]),e._v(" "),t("p",[e._v("虽然 "),t("a",{attrs:{href:"https://medium.freecodecamp.com/how-jpg-works-a4dbd2316f35#.z4lekhosw",target:"_blank",rel:"noopener noreferrer"}},[e._v("JPG 压缩令人印象深刻"),t("OutboundLink")],1),e._v("，但是如何进行压缩将会极大地影响文件的体积。因此我总结了一些能帮助你最大程度减小文件体积并增强用户体验的技巧。")]),e._v(" "),t("h3",{attrs:{id:"你应该使用一个优化工具"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#你应该使用一个优化工具"}},[e._v("#")]),e._v(" 你应该使用一个优化工具")]),e._v(" "),t("p",[e._v("当你开始看 "),t("a",{attrs:{href:"https://medium.freecodecamp.com/how-jpg-works-a4dbd2316f35",target:"_blank",rel:"noopener noreferrer"}},[e._v("JPG 压缩方法"),t("OutboundLink")],1),e._v("，以及 "),t("a",{attrs:{href:"https://en.wikipedia.org/wiki/JPEG",target:"_blank",rel:"noopener noreferrer"}},[e._v("文件格式"),t("OutboundLink")],1),e._v("，你会开始意识到，和 "),t("a",{attrs:{href:"https://medium.com/@duhroach/reducing-png-file-size-8473480d0476",target:"_blank",rel:"noopener noreferrer"}},[e._v("PNG 文件"),t("OutboundLink")],1),e._v("一样，JPG 文件在体积上有很大的改进空间。举个例子，你可以尝试比较用 Photoshop 直接保存的 JPG 文件和用 “储存为 web 所用格式“ 导出的文件之间的大小差异：")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn-images-1.medium.com/max/800/1*vZF5gbyfYtDskdRr1MTZXA.png",alt:""}})]),e._v(" "),t("p",[e._v("一个_简单的红色正方形_图片减少了大约90%的体积。和 PNG 一样，JPG 同样支持一些"),t("a",{attrs:{href:"https://en.wikipedia.org/wiki/JPEG#Syntax_and_structure",target:"_blank",rel:"noopener noreferrer"}},[e._v("数据块"),t("OutboundLink")],1),e._v("，这就意味着图片编辑器或是相机能够"),t("a",{attrs:{href:"http://dev.exiv2.org/projects/exiv2/wiki/The_Metadata_in_JPEG_files",target:"_blank",rel:"noopener noreferrer"}},[e._v("插入非图片信息"),t("OutboundLink")],1),e._v("。这就是为什么你的图片分享服务知道你在哪里"),t("a",{attrs:{href:"https://www.instagram.com/bestfoodaustin/",target:"_blank",rel:"noopener noreferrer"}},[e._v("吃的最后一个华夫饼"),t("OutboundLink")],1),e._v("，以及你使用什么相机"),t("a",{attrs:{href:"https://exposingtheinvisible.org/resources/obtaining-evidence/image-digging",target:"_blank",rel:"noopener noreferrer"}},[e._v("拍下了这张照片"),t("OutboundLink")],1),e._v("。如果你的应用程序不需要这些额外的信息，那直接从 JPG 文件中移除它们就能显著改善文件的体积。")]),e._v(" "),t("p",[e._v("然而事实上，你可以在文件格式上"),t("a",{attrs:{href:"http://www.elektronik.htw-aalen.de/packjpg/_notes/PCS2007_PJPG_paper_final.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("做更多"),t("OutboundLink")],1),e._v("。")]),e._v(" "),t("p",[e._v("对于初学者而言，你可以使用一些像 "),t("a",{attrs:{href:"http://www.jpegmini.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("JPEGMini"),t("OutboundLink")],1),e._v(" 的工具，在不过度影响图片保真度的情况下进行低质量压缩，就像是 Mozilla 的 "),t("a",{attrs:{href:"https://github.com/mozilla/mozjpeg/",target:"_blank",rel:"noopener noreferrer"}},[e._v("MOZJpeg"),t("OutboundLink")],1),e._v("（虽然 Mozilla 申明了他们的项目可能会影响兼容性）。")]),e._v(" "),t("p",[e._v("另外，"),t("a",{attrs:{href:"http://jpegclub.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("jpegTran/cjpeg"),t("OutboundLink")],1),e._v(" 试图提供无损的体积优化。而 "),t("a",{attrs:{href:"http://www.elektronik.htw-aalen.de/packjpg/",target:"_blank",rel:"noopener noreferrer"}},[e._v("packJPG"),t("OutboundLink")],1),e._v(" 会用一种更小的形式重新打包 JPG 数据，虽然这已经是一种不同的文件格式了，并且不再与 JPG 兼容（但如果你能在客户端自己对文件进行解析，就会非常方便）。")]),e._v(" "),t("p",[e._v("此外，还有一大堆基于网页的工具，但是我还没有找到能比我列出来的这些工具更好用的（事实上，大多数这些基于网页的工具在后端都只是使用了上述工具）。当然 "),t("a",{attrs:{href:"http://www.imagemagick.org/script/index.php",target:"_blank",rel:"noopener noreferrer"}},[e._v("ImageMagick"),t("OutboundLink")],1),e._v(" 有它自己的 "),t("a",{attrs:{href:"http://www.imagemagick.org/script/mogrify.php",target:"_blank",rel:"noopener noreferrer"}},[e._v("特性"),t("OutboundLink")],1),e._v("。")]),e._v(" "),t("p",[e._v("使用这些工具通常可以帮助你减少大约 15% 到 24% 的文件体积，这对于这样小的投入来说已经是一个非常不错的改进了。")]),e._v(" "),t("h3",{attrs:{id:"寻找最理想的质量值"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#寻找最理想的质量值"}},[e._v("#")]),e._v(" 寻找最理想的质量值")]),e._v(" "),t("p",[e._v("首先要声明的是：你永远都不应该把 JPG 文件的质量值设置为 100。")]),e._v(" "),t("p",[e._v("JPG 文件的魅力在于你能够使用一个标量来调节图片的质量与文件大小的比例。问题在于你应该如何找到图片的_正确_质量值。随意给你一张图片，你应该如何确定最理想的设置？")]),e._v(" "),t("p",[e._v("正如 "),t("a",{attrs:{href:"https://github.com/rflynn/imgmin",target:"_blank",rel:"noopener noreferrer"}},[e._v("imgmin"),t("OutboundLink")],1),e._v(" 所指出的，75 到 100 的 JPG 压缩等级只会给用户带去非常小的可感知的变化。")]),e._v(" "),t("blockquote",[t("p",[t("em",[e._v("JPEG 文件的质量值在 100 到 75 之间变化通常只会对图片质量造成非常微小的、很不明显的改变，但是却能显著减小文件的尺寸。也就是说许多图片在 75 的质量值时看起来依然很好，但却只有 95 质量值时一半的文件大小。当质量值减小到 75 以下时，造成的视觉上的差异会扩大，而文件尺寸的节约会减少。")])])]),e._v(" "),t("p",[e._v("因此，75 的质量值显然是一个很好的初始状态。但是我们有一个更大的问题：我们不希望去手工设定每张图片的质量值。")]),e._v(" "),t("p",[e._v("对于那些每天上传和转发成千上万 JPG 文件的媒体应用来说，你不能期望某个人去手工调节所有图片的参数。因此，大多数开发者会创建多组质量参数，并且依赖这些参数组来压缩它们的图片。")]),e._v(" "),t("p",[e._v("比如说，缩略图的质量值可能是 35，因为更小的图片通常能掩盖更多的压缩损坏。而一个全屏的图片也许又有一个不同的参数来用作音乐专辑的封面等等。")]),e._v(" "),t("p",[e._v("你可以看到这样的方法存在于整个领域中："),t("a",{attrs:{href:"https://github.com/rflynn/imgmin",target:"_blank",rel:"noopener noreferrer"}},[e._v("imgmin"),t("OutboundLink")],1),e._v(" 项目进一步地显示了大多数的大型网站都倾向于将他们 JPG 图片的质量值设置在 75 上下波动。")]),e._v(" "),t("p",[e._v("Google 图片 缩略图: 74–76"),t("br"),e._v("\nFacebook 全尺寸图片: 85"),t("br"),e._v("\nYahoo 首页 JPG: 69–91"),t("br"),e._v("\nYouTube 首页 JPG: 70–82"),t("br"),e._v("\nWikipedia 图片: 80"),t("br"),e._v("\nWindows 动态背景: 82"),t("br"),e._v("\nTwitter 用户 JPEG 图片: 30–100")]),e._v(" "),t("p",[t("strong",[e._v("这里的问题是选取的值不完美")])]),e._v(" "),t("p",[e._v("通常凭空选取一个质量值并应用到整个系统中，会导致一些图片能在损失极小质量的情况下被进一步压缩，而另一些图片则由于过度压缩而看起来不那么好。质量值应该是可变的，应该为每一张图片寻找其最理想的参数。")]),e._v(" "),t("p",[t("strong",[e._v("如果")]),e._v("有一种方法可以测出压缩对图片的破坏程度呢？\n"),t("strong",[e._v("如果")]),e._v("你可以通过一个质量标准来判定当前的质量值是否最佳呢？\n"),t("strong",[e._v("如果")]),e._v("你可以在服务器上自动运行上述两项任务呢？")]),e._v(" "),t("p",[t("strong",[e._v("有")]),e._v("这样的方法。\n"),t("strong",[e._v("可以")]),e._v("判定。\n"),t("strong",[e._v("能够")]),e._v("自动运行。")]),e._v(" "),t("p",[e._v("这都要从"),t("a",{attrs:{href:"http://ieeexplore.ieee.org/xpl/login.jsp?tp=&arnumber=6530010&url=http%3A%2F%2Fieeexplore.ieee.org%2Fiel7%2F6523355%2F6529997%2F06530010.pdf%3Farnumber%3D6530010",target:"_blank",rel:"noopener noreferrer"}},[e._v("精神性视觉误差阈值 - Psychovisual Error Threshold"),t("OutboundLink")],1),e._v(" 说起，这个阈值指示了在人类的眼睛可以察觉之前，一张图片最多可以下降多少质量。")]),e._v(" "),t("p",[e._v("这个阈值有一些测量方法，尤其是 "),t("a",{attrs:{href:"https://en.wikipedia.org/wiki/Peak_signal-to-noise_ratio",target:"_blank",rel:"noopener noreferrer"}},[e._v("PSNR"),t("OutboundLink")],1),e._v(" 和 "),t("a",{attrs:{href:"https://en.wikipedia.org/wiki/Structural_similarity",target:"_blank",rel:"noopener noreferrer"}},[e._v("SSIM"),t("OutboundLink")],1),e._v(" 标准。每一个标准在进行测量时有一些细微差别，这就是为什么我更喜欢最新的 "),t("a",{attrs:{href:"http://goo.gl/1ehQOi",target:"_blank",rel:"noopener noreferrer"}},[e._v("Butteraugli"),t("OutboundLink")],1),e._v(" 项目。在使用一个图片库进行测试后，我发现这种标准在视觉质量方面对我来说更容易理解。")]),e._v(" "),t("p",[e._v("为了实现，你需要写一个简单的脚本来：")]),e._v(" "),t("ul",[t("li",[e._v("将一个 JPG 文件保存为多个不同质量值的版本")]),e._v(" "),t("li",[e._v("使用 "),t("a",{attrs:{href:"http://goo.gl/1ehQOi",target:"_blank",rel:"noopener noreferrer"}},[e._v("Butteraugli"),t("OutboundLink")],1),e._v(" 来测定它们的 "),t("a",{attrs:{href:"http://ieeexplore.ieee.org/xpl/login.jsp?tp=&arnumber=6530010&url=http%3A%2F%2Fieeexplore.ieee.org%2Fiel7%2F6523355%2F6529997%2F06530010.pdf%3Farnumber%3D6530010",target:"_blank",rel:"noopener noreferrer"}},[e._v("精神性视觉误差阈值"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("当输出值大于 1.1 时停止")]),e._v(" "),t("li",[e._v("使用当前的质量值来储存最终的图片")])]),e._v(" "),t("p",[e._v("最终的结果将是在不引入过大的精神性视觉误差阈值（不造成易被察觉的视觉改变）的情况下最小的 JPG 文件。如下图片的体积缩减了 170k，但是视觉上看起来仍然相同。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn-images-1.medium.com/max/800/1*QCVqIL_ueQju40gyJGXodg.png",alt:""}})]),e._v(" "),t("p",[e._v("当然，你还可以进一步压缩。也许你的目标是允许更多的视觉损失来节省带宽，你可以很容易继续压缩，但这样有些疯狂。"),t("em",[e._v("到目前为止")]),e._v("，"),t("a",{attrs:{href:"http://goo.gl/1ehQOi",target:"_blank",rel:"noopener noreferrer"}},[e._v("Butteraugli"),t("OutboundLink")],1),e._v(" 认为任何高于 1.1 的结果都是“难看”的并且没有试图用一个权威的数值来定义这些图片看起来究竟是怎么样的。所以你当然可以在输出值到达 2.0 时（如下图）停止脚本，但是到那时，你将难以确定你的图片到底处于一种怎样的视觉程度上。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn-images-1.medium.com/max/800/1*5yfAv-aFdneBAZywSUZ1Ag.png",alt:""}})]),e._v(" "),t("h3",{attrs:{id:"模糊色度"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模糊色度"}},[e._v("#")]),e._v(" 模糊色度")]),e._v(" "),t("p",[e._v("人的眼睛在 "),t("a",{attrs:{href:"https://en.wikipedia.org/wiki/YCbCr",target:"_blank",rel:"noopener noreferrer"}},[e._v("YCbCr"),t("OutboundLink")],1),e._v(" 颜色通道的图片上对于视觉改变有更好的理解能力，因此可以假设在一个 8 x 8 的块上没有太多的视觉变化。而 JPG 如此强大的一个原因是，如果你能在 8 x 8 的块上减少色度的变化，你就能更少地影响图片的质量，同时更好地进行压缩。最简单的方法就是在颜色通道上高对比度的区域内进行中值过滤。样例如下。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn-images-1.medium.com/max/800/1*kxVa2DEkM048to6UnUYCfA.png",alt:""}})]),e._v(" "),t("p",[e._v("大多数图片编辑软件都不支持 "),t("a",{attrs:{href:"https://en.wikipedia.org/wiki/YCbCr",target:"_blank",rel:"noopener noreferrer"}},[e._v("YCbCr"),t("OutboundLink")],1),e._v(" 色彩空间，一个小技巧是它们大多支持 "),t("a",{attrs:{href:"https://en.wikipedia.org/wiki/Lab_color_space",target:"_blank",rel:"noopener noreferrer"}},[e._v("LAB"),t("OutboundLink")],1),e._v("。L 通道代表亮度（与 Y 通道类似），而 A 通道和 B 通道代表 红/绿色 以及 蓝/黄色，与 Cb、Cr 通道类似。将你的图片转换到 LAB 格式，你将可以看到下列通道：")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn-images-1.medium.com/max/800/1*VwKrI76p9IsLWhJmPQaD6Q.jpeg",alt:""}})]),e._v(" "),t("p",[e._v("我们需要做的就是消除 A/B 通道中颜色的急剧转换。这样做可以给合成器更多的相似值。我们可以选中图片中的高细节区域，并应用 1-3 个像素的模糊。最终的结果将会明显消除图像中的部分信息，但是却不会过多地影响图片的整体视觉效果。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn-images-1.medium.com/max/800/1*BGquAMZw-oEEj5IH-xJEhw.jpeg",alt:""}})]),e._v(" "),t("figcaption",{staticClass:"imageCaption"},[e._v("左边我们可以看到 Photoshop 中的选框（我们选择了图中的房屋背景），而右边是模糊操作的结果。")]),e._v(" "),t("p",[e._v("这样做的重点是，通过在图片的 A/B 模式上进行细微的模糊操作，我们可以减少这些通道中的视觉变量，这样的话，当 JPG 进行取样操作时，你的图片的 CbCr 通道中将含有更少的孤立信息。你可以在下图中看到结果。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn-images-1.medium.com/max/800/1*sv9wBkOKWzaFIUOEiAHLLQ.png",alt:""}})]),e._v(" "),t("p",[e._v("上面的图片是我们的源文件，而下面的图片中我们模糊了部分 Cb/Cr 数据，这使得文件体积减小了大约 50%。")]),e._v(" "),t("h3",{attrs:{id:"考虑使用-webp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#考虑使用-webp"}},[e._v("#")]),e._v(" 考虑使用 WebP")]),e._v(" "),t("p",[e._v("对于现在的你来说，"),t("a",{attrs:{href:"https://developers.google.com/speed/webp/",target:"_blank",rel:"noopener noreferrer"}},[e._v("WebP"),t("OutboundLink")],1),e._v(" 不应该还是什么新闻了。我已经在之前"),t("a",{attrs:{href:"https://www.youtube.com/watch?v=1pkKMiDWwpM",target:"_blank",rel:"noopener noreferrer"}},[e._v("推荐过它"),t("OutboundLink")],1),e._v("，因为这真的是一个能给人留下深刻印象的编码器。"),t("a",{attrs:{href:"https://developers.google.com/speed/webp/docs/webp_study#introduction",target:"_blank",rel:"noopener noreferrer"}},[e._v("WebP 和 JPG 的对比数据"),t("OutboundLink")],1),e._v("显示，WebP 可以在相同 SSIM（结构相似性）指标的情况下，节省大约 "),t("strong",[e._v("25% - 33%")]),e._v(" 的文件体积，这对于仅仅是转换文件格式来说，已经节约了很多体积了。")]),e._v(" "),t("p",[e._v("无论你是一个网页开发者，还是移动开发者，WebP 的支持程度和节约的空间，都给你足够的理由来使用它。")]),e._v(" "),t("h3",{attrs:{id:"science-the-shit-out-of-it-（译者注：出自电影《火星救援》经典台词，在此处表示用科学的方法去解决一些非常棘手的问题）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#science-the-shit-out-of-it-（译者注：出自电影《火星救援》经典台词，在此处表示用科学的方法去解决一些非常棘手的问题）"}},[e._v("#")]),e._v(" “Science the shit out of it”（译者注：出自电影《火星救援》经典台词，在此处表示用科学的方法去解决一些非常棘手的问题）")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://www.youtube.com/watch?v=d6lYeTWdYLw",target:"_blank",rel:"noopener noreferrer"}},[e._v("感谢 Mark"),t("OutboundLink")],1),e._v("，我给你寄了一些土豆，你收到的时候告诉我。(译者注：Mark 是《火星救援》的男主，这句话应该是一个电影梗）")]),e._v(" "),t("p",[e._v("现代图片压缩过程的最大问题是，大多数工程师都只为“某一文件”进行压缩，也就是说，输入像素数据，然后输出指定格式的压缩图片。")]),e._v(" "),t("p",[e._v("完成，然后继续其他工作。")]),e._v(" "),t("p",[e._v("但是这事实上只做了一半。现代应用程序将图片用在不同的地方，且有着不同的用途。没有一种单一的尺寸可以适用于所有的情况，并且这也许可以影响互联网传输信息的方式。")]),e._v(" "),t("p",[e._v("这就是为什么 "),t("a",{attrs:{href:"https://code.facebook.com/posts/991252547593574/the-technology-behind-preview-photos/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Facebook"),t("OutboundLink")],1),e._v(" 的工程师辛苦找寻一种方法来优化现有的图片压缩策略。其成果"),t("a",{attrs:{href:"https://code.facebook.com/posts/991252547593574/the-technology-behind-preview-photos/",target:"_blank",rel:"noopener noreferrer"}},[e._v("是我互联网上最最喜欢的文章"),t("OutboundLink")],1),e._v("，这将他们预览图片的体积减小到了每张 200 字节。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn-images-1.medium.com/max/800/0*qFRye2GXhYIH4Vkv.",alt:""}})]),e._v(" "),t("p",[e._v("这个解决方案的魔力来源于在加载时发生的一个富有野心的模糊和缩放过程，以及对 JPG 数据头（他们能够在编码器中将其移除并进行硬编码）的深度分析。**200 字节是疯狂的。**我从 "),t("a",{attrs:{href:"http://stackoverflow.com/questions/891643/twitter-image-encoding-challenge",target:"_blank",rel:"noopener noreferrer"}},[e._v("Twitter 图像编码挑战"),t("OutboundLink")],1),e._v("（它证实了《蒙娜丽莎》可以通过遗传编程进行演化）之后就再也没有见过如此疯狂的事情了。这证明了仅仅在图像编码器领域内思考将会限制你在数据压缩上做出真正疯狂举动的能力。")]),e._v(" "),t("h3",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[e._v("#")]),e._v(" 总结")]),e._v(" "),t("p",[e._v("最终，你的公司需要在自动设定质量值和手动优化图片之间找到一个合适的中间点，甚至搞清楚如何进一步进行压缩。这最终可以节约你们发送和储存内容的成本，同时也可以节省用户接收这些内容的成本。")])])}),[],!1,null,null,null);r.default=a.exports}}]);