javascript
function getScoreTier(score) {
  if (score <= 52) return 'low';
  if (score <= 68) return 'midLow';
  if (score <= 84) return 'midHigh';
  return 'high';
}

function resolveDimension(dimKey, score) {
  const tier = getScoreTier(score);
  const base = dimensions[dimKey];
  const variants = base.byScore?.[tier] || {};
  return {
    ...base,
    ...variants,
    microSteps: variants.microSteps || base.microSteps,
    practice: variants.practice || base.practice,
  };
}

const dimensions = {
  selfRegulation: {
    name: "情绪风向感",
    cause: "你可能很早就学会了一件事：比起表达感受，'稳住局面'更安全。于是，感受还没被安放，事情已经被你推到了下一步。",
    psychologist: "弗洛伊德的防御机制视角",
    psychPractice: "练习不是立刻大哭一场，而是先给情绪一个名字：'我现在有点焦虑'，或者'我其实挺委屈的'。命名，就是安放的开始。",
    microSteps: ["在心里给情绪起个名字（如：灰蒙蒙的累）", "离开现场 3 分钟，只呼吸，不思考", "睡前写下今天最想忽略的一个瞬间"],
    practice: ["情绪命名", "暂停再回应", "复盘触发点"],
    byScore: {
      low: {
        strength: "即便是最混乱的时刻，你的身体也在替你记着什么。也许你还没学会听懂它的语言，但那些信号一直在——只是被更大的声音盖住了。",
        risk: "压力来的时候，你往往来不及意识到自己在受伤。情绪不是不存在，而是直接变成了行动——爆发、逃避、或者沉默。等你回过神，事情已经被你的反应推向了另一个方向。",
        edge: "你目前还不是情绪的观察者，更像是被情绪驾驶的乘客。这不是缺陷，而是起点：觉察一旦开始，方向盘就会慢慢交到你手里。",
        shadow: "你可能在情绪过去后，完全不记得自己为什么那么生气、那么委屈，只留下一种模糊的'我失控了'的羞愧感。这让你更想压住下一次，但压住的只是表面。",
        cost: "身边的人会受伤，不是因为你不好，而是因为他们读不到你的情绪变化，直到它变成行动。而你也会在一次次失控后，越来越不信任自己。",
        hardTruth: "说得更直一点：你现在和情绪的关系，有点像报警器装在了隔壁——等它响的时候，火已经烧起来了。不是你的错，但如果你不开始学会听更小的信号，下一次还是一样。",
        empathy: "你不是情绪化的人，你只是还没学会在情绪很小的时候看见它。当别人说'你脾气不好'时，你心里也知道不对劲，但不知道从哪里开始改。",
        advice: "每天睡前用一句话写今天最强烈的感受——不用分析，只写'我很烦'或者'我今天有点开心'就行。坚持一周，你会开始变得比以前更快地捕捉到情绪。",
        psychAnalysis: "从弗洛伊德的视角看，你可能主要使用'付诸行动'这种防御方式——情绪不经过意识思考，直接变成行为。这不是你'意志力不够'，而是你还没学会在冲动和行动之间插一个'暂停键'。",
        growthQuestion: "下一次你做出让自己后悔的反应后，能不能先别急着评判自己，而是回溯一下：那个情绪，最早是从什么时候开始冒头的？"
      },
      midLow: {
        strength: "你有一种后知后觉的敏锐。风暴过去之后，你总能回头说清自己当时怎么了——只是那时候，该说的话已经错过了，该停的动作已经做完了。",
        risk: "压力上来时，你习惯先把它'冻'住。等事情过去，周围人都轻松了，你才发现那些被压下去的情绪，正从身体里慢慢渗出来。",
        edge: "你不是没有情绪，而是比很多人更早察觉到情绪正在转弯，只是你选择了先踩刹车，而不是跳车。这份觉察已经在了，只是还不太稳定。",
        shadow: "压力大时，'我没事'会先替你开口。真正的累，往往后来才从失眠、莫名的烦躁，或对亲近人的不耐烦里漏出来。",
        cost: "别人可能觉得你很好沟通、很强大，可那些没被照顾的压力，最后会绕一圈回来，变成一种深深的'耗竭感'。",
        hardTruth: "说得更直一点：你越是装作没事，别人越容易误以为你真的不需要支持；等你真的撑不住时，关系里的人反而会措手不及，甚至觉得突兀。",
        empathy: "这不是你矫情，也不是你情绪管理差。很多时候，你只是太习惯做那个'托底'的人，久了就忘了，托底的人也需要被接住。",
        advice: "试着把'我没事'换成'我需要缓一下'。不用立刻解决情绪，只要承认它在那里，就是最大的安抚。",
        psychAnalysis: "这很像一种'情感隔离'——你用理性把自己包裹起来，短期看，这让你体面、高效、不失控；但长期看，情绪不会消失，它们会寻找其他出口——比如突然的身体疼痛，或者对亲密关系的莫名疏离。",
        growthQuestion: "下一次你想说'没事'之前，能不能先在心里停一秒，问自己：我是真的没事，还是只是不想现在麻烦别人？"
      },
      midHigh: {
        strength: "你能在情绪拐弯之前，先察觉到风向变了。这不是冷血，而是一种内功——你在反应之前，给自己留了一点余地，虽然有时候那点余地还不够。",
        risk: "你能看见情绪来了，但有时候还是会选择'先扛过去再说'。你比很多人更早觉察，却也更容易说服自己：这点事，不值得停下来处理。",
        edge: "你的情绪雷达已经比大多数人灵敏了。你知道自己什么时候在逞强，什么时候在回避——差别只在于，你愿不愿意在那个当下对自己承认。",
        shadow: "你比一般人更清楚自己怎么了，但在高压场景下，还是会本能地先'把事做完'，再回头处理情绪。往往等到身体发出信号，你才真正停下来。",
        cost: "你看起来情绪稳定、从不失控，但身边最亲近的人偶尔会觉得：你好像隐身了一部分自己。他们怕打扰你，也不敢轻易问你'还好吗'。",
        hardTruth: "说得更直一点：你现在已经不是'不知道自己怎么了'，而是'知道但选择先放一放'。这个放一放，偶尔会变成长期搁置，直到身体替你喊停。",
        empathy: "你其实已经在练习一种很高级的能力——在情绪的浪来之前，先看见它。只是有时候，看见和承认之间，还差一步。那一步，值得你走一走。",
        advice: "下一次你察觉到情绪来了，试着不只是'知道它在了'，而是花 30 秒说一句完整的话：'我现在感到___，因为___。'命名加归因，比单独命名更管用。",
        psychAnalysis: "你正从'情感隔离'向'情绪觉察'过渡——理性不再是你的铠甲，而变成了你的望远镜。但望远镜和铠甲的区别在于：望远镜需要你主动去看，铠甲只需要你穿上。试着更主动地把觉察转化为表达。",
        growthQuestion: "下一次你'知道'自己情绪不对时，能不能不只停在'我知道'，而是找一个安全的人说一句'我今天有点不对劲'？"
      },
      high: {
        strength: "情绪还没翻成浪，你就已经闻到了风向。你的自我观察力很强，能在情绪刚冒头时就认出它，这让你的反应很少失控。别人在你身边会觉得安全——你不是没有情绪，你只是不会让它伤人。",
        risk: "你的觉察太敏锐，反而容易'过度管理'自己。有时候别人只是想陪你一起难过，你却已经默默把情绪归了档、打了标签、存进了抽屉。你处理得太快，反而让情绪来不及被真正感受到。",
        edge: "你的情绪不是被控制的，而是被看管的。就像一个太负责任的守夜人，你时刻盯着自己的内心，却不允许自己在月色下坐一会儿。",
        shadow: "你太擅长安放自己的情绪了，以至于身边的人偶尔会觉得你'理性得不像真人'。他们也知道你有感受，只是总觉得自己看到的不是全部的你。",
        cost: "你的人际关系容易变成别人单向依赖你——因为你永远稳、永远不失控、永远知道怎么办。可谁来稳你呢？当你真的需要被接住时，可能发现身边没人学过怎么接住你。",
        hardTruth: "说得更直一点：你的情绪管理能力已经到了一个拐点——它不再是你的短板，反而可能变成你的牢笼。你太习惯自己做自己的心理医生，以至于忘了：有时候，情绪需要的不只是被看见和处理，而是被陪伴。",
        empathy: "你不需要再学习如何管理情绪了。你真正需要练习的，反而是允许自己偶尔'不管了'——让情绪跑出来，哪怕看起来不体面，哪怕别人会担心。被担心，不是你的失败。",
        advice: "试着每周选一次'不做处理'：难过就直接说难过，不确定就直接说不确定，不急着归因和整理。你的情绪不需要每次都被你打理得整整齐齐才算被安放。",
        psychAnalysis: "弗洛伊德可能会说，你的自我已经非常强大，能精准地调节本我和超我之间的冲突。但当自我太强大时，本我的体验就会变得很'干净'——不是没有，而是被过滤得太快。你需要的不一定是更好的防御，而是一次卸甲的体验。",
        growthQuestion: "下一次情绪来了，你能不能不只是给它命名，而是允许自己带着它做得差一点、慢一点、不完美一点？"
      }
    }
  },boundaryExpression: {
    name: "表达边界感",
    cause: "你把'清晰表达'误听成了'强硬攻击'，也担心拒绝或不同意见会破坏关系的温度。",
    psychologist: "罗杰斯的一致性视角",
    psychPractice: "把真实感受'降级'表达：不必一次说得很重，但要让对方知道这件事对你有影响。比如：'这个时间对我来说有点紧'。",
    microSteps: ["先用一句话说结论，不加解释", "把'不行'改成'我可以做A，但做不了B'", "答应前先留一句'我想一下'"],
    practice: ["先说结论", "延迟答应", "具体请求"],
    byScore: {
      low: {
        strength: "你很擅长让场面舒服。你很少让人尴尬，也很少制造冲突。这种能力不是没有价值——它是你在关系里生存下来的一种智慧。",
        risk: "你几乎不说'不'。不是不想，而是'不'这个字从嘴里出来之前，你的脑子和身体已经替你说了'好吧'。你怕的不只是拒绝本身，更怕拒绝之后空气里的那种冷。",
        edge: "你的柔软不是没有骨头。你只是还没试过，原来骨头也可以是弯的、温暖的，而不一定是刺人的。",
        shadow: "你会把所有不舒服都咽下去，直到某一刻，用一种让对方完全没想到的方式断崖式撤退——消失、冷战、或者忽然提出一个让人觉得莫名其妙的底线。别人会觉得莫名其妙，因为你之前什么都没说。",
        cost: "你身边的人会觉得你'很好说话'，但永远摸不到你的底线。久而久之，你会觉得所有关系都是'我在迁就'，心里越来越空，但说不出口。",
        hardTruth: "说得更直一点：你不说，别人不是'迟早会懂'，而是'永远不会懂'。你等的那个'他如果在乎我就应该知道'的时刻，在绝大多数关系里不会自己到来。",
        empathy: "你不是懦弱。你只是太早学会了一件事：让别人舒服，比让自己舒服更安全。但这个策略已经快过保质期了——它让你安全，却也让你透明。",
        advice: "先练习说一句最轻的'不'：'我需要想想'。这不算拒绝，但已经开始替你打开了一个'不必立刻答应'的空间。从这一步开始。",
        psychAnalysis: "罗杰斯会关注你内在的'不一致'——你嘴上说'可以'，身体在紧绷，心里在喊停。这种长期的自我分裂，不会因为'习惯了'就无害。它正在一点一点磨掉你对关系的热情，因为你已经分不清'我愿意'和'我不敢拒绝'了。",
        growthQuestion: "下一次你想答应的时候，能不能先给自己 5 秒钟？不急着点头，就在心里问自己：'如果这是别人让我帮忙，我会建议他答应吗？'"
      },
      midLow: {
        strength: "你有一种温柔的坚定——当你真的撑不住的时候，你是能说出来的。只是很多时候，你会先忍几轮，忍到自己都觉得'再不说就太委屈了'才开口。",
        risk: "你容易为了不让场面变冷，把真实想法先收起来，像把一封信塞回抽屉。你怕一旦说'不'，空气就会凝固。",
        edge: "你有能力做到'温和而清晰'。你不需要靠翻脸来证明底线，也不需要靠委屈来维持和平。你只是还不习惯把这件事提前做。",
        shadow: "你会先吞下不舒服，直到某一刻忽然变冷、撤退，或用一种让对方震惊的重话说出来。那时候，关系已经有了裂痕。",
        cost: "关系表面是稳的，可别人摸不到你的底线，你也会在一次次忍让里，慢慢耗尽对这段关系的热情。",
        hardTruth: "说得更直一点：你不说，别人就会默认'可以'；你越晚表达，最后说出来时，语气里越容易带着积攒已久的怨气。",
        empathy: "你不是软弱，也不是没有边界。你可能只是太在意关系的温度，所以每次表达自己之前，都先替关系紧张了一下。",
        advice: "试着用'我的结论 + 原因 + 我能做到什么'来表达。少用暗示，也少等别人自己察觉——别人真的猜不到。",
        psychAnalysis: "罗杰斯会关注'真实自我'和'外在表现'是否一致。当你嘴上说'没关系'，心里却觉得委屈时，关系看似平稳，但内在已经开始分裂。长期下来，你会越来越不想表达，也越来越渴望别人能'自动懂你'。",
        growthQuestion: "下一次想答应别人之前，能不能先说一句缓冲语：'我需要想一下，晚点回复你'？"
      },
      midHigh: {
        strength: "你已经能在大多数场景下说出自己的边界——不是每次都完美，但至少，你知道'不'不是一种攻击，而是一种自我尊重。你的温和里，已经长出了骨头。",
        risk: "你在安全的、熟悉的场景里很清晰，但面对权威、陌生人、或者在评估关系中位置时，还是会犹豫。你会想：'我说了，会不会影响我在他心里的位置？'",
        edge: "你的边界感已经不是问题了，问题在于它还不够稳定——像一座有时亮有时灭的灯塔。需要的是更多的'用'，而不是更多的'学'。",
        shadow: "你在大部分时候都能温和地拒绝，但在某些特定关系中（比如对上级、对你重视的人），你的'不'还是会被你自己吞回去。那些特定关系，恰恰是你最需要边界的地方。",
        cost: "别人总体上觉得你靠谱又有原则，但偶尔会觉得你'某些时候忽然变得很难沟通'——因为他们不知道，你的边界在那些时刻被你自己暂时关掉了。",
        hardTruth: "说得更直一点：你的边界感不是能力问题，是场景问题。你明明会说'不'，却偏偏在最重要的关系里说不出口——这恰恰说明，你不缺技巧，缺的是在这些关系里的安全感。",
        empathy: "你已经在路上了。你能拒绝、能表达、能把话说清楚。只是在某些让你心脏跳快一点的场合，你还是会先照顾关系，再照顾自己。这不丢人——但下次可以试着先照顾自己试试看。",
        advice: "留意让你开不了口的那些特定关系和场景。下次遇到那些场景时，在心里说一句：'我值得在这里也守住自己'，然后再开口。",
        psychAnalysis: "你的一致性已经比大多数人好很多。罗杰斯可能会说，你的挑战不再是'学会表达真实'，而是'在压力下仍然表达真实'。你的不一致正在从全面性变成局部性——这是进步，但那些局部恰恰是关键。",
        growthQuestion: "下一次你在某个重要的人面前想说'不'但没说出口时，事后能不能给自己写一句话：'我这次没说，是因为___'？找到那个'因为'，就是下一步。"
      },
      high: {
        strength: "你能把'不'说成一种温柔的礼物。别人被你拒绝后，不会觉得被攻击，反而觉得很清楚。你的边界既保护了自己，也没伤害关系——这是一种很多人学不会的功夫。",
        risk: "你的边界太清晰了，反而可能把自己围成了一个岛。你会很早说'不'、很快收回来、很干脆地划线——但有时候，那道线划得太快，连你自己都没来得及想想，对面的那个人此刻需不需要你先多走一步。",
        edge: "你的强大在于：你可以不用翻脸来拒绝，也可以不用委屈来成全。你的挑战在于：能不能偶尔允许自己在边界上'站一站'，而不是立刻退回安全线内。",
        shadow: "你太擅长保护自己了，以至于别人有时会觉得'靠近你需要经过很多道门'。他们不是不尊重你的边界，只是偶尔会觉得，你的边界像一堵温暖的墙——很友好，但很难走进去。",
        cost: "你的关系可能比较'清爽'，但也比较'浅'。别人尊重你、喜欢你，但不太敢在你面前展示脆弱——因为他们本能地觉得，你大概不需要这些，或者你会有很清晰的回应，但不会一起难过。",
        hardTruth: "说得更直一点：你的边界感是你的铠甲，但也是你的围墙。你太习惯靠'说清楚'来保护关系，却忘了有些关系需要靠'一起含糊一会儿'才能变深。边界可以弯，弯一下不会断。",
        empathy: "你不需要学习怎么表达边界了——你已经是大师范了。你真正需要练习的，是允许自己在某些时刻选择'不表达'：不是因为你不敢，而是因为你愿意先走一步。",
        advice: "试着在安全的亲密关系中，偶尔'故意'不那么清晰——让对方知道你在顾虑什么，然后让两个人一起商量。不一定要'我先定好线，你来遵守'，也可以是'我没想好，我们先聊'。",
        psychAnalysis: "罗杰斯可能会说，你的自我一致性非常高——你想说的和你说出来的几乎一样。但他也会问：你有多久没有体验过'一边想拒绝一边又想靠近'的那种矛盾了？那不是不一致，那是亲密本身的味道。",
        growthQuestion: "下一次你在划线之前，能不能先停三秒，问自己：'这条线，是真的在保护我，还是已经变成了习惯性的安全距离？'"
      }
    }
  },action: {
    name: "行动与推进",
    cause: "你需要一点安全感才敢开始，也容易把'开始'误听成'必须完美'。你害怕一开始就证明自己不行。",
    psychologist: "班杜拉的自我效能视角",
    psychPractice: "不要等信心来了再行动，先用一个小完成感'制造'信心。哪怕只是打开文档写一行字。",
    microSteps: ["把任务切到 15 分钟", "先做一个丑版本", "只找一个人要反馈"],
    practice: ["最小行动", "限定准备时间", "先反馈后优化"],
    byScore: {
      low: {
        strength: "你的想法其实很多，而且很多想法都是有深度、有细节的。这不是所有人都能做到——很多人想到一半就放弃了，而你能在脑子里把整个路径都想清楚。",
        risk: "你的想法永远比行动多三步。你在脑子里已经跑完全程了，但脚还站在起跑线上。脑子里越完美，现实里越不敢动——因为你已经知道'做成'是什么样的，一旦做出来不如脑子里好看，那种落差受不了。",
        edge: "你不是懒，也不是没想法。你只是把'准备'当成了'开始'的替代品。你知道得太多，反而让'不知道'变成了一种恐惧。",
        shadow: "你看起来像是在'考虑''思考''再看看'，但身边的人慢慢会不再等你。不是他们不信任你的判断，而是他们看不到你的判断被实现过。",
        cost: "机会会在反复酝酿里变旧。别人看到的是拖延，你心里背着的，却是越来越重的石头。每一次'再想想'，都让下一次'开始'更难。",
        hardTruth: "说得更直一点：你不是在等最好的时机，你是在等一个不可能的准备——永远不够完美、永远可以再想想。等着等着，连焦虑都懒得来了，你只觉得'算了'。",
        empathy: "你不是不上进。你只是太早学会了在脑子里审判自己——还没动手，就已经替自己演完了失败的全过程。这种'预演式痛苦'比真正的失败还要累。",
        advice: "找一个你完全不关心质量的事——比如随手画一幅画、写一段没人会看的文字——只管做，不管好不好看。先找回'做了'本身的感觉，再去追质量。",
        psychAnalysis: "班杜拉会说，你的自我效能感已经被长期的'未完成'拖低了。不是你能力差，而是你的大脑只记录了'想象中的失败'和'实际上的未行动'。它需要一些真实的、哪怕微小的'完成'来重新校准。",
        growthQuestion: "如果你今天只需要做一件事——哪怕只花 5 分钟，只做到 30 分——你会做什么？那就做那个。"
      },
      midLow: {
        strength: "你能把念头落到地上。哪怕只是先迈一小步，也会让事情产生回声。你拥有让想法'显形'的能力——虽然这一步有时候来得不够快。",
        risk: "一旦不确定、怕麻烦或怕做不好，你容易停在门口。你在脑子里已经演练了无数遍，却迟迟不肯推开那扇门。",
        edge: "你一旦动起来，反馈会很快变成燃料。你比想象中更擅长在行进中调整方向，而不是在原地规划路线。",
        shadow: "你不是没想法，只是'还没准备好'很容易披上'我再想想'的外衣。拖延，是你保护自尊的一种方式。",
        cost: "机会会在反复酝酿里变旧。别人看到的是拖延，你心里背着的，却是越来越重的石头。",
        hardTruth: "说得更直一点：你不是没有能力，而是太常把事情拖到只能靠'焦虑'来启动；久了以后，连小事都会变得沉重无比。",
        empathy: "拖延不代表你不上进。更多时候，是事情在脑子里被放得太大，你还没开始，就已经先替自己承受了一遍失败的痛苦。",
        advice: "把目标压缩成 15 分钟内可完成的一步。先交出一个'粗糙版本'，允许它丑，允许它不完整，但必须真实存在。",
        psychAnalysis: "班杜拉会说，行动力不只是意志力，也和'我相信自己能影响结果'的感觉有关。当你迟迟不开始，底层可能是害怕失败。越不行动，自我效能越低；越小步完成，信心越会回来。",
        growthQuestion: "下一件事，能不能先做一个'丑版本'？允许它不完整，但必须真实存在。"
      },
      midHigh: {
        strength: "你已经在用行动代替焦虑了——虽然不是每次都能做到，但你知道'先动起来'比你之前的状态好太多了。你能先迈一步，然后让那一步带着你走第二步。",
        risk: "你在小事上能行动，但在真正重要、或者结果不确定的事上，还是会徘徊。你会发现自己能轻松完成 80% 的工作，但最后那 20%——往往是关键的 20%——却迟迟交不出来。",
        edge: "你正在从'等准备好了再动'转向'动了再准备'。这种转变已经发生了一半，另一半需要靠那些让你害怕但值得的事来推动。",
        shadow: "别人觉得你执行力不错，但你心里知道，真正让你熬夜、让你反复打开又关掉文档的，总是那几件'重要但不紧急'的事——那些你需要更多勇气才能碰的东西。",
        cost: "你能完成大部分事，但那些你反复搁置的大事，会像影子一样跟着你。它们消耗的不是时间，而是你对'自己能做成大事'的确信。",
        hardTruth: "说得更直一点：你已经在行动了，但你的行动有一个盲区——你只动'有把握的事'，回避'没把握但重要的事'。这让你看起来很忙、很能干，却在最关键的地方还是站着不动。",
        empathy: "你比以前进步了很多——你已经在做了。只是你可能还没发现，'做了很多事'和'做了对的事'之间，还差一次选择。那一次选择，值得你试一次。",
        advice: "接下来，挑战自己一件'有 40% 把握但很重要'的事。不是从简单到困难慢慢升级，而是直接跳一次——你会发现，着陆点比你想象的安全得多。",
        psychAnalysis: "班杜拉会注意到，你的自我效能感在常规任务里已经很高了，但在不确定性面前还有一块'未开发区'。你不是缺能力，是缺一次在高难度事件上'做成了'的体验。一次就够了，它会变成新的基础。",
        growthQuestion: "你手里是不是有一件'我知道该做但一直没做'的事？能不能这周就给它 30 分钟？不求做完，只要'做了'。"
      },
      high: {
        strength: "你是一个用行动思考的人——很多想法不是先想清楚再做，而是做的时候才想清楚。这让你看起来总在推进，也让你总能在行动里找到别人找不到的答案。",
        risk: "你有时候行动得太快，快到没给自己留一点'想一想是不是该做'的时间。你能很快启动，但偶尔也会启动错方向——然后靠加倍的努力来纠正，而那些努力本来可以省下来。",
        edge: "你的行动力不是蛮力，而是一种信任——你相信事情会在做的过程中变清晰。这种信任让你高效，但也让你有时候忘了：不是所有事都适合'边做边想'。",
        shadow: "你可能会用'忙'来回避'想'。当一件事需要深度思考、需要坐下来面对不确定性时，你更容易选择先去做另一件确定性高的事——看起来很充实，但关键问题被暂时绕开了。",
        cost: "别人觉得你永远在跑，很佩服你的执行力。但你可能在'跑了很多路'和'跑了最对的路'之间，还是有一点差距。高效不等于有效。",
        hardTruth: "说得更直一点：你的行动力是你的王牌，但它也可能变成一种逃避——你用行动来代替决策、代替感受、代替思考。越忙越不想，越不想越忙，你以为这是一种充沛，其实是一种惯性。",
        empathy: "你的行动力本身没有问题。你需要做的，不是'慢下来'，而是在某些关键岔路口，给自己三分钟不动的权利——那三分钟不是浪费时间，而是在选方向。",
        advice: "每周留一个'什么都不做'的 30 分钟——不看手机、不处理任务，只坐着想一个问题：'我这周做的事，哪些是我真正想做的，哪些只是因为能做才做的？'这个区分，比你多做两件事更重要。",
        psychAnalysis: "班杜拉可能会提醒你：自我效能感高的人容易陷入'掌控幻觉'——你觉得只要自己动起来就能解决，但有些事需要的是不动的智慧，是'等待'和'选择'的能力，而不是'冲上去'的勇气。",
        growthQuestion: "下一次你准备冲出去的时候，能不能先站 30 秒——只问自己一个问题：'这是该动的时候，还是该选的时候？'"
      }
    }
  },openness: {
    name: "接纳与更新",
    cause: "你会本能保护已有判断，尤其在被评价、被否定，或被亲近的人指出问题时。那一刻，大脑启动了'防御模式'。",
    psychologist: "贝克的认知疗法视角",
    psychPractice: "把第一反应写成一句话，再问自己：这是事实，还是我对事实的解释？",
    microSteps: ["先复述对方观点，确认没理解错", "问一个澄清问题", "把事实和解释分开写"],
    practice: ["先问后判", "寻找反例", "区分偏好与事实"],
    byScore: {
      low: {
        strength: "你的判断力是你最硬的铠甲。你有自己的立场，不容易被带跑——在信息过载的世界里，这种'不易动摇'本身就是一种力量。",
        risk: "当意见和你不同时，你的第一反应不是'他说了什么'，而是'他为什么否定我'。你听到不同意见的那一刻，门已经关上了——不是你不想听，是你的大脑比你的意识更快启动了防御。",
        edge: "你的坚持不是固执，它背后有你自己的经验和逻辑。但问题在于：你的逻辑是在'旧信息'下形成的，如果新信息进不来，再强的逻辑也只能在旧世界里打转。",
        shadow: "你会用'这个人不靠谱'、'这个说法太理想化'、'我们情况不一样'来迅速过滤掉不同意见。有时候你过滤掉的确实不靠谱，但有时候，你只是把刺耳的真话也一起过滤掉了。",
        cost: "别人会越来越谨慎地和你交流——不是不想说，而是说了也徒劳。你会觉得身边越来越缺少真正的讨论，但这可能不是别人不想说，是你太擅长让别人闭嘴。",
        hardTruth: "说得更直一点：你觉得自己在坚持原则，但别人感受到的是'跟你说不通'。一次两次没关系，久了以后，你的信息源会越来越窄，你的判断会越来越自洽——自洽到没有任何力量来校正它。",
        empathy: "你不是固执。你只是太清楚'自己是怎么走到今天的'，以至于很难相信'还有别的路也能走到'。这份经验的厚度是宝藏，但当它变成围墙的时候，连新鲜空气都进不来。",
        advice: "下一次有人提不同意见时，先不反驳，也不表态，只做一件事：用你自己的话把对方的观点重复一遍——如果你能用自己的话准确说出来，那才算真正听见了。",
        psychAnalysis: "贝克会关注你的'自动化想法'：别人一提出不同意见，你脑子里就弹出'他在否定我'、'他不懂'、'他想指挥我'。这不是你理性思考的结果，而是大脑的保护程序。它是可以重写的，但第一步是察觉到它在运行。",
        growthQuestion: "上一次你真心觉得'别人说得对，我之前想错了'是什么时候？如果记不起来，可能说明你的门关得比你以为的更紧。"
      },
      midLow: {
        strength: "你愿意让新的信息进来，也愿意给旧判断开一扇窗。你有能力更新自己，而不是永远困在第一次的判断里——只是这扇窗，有时候开得不够及时。",
        risk: "当意见碰到自尊或经验时，你可能会先把门关上。你表面在听，心里已经开始排兵布阵，等心稳了，才听见里面有用的部分。",
        edge: "你有能力区分'我不喜欢这个说法'和'对方说得完全没道理'。这是一种难得的认知弹性——虽然它不是每次都会自动启动。",
        shadow: "越是被说中要害，越想先守住自己。你可能会用'挑刺'的方式，来抵消被否定的不适感。",
        cost: "你会错过真正有价值的提醒，也容易让别人觉得和你讨论问题很累——因为他们感觉不到被倾听，只感觉到被审视。",
        hardTruth: "说得更直一点：当你急着证明自己没错时，别人给你的提醒会先被你挡掉，关系里的真实反馈也会越来越少。",
        empathy: "你不是听不进意见。很多时候，是被质疑的那一秒太像'我不够好'，所以大脑先启动了保护模式。这很正常。",
        advice: "听到不同意见时，先问一个澄清问题：'你这样判断的依据是什么？'先别急着反驳，也别急着同意。",
        psychAnalysis: "贝克会关注你的'自动化想法'：别人提出不同意见时，你脑子里可能很快跳出'他在否定我''他不懂'。真正卡住你的不一定是意见本身，而是你对意见的第一反应。",
        growthQuestion: "下一次想反驳时，能不能先问自己：我是在保护观点，还是在保护自尊？"
      },
      midHigh: {
        strength: "你能在别人说完之后，先看到'他说得有道理的部分'，再想'但我的情况不完全是这样'。这种两步走的能力，已经让你比大多数人更有可能从对话中获益。",
        risk: "你在大多数场合是开放的，但有一个开关：当你觉得自己被'贴标签'、被'小看'、或者在核心身份上被质疑时，你的防御会比平时快很多、硬很多。那种时刻，你会突然从'我想听听'变成'我不想听了'。",
        edge: "你的开放度不是恒定的——它像一个有弹性的球，大多数时候被撑得很大，但在某些点上会猛地缩回来。这很正常，但你值得知道那些让球缩回来的点是什么。",
        shadow: "你平时很理性，但在某些特殊话题上，你会发现自己变得'怎么都说服不了'——不是因为你固执，而是那个话题碰到了你最脆弱的部分。那部分需要的不是逻辑，是安抚。",
        cost: "别人总体上觉得你好沟通，但偶尔会觉得你'在某几个问题上突然变了一人'——他们不知道触发了什么，只能小心翼翼绕开。那几个问题，恰恰是你最值得深入看看的。",
        hardTruth: "说得更直一点：你的开放是有边界的，边界外面大部分是安全的，但里面有几点是禁区。不是你不够开放，而是你把'学习'和'尊严'绑在了一起——在那几点上，承认对方是对的，会暂时让你觉得'我输了'。",
        empathy: "你已经在开放上走得很远了——你能听、能改、能更新自己。只是那些'突然关上'的时刻，让你觉得'我怎么又退回去了'——其实不是退回去了，是你碰到了需要被单独照顾的东西。",
        advice: "留意让你'突然关上'的那几个话题。不用想着立刻改变它们，只是试着写下来：'当我听到___的时候，我好像变了一个人。'知道触发器在哪里，就已经在改变它了。",
        psychAnalysis: "贝克会注意到，你的'自动化想法'不是全局性的——它在绝大多数领域是合理的、开放的，只在少数与核心自我价值相关的领域会突然'劫持'你的理性。这不是缺陷，而是一份精准的地图：哪里劫持了你，哪里就藏着最值得解开的东西。",
        growthQuestion: "下一次你在某个话题上'突然变了一个人'时，能不能事后给自己写三行：触发了我什么、我害怕失去什么、如果承认对方对我会怎样？"
      },
      high: {
        strength: "你有一种罕见的能力：别人指出你的问题时，你真的能先想'他说得对吗'，而不是'他为什么这样对我'。这不是没自尊，而是你的自尊足够稳，稳到不怕被新信息暂时弄乱一下。",
        risk: "你太习惯'保持开放'了，以至于有时候会过度倾斜——对方只说了一半，你就已经开始找他话里的合理部分，而忘了你也可以说'我不同意'。开放不应该只有一面——你也需要对'不开放'保持开放。",
        edge: "你的开放是真的，但有可能变成一种新的闭合：你对'不开放的人'不太有耐心，对'不够理性'的讨论容易失去兴趣。开放，不只是对信息开放，也需要对别人的'不完美方式'开放。",
        shadow: "你可能会在内心评判那些'不够开放'的人：'他就是听不进去''她太固执了'。但你没注意到，这种评判本身，也是一种门。",
        cost: "你是所有讨论里最理性、最让人舒服的人。但你也可能是最孤独的那一个——因为你太懂得同时看两面，以至于没人觉得需要维护你这一面。",
        hardTruth: "说得更直一点：你的开放已经成为你身份的一部分，以至于'不开放'对你来说不可接受——不只是别人不开放，也包括自己不开放。但人不可能永远开放，偶尔关上门歇一歇，不代表你退步了。",
        empathy: "你的开放不是假的，也不是表演。但有时候，你太想做一个'理性开放的人'，以至于忘了：你也可以在被否定的时候先难过一下，再回来开放——那不叫退步，叫正常。",
        advice: "试着允许自己每周有一次'我今天不想听'的时刻。不必时刻保持那个永远在更新自己的形象——有时候，你的判断已经足够好，不需要每次都被重新审视。",
        psychAnalysis: "贝克可能会提醒你：认知弹性是好事，但过度认知弹性会导致'选择瘫痪'——你太擅长看到每件事的两面，以至于在某些需要快速判断的时刻，你会比一个'固执的人'更难做出决定。开放是工具，不是信仰。",
        growthQuestion: "下一次你强迫自己保持开放的时候，能不能先问自己：'我这次是真的想听，还是只是觉得我应该听？'"
      }
    }
  },responsibilityResilience: {
    name: "责任韧性",
    cause: "你可能很早就习惯了靠'靠谱、懂事、能扛'来换安全感。所以一旦失控，就会本能地把问题拉回自己身上，仿佛这样就能重新获得控制感。",
    psychologist: "阿德勒的补偿视角",
    psychPractice: "复盘时先区分'事情失败'和'自我失败'：事情没做好，只说明某个环节需要调整，不等于你这个人不够好。",
    microSteps: ["先写事实，不写评价", "只认领自己能控制的部分", "把需要的支持说出来"],
    practice: ["拆分责任", "请求支持", "把失败具体化"],
    byScore: {
      low: {
        strength: "你很在意自己有没有'做到位'。这种在意，背后是对关系和责任的认真——它不是负担，而是你身上最真实的动力。",
        risk: "事情一出问题，你就先把自己放到审判席上。不是'这个环节没做好'，而是'我不够好'。你把所有失败都翻译成了对自己的否定，然后一个人扛着那些否定继续往前走。",
        edge: "你不是脆弱，你是把'我应该更好'当成了活着的默认设置。这个设置让你一直在跑，但方向未必是对的方向——你是在'赎罪'，而不只是在'做事'。",
        shadow: "你表面在处理问题，心里却已经开始审自己：是不是我不够好、我不够细、我又让人失望了。这种审判是无声的，别人看不到，但它比问题本身更耗你。",
        cost: "你会把失误听成对整个人的否定，然后把自己压到最低。最伤人的不是失误本身，是你把失误变成了一个关于'我是不是值得被认可'的判决。",
        hardTruth: "说得更直一点：你已经在自我惩罚了，只是惩罚的方式不太明显——不是自暴自弃，而是过度补偿、过度补位、过度自责。你以为自己在负责，其实你在赎罪。但大部分失误，真的不值得一个'我不够好'。",
        empathy: "你不是矫情，也不是承受能力差。你只是太早学会了一个公式：'出了问题 = 我不够好'。这个公式帮你扛过了很多困难，但它也让你扛了很多不该你扛的东西。",
        advice: "复盘时先写三行：事实发生了什么、我能控制什么、我需要谁的支持。不要一上来就审判自己这个人——先审事实，再审行动，最后才是自己。",
        psychAnalysis: "阿德勒会留意你如何处理'不够好'的感觉。你可能用过度自责来换取控制感——'如果怪我自己，至少这件事还有我能改变的'。但这是一种幻觉：有些事不是你的错，你怪自己也不会让它变得更好，只会让自己更累。",
        growthQuestion: "下一次出了问题，能不能先问一句：'这件事里，有哪些部分不是我能控制的？'哪怕只找到一个，也说明这不全是你一个人的事。"
      },
      midLow: {
        strength: "事情真的压下来时，你往往会想办法接住、补上、重新整理节奏。你有可靠的一面，这种'回弹力'很珍贵。",
        risk: "你容易把'我来负责'过度延伸成'都怪我不够好'。事情一出问题，你就先把自己放到审判席上，而不是先看事实。",
        edge: "你能在混乱里把事情重新捡起来。但这种韧性，不应该靠你一个人硬撑来维持，它也可以来自团队的支持。",
        shadow: "你表面在处理问题，心里却已经开始审自己：是不是我不够好、我不够细、我又让人失望了。",
        cost: "别人会习惯你兜底，而你会越来越难说累。最伤人的不是失误本身，是你把失误听成了对整个人的否定。",
        hardTruth: "说得更直一点：你越习惯一个人扛，别人越难意识到你也需要支持；你也会越来越分不清'负责'和'自我消耗'的界限。",
        empathy: "你不是活该这么累。你只是太早学会了'我多扛一点，事情就会好一点'。但人不能长期靠透支来证明自己可靠。",
        advice: "复盘时先写三行：事实发生了什么、我能控制什么、我需要谁的支持。不要一上来就审判自己这个人。",
        psychAnalysis: "阿德勒会留意一个人如何处理'不够好'的感觉。你可能用负责、可靠、能扛来抵消内在的不安。这确实让你变强，但也让你很容易把失败个人化。真正困住你的不是责任感，而是你把责任感变成了自我惩罚。",
        growthQuestion: "下一次出问题时，能不能先问：这是一个具体事件，还是我又把它上升成了对自己的判决？"
      },
      midHigh: {
        strength: "你能扛住事，也能在扛完之后不把一切都揽到自己身上。这种平衡很难做到——你已经在'负责'和'自责'之间，找到了一条比大多数人更清晰的线。",
        risk: "大部分时候你处理得当，但在那种'别人也受了影响'的时候，你还是会多认领一些。不是因为你真的觉得全是自己的错，而是你觉得'如果我多承担一点，别人就能少受一点'。",
        edge: "你的韧性是真实的——不是靠'咬牙硬撑'撑出来的，而是靠一次次复盘和调整练出来的。但你的盲区在于：你对自己的'适度自责'标准，可能还是比别人的'过度自责'标准高。",
        shadow: "你不会把所有问题都背在身上，但你会把'我本来可以做得更好'这句话挂在嘴边。这句话有时候是真的，有时候只是你习惯性的补充——你总觉得'够了'和'还可以更好'之间，你选后者比较安心。",
        cost: "别人觉得你可靠又理性，但偶尔会觉得你'对自己比对别人严格得多'。他们还没说完'这事不怪你'，你已经先给自己打了七折。",
        hardTruth: "说得更直一点：你的责任感已经很强了，但你的'责任边界'还是比你想的更模糊。你以为自己已经分清了'我的锅'和'不是我的锅'，可你心里那杆秤，还是会往自己这边多偏一点。",
        empathy: "你已经在路上了——你能分离、能复盘、能把失败去个人化。只是偶尔，那个'我再多扛一点也没关系'的念头，还是会在你以为自己已经轻松了的时候冒出来。",
        advice: "下一次复盘时，试着一个字都不写'我'——只写事情本身：哪个环节、什么问题、怎么修。你的责任会在事实里自然呈现，不需要你来'自首'。",
        psychAnalysis: "阿德勒会说，你的补偿机制已经进化了——从'全怪我'到'部分怪我'，这是真实的进步。但补偿的惯性还在：你在不确定该怪谁的时候，还是会先怪自己。那不是理性判断，是安全感习惯——'怪自己至少是安全的'。",
        growthQuestion: "下一次你说'我本来可以做得更好'的时候，能不能接着问自己一句：'这是事实，还是我习惯性的保险话？'"
      },
      high: {
        strength: "你不仅能扛事，还能扛完之后不用自责来给自己找安全感。你把'负责'和'自责'分得很开——这是很多人一辈子都在学却学不会的东西。你的韧性不需要靠'我不够好'来驱动，而是靠'这件事我可以怎么修'来驱动。",
        risk: "你的韧性太好了，好到别人会把最重的活交给你、最难的局留给你——不是因为他们不在乎你，是因为你扛的时候看起来太轻松了。你可能已经在不知不觉中，成了所有人心里的'安全网'。",
        edge: "你的强大在于：你不会被失败定义。但你需要注意的另一面是——你太擅长从失败里走出来，以至于有时候走得太快，忘了停下来检查一下自己有没有被别的什么东西划伤。",
        shadow: "你不会自责，这很好。但你也可能因此忽略了自己的另一面：那些没被自责压住、也没被处理过的沮丧和疲惫。它们不会变成'我不够好'，但会变成一种淡淡的倦意——'这些事做了又怎样'。",
        cost: "别人觉得你什么都扛得住，所以什么都不用替你扛。你是所有关系里最稳的那个人，但你也可能是最不被问'你还好吗'的那个人。",
        hardTruth: "说得更直一点：你的韧性已经是一面盾牌了——但盾牌也有两面。外面挡的是困难，里面挡的是自己的脆弱。你不会因为失败而倒下，但你可能会因为'从没有被允许倒下'而慢慢变钝。",
        empathy: "你不需要被夸'坚强'了——你已经够坚强了。你真正需要的，是偶尔被人看见'坚强之外的那个你'：那个也会累、也会想放弃、也想有人说的确不是你一个人的事。",
        advice: "试着告诉身边一个信任的人：'这件事，我也不想一个人扛。'不需要等到撑不住——在你还撑得住的时候说出口，那种感觉可能比你想的要舒服得多。",
        psychAnalysis: "阿德勒可能会说，你已经超越了补偿——你不再靠'我必须更好'来换取安全感。但他也会提醒你：当你不需要补偿的时候，你可能也不太需要别人了——不是不需要，是习惯了不需要。这种'习惯性独立'，会让你错过一种更深的力量：被支持的力量。",
        growthQuestion: "上一次你主动说'我需要帮助'是什么时候？不是到极限的那种，而是'我可以做但不想一个人做'的那种。如果记不起来，也许值得试一次。"
      }
    }
  }
};const questions = [
  { ctx: "work", dim: "selfRegulation", reverse: true, text: "事情一乱，我会先假装冷静，把烦躁、委屈或慌张都压到后面再说。" },
  { ctx: "work", dim: "boundaryExpression", reverse: true, text: "别人临时加需求时，我嘴上说可以，心里其实已经开始不爽。" },
  { ctx: "work", dim: "action", reverse: true, text: "我常把“再查一点、再想清楚一点”当成暂时不用开始的缓冲区。" },
  { ctx: "work", dim: "responsibilityResilience", reverse: true, text: "延期或没做好时，我会先给自己找理由，比较晚才具体复盘哪些地方能改。" },
  { ctx: "life", dim: "selfRegulation", reverse: true, text: "和亲近的人相处时，我容易把外面的压力带回家，却不明说自己怎么了。" },
  { ctx: "life", dim: "boundaryExpression", reverse: true, text: "我不想让关系变尴尬，所以会把一些不舒服先忍过去。" },
  { ctx: "life", dim: "action", text: "生活里想改变一件事时，我能先做一个很小但真实的动作，而不是只在脑子里重启人生。" },
  { ctx: "life", dim: "openness", reverse: true, text: "亲近的人指出我的问题时，我会先觉得被否定，之后才可能想他说得有没有道理。" },
  { ctx: "life", dim: "boundaryExpression", reverse: true, text: "别人拒绝我时，我能理解他有边界，但心里还是会有点失落或多想。" },
  { ctx: "life", dim: "responsibilityResilience", text: "关系出现摩擦时，我能承认自己的部分，但不会把全部问题都揽到自己身上。" },
  { ctx: "work", dim: "action", text: "即使版本很粗糙，我也能先交出一个可以被反馈的东西。" },
  { ctx: "work", dim: "openness", reverse: true, text: "当别人质疑我的判断时，我表面在听，心里已经在组织反驳。" },
  { ctx: "work", dim: "openness", reverse: true, text: "我很快能发现别人说法里的漏洞，但不太习惯主动寻找自己判断里的漏洞。" },
  { ctx: "work", dim: "responsibilityResilience", text: "被批评或指出问题后，我能提取可改的部分，而不是只记住受伤感。" },
  { ctx: "life", dim: "selfRegulation", text: "我能意识到自己什么时候是在逞强、讨好、回避或控制。" },
  { ctx: "life", dim: "selfRegulation", reverse: true, text: "我情绪上来时，会先顾着自己的感受，比较晚才意识到对方也被影响了。" },
  { ctx: "life", dim: "boundaryExpression", text: "我能直接说出不方便、不愿意或不舒服，而不是期待别人自己看出来。" },
  { ctx: "life", dim: "action", reverse: true, text: "计划被打乱后，我很容易觉得算了，干脆整天都不要管了。" },
  { ctx: "life", dim: "openness", text: "我能分辨“我不喜欢这个说法”和“对方说得完全没道理”。" },
  { ctx: "life", dim: "responsibilityResilience", reverse: true, text: "生活里出问题后，我会反复想自己哪里不够好，越想越难重新开始。" }
];

const scaleLabels = [
  "非常不像我",
  "不太像我",
  "有点像我",
  "比较像我",
  "非常像我"
];

let currentIndex = 0;
const answers = Array(questions.length).fill(null);
const hesitations = Array(questions.length).fill(false);
const hesitationAutoAnswers = Array(questions.length).fill(false);
const answerChanges = Array(questions.length).fill(0);

const progressCount = document.querySelector("#progress-count");
const progressLabel = document.querySelector("#progress-label");
const progressBar = document.querySelector("#progress-bar");
const quizPanel = document.querySelector("#quiz-panel");
const resultsPanel = document.querySelector("#results-panel");
const questionNumber = document.querySelector("#question-number");
const contextLabel = document.querySelector("#context-label");
const questionText = document.querySelector("#question-text");
const scaleOptions = document.querySelector("#scale-options");
const hesitationToggle = document.querySelector("#hesitation-toggle");
const prevButton = document.querySelector("#prev-button");
const nextButton = document.querySelector("#next-button");
const resultTitle = document.querySelector("#result-title");
const resultKeywords = document.querySelector("#result-keywords");
const resultSummary = document.querySelector("#result-summary");
const scoreGrid = document.querySelector("#score-grid");
const strengthHeading = document.querySelector("#strength-heading");
const strengthList = document.querySelector("#strength-list");
const riskHeading = document.querySelector("#risk-heading");
const riskList = document.querySelector("#risk-list");
const responsePattern = document.querySelector("#response-pattern");
const deepAnalysis = document.querySelector("#deep-analysis");
const blindspotDetails = document.querySelector("#blindspot-details");
const restartButton = document.querySelector("#restart-button");
const editButton = document.querySelector("#edit-button");

function init() {
  renderQuestion();
  renderProgress();
}

function renderQuestion() {
  const question = questions[currentIndex];
  questionNumber.textContent = `第 ${currentIndex + 1} 题`;
  contextLabel.textContent = "请按第一反应选择";
  questionText.textContent = question.text;
  scaleOptions.innerHTML = scaleLabels
    .map((label, index) => {
      const value = index + 1;
      const selectedClass = answers[currentIndex] === value ? " is-selected" : "";
      const checked = answers[currentIndex] === value ? "true" : "false";
      return `
        <button class="scale-option${selectedClass}" type="button" role="radio" aria-checked="${checked}" data-value="${value}">
          <span>${value}</span>
          <span>${label}</span>
        </button>
      `;
    })
    .join("");
  hesitationToggle.classList.toggle("is-active", hesitations[currentIndex]);
  hesitationToggle.setAttribute("aria-pressed", hesitations[currentIndex] ? "true" : "false");

  prevButton.disabled = currentIndex === 0;
  nextButton.textContent = currentIndex === questions.length - 1 ? "查看结果" : "下一题";
  nextButton.disabled = answers[currentIndex] === null;
}

function renderProgress() {
  const answered = answers.filter(Boolean).length;
  const percent = Math.round((answered / questions.length) * 100);
  progressCount.textContent = `${answered} / ${questions.length}`;
  progressLabel.textContent = percent === 100 ? "已完成" : percent > 0 ? `${percent}%` : "尚未开始";
  progressBar.style.width = `${percent}%`;
}

function calculateScores(includePartial = false) {
  return Object.keys(dimensions).reduce((acc, key) => {
    const values = questions
      .map((question, index) => (question.dim === key ? getScoredAnswer(question, answers[index]) : null))
      .filter((value) => value !== null);
    const expected = questions.filter((question) => question.dim === key).length;
    const score = values.length ? (values.reduce((sum, value) => sum + value, 0) / values.length) * 20 : 0;
    const resolved = resolveDimension(key, score);
    acc[key] = {
      ...resolved,
      key,
      score,
      answered: values.length,
      complete: includePartial ? values.length > 0 : values.length === expected
    };
    return acc;
  }, {});
}

function getScoredAnswer(question, answer) {
  if (answer === null) return null;
  return question.reverse ? 6 - answer : answer;
}

function calculateResponsePattern() {
  const hesitationCount = hesitations.filter(Boolean).length;
  const lightAgreeCount = answers.filter((answer) => answer === 3).length;
  const changedCount = answerChanges.filter((count) => count > 0).length;
  const hesitationRatio = hesitationCount / questions.length;
  const changedRatio = changedCount / questions.length;
  let level = "clear";

  if (hesitationRatio >= 0.55 || changedRatio >= 0.5) {
    level = "veryHigh";
  } else if (hesitationRatio >= 0.3 || changedRatio >= 0.25) {
    level = "high";
  } else if (hesitationRatio >= 0.15 || changedRatio >= 0.15) {
    level = "medium";
  }

  return {
    hesitationCount,
    lightAgreeCount,
    changedCount,
    level
  };
}

function showResults() {
  const scores = Object.values(calculateScores())
    .sort((a, b) => b.score - a.score);
  const averageScore = average(scores.map((item) => item.score));
  const highScores = scores.filter((item) => item.score >= 72);
  const strengths = highScores.length >= 2 ? highScores.slice(0, 2) : scores.slice(0, 2);
  const strengthMode = highScores.length >= 2 ? "strong" : "relative";
  const strengthKeys = new Set(strengths.map((item) => item.key));
  const riskPool = [...scores]
    .sort((a, b) => a.score - b.score)
    .filter((item) => !strengthKeys.has(item.key));
  const lowScores = riskPool.filter((item) => item.score <= 62);
  const risks = lowScores.length >= 2 ? lowScores.slice(0, 2) : riskPool.slice(0, 2);
  const riskMode = lowScores.length >= 2 ? "blindspot" : "watch";
  const balancedCount = scores.filter((item) => item.score >= 64 && item.score <= 82).length;
  const responseInfo = calculateResponsePattern();

  const topStrength = strengths[0];
  const topRisk = risks[0];

  const title = buildResultTitle(topStrength, topRisk, {
    averageScore,
    responseInfo,
    riskMode
  });

  resultTitle.textContent = title;
  resultKeywords.innerHTML = getResultKeywords(title).map((keyword) => `<span>${keyword}</span>`).join("");
  strengthHeading.textContent = strengthMode === "strong" ? "主要优势" : "相对优势";
  riskHeading.textContent = "性格盲区";
  resultSummary.innerHTML = buildResultSummary(strengths, risks, {
    strengthMode,
    riskMode,
    balancedCount,
    averageScore,
    responseInfo
  });
  scoreGrid.innerHTML = scores
    .map((item) => {
      return `
        <article class="score-row">
          <div class="score-label"><span>${item.name}</span><span>${Math.round(item.score)}</span></div>
          <div class="score-bar" aria-hidden="true"><span style="width: ${item.score}%"></span></div>
        </article>
      `;
    })
    .join("");

  strengthList.innerHTML = strengths.map((item) => renderMiniStrength(item, strengthMode)).join("");
  riskList.innerHTML = risks.map((item) => renderMiniRisk(item, riskMode)).join("");
  responsePattern.innerHTML = renderResponsePattern(responseInfo);
  deepAnalysis.innerHTML = renderDeepAnalysis({
    strengths,
    risks,
    riskMode,
    responseInfo,
    averageScore
  });
  blindspotDetails.innerHTML = risks.map((item) => renderBlindspot(item, riskMode)).join("");

  quizPanel.classList.add("is-hidden");
  resultsPanel.classList.remove("is-hidden");
  resultsPanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

function buildResultTitle(topStrength, topRisk, meta) {
  if (meta.averageScore >= 84 && topRisk.score >= 64) {
    return "向阳蓄力的木棉花";
  }
  if (meta.responseInfo.level === "veryHigh") {
    return "雾中辨风的银莲花";
  }
  if (topStrength.key === "responsibilityResilience" && topStrength.score >= 72) {
    return "稳稳撑开的榕树";
  }
  if (topStrength.key === "action" && topStrength.score >= 72) {
    return "破土向上的春笋";
  }
  if (topStrength.key === "selfRegulation" && meta.riskMode === "watch") {
    return "听风起伏的芦苇";
  }
  if (topStrength.key === "selfRegulation") {
    return "藏着微光的含羞草";
  }
  if (topStrength.key === "boundaryExpression") {
    return "温柔有界的山茶花";
  }
  if (topStrength.key === "openness") {
    return "雨后舒展的银杏";
  }
  return "雨后舒展的银杏";
}

function buildResultSummary(strengths, risks, meta) {
  const strengthNames = strengths.map((item) => item.name).join("、");
  const riskNames = risks.map((item) => item.name).join("、");
  const topStrength = strengths[0];
  const topRisk = risks[0];
  const secondRisk = risks[1] || risks[0];

  const responseNote =
    meta.responseInfo.level === "veryHigh"
      ? "这一次，你在不少选择前停留得更久，也改过几次答案。这未必是摇摆，更像是在替不同的关系、处境和压力留出余地。你知道，同一件事落在不同的时刻，心里的答案也会不同。"
      : meta.responseInfo.level === "high"
        ? "有些题目，你没有急着把答案钉死。这份迟疑不必急着纠正，它也许说明你正在认真辨认：什么才更接近真实的自己。"
        : meta.responseInfo.level === "medium"
          ? "有些答案不必立刻定论。可以慢慢留意：在什么人面前、什么压力之下，你会比平时更靠近自己，或更远离自己。"
          : "";

  const strengthLead =
    meta.strengthMode === "strong"
      ? `你身上最常亮起来的，是${strengthNames}。它们不是写在纸上的优点，而是你已经带着走过关系、压力和选择的方式。${topStrength.edge}`
      : `${strengthNames}是你较能依靠的部分。它们未必总是显眼，却像夜路边一盏不太刺目的灯：在局面变乱时，仍帮你留住方向。`;

  const riskLead =
    meta.riskMode === "blindspot"
      ? `真正容易让你绕远路的，是${riskNames}。它们不代表你不够好，更像一些旧的自我保护：曾经替你挡过风，只是有时也会把你困在原地。${topRisk.shadow}`
      : `${riskNames}值得被轻轻看见。它们平时未必有声音，但在亲密关系、压力来临或被评价的时候，可能会悄悄接过方向盘。${topRisk.shadow}`;

  const balanceLead =
    meta.balancedCount >= 4
      ? "你不是一个可以被单一标签概括的人。很多看似不起眼的模式，像水面下反复出现的暗礁；能看见它们的位置，就已经少了一次撞上去的可能。"
      : "";

  const paragraphs = [
    strengthLead,
    `${riskLead}${topRisk.empathy}`,
    `${topRisk.hardTruth}那些“明明知道，却还是会这样”的时刻，并不是无解，它们只是比语言更早泄露了心里的惯性。${secondRisk.cost}`,
    `${balanceLead}${responseNote}不必一下子改变很多，可以先试着做一件很小的事：${topRisk.microSteps[0]}。`
  ].filter(Boolean);

  return paragraphs.map((text) => `<p>${text}</p>`).join("");
}

function getResultKeywords(title) {
  const keywords = {
    "向阳蓄力的木棉花": ["热烈生长", "稳定发光", "盛放亦知停歇"],
    "雾中辨风的银莲花": ["细察变化", "因境调整", "谨慎敏感"],
    "稳稳撑开的榕树": ["可靠托底", "默默承担", "根系深长"],
    "破土向上的春笋": ["先迈一步", "边走边调", "让事情发生"],
    "听风起伏的芦苇": ["感知细腻", "随境摇曳", "寻找自己的节奏"],
    "藏着微光的含羞草": ["觉察敏锐", "谨慎靠近", "慢慢舒展"],
    "温柔有界的山茶花": ["温和坚定", "自守分寸", "相处舒服"],
    "雨后舒展的银杏": ["缓慢复原", "自我更新", "向光生长"]
  };

  return keywords[title] || [];
}

function renderMiniStrength(item, mode) {
  const text =
    mode === "strong"
      ? `这是很珍贵的一部分。${item.strength}${item.edge}别把它当成理所当然，它其实是你一路练出来的能力。`
      : `它不一定很张扬，却很能撑事。${item.strength}${item.edge}有些优势不是闪光，是长久供电。`;
  return `<p class="mini-item"><strong>${item.name}</strong>${text}</p>`;
}

function renderMiniRisk(item, mode) {
  const text = mode === "blindspot"
      ? `容易中招的地方：${item.risk}${item.hardTruth}${item.empathy}先不用责备自己，抓一个最常出现的场景练就好。`
      : `值得留意的地方：${item.risk}${item.hardTruth}${item.empathy}它未必天天出现，但一出现，就会牵动你的表达、行动或关系。`;
  return `<p class="mini-item"><strong>${item.name}</strong>${text}</p>`;
}

function average(values) {
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function renderResponsePattern(info) {
  const headline = info.level === "veryHigh"
    ? "你这次的答案里有非常明显的犹豫信号"
    : info.level === "high"
    ? "你这次的答案里有明显犹豫信号"
    : info.level === "medium"
      ? "你这次有一些需要结合具体事件理解的题"
      : "你这次的选择相对明确";
  const body = info.level === "veryHigh"
    ? "这不是简单的没主见。你能看到例外、对象和情境差异，所以答案不会轻易落笔。这些迟疑像一张地图：谁、什么压力、哪类评价，会让你反复校准自己。"
    : info.level === "high"
    ? "你不是固定的一种样子。对象、关系和压力一变，你的反应也会变。能说出“我不确定”，本身就是一种清醒。"
    : info.level === "medium"
      ? "有些题不是绝对像或不像。这个犹豫可以保留，之后放回具体事件里看，会更准。"
      : "你对多数题目的判断比较清楚。即使看到不舒服的地方，也先把它当成信息，不急着否定自己。";

  return `
    <h3>答题状态</h3>
    <p><strong>${headline}</strong></p>
    <p>${body}</p>
    <div class="response-stats">
      <span>标记犹豫 ${info.hesitationCount}</span>
      <span>轻度肯定 ${info.lightAgreeCount}</span>
      <span>改选题目 ${info.changedCount}</span>
    </div>
  `;
}

function renderDeepAnalysis(meta) {
  const topStrength = meta.strengths[0];
  const topRisk = meta.risks[0];
  const secondRisk = meta.risks[1] || meta.risks[0];
  const tensionLine = `你真正卡住的地方，可能不是${topStrength.name}不够，而是${topRisk.name}在关键时刻先伸了手。不是你没有能力，是旧反应太熟，常常比理性先到一步。`;
  const practiceLine = topRisk.microSteps.map((step, index) => `${index + 1}. ${step}`).join("；");
  const pressureLine = meta.responseInfo.level === "veryHigh"
    ? "大量犹豫说明你并不是不了解自己，只是你很受具体对象和情境影响。你需要的不是固定标签，而是一张触发地图。"
    : meta.responseInfo.level === "high"
    ? "这些犹豫说明你对自己并非毫无觉察。只是有些状态很吃情境：谁在场、关系多近、压力多重，都会改变你。"
    : meta.responseInfo.level === "medium"
      ? "你有一部分答案并不绝对。不同对象面前，你可能会有不同版本；那些让你迟疑的题，值得以后多看一眼。"
      : "你的选择比较明确，说明你对当前的自己有稳定判断。也提醒一句：太熟悉的模式，也可能稳定地制造同一种问题。";

  return `
    <h3>深层模式</h3>
    <div class="deep-grid">
      <p><strong>核心矛盾：</strong>${tensionLine}</p>
      <p><strong>别人未必看见的优势：</strong>${topStrength.edge}</p>
      <p><strong>最容易露馅的瞬间：</strong>${topRisk.shadow}</p>
      <p><strong>真正消耗你的地方：</strong>${secondRisk.cost}</p>
      <p><strong>心理学视角：</strong>${topRisk.psychologist}：${topRisk.psychAnalysis}</p>
      <p><strong>先被理解：</strong>${topRisk.empathy}</p>
      <p><strong>可以先这样做：</strong>${practiceLine}</p>
      <p><strong>关键追问：</strong>${topRisk.growthQuestion}</p>
      <p><strong>答题信号：</strong>${pressureLine}</p>
    </div>
  `;
}


function renderBlindspot(item, mode) {
  const riskLabel = mode === "blindspot" ? "短板表现" : "相对短板";
  const riskText = item.risk;
  const microSteps = item.microSteps.map((step) => `<li>${step}</li>`).join("");
  return `
    <article class="detail-card">
      <h3>${item.name}</h3>
      <p><strong>${riskLabel}：</strong>${riskText}</p>
      <p><strong>说得更直一点：</strong>${item.hardTruth.replace(/^说得更直一点：/, "")}</p>
      <p><strong>先别急着怪自己：</strong>${item.empathy}</p>
      <p><strong>压力下的样子：</strong>${item.shadow}</p>
      <p><strong>现实代价：</strong>${item.cost}</p>
      <p><strong>心理学视角：</strong>${item.psychologist}：${item.psychAnalysis}</p>
      <p><strong>形成原因：</strong>${item.cause}</p>
      <p><strong>改进方法：</strong>${item.advice}</p>
      <p><strong>心理练习：</strong>${item.psychPractice}</p>
      <div class="practice-box">
        <strong>可执行的 3 个小动作：</strong>
        <ol>${microSteps}</ol>
      </div>
      <p><strong>关键追问：</strong>${item.growthQuestion}</p>
      <p><strong>本周练习：</strong>选择一个真实场景，只练习一个动作；完成后记录“我做了什么、效果如何、下次微调什么”。重点不是一次改变很多，而是让这个短板进入可练习状态。</p>
      <div class="tag-line">${item.practice.map((tag) => `<span>${tag}</span>`).join("")}</div>
    </article>
  `;
}scaleOptions.addEventListener("click", (event) => {
  const option = event.target.closest(".scale-option");
  if (!option) return;
  const previousAnswer = answers[currentIndex];
  const nextAnswer = Number(option.dataset.value);
  if (previousAnswer !== null && previousAnswer !== nextAnswer && !hesitationAutoAnswers[currentIndex]) {
    answerChanges[currentIndex] += 1;
  }
  answers[currentIndex] = nextAnswer;
  hesitationAutoAnswers[currentIndex] = false;
  renderProgress();
  if (currentIndex < questions.length - 1) {
    setTimeout(() => {
      currentIndex += 1;
      renderQuestion();
      renderProgress();
    }, 350);
  } else {
    renderQuestion();
  }
});

hesitationToggle.addEventListener("click", () => {
  const nextHesitationState = !hesitations[currentIndex];
  hesitations[currentIndex] = nextHesitationState;

  if (nextHesitationState && answers[currentIndex] === null) {
    answers[currentIndex] = 3;
    hesitationAutoAnswers[currentIndex] = true;
  }

  if (!nextHesitationState && hesitationAutoAnswers[currentIndex]) {
    answers[currentIndex] = null;
    hesitationAutoAnswers[currentIndex] = false;
  }

  renderQuestion();
  renderProgress();
});

prevButton.addEventListener("click", () => {
  currentIndex = Math.max(0, currentIndex - 1);
  renderQuestion();
});

nextButton.addEventListener("click", () => {
  if (answers[currentIndex] === null) return;
  if (currentIndex === questions.length - 1) {
    showResults();
    return;
  }
  currentIndex += 1;
  renderQuestion();
  renderProgress();
});

editButton.addEventListener("click", () => {
  resultsPanel.classList.add("is-hidden");
  quizPanel.classList.remove("is-hidden");
  quizPanel.scrollIntoView({ behavior: "smooth", block: "start" });
});

restartButton.addEventListener("click", () => {
  answers.fill(null);
  hesitations.fill(false);
  hesitationAutoAnswers.fill(false);
  answerChanges.fill(0);
  currentIndex = 0;
  resultsPanel.classList.add("is-hidden");
  quizPanel.classList.remove("is-hidden");
  renderQuestion();
  renderProgress();
  quizPanel.scrollIntoView({ behavior: "smooth", block: "start" });
});

init();