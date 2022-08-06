import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  lang: "zh-CN",
  title: "小龙coding",
  description: "vuepress-theme-hope 的演示",

  base: "/",

  theme,
});
