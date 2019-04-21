---
sidebar: auto
---

# 前端基础

## HTML5 语义

<div align="right">
    参考：<a href="http://www.runoob.com/html/html5-semantic-elements.html" target="_blank">HTML5 语义元素</a>
</div>

- 无语义元素实例
    - `<div>` 和 `<span>` 等
    - 无需考虑内容
- 语义元素实例
    - `<form>`， `<table>` 和 `<img>` 等
    - 定义清晰
    
<div style="text-align:center;">
    <img src="./image/img_sem_elements.gif" width="200px">
</div>

div --> section  --> article: 语义是从无到有，逐渐增强的。<br>
article 是一个特殊的 section 标签，比 section 具有更明确的语义, 它代表一个独立的、完整的相关内容块。<br>
- section 强调分段或分块
    - 功能完整即可
    - 和 header、footer、其他 section、div、甚至是p同级
- article 强调独立性
    - 有头有尾
    - 有 header、 footer、section

### \<main\>标签
一个文档(完整显示的页面)中最多1个 **`<main>`** 元素，级别非常高
- 其内容必须唯一，不能含有重复元素(例如: 导航、侧边栏 等)
- 不能是以下元素的后代：`<article>、<aside>、<footer>、<header> 或 <nav>`

## CSS 语义
### container、wrapper、content、item
- container 表示包含 **`多个对象`** 的结构（用于 **`<div>`** 上）
    - 一个页面最多1个（优先级很高: 可以与 **`<header>`** 同级）
    - 下一级可以为 **`<section>`** 
- wrapper 表示对 **`单个对象`** 进行包装
    - 用于 **`margin、width、padding`** 
- content 表示某对象的内容
    - 应用 **`<section class='abc'>`** 的主要内容: **`<div class="abc-content">`** 
    - 与 **`<h?>`** 同级 
- item 
    - 应用于 **`<section>`** 下的 **`多个重复元素`** 
- 其他
    - main

#### 组合用法
<div align="right">
    参考：<a href="/front-end/responsive-web.html" target="_blank">Responsive Web</a>
</div>

子组件中
```html
<div class="demo-wrapper">
  <div class="demo">
     <h2 class="title">Demo 例子</h2>
     <div class="container">
        <section class="en">
          <div class="en-content">
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div> 
          </div>
        </section>
        <section class="zh">
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
        </section>
     </div>
  </div>
</div>
```

优先级(越里面，越多用): content > container > wrapper


### icon
```html
<span class="icon icon-xyz"></span>
```
- icon: icon 的通用样式<br>
- icon-xyz: icon 的内容



###  研究 rem
rem: 等比收缩(viewport)使用了移动端，至少得有2套UI

## JS 语义
<div align="right">
    链接：<a href="https://juejin.im/post/592d4a5b0ce463006b43b6da#heading-2"  target="_blank">前端开发规范：命名规范、html规范、css规范、js规范</a>
</div>

### 函数命名
- can
- has
    - 代替 isIn
- is
- get
    - 返回一个非布尔值
- set
    - 无返回值、返回布尔值、或者返回链式对象
- handle(处理)
- toggle(开关)
- trigger(触发)
- on
- load(加载)
- reversed(倒转)

#### Vue 中
尽量将 `can、has、is` 放在 computer 中

凡是有放在@click中的fn，都用handle开头

### 变量命名
- array	a
- boolean	b
- function	fn
- int	i
- object	o
- regular	r
- string	s