import { GitContributors } from "E:/myBlog/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-_885b4e35f413849f3a4953f6d5b797f3/node_modules/@vuepress/plugin-git/lib/client/components/GitContributors.js";
import { GitChangelog } from "E:/myBlog/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-_885b4e35f413849f3a4953f6d5b797f3/node_modules/@vuepress/plugin-git/lib/client/components/GitChangelog.js";

export default {
  enhance: ({ app }) => {
    app.component("GitContributors", GitContributors);
    app.component("GitChangelog", GitChangelog);
  },
};
