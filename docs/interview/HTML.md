---
title: HTML面试相关
description: HTML面试相关总结
lang: zh-CN
tags:
  - 面试
  - HTML
---

## 浏览器缩放有哪些方式可以实现？

1. 通过 CSS 控制元素缩放。

- transform: scale()
- transform: scaleX()
- transform: scaleY()

2. window.devicePixelRatio(配合缩放逻辑)
3. 监听浏览器默认缩放事件
   - window.addEventListener('resize', () => {})
4. ResizeObserver（更精准的监听）

### 总结

常用的缩放实现方式：

- 元素级缩放：优先使用`transform: scale()`，灵活且兼容性好。
- 全局缩放： 推荐`transform`配合容器尺寸调整，或兼容使用 zoom 属性。
- 监听缩放：通过 `resize` 事件或 `ResizeObserver` 感知用户的缩放操作。
