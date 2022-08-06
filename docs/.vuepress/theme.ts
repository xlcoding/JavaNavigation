import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default hopeTheme({
    logo: "/logo.png",
    hostname: "https://javaguide.cn/",
  author: {
    name: "小龙coding",
    url: "https://xlcoding.top",
  },
  iconAssets: "iconfont",
    repo: "https://github.com/xlcoding/JavaNavigation",
  docsDir: "docs",
  // navbar
  navbar: navbar,
  // sidebar
  sidebar: sidebar,

  footer: "默认页脚",

  displayFooter: true,

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

    blog: {
        intro: "/about-the-author/",
        sidebarDisplay: "mobile",
        medias: {
            Zhihu: "https://www.zhihu.com/people/javaguide",
            Github: "https://github.com/Snailclimb",
            Gitee: "https://gitee.com/SnailClimb",
        },
    },

  encrypt: {
    config: {
      "/guide/encrypt.html": ["1234"],
    },
  },

  plugins: {
    blog: {
      autoExcerpt: true,
    },
      feed: {
          json: true,
      },
      search: {
          // https://v2.vuepress.vuejs.org/zh/reference/plugin/search.html
          // 排除首页
          isSearchable: (page) => page.path !== "/",
          maxSuggestions: 10,
          hotKeys: ["s", "/"],
          // 用于在页面的搜索索引中添加额外字段
          getExtraFields: () => [],
          locales: {
              "/": {
                  placeholder: "搜索",
              },
          },
      },

    // 如果你不需要评论，可以直接删除 comment 配置，
    // 以下配置仅供体验，如果你需要评论，请自行配置并使用自己的环境，详见文档。
    // 为了避免打扰主题开发者以及消耗他的资源，请不要在你的正式环境中直接使用下列配置!!!!!
    comment: {
      /**
       * Using Giscus
       */
      provider: "Giscus",
      repo: "vuepress-theme-hope/giscus-discussions",
      repoId: "R_kgDOG_Pt2A",
      category: "Announcements",
      categoryId: "DIC_kwDOG_Pt2M4COD69",

    },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
});
