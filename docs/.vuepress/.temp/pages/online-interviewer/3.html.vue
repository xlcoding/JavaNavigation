<template><div><h1 id="你好-面试官-你拿java-map考验老干部" tabindex="-1"><a class="header-anchor" href="#你好-面试官-你拿java-map考验老干部" aria-hidden="true">#</a> 你好，面试官 | 你拿Java Map考验老干部？</h1>
<p>本期是【<strong>你好，面试官</strong>】系列文章的第<strong>3</strong>期，持续更新中.....。</p>
<p>回复&quot;<strong>我要进大厂</strong>&quot;获取思维导图，目前还在更新中，从小白到大厂~</p>
<h2 id="小龙有话说" tabindex="-1"><a class="header-anchor" href="#小龙有话说" aria-hidden="true">#</a> 小龙有话说</h2>
<p>本期会模拟面试 Map 相关内容。</p>
<p>涉及知识点，Map 常使用实现类使用场景，特性；Hash算法；HashMap原理剖析；分段锁；ConcurrentHashMap；</p>
<p><code v-pre>本期题改编自 ——2022届春招 阿里供应链 一面</code></p>
<h2 id="面试现场" tabindex="-1"><a class="header-anchor" href="#面试现场" aria-hidden="true">#</a> 面试现场</h2>
<p>叮叮叮......</p>
<p><strong>面试官</strong>：“你好，我是XX面试官，请问是小龙吗？”</p>
<p><strong>小龙</strong>：“您好，面试官，我是小龙”</p>
<p><strong>面试官</strong>：“好的，现在有空吗，我们开始面试吧”</p>
<p><strong>小龙</strong>：“嗯嗯，准备好啦”</p>
<p>.......</p>
<p>other questions</p>
<p>.......</p>
<p><strong>面试官</strong>：“我看你简历上有提到你已经是 ‘老Map’ 了对吧。”</p>
<p><strong>小龙</strong>：“是的”</p>
<p><strong>面试官</strong>：“好的，那 <code v-pre>Map</code> 接口下，你常用的实现类有哪些？能简单聊聊吗？”</p>
<p><strong>独白</strong>：“又得扯HashMap ConCurrentHashMap 了....。”</p>
<p><strong>小龙</strong>：“我经常使用<strong>HashMap</strong>、 <strong>LinkedHashMap</strong>、<strong>TreeMap</strong>这些。”</p>
<p><strong>面试官</strong>：“那它们分别在什么场景下使用呢？”</p>
<p><strong>小龙</strong>：“一般情况涉及到键值对的存取，我们都会第一时间考虑使用 <code v-pre>HashMap</code>。不过，在某些特定场景，比如：我们需要根据 key 顺序去存储键值对，TreeMap可能就更合适啦。“</p>
<p><strong>小龙</strong>：”因为 TreeMap 底层是基于<strong>红黑树</strong>实现的，可以提供顺序访问，不过 <code v-pre>TreeMap</code> 键值都不能为 null，而且时间复杂度是 O(logn)。因此，在实际应用场景中，应当综合考虑二者的特性去择优处理。“</p>
<p><strong>小龙</strong>：”而对于 <code v-pre>LinkedHashMap</code>，它的实现是通过为条目(键 值对)维护一个双向链表。平时主要用来处理一些特定的应用场景。”</p>
<p><strong>小龙</strong>：”比如：<code v-pre>去构建一个对空间占用很看重的一个资源池，可以自动将不常用的资源释放掉</code>，例如去模拟 LRU 缓存淘汰策略，就可以使用 LinkedHashMap 去模拟。“</p>
<p><strong>面试官</strong>：“好的，我们接着往下聊哈。那你有了解过 <code v-pre>HashMap</code> 的底层实现原理吗？平时有没有仔细研究过它的源码呢？”</p>
<p><strong>小龙</strong>：“这个有仔细研读过，收获颇多。”</p>
<p><strong>面试官</strong>：“那首先你能给我讲讲你对 <code v-pre>Hash</code> 算法的理解吗？”</p>
<p><strong>小龙</strong>：“简单来说，其实它就是一种将任意长度的输入转为为固定长度的输出的映射规则。”</p>
<p><strong>面试官</strong>：“那这个映射会不会有什么问题呢？”</p>
<p><strong>小龙</strong>：“当然，由于任意长度—&gt;固定长度，随着 hash 次数增加，后面必定出现 <strong>哈希冲突</strong>。”</p>
<p><strong>面试官</strong>：“那这个冲突能避免吗？”</p>
<p><strong>小龙</strong>：“hash冲突不可避免 只能说减少冲突。”</p>
<p><strong>面试官</strong>：“那你有了解过哪些方法可以去解决这个 Hash 冲突呢？”</p>
<p><strong>小龙</strong>：“嗯，比如：拉链法、开放地址、多哈希算法，当然在分布式某些场景中，我们还可以使用一致性Hash算法。”</p>
<p><strong>面试官</strong>：“好的，那接下来你说说 HashMap 的底层数据结构吧！”</p>
<p><strong>小龙</strong>：“JDK1.7 及以前是数组+链表，JDK1.8 是数组+链表+红黑树。”</p>
<p><strong>面试官</strong>：“默认负载因子是多少呢，并且这个负载因子有什么作用？”</p>
<p><strong>小龙</strong>：“负载因子默认0.75，它是在计算扩容阈值时用的。”</p>
<p><strong>面试官</strong>：“创建 HashMap 时，不指定散列表数组长度，初始长度是多少呢？”</p>
<p><strong>独白</strong>：“wc，问这么简单吗？”</p>
<p><strong>小龙</strong>：“默认初始长度16啊。”</p>
<p><strong>面试官</strong>：“那散列表是<code v-pre>new HashMap()</code>时创建的么？”</p>
<p><strong>独白</strong>：“这个到是稍微有点意思~”</p>
<p><strong>小龙</strong>：“不是在<code v-pre>new HashMap()</code>创建的，它使用懒加载，是当第一次调用 put() 方法时 执行putVal() 时才创建散列表。”</p>
<p><strong>面试官</strong>：“那说说 HashMap put() 写数据的具体流程吧，尽可能的详细点！”</p>
<p><strong>独白</strong>：“好吧，本来想以普通人身份相处，换来的却是疏远，不装了，摊牌了。是你叫我详细一点的，我可以直接把源码一条龙给你背下来.....。”</p>
<p><strong>小龙</strong>：“ 1、首先map.put(“公众号” , “小龙coding”)； ”</p>
<p><strong>小龙</strong>：“2、调用 key 对象的 hashcode() 方法计算 key-&quot;公众号&quot; 的hash 。”</p>
<p><strong>小龙</strong>：“3、然后经过扰动函数使其 hash 值更散列（调用 key 对象的 hashcode() 方法计算出来 hash 值，将 hash 值的高 16 位右移并与原 hash 值取异或运算（^），混合高 16 位和低 16 位的值，得到一个更加散列的低 16 位的 hash 值）”</p>
<p><strong>小龙</strong>：“4、接下来进入putVal() 方法，判断散列表是否为空 也就是 put() 方法第一次调用才初始化 HashMap 的存储结构 Node&lt;k,v&gt;[] table 散列表 初始为数组长度16”</p>
<p><strong>小龙</strong>：“5、调用 (n - 1) &amp; hash 【细节解释：（<strong>散列表数组长度-1</strong>） 与 （<strong>hash值得到将要把元素插到哪里的数组下标</strong>）】”</p>
<p><strong>小龙</strong>：“6、判断数组该位置是否为空”</p>
<p><strong>小龙</strong>：“如果为空 新创建一个结点直接插入 tab[i] = newNode(hash, key, value, null)；如果插入位置已经有值了tab[i]!=null，并且桶位中的该元素，与你当前插入的元素的 key 完全一致，表示后续需要进行替换操作，否则就需要往该结点后添加元素。”</p>
<p><strong>独白</strong>：“估计面试官与正在看的你已经蒙了，这是为了全面细致的拉通分析一遍，面试可以简单的说。”</p>
<p><strong>小龙</strong>：“插入前需要判断是否为树结构，若为树结构按照树结构的插入结点方法插入，不是树结构则按照链式结构插入结点方法插入。”</p>
<p><strong>小龙</strong>：“若为链表结构，遍历改链表，判断是否有与你要插入的 key 一致的 node。”</p>
<p><strong>小龙</strong>：“如果没有则将结点插入到该链表末尾（1.8尾插法 1.7头插法），并判断插入后是否达到树化条件（链表长度&gt;=8 进入treeifyBin(tab, hash)；进入该方法还需要判断当前数组长度&gt;=64才能树化,如果&lt;64则扩容）”</p>
<p><strong>小龙</strong>：“到相同元素则需要替换。”</p>
<p><strong>小龙</strong>：“7、完成插入操作了 ++modCount(散列表结构结构被修改的次数–替换 Node 元素的 value 不算)”</p>
<p><strong>小龙</strong>：“8、最好 size 自增，如果自增后的值大于扩容阈值，则触发扩容 resize()；”</p>
<p><strong>独白</strong>：“没有源码，这里可能基础差的看起来很吃力，需要看全代码跟踪解析，有每一步调试+注释，一步一步跟着方法进，注释写的很清楚，需要可以公众号【<strong>小龙coding</strong>】后台回复【<strong>HashMap</strong>】”</p>
<p><strong>面试官</strong>：“叫你说详细一点，用不着这么详细，哈哈。”</p>
<p><strong>面试官</strong>：“我们加快脚步了，Node对象内部的 hash 字段，这个 <code v-pre>hash</code> 值是 key 对象的 hashcode() 返回值么？”</p>
<p><strong>小龙</strong>：“Node 对象里面的 hash 值并不是直接 key.hashcode() 得到， 还要经过 <code v-pre>扰动函数</code>。“</p>
<p><strong>面试官</strong>：”这个 hash 值是怎么得到呢？“</p>
<p><strong>小龙</strong>：”将 hash 值的高 16 位右移并与原 Hash 值取异或运算（^），混合高 16 位和低 16 位的值，得到一个更加散列的低 16 位的 Hash 值。“</p>
<p><strong>面试官</strong>：”JDK8 HashMap 为什么引入红黑树？解决什么问题？“</p>
<p><strong>小龙</strong>：”引入红黑树我认为是这样 当产生 hash 冲突时会形成链表 当数据多了冲突多了 链表越来越长 造成链化 此时查询将特别耗时 本来时间复杂度为O(1) 结构可能达到 O(n)，引入红黑树可以优化查询。“</p>
<p><strong>面试官</strong>：”HashMap 什么情况下会触发扩容呢？“</p>
<p><strong>小龙</strong>：”当它未初始化，第一次 put 时会触发扩容。后面插入值，当大于扩容阈值时也会触发扩容。“</p>
<p><strong>面试官</strong>：“<code v-pre>HashMap</code> 如何确定元素放在哪个位置呢？”</p>
<p><strong>小龙</strong>：“首先经过扰动函数计算得到hash值；然后通过 <strong>(n - 1) &amp; hash</strong> 判断当前元素存放的位置。”</p>
<p><strong>面试官</strong>：”<code v-pre>HashMap</code> 有什么问题吗？在实际应用场景中。“</p>
<p><strong>小龙</strong>：”因为 HashMap 非线程安全，可能出现并发线程安全问题。在JDK1.7中，当并发执行扩容操作会造成环形链，然后调用 get 方法会死循环。JDK1.8中，并发执行put操作时会发生<strong>数据覆盖</strong>的操作。“</p>
<p><strong>面试官</strong>：”那有什么解决办法吗？“</p>
<p><strong>小龙</strong>：”可以使用 <code v-pre>Hashtable</code>，因为它的方法加了<code v-pre> synchronized</code>，可以做到线程安全。“</p>
<p><strong>小龙</strong>：”不过，由于它锁的是整个表，导致效率低下。因此，我们一般使用的是 <code v-pre>ConcurrentHashMap</code>“</p>
<p><strong>面试官</strong>：“好的，那你能简单介绍一下 <code v-pre>ConcurrentHashMap</code> 吗？为何它的性能效率更高呢？”</p>
<p><strong>小龙</strong>：”ConcurrentHashMap JDK1.7 引入了<code v-pre>分段锁</code>，数据结构采用Segment数组+HashEntry数组+链表。<code v-pre>Segment</code> 继承了 ReentrantLock，一个 Segment[i] 就是一把分段锁。比起 Hashtable 锁粒度更细，性能更高。”</p>
<div class="language-Java ext-Java line-numbers-mode"><pre v-pre class="language-Java"><code>一个Segment中包含一个HashEntry数组，每个HashEntry又是一个链表结构

static final class Segment&lt;K,V&gt; extens ReentrantLock implements Serializable{

transient volatile HashEntry&lt;K,V&gt;[] tables;
//.....
}
static final class HashEntry&lt;K,V&gt;
{
  final int hash;
  final K key;
  volatile V value;
  volatile HashEntry&lt;K,V&gt; next;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>面试官</strong>：“何为分段锁？”</p>
<p><img src="https://mmbiz.qpic.cn/mmbiz_png/icDSUdZ2Yicqru1MLiabkGe7QDr9kak5Urjhf73BpkiaroKMsyKcAyOmKwYDmhT9F10axwHPQC0ZJGTfDvUCql93Ow/640?wx_fmt=png&amp;tp=webp&amp;wxfrom=5&amp;wx_lazy=1&amp;wx_co=1" alt="img" loading="lazy"></p>
<p><strong>小龙</strong>：“一个 <code v-pre>Segment</code> 就相当于一把锁，它只锁住这个槽位，其他的并不受影响。<code v-pre>ConcurrentHashMap</code> 将 hash 表分为 16 个桶（默认值），诸如get，put，remove 等常用操作只锁当前需要用到的桶。”</p>
<p><strong>小龙</strong>：“试想，原来 只能一个线程进入，现在却能同时16个写线程进入（写线程才需要锁定，而读线程几乎不受限制，之后会提到），并发性的提升是显而易见的。”</p>
<p><strong>面试官</strong>：“不过我们现在都基本用 JDK1.8 啦，JDK1.8 它也是使用分段锁吗？”</p>
<p><strong>小龙</strong>：“<code v-pre>JDK1.8</code> 后，它做出了很大改变，<strong>数据结构</strong>采用Node数组+链表+红黑树，抛弃Segment分段锁，采用<code v-pre>CAS+synchronized</code>，锁粒度更细，只锁住链表头节点（红黑树根结点），不影响其他哈希桶数组元素的读写，提高并发度。”</p>
<p><strong>面试官</strong>：“好的，挺不错的。最后一个问题，你知道  <code v-pre>ConcurrentHashMap</code> 为什么不支持 null value吗？”</p>
<p><strong>小龙</strong>：“这个很简单啊，vaule 为 null，有两种情况，可能是存的值为 null 或则是没有映射到值 返回null；”</p>
<p><strong>小龙</strong>：”<code v-pre>HashMap</code> 用于单线程下可以通过 ContainsKey() 区分这两种情况；“</p>
<p><strong>小龙</strong>：“但是 <code v-pre>ConcurrentHashMap</code>用于多线程场景，本来是没有映射 ContainsKey() 返回fasle，但是可能在你调用 ContainsKey() 检查时新线程插入null值，返回ture，存在二义性”</p>
<p><strong>面试官</strong>：“牛逼，基础很好！继续加油。”</p>
<p><strong>独白</strong>：“不愧是我，真男人是也！”</p>
<h2 id="知识总结" tabindex="-1"><a class="header-anchor" href="#知识总结" aria-hidden="true">#</a> 知识总结</h2>
<p>本期我们通过面试模拟简单介绍了Map相关面试中重点考察的内容，重点剖析了 <code v-pre>HashMap</code> 与 <code v-pre>ConcurrentHashMap</code> 相关集合。</p>
<p><strong>面试重点</strong></p>
<p>Map 常使用实现类使用场景，特性；Hash算法理解；HashMap原理剖析；分段锁理解；ConcurrentHashMap原理，底层数据机构，JDK1.8 与JDK1.7 区别。</p>
</div></template>
