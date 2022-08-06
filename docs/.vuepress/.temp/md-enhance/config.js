import { defineClientConfig } from "@vuepress/client";
import ChartJS from "D:/新媒体运营/website/code/java-navigation/node_modules/vuepress-plugin-md-enhance/lib/client/components/ChartJS";
import ECharts from "D:/新媒体运营/website/code/java-navigation/node_modules/vuepress-plugin-md-enhance/lib/client/components/ECharts";
import CodeDemo from "D:/新媒体运营/website/code/java-navigation/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo";
import CodeTabs from "D:/新媒体运营/website/code/java-navigation/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs";
import FlowChart from "D:/新媒体运营/website/code/java-navigation/node_modules/vuepress-plugin-md-enhance/lib/client/components/FlowChart";
import Mermaid from "D:/新媒体运营/website/code/java-navigation/node_modules/vuepress-plugin-md-enhance/lib/client/components/Mermaid";
import Presentation from "D:/新媒体运营/website/code/java-navigation/node_modules/vuepress-plugin-md-enhance/lib/client/components/Presentation";
import "D:/新媒体运营/website/code/java-navigation/node_modules/vuepress-plugin-md-enhance/lib/client/styles/container/index.scss";
import "D:/新媒体运营/website/code/java-navigation/node_modules/vuepress-plugin-md-enhance/lib/client/styles/footnote.scss";
import "D:/新媒体运营/website/code/java-navigation/node_modules/vuepress-plugin-md-enhance/lib/client/styles/image-mark.scss";
import Tabs from "D:/新媒体运营/website/code/java-navigation/node_modules/vuepress-plugin-md-enhance/lib/client/components/Tabs";
import "D:/新媒体运营/website/code/java-navigation/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tasklist.scss";
import "D:/新媒体运营/website/code/java-navigation/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tex.scss";


export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("ChartJS", ChartJS);
    app.component("ECharts", ECharts);
    app.component("CodeDemo", CodeDemo);
    app.component("CodeTabs", CodeTabs);
    app.component("FlowChart", FlowChart);
    app.component("Mermaid", Mermaid);
    app.component("Presentation", Presentation);
    app.component("Tabs", Tabs);
    
  }
});