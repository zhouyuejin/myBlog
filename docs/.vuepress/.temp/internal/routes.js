export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/myBlog/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"周先生的学习博客"} }],
  ["/JavaScript/", { loader: () => import(/* webpackChunkName: "JavaScript_index.html" */"E:/myBlog/docs/.vuepress/.temp/pages/JavaScript/index.html.js"), meta: {"title":"JavaScript 学习笔记"} }],
  ["/interview/CSS.html", { loader: () => import(/* webpackChunkName: "interview_CSS.html" */"E:/myBlog/docs/.vuepress/.temp/pages/interview/CSS.html.js"), meta: {"title":"CSS面试相关"} }],
  ["/interview/Engineering.html", { loader: () => import(/* webpackChunkName: "interview_Engineering.html" */"E:/myBlog/docs/.vuepress/.temp/pages/interview/Engineering.html.js"), meta: {"title":"工程化面试相关"} }],
  ["/interview/HTML.html", { loader: () => import(/* webpackChunkName: "interview_HTML.html" */"E:/myBlog/docs/.vuepress/.temp/pages/interview/HTML.html.js"), meta: {"title":"HTML面试相关"} }],
  ["/interview/JavaScript.html", { loader: () => import(/* webpackChunkName: "interview_JavaScript.html" */"E:/myBlog/docs/.vuepress/.temp/pages/interview/JavaScript.html.js"), meta: {"title":"JavaScript面试相关"} }],
  ["/interview/NodeJs.html", { loader: () => import(/* webpackChunkName: "interview_NodeJs.html" */"E:/myBlog/docs/.vuepress/.temp/pages/interview/NodeJs.html.js"), meta: {"title":"NodeJs面试相关"} }],
  ["/interview/React.html", { loader: () => import(/* webpackChunkName: "interview_React.html" */"E:/myBlog/docs/.vuepress/.temp/pages/interview/React.html.js"), meta: {"title":"React面试相关"} }],
  ["/interview/Vue.html", { loader: () => import(/* webpackChunkName: "interview_Vue.html" */"E:/myBlog/docs/.vuepress/.temp/pages/interview/Vue.html.js"), meta: {"title":"Vue面试相关"} }],
  ["/interview/%E5%89%8D%E7%AB%AF%E4%BC%98%E5%8C%96.html", { loader: () => import(/* webpackChunkName: "interview_前端优化.html" */"E:/myBlog/docs/.vuepress/.temp/pages/interview/前端优化.html.js"), meta: {"title":"前端优化面试相关"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"E:/myBlog/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
