const dimensions = {
  selfRegulation: {
    name: "觉察与调节",
    strength: "你能听见自己心里的风向变化，也愿意在反应之前，给自己留一点余地。",
    risk: "压力一上来，你容易先压住、硬扛或绕开；等事情过去，才发现情绪其实一直在后面推你。",
    cause: "你太习惯先稳住局面，或者太快进入解决模式。感受还没被安放，事情已经被你往前推了。",
    advice: "先做 30 秒情绪命名：我现在是焦虑、委屈、生气，还是害怕失控；命名后再决定要不要回应。",
    edge: "你不是没有情绪，而是比很多人更早发现情绪在改变方向。",
    shadow: "压力大时，“我没事”会先替你开口；真正的累，往往后来才从身体、语气或关系里漏出来。",
    cost: "别人可能以为你很好沟通，可那些没被照顾的压力，最后会绕一圈回来敲门。",
    hardTruth: "说得更直一点：你越是装作没事，别人越容易错估你的边界；等你真的撑不住时，关系里的人反而会措手不及。",
    growthQuestion: "下一次你说“没事”之前，能不能先问自己：我是真的没事，还是暂时不想处理？",
    psychologist: "弗洛伊德的防御机制视角",
    psychAnalysis: "这类模式很像把情绪先压下去，或者用“我很理性、我能处理”来绕过真实感受。它短期能让你维持体面和功能，但长期会让情绪从别的地方漏出来，比如突然烦躁、冷淡、失眠，或对亲近的人没耐心。",
    psychPractice: "练习不是立刻表达全部情绪，而是先承认情绪存在：我现在有反应，但我可以晚一点再处理。",
    empathy: "这不是你矫情，也不是你情绪管理很差。很多时候你只是太习惯先稳住场面，久了就忘了自己也需要被安顿。",
    microSteps: ["先在心里给情绪取名", "离开现场 3 分钟再回复", "睡前写下今天最明显的一个触发点"],
    practice: ["情绪命名", "暂停再回应", "复盘触发点"]
  },
  boundaryExpression: {
    name: "边界与表达",
    strength: "你有机会把话说清楚，也把关系留住；温和和边界，在你身上不是非此即彼。",
    risk: "你容易为了不让场面变冷，把真实想法先收起来，像把一封信塞回抽屉。",
    cause: "你把清晰表达和强硬划上等号，也担心拒绝或不同意见会伤害关系。",
    advice: "用“我的结论 + 原因 + 我能做到/做不到什么”来表达，少用暗示，也少等别人自己察觉。",
    edge: "你有机会把温和与清晰同时做到，不需要靠翻脸来证明边界。",
    shadow: "你会先吞下不舒服，直到某一刻忽然变冷、撤退，或用很重的方式说出来。",
    cost: "关系表面是稳的，可别人摸不到你的底线，你也会在一次次忍让里慢慢没电。",
    hardTruth: "说得更直一点：你不说，别人就会默认可以；你越晚表达，最后说出来时越容易带着怨气。",
    growthQuestion: "下一次想答应别人之前，能不能先说：我需要想一下，再回复你。",
    psychologist: "罗杰斯的一致性视角",
    psychAnalysis: "罗杰斯会关注真实自我和外在表现是否一致。你嘴上说“没关系”，心里却觉得委屈或抗拒时，关系看似平稳，但内在已经开始分裂。长期下来，你会越来越不想表达，也越来越希望别人自动懂你。",
    psychPractice: "把真实感受降级表达：不必一次说得很重，但要让对方知道这件事对你有影响。",
    empathy: "你不是软弱，也不是没有边界。你可能只是太在意关系的温度，所以每次表达自己之前，都先替关系紧张了一下。",
    microSteps: ["先用一句话说结论", "把拒绝改成可承受范围", "答应前先留一句“我想一下”"],
    practice: ["先说结论", "延迟答应", "具体请求"]
  },
  action: {
    name: "行动与推进",
    strength: "你能把念头落到地上，哪怕只是先迈一小步，也会让事情有回声。",
    risk: "一旦不确定、怕麻烦或怕做不好，你容易停在门口，想了很久，却迟迟不推门。",
    cause: "你需要一点安全感才敢开始，也容易把“开始”误听成“必须做好”。",
    advice: "把目标压缩成 15 分钟内可完成的一步，先交出一个粗糙版本，再用反馈修正。",
    edge: "你一旦动起来，反馈会很快变成燃料，事情也更容易被你推开。",
    shadow: "你不是没想法，只是“还没准备好”很容易披上“我再想想”的外衣。",
    cost: "机会会在反复酝酿里变旧。别人看到拖延，你心里背着的却是越来越重的石头。",
    hardTruth: "说得更直一点：你不是没有能力，而是太常把事情拖到只能靠焦虑启动；久了以后，连小事都会变重。",
    growthQuestion: "下一件事能不能先做一个丑版本，允许它不完整，但必须真实存在？",
    psychologist: "班杜拉的自我效能视角",
    psychAnalysis: "班杜拉会说，行动力不只是意志力，也和“我相信自己能影响结果”的感觉有关。当你迟迟不开始，表面是拖延，底层可能是害怕一开始就证明自己不行。越不行动，自我效能越低；越小步完成，信心越会回来。",
    psychPractice: "不要等信心来了再行动，先用一个小完成感制造信心。",
    empathy: "拖延不代表你不上进。更多时候，是事情在脑子里被放得太大，你还没开始就已经先替自己承受了一遍失败。",
    microSteps: ["把任务切到 15 分钟", "先做一个丑版本", "只找一个人要反馈"],
    practice: ["最小行动", "限定准备时间", "先反馈后优化"]
  },
  openness: {
    name: "开放与学习",
    strength: "你愿意让新的信息进来，也愿意给旧判断开一扇窗。",
    risk: "当意见碰到自尊或经验时，你可能会先把门关上，等心稳了，才听见里面有用的部分。",
    cause: "你会本能保护已有判断，尤其在被评价、被否定，或被亲近的人指出问题时。",
    advice: "听到不同意见时先问一个澄清问题，再决定自己同不同意；不要一边听一边急着反驳。",
    edge: "你有能力更新自己，而不是永远困在第一次判断里。",
    shadow: "你表面在听，心里已经开始排兵布阵；越是被说中，越想先守住自己。",
    cost: "你会错过真正有价值的提醒，也容易让别人觉得和你讨论问题很累。",
    hardTruth: "说得更直一点：当你急着证明自己没错时，别人给你的提醒会先被你挡掉，关系里的真实反馈也会越来越少。",
    growthQuestion: "下一次想反驳时，能不能先问：你这样判断的依据是什么？",
    psychologist: "贝克的认知疗法视角",
    psychAnalysis: "贝克会关注你的自动化想法：别人提出不同意见时，你脑子里可能很快跳出“他在否定我”“他不懂”“我必须证明我没错”。真正卡住你的不一定是意见本身，而是你对意见的第一反应。",
    psychPractice: "把第一反应写成一句话，再问自己：这是事实，还是我对事实的解释？",
    empathy: "你不是听不进意见。很多时候，是被质疑的那一秒太像“我不够好”，所以大脑先启动了保护模式。",
    microSteps: ["先复述对方观点", "问一个澄清问题", "把事实和解释分开写"],
    practice: ["先问后判", "寻找反例", "区分偏好与事实"]
  },
  responsibilityResilience: {
    name: "可靠不内耗",
    strength: "事情真的压下来时，你往往会想办法接住、补上、重新整理节奏。你有可靠的一面，也需要学会把自己从过度负责里松开。",
    risk: "你容易把“我来负责”过度延伸成“都怪我不够好”，事情一出问题，就先把自己放到审判席上。",
    cause: "你可能很早就习惯了靠靠谱、懂事、能扛来换安全感。所以一旦失控，就会本能地把问题拉回自己身上。",
    advice: "复盘时先写三行：事实发生了什么、我能控制什么、我需要谁的支持；不要一上来就审判自己这个人。",
    edge: "你能在混乱里把事情重新捡起来，这种回弹力很珍贵，但它不应该靠你一个人硬撑来维持。",
    shadow: "你表面在处理问题，心里却已经开始审自己：是不是我不够好、我不够细、我又让人失望了。",
    cost: "别人会习惯你兜底，而你会越来越难说累。最伤人的不是失误本身，是你把失误听成了对整个人的否定。",
    hardTruth: "说得更直一点：你越习惯一个人扛，别人越难意识到你也需要支持；你也会越来越分不清负责和自我消耗。",
    growthQuestion: "下一次出问题时，能不能先问：这是一个具体事件，还是我又把它上升成了对自己的判决？",
    psychologist: "阿德勒的补偿视角",
    psychAnalysis: "阿德勒会留意一个人如何处理“不够好”的感觉。你可能用负责、可靠、能扛来抵消内在的不安，这确实让你变强，但也让你很容易把失败个人化。真正困住你的不是责任感，而是你把责任感变成了自我惩罚。",
    psychPractice: "复盘时先区分事情失败和自我失败：事情没做好，只说明某个环节需要调整，不等于你这个人不够好。",
    empathy: "你不是活该这么累。你只是太早学会了“我多扛一点，事情就会好一点”，但人不能长期靠透支来证明自己可靠。",
    microSteps: ["先写事实，不写评价", "只认领自己能控制的部分", "把需要的支持说出来"],
    practice: ["拆分责任", "请求支持", "把失败具体化"]
  }
};

const questions = [
  { ctx: "work", dim: "selfRegulation", reverse: true, text: "事情一乱，我会先假装冷静，把烦躁、委屈或慌张都压到后面再说。" },
  { ctx: "work", dim: "boundaryExpression", reverse: true, text: "别人临时加需求时，我嘴上说可以，心里其实已经开始不爽。" },
  { ctx: "work", dim: "action", reverse: true, text: "我常把“再查一点、再想清楚一点”当成暂时不用开始的缓冲区。" },
  { ctx: "work", dim: "responsibilityResilience", reverse: true, consistency: true, text: "延期或没做好时，我会先给自己找理由，比较晚才具体复盘哪些地方能改。" },
  { ctx: "life", dim: "selfRegulation", reverse: true, text: "和亲近的人相处时，我容易把外面的压力带回家，却不明说自己怎么了。" },
  { ctx: "life", dim: "boundaryExpression", reverse: true, text: "我不想让关系变尴尬，所以会把一些不舒服先忍过去。" },
  { ctx: "life", dim: "action", text: "生活里想改变一件事时，我能先做一个很小但真实的动作，而不是只在脑子里重启人生。" },
  { ctx: "life", dim: "openness", reverse: true, text: "亲近的人指出我的问题时，我会先觉得被否定，之后才可能想他说得有没有道理。" },
  { ctx: "life", dim: "boundaryExpression", reverse: true, consistency: true, text: "别人拒绝我时，我能理解他有边界，但心里还是会有点失落或多想。" },
  { ctx: "life", dim: "responsibilityResilience", text: "关系出现摩擦时，我能承认自己的部分，但不会把全部问题都揽到自己身上。" },
  { ctx: "work", dim: "action", text: "即使版本很粗糙，我也能先交出一个可以被反馈的东西。" },
  { ctx: "work", dim: "openness", reverse: true, text: "当别人质疑我的判断时，我表面在听，心里已经在组织反驳。" },
  { ctx: "work", dim: "openness", reverse: true, consistency: true, text: "我很快能发现别人说法里的漏洞，但不太习惯主动寻找自己判断里的漏洞。" },
  { ctx: "work", dim: "responsibilityResilience", text: "被批评或指出问题后，我能提取可改的部分，而不是只记住受伤感。" },
  { ctx: "life", dim: "selfRegulation", text: "我能意识到自己什么时候是在逞强、讨好、回避或控制。" },
  { ctx: "life", dim: "selfRegulation", reverse: true, consistency: true, text: "我情绪上来时，会先顾着自己的感受，比较晚才意识到对方也被影响了。" },
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
const shareTitle = document.querySelector("#share-title");
const shareCopy = document.querySelector("#share-copy");
const hideWeaknessToggle = document.querySelector("#hide-weakness-toggle");
const copyShareButton = document.querySelector("#copy-share-button");
const scoreGrid = document.querySelector("#score-grid");
const strengthHeading = document.querySelector("#strength-heading");
const strengthList = document.querySelector("#strength-list");
const riskHeading = document.querySelector("#risk-heading");
const riskList = document.querySelector("#risk-list");
const responsePattern = document.querySelector("#response-pattern");
const deepAnalysis = document.querySelector("#deep-analysis");
const consistencyBlindspot = document.querySelector("#consistency-blindspot");
const blindspotDetails = document.querySelector("#blindspot-details");
const restartButton = document.querySelector("#restart-button");
const editButton = document.querySelector("#edit-button");
let currentSharePayload = null;

function init() {
  bindTabs();
  if (loadSharedResult()) return;
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
    acc[key] = {
      ...dimensions[key],
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

function calculateConsistencyBlindspot() {
  const values = questions
    .map((question, index) => (question.consistency ? answers[index] : null))
    .filter((value) => value !== null);
  const score = values.length ? (average(values) / 5) * 100 : 0;
  const level = score >= 70 ? "high" : score >= 52 ? "medium" : "low";

  return {
    level,
    score,
    count: values.length
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
  const consistencyInfo = calculateConsistencyBlindspot();

  const title = buildResultTitle(strengths[0], risks[0], {
    averageScore,
    responseInfo,
    riskMode
  });
  currentSharePayload = {
    title,
    keywords: getResultKeywords(title),
    strengths,
    risks,
    riskMode,
    responseInfo
  };

  resultTitle.textContent = title;
  resultKeywords.innerHTML = getResultKeywords(title).map((keyword) => `<span>${keyword}</span>`).join("");
  strengthHeading.textContent = strengthMode === "strong" ? "主要优势" : "相对优势";
  riskHeading.textContent = riskMode === "blindspot" ? "明显性格盲区" : "性格盲区";
  resultSummary.innerHTML = buildResultSummary(strengths, risks, {
    strengthMode,
    riskMode,
    balancedCount,
    averageScore,
    responseInfo
  });
  shareTitle.textContent = `我是「${title}」`;
  copyShareButton.textContent = "复制结果链接";
  renderShareCard();

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
  consistencyBlindspot.classList.toggle("is-hidden", consistencyInfo.level !== "high");
  consistencyBlindspot.innerHTML = consistencyInfo.level === "high" ? renderConsistencyBlindspot(consistencyInfo) : "";
  blindspotDetails.innerHTML = risks.map((item) => renderBlindspot(item, riskMode)).join("");

  quizPanel.classList.add("is-hidden");
  resultsPanel.classList.remove("is-hidden");
  resultsPanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

function buildResultTitle(topStrength, topRisk, meta) {
  if (meta.averageScore >= 84 && topRisk.score >= 64) {
    return "太阳充电的木棉花";
  }
  if (meta.responseInfo.level === "veryHigh") {
    return "雾里校准的银莲花";
  }
  if (topStrength.key === "responsibilityResilience" && topStrength.score >= 72) {
    return "人间安全绳榕树";
  }
  if (topStrength.key === "action" && topStrength.score >= 72) {
    return "说动就动的春笋";
  }
  if (topStrength.key === "selfRegulation" && meta.riskMode === "watch") {
    return "情绪天气预报芦苇";
  }
  if (topStrength.key === "selfRegulation") {
    return "清醒雷达含羞草";
  }
  if (topStrength.key === "boundaryExpression") {
    return "边界感开花山茶";
  }
  if (topStrength.key === "openness") {
    return "雨后长枝的银杏";
  }
  return "雨后长枝的银杏";
}

function buildResultSummary(strengths, risks, meta) {
  const strengthNames = strengths.map((item) => item.name).join("、");
  const riskNames = risks.map((item) => item.name).join("、");
  const topStrength = strengths[0];
  const topRisk = risks[0];
  const secondRisk = risks[1] || risks[0];
  const responseNote = meta.responseInfo.level === "veryHigh"
    ? "你这次有不少犹豫和改选。它不一定是摇摆，更像是在给不同情境留位置：人、关系、压力一变，你的答案也会跟着校准。"
    : meta.responseInfo.level === "high"
    ? "有些题你没有一下子定死。这个迟疑可以留下来，它往往比一个太快的结论更诚实。"
    : meta.responseInfo.level === "medium"
      ? "有些答案不必急着盖章。你可以多留意：在哪些人面前、哪些压力下，你会变得不像平时的自己。"
      : "";
  const strengthLead =
    meta.strengthMode === "strong"
      ? `你身上最能发力的，是${strengthNames}。这不是客套的夸奖，而是你已经在靠它们处理关系、压力和选择。${topStrength.edge}`
      : `${strengthNames}是你比较能依靠的部分。它们未必热闹，却像暗处的灯：能帮你稳住局面，也能在混乱里保住一点清醒。`;
  const riskLead =
    meta.riskMode === "blindspot"
      ? `真正容易绊住你的，是${riskNames}。它们不是你“不够好”，更像旧习惯在替你挡风。只是风停以后，你也会被它们困住。${topRisk.shadow}`
      : `${riskNames}值得多看一眼。它们平时未必出声，但到了亲密关系、压力或被评价的时候，容易悄悄接管你的反应。${topRisk.shadow}`;
  const balanceLead =
    meta.balancedCount >= 4
      ? "你的模式不是单一标签。很多短板也不是大风浪，而是反复出现的小暗礁；知道它在哪里，已经少撞一次。"
      : "";
  const paragraphs = [
    strengthLead,
    `${riskLead}${topRisk.empathy}`,
    `${topRisk.hardTruth}那些“我明明知道，但就是会这样”的地方，其实已经露出线索了。${secondRisk.cost}`,
    `${balanceLead}${responseNote}可以先从一个很小的动作开始：${topRisk.microSteps[0]}。`
  ].filter(Boolean);

  return paragraphs.map((text) => `<p>${text}</p>`).join("");
}

function renderShareCard() {
  if (!currentSharePayload) return;
  const shareUrl = buildResultUrl(hideWeaknessToggle.checked);
  shareCopy.textContent = shareUrl;
  copyShareButton.dataset.shareText = shareUrl;
  copyShareButton.textContent = "复制结果链接";
}

function buildResultUrl(hideWeakness = false) {
  const url = new URL(window.location.href);
  url.hash = `result=${encodeResultState(hideWeakness)}`;
  return url.toString();
}

function encodeResultState(hideWeakness = false) {
  const payload = {
    v: 1,
    a: answers,
    h: hesitations.map((item) => (item ? 1 : 0)),
    c: answerChanges.map((count) => (count > 0 ? 1 : 0)),
    hide: hideWeakness ? 1 : 0
  };
  return btoa(JSON.stringify(payload)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function decodeResultState(value) {
  try {
    const normalized = value.replace(/-/g, "+").replace(/_/g, "/");
    const padded = normalized.padEnd(Math.ceil(normalized.length / 4) * 4, "=");
    const payload = JSON.parse(atob(padded));
    if (!Array.isArray(payload.a) || payload.a.length !== questions.length) return null;
    if (!Array.isArray(payload.h) || payload.h.length !== questions.length) return null;
    if (!Array.isArray(payload.c) || payload.c.length !== questions.length) return null;
    return payload;
  } catch {
    return null;
  }
}

function loadSharedResult() {
  const params = new URLSearchParams((window.location.hash || "").replace(/^#/, ""));
  const encodedResult = params.get("result");
  if (!encodedResult) return false;

  const payload = decodeResultState(encodedResult);
  if (!payload) return false;

  payload.a.forEach((answer, index) => {
    answers[index] = Number.isInteger(answer) && answer >= 1 && answer <= 5 ? answer : null;
  });
  payload.h.forEach((item, index) => {
    hesitations[index] = item === 1;
  });
  payload.c.forEach((item, index) => {
    answerChanges[index] = item === 1 ? 1 : 0;
  });

  if (answers.some((answer) => answer === null)) return false;

  hideWeaknessToggle.checked = payload.hide === 1;
  currentIndex = questions.length - 1;
  renderProgress();
  showResults();
  return true;
}

function getShareHook(title) {
  const hooks = {
    "太阳充电的木棉花": "能量感比较稳，越往光亮的地方越能开花。",
    "雾里校准的银莲花": "我不是没主见，只是在雾里反复校准自己真正的答案。",
    "人间安全绳榕树": "朋友可能会觉得我很能托底，但我也需要被托住。",
    "说动就动的春笋": "不一定等万事俱备，先破土再说。",
    "情绪天气预报芦苇": "风一变我大概先感觉到，敏感也是一种雷达。",
    "清醒雷达含羞草": "对自己的反应很敏锐，有时收起来也是在保护自己。",
    "边界感开花山茶": "温柔归温柔，边界也会开得很清楚。",
    "雨后长枝的银杏": "不一定声势浩大，但总能慢慢恢复，也愿意长出新枝。"
  };
  return hooks[title] || "这个结果有点像我，越看越有内味。";
}

function getResultKeywords(title) {
  const keywords = {
    "太阳充电的木棉花": ["高能量", "外放", "稳定发光"],
    "雾里校准的银莲花": ["敏感校准", "情境差异", "慢慢确认"],
    "人间安全绳榕树": ["托底", "可靠", "需要被支持"],
    "说动就动的春笋": ["启动快", "先行动", "用反馈修正"],
    "情绪天气预报芦苇": ["敏锐", "先感知", "容易受环境影响"],
    "清醒雷达含羞草": ["自我觉察", "保护性收起", "反应细腻"],
    "边界感开花山茶": ["温和清晰", "边界感", "不靠翻脸表达"],
    "雨后长枝的银杏": ["恢复力", "自我更新", "慢慢生长"]
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

function renderConsistencyBlindspot(info) {
  const content = {
    high: {
      label: "信号明显",
      body: "你这次的一致性盲区比较明显：你并不是故意双标，而是遇到自己的失误、边界、情绪或判断漏洞时，会更容易先找解释；遇到别人类似的反应时，则更容易先看见问题。",
      psychology: "社会心理学里常说的自利性归因会解释这种现象：人会倾向于用情境解释自己，用行为评价别人。这能保护自尊，但也会让复盘变慢。",
      action: "下次评价别人之前，先问一句：如果这件事发生在我身上，我会给自己什么解释？下次替自己解释之前，再问一句：如果这是别人做的，我会怎么看？"
    },
    medium: {
      label: "有轻微信号",
      body: "你有一些一致性盲区信号，但不算强。你大体能理解别人，也能反省自己，只是在压力、被拒绝或被指出问题时，还是会短暂地给自己更多解释空间。",
      psychology: "这更像认知失调：当“我想成为公平理性的人”和“我此刻也有私心或防御”冲突时，大脑会先帮自己找一个舒服的解释。",
      action: "不用急着批判自己，只要把解释往后放 10 秒：先看事实，再给原因。"
    },
    low: {
      label: "信号不强",
      body: "你这次的一致性盲区不明显。你比较能把同一套标准同时放在自己和别人身上，也更容易承认：我有我的理由，但别人也可能有他的理由。",
      psychology: "这说明你的自我观察和换位能力相对稳定。不过人在压力下仍然会保护自己，所以这个盲区不是消失了，只是这次没有明显冒头。",
      action: "继续保留一个习惯：评价自己和评价别人时，都先区分事实、解释和感受。"
    }
  }[info.level];

  return `
    <h3>一致性盲区</h3>
    <div class="deep-grid">
      <p><strong>${content.label}：</strong>${content.body}</p>
      <p><strong>心理学视角：</strong>${content.psychology}</p>
      <p><strong>调整方法：</strong>${content.action}</p>
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
}

function bindTabs() {
  document.querySelectorAll(".tab-button").forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.dataset.tab;
      document.querySelectorAll(".tab-button").forEach((item) => item.classList.toggle("is-active", item === button));
      document.querySelectorAll(".tab-page").forEach((page) => page.classList.toggle("is-active", page.dataset.page === target));
    });
  });
}

scaleOptions.addEventListener("click", (event) => {
  const option = event.target.closest(".scale-option");
  if (!option) return;
  const previousAnswer = answers[currentIndex];
  const nextAnswer = Number(option.dataset.value);
  if (previousAnswer !== null && previousAnswer !== nextAnswer && !hesitationAutoAnswers[currentIndex]) {
    answerChanges[currentIndex] += 1;
  }
  answers[currentIndex] = nextAnswer;
  hesitationAutoAnswers[currentIndex] = false;
  renderQuestion();
  renderProgress();
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

copyShareButton.addEventListener("click", async () => {
  const text = copyShareButton.dataset.shareText || "";
  try {
    await navigator.clipboard.writeText(text);
    copyShareButton.textContent = "已复制";
  } catch {
    copyShareButton.textContent = "复制失败，请手动选择";
  }
});

hideWeaknessToggle.addEventListener("change", renderShareCard);

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
