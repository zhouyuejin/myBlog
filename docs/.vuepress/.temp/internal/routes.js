export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/myBlog/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"周先生的学习博客"} }],
  ["/interview/interview.html", { loader: () => import(/* webpackChunkName: "interview_interview.html" */"E:/myBlog/docs/.vuepress/.temp/pages/interview/interview.html.js"), meta: {"title":"面试"} }],
  ["/JavaScript/", { loader: () => import(/* webpackChunkName: "JavaScript_index.html" */"E:/myBlog/docs/.vuepress/.temp/pages/JavaScript/index.html.js"), meta: {"title":"JavaScript 学习笔记"} }],
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
