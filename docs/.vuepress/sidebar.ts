import { sidebar } from "vuepress-theme-hope";
import { highQualityTechnicalArticles } from "./sidebar/high-quality-technical-articles";
import { aboutTheAuthor } from "./sidebar/about-the-author";
import { books } from "./sidebar/books";
import { CampusRecruitmentInterview } from "./sidebar/campus-recruitment-interview";

export default sidebar({
    // 应该把更精确的路径放置在前边
    "/campus-recruitment-interview/": CampusRecruitmentInterview,
    "/books/": books,
    "/about-the-author/": aboutTheAuthor,
    "/high-quality-technical-articles/": highQualityTechnicalArticles,
    "/javaguide/": ["intro", "history", "contribution-guideline", "faq", "todo"],
    "/zhuanlan/": [
        "java-mian-shi-zhi-bei",
        "handwritten-rpc-framework",
        "source-code-reading",
    ],
    // 必须放在最后面
    "/": [
        {
            text: "大厂导航",
            icon: "interview",
            prefix: "learning-navigation/",
            collapsable: true,
            children: [
                {
                    text: "零基础小白",
                    prefix: "zero-foundation/",
                    icon: "basic",
                    collapsable: true,
                    children: [
                        "knowledge-system",
                    ],
                }
            ],
        },
        {
            text: "校招面试",
            icon: "java",
            prefix: "campus-recruitment-interview/",
            collapsable: true,
            children: [
                {
                    text: "上岸经验",
                    prefix: "success-experience/",
                    icon: "basic",
                    collapsable: true,
                    children: [
                        "erben-success-experience-01",
                    ],
                },
                {
                    text: "简历制作",
                    prefix: "resume-writing/",
                    icon: "basic",
                    collapsable: true,
                    children: [
                        "tx-resume",
                    ],
                },
                {
                    text: "项目包装",
                    prefix: "project-wrap/",
                    icon: "basic",
                    collapsable: true,
                    children: [
                        "project1",
                    ],
                }
            ],
        },
        {
            text: "CS指南",
            icon: "computer",
            prefix: "cs-guide/",
            collapsable: true,
            children: [
                {
                    text: "计算机网络",
                    prefix: "network/",
                    icon: "network",
                    collapsable: true,
                    children: [
                        "",
                    ],
                },
                {
                    text: "操作系统",
                    prefix: "os/",
                    icon: "caozuoxitong",
                    collapsable: true,
                    children: [
                        "",
                    ],
                },
                {
                    text: "项目包装",
                    prefix: "project-wrap/",
                    icon: "basic",
                    collapsable: true,
                    children: [
                        "project1",
                    ],
                }
            ],
        },
        {
            text: "对线面试官",
            icon: "java",
            prefix: "online-interviewer/",
            collapsable: true,
            children: [
                "1",
                "2",
                "3"
            ],
        },
        {
            text: "面经解读",
            icon: "java",
            prefix: "face-warp-analyse/",
            collapsable: true,
            children: [
                "1",
                "2"]
        }
    ],
});
