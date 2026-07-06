javascript
let progressCount;
let progressLabel;
let progressBar;
let quizPanel;
let resultsPanel;
let questionNumber;
let contextLabel;
let questionText;
let scaleOptions;
let hesitationToggle;
let prevButton;
let nextButton;
let resultTitle;
let resultKeywords;
let resultSummary;
let scoreGrid;
let strengthHeading;
let strengthList;
let riskHeading;
let riskList;
let responsePattern;
let deepAnalysis;
let blindspotDetails;
let restartButton;
let editButton;

let autoNextTimer = null;

function getOrCreateElement(id, tagName = "div", parent = document.body) {
  let element = document.querySelector(`#${id}`);

  if (!element) {
    element = document.createElement(tagName);
    element.id = id;
    parent.appendChild(element);
  }

  return element;
}

function setupQuizDom() {
  quizPanel = document.querySelector("#quiz-panel") || document.body;
  resultsPanel = document.querySelector("#results-panel");

  progressCount = document.querySelector("#progress-count");
  progressLabel = document.querySelector("#progress-label");
  progressBar = document.querySelector("#progress-bar");

  hesitationToggle = document.querySelector("#hesitation-toggle");
  prevButton = document.querySelector("#prev-button");
  nextButton = document.querySelector("#next-button");

  resultTitle = document.querySelector("#result-title");
  resultKeywords = document.querySelector("#result-keywords");
  resultSummary = document.querySelector("#result-summary");
  scoreGrid = document.querySelector("#score-grid");
  strengthHeading = document.querySelector("#strength-heading");
  strengthList = document.querySelector("#strength-list");
  riskHeading = document.querySelector("#risk-heading");
  riskList = document.querySelector("#risk-list");
  responsePattern = document.querySelector("#response-pattern");
  deepAnalysis = document.querySelector("#deep-analysis");
  blindspotDetails = document.querySelector("#blindspot-details");
  restartButton = document.querySelector("#restart-button");
  editButton = document.querySelector("#edit-button");

  const questionHost =
    document.querySelector("#question-area") ||
    document.querySelector(".question-area") ||
    hesitationToggle?.parentElement ||
    quizPanel;

  questionNumber = document.querySelector("#question-number");
  contextLabel = document.querySelector("#context-label");
  questionText = document.querySelector("#question-text");
  scaleOptions = document.querySelector("#scale-options");

  if (!questionNumber) {
    questionNumber = document.createElement("div");
    questionNumber.id = "question-number";

    if (hesitationToggle) {
      questionHost.insertBefore(questionNumber, hesitationToggle);
    } else {
      questionHost.appendChild(questionNumber);
    }
  }

  if (!contextLabel) {
    contextLabel = document.createElement("div");
    contextLabel.id = "context-label";

    if (hesitationToggle) {
      questionHost.insertBefore(contextLabel, hesitationToggle);
    } else {
      questionHost.appendChild(contextLabel);
    }
  }

  if (!questionText) {
    questionText = document.createElement("div");
    questionText.id = "question-text";

    if (hesitationToggle) {
      questionHost.insertBefore(questionText, hesitationToggle);
    } else {
      questionHost.appendChild(questionText);
    }
  }

  if (!scaleOptions) {
    scaleOptions = document.createElement("div");
    scaleOptions.id = "scale-options";

    if (hesitationToggle) {
      questionHost.insertBefore(scaleOptions, hesitationToggle);
    } else {
      questionHost.appendChild(scaleOptions);
    }
  }

  if (!hesitationToggle) {
    hesitationToggle = document.createElement("button");
    hesitationToggle.id = "hesitation-toggle";
    hesitationToggle.type = "button";
    hesitationToggle.textContent = "我有点犹豫";
    questionHost.appendChild(hesitationToggle);
  }

  if (!prevButton) {
    prevButton = document.createElement("button");
    prevButton.id = "prev-button";
    prevButton.type = "button";
    prevButton.textContent = "上一题";
    questionHost.appendChild(prevButton);
  }

  if (!nextButton) {
    nextButton = document.createElement("button");
    nextButton.id = "next-button";
    nextButton.type = "button";
    nextButton.textContent = "下一题";
    questionHost.appendChild(nextButton);
  }
}

function init() {
  setupQuizDom();
  bindEvents();
  renderQuestion();
  renderProgress();
}

function renderQuestion() {
  const question = questions[currentIndex];

  if (!question) return;

  questionNumber.textContent = `第 ${currentIndex + 1} 题`;
  contextLabel.textContent = "请按第一反应选择";
  questionText.textContent = question.text;

  scaleOptions.innerHTML = scaleLabels
    .map((label, index) => {
      const value = index + 1;
      const selectedClass =
        answers[currentIndex] === value ? " is-selected" : "";
      const checked =
        answers[currentIndex] === value ? "true" : "false";

      return `
        <button
          class="scale-option${selectedClass}"
          type="button"
          role="radio"
          aria-checked="${checked}"
          data-value="${value}"
        >
          <span>${value}</span>
          <span>${label}</span>
        </button>
      `;
    })
    .join("");

  hesitationToggle.classList.toggle(
    "is-active",
    hesitations[currentIndex]
  );

  hesitationToggle.setAttribute(
    "aria-pressed",
    hesitations[currentIndex] ? "true" : "false"
  );

  prevButton.disabled = currentIndex === 0;

  nextButton.textContent =
    currentIndex === questions.length - 1
      ? "查看结果"
      : "下一题";

  nextButton.disabled = answers[currentIndex] === null;
}

function renderProgress() {
  const answered = answers.filter(
    (answer) => answer !== null
  ).length;

  const percent = Math.round(
    (answered / questions.length) * 100
  );

  if (progressCount) {
    progressCount.textContent = `${answered} / ${questions.length}`;
  }

  if (progressLabel) {
    progressLabel.textContent =
      percent === 100
        ? "已完成"
        : percent > 0
          ? `${percent}%`
          : "尚未开始";
  }

  if (progressBar) {
    progressBar.style.width = `${percent}%`;
  }
}

function calculateScores(includePartial = false) {
  return Object.keys(dimensions).reduce((acc, key) => {
    const values = questions
      .map((question, index) => {
        return question.dim === key
          ? getScoredAnswer(question, answers[index])
          : null;
      })
      .filter((value) => value !== null);

    const expected = questions.filter(
      (question) => question.dim === key
    ).length;

    const score = values.length
      ? (
          values.reduce((sum, value) => sum + value, 0) /
          values.length
        ) * 20
      : 0;

    const resolved = resolveDimension(key, score);

    acc[key] = {
      ...resolved,
      key,
      score,
      answered: values.length,
      complete: includePartial
        ? values.length > 0
        : values.length === expected
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
  const lightAgreeCount = answers.filter(
    (answer) => answer === 3
  ).length;

  const changedCount = answerChanges.filter(
    (count) => count > 0
  ).length;

  const hesitationRatio = hesitationCount / questions.length;
  const changedRatio = changedCount / questions.length;

  let level = "clear";

  if (hesitationRatio >= 0.55 || changedRatio >= 0.5) {
    level = "veryHigh";
  } else if (
    hesitationRatio >= 0.3 ||
    changedRatio >= 0.25
  ) {
    level = "high";
  } else if (
    hesitationRatio >= 0.15 ||
    changedRatio >= 0.15
  ) {
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
  const scores = Object.values(calculateScores()).sort(
    (a, b) => b.score - a.score
  );

  const averageScore = average(
    scores.map((item) => item.score)
  );

  const highScores = scores.filter(
    (item) => item.score >= 72
  );

  const strengths =
    highScores.length >= 2
      ? highScores.slice(0, 2)
      : scores.slice(0, 2);

  const strengthMode =
    highScores.length >= 2
      ? "strong"
      : "relative";

  const strengthKeys = new Set(
    strengths.map((item) => item.key)
  );

  const riskPool = [...scores]
    .sort((a, b) => a.score - b.score)
    .filter((item) => !strengthKeys.has(item.key));

  const lowScores = riskPool.filter(
    (item) => item.score <= 62
  );

  const risks =
    lowScores.length >= 2
      ? lowScores.slice(0, 2)
      : riskPool.slice(0, 2);

  const riskMode =
    lowScores.length >= 2
      ? "blindspot"
      : "watch";

  const balancedCount = scores.filter(
    (item) => item.score >= 64 && item.score <= 82
  ).length;

  const responseInfo = calculateResponsePattern();
  const topStrength = strengths[0];
  const topRisk = risks[0];

  const title = buildResultTitle(topStrength, topRisk, {
    averageScore,
    responseInfo,
    riskMode
  });

  if (resultTitle) {
    resultTitle.textContent = title;
  }

  if (resultKeywords) {
    resultKeywords.innerHTML = getResultKeywords(title)
      .map((keyword) => `<span>${keyword}</span>`)
      .join("");
  }

  if (strengthHeading) {
    strengthHeading.textContent =
      strengthMode === "strong"
        ? "主要优势"
        : "相对优势";
  }

  if (riskHeading) {
    riskHeading.textContent = "性格盲区";
  }

  if (resultSummary) {
    resultSummary.innerHTML = buildResultSummary(strengths, risks, {
      strengthMode,
      riskMode,
      balancedCount,
      averageScore,
      responseInfo
    });
  }

  if (scoreGrid) {
    scoreGrid.innerHTML = scores
      .map((item) => {
        return `
          <article class="score-row">
            <div class="score-label">
              <span>${item.name}</span>
              <span>${Math.round(item.score)}</span>
            </div>
            <div class="score-bar" aria-hidden="true">
              <span style="width: ${item.score}%"></span>
            </div>
          </article>
        `;
      })
      .join("");
  }

  if (strengthList) {
    strengthList.innerHTML = strengths
      .map((item) => renderMiniStrength(item, strengthMode))
      .join("");
  }

  if (riskList) {
    riskList.innerHTML = risks
      .map((item) => renderMiniRisk(item, riskMode))
      .join("");
  }

  if (responsePattern) {
    responsePattern.innerHTML =
      renderResponsePattern(responseInfo);
  }

  if (deepAnalysis) {
    deepAnalysis.innerHTML = renderDeepAnalysis({
      strengths,
      risks,
      riskMode,
      responseInfo,
      averageScore
    });
  }

  if (blindspotDetails) {
    blindspotDetails.innerHTML = risks
      .map((item) => renderBlindspot(item, riskMode))
      .join("");
  }

  if (quizPanel) {
    quizPanel.classList.add("is-hidden");
  }

  if (resultsPanel) {
    resultsPanel.classList.remove("is-hidden");
    resultsPanel.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
}

function buildResultTitle(topStrength, topRisk, meta) {
  if (meta.averageScore >= 84 && topRisk.score >= 64) {
    return "向阳蓄力的木棉花";
  }

  if (meta.responseInfo.level === "veryHigh") {
    return "雾中辨风的银莲花";
  }

  if (
    topStrength.key === "responsibilityResilience" &&
    topStrength.score >= 72
  ) {
    return "稳稳撑开的榕树";
  }

  if (
    topStrength.key === "action" &&
    topStrength.score >= 72
  ) {
    return "破土向上的春笋";
  }

  if (
    topStrength.key === "selfRegulation" &&
    meta.riskMode === "watch"
  ) {
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
  const strengthNames = strengths
    .map((item) => item.name)
    .join("、");

  const riskNames = risks
    .map((item) => item.name)
    .join("、");

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

  return paragraphs
    .map((text) => `<p>${text}</p>`)
    .join("");
}

function getResultKeywords(title) {
  const keywords = {
    "向阳蓄力的木棉花": [
      "热烈生长",
      "稳定发光",
      "盛放亦知停歇"
    ],
    "雾中辨风的银莲花": [
      "细察变化",
      "因境调整",
      "谨慎敏感"
    ],
    "稳稳撑开的榕树": [
      "可靠托底",
      "默默承担",
      "根系深长"
    ],
    "破土向上的春笋": [
      "先迈一步",
      "边走边调",
      "让事情发生"
    ],
    "听风起伏的芦苇": [
      "感知细腻",
      "随境摇曳",
      "寻找自己的节奏"
    ],
    "藏着微光的含羞草": [
      "觉察敏锐",
      "谨慎靠近",
      "慢慢舒展"
    ],
    "温柔有界的山茶花": [
      "温和坚定",
      "自守分寸",
      "相处舒服"
    ],
    "雨后舒展的银杏": [
      "慢慢回稳",
      "重新长出",
      "往光里走"
    ]
  };

  return keywords[title] || [];
}

function renderMiniStrength(item, mode) {
  const text =
    mode === "strong"
      ? `这是很珍贵的一部分。${item.strength}${item.edge}别把它当成理所当然，它其实是你一路练出来的能力。`
      : `它不一定很张扬，却很能撑事。${item.strength}${item.edge}有些优势不是闪光，是长久供电。`;

  return `
    <p class="mini-item">
      <strong>${item.name}</strong>
      ${text}
    </p>
  `;
}

function renderMiniRisk(item, mode) {
  const text =
    mode === "blindspot"
      ? `容易中招的地方：${item.risk}${item.hardTruth}${item.empathy}先不用责备自己，抓一个最常出现的场景练就好。`
      : `值得留意的地方：${item.risk}${item.hardTruth}${item.empathy}它未必天天出现，但一出现，就会牵动你的表达、行动或关系。`;

  return `
    <p class="mini-item">
      <strong>${item.name}</strong>
      ${text}
    </p>
  `;
}

function average(values) {
  if (!values.length) return 0;

  return values.reduce(
    (sum, value) => sum + value,
    0
  ) / values.length;
}

function renderResponsePattern(info) {
  const headline =
    info.level === "veryHigh"
      ? "你这次的答案里有非常明显的犹豫信号"
      : info.level === "high"
        ? "你这次的答案里有明显犹豫信号"
        : info.level === "medium"
          ? "你这次有一些需要结合具体事件理解的题"
          : "你这次的选择相对明确";

  const body =
    info.level === "veryHigh"
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

  const tensionLine =
    `你真正卡住的地方，可能不是${topStrength.name}不够，而是${topRisk.name}在关键时刻先伸了手。不是你没有能力，是旧反应太熟，常常比理性先到一步。`;

  const practiceLine = topRisk.microSteps
    .map((step, index) => `${index + 1}. ${step}`)
    .join("；");

  const pressureLine =
    meta.responseInfo.level === "veryHigh"
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
  const riskLabel =
    mode === "blindspot"
      ? "短板表现"
      : "相对短板";

  const microSteps = item.microSteps
    .map((step) => `<li>${step}</li>`)
    .join("");

  return `
    <article class="detail-card">
      <h3>${item.name}</h3>
      <p><strong>${riskLabel}：</strong>${item.risk}</p>
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

      <p>
        <strong>本周练习：</strong>
        选择一个真实场景，只练习一个动作；完成后记录“我做了什么、效果如何、下次微调什么”。重点不是一次改变很多，而是让这个短板进入可练习状态。
      </p>

      <div class="tag-line">
        ${item.practice
          .map((tag) => `<span>${tag}</span>`)
          .join("")}
      </div>
    </article>
  `;
}

function bindEvents() {
  scaleOptions.addEventListener("click", (event) => {
    const option = event.target.closest(".scale-option");

    if (!option) return;

    const previousAnswer = answers[currentIndex];
    const nextAnswer = Number(option.dataset.value);

    if (
      previousAnswer !== null &&
      previousAnswer !== nextAnswer &&
      !hesitationAutoAnswers[currentIndex]
    ) {
      answerChanges[currentIndex] += 1;
    }

    answers[currentIndex] = nextAnswer;
    hesitationAutoAnswers[currentIndex] = false;

    if (autoNextTimer) {
      clearTimeout(autoNextTimer);
      autoNextTimer = null;
    }

    renderQuestion();
    renderProgress();

    if (currentIndex < questions.length - 1) {
      autoNextTimer = setTimeout(() => {
        currentIndex += 1;
        renderQuestion();
        renderProgress();
        autoNextTimer = null;
      }, 350);
    }
  });

  hesitationToggle.addEventListener("click", () => {
    const nextHesitationState = !hesitations[currentIndex];

    hesitations[currentIndex] = nextHesitationState;

    if (
      nextHesitationState &&
      answers[currentIndex] === null
    ) {
      answers[currentIndex] = 3;
      hesitationAutoAnswers[currentIndex] = true;
    }

    if (
      !nextHesitationState &&
      hesitationAutoAnswers[currentIndex]
    ) {
      answers[currentIndex] = null;
      hesitationAutoAnswers[currentIndex] = false;
    }

    renderQuestion();
    renderProgress();
  });

  prevButton.addEventListener("click", () => {
    if (autoNextTimer) {
      clearTimeout(autoNextTimer);
      autoNextTimer = null;
    }

    currentIndex = Math.max(0, currentIndex - 1);
    renderQuestion();
    renderProgress();
  });

  nextButton.addEventListener("click", () => {
    if (answers[currentIndex] === null) return;

    if (autoNextTimer) {
      clearTimeout(autoNextTimer);
      autoNextTimer = null;
    }

    if (currentIndex === questions.length - 1) {
      showResults();
      return;
    }

    currentIndex += 1;
    renderQuestion();
    renderProgress();
  });

  if (editButton) {
    editButton.addEventListener("click", () => {
      if (autoNextTimer) {
        clearTimeout(autoNextTimer);
        autoNextTimer = null;
      }

      if (resultsPanel) {
        resultsPanel.classList.add("is-hidden");
      }

      quizPanel.classList.remove("is-hidden");
      quizPanel.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  }

  if (restartButton) {
    restartButton.addEventListener("click", () => {
      if (autoNextTimer) {
        clearTimeout(autoNextTimer);
        autoNextTimer = null;
      }

      answers.fill(null);
      hesitations.fill(false);
      hesitationAutoAnswers.fill(false);
      answerChanges.fill(0);

      currentIndex = 0;

      if (resultsPanel) {
        resultsPanel.classList.add("is-hidden");
      }

      quizPanel.classList.remove("is-hidden");

      renderQuestion();
      renderProgress();

      quizPanel.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}