export const themeData = JSON.parse("{\"navbar\":[{\"text\":\"首页\",\"link\":\"/\"},{\"text\":\"JavaScript\",\"link\":\"/JavaScript/\"}],\"sidebar\":{\"/\":[{\"text\":\"前端面试总结\",\"link\":\"/interview\",\"children\":[{\"text\":\"JavaScript\",\"link\":\"/interview/JavaScript.md\"},{\"text\":\"CSS\",\"link\":\"/interview/CSS.md\"},{\"text\":\"HTML\",\"link\":\"/interview/HTML.md\"},{\"text\":\"Vue\",\"link\":\"/interview/Vue.md\"},{\"text\":\"React\",\"link\":\"/interview/React.md\"},{\"text\":\"NodeJs\",\"link\":\"/interview/NodeJs.md\"},{\"text\":\"工程化\",\"link\":\"/interview/Engineering.md\"},{\"text\":\"性能优化\",\"link\":\"/interview/前端优化.md\"}]}],\"/JavaScript/\":[{\"text\":\"JavaScript基础\",\"link\":\"/JavaScript/index.md\"}]},\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"logo\":null,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
