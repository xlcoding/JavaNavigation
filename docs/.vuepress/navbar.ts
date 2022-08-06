import { navbar } from "vuepress-theme-hope";

export default navbar([
    { text: "大厂导航", icon: "java", link: "/home.md" },
    { text: "校招面试", icon: "article", link: "/column/handwritten-rpc-framework.md" },
    { text: "热点技术", icon: "github", link: "/open-source-project/" },
    { text: "优质专栏", icon: "recommend", link: "/zhuanlan/" },
    { text: "推荐书籍", icon: "book", link: "/books/" },
    {
        text: "网站相关",
        icon: "about",
        children: [
            { text: "走近作者", icon: "zuozhe", link: "/about-the-author/" },
            {
                text: "网站历史",
                icon: "java",
                link: "/xlcoding/history.md",
            },
            {
                text: "旧版入口",
                icon: "java",
                link: "https://snailclimb.gitee.io/javaguide/#/",
            },
            { text: "RSS", icon: "rss", link: "https://javaguide.cn/feed.json" },
        ],
    }
]);
