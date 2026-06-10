const seedState = {
  evidence: [
    {
      id: "ev-1",
      source: "Founder LinkedIn comments",
      type: "audience_voice",
      statement: "Operators want strategic clarity but recoil from heavyweight planning rituals.",
      audience: "Independent founders",
      capturedAt: "Today"
    },
    {
      id: "ev-2",
      source: "Competitor positioning pages",
      type: "competitor",
      statement: "AI strategy tools are converging around templates, dashboards, and weekly planning prompts.",
      audience: "Small teams",
      capturedAt: "Yesterday"
    },
    {
      id: "ev-3",
      source: "Owned notes",
      type: "owned_feedback",
      statement: "The strongest language is about sharper thinking, not productivity or automation.",
      audience: "Consultants and creators",
      capturedAt: "This week"
    }
  ],
  signals: [
    {
      id: "sig-1",
      type: "pain_point",
      source: "Founder LinkedIn comments",
      statement: "Strategy feels important but too abstract to use in the day-to-day.",
      audience: "Independent founders",
      confidence: 78
    },
    {
      id: "sig-2",
      type: "competitor_move",
      source: "Competitor positioning pages",
      statement: "Competitors are packaging AI strategy as faster planning, not deeper market understanding.",
      audience: "Small teams",
      confidence: 72
    },
    {
      id: "sig-3",
      type: "language_pattern",
      source: "Owned notes",
      statement: "People respond to language around clarity, taste, judgment, and market feel.",
      audience: "Consultants and creators",
      confidence: 66
    },
    {
      id: "sig-4",
      type: "objection",
      source: "Customer conversations",
      statement: "Users will not trust generated strategy unless they can inspect the evidence trail.",
      audience: "Solo operators",
      confidence: 82
    }
  ],
  insights: [
    {
      id: "ins-1",
      title: "Strategy Without Planning Theater",
      thesis: "Independent operators want clearer strategic direction, but they resist tools that feel corporate, slow, or detached from market reality.",
      audience: "Independent founders and operators",
      confidence: "high",
      confidenceScore: 78,
      evidence: ["sig-1", "sig-3", "sig-4"],
      why: "A lightweight insight graph could position strategy as a living practice rather than a static planning document.",
      contentAngles: [
        "Strategy should feel like a working instrument, not a PDF.",
        "Why smart founders avoid strategy work.",
        "The difference between clarity and planning theater."
      ],
      action: "Prototype a manual insight workflow and test messaging around living strategy."
    },
    {
      id: "ins-2",
      title: "Evidence Trails Create Trust",
      thesis: "AI-generated strategy becomes more credible when every claim can be traced back to market evidence.",
      audience: "Strategy-minded creators",
      confidence: "medium",
      confidenceScore: 70,
      evidence: ["sig-2", "sig-4"],
      why: "Traceability can become a core product differentiator against generic AI content and planning tools.",
      contentAngles: [
        "The future of AI strategy is evidence-backed.",
        "A good insight should show its receipts.",
        "Why generic strategy advice feels hollow."
      ],
      action: "Make source-backed reasoning visible in every insight brief."
    }
  ],
  contentIdeas: [
    {
      id: "con-1",
      title: "Strategy As A Living Map",
      summary: "A post about replacing static plans with a connected evidence graph.",
      sourceInsight: "ins-1"
    },
    {
      id: "con-2",
      title: "Show The Evidence Trail",
      summary: "A short essay on why market-backed insight beats generic AI synthesis.",
      sourceInsight: "ins-2"
    }
  ]
};

const baseGraphLayout = {
  "ins-1": { x: 450, y: 170 },
  "ins-2": { x: 590, y: 315 },
  "sig-1": { x: 230, y: 130 },
  "sig-2": { x: 735, y: 150 },
  "sig-3": { x: 220, y: 340 },
  "sig-4": { x: 450, y: 430 },
  "con-1": { x: 690, y: 425 },
  "con-2": { x: 805, y: 300 }
};

const baseGraphEdges = [
  { from: "sig-1", to: "ins-1", type: "supports", strength: "strong" },
  { from: "sig-3", to: "ins-1", type: "supports", strength: "strong" },
  { from: "sig-4", to: "ins-1", type: "supports", strength: "normal" },
  { from: "sig-2", to: "ins-2", type: "supports", strength: "normal" },
  { from: "sig-4", to: "ins-2", type: "supports", strength: "strong" },
  { from: "ins-1", to: "con-1", type: "leads_to_content", strength: "strong" },
  { from: "ins-2", to: "con-2", type: "leads_to_content", strength: "strong" },
  { from: "ins-1", to: "ins-2", type: "related_to", strength: "normal" }
];

const nodeStyles = {
  insight: { color: "#0f766e", radius: 54 },
  signal: { color: "#315f8c", radius: 42 },
  content: { color: "#b7791f", radius: 38 }
};

let state = loadState();
let graphLayout = loadGraphLayout();
let graphEdges = loadGraphEdges();
let selectedNodeId = "ins-1";
let graphFilter = "all";
let draggingNodeId = null;
let dragOffset = { x: 0, y: 0 };

const views = {
  workspace: document.getElementById("workspaceView"),
  graph: document.getElementById("graphView"),
  briefs: document.getElementById("briefsView")
};

document.querySelectorAll(".nav-item").forEach((button) => {
  button.addEventListener("click", () => switchView(button.dataset.view));
});

document.querySelectorAll(".segment").forEach((button) => {
  button.addEventListener("click", () => {
    graphFilter = button.dataset.filter;
    document.querySelectorAll(".segment").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderGraph();
  });
});

document.getElementById("captureForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const statement = form.get("signal").toString().trim();
  const source = form.get("source").toString().trim();
  const type = form.get("type").toString();
  const audience = form.get("audience").toString().trim() || "General market";

  if (!statement || !source) return;

  const evidenceId = `ev-${Date.now()}`;
  const signalId = `sig-${Date.now()}`;

  state.evidence.unshift({
    id: evidenceId,
    source,
    type: "manual_capture",
    statement,
    audience,
    capturedAt: "Just now"
  });

  state.signals.unshift({
    id: signalId,
    type,
    source,
    statement,
    audience,
    confidence: 58
  });

  graphLayout[signalId] = {
    x: 120 + Math.random() * 650,
    y: 120 + Math.random() * 310
  };

  graphEdges.push({ from: signalId, to: "ins-1", type: "possible_support", strength: "normal" });
  selectedNodeId = signalId;
  saveState();
  saveGraphLayout();
  saveGraphEdges();
  event.currentTarget.reset();
  render();
});

document.getElementById("clusterSignals").addEventListener("click", () => {
  selectedNodeId = "ins-1";
  switchView("graph");
});

document.getElementById("focusCapture").addEventListener("click", () => {
  switchView("workspace");
  document.getElementById("sourceInput").focus();
});

document.getElementById("resetDemo").addEventListener("click", () => {
  state = structuredClone(seedState);
  graphLayout = structuredClone(baseGraphLayout);
  graphEdges = structuredClone(baseGraphEdges);
  localStorage.setItem("marketInsightGraphState", JSON.stringify(state));
  saveGraphLayout();
  saveGraphEdges();
  selectedNodeId = "ins-1";
  render();
});

document.getElementById("promoteNode").addEventListener("click", () => {
  const signal = state.signals.find((item) => item.id === selectedNodeId);
  if (!signal) return;
  openInsightModal(signal);
});

document.getElementById("contentNode").addEventListener("click", () => {
  const insight = state.insights.find((item) => item.id === selectedNodeId);
  if (!insight) return;
  createContentIdea(insight);
});

document.getElementById("closeInsightModal").addEventListener("click", closeInsightModal);
document.getElementById("insightModal").addEventListener("click", (event) => {
  if (event.target.id === "insightModal") closeInsightModal();
});

document.getElementById("insightForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const signal = state.signals.find((item) => item.id === selectedNodeId);
  if (!signal) return;

  const form = new FormData(event.currentTarget);
  const insightId = `ins-${Date.now()}`;
  const title = form.get("title").toString().trim();
  const thesis = form.get("thesis").toString().trim();
  const why = form.get("why").toString().trim();
  const action = form.get("action").toString().trim();

  state.insights.unshift({
    id: insightId,
    title,
    thesis,
    audience: signal.audience,
    confidence: signal.confidence >= 75 ? "high" : signal.confidence >= 55 ? "medium" : "low",
    confidenceScore: signal.confidence,
    evidence: [signal.id],
    why,
    contentAngles: [
      `What ${signal.audience.toLowerCase()} are really saying`,
      `The market signal inside ${formatType(signal.type).toLowerCase()}`,
      "Why this pattern matters now"
    ],
    action
  });

  const sourcePosition = graphLayout[signal.id] || { x: 380, y: 280 };
  graphLayout[insightId] = {
    x: Math.min(820, sourcePosition.x + 160),
    y: Math.max(80, Math.min(450, sourcePosition.y - 60))
  };
  graphEdges.push({ from: signal.id, to: insightId, type: "supports", strength: "strong" });

  selectedNodeId = insightId;
  closeInsightModal();
  saveState();
  saveGraphLayout();
  saveGraphEdges();
  render();
  switchView("briefs");
});

render();

function loadState() {
  const saved = localStorage.getItem("marketInsightGraphState");
  if (!saved) return structuredClone(seedState);
  try {
    return JSON.parse(saved);
  } catch {
    return structuredClone(seedState);
  }
}

function loadGraphLayout() {
  const saved = localStorage.getItem("marketInsightGraphLayout");
  if (!saved) return structuredClone(baseGraphLayout);
  try {
    return { ...structuredClone(baseGraphLayout), ...JSON.parse(saved) };
  } catch {
    return structuredClone(baseGraphLayout);
  }
}

function loadGraphEdges() {
  const saved = localStorage.getItem("marketInsightGraphEdges");
  if (!saved) return structuredClone(baseGraphEdges);
  try {
    return JSON.parse(saved);
  } catch {
    return structuredClone(baseGraphEdges);
  }
}

function saveState() {
  localStorage.setItem("marketInsightGraphState", JSON.stringify(state));
}

function saveGraphLayout() {
  localStorage.setItem("marketInsightGraphLayout", JSON.stringify(graphLayout));
}

function saveGraphEdges() {
  localStorage.setItem("marketInsightGraphEdges", JSON.stringify(graphEdges));
}

function switchView(viewName) {
  Object.entries(views).forEach(([name, element]) => {
    element.classList.toggle("view-active", name === viewName);
  });
  document.querySelectorAll(".nav-item").forEach((item) => {
    item.classList.toggle("active", item.dataset.view === viewName);
  });
  if (viewName === "graph") renderGraph();
}

function render() {
  renderMetrics();
  renderSignals();
  renderBriefs();
  renderGraph();
  renderDetail();
}

function renderMetrics() {
  const averageConfidence = Math.round(
    state.insights.reduce((sum, insight) => sum + insight.confidenceScore, 0) / state.insights.length
  );

  document.getElementById("metricEvidence").textContent = state.evidence.length;
  document.getElementById("metricSignals").textContent = state.signals.length;
  document.getElementById("metricInsights").textContent = state.insights.length;
  document.getElementById("metricConfidence").textContent = `${averageConfidence}%`;
}

function renderSignals() {
  const signalList = document.getElementById("signalList");
  signalList.innerHTML = "";

  state.signals.forEach((signal) => {
    const item = document.createElement("button");
    item.className = "signal-item";
    item.type = "button";
    item.dataset.type = signal.type;
    item.addEventListener("click", () => {
      selectedNodeId = signal.id;
      switchView("graph");
    });

    item.innerHTML = `
      <p>${escapeHtml(signal.statement)}</p>
      <div class="signal-meta">
        <span class="tag">${formatType(signal.type)}</span>
        <span class="tag">${escapeHtml(signal.audience)}</span>
        <span class="tag">${signal.confidence}% confidence</span>
      </div>
    `;

    signalList.appendChild(item);
  });
}

function renderBriefs() {
  const briefsGrid = document.getElementById("briefsGrid");
  briefsGrid.innerHTML = "";

  state.insights.forEach((insight) => {
    const brief = document.createElement("article");
    brief.className = "brief";
    brief.innerHTML = `
      <div class="section-heading">
        <div>
          <p class="eyebrow">Insight brief</p>
          <h2>${escapeHtml(insight.title)}</h2>
        </div>
        <span class="confidence ${insight.confidence}">${insight.confidence}</span>
      </div>
      <p>${escapeHtml(insight.thesis)}</p>
      <div class="brief-section">
        <strong>Why it matters</strong>
        <p>${escapeHtml(insight.why)}</p>
      </div>
      <div class="brief-section">
        <strong>Content angles</strong>
        <p>${insight.contentAngles.map(escapeHtml).join("<br>")}</p>
      </div>
      <div class="brief-section">
        <strong>Strategic action</strong>
        <p>${escapeHtml(insight.action)}</p>
      </div>
      <div class="brief-meta">
        <span class="tag">${escapeHtml(insight.audience)}</span>
        <span class="tag">${insight.evidence.length} linked signals</span>
      </div>
    `;
    briefsGrid.appendChild(brief);
  });
}

function renderGraph() {
  const svg = document.getElementById("graphCanvas");
  svg.innerHTML = "";

  const nodes = getGraphNodes();
  ensureGraphLayout(nodes);
  const edges = getGraphEdges();
  const visibleNodeIds = new Set(
    nodes.filter((node) => graphFilter === "all" || node.kind === graphFilter).map((node) => node.id)
  );

  edges.forEach((edge) => {
    if (!visibleNodeIds.has(edge.from) || !visibleNodeIds.has(edge.to)) return;
    const from = graphLayout[edge.from];
    const to = graphLayout[edge.to];
    if (!from || !to) return;
    const line = createSvgElement("line", {
      x1: from.x,
      y1: from.y,
      x2: to.x,
      y2: to.y,
      class: `graph-link ${edge.strength}`
    });
    svg.appendChild(line);
  });

  nodes.forEach((node) => {
    if (!visibleNodeIds.has(node.id)) return;
    const position = graphLayout[node.id];
    if (!position) return;
    const style = nodeStyles[node.kind];
    const group = createSvgElement("g", {
      class: "graph-node",
      transform: `translate(${position.x} ${position.y})`,
      tabindex: "0",
      role: "button",
      "aria-label": node.title
    });

    group.addEventListener("click", () => {
      if (draggingNodeId) return;
      selectedNodeId = node.id;
      renderDetail();
      highlightSelectedNode();
    });

    group.addEventListener("pointerdown", (event) => {
      const point = getSvgPoint(svg, event);
      draggingNodeId = node.id;
      dragOffset = {
        x: point.x - graphLayout[node.id].x,
        y: point.y - graphLayout[node.id].y
      };
      group.setPointerCapture(event.pointerId);
    });

    group.addEventListener("pointermove", (event) => {
      if (draggingNodeId !== node.id) return;
      const point = getSvgPoint(svg, event);
      graphLayout[node.id] = {
        x: clamp(point.x - dragOffset.x, 70, 830),
        y: clamp(point.y - dragOffset.y, 70, 455)
      };
      group.setAttribute("transform", `translate(${graphLayout[node.id].x} ${graphLayout[node.id].y})`);
    });

    group.addEventListener("pointerup", () => {
      if (draggingNodeId !== node.id) return;
      draggingNodeId = null;
      saveGraphLayout();
      selectedNodeId = node.id;
      renderGraph();
      renderDetail();
    });

    const circle = createSvgElement("circle", {
      cx: 0,
      cy: 0,
      r: style.radius,
      class: "node-ring",
      stroke: node.id === selectedNodeId ? "#c75146" : style.color
    });
    group.appendChild(circle);

    const title = createSvgElement("text", {
      x: 0,
      y: -4,
      class: "node-text"
    });
    title.textContent = compactTitle(node.title);
    group.appendChild(title);

    const sub = createSvgElement("text", {
      x: 0,
      y: 17,
      class: "node-subtext"
    });
    sub.textContent = formatType(node.kind);
    group.appendChild(sub);

    svg.appendChild(group);
  });
}

function renderDetail() {
  const node = getGraphNodes().find((item) => item.id === selectedNodeId) || getGraphNodes()[0];
  const linked = getGraphEdges()
    .filter((edge) => edge.from === node.id || edge.to === node.id)
    .map((edge) => {
      const linkedId = edge.from === node.id ? edge.to : edge.from;
      const linkedNode = getGraphNodes().find((item) => item.id === linkedId);
      return { edge, node: linkedNode };
    })
    .filter((item) => item.node);

  document.getElementById("detailTitle").textContent = node.title;
  document.getElementById("detailSummary").textContent = node.summary;
  document.getElementById("detailMeta").innerHTML = `
    <span class="tag">${formatType(node.kind)}</span>
    <span class="tag">${escapeHtml(node.audience || "Market")}</span>
  `;

  const promoteButton = document.getElementById("promoteNode");
  const contentButton = document.getElementById("contentNode");
  promoteButton.hidden = node.kind !== "signal";
  contentButton.hidden = node.kind !== "insight";

  const linkedList = document.getElementById("linkedList");
  linkedList.innerHTML = "";
  linked.forEach(({ edge, node: linkedNode }) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "node-card";
    card.addEventListener("click", () => {
      selectedNodeId = linkedNode.id;
      renderGraph();
      renderDetail();
    });
    card.innerHTML = `
      <span>${formatType(edge.type)}</span>
      <strong>${escapeHtml(linkedNode.title)}</strong>
    `;
    linkedList.appendChild(card);
  });
}

function highlightSelectedNode() {
  renderGraph();
}

function openInsightModal(signal) {
  document.getElementById("insightTitleInput").value = suggestInsightTitle(signal);
  document.getElementById("insightThesisInput").value = signal.statement;
  document.getElementById("insightWhyInput").value =
    "This pattern may reveal a useful market pressure worth tracking and testing in content, positioning, or offer design.";
  document.getElementById("insightActionInput").value =
    "Collect more evidence and test one content angle against this signal.";
  document.getElementById("insightModal").hidden = false;
  document.getElementById("insightTitleInput").focus();
}

function closeInsightModal() {
  document.getElementById("insightModal").hidden = true;
  document.getElementById("insightForm").reset();
}

function createContentIdea(insight) {
  const contentId = `con-${Date.now()}`;
  const title = insight.contentAngles[0] || `Content from ${insight.title}`;
  state.contentIdeas.unshift({
    id: contentId,
    title,
    summary: `A draft angle based on the insight "${insight.title}".`,
    sourceInsight: insight.id
  });

  const sourcePosition = graphLayout[insight.id] || { x: 500, y: 280 };
  graphLayout[contentId] = {
    x: Math.min(830, sourcePosition.x + 150),
    y: Math.min(455, sourcePosition.y + 100)
  };
  graphEdges.push({ from: insight.id, to: contentId, type: "leads_to_content", strength: "strong" });
  selectedNodeId = contentId;
  saveState();
  saveGraphLayout();
  saveGraphEdges();
  render();
}

function suggestInsightTitle(signal) {
  const type = formatType(signal.type);
  if (signal.type === "pain_point") return `${signal.audience} Need A Better Way`;
  if (signal.type === "objection") return `Trust Barrier: ${signal.audience}`;
  if (signal.type === "competitor_move") return `Competitors Are Reframing The Category`;
  if (signal.type === "language_pattern") return `Market Language Is Shifting`;
  return `${type} Emerging In The Market`;
}

function getGraphEdges() {
  const edgeKeys = new Set(graphEdges.map((edge) => `${edge.from}:${edge.to}:${edge.type}`));
  const derivedEdges = [];

  state.insights.forEach((insight) => {
    insight.evidence.forEach((signalId) => {
      const key = `${signalId}:${insight.id}:supports`;
      if (!edgeKeys.has(key)) {
        derivedEdges.push({ from: signalId, to: insight.id, type: "supports", strength: "normal" });
        edgeKeys.add(key);
      }
    });
  });

  state.contentIdeas.forEach((idea) => {
    if (!idea.sourceInsight) return;
    const key = `${idea.sourceInsight}:${idea.id}:leads_to_content`;
    if (!edgeKeys.has(key)) {
      derivedEdges.push({ from: idea.sourceInsight, to: idea.id, type: "leads_to_content", strength: "normal" });
      edgeKeys.add(key);
    }
  });

  return [...graphEdges, ...derivedEdges];
}

function ensureGraphLayout(nodes) {
  let changed = false;
  nodes.forEach((node, index) => {
    if (graphLayout[node.id]) return;
    graphLayout[node.id] = getFallbackPosition(node.kind, index);
    changed = true;
  });
  if (changed) saveGraphLayout();
}

function getFallbackPosition(kind, index) {
  const rows = {
    signal: 360,
    insight: 210,
    content: 430
  };
  const y = rows[kind] || 280;
  return {
    x: 120 + ((index * 137) % 680),
    y: y + ((index % 2) * 24)
  };
}

function getGraphNodes() {
  const insightNodes = state.insights.map((insight) => ({
    id: insight.id,
    kind: "insight",
    title: insight.title,
    summary: insight.thesis,
    audience: insight.audience
  }));

  const signalNodes = state.signals.map((signal) => ({
    id: signal.id,
    kind: "signal",
    title: formatType(signal.type),
    summary: signal.statement,
    audience: signal.audience
  }));

  const contentNodes = state.contentIdeas.map((idea) => ({
    id: idea.id,
    kind: "content",
    title: idea.title,
    summary: idea.summary,
    audience: "Content"
  }));

  return [...insightNodes, ...signalNodes, ...contentNodes];
}

function createSvgElement(tagName, attributes) {
  const element = document.createElementNS("http://www.w3.org/2000/svg", tagName);
  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
  return element;
}

function getSvgPoint(svg, event) {
  const point = svg.createSVGPoint();
  point.x = event.clientX;
  point.y = event.clientY;
  return point.matrixTransform(svg.getScreenCTM().inverse());
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function compactTitle(title) {
  if (title.length <= 18) return title;
  const words = title.split(" ");
  if (words.length === 1) return `${title.slice(0, 16)}...`;
  return words.slice(0, 2).join(" ");
}

function formatType(value) {
  return value
    .replaceAll("_", " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
