import comp from "E:/myBlog/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"周先生的学习博客\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{\"updatedTime\":1755575221000,\"contributors\":[{\"name\":\"zhouyuejin\",\"username\":\"zhouyuejin\",\"email\":\"zhouyuejin1995@163.com\",\"commits\":1,\"url\":\"https://github.com/zhouyuejin\"}],\"changelog\":[{\"hash\":\"7cf7de87a68bf084ab9a375615fe060b435b1370\",\"time\":1755575221000,\"email\":\"zhouyuejin1995@163.com\",\"author\":\"zhouyuejin\",\"message\":\"feat: 初始化VuePress博客项目基础配置\"}]},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
