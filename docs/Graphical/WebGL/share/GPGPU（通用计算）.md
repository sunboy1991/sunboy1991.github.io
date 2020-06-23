# GPGPU（通用计算）

前端使用 GPU 的能力是通过 webgl 实现的 更加广泛的理解的可以认为是通过 canvas 来说实现的 canvas 估计对大多数前端来说并不陌生 canvas 有许多个像素组成 每个像素的颜色可以有`RGBA`四个维度表示 每个维度范围为 0-255 既 8 位 把 RGBA 表示成数值的话 那每个像素可以存 32 位 这就是前端使用 gpu 计算最为核心的一点 每个像素可以存储一个 32 位的值, 刚刚好就是一个`int`或者`uint`

## 基本 WebGL 绘制

首先从最简单的绘制一个图像开始 webgl 绘图的流程 最简单的就这样

![1](https://static.oschina.net/uploads/img/201712/20220122_6CHd.jpg 'webgl流程')

其中两个`vertex shader`和`fragment shader`为两个`GLSL`代码片段 分别处理坐标数据和颜色数据 `vertex shader`和`fragment shader`的执行是以像素为单位

canvas 开始绘制的时候 `vertex shader`中得到 每个需要绘制的像素的坐标 视需要可以对坐标进行各种转换 最终得到一个最终位置 这个过程中可以将数据作为输出传入`fragment shader` 参与下一步的计算

`fragment shader`接受各种输入 最终输出一个`RGBA`颜色数据作为该像素点的颜色值

当所有像素都绘制完成之后 画布绘制完成

### js 中的流程就比较简单了

1. 创建`webgl program`
2. 初始化两个`shader`
3. 传入各个顶点坐标
4. 开始绘制

因为咱们主要是计算 所以对坐标相关的数据可以不用太多关注 咱们直接画一个铺满画布的矩形就可以了

```js
// 加载资源    
    async function loadRes(file) {
    const resp = await fetch(file);
    return resp.text();
}
const canvas = document.querySelector("canvas");
const gl = canvas.getContext("webgl2");
const program = gl.createProgram();     // 载入shader    
function initShader(code, type) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, code);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS))
        throw new Error("compile: " + gl.getShaderInfoLog(shader));
    gl.attachShader(program, shader);
}     // 获取attribute参数的地址  
function getAttribLoc(name) {
    const loc = gl.getAttribLocation(program, name);
    if (loc == -1) throw `getAttribLoc  ${name} error`;
    return loc;
}
async function startDraw(vertexShader, fragmentShader) {        // 加载shader的代码       
    const vshaderCode = await loadRes(vertexShader);
    const fshaderCode = await loadRes(fragmentShader);         // 载入shader       
    initShader(vshaderCode, gl.VERTEX_SHADER);
    initShader(fshaderCode, gl.FRAGMENT_SHADER);
    gl.linkProgram(program);
    gl.useProgram(program);         // 传入坐标信息 具体含义后有说明       
    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
    const vecPosXArr = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
    gl.bufferData(gl.ARRAY_BUFFER, vecPosXArr, gl.STATIC_DRAW);                // 将顶点信息绑定到vertex shader中的变量  以两个数值作为一组数据        // 所以上述8个数值实际标明了4个顶点坐标        // g_pos为vertex中的自定义的变量名        
    const posAtrLoc = getAttribLoc("g_pos");
    gl.enableVertexAttribArray(posAtrLoc);
    gl.vertexAttribPointer(posAtrLoc, 2, gl.FLOAT, false, 0, 0);                // 清理画布        
    gl.clearColor(.0, .0, .0, 1); gl.clear(gl.COLOR_BUFFER_BIT);                // 使用4个坐标连续绘制两个三角形        
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
}
```

需要注意的一点`vertex shader`中得到的坐标是以 canvas 中心为`(0,0)` 水平向右为 x 轴正方向 垂直向上为 y 轴正方向 两轴的取值范围为`[-1, 1]` 所以上面 js 代码中传入的顶点坐标范围为`[-1, 1]`的浮点数

另外 OpenGL 中绘制面都是以三角形为单位的 webgl 中也不例外 提供了一个绘制连续三角形的方式 一个矩形是两个三角形 所以传入四个顶点就可以了 当然也可以传入六个顶点 分别绘制两个三角形

顶点的传入实际上是传入一个数组 然后`vertexAttribPointer()`方法指定各个顶点如何使用这个坐标数组 可以认为是 8 个一维坐标 也可以认为是 2 个二维坐标 或者是 2 个四维坐标 所以上述的例子实际是传入了 4 个 2 维坐标

接下来就是两个 shader 中的流程 目前大部分浏览器已经支持[WebGL 2.0](https://www.khronos.org/registry/webgl/specs/latest/2.0/)标准 对应`OpenGL ES 3.0` 所以 shader 中的语法需要遵循相关语法

具体的版本可以使用`gl.getParameter(gl.SHADING_LANGUAGE_VERSION)`获取

### 首先`vertex shader`:

```c
    #version 300 es     precision highp float;    precision highp int;     in vec4 g_pos;    out vec2 v_pos;     void main() {        float curX = (g_pos.x + 1.) / 2.;        float curY = (g_pos.y + 1.) / 2.;        v_pos = vec2(curX, curY);         gl_Position = g_pos;    }
```

具体的语法啊变量类型啊什么的可以看官方的文档

只做一点说明 `in`将变量标记输入 `out`将变量标记输出 在`webgl 1.0`中 `attribute`表示输入 所以在 js 获取变量地址的时候使用了`getAttribLocation`函数 其中的`Attrib`即是这个意思 但是在`webgl 2.0`这个声明被弃用 使用`in`来代替

`out`标记的变量的值将作为`fragment shader`的输入

`gl_Position`为内部变量 作为最终的坐标地址 实际中还有很多其他内置变量 就不举例了

上述的代码将以画布中心为原点的坐标系转化为以左下角为原点的坐标系 并将新的坐标系中的坐标传给下一步 后续会解释为什么要做这样一个坐标变换

### 然后就是`fragment shader`:

```c
    #version 300 es     precision highp float;    precision highp int;     in vec2 v_pos;    out vec4 o_result;     void main() {        float pos_x = v_pos.x;        float pos_y = v_pos.y;         float distance = sqrt(pos_x * pos_x + pos_y * pos_y);         o_result = vec4(1, 0, 0, 1. - distance);    }
```

同样 `fragment shader`中也有`in`和`out`关键字

其中`in`对应`vertex shader`中的 `out` 变量类型以及变量名必须一致

`out`为一个`vec4`类型 存放最终的`RGBA`结果 每个值的范围为`[0, 1]`

上述的代码也很简单 颜色固定为红色 但是透明度按照像素到原点的距离递增 距离越远 透明度越高

最终画出的效果是这样的

![2](https://static.oschina.net/uploads/img/201712/20220158_fNSO.jpg '按距离递增透明度')

## 输入

上面已经讲了一个坐标的输入 但是计算相关的参数需要其他的方式传入 需要一点提醒 由于 js 中的所有数值都是浮点型 所以 js 和 webgl 进行数据传输的时候 _全都必须使用类型数组_ 并且相当多函数只能接受某种特定的类型数组

## 粗暴的替换

因为两个 shader 都是 js 获取到的资源 所以在载入 webgl 之前可以对内容进行直接修改

一般来说 shader 中要获取 canvas 实际的大小相当不便 所以 可以直接用这个办法将画布大小传入

js 中:

```js
fshaderCode = fshaderCode.replace(/CANVAS_SIZE/g, canvas.width)
```

shader 中:

```c
    const int U_LENGTH = CANVAS_SIZE;
```

这样可以直接在其他地方获取画布大小了 不过这个方法得保证不会替换错了

最重要的是 这个办法对传入数据的格式非常有限

## 使用 uniform 关键字

这个方法就比较强大了 不仅一般的`int／float` 还可以传入 向量 数组 矩阵等各种类型

而且两个 shader 可以共享同一份数据

```js
function getUniformLoc(name) {
    const loc = gl.getUniformLocation(program, name)
    if (loc == null) throw `getUniformLoc ${name} err`
    return loc
}
const uniLoc = getUniformLoc('i_matrixA')
gl.uniform1fv(uniLoc, new Float32Array([1, 2, 3, 4]))
```

shader 中:

```c
    uniform float i_matrixA[4];
```

`uniform()`是个一系列的方法 传入不同类型的时候 使用了不同的函数比如上面的`uniform1fv`以及后面的`uniform1i` 详细了解还是得看文档

这个方法等好处就是支持所有类型 但是也有一个问题 不过这个问题并不算是`uniform`的问题 而是 WebGL 本身的局限:

0. 数组长度受限, 可以使用`gl.getParameter(gl.MAX_FRAGMENT_UNIFORM_VECTORS)`或者`gl.getParameter(gl.MAX_VERTEX_UNIFORM_VECTORS)`获取数组长度上限 本人实测值为 1024
1. `OpenGL ES 3.0`不支持多维数组, 这个问题将在下个版本中得到支持, 当前情况还是无解

当然还有第三种方法解决大量数据传入的问题

## 使用 Texture 纹理

纹理就是另外的图案 这个就不多做解释了 说白了就是另外一副图 因为图都是由像素构成的 所以可以用纹理来传入大量的数据

```js
function initTexture(index, tSampler, pixels) {
    const texture = gl.createTexture()
    gl.activeTexture(gl[`TEXTURE${index}`])
    gl.bindTexture(gl.TEXTURE_2D, texture)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST)
    gl.texImage2D(
        gl.TEXTURE_2D,
        0,
        gl.RGBA,
        dimen,
        dimen,
        0,
        gl.RGBA,
        gl.UNSIGNED_BYTE,
        pixels,
        0
    )
    gl.uniform1i(getUniformLoc(tSampler), index)
}
const colorMap = new Uint32Array([
    0xff0000ff,
    0x00ff00ff,
    0x0000ffff,
    0xffff00ff,
    0xff00ffff,
    0x00ffffff,
    0x000000ff,
    0xffffffff,
    0xf0f0f0ff
])
const RGBAMap = new Uint8Array(colorMap.buffer)
initTexture(0, 'samplerA', RGBAMap)
```

纹理的定义有点复杂 纹理的大小非常苛刻 只能是`2^n * 2^n`的大小 但是数据不可能是固定的 所以 这里有个纹理进行伸缩的过程

使用设置`gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)`来设置伸缩方式 当然 实际上这个对我们这个计算没有影响 因为我们全程按百分比取值

除了缩放 还有要定义未定义点的颜色规则 比如`3 * 3`的图 `1/6, 1/2, 5/6`这三个位置的点和传入值完全一样这个没有问题 但是其他位置默认是渐变 可以使用`gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST)`来设置不使用渐变 即各个色块都是三等分 关于两种效果 下面有例子可以看

另外参数传入可以选择多种方式 直接用`<img>`标签也可以 或者直接传入像素值也可以 具体方式可以查看`texImage2D`文档

当然传入透明的值也是可以的 绘制到画布上的话 真的是透明的 相当神奇

但如果是像素值传入 也可以有多种格式 本例子中将 RGBA 拆开成四个值分别传入 为了方便起见 可以直接使用类型数组直接将 32 位转成 8 位 但是这样的转化方式可能会引起顺序不一致 比如`[0x01020304]` 会被拆成`[0x04, 0x03, 0x02, 0x01]` 具体相关内容可以参考类型数组

最后将纹理的索引绑定到纹理变量上 注意到 下面`sampler2D`类型其实也是`int` 这种类型被称为`Opaque Types` [https://www.khronos.org/opengl/wiki/Data*Type*(GLSL)#Opaque_types](<https://www.khronos.org/opengl/wiki/Data_Type_(GLSL)#Opaque_types>) 注意下就可以

shader 中:

```c
    uniform sampler2D samplerA;
       void main() {
              vec4 color = texture(samplerA, v_pos);
                    o_result = color.abgr;
       }
```

`texture()`为内置函数 用以获取某个纹理在某点的颜色

为了保持输入的时候 rgba 顺序一致 在获取到纹理中某个值的时候需要重新调整顺序

关于纹理的坐标系 和 canvas 的是不一样的 是以左下角为原点 水平向右为 x 正方向 垂直向上为 y 轴正方向 所以前面把 canvas 坐标进行转化也是为了和纹理的坐标系一致

另外 像素写入的顺序 也是是从左下开始 先向右写入一行 再依次向上写入每一行

然后直接将纹理的数据 1:1 对绘制到画布上的效果

默认使用渐变来获取各个颜色 很明显有 9 个点是渐变的中心 就是上面传入的那九个值了

![3](https://static.oschina.net/uploads/img/201712/20220237_pwAN.jpg '渐变的9像素')

设置了`gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST)`后九大块方块

![4](https://static.oschina.net/uploads/img/201712/20220310_LN46.jpg '不渐变的9像素')

对于计算中 后者才是我们想要的效果 不然取值还取到不认识的值 计算要崩啊

使用 Texture 解决了要传入大量数据的问题 但是使用比较复杂 而且数据传输也是相当地耗时 所以还是期待多维数组[Arrays of Arrays](<https://www.khronos.org/opengl/wiki/Data_Type_(GLSL)#Arrays_of_arrays>) 能早一天在浏览器上支持

## 输出

输出的方式单一 直接将值赋到`fragmengt`的`out`声明的变量上就可以将对应的值绘制到画布上 接着可以使用`gl.drawArrays()`方法来读取各个像素上的点 和纹理的输入一样 读取像素的方法也有很多参数和重载 为了方便 咱们使用下面这种直接读取 RGBA 这四个维度的值

```js
gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
let picBuf = new ArrayBuffer(canvas.width * canvas.width * 4)
let picU8 = new Uint8Array(picBuf)
let picU32 = new Uint32Array(picBuf)
gl.readPixels(
    0,
    0,
    canvas.width,
    canvas.width,
    gl.RGBA,
    gl.UNSIGNED_BYTE,
    picU8
)
console.log(picU32)
```

注意 `readPixels`方法必须和`drawArrays`方法在同一个执行队列中同步执行 否则会无法读取到数据

同上面输入的理 这里使用了`Uint32Array`和`Uint8Array`进行数据转化 `ArrayBuffer`的长度即为画布的像素数量乘上 4 因此在`fragment`中输出的时候需要反转四个维度

读取的顺序和纹理写入的顺一致 都是从左下开始 沿 x 正方向读取一行 再向 y 方向读取各行 最后合并成一个完整的数组 如果输入输出和这个顺序有关的话 需要注意一下

## 矩阵乘法实验

好了 搞了这么多 已经吧基本的输入输出搞定了 咱来开始试一下矩阵相乘吧

不多说了 直接上代码

## 先是一个基本类

包含了输入输出等基本方法 以及会用到的其他方法 基本上前面都有介绍

```js
class GPUComputing {
    constructor(dimen, canvasSize) {
        this.dimen = dimen
        this.canvas = document.createElement('canvas')
        this.canvas.width = canvasSize || dimen
        this.canvas.height = canvasSize || dimen
        this.gl = this.canvas.getContext('webgl2')
        this.program = this.gl.createProgram()
    }
    async init(vertexShader, fragmentShader) {
        const vshaderCode = await this.loadRes(vertexShader)
        let fshaderCode = await this.loadRes(fragmentShader)
        fshaderCode = fshaderCode.replace(/CANVAS_SIZE/g, this.dimen)
        this.initShader(vshaderCode, this.gl.VERTEX_SHADER)
        this.initShader(fshaderCode, this.gl.FRAGMENT_SHADER)
        this.gl.linkProgram(this.program)
        this.gl.useProgram(this.program)
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.gl.createBuffer())
        let vecPosXArr = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1])
        this.gl.bufferData(
            this.gl.ARRAY_BUFFER,
            vecPosXArr,
            this.gl.STATIC_DRAW
        )
        let posAtrLoc = this.getAttribLoc('g_pos')
        this.gl.enableVertexAttribArray(posAtrLoc)
        this.gl.vertexAttribPointer(posAtrLoc, 2, this.gl.FLOAT, false, 0, 0)
        this.gl.clearColor(0.0, 0.0, 0.0, 1)
        this.gl.clear(this.gl.COLOR_BUFFER_BIT)
    }
    initShader(code, type) {
        const shader = this.gl.createShader(type)
        this.gl.shaderSource(shader, code)
        this.gl.compileShader(shader)
        if (!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS))
            throw new Error('compile: ' + this.gl.getShaderInfoLog(shader))
        this.gl.attachShader(this.program, shader)
    }
    initTexture(index, tSampler, pixels) {
        const texture = this.gl.createTexture()
        this.gl.activeTexture(this.gl[`TEXTURE${index}`])
        this.gl.bindTexture(this.gl.TEXTURE_2D, texture)
        this.gl.texParameteri(
            this.gl.TEXTURE_2D,
            this.gl.TEXTURE_MIN_FILTER,
            this.gl.LINEAR
        )
        this.gl.texParameteri(
            this.gl.TEXTURE_2D,
            this.gl.TEXTURE_MAG_FILTER,
            this.gl.NEAREST
        )
        this.gl.texImage2D(
            this.gl.TEXTURE_2D,
            0,
            this.gl.RGBA,
            this.dimen,
            this.dimen,
            0,
            this.gl.RGBA,
            this.gl.UNSIGNED_BYTE,
            pixels,
            0
        )
        this.gl.uniform1i(this.getUniformLoc(tSampler), index)
    }
    initUniform(tUniform, value) {
        const uniLoc = this.getUniformLoc(tUniform)
        this.gl.uniform1fv(uniLoc, value)
    }
    getAttribLoc(name) {
        let loc = this.gl.getAttribLocation(this.program, name)
        if (loc == -1) throw `getAttribLoc  ${name} error`
        return loc
    }
    getUniformLoc(name) {
        let loc = this.gl.getUniformLocation(this.program, name)
        if (loc == null) throw `getUniformLoc ${name} err`
        return loc
    }
    async loadRes(file) {
        const resp = await fetch(file)
        return resp.text()
    }
    render() {
        this.gl.drawArrays(this.gl.TRIANGLE_STRIP, 0, 4)
    }
    read() {
        let picBuf = new ArrayBuffer(this.dimen * this.dimen * 4)
        let picU8 = new Uint8Array(picBuf)
        let picU32 = new Uint32Array(picBuf)
        this.gl.readPixels(
            0,
            0,
            this.dimen,
            this.dimen,
            this.gl.RGBA,
            this.gl.UNSIGNED_BYTE,
            picU8
        )
        return picU32
    }
}
```

## 然后写一个基本的 `vertex shader`

`v_shader.c` 为啥要用`.c`做扩展名呢 当然是因为方便代码高亮啊

这个 shader 和前面那个一模一样 对画布的坐标进行了一个转化

```c
  #version 300 es   
  precision highp float;  
  precision highp int;   
  in vec4 g_pos;  
  out vec2 v_pos;   
  void main() {      
      float curX = (g_pos.x + 1.) / 2.;      
      float curY = (g_pos.y + 1.) / 2.;      
      v_pos = vec2(curX, curY);            
      gl_Position = g_pos;  
    }
```

## 使用`uniform`的矩阵相乘

```js
class MatrixUniform extends GPUComputing {
    async init(matrixA, matrixB) {
        await super.init('v_shader.c', 'f_matrix_uniform.c')
        this.initUniform('i_matrixA', new Float32Array(matrixA))
        this.initUniform('i_matrixB', new Float32Array(matrixB))
    }
}
```

`f_matrix_uniform.c`:

```c
    #version 300 es     precision highp float;    precision highp int;     const int U_LENGTH = CANVAS_SIZE;     uniform float i_matrixA[U_LENGTH * U_LENGTH];    uniform float i_matrixB[U_LENGTH * U_LENGTH];     in vec2 v_pos;    out vec4 o_result;     vec4 int2rgba(const int i) {        vec4 v4;        v4.r = float(i >> 24 & 0xFF) / 255.;        v4.g = float(i >> 16 & 0xFF) / 255.;        v4.b = float(i >>  8 & 0xFF) / 255.;        v4.a = float(i >>  0 & 0xFF) / 255.;        return v4;    }     vec4 reverse(const vec4 v){        return v.abgr;    }     int getValue(float matrix[U_LENGTH * U_LENGTH], int x, int y){        return int(matrix[int(U_LENGTH) * x + y]);    }     void main() {        // readPixels读取数值时次序与数组不一致,         int curX = int(float(U_LENGTH) * v_pos.y);        int curY = int(float(U_LENGTH) * v_pos.x);         int sum = 0;        for (int i = 0; i < U_LENGTH; i++) {            sum += getValue(i_matrixA, curX, i) * getValue(i_matrixB, i, curY);        }         o_result = reverse(int2rgba(sum));    }
```

数组传参是挺难看

## 使用`Texture`的矩阵相乘

```js
class MatrixTexture extends GPUComputing {
    async init(matrixA, matrixB) {
        await super.init("v_shader.c", "f_matrix_texture.c");
        this.initTexture(0, "samplerA", matrixA)
        this.initTexture(1, "samplerB", matrixB)
    }
}
```

`f_matrix_texture.c`:

```c
    #version 300 es 
    precision highp float;
    precision highp int;     
    const int U_LENGTH = CANVAS_SIZE;    
    const float U_TEXTURE_POS_FIX = .5 / float(U_LENGTH);     
    in vec2 v_pos;    
    uniform sampler2D samplerA;    
    uniform sampler2D samplerB;     
    out vec4 o_result;     
    vec4 int2rgba(const int i) {        
        vec4 v4;        
        v4.r = float(i >> 24 & 0xFF) / 255.;        
        v4.g = float(i >> 16 & 0xFF) / 255.;        
        v4.b = float(i >>  8 & 0xFF) / 255.;        
        v4.a = float(i >>  0 & 0xFF) / 255.;        
        return v4;    
        }      
        int rgba2int(const vec4 v) {        
            int r = int(v.r * 255.) << 24;        
            int g = int(v.g * 255.) << 16;        
            int b = int(v.b * 255.) << 8;        
            int a = int(v.a * 255.) << 0;        
            return r + g + b + a;    
        }     
        vec4 reverse(const vec4 v){
            return v.abgr;    
        }     
        int getMaxtrixValue(const sampler2D sampler, const float x, const float y){
            vec4 pixel = texture(sampler, vec2(x, y));        
            return rgba2int(reverse(pixel));    
        }     
        void main() {        
            int sum = 0;        
            float textPos = 0.0;        
            for (int i = 0; i < U_LENGTH; i++) {            
                textPos = U_TEXTURE_POS_FIX + float(i) / float(U_LENGTH);            
                sum += getMaxtrixValue(samplerA, v_pos.x, textPos) * getMaxtrixValue(samplerB, textPos, v_pos.y);
            }        
            o_result = reverse(int2rgba(sum));    
        }
```

里面有个`U_TEXTURE_POS_FIX`常量 用来修正 texture 取值的时候的位置 以免取到像素边界上造成不必要麻烦

## 然后咱们开始写个测试例子

先定义矩阵生成的函数 和前面那篇博客差不太多 只是把数据改用了`Uint32Array`来存放

```js
function createMatrix(dims, fn) {
    let matrix = new Uint32Array(dims * dims)
    for (let i = 0; i < dims; i++) {
        for (let j = 0; j < dims; j++) {
            matrix[i * dims + j] = fn(i, j)
        }
    }
    return matrix
}
```

然后定义一个执行函数

```js
async function matrixJob(dimensions) {
    console.log("dimensions", dimensions);        // 随机创建一个矩阵  然后转化成所需要的Uint8Array类型        
    const randomMatrix = createMatrix(dimensions, () => Math.floor(Math.random() * 1000));
    const randomMatrixU8 = new Uint8Array(randomMatrix.buffer);
    console.log("intput matrix", randomMatrix);
    // console.log("intput matrix in Uint8Array", randomMatrixU8);        
    let result = null;            // 使用uniform进行传参       
    console.time("demoMatrixUniform");
    const demoMatrixUniform = new MatrixUniform(dimensions);
    await demoMatrixUniform.init(randomMatrix, randomMatrix);
    demoMatrixUniform.render();
    result = demoMatrixUniform.read();
    console.timeEnd("demoMatrixUniform")
    // console.log("demoMatrixUniform output", result);          // 使用texture进行传参       
    console.time("demoMatrixTexture")
    const demoMatrixTexture = new MatrixTexture(dimensions);
    await demoMatrixTexture.init(randomMatrixU8, randomMatrixU8);
    demoMatrixTexture.render();
    result = demoMatrixTexture.read();
    console.timeEnd("demoMatrixTexture");
    // console.log("demoMatrixTexture output", result);                 // 为了对比 增加一个普通实现的矩阵相乘        
    const matrixMultiplyCPU = function (ma, mb) {
        return createMatrix(dimensions, function (x, y) { let sum = 0; for (let i = 0; i < dimensions; i++) { sum += ma[x * dimensions + i] * mb[i * dimensions + y]; } return sum; });
    }
    console.time("matrixMultiplyCPU");
    result = matrixMultiplyCPU(randomMatrix, randomMatrix);
    console.timeEnd("matrixMultiplyCPU");        // console.log("matrixMultiplyCPU output", result);   
}
```

## 结果分析

![5](https://static.oschina.net/uploads/img/201712/20220353_q6RE.jpg '计算结果')

数据正确上没啥问题 不过执行时间上很明显是直接计算来的快 `uniform`传参比`texture`略慢一点点

不过矩阵太小了 看不出其他的 所以咱们和前面一样 使用多组数据进行对比 因为受数组长度的限制 所以之后的计算`uniform`方式就不参与进来比了

同样来一个多组的数据 把不必要的 log 先注释掉

![6-1](https://static.oschina.net/uploads/img/201712/20220431_RGPC.jpg '计算结果1')

这个是一台设备

很明显 纯`WebGL`计算比前面使用的`gup.js`耗时少 20% 但是 但是 CPU 计算在矩阵规模变大之后也有很大的下降 不清楚具体是啥原因造成的 应该是类型数组本身的性能有关吧

再看看那个配置`GTX 1060 3G`的电脑

![6-2](https://static.oschina.net/uploads/img/201712/20220453_g59Q.jpg '计算结果2')

这个就相当厉害了 比`gpu.js`性能高了相当多 特别是在维度低的时候 即使是大小为 2048 执行时间也减少了 60+%

性能比原生数组 CPU 计算高了 200 倍 比类型数组 CPU 计算高了 300 倍

但是 前面也说了 使用 GPU 计算最大的耗时在数据传输 那如果数据传输不算 真正计算有多快呢

也是 咱给几个上面的关键函数分别加个计时 `init()`和`render()`和`read()`分别计时

这个是低配的电脑

![7-1](https://static.oschina.net/uploads/img/201712/20220512_aSCe.jpg '计时结果1')

这个是 1060 的电脑

![7-2](https://static.oschina.net/uploads/img/201712/20220546_Vi8V.jpg '计时结果2')

