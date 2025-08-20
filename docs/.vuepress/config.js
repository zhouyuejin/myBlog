import { viteBundler } from "@vuepress/bundler-vite";
import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";

export default defineUserConfig({
  bundler: viteBundler({
    viteOptions: {
      build: {
        assetsInlineLimit: 0,
      },
      css: {
        charset: false,
      },
    },
  }),
  theme: defaultTheme({
    navbar: [
      {
        text: "首页",
        link: "/",
      },
      {
        text: "JavaScript",
        link: "/JavaScript/",
      },
    ],
    // 使用对象形式配置不同路径的侧边栏
    sidebar: {
      // 首页路径
      "/": [
        {
          text: "前端面试总结",
          link: "/interview", // 添加主链接
          // 可以添加子项
          children: [
            { text: "JavaScript", link: "/interview/JavaScript.md" }, // 移除末尾斜杠
            { text: "CSS", link: "/interview/CSS.md" }, // 移除末尾斜杠
            { text: "HTML", link: "/interview/HTML.md" }, // 移除末尾斜杠
            { text: "Vue", link: "/interview/Vue.md" }, // 移除末尾斜杠
            { text: "React", link: "/interview/React.md" }, // 移除末尾斜杠
            { text: "NodeJs", link: "/interview/NodeJs.md" }, // 移除末尾斜杠
            { text: "工程化", link: "/interview/Engineering.md" }, // 移除末尾斜杠
            { text: "性能优化", link: "/interview/前端优化.md" }, // 移除末尾斜杠
          ],
        },
      ],
      // 其他路径保持默认
      "/JavaScript/": [
        { text: "JavaScript基础", link: "/JavaScript/index.md" },
      ],
    },
  }),
  lang: "zh-CN",
  title: "周先生的学习博客",
  description: "这是周先生的学习博客，记录学习过程中的一些内容",
});
