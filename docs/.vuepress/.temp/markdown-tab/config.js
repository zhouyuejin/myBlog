import { CodeTabs } from "E:/myBlog/node_modules/.pnpm/@vuepress+plugin-markdown-t_8ab8cf8e2236944a817c9b3cb99af2cf/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "E:/myBlog/node_modules/.pnpm/@vuepress+plugin-markdown-t_8ab8cf8e2236944a817c9b3cb99af2cf/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "E:/myBlog/node_modules/.pnpm/@vuepress+plugin-markdown-t_8ab8cf8e2236944a817c9b3cb99af2cf/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
