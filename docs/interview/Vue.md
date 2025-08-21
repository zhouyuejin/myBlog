---
title: Vue面试相关
description: Vue面试相关总结
lang: zh-CN
tags:
  - 面试
  - Vue
---

## Vue3 中实现组件异步加载的方式有哪些？

在 Vue3 中，实现组件异步加载（也称为懒加载）是优化首屏加载性能的重要手段。尤其适用于大型应用中拆分代码包，减少初始化加载资源体积。

1. 使用`defineAsyncComponent `定义异步组件。

   直接传入一个返回 import 动态导入的函数。

   ```vue
   <template>
     <div>
       <h1>异步组件</h1>
       <AsyncComponent />
     </div>
   </template>

   <script setup>
   import { defineAsyncComponent } from "vue";

   const AsyncComponent = defineAsyncComponent(() =>
     import("./AsyncComponent.vue")
   );
   </script>
   ```

2. 带配置项的用法
   可以传入一个配置对象，用于定制异步组件的加载行为。

   ```vue
   <template>
     <div>
       <h1>异步组件</h1>
       <AsyncComponent />
     </div>
   </template>

   <script setup>
   import { defineAsyncComponent } from "vue";

   const AsyncComponent = defineAsyncComponent({
     loader: () => import("./AsyncComponent.vue"),
     loadingComponent: LoadingComponent,
     errorComponent: ErrorComponent,
     delay: 200,
     timeout: 3000,
   });
   </script>
   ```

3. 结合路由懒加载
   可以在路由配置中使用 `component: () => import('./AsyncComponent.vue')` 实现路由级别的异步加载。
   ```js
   const router = createRouter({
     history: createWebHashHistory(),
     routes: [
       {
         path: "/async",
         component: () => import("./AsyncComponent.vue"),
       },
     ],
   });
   ```
4. 使用`import.meta.globEager`实现批量导入
   可以使用 `import.meta.globEager` 实现批量导入多个组件，返回一个对象，键为组件路径，值为组件模块。
   ```js
   const components = import.meta.globEager("./components/*.vue");
   ```
5. 使用`Suspense `配合异步组件
   可以使用 `Suspense` 组件配合异步组件，实现组件加载过程中的自定义渲染。

   ```vue
   <template>
     <div>
       <h1>异步组件</h1>
       <Suspense>
         <template #default>
           <AsyncComponent />
         </template>
         <template #fallback>
           <div>加载中...</div>
         </template>
       </Suspense>
     </div>
   </template>
   ```

## Vue3 中 watch 和 watchEffect 的区别?

在 Vue3 中，`watch`和`watchEffect `都是用于监听数据变化并执行副作用的 API，但它们的使用场景和行为特性有显著区别。
区别：

1. 依赖追踪方式不同。
   - `watch`：显示指定依赖源。需要手动声明要监听的响应式数据（依赖），只有当指定的依赖发生变化时，才会执行回调。
   - `watchEffect`：自动依赖最终。会自动收集在回调函数中使用的响应式数据（依赖），并在这些依赖发生变化时执行回调。
2. 初始化执行不同。
   - `watch`：不会在初始化时立即执行回调，只有当监听的依赖发生变化时才会执行。
   - `watchEffect`：会在初始化时立即执行回调，并自动收集依赖。
3. 回调函数参数不同。
   - `watch`：回调函数接收两个参数：新值和旧值。
   - `watchEffect`：回调函数没有参数，直接在回调函数中使用响应式数据即可。
4. 监听范围不同
   - `watch`：更精准的控制，可以监听，单个响应式数据（ref,reactive）属性。
   - `watchEffect`：会自动监听回调函数中使用的所有响应式数据，无需手动指定依赖。
5. 使用场景不同
   - `watch`：适用于需要精确监听某个数据变化的场景，如监听路由参数变化。
     - 需要明确知道数据变化前后的值。
     - 只需要监听特定的数据，避免无关数据变化触发回调。
     - 不需要初始化执行，只在数据变化时执行。
   - `watchEffect`：适用于需要自动监听依赖变化的场景，如监听多个数据变化。
     - 依赖较多且不需要区分新旧值。
     - 需要初始化立即执行。
     - 逻辑简单，希望自动管理依赖。
