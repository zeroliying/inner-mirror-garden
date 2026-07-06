const dimensions = {
  selfRegulation: {
    name: "觉察与调节",
    strength: "你能看见自己的情绪和惯性反应，也有机会在反应前多留一点空间。",
    risk: "压力上来时，你容易先压住、硬扛或回避，事后才发现自己被情绪推着走。",
    cause: "你习惯先保证局面稳定，或者太快进入解决问题模式，导致感受没有被及时处理。",
    advice: "先做 30 秒情绪命名：我现在是焦虑、委屈、生气，还是害怕失控；命名后再决定要不要回应。",
    practice: ["情绪命名", "暂停再回应", "复盘触发点"]
  },
  boundaryExpression: {
    name: "边界与表达",
    strength: "你能在关系和合作里表达真实需求，也更不容易被别人的期待完全带走。",
    risk: "你容易为了维持关系、避免冲突或显得好相处，把真实想法压下去。",
    cause: "你把清晰表达和强硬划上等号，也担心拒绝或不同意见会伤害关系。",
    advice: "用“我的结论 + 原因 + 我能做到/做不到什么”来表达，少用暗示，也少等别人自己察觉。",
    practice: ["先说结论", "延迟答应", "具体请求"]
  },
  action: {
    name: "行动与推进",
    strength: "你能把想法转成具体动作，愿意先用小步骤制造反馈。",
    risk: "你容易在不确定、怕麻烦或怕做不好时卡住，把启动拖到很后面。",
    cause: "你需要更多安全感才敢开始，或者把开始行动和必须做好绑定得太紧。",
    advice: "把目标压缩成 15 分钟内可完成的一步，先交出一个粗糙版本，再用反馈修正。",
    practice: ["最小行动", "限定准备时间", "先反馈后优化"]
  },
  openness: {
    name: "开放与学习",
    strength: "你愿意接收不同观点，也能在新信息出现时调整自己的解释。",
    risk: "当意见挑战到自尊或经验时，你容易过早防御，错过有用信息。",
    cause: "你会本能保护已有判断，尤其在被评价、被否定或亲近关系里更明显。",
    advice: "听到不同意见时先问一个澄清问题，再决定自己同不同意；不要一边听一边急着反驳。",
    practice: ["先问后判", "寻找反例", "区分偏好与事实"]
  },
  responsibilityResilience: {
    name: "责任与复原",
    strength: "你重承诺，也能在挫折后重新组织节奏，而不是一直停在自责里。",
    risk: "你容易把太多结果归因到自己身上，遇到挫折时压力和自我否定同时上升。",
    cause: "你把“事情做好”和“我必须负责所有结果”绑得太紧，忽略了边界和外部条件。",
    advice: "复盘时分三栏写：我的部分、别人的部分、环境条件；只为自己能控制的下一步负责。",
    practice: ["拆分责任", "暴露风险", "把失败具体化"]
  }
};

const contexts = {
  work: {
    name: "工作/学习场景",
    shortName: "工作学习",
    higher: "你在任务、目标和外部要求明确时更容易调动这项能力。",
    lower: "这个能力在任务压力里更容易被压住，可能需要更明确的流程或边界来托住你。"
  },
  life: {
    name: "日常生活与人际场景",
    shortName: "日常人际",
    higher: "你在关系、生活节奏和熟悉互动里更容易自然发挥这项能力。",
    lower: "这个能力在亲近关系或松散生活里更容易松动，可能需要更具体的表达和自我照顾。"
  }
};

const questions = [
  { ctx: "work", dim: "selfRegulation", text: "任务推进不顺时，我能分辨自己是在焦虑、抗拒，还是单纯信息不够。" },
  { ctx: "work", dim: "boundaryExpression", text: "面对临时加来的任务，我能说明它会影响哪些已有优先级。" },
  { ctx: "work", dim: "action", text: "面对一个模糊目标，我会先做一个小版本，而不是一直等待条件成熟。" },
  { ctx: "work", dim: "openness", text: "别人提出不同方案时，我会先理解依据，再决定是否采纳。" },
  { ctx: "work", dim: "responsibilityResilience", text: "当事情推进不顺时，我会及时暴露风险，而不是独自硬扛。" },
  { ctx: "life", dim: "selfRegulation", text: "和亲近的人相处时，我能察觉自己是在逞强、讨好、回避还是控制。" },
  { ctx: "life", dim: "boundaryExpression", text: "亲友提出请求时，我能判断自己是否真的有余力答应。" },
  { ctx: "life", dim: "action", text: "生活里想改善一件事时，我能先做一个小改变，而不是一直想很久。" },
  { ctx: "life", dim: "openness", text: "亲近的人指出我的问题时，我能先听完，而不是马上防御。" },
  { ctx: "life", dim: "responsibilityResilience", text: "关系出现摩擦时，我能看到自己的部分，但不会把所有问题都揽到自己身上。" },
  { ctx: "work", dim: "selfRegulation", text: "压力很大时，我有办法让自己恢复，而不是只靠硬撑完成任务。" },
  { ctx: "work", dim: "boundaryExpression", text: "在合作里，即使意见不同，我也能把真实想法说出来。" },
  { ctx: "work", dim: "action", text: "即使还没完全准备好，我也能先开始做一小步。" },
  { ctx: "work", dim: "openness", text: "当事实证明原方案不合适时，我能调整判断，而不是维护面子。" },
  { ctx: "work", dim: "responsibilityResilience", text: "被批评或指出问题后，我能提取有用信息，而不是只记住受伤感。" },
  { ctx: "life", dim: "selfRegulation", text: "我能察觉自己什么时候把外部压力带进了日常相处。" },
  { ctx: "life", dim: "boundaryExpression", text: "我不会为了显得好相处，而隐藏重要的不满或不同意见。" },
  { ctx: "life", dim: "action", text: "日常计划被打乱时，我能重新安排一个可执行的小步骤。" },
  { ctx: "life", dim: "openness", text: "我能分辨“我不喜欢这个说法”和“对方说得完全没道理”。" },
  { ctx: "life", dim: "responsibilityResilience", text: "生活里遇到挫折后，我能保留基本节奏，而不是彻底摆烂。" }
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
const answerStatus = document.querySelector("#answer-status");
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
const contextSummary = document.querySelector("#context-summary");
const contextGrid = document.querySelector("#context-grid");
const blindspotDetails = document.querySelector("#blindspot-details");
const restartButton = document.querySelector("#restart-button");
const editButton = document.querySelector("#edit-button");
let currentSharePayload = null;

function init() {
  renderAnswerStatus();
  renderQuestion();
  renderProgress();
  bindTabs();
}

function renderAnswerStatus() {
  answerStatus.innerHTML = questions
    .map((_, index) => `<span class="answer-dot" data-answer-dot="${index + 1}" aria-label="第 ${index + 1} 题未完成"></span>`)
    .join("");
}

function renderQuestion() {
  const question = questions[currentIndex];
  questionNumber.textContent = `第 ${currentIndex + 1} 题`;
  contextLabel.textContent = contexts[question.ctx].name;
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

  answers.forEach((answer, index) => {
    const dot = document.querySelector(`[data-answer-dot="${index + 1}"]`);
    dot.classList.toggle("is-done", answer !== null);
    dot.classList.toggle("is-hesitant", hesitations[index]);
    dot.setAttribute("aria-label", `第 ${index + 1} 题${answer !== null ? "已完成" : "未完成"}`);
  });
}

function calculateScores(includePartial = false) {
  return Object.keys(dimensions).reduce((acc, key) => {
    const values = questions
      .map((question, index) => (question.dim === key ? answers[index] : null))
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

function calculateContextScores() {
  return Object.keys(dimensions).map((key) => {
    const contextScores = Object.keys(contexts).reduce((acc, ctxKey) => {
      const values = questions
        .map((question, index) => (question.dim === key && question.ctx === ctxKey ? answers[index] : null))
        .filter((value) => value !== null);
      acc[ctxKey] = values.length ? (values.reduce((sum, value) => sum + value, 0) / values.length) * 20 : 0;
      return acc;
    }, {});

    return {
      ...dimensions[key],
      key,
      work: contextScores.work,
      life: contextScores.life,
      diff: contextScores.work - contextScores.life
    };
  });
}

function calculateResponsePattern() {
  const hesitationCount = hesitations.filter(Boolean).length;
  const neutralCount = answers.filter((answer) => answer === 3).length;
  const changedCount = answerChanges.filter((count) => count > 0).length;
  const hesitationRatio = hesitationCount / questions.length;
  const neutralRatio = neutralCount / questions.length;
  const changedRatio = changedCount / questions.length;
  let level = "clear";

  if (hesitationRatio >= 0.3 || neutralRatio >= 0.4 || changedRatio >= 0.25) {
    level = "high";
  } else if (hesitationRatio >= 0.15 || neutralRatio >= 0.25 || changedRatio >= 0.15) {
    level = "medium";
  }

  return {
    hesitationCount,
    neutralCount,
    changedCount,
    level
  };
}

function showResults() {
  const scores = Object.values(calculateScores())
    .sort((a, b) => b.score - a.score);
  const contextScores = calculateContextScores();
  const contextDiffs = [...contextScores].sort((a, b) => Math.abs(b.diff) - Math.abs(a.diff));
  const averageScore = average(scores.map((item) => item.score));
  const scoreSpread = scores[0].score - scores[scores.length - 1].score;
  const maxContextDiff = Math.abs(contextDiffs[0].diff);
  const isContextSplit = scoreSpread < 8 && maxContextDiff >= 16;
  const highScores = scores.filter((item) => item.score >= 72);
  const strengths = highScores.length >= 2 ? highScores.slice(0, 2) : scores.slice(0, 2);
  const strengthMode = highScores.length >= 2 ? "strong" : "relative";
  const strengthKeys = new Set(strengths.map((item) => item.key));
  const riskPool = [...scores]
    .sort((a, b) => a.score - b.score)
    .filter((item) => !strengthKeys.has(item.key));
  const lowScores = riskPool.filter((item) => item.score <= 62);
  const risks = isContextSplit ? contextDiffs.slice(0, 2) : lowScores.length >= 2 ? lowScores.slice(0, 2) : riskPool.slice(0, 2);
  const riskMode = isContextSplit ? "context" : lowScores.length >= 2 ? "blindspot" : "watch";
  const balancedCount = scores.filter((item) => item.score >= 64 && item.score <= 82).length;
  const responseInfo = calculateResponsePattern();

  const title = buildResultTitle(strengths[0], risks[0], {
    averageScore,
    isContextSplit,
    responseInfo,
    riskMode
  });
  currentSharePayload = {
    title,
    strengths,
    risks,
    riskMode,
    responseInfo
  };

  resultTitle.textContent = title;
  strengthHeading.textContent = strengthMode === "strong" ? "主要优势" : "相对优势";
  riskHeading.textContent = riskMode === "blindspot" ? "明显盲区" : riskMode === "context" ? "场景型观察点" : "相对观察点";
  resultSummary.textContent = buildResultSummary(strengths, risks, {
    strengthMode,
    riskMode,
    balancedCount,
    averageScore,
    contextScores,
    responseInfo
  });
  shareTitle.textContent = `我是「${title}」`;
  copyShareButton.textContent = "复制分享文案";
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
  contextSummary.innerHTML = renderContextSummary(contextScores);
  contextGrid.innerHTML = contextDiffs.map(renderContextCard).join("");
  blindspotDetails.innerHTML = risks.map((item) => renderBlindspot(item, riskMode)).join("");

  quizPanel.classList.add("is-hidden");
  resultsPanel.classList.remove("is-hidden");
  resultsPanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

function buildResultTitle(topStrength, topRisk, meta) {
  if (meta.isContextSplit) {
    return "双栖切换的候鸟";
  }
  if (meta.averageScore >= 84 && topRisk.score >= 64) {
    return "太阳充电的木棉花";
  }
  if (meta.averageScore <= 46) {
    return "地下攒劲的小竹笋";
  }
  if (meta.responseInfo.level === "high") {
    return "自带雷达的小蜗牛";
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
    return "随时长新枝的银杏";
  }
  return "雨后回血的小苔藓";
}

function buildResultSummary(strengths, risks, meta) {
  const strengthNames = strengths.map((item) => item.name).join("、");
  const riskNames = risks.map((item) => item.name).join("、");
  const responseNote = meta.responseInfo.level === "high"
    ? "另外，你在不少题目上出现犹豫或中间选择，这不是问题，反而说明你在认真分辨自己。很多真实的人都不是单一模式，具体对象、压力和场景都会影响我们的表现。"
    : meta.responseInfo.level === "medium"
      ? "有些题目你可能并不容易一眼判断，这很正常，也说明你没有粗暴地给自己贴标签。建议结合具体场景看结果。"
      : "";
  const strengthLead =
    meta.strengthMode === "strong"
      ? `你的突出资源是${strengthNames}，这很值得被认真肯定。它们不是理所当然的“应该做到”，而是你已经发展出来的能力。`
      : `这次没有特别尖锐的高分项，但${strengthNames}仍然是相对更能托住你的部分，也值得被看见和肯定。`;
  const riskLead =
    meta.riskMode === "context"
      ? `更值得看的不是单一维度高低，而是${riskNames}在两个场景里的差异。`
      : meta.riskMode === "blindspot"
      ? `需要优先留意的是${riskNames}，但请先记住：看见短板不是失败，愿意诚实面对它已经很勇敢。`
      : `暂时没有明显低分项，${riskNames}更适合作为相对观察点。`;
  const balanceLead =
    meta.balancedCount >= 4
      ? "整体分布较均衡，建议从最影响现实关系和效率的一项开始调整。"
      : "";

  return `${strengthLead}${riskLead}这些不是定论，也不是给你下结论；它们只是帮你把一些平时容易忽略的模式照亮一点。${balanceLead}${responseNote}`;
}

function buildShareText(payload, hideWeakness = false) {
  const { title, strengths, risks, riskMode, responseInfo } = payload;
  const strengthNames = strengths.map((item) => item.name).join(" + ");
  const riskNames = risks.map((item) => item.name).join(" + ");
  const hook = getShareHook(title);
  const riskLine = hideWeakness
    ? "我这次选择先隐藏成长观察点，只公开我的优势版本。"
    : riskMode === "context"
    ? `我的隐藏设定：不同场景会切换人格模式，尤其在 ${riskNames} 上很明显。`
    : riskMode === "blindspot"
      ? `我的成长副本：${riskNames}，看见短板但先不慌。`
      : `我的观察彩蛋：${riskNames}，不是短板，是值得继续观察的小线索。`;
  const hesitationLine = responseInfo.level === "high"
    ? "答题时我还挺犹豫，看来我是个需要分场景理解的人。"
    : "";

  return `我的性格测试结果是「${title}」：${hook}我的优势关键词是 ${strengthNames}。${riskLine}${hesitationLine} 这个测试还挺适合发给朋友互相对照。`;
}

function renderShareCard() {
  if (!currentSharePayload) return;
  const shareText = buildShareText(currentSharePayload, hideWeaknessToggle.checked);
  shareCopy.textContent = shareText;
  copyShareButton.dataset.shareText = shareText;
  copyShareButton.textContent = "复制分享文案";
}

function getShareHook(title) {
  const hooks = {
    "双栖切换的候鸟": "工作和生活像两个频道，我会根据场景切换飞行模式。",
    "太阳充电的木棉花": "能量感比较稳，越往光亮的地方越能开花。",
    "地下攒劲的小竹笋": "现在像是在土里蓄力，不是没生长，只是还没完全冒头。",
    "自带雷达的小蜗牛": "走得慢一点，但每一步都在认真探路。",
    "人间安全绳榕树": "朋友可能会觉得我很能托底，但我也需要被托住。",
    "说动就动的春笋": "不一定等万事俱备，先破土再说。",
    "情绪天气预报芦苇": "风一变我大概先感觉到，敏感也是一种雷达。",
    "清醒雷达含羞草": "对自己的反应很敏锐，有时收起来也是在保护自己。",
    "边界感开花山茶": "温柔归温柔，边界也会开得很清楚。",
    "随时长新枝的银杏": "愿意更新自己，脑子里总能长出新枝。",
    "雨后回血的小苔藓": "不一定声势浩大，但恢复力很顽强。"
  };
  return hooks[title] || "这个结果有点像我，越看越有内味。";
}

function renderMiniStrength(item, mode) {
  const text =
    mode === "strong"
      ? `这是你很珍贵的一部分。${item.strength}请不要把它当成“本来就该会”，它说明你已经积累了可依靠的内在资源。接下来可以有意识地把它用在更重要的关系或目标上。`
      : `相对来看，这一项比其他部分更能支撑你，也值得被肯定。${item.strength}它可能不是特别张扬的优势，但已经在帮你稳住一些局面。`;
  return `<p class="mini-item"><strong>${item.name}</strong>${text}</p>`;
}

function renderMiniRisk(item, mode) {
  const text = mode === "context"
    ? renderContextMiniText(item)
    : mode === "blindspot"
      ? `短板表现：${item.risk}建议先抓一个最常出现的场景练习，不要只停留在理解层面。`
      : `相对短板：${item.risk}虽然不是最低分，但它仍然可能在压力或关系里反复出现，需要持续观察和练习。`;
  return `<p class="mini-item"><strong>${item.name}</strong>${text}</p>`;
}

function renderContextMiniText(item) {
  const strongerContext = item.diff >= 0 ? contexts.work : contexts.life;
  const weakerContext = item.diff >= 0 ? contexts.life : contexts.work;
  return `你在${strongerContext.shortName}能发挥，但在${weakerContext.shortName}不稳定，说明这项能力还没有真正迁移到所有场景。建议把高分场景里有效的做法拆成一个动作，复制到低分场景里练。`;
}

function renderContextSummary(items) {
  const workAverage = average(items.map((item) => item.work));
  const lifeAverage = average(items.map((item) => item.life));
  const lead =
    Math.abs(workAverage - lifeAverage) < 6
      ? "两个场景整体接近，说明你的性格表现比较稳定。"
      : workAverage > lifeAverage
        ? "你在工作/学习场景里更容易进入状态，日常人际里可能更受情绪、关系或松散节奏影响。"
        : "你在日常人际场景里更自然，工作/学习场景里可能更容易被评价、压力或规则感卡住。";

  return `
    <article class="context-overview">
      <div>
        <strong>${contexts.work.name}</strong>
        <span>${Math.round(workAverage)}</span>
      </div>
      <div>
        <strong>${contexts.life.name}</strong>
        <span>${Math.round(lifeAverage)}</span>
      </div>
      <p>${lead}</p>
    </article>
  `;
}

function renderContextCard(item) {
  const strongerContext = item.diff >= 0 ? contexts.work : contexts.life;
  const weakerContext = item.diff >= 0 ? contexts.life : contexts.work;
  const strongerScore = item.diff >= 0 ? item.work : item.life;
  const weakerScore = item.diff >= 0 ? item.life : item.work;
  const diff = Math.abs(item.diff);
  const interpretation =
    diff < 8
      ? "两个场景表现接近，这项能力相对稳定。"
      : `${strongerContext.shortName}更容易发挥；${weakerContext.shortName}里可能需要额外提醒自己。`;
  const reason = diff < 8 ? item.strength : strongerContext.higher;

  return `
    <article class="context-card">
      <div class="context-card-header">
        <h3>${item.name}</h3>
        <span>差值 ${Math.round(diff)}</span>
      </div>
      <div class="context-bars">
        ${renderContextBar(contexts.work.shortName, item.work)}
        ${renderContextBar(contexts.life.shortName, item.life)}
      </div>
      <p><strong>解读：</strong>${interpretation}</p>
      <p><strong>提醒：</strong>${reason}</p>
      ${diff >= 8 ? `<p><strong>补强：</strong>${weakerContext.lower}</p>` : ""}
    </article>
  `;
}

function renderContextBar(label, score) {
  return `
    <div class="context-bar-row">
      <span>${label}</span>
      <div class="score-bar" aria-hidden="true"><span style="width: ${score}%"></span></div>
      <strong>${Math.round(score)}</strong>
    </div>
  `;
}

function average(values) {
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function renderResponsePattern(info) {
  const headline = info.level === "high"
    ? "你这次的答案里有明显犹豫信号"
    : info.level === "medium"
      ? "你这次有一些需要分场景理解的题"
      : "你这次的选择相对明确";
  const body = info.level === "high"
    ? "这通常说明你的性格表现不是固定模式，而是会随对象、场景、压力强度变化。能意识到“我不确定”本身就是一种觉察，不需要急着把自己归类。看结果时，优先看“场景”页，而不是只看总分。"
    : info.level === "medium"
      ? "有些题可能对你来说不是绝对像或不像。这个犹豫值得被保留，结果可以作为观察入口，后续更适合结合具体事件复盘。"
      : "这说明你对多数题目的自我判断比较清楚，结果可以更直接地作为当前倾向参考；如果看到不舒服的地方，也先把它当成信息，不急着否定自己。";

  return `
    <h3>答题状态</h3>
    <p><strong>${headline}</strong></p>
    <p>${body}</p>
    <div class="response-stats">
      <span>标记犹豫 ${info.hesitationCount}</span>
      <span>选择中间 ${info.neutralCount}</span>
      <span>改选题目 ${info.changedCount}</span>
    </div>
  `;
}

function renderBlindspot(item, mode) {
  if (mode === "context") {
    return renderContextBlindspot(item);
  }
  const riskLabel = mode === "blindspot" ? "短板表现" : "相对短板";
  const riskText = item.risk;
  return `
    <article class="detail-card">
      <h3>${item.name}</h3>
      <p><strong>${riskLabel}：</strong>${riskText}</p>
      <p><strong>形成原因：</strong>${item.cause}</p>
      <p><strong>改进方法：</strong>${item.advice}</p>
      <p><strong>本周练习：</strong>选择一个真实场景，只练习一个动作；完成后记录“我做了什么、效果如何、下次微调什么”。重点不是一次改变很多，而是让这个短板进入可练习状态。</p>
      <div class="tag-line">${item.practice.map((tag) => `<span>${tag}</span>`).join("")}</div>
    </article>
  `;
}

function renderContextBlindspot(item) {
  const strongerContext = item.diff >= 0 ? contexts.work : contexts.life;
  const weakerContext = item.diff >= 0 ? contexts.life : contexts.work;
  return `
    <article class="detail-card">
      <h3>${item.name}</h3>
      <p><strong>短板表现：</strong>${renderContextMiniText(item)}</p>
      <p><strong>形成原因：</strong>${strongerContext.higher}${weakerContext.lower}</p>
      <p><strong>改进方法：</strong>把${strongerContext.shortName}里已经有效的做法，复制一个最小版本到${weakerContext.shortName}：只复制一个动作，不要求整套状态都一样。</p>
      <p><strong>本周练习：</strong>找一个${weakerContext.shortName}里的真实场景，提前写下“我准备怎么回应/怎么开始/怎么设边界”，完成后复盘差异。如果没做到，也要写清楚卡在哪一步。</p>
      <div class="tag-line"><span>场景迁移</span><span>提前预案</span><span>小步复制</span></div>
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
