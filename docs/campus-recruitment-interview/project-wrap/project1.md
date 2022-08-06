---
title: 实习、校招关于项目那点事！
category: 校招面试
tag:
  - 简历
  - 项目
---
从收到粉丝私信来看，很多都是咨询项目的问题：

`没有项目怎么办？简历上项目该怎样写？我只做过简单的业务感觉没什么亮点该怎么办，会不会直接被刷下去？不懂项目怎样包装？项目是不是必须要涉及分布式、微服务这些？`

当初我开始找工作时也遇到过相同的问题，然后到处网上B站等搜各种视频（关于项目怎样写？），也看过很多贴子。我发现网上都有一个通病，就是感觉说了又感觉没说，你觉得讲得很有道理，但是听完它讲的你依旧不知道项目怎样写。

然后你也没有合适的项目，即使你做过几个项目，但是都是一些及其简单的项目，没什么亮点，不懂怎样就你自己的项目怎样去包装，网上的视频，帖子就扯一些泛泛的说法，然后全是一些什么负载均衡，分布式、微服务相关的点，我不可能为了亮点而去强行添加这些看起来很牛逼的技术啊；

而且个人觉得大部分校招生刚毕业怎么可能很好理解这些技术（ZK、SpringlCoud、JVM调优、数据库调优）去解决具体的业务问题，即使真的会一点，都是绝少部分同学，假如我作为面试官感觉校招生扯这些一听就是背八股，你背得好，然我找不出问题还行，可以让你过，背得不好我只会觉得你没有独立思考能力，然后实际code能力也不行。

其实当时我想找的是那些**怎样抽丝剥茧的结合具体场景去教你包装项目**，然后你可能模仿它的方法去包装自己的项目，而不是你只是告诉我简历上项目部分要start法则，要突出亮点，要怎么怎么写，我肯定知道要突出亮点，问题**是我压根不知道亮点是啥啊**，呜呜~

我想通过本篇文章全方面的分析项目究竟怎样准备，你看了绝对可以自己打造一个满意的项目出来。

### 3.3.1 项目来源与分类

简历上的项目无非要么是`实习的项目`，要么是`自己真实做过的其他项目`（比赛，跟着网上做、实验室等），要么是`压根就不存在这样一个项目的项目`

**怎样去获得项目（宏观）？**

#### 实习项目

可以将实习的项目写在简历上。

`怎样去写？`

相信绝大部分同学去实习也只是打打杂，即使上手写代码更多的可能也就是简单的调调接口，写写CRUD，不可能涉及到复杂的核心业务，系统优化，调优这些。

这时，你得打开你的格局，虽然你没做过这个功能点，没有进行优化升级，但是不代表和你一起做这个项目的同事，老员工，leader也没有做啊，你可以去请教你的同事看看他们做的好的功能点，业务点，觉得不错的亮点拿过来写进你的简历。

`切记，一定要自己弄清楚`

当初我实习时，主管分配给我的任务也很简单，简单的我都不好意思写进简历，但是我的同事他们（正式员工）做的很多难点，亮点，其中什么分布式锁去解决某个问题，定时任务去解决某个问题等等，我向他们取经学习然后写进自己的简历，这就是亮点啊；

而且是公司实际用来去解决了某个具体业务问题，你可以就这个业务场景先说出现了什么问题，然后你用了什么去解决了这个问题，相比之下这个更能让面试官觉得不错。

#### 自己做的一些项目

你可能在比赛时做过某个项目，跟着网上视频做过某个项目等。

如果是比赛，实验室里面的一些有着相关背景的项目，建议可以从项目背景、项目成果、相关技术栈、有没有真正落地实现，用户量多少这些方面下手。

比如：我参加的XX比赛，获得XX奖，这个获奖比例权重是XX，然后我做的这个项目具体是去解决XX背景下的XX问题，用了XX技术栈，最后上线，目前用户量是XX。

如果是跟着网上视频做的项目，避免分布式微服务，秒杀，商城，实现避免不了，把场景变换一下，技术栈根据求职要求适当调整。

然后这只是一个宏观概念，具体你得落实到和职位相关的一些技术点，`具体细节包装后文统一介绍`。

#### 虚拟的项目

这个适合急于找工作，但是一个项目也没做过的同学。

可以根据当下面试热门技术点，自己构建一个场景，再把热门技术点融入进去，取个合适的名字，项目背景技术栈搞定。

然后百度或请教别人如何用对应技术实现相应功能，项目可编，但一定面试要自己能说清楚。提前想好可能问的问题。

然后还可以去github找一个合适的开源项目，自己再包装一下。`具体细节包装后文统一介绍`。

### 3.3.2 关于项目怎样包装

通过上文，你大概学会了怎样去获取一个适合你的项目。

当时上面述说也有点宏观，关于项目的包装，简历上的具体亮点怎样写你可能还是迷茫，接着往下看~

**关键词**：分布式、微服务、用户量、QPS、TPS、技术栈、业务复杂程度

并不是要求这几个方面大家都满足，无需焦虑，你要相信绝大多数程序员都没有这种项目经验的，那么这种情况怎样去突出你的项目亮点呢？

结合业务，突出业务难点，不要凭空捏造许多需求

**第一个点（分布式微服务）**

这个是现在大型项目必备的嘛，不一定，只是说现在主流的互联网架构模式是这样的，一般的大型项目这样设计，但是你的项目可能由于某些原因，成本、历史什么的，或则完全没有必要，没关系，大胆承认就是，不过你没有用分布式，并不代表你不了解分布式。

突出项目为啥用单体架构，不用分布式，后面项目达到什么程度需要做重构，可以讲讲你的`提前设计的方案，思想`，并不一定你一定做过分布式项目，我觉得这就是一个亮点，比你直接去讲你做分布式项目感觉更亲切，更让人接受，更亮点。

一方面：这体现了你的思考过程，思维、见解。

二方面：这也代表你对分布式有一定了解，并且融入了自己的思考，有一定的自我理解。

三方面：弥补了你单体架构项目的缺陷，也不用为你项目是分布式项目而担心被问穿，反而拔高了你自己的思考的高度

**第二点（项目指标）**

用户量、峰值、QPS、TPS。对于这几个点估计大多数校招生是没有这个意识的，一般是社招面试面试官会问你公司项目，你得把公司项目的这几个指标介绍清楚，怎样去优化，不过这是社招的事了，校招生可以了解一下，提前准备好一套说辞，一般不会问，问了你也得能灵活应对。

**第三点（技术栈）**

大家要走出这样一个误区，技术栈不是堆得越多越好，若是你讲不清你为啥用这个技术，可能就变成了一个扣分项了，比如：你用redis，那你说说为啥你要用redis，在你项目中咋体现的，不用可不可以？（所以你得提前想好一套说辞）

**第三点（业务需求）**

`可能有的朋友就会问，我没有做过啥复杂的项目，没有复杂的需求，怎样去写这个简历？`

这里举个`案例`帮助大家去找理解：

假设现在我需要做这样一个功能 ”`在不同业务事件触发情况下，需要去通知用户邮件、短信、站内信等`“，不同业务场景下，需要用不同组合方式去通知用户，你的项目可能就是这样写的，可能就是不同的业务场景，if else 判断一下，然后去调哪几个;

此时如果你懂的适当优化，包装亮点，你可以用观察者模式，让事件的发生与通知去处理，在代码上便进行了解耦，关于每一个业务场景他有哪几种通知，又可以抽取一个策略模式的接口，动态的去组合每一种业务;

而且如果后期需要增删其他的，用策略模式可以灵活的变更，而不是改大量的 if else 代码，如果之后更灵活了，还可以把这个映射关系放到配置中心去，于是后期每来一个新业务，只需要改一下配置中心的配置，便可以组合不同的通知的模式。

通过上述例子，你可以发现，一个简单的不起眼的业务需求，后者明显更具有扩展性，更解耦，它包好了你对业务的理解，对设计模式的理解，代码编写能力等多个方面，这不就是项目亮点吗，而且我觉得对于一个校招生实习生，这比起烂大街的秒杀，分布式来得不知高级多少倍。

所以大家不要一味追求高并发，各种调优，避免网上千篇一律的八股，简单而真实，平淡中彰显美，我们这就叫”朴素美“。

各种技术只是工具，我们之所以用各种技术是为了去解决问题，当有问题时能更好更合理的选择某种技术去应对，而不是单纯为了使用某种技术去使用。

### 3.3.3 简历上怎样写

简历上项目都可以分为**技术栈**、**项目介绍**、**项目职责**进行描述

![image-20211228134833920](D:\新媒体运营\微信公众号\img\image-20211228134833920.png)

**技术栈**：主要的核心技术即可

**项目介绍**：大致介绍+主要亮点用到的**什么技术解决了什么问题**突出即可，也不用面面俱到，精简切记

**项目职责**：主要写项目亮点和你负责的那块。

1. 参与了XX开发，熟悉XX开发流程（宏观项目开发）
2. 负责XX功能点（自己负责那块）
3. 使用XX技术解决了XX问题，使得系统或则其他方面得到多大改进（亮点突出）
4. 优化了XX，使得系统XX模块提高了n倍速度。
5. 实际操作-找出你项目中希望被面试官问到的点，或者你认为属于项目亮点的部分，突出你对项目的优化部分（黑体加粗）

**举例**：

- 使用nginx实现了负载均衡，提高了访问速度
- 利用Redis实现分布式锁解决了某个问题
- 定义热点数据并缓存在Redis，降低了数据库访问压力
- 利用zookeeper实现HA，解决单点故障
- 利用某个设计模式对代码重构，避免了XX，增强代码可读性，扩展性等
- 对项目架构进行了重构，将单体架构构建成分布式微服务的，XXXXX

最后，简历项目建议写2个即可。

好的，关于项目这块我想的经验和想说的大致都说清楚啦，希望对你有帮助。

如果实在还是不懂，可以后台联系我将我的项目案例给你做过参考。需要简历模板的也可以后台联系我。