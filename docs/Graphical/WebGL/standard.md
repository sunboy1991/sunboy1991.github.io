# 规范
## glsl命名规范
任何变量、函数，都应该使用下划线命名法
```glsl
//bad
vec4 oneColor = vec4(1.,1.,1.,1.);
float createPointSize(){}

//good
vec4 one_color = vec4(1.,1.,1.,1.);
float create_point_size(){}
```
关于特殊变量：
- `attribute`类型的变量，需要使用小写字母`a`开头
- `uniform`类型的变量，需要使用小写字母`u`开头
- `varying`类型的变量，需要使用小写字母`v`开头
```glsl
//bad
attribute positions;
uniform size;
varying calc_positions;

//good
attribute a_position;
uniform u_size;
varying v_calc_position;
```

参考glsl内置变量，第一个下划线后紧跟着的字母大写是允许的
```glsl
//good
gl_Position;
a_Position;
v_Color;
my_Value;
```
## glsl变量名含义参考

## 与glsl相关的js命名规则
对于获取到的glsl变量地址，名称必须与glsl的变量名一致，但下划线部分需要换成js的驼峰，且后面需要加上`Loc|Idx`后缀
```js
//bad
let oneColor = gl.getUniformLocation(program,'u_One_color');
let posLoc = gl.getAttribLocation(program,'a_Position');

//good
let uOneColorLoc = gl.getUniformLocation(program,'u_One_color');
let aPositionLoc = gl.getAttribLocation(program,'a_Position');
//good
let uOneColorIdx = gl.getUniformLocation(program,'u_One_color');
let aPositionIdx = gl.getAttribLocation(program,'a_Position');
```

而获取变量值的时候，则不需要加上后缀，直接名称一致，下划线转驼峰即可
```js
//bad
let oneColor = gl.getUniform(program,uOneColorLoc);
let posLoc = gl.getAttrib(program,aPositionLoc);

//good
let uOneColor = gl.getUniformLocation(program,uOneColorLoc);
let aPosition = gl.getAttribLocation(program,aPositionLoc);
```
