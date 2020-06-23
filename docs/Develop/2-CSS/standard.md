# 规范

CSS 代码书写风格应该保持一致，容易被理解和被维护。

### 风格

1. 缩进使用 tab（2 个空格）
2. 结尾需要加分号 ;
3. 空格添加遵循社区风格
4. 属性之间适当空行
5. 使用到预处理器（SCSS,LESS等）嵌套需要缩进
6. 声明块之间需要空行
7. 声明块内容需要换行
8. 统一使用双引号

```less
.element {
  color: red !important;
  background-color: rgba(0, 0, 0, .5);
  &:hover {
    background-color: rgba(0, 0, 0, 1);
  }
}
```

### 注释

统一使用 /* */

### 资源引用

所引用资源需要使用双引号包裹

### 命名

* id 选择器使用驼峰式，与 JS 变量保持一致
* 类选择器使用中划线 - 进行分隔
* 变量前缀为 -- ，使用 - 进行分隔

eg:

```css

:root {
  --main-color: #448aff;
}

#myContext {
  display: none;
}

.element-ui-bar {
  padding: 0;
  color: var(--main-color);
}

```

### 颜色

使用16进制，如 #000000，不使用 rgb 颜色格式
alpha 通道非透明情况使用 rgba 颜色格式



