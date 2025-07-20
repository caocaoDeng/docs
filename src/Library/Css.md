---
title: 八股文【Css】
---

## 选择器及优先级

> !important => 行内样式 => ID => 类(Class)/伪类/属性选择器 => 标签/伪元素 => 关系选择器 => 通配符(\*)

## BFC

> 全称块级格式化上下文(Block Formatting Context)，它决定了元素如何排列以及与其他元素的关系；
> BFC 提供了一个独立环境(作用范围或容器)，让 HTML 元素在环境中按照规则进行布局；环境和环境间的布局互不影响。

#### 如何触发 BFC？

> 浮动（float）
>
> 定位（position）
>
> 弹性盒模型（flex）
>
> 行内块元素（inline-block）
>
> overflow

#### BFC 能解决什么问题？

> 解决外边距合并（overflow）
>
> 清除浮动
