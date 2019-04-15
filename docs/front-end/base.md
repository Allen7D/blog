---
sidebar: auto
---

# 前端基础

## HTML5 语义化
<div style="text-align:right;">
    参考：<a src="http://www.runoob.com/html/html5-semantic-elements.html">HTML5 语义元素</a>
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
    

## CSS 的 class 语义标准
wrapper、content、container


## 研究 rem
rem: 等比收缩(viewport)使用了移动端，要有2套UI