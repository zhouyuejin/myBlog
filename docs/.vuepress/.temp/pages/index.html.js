import comp from "E:/myBlog/docs/.vuepress/.temp/pages/index.html.vue"
<<<<<<< HEAD
const data = JSON.parse("{\"path\":\"/\",\"title\":\"周先生的学习博客\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{\"updatedTime\":1755575221000,\"contributors\":[{\"name\":\"zhouyuejin\",\"username\":\"zhouyuejin\",\"email\":\"zhouyuejin1995@163.com\",\"commits\":1,\"url\":\"https://github.com/zhouyuejin\"}],\"changelog\":[{\"hash\":\"7cf7de87a68bf084ab9a375615fe060b435b1370\",\"time\":1755575221000,\"email\":\"zhouyuejin1995@163.com\",\"author\":\"zhouyuejin\",\"message\":\"feat: 初始化VuePress博客项目基础配置\"}]},\"filePathRelative\":\"README.md\"}")
=======
const data = JSON.parse("{\"path\":\"/\",\"title\":\"周先生的学习博客\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{\"updatedTime\":1755676532000,\"contributors\":[{\"name\":\"zhouyuejin\",\"username\":\"zhouyuejin\",\"email\":\"zhouyuejin1995@163.com\",\"commits\":2,\"url\":\"https://github.com/zhouyuejin\"}],\"changelog\":[{\"hash\":\"af384b7a05a2702354ee5472512f1e6f591766dc\",\"time\":1755676532000,\"email\":\"zhouyuejin1995@163.com\",\"author\":\"zhouyuejin\",\"message\":\"feat: 添加前端面试文档并完善博客配置\"},{\"hash\":\"7cf7de87a68bf084ab9a375615fe060b435b1370\",\"time\":1755575221000,\"email\":\"zhouyuejin1995@163.com\",\"author\":\"zhouyuejin\",\"message\":\"feat: 初始化VuePress博客项目基础配置\"}]},\"filePathRelative\":\"README.md\"}")
>>>>>>> dev
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
