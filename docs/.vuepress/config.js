import { viteBundler } from "@vuepress/bundler-vite";
import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";

export default defineUserConfig({
  bundler: viteBundler(),
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
  }),
  lang: "zh-CN",
  title: "周先生的学习博客",
  description: "这是周先生的学习博客，记录学习过程中的一些内容",
});
