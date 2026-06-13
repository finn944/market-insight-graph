// ═══════════════════════════════════════════════════════════════════════
// FINN-WILSON. Intelligence Engine
// Three pillars: Network · Insight Graph · Content Studio
// ═══════════════════════════════════════════════════════════════════════

// ── Brand constants ────────────────────────────────────────────────────
const FW_NAVY = '#182241';
const FW_WHITE = '#ffffff';
const FW_GREY = '#f2f2f2';

// ── Seed insight state ─────────────────────────────────────────────────
const seedState = {
  evidence: [
    { id: "ev-1", source: "Founder LinkedIn comments", type: "audience_voice", statement: "Operators want strategic clarity but recoil from heavyweight planning rituals.", audience: "Independent founders", capturedAt: "Today" },
    { id: "ev-2", source: "Competitor positioning pages", type: "competitor", statement: "AI strategy tools are converging around templates, dashboards, and weekly planning prompts.", audience: "Small teams", capturedAt: "Yesterday" },
    { id: "ev-3", source: "Owned notes", type: "owned_feedback", statement: "The strongest language is about sharper thinking, not productivity or automation.", audience: "Consultants and creators", capturedAt: "This week" }
  ],
  signals: [
    { id: "sig-1", type: "pain_point", source: "Founder LinkedIn comments", statement: "Strategy feels important but too abstract to use in the day-to-day.", audience: "Independent founders", confidence: 78 },
    { id: "sig-2", type: "competitor_move", source: "Competitor positioning pages", statement: "Competitors are packaging AI strategy as faster planning, not deeper market understanding.", audience: "Small teams", confidence: 72 },
    { id: "sig-3", type: "language_pattern", source: "Owned notes", statement: "People respond to language around clarity, taste, judgment, and market feel.", audience: "Consultants and creators", confidence: 66 },
    { id: "sig-4", type: "objection", source: "Customer conversations", statement: "Users will not trust generated strategy unless they can inspect the evidence trail.", audience: "Solo operators", confidence: 82 }
  ],
  insights: [
    { id: "ins-1", title: "Strategy Without Planning Theater", thesis: "Independent operators want clearer strategic direction, but they resist tools that feel corporate, slow, or detached from market reality.", audience: "Independent founders and operators", confidence: "high", confidenceScore: 78, evidence: ["sig-1", "sig-3", "sig-4"], why: "A lightweight insight graph could position strategy as a living practice rather than a static planning document.", contentAngles: ["Strategy should feel like a working instrument, not a PDF.", "Why smart founders avoid strategy work.", "The difference between clarity and planning theater."], action: "Prototype a manual insight workflow and test messaging around living strategy." },
    { id: "ins-2", title: "Evidence Trails Create Trust", thesis: "AI-generated strategy becomes more credible when every claim can be traced back to market evidence.", audience: "Strategy-minded creators", confidence: "medium", confidenceScore: 70, evidence: ["sig-2", "sig-4"], why: "Traceability can become a core product differentiator against generic AI content and planning tools.", contentAngles: ["The future of AI strategy is evidence-backed.", "A good insight should show its receipts.", "Why generic strategy advice feels hollow."], action: "Make source-backed reasoning visible in every insight brief." }
  ],
  contentIdeas: [
    { id: "con-1", title: "Strategy As A Living Map", summary: "A post about replacing static plans with a connected evidence graph.", sourceInsight: "ins-1" },
    { id: "con-2", title: "Show The Evidence Trail", summary: "A short essay on why market-backed insight beats generic AI synthesis.", sourceInsight: "ins-2" }
  ]
};

// ── Seed profiles (real tier-1 contacts) ──────────────────────────────
const seedProfiles = [
  {
    id: 'prof-froj-001', name: 'Kristofer Fröjd', role: 'Energy Storage & Flexibility', company: 'Nordic Energy', tier: 1, initials: 'KF', location: 'Stockholm, Sweden', status: 'warm',
    tags: ['bess', 'nordic', 'flexibility', 'energy-storage'],
    personal: { background: 'Nordic energy market insider with deep BESS economics expertise. Vattenfall-adjacent. Has hands-on flexibility market experience in Nordic/Ellevio context.', kids: '', birthday: '', phone: '', email: '', hobbies: '' },
    professional: { priority: 'BESS merchant repricing — tracking the shift from arbitrage to behind-the-meter anchor', expertise: 'BESS economics, Nordic flexibility market, energy storage project development', pain: 'Merchant BESS returns compressing — seeking behind-the-meter model validation', is_decision_maker: true },
    relationship: { strength: 70, last_contact: '2026-06-13', next_action: 'Send depth reply on BESS arbitrage thesis (timing is your call — draft ready)', next_date: '', touch_points: [{ date: '2026-06-13', channel: 'HeyReach', note: 'Shared comprehensive BESS merchant thesis in reply. Strong signal quality — 2 content posts derived (Posts 2 + 8).' }] },
    strategic: { why: 'Primary BESS intelligence source. Nordic market intro pathway. Thesis convergence with your behind-the-meter positioning.', deal: 'medium', signal_ids: [] }
  },
  {
    id: 'prof-fors-002', name: 'Steve Forster', role: 'County Councillor & EV Consultant', company: 'Hampshire CC + Osprey Charging', tier: 1, initials: 'SF', location: 'Hampshire, UK', status: 'hot',
    tags: ['public-charging', 'caas', 'osprey', 'council', 'uk-policy', 'URGENT'],
    personal: { background: 'Former Hampshire County Council leader, now operating as EV charging consultant for Osprey. Dual role: council relationships and commercial instincts in the same person.', kids: '', birthday: '', phone: '', email: '', hobbies: '' },
    professional: { priority: 'Osprey CaaS proposal — 7 active sites, shared personal contact details (Jun 13)', expertise: 'Public charging deployment, council procurement, EV policy, CaaS commercial models', pain: 'Making CaaS model work commercially at site level with council budget constraints', is_decision_maker: true },
    relationship: { strength: 80, last_contact: '2026-06-13', next_action: 'URGENT: Decide — engage directly on Osprey CaaS proposal OR hand to Prologis account team. He replied Jun 13 with 7 sites + personal contacts. Act before interest cools.', next_date: '2026-06-14', touch_points: [{ date: '2026-06-13', channel: 'HeyReach', note: 'Replied with 7 specific sites + personal contact details. Live commercial CaaS proposal on the table. Requires a decision now.' }] },
    strategic: { why: 'Live CaaS opportunity. Council relationships = planning/procurement access. UK public charging sector intel. Could become first paid engagement.', deal: 'high', signal_ids: [] }
  },
  {
    id: 'prof-vanh-003', name: 'Matthijs van den Heuvel', role: 'Operations / Fleet', company: 'European Logistics', tier: 1, initials: 'MvH', location: 'Netherlands', status: 'warm',
    tags: ['hdc', 'shared-charging', 'depot', 'netherlands'],
    personal: { background: 'NL-based logistics/fleet operator. Working on opening depot charging to supplier trucks. Practical operator mindset — not a strategy person, a do-it person.', kids: '', birthday: '', phone: '', email: '', hobbies: '' },
    professional: { priority: 'Shared depot charging (HDC) — trying to open site chargers to supplier vehicles commercially', expertise: 'Fleet operations, depot management, shared infrastructure logistics', pain: 'Commercial model for HDC: lease, metering, liability — none have standard answers yet', is_decision_maker: true },
    relationship: { strength: 65, last_contact: '2026-06-12', next_action: 'Reply queued (#7) — respond to HDC commercial model question. Your Framework Post #4 was written from this signal.', next_date: '', touch_points: [{ date: '2026-06-12', channel: 'HeyReach', note: 'Asked about opening depot charging to supplier trucks (HDC). Triggered Framework Post #4 on shared charging commercial model.' }] },
    strategic: { why: 'Direct use case for your HDC framework. Potential SRA client — this is exactly the problem you solve. Netherlands = Prologis heartland.', deal: 'high', signal_ids: [] }
  },
  {
    id: 'prof-papa-004', name: 'Sarah Papamichalis', role: 'EV Charging Strategy', company: 'Shell Recharge / CPO sector', tier: 1, initials: 'SP', location: 'Europe', status: 'warm',
    tags: ['shell-recharge', 'cpo', 'public-charging', 'strategy'],
    personal: { background: 'Shell Recharge strategy/commercial background. Insider intel on the public charging market repricing story. Check Karen Peck thread before replying.', kids: '', birthday: '', phone: '', email: '', hobbies: '' },
    professional: { priority: 'Shell Recharge divestment context — CPO market strategic repositioning', expertise: 'Public EV charging, CPO operations, energy transition strategy', pain: 'Navigating the shift from infrastructure-return model to retail charging economics', is_decision_maker: true },
    relationship: { strength: 60, last_contact: '2026-06-12', next_action: 'Reply queued (#8) — read Karen Peck thread before responding', next_date: '', touch_points: [{ date: '2026-06-12', channel: 'HeyReach', note: 'Shell Recharge divestment intel — triggered Thesis Post #3. NOTE: read Karen Peck thread before replying.' }] },
    strategic: { why: 'CPO sector intelligence. Shell insider context on public charging model failure. Content source. Track the market through her.', deal: 'low', signal_ids: [] }
  },
  {
    id: 'prof-boer-005', name: 'Merlijn Borst', role: 'Business Development', company: 'Netlight Consulting', tier: 2, initials: 'MB', location: 'Netherlands', status: 'warm',
    tags: ['consulting', 'netlight', 'proposal'],
    personal: { background: 'BD manager at Netlight (Nordic consulting firm). Submitted formal proposal to Prologis Oct 2025. Not a peer — a BD contact. Don\'t book a meeting without a position.', kids: '', birthday: '', phone: '', email: '', hobbies: '' },
    professional: { priority: 'Netlight consulting proposal to Prologis (Oct 2025) — awaiting response', expertise: 'Consulting BD, Netlight service offering', pain: 'Waiting on Prologis response to proposal', is_decision_maker: false },
    relationship: { strength: 40, last_contact: '2026-06-12', next_action: 'Decide your proposal stance first — THEN book the meeting. Don\'t do it the other way round.', next_date: '', touch_points: [{ date: '2025-10-01', channel: 'Formal', note: 'Netlight submitted consulting proposal to Prologis.' }, { date: '2026-06-12', channel: 'HeyReach', note: 'Reached out wanting to book meeting. Decide proposal stance before engaging.' }] },
    strategic: { why: 'Not a peer contact — BD manager. Handle carefully. Decide your position on their proposal first.', deal: 'low', signal_ids: [] }
  }
];

// ── Connection targets (generated from insight themes) ─────────────────
const connectionTargets = [
  {
    role: 'Head of Fleet Electrification',
    companies: 'DHL Supply Chain · DB Schenker · Geodis · Kuehne+Nagel',
    region: 'Germany / Netherlands / France',
    why: 'These operators are making depot charging decisions now. Your 4-gate deployment framework maps exactly to their current pain.',
    search: '"fleet electrification" OR "EV fleet" site:linkedin.com/in + logistics',
    angle: 'Programme delivery at scale — not the technology question, the operating model one.',
    theme_dot: '#315f8c'
  },
  {
    role: 'Energy & Sustainability Director',
    companies: 'Segro · GLP · Goodman · Montea · CTP',
    region: 'Europe',
    why: 'Logistics REIT peers to Prologis. Behind-the-meter charging = asset value creation. Your BESS thesis is their CapEx decision.',
    search: '"energy" OR "sustainability" director logistics "real estate" site:linkedin.com/in',
    angle: 'Behind-the-meter as asset value driver — the BESS anchor story.',
    theme_dot: '#0f766e'
  },
  {
    role: 'Programme Director / Head of Electrification',
    companies: 'DSV · TNT / FedEx · DPD · PostNL · GLS',
    region: 'Netherlands / Belgium / Nordics',
    why: 'Running multi-site electrification programmes now. Your 4-gate framework is their exact problem — named.',
    search: '"electrification" OR "decarbonisation" programme director logistics NL OR BE site:linkedin.com/in',
    angle: 'The four points where programmes stall — and how not to hit all of them.',
    theme_dot: '#b7791f'
  },
  {
    role: 'Director of EV Infrastructure / CPO Strategy',
    companies: 'Gridserve · Pod Point · Mer · Allego · Electra',
    region: 'UK / Europe',
    why: 'Mid-tier CPOs figuring out where public charging goes post-Shell exit. Your operating model lens is exactly what they need.',
    search: '"EV infrastructure" OR "charging network" director UK Europe site:linkedin.com/in',
    angle: 'The operating model question that public charging still hasn\'t answered.',
    theme_dot: '#c75146'
  }
];

// ── Graph layout + edges ───────────────────────────────────────────────
const baseGraphLayout = { "ins-1": { x: 450, y: 170 }, "ins-2": { x: 590, y: 315 }, "sig-1": { x: 230, y: 130 }, "sig-2": { x: 735, y: 150 }, "sig-3": { x: 220, y: 340 }, "sig-4": { x: 450, y: 430 }, "con-1": { x: 690, y: 425 }, "con-2": { x: 805, y: 300 } };
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
const nodeStyles = { insight: { color: "#0f766e", radius: 54 }, signal: { color: "#315f8c", radius: 42 }, content: { color: "#b7791f", radius: 38 } };

// ── Runtime state ──────────────────────────────────────────────────────
let state = loadState();
let graphLayout = loadGraphLayout();
let graphEdges = loadGraphEdges();
let profiles = loadProfiles();
let selectedNodeId = "ins-1";
let graphFilter = "all";
let draggingNodeId = null;
let dragOffset = { x: 0, y: 0 };
let activeProfileId = null;

// Content studio state
let csSignals = [];
let csSelectedSignal = null;
let csCurrentFormat = 'teardown';
let csCurrentTemplate = 'quote';

// ── Views ──────────────────────────────────────────────────────────────
const views = {
  workspace: document.getElementById("workspaceView"),
  network: document.getElementById("networkView"),
  graph: document.getElementById("graphView"),
  content: document.getElementById("contentView"),
  briefs: document.getElementById("briefsView")
};

// ── Navigation ─────────────────────────────────────────────────────────
document.querySelectorAll(".nav-item[data-view]").forEach((button) => {
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

// ── Capture form ───────────────────────────────────────────────────────
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
  state.evidence.unshift({ id: evidenceId, source, type: "manual_capture", statement, audience, capturedAt: "Just now" });
  state.signals.unshift({ id: signalId, type, source, statement, audience, confidence: 58 });
  graphLayout[signalId] = { x: 120 + Math.random() * 650, y: 120 + Math.random() * 310 };
  graphEdges.push({ from: signalId, to: "ins-1", type: "possible_support", strength: "normal" });
  selectedNodeId = signalId;
  saveState(); saveGraphLayout(); saveGraphEdges();
  event.currentTarget.reset();
  render();
});

document.getElementById("clusterSignals").addEventListener("click", () => { selectedNodeId = "ins-1"; switchView("graph"); });
document.getElementById("focusCapture").addEventListener("click", () => { switchView("workspace"); document.getElementById("sourceInput").focus(); });
document.getElementById("resetDemo").addEventListener("click", () => {
  state = structuredClone(seedState);
  graphLayout = structuredClone(baseGraphLayout);
  graphEdges = structuredClone(baseGraphEdges);
  profiles = structuredClone(seedProfiles);
  saveState(); saveGraphLayout(); saveGraphEdges(); saveProfiles();
  selectedNodeId = "ins-1";
  render();
});

// ── Graph node actions ─────────────────────────────────────────────────
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

// ── Insight modal ──────────────────────────────────────────────────────
document.getElementById("closeInsightModal").addEventListener("click", closeInsightModal);
document.getElementById("insightModal").addEventListener("click", (e) => { if (e.target.id === "insightModal") closeInsightModal(); });
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
  state.insights.unshift({ id: insightId, title, thesis, audience: signal.audience, confidence: signal.confidence >= 75 ? "high" : signal.confidence >= 55 ? "medium" : "low", confidenceScore: signal.confidence, evidence: [signal.id], why, contentAngles: [`What ${signal.audience.toLowerCase()} are really saying`, `The market signal inside ${formatType(signal.type).toLowerCase()}`, "Why this pattern matters now"], action });
  const sp = graphLayout[signal.id] || { x: 380, y: 280 };
  graphLayout[insightId] = { x: Math.min(820, sp.x + 160), y: Math.max(80, Math.min(450, sp.y - 60)) };
  graphEdges.push({ from: signal.id, to: insightId, type: "supports", strength: "strong" });
  selectedNodeId = insightId;
  closeInsightModal(); saveState(); saveGraphLayout(); saveGraphEdges();
  render(); switchView("briefs");
});

// ── Network: add profile ───────────────────────────────────────────────
document.getElementById("addProfileBtn").addEventListener("click", () => { document.getElementById("addProfileModal").hidden = false; });
document.getElementById("closeAddProfile").addEventListener("click", () => { document.getElementById("addProfileModal").hidden = true; });
document.getElementById("addProfileModal").addEventListener("click", (e) => { if (e.target === e.currentTarget) e.currentTarget.hidden = true; });
document.getElementById("addProfileForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const form = new FormData(e.currentTarget);
  const name = form.get("name").toString().trim();
  if (!name) return;
  const words = name.split(" ");
  const initials = words.length >= 2 ? words[0][0] + words[words.length-1][0] : name.slice(0,2);
  const profile = {
    id: `prof-${Date.now()}`, name, role: form.get("role").toString(), company: form.get("company").toString(),
    tier: parseInt(form.get("tier")) || 2, initials: initials.toUpperCase(), location: form.get("location").toString(), status: 'cold',
    tags: [], personal: { background: form.get("background").toString(), kids: '', birthday: '', phone: '', email: '', hobbies: '' },
    professional: { priority: '', expertise: '', pain: '', is_decision_maker: false },
    relationship: { strength: 20, last_contact: new Date().toISOString().slice(0,10), next_action: form.get("next_action").toString(), next_date: '', touch_points: [] },
    strategic: { why: form.get("why").toString(), deal: 'low', signal_ids: [] }
  };
  profiles.unshift(profile);
  saveProfiles();
  renderNetwork();
  document.getElementById("addProfileModal").hidden = true;
  e.currentTarget.reset();
});

// ── Network: profile modal ─────────────────────────────────────────────
document.getElementById("closeProfileModal").addEventListener("click", closeProfile);
document.getElementById("pmCloseFooter").addEventListener("click", closeProfile);
document.getElementById("profileModal").addEventListener("click", (e) => { if (e.target.id === "profileModal") closeProfile(); });
document.getElementById("pmCreateContent").addEventListener("click", () => {
  closeProfile();
  switchView("content");
});
document.getElementById("pmLogTouchBtn").addEventListener("click", () => {
  document.getElementById("touchPointModal").hidden = false;
  document.getElementById("touchPointForm").elements["date"].value = new Date().toISOString().slice(0,10);
});
document.getElementById("pmEditPersonalBtn").addEventListener("click", () => {
  const profile = profiles.find(p => p.id === activeProfileId);
  if (!profile) return;
  const form = document.getElementById("editPersonalForm");
  form.elements["background"].value = profile.personal.background || '';
  form.elements["kids"].value = profile.personal.kids || '';
  form.elements["birthday"].value = profile.personal.birthday || '';
  form.elements["phone"].value = profile.personal.phone || '';
  form.elements["email"].value = profile.personal.email || '';
  form.elements["hobbies"].value = profile.personal.hobbies || '';
  form.elements["next_action"].value = profile.relationship.next_action || '';
  document.getElementById("editPersonalModal").hidden = false;
});

// ── Network: touch point log ───────────────────────────────────────────
document.getElementById("closeTouchModal").addEventListener("click", () => { document.getElementById("touchPointModal").hidden = true; });
document.getElementById("touchPointModal").addEventListener("click", (e) => { if (e.target.id === "touchPointModal") e.currentTarget.hidden = true; });
document.getElementById("touchPointForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const profile = profiles.find(p => p.id === activeProfileId);
  if (!profile) return;
  const form = new FormData(e.currentTarget);
  profile.relationship.touch_points.unshift({ date: form.get("date").toString(), channel: form.get("channel").toString(), note: form.get("note").toString() });
  profile.relationship.last_contact = form.get("date").toString();
  profile.relationship.strength = Math.min(100, profile.relationship.strength + 10);
  saveProfiles();
  document.getElementById("touchPointModal").hidden = true;
  e.currentTarget.reset();
  openProfile(activeProfileId); // refresh
});

// ── Network: edit personal intel ───────────────────────────────────────
document.getElementById("closeEditPersonal").addEventListener("click", () => { document.getElementById("editPersonalModal").hidden = true; });
document.getElementById("editPersonalModal").addEventListener("click", (e) => { if (e.target.id === "editPersonalModal") e.currentTarget.hidden = true; });
document.getElementById("editPersonalForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const profile = profiles.find(p => p.id === activeProfileId);
  if (!profile) return;
  const form = new FormData(e.currentTarget);
  profile.personal.background = form.get("background").toString();
  profile.personal.kids = form.get("kids").toString();
  profile.personal.birthday = form.get("birthday").toString();
  profile.personal.phone = form.get("phone").toString();
  profile.personal.email = form.get("email").toString();
  profile.personal.hobbies = form.get("hobbies").toString();
  profile.relationship.next_action = form.get("next_action").toString();
  saveProfiles();
  document.getElementById("editPersonalModal").hidden = true;
  openProfile(activeProfileId); // refresh
});

// ── Content Studio: format tabs ────────────────────────────────────────
document.querySelectorAll(".cs-fmt-tab").forEach(btn => {
  btn.addEventListener("click", () => setCsFormat(btn.dataset.fmt));
});

// Content Studio: graphic template tabs
document.querySelectorAll(".cs-tpl").forEach(btn => {
  btn.addEventListener("click", () => {
    csCurrentTemplate = btn.dataset.tpl;
    document.querySelectorAll(".cs-tpl").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderCsGraphic();
  });
});

// Content Studio: graphic inputs
["csGcHeadline","csGcSubtext","csGcStat","csGcStatLabel"].forEach(id => {
  const el = document.getElementById(id);
  if (el) el.addEventListener("input", renderCsGraphic);
});

// Content Studio: textarea
const csTA = document.getElementById("csTextarea");
const csCC = document.getElementById("csCharCount");
csTA.addEventListener("input", () => {
  const n = csTA.value.length;
  csCC.textContent = n + " / 3000";
  csCC.className = "cs-char-count" + (n > 2800 ? " cs-char-over" : n > 2500 ? " cs-char-near" : "");
  runVoiceCheck(csTA.value);
  renderCsGraphic();
});

// Content Studio: copy post
document.getElementById("csBtnCopy").addEventListener("click", function() {
  if (!csTA.value) return;
  navigator.clipboard.writeText(csTA.value).then(() => {
    this.textContent = "Copied!";
    setTimeout(() => { this.textContent = "Copy"; }, 2000);
  });
});

// Content Studio: open LinkedIn
document.getElementById("csBtnLinkedIn").addEventListener("click", () => {
  if (csTA.value) navigator.clipboard.writeText(csTA.value);
  window.open("https://www.linkedin.com/feed/", "_blank");
});

// Content Studio: save draft
document.getElementById("csBtnSave").addEventListener("click", function() {
  const drafts = JSON.parse(localStorage.getItem("fw-content-drafts") || "[]");
  drafts.unshift({ id: Date.now(), format: csCurrentFormat, text: csTA.value, signal: csSelectedSignal?.id, saved: new Date().toISOString() });
  localStorage.setItem("fw-content-drafts", JSON.stringify(drafts.slice(0, 20)));
  this.textContent = "Saved ✓";
  setTimeout(() => { this.textContent = "Save draft"; }, 2000);
});

// Content Studio: download PNG
document.getElementById("csBtnDownload").addEventListener("click", () => {
  const svgEl = document.querySelector("#csGraphicPreview svg");
  if (!svgEl) return;
  const isSquare = csCurrentTemplate === "stat";
  const w = isSquare ? 1080 : 1200;
  const h = isSquare ? 1080 : 630;
  const svgStr = new XMLSerializer().serializeToString(svgEl);
  const blob = new Blob([svgStr], { type: "image/svg+xml" });
  const url = URL.createObjectURL(blob);
  const img = new Image();
  img.onload = () => {
    const canvas = document.createElement("canvas");
    canvas.width = w; canvas.height = h;
    canvas.getContext("2d").drawImage(img, 0, 0, w, h);
    URL.revokeObjectURL(url);
    const a = document.createElement("a");
    a.download = `fw-${csCurrentTemplate}-${Date.now()}.png`;
    a.href = canvas.toDataURL("image/png");
    a.click();
  };
  img.src = url;
});

// Content Studio: copy SVG
document.getElementById("csBtnCopySvg").addEventListener("click", function() {
  const svgEl = document.querySelector("#csGraphicPreview svg");
  if (!svgEl) return;
  navigator.clipboard.writeText(new XMLSerializer().serializeToString(svgEl)).then(() => {
    this.textContent = "Copied!";
    setTimeout(() => { this.textContent = "Copy SVG"; }, 2000);
  });
});

// Content Studio: add signal modal
document.getElementById("csAddSignalBtn").addEventListener("click", () => { document.getElementById("csAddSignalModal").hidden = false; });
document.getElementById("closeCsAddSignal").addEventListener("click", () => { document.getElementById("csAddSignalModal").hidden = true; });
document.getElementById("csAddSignalModal").addEventListener("click", (e) => { if (e.target.id === "csAddSignalModal") e.currentTarget.hidden = true; });
document.getElementById("csAddSignalForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const form = new FormData(e.currentTarget);
  const text = form.get("text").toString().trim();
  if (!text) return;
  csSignals.unshift({ id: `cs-${Date.now()}`, format: form.get("format").toString(), source: form.get("source").toString() || "Manual", text });
  renderCsSignals();
  document.getElementById("csAddSignalModal").hidden = true;
  e.currentTarget.reset();
});

// ── Init ───────────────────────────────────────────────────────────────
render();
renderCsGraphic(); // pre-render default graphic

// ════════════════════════════════════════════════════════════════════════
// PERSISTENCE
// ════════════════════════════════════════════════════════════════════════

function loadState() {
  const saved = localStorage.getItem("marketInsightGraphState");
  if (!saved) return structuredClone(seedState);
  try { return JSON.parse(saved); } catch { return structuredClone(seedState); }
}
function loadGraphLayout() {
  const saved = localStorage.getItem("marketInsightGraphLayout");
  if (!saved) return structuredClone(baseGraphLayout);
  try { return { ...structuredClone(baseGraphLayout), ...JSON.parse(saved) }; } catch { return structuredClone(baseGraphLayout); }
}
function loadGraphEdges() {
  const saved = localStorage.getItem("marketInsightGraphEdges");
  if (!saved) return structuredClone(baseGraphEdges);
  try { return JSON.parse(saved); } catch { return structuredClone(baseGraphEdges); }
}
function loadProfiles() {
  const saved = localStorage.getItem("fw-network-profiles");
  if (!saved) return structuredClone(seedProfiles);
  try { return JSON.parse(saved); } catch { return structuredClone(seedProfiles); }
}
function saveState() { localStorage.setItem("marketInsightGraphState", JSON.stringify(state)); }
function saveGraphLayout() { localStorage.setItem("marketInsightGraphLayout", JSON.stringify(graphLayout)); }
function saveGraphEdges() { localStorage.setItem("marketInsightGraphEdges", JSON.stringify(graphEdges)); }
function saveProfiles() { localStorage.setItem("fw-network-profiles", JSON.stringify(profiles)); }

// ════════════════════════════════════════════════════════════════════════
// ROUTING
// ════════════════════════════════════════════════════════════════════════

function switchView(viewName) {
  Object.entries(views).forEach(([name, element]) => {
    element.classList.toggle("view-active", name === viewName);
  });
  document.querySelectorAll(".nav-item").forEach((item) => {
    item.classList.toggle("active", item.dataset.view === viewName);
  });
  if (viewName === "graph") renderGraph();
  if (viewName === "network") renderNetwork();
  if (viewName === "content") initCsView();
}

// ════════════════════════════════════════════════════════════════════════
// RENDER — CORE
// ════════════════════════════════════════════════════════════════════════

function render() {
  renderMetrics();
  renderSignals();
  renderBriefs();
  renderNetwork();
  renderGraph();
  renderDetail();
  updateSidebarStats();
}

function updateSidebarStats() {
  document.getElementById("srcNetwork").textContent = profiles.length;
  document.getElementById("srcSignals").textContent = state.signals.length;
  document.getElementById("srcInsights").textContent = state.insights.length;
  const avg = Math.round(state.insights.reduce((s, i) => s + i.confidenceScore, 0) / (state.insights.length || 1));
  document.getElementById("srcConfidence").textContent = avg + "%";
}

function renderMetrics() {
  const avg = Math.round(state.insights.reduce((s, i) => s + i.confidenceScore, 0) / (state.insights.length || 1));
  document.getElementById("metricEvidence").textContent = state.evidence.length;
  document.getElementById("metricSignals").textContent = state.signals.length;
  document.getElementById("metricInsights").textContent = state.insights.length;
  document.getElementById("metricConfidence").textContent = avg + "%";
}

function renderSignals() {
  const signalList = document.getElementById("signalList");
  signalList.innerHTML = "";
  state.signals.forEach((signal) => {
    const item = document.createElement("button");
    item.className = "signal-item"; item.type = "button"; item.dataset.type = signal.type;
    item.addEventListener("click", () => { selectedNodeId = signal.id; switchView("graph"); });
    item.innerHTML = `<p>${escapeHtml(signal.statement)}</p><div class="signal-meta"><span class="tag">${formatType(signal.type)}</span><span class="tag">${escapeHtml(signal.audience)}</span><span class="tag">${signal.confidence}% confidence</span></div>`;
    signalList.appendChild(item);
  });
}

function renderBriefs() {
  const briefsGrid = document.getElementById("briefsGrid");
  briefsGrid.innerHTML = "";
  state.insights.forEach((insight) => {
    const brief = document.createElement("article");
    brief.className = "brief";
    brief.innerHTML = `<div class="section-heading"><div><p class="eyebrow">Insight brief</p><h2>${escapeHtml(insight.title)}</h2></div><span class="confidence ${insight.confidence}">${insight.confidence}</span></div><p>${escapeHtml(insight.thesis)}</p><div class="brief-section"><strong>Why it matters</strong><p>${escapeHtml(insight.why)}</p></div><div class="brief-section"><strong>Content angles</strong><p>${insight.contentAngles.map(escapeHtml).join("<br>")}</p></div><div class="brief-section"><strong>Strategic action</strong><p>${escapeHtml(insight.action)}</p></div><div class="brief-meta"><span class="tag">${escapeHtml(insight.audience)}</span><span class="tag">${insight.evidence.length} linked signals</span></div>`;
    briefsGrid.appendChild(brief);
  });
}

// ════════════════════════════════════════════════════════════════════════
// NETWORK VIEW
// ════════════════════════════════════════════════════════════════════════

function renderNetwork() {
  renderConnectionTargets();
  renderProfileGrid("tier1Grid", 1);
  renderProfileGrid("tier2Grid", 2);
}

function renderConnectionTargets() {
  const container = document.getElementById("connectionTargets");
  container.innerHTML = connectionTargets.map(t => `
    <div class="gen-target">
      <div class="gen-target-header">
        <span class="gen-target-dot" style="background:${t.theme_dot}"></span>
        <strong class="gen-target-role">${t.role}</strong>
      </div>
      <div class="gen-target-companies">${t.companies}</div>
      <p class="gen-target-why">${t.why}</p>
      <div class="gen-target-angle">"${t.angle}"</div>
      <div class="gen-target-search">🔍 ${t.search}</div>
    </div>`).join("");
}

function renderProfileGrid(gridId, tier) {
  const grid = document.getElementById(gridId);
  const tierProfiles = profiles.filter(p => p.tier === tier);
  if (tierProfiles.length === 0) {
    grid.innerHTML = `<div class="profile-empty">No ${tier === 1 ? "tier 1" : "tier 2"} profiles yet. Add from your network.</div>`;
    return;
  }
  grid.innerHTML = tierProfiles.map(p => {
    const urgentTag = p.status === 'hot' || (p.relationship.next_date && new Date(p.relationship.next_date) <= new Date()) ? '<span class="profile-urgent">!</span>' : '';
    return `
    <button class="profile-card" data-profile-id="${p.id}" type="button">
      <div class="profile-card-top">
        <div class="profile-avatar" style="background:${avatarColor(p.id)}">${escapeHtml(p.initials)}</div>
        ${urgentTag}
      </div>
      <div class="profile-name">${escapeHtml(p.name)}</div>
      <div class="profile-role">${escapeHtml(p.role)}<br><span style="color:#9aa7af">${escapeHtml(p.company)}</span></div>
      <div class="profile-footer">
        <span class="profile-status status-${p.status}">${capitalise(p.status)}</span>
        <span class="profile-strength">${p.relationship.strength}%</span>
      </div>
      ${p.relationship.next_action ? `<div class="profile-next-action">${escapeHtml(p.relationship.next_action.slice(0,60))}${p.relationship.next_action.length > 60 ? "…" : ""}</div>` : ""}
    </button>`;
  }).join("");
  grid.querySelectorAll(".profile-card").forEach(card => {
    card.addEventListener("click", () => openProfile(card.dataset.profileId));
  });
}

function openProfile(id) {
  const p = profiles.find(pr => pr.id === id);
  if (!p) return;
  activeProfileId = id;

  document.getElementById("pmAvatar").textContent = p.initials;
  document.getElementById("pmAvatar").style.background = avatarColor(p.id);
  document.getElementById("pmName").textContent = p.name;
  document.getElementById("pmRoleCompany").textContent = `${p.role} · ${p.company}`;
  document.getElementById("pmLocation").textContent = p.location;

  const badge = document.getElementById("pmStatusBadge");
  badge.textContent = capitalise(p.status);
  badge.className = "pm-status-badge " + (p.status === "hot" ? "hot" : p.status === "strong" ? "strong" : "");

  document.getElementById("pmPriority").textContent = p.professional.priority || "—";
  document.getElementById("pmExpertise").textContent = p.professional.expertise || "—";
  document.getElementById("pmBackground").textContent = p.personal.background || "—";
  document.getElementById("pmKids").textContent = p.personal.kids || "—";
  document.getElementById("pmBirthday").textContent = p.personal.birthday || "—";
  document.getElementById("pmPhone").textContent = p.personal.phone || "—";
  document.getElementById("pmWhyMatters").textContent = p.strategic.why || "—";

  const nextAction = document.getElementById("pmNextAction");
  nextAction.textContent = p.relationship.next_action || "No next action set.";
  nextAction.className = "pm-next-action" + (p.status === "hot" ? " urgent" : "");

  const tpContainer = document.getElementById("pmTouchPoints");
  if (p.relationship.touch_points.length === 0) {
    tpContainer.innerHTML = '<p style="color:#9aa7af;font-size:13px">No touch points logged yet.</p>';
  } else {
    tpContainer.innerHTML = p.relationship.touch_points.map(tp => `
      <div class="pm-touch">
        <div class="pm-touch-meta">
          <span class="pm-touch-date">${tp.date}</span>
          <span class="pm-touch-channel">${tp.channel}</span>
        </div>
        <p class="pm-touch-note">${escapeHtml(tp.note)}</p>
      </div>`).join("");
  }

  document.getElementById("profileModal").hidden = false;
}

function closeProfile() {
  document.getElementById("profileModal").hidden = true;
  activeProfileId = null;
}

function avatarColor(id) {
  const colors = ["#182241","#0f766e","#315f8c","#7c3aed","#b7791f","#c75146","#2f7d55"];
  let hash = 0;
  for (let i = 0; i < id.length; i++) hash = (hash * 31 + id.charCodeAt(i)) & 0xffffffff;
  return colors[Math.abs(hash) % colors.length];
}

function capitalise(s) { return s ? s[0].toUpperCase() + s.slice(1) : ""; }

// ════════════════════════════════════════════════════════════════════════
// GRAPH VIEW
// ════════════════════════════════════════════════════════════════════════

function renderGraph() {
  const svg = document.getElementById("graphCanvas");
  svg.innerHTML = "";
  const nodes = getGraphNodes();
  ensureGraphLayout(nodes);
  const edges = getGraphEdges();
  const visibleIds = new Set(nodes.filter(n => graphFilter === "all" || n.kind === graphFilter).map(n => n.id));

  edges.forEach((edge) => {
    if (!visibleIds.has(edge.from) || !visibleIds.has(edge.to)) return;
    const from = graphLayout[edge.from]; const to = graphLayout[edge.to];
    if (!from || !to) return;
    svg.appendChild(createSvgElement("line", { x1: from.x, y1: from.y, x2: to.x, y2: to.y, class: `graph-link ${edge.strength}` }));
  });

  nodes.forEach((node) => {
    if (!visibleIds.has(node.id)) return;
    const pos = graphLayout[node.id];
    if (!pos) return;
    const style = nodeStyles[node.kind];
    const group = createSvgElement("g", { class: "graph-node", transform: `translate(${pos.x} ${pos.y})`, tabindex: "0", role: "button", "aria-label": node.title });

    group.addEventListener("click", () => { if (draggingNodeId) return; selectedNodeId = node.id; renderDetail(); highlightSelectedNode(); });
    group.addEventListener("pointerdown", (e) => {
      const pt = getSvgPoint(svg, e);
      draggingNodeId = node.id;
      dragOffset = { x: pt.x - graphLayout[node.id].x, y: pt.y - graphLayout[node.id].y };
      group.setPointerCapture(e.pointerId);
    });
    group.addEventListener("pointermove", (e) => {
      if (draggingNodeId !== node.id) return;
      const pt = getSvgPoint(svg, e);
      graphLayout[node.id] = { x: clamp(pt.x - dragOffset.x, 70, 830), y: clamp(pt.y - dragOffset.y, 70, 455) };
      group.setAttribute("transform", `translate(${graphLayout[node.id].x} ${graphLayout[node.id].y})`);
    });
    group.addEventListener("pointerup", () => {
      if (draggingNodeId !== node.id) return;
      draggingNodeId = null; saveGraphLayout(); selectedNodeId = node.id; renderGraph(); renderDetail();
    });

    group.appendChild(createSvgElement("circle", { cx: 0, cy: 0, r: style.radius, class: "node-ring", stroke: node.id === selectedNodeId ? "#c75146" : style.color }));
    const title = createSvgElement("text", { x: 0, y: -4, class: "node-text" });
    title.textContent = compactTitle(node.title);
    group.appendChild(title);
    const sub = createSvgElement("text", { x: 0, y: 17, class: "node-subtext" });
    sub.textContent = formatType(node.kind);
    group.appendChild(sub);
    svg.appendChild(group);
  });
}

function renderDetail() {
  const node = getGraphNodes().find(n => n.id === selectedNodeId) || getGraphNodes()[0];
  const linked = getGraphEdges().filter(e => e.from === node.id || e.to === node.id).map(e => {
    const linkedId = e.from === node.id ? e.to : e.from;
    const ln = getGraphNodes().find(n => n.id === linkedId);
    return { edge: e, node: ln };
  }).filter(i => i.node);

  document.getElementById("detailTitle").textContent = node.title;
  document.getElementById("detailSummary").textContent = node.summary;
  document.getElementById("detailMeta").innerHTML = `<span class="tag">${formatType(node.kind)}</span><span class="tag">${escapeHtml(node.audience || "Market")}</span>`;
  document.getElementById("promoteNode").hidden = node.kind !== "signal";
  document.getElementById("contentNode").hidden = node.kind !== "insight";

  const linkedList = document.getElementById("linkedList");
  linkedList.innerHTML = "";
  linked.forEach(({ edge, node: ln }) => {
    const card = document.createElement("button");
    card.type = "button"; card.className = "node-card";
    card.addEventListener("click", () => { selectedNodeId = ln.id; renderGraph(); renderDetail(); });
    card.innerHTML = `<span>${formatType(edge.type)}</span><strong>${escapeHtml(ln.title)}</strong>`;
    linkedList.appendChild(card);
  });
}

function highlightSelectedNode() { renderGraph(); }

function openInsightModal(signal) {
  document.getElementById("insightTitleInput").value = suggestInsightTitle(signal);
  document.getElementById("insightThesisInput").value = signal.statement;
  document.getElementById("insightWhyInput").value = "This pattern may reveal a useful market pressure worth tracking and testing in content, positioning, or offer design.";
  document.getElementById("insightActionInput").value = "Collect more evidence and test one content angle against this signal.";
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
  state.contentIdeas.unshift({ id: contentId, title, summary: `A draft angle based on the insight "${insight.title}".`, sourceInsight: insight.id });
  const sp = graphLayout[insight.id] || { x: 500, y: 280 };
  graphLayout[contentId] = { x: Math.min(830, sp.x + 150), y: Math.min(455, sp.y + 100) };
  graphEdges.push({ from: insight.id, to: contentId, type: "leads_to_content", strength: "strong" });
  selectedNodeId = contentId;
  saveState(); saveGraphLayout(); saveGraphEdges();
  render();
  // Switch to content view with signal pre-loaded from this insight
  const angle = insight.contentAngles[0] || insight.thesis;
  setTimeout(() => {
    switchView("content");
    const signal = { id: `insight-${insight.id}`, format: "thesis", source: `Insight: ${insight.title}`, text: angle };
    selectCsSignal(null, signal);
  }, 50);
}

function suggestInsightTitle(signal) {
  if (signal.type === "pain_point") return `${signal.audience} Need A Better Way`;
  if (signal.type === "objection") return `Trust Barrier: ${signal.audience}`;
  if (signal.type === "competitor_move") return "Competitors Are Reframing The Category";
  if (signal.type === "language_pattern") return "Market Language Is Shifting";
  return `${formatType(signal.type)} Emerging In The Market`;
}

function getGraphEdges() {
  const edgeKeys = new Set(graphEdges.map(e => `${e.from}:${e.to}:${e.type}`));
  const derived = [];
  state.insights.forEach(ins => {
    ins.evidence.forEach(sid => {
      const k = `${sid}:${ins.id}:supports`;
      if (!edgeKeys.has(k)) { derived.push({ from: sid, to: ins.id, type: "supports", strength: "normal" }); edgeKeys.add(k); }
    });
  });
  state.contentIdeas.forEach(idea => {
    if (!idea.sourceInsight) return;
    const k = `${idea.sourceInsight}:${idea.id}:leads_to_content`;
    if (!edgeKeys.has(k)) { derived.push({ from: idea.sourceInsight, to: idea.id, type: "leads_to_content", strength: "normal" }); edgeKeys.add(k); }
  });
  return [...graphEdges, ...derived];
}

function ensureGraphLayout(nodes) {
  let changed = false;
  nodes.forEach((n, i) => { if (!graphLayout[n.id]) { graphLayout[n.id] = getFallbackPosition(n.kind, i); changed = true; } });
  if (changed) saveGraphLayout();
}

function getFallbackPosition(kind, idx) {
  const rows = { signal: 360, insight: 210, content: 430 };
  return { x: 120 + ((idx * 137) % 680), y: (rows[kind] || 280) + ((idx % 2) * 24) };
}

function getGraphNodes() {
  return [
    ...state.insights.map(i => ({ id: i.id, kind: "insight", title: i.title, summary: i.thesis, audience: i.audience })),
    ...state.signals.map(s => ({ id: s.id, kind: "signal", title: formatType(s.type), summary: s.statement, audience: s.audience })),
    ...state.contentIdeas.map(c => ({ id: c.id, kind: "content", title: c.title, summary: c.summary, audience: "Content" }))
  ];
}

// ════════════════════════════════════════════════════════════════════════
// CONTENT STUDIO
// ════════════════════════════════════════════════════════════════════════

const csHints = {
  teardown: { stream: "From the Field", text: "Real numbers, real observation. Debrief register — first person throughout. If you haven't got a real number, go get one. The specific is the whole point." },
  thesis: { stream: "Reframe", text: 'Take news everyone saw and apply your lens. Name the real problem — not hardware, not capital — operating model. Open question at the end only if you actually want answers.' },
  framework: { stream: "Scale Lessons", text: "A principle or pattern you've seen enough times to name. Each point must be earned — no platitudes. Feels like you finally wrote down the thing you keep saying in meetings." },
  tool: { stream: "Quick Map", text: 'Two lines of tension. Then: "I built a tool that solves this. Link in comments." No fanfare. The link goes in the first comment, not the post.' }
};

const voiceBanned = [
  "game-changer", "game changer", "revolutionary", "disruptive", "disrupting", "unlock", "unlocking",
  "synergy", "leverage", "leveraging", "transformational", "innovative", "innovation", "cutting-edge",
  "holistic", "paradigm", "seamless", "empower", "empowering", "journey", "landscape", "space",
  "moving forward", "in conclusion", "in summary", "it goes without saying", "at the end of the day",
  "the future is electric", "ever-changing", "fast-paced", "stakeholder", "ecosystem"
];
const voicePatterns = [
  { re: /in today's (world|landscape|market|era)/i, label: "AI filler phrase" },
  { re: /it('s| is) (important|crucial|critical|vital) to/i, label: "AI filler phrase" },
  { re: /it('s| is) worth noting/i, label: "AI filler phrase" },
  { re: /as we navigate/i, label: "AI filler phrase" },
  { re: /the (future|next chapter) (of|is)/i, label: "Motivational poster" },
  { re: /here('s| is) the thing:/i, label: "Overused opener" },
  { re: /that said,/i, label: "AI hedge" },
  { re: /needless to say/i, label: "AI filler" },
  { re: /in the world of/i, label: "AI filler phrase" }
];

const csHookTemplates = {
  teardown: [
    "The honest version of [what I reviewed]: [specific finding].",
    "I've reviewed enough [thing] to see the pattern clearly.",
    "[Number] things I didn't understand about [topic] until I was inside it."
  ],
  thesis: [
    "[News event]. Worth understanding why — because it's not really a [company] story.",
    "[Event] happened. Everyone's treating it as [X]. It's actually [Y].",
    "[Company] just [did thing]. I've seen enough of these to know what this actually means."
  ],
  framework: [
    "Every [X] I've seen stall does it at one of [N] points.",
    "[Topic] falls apart at the same point every time. Not [obvious thing]. [Real thing].",
    "There are basically [N] ways [thing] goes wrong. I keep seeing the same ones."
  ],
  tool: [
    "The question I get most often isn't \"[obvious question].\" It's \"[real question].\"",
    "[Decision] sounds simple. Here's where it actually gets interesting.",
    "I built [thing] to answer [question]. [One line on what it reveals]."
  ]
};

function initCsView() {
  loadCsSignals();
  renderCsSignals();
  renderCsGraphic();
}

function loadCsSignals() {
  const base = [
    { id: "cs-s1", format: "teardown", source: "Prologis field", text: "Most depot charging business cases won't hit positive NOI within five years — grid, tariff, and ops model all designed backwards." },
    { id: "cs-s2", format: "thesis", source: "Fröjd (HeyReach) + Decade Energy €22M", text: "Decade Energy €22M raise — zero-CapEx model separates operating model from asset ownership. Finance and ops need to be designed together." },
    { id: "cs-s3", format: "thesis", source: "Papamichalis (HeyReach)", text: "Shell Recharge selling down — public CPO model built on infrastructure assumptions is repricing to retail reality." },
    { id: "cs-s4", format: "framework", source: "van den Heuvel (HeyReach)", text: "Shared depot charging (HDC): lease, metering, and liability break the commercial model before the hardware does." },
    { id: "cs-s5", format: "teardown", source: "Prologis estate", text: "eHGV peak demand, BESS retrofit debt, commissioning handover debt — three things I didn't understand until I was inside it." },
    { id: "cs-s6", format: "framework", source: "15yr programme pattern", text: "Four deployment gates where programmes stall: Grid, Commercial model, Ops handover, Scale. Most operators hit all four." },
    { id: "cs-s7", format: "thesis", source: "Fröjd + Nordic research", text: "BESS merchant business repricing — anchor use case is demand tariff avoidance, not flexibility market arbitrage." },
    { id: "cs-s8", format: "tool", source: "ERA tool", text: "ERA readiness score — five zones: grid, commercial model, lease/planning, ops capability, stakeholder alignment." }
  ];
  try {
    const saved = JSON.parse(localStorage.getItem("marketInsightGraphState") || "{}");
    const fromGraph = (saved.signals || []).map(s => ({
      id: s.id, format: guessFormat(s.type), source: s.source, text: s.statement
    }));
    csSignals = [...base, ...fromGraph];
  } catch { csSignals = base; }
}

function guessFormat(type) {
  if (type === "pain_point") return "teardown";
  if (type === "competitor_move") return "thesis";
  if (type === "language_pattern") return "framework";
  return "teardown";
}

function renderCsSignals() {
  const list = document.getElementById("csSignalList");
  list.innerHTML = csSignals.map(s => `
    <div class="cs-signal-item ${csSelectedSignal?.id === s.id ? "active" : ""}" data-id="${s.id}">
      <div class="cs-signal-fmt fmt-${s.format}">${{ teardown: "Teardown", thesis: "Thesis", framework: "Framework", tool: "Tool Pull" }[s.format] || s.format}</div>
      <div class="cs-signal-text">${escapeHtml(s.text.slice(0, 90))}${s.text.length > 90 ? "…" : ""}</div>
    </div>`).join("");
  list.querySelectorAll(".cs-signal-item").forEach(el => {
    el.addEventListener("click", () => {
      const s = csSignals.find(sig => sig.id === el.dataset.id);
      selectCsSignal(el.dataset.id, s);
    });
  });
}

function selectCsSignal(id, signalObj) {
  csSelectedSignal = id ? csSignals.find(s => s.id === id) : signalObj;
  if (!csSelectedSignal) return;
  setCsFormat(csSelectedSignal.format);
  const active = document.getElementById("csActiveSignal");
  active.hidden = false;
  document.getElementById("csActiveSignalText").textContent = csSelectedSignal.source + " — " + csSelectedSignal.text.slice(0, 80) + (csSelectedSignal.text.length > 80 ? "…" : "");
  const headline = document.getElementById("csGcHeadline");
  if (!headline.value) headline.value = csSelectedSignal.text.slice(0, 80);
  renderCsSignals();
  renderCsGraphic();
  showCsHooks();
}

function setCsFormat(fmt) {
  csCurrentFormat = fmt;
  document.querySelectorAll(".cs-fmt-tab").forEach(t => t.classList.toggle("active", t.dataset.fmt === fmt));
  document.getElementById("csHintStream").textContent = csHints[fmt]?.stream || fmt;
  document.getElementById("csHintText").textContent = csHints[fmt]?.text || "";
  showCsHooks();
}

function showCsHooks() {
  const hooks = csHookTemplates[csCurrentFormat] || [];
  const hooksEl = document.getElementById("csHooks");
  const hookList = document.getElementById("csHookList");
  hookList.innerHTML = hooks.map((h, i) => `
    <button class="cs-hook" type="button" data-hook="${i}">
      <span class="cs-hook-text">${escapeHtml(h)}</span>
      <span class="cs-hook-use">Use →</span>
    </button>`).join("");
  hookList.querySelectorAll(".cs-hook").forEach(btn => {
    btn.addEventListener("click", () => {
      const hookText = hooks[parseInt(btn.dataset.hook)];
      if (csTA.value.trim() === "") {
        csTA.value = hookText + "\n\n";
      } else {
        csTA.value = hookText + "\n\n" + csTA.value;
      }
      csTA.focus();
      csTA.dispatchEvent(new Event("input"));
    });
  });
  hooksEl.hidden = false;
}

function runVoiceCheck(text) {
  if (!text.trim()) {
    document.getElementById("vsValue").textContent = "—";
    document.getElementById("vsValue").className = "vs-value";
    document.getElementById("csVoiceFlags").hidden = true;
    return;
  }

  let score = 100;
  const flags = [];
  const lower = text.toLowerCase();

  voiceBanned.forEach(word => {
    if (lower.includes(word.toLowerCase())) {
      score -= 12;
      flags.push(`⚠ "${word}" — too polished`);
    }
  });

  voicePatterns.forEach(({ re, label }) => {
    if (re.test(text)) {
      score -= 10;
      flags.push(`⚠ ${label}`);
    }
  });

  const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
  sentences.forEach(s => {
    if (s.trim().split(" ").length > 30) { score -= 6; flags.push("⚠ Sentence over 30 words — consider splitting"); }
  });

  const hasNumber = /\d/.test(text);
  if (!hasNumber) { score -= 10; flags.push("⚠ No specific number found — the specific is the whole point"); }

  score = Math.max(0, Math.min(100, score));

  const el = document.getElementById("vsValue");
  el.textContent = score;
  el.className = "vs-value " + (score >= 80 ? "vs-good" : score >= 60 ? "vs-ok" : "vs-bad");

  const flagsEl = document.getElementById("csVoiceFlags");
  if (flags.length > 0) {
    flagsEl.hidden = false;
    flagsEl.innerHTML = flags.slice(0, 4).join("<br>");
  } else {
    flagsEl.hidden = true;
  }
}

// ════════════════════════════════════════════════════════════════════════
// GRAPHIC STUDIO
// ════════════════════════════════════════════════════════════════════════

function renderCsGraphic() {
  const headline = document.getElementById("csGcHeadline")?.value || "Your headline here.";
  const subtext = document.getElementById("csGcSubtext")?.value || "The supporting line that gives it context.";
  const stat = document.getElementById("csGcStat")?.value || "73%";
  const statLabel = document.getElementById("csGcStatLabel")?.value || "of depot charging projects won't hit positive NOI within five years.";
  let svg = "";

  if (csCurrentTemplate === "quote") {
    const lines = wrapSvgText(headline, 42);
    const textY = 280 - (lines.length * 32) / 2;
    const textEls = lines.map((l, i) => `<text x="100" y="${textY + i * 44}" font-family="Inter,sans-serif" font-size="36" font-weight="700" fill="${FW_WHITE}">${escSvg(l)}</text>`).join("");
    const subLines = wrapSvgText(subtext, 55);
    const subY = textY + lines.length * 44 + 28;
    const subEls = subLines.map((l, i) => `<text x="100" y="${subY + i * 26}" font-family="Inter,sans-serif" font-size="20" fill="rgba(255,255,255,0.6)">${escSvg(l)}</text>`).join("");
    svg = `<svg viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg" style="display:block">
      <rect width="1200" height="630" fill="${FW_NAVY}"/>
      <rect x="60" y="60" width="4" height="510" fill="rgba(255,255,255,0.15)" rx="2"/>
      <text x="92" y="92" font-family="Inter,sans-serif" font-size="18" font-weight="700" fill="${FW_WHITE}" letter-spacing="0.5">FINN-WILSON.</text>
      ${textEls}${subEls}
      <line x1="100" y1="560" x2="780" y2="560" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>
      <text x="100" y="584" font-family="Inter,sans-serif" font-size="14" fill="rgba(255,255,255,0.4)">Where energy meets reality.</text>
    </svg>`;

  } else if (csCurrentTemplate === "stat") {
    const labelLines = wrapSvgText(statLabel, 32);
    const labelY = 420;
    const labelEls = labelLines.map((l, i) => `<text x="540" y="${labelY + i * 32}" font-family="Inter,sans-serif" font-size="22" fill="rgba(255,255,255,0.65)" text-anchor="middle">${escSvg(l)}</text>`).join("");
    svg = `<svg viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg" style="display:block">
      <rect width="1080" height="1080" fill="${FW_NAVY}"/>
      <text x="80" y="108" font-family="Inter,sans-serif" font-size="20" font-weight="700" fill="${FW_WHITE}" letter-spacing="0.5">FINN-WILSON.</text>
      <text x="540" y="360" font-family="Inter,sans-serif" font-size="160" font-weight="800" fill="${FW_WHITE}" text-anchor="middle">${escSvg(stat)}</text>
      ${labelEls}
      <line x1="80" y1="980" x2="1000" y2="980" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>
      <text x="80" y="1008" font-family="Inter,sans-serif" font-size="16" fill="rgba(255,255,255,0.4)">Where energy meets reality.</text>
    </svg>`;

  } else if (csCurrentTemplate === "framework") {
    const titleLines = wrapSvgText(headline, 36);
    const titleEls = titleLines.map((l, i) => `<text x="240" y="${110 + i * 36}" font-family="Inter,sans-serif" font-size="28" font-weight="700" fill="${FW_NAVY}">${escSvg(l)}</text>`).join("");
    const subLines = wrapSvgText(subtext, 58);
    const subY = 110 + titleLines.length * 36 + 16;
    const subEls = subLines.map((l, i) => `<text x="240" y="${subY + i * 26}" font-family="Inter,sans-serif" font-size="18" fill="#374151">${escSvg(l)}</text>`).join("");
    svg = `<svg viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg" style="display:block">
      <rect width="1200" height="630" fill="${FW_WHITE}"/>
      <rect width="180" height="630" fill="${FW_NAVY}"/>
      <text x="90" y="88" font-family="Inter,sans-serif" font-size="14" font-weight="700" fill="${FW_WHITE}" text-anchor="middle" letter-spacing="0.5">FINN</text>
      <text x="90" y="108" font-family="Inter,sans-serif" font-size="14" font-weight="700" fill="${FW_WHITE}" text-anchor="middle">WILSON.</text>
      <rect x="240" y="60" width="4" height="32" fill="${FW_NAVY}" rx="2"/>
      ${titleEls}${subEls}
      <text x="1160" y="598" font-family="Inter,sans-serif" font-size="13" fill="#9ca3af" text-anchor="end">finn-wilson.com</text>
    </svg>`;

  } else if (csCurrentTemplate === "split") {
    const leftLines = wrapSvgText(headline, 28);
    const leftY = 280 - (leftLines.length * 40) / 2;
    const leftEls = leftLines.map((l, i) => `<text x="60" y="${leftY + i * 44}" font-family="Inter,sans-serif" font-size="34" font-weight="700" fill="${FW_WHITE}">${escSvg(l)}</text>`).join("");
    const rightLines = wrapSvgText(subtext, 32);
    const rightY = 260 - (rightLines.length * 30) / 2;
    const rightEls = rightLines.map((l, i) => `<text x="660" y="${rightY + i * 34}" font-family="Inter,sans-serif" font-size="22" fill="${FW_NAVY}">${escSvg(l)}</text>`).join("");
    svg = `<svg viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg" style="display:block">
      <rect width="600" height="630" fill="${FW_NAVY}"/>
      <rect x="600" width="600" height="630" fill="${FW_WHITE}"/>
      <text x="60" y="80" font-family="Inter,sans-serif" font-size="16" font-weight="700" fill="${FW_WHITE}" letter-spacing="0.5">FINN-WILSON.</text>
      <text x="60" y="120" font-family="Inter,sans-serif" font-size="12" font-weight="500" fill="rgba(255,255,255,0.5)" letter-spacing="0.1em">SIGNAL</text>
      ${leftEls}
      <line x1="60" y1="560" x2="540" y2="560" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>
      <text x="60" y="585" font-family="Inter,sans-serif" font-size="13" fill="rgba(255,255,255,0.35)">Where energy meets reality.</text>
      <text x="660" y="120" font-family="Inter,sans-serif" font-size="12" font-weight="600" fill="#9ca3af" letter-spacing="0.1em">THE IMPLICATION</text>
      ${rightEls}
      <text x="1140" y="598" font-family="Inter,sans-serif" font-size="13" fill="#9ca3af" text-anchor="end">FINN-WILSON.</text>
    </svg>`;
  }

  const preview = document.getElementById("csGraphicPreview");
  if (preview) preview.innerHTML = svg;
}

// ════════════════════════════════════════════════════════════════════════
// UTILITIES
// ════════════════════════════════════════════════════════════════════════

function wrapSvgText(text, maxChars) {
  const words = text.split(" ");
  const lines = [];
  let line = "";
  for (const word of words) {
    if ((line + " " + word).trim().length > maxChars) {
      if (line) lines.push(line);
      line = word;
    } else { line = (line + " " + word).trim(); }
  }
  if (line) lines.push(line);
  return lines;
}

function escSvg(s) {
  return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;");
}

function createSvgElement(tag, attrs) {
  const el = document.createElementNS("http://www.w3.org/2000/svg", tag);
  Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
  return el;
}

function getSvgPoint(svg, event) {
  const pt = svg.createSVGPoint();
  pt.x = event.clientX; pt.y = event.clientY;
  return pt.matrixTransform(svg.getScreenCTM().inverse());
}

function clamp(v, min, max) { return Math.min(max, Math.max(min, v)); }

function compactTitle(title) {
  if (title.length <= 18) return title;
  const words = title.split(" ");
  return words.length === 1 ? title.slice(0, 16) + "…" : words.slice(0, 2).join(" ");
}

function formatType(value) {
  return String(value).replaceAll("_", " ").replace(/\b\w/g, l => l.toUpperCase());
}

function escapeHtml(value) {
  return String(value).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;");
}

// ════════════════════════════════════════════════════════════════════════
// EXPORT / IMPORT
// ════════════════════════════════════════════════════════════════════════

const DATA_KEYS = [
  "marketInsightGraphState",
  "marketInsightGraphLayout",
  "marketInsightGraphEdges",
  "fw-network-profiles",
  "fw-content-drafts"
];

document.getElementById("exportData").addEventListener("click", () => {
  const backup = {};
  DATA_KEYS.forEach(key => {
    const val = localStorage.getItem(key);
    if (val) backup[key] = JSON.parse(val);
  });
  backup._exported = new Date().toISOString();
  backup._version = "1.0";

  const blob = new Blob([JSON.stringify(backup, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  const date = new Date().toISOString().slice(0, 10);
  a.download = `fw-intelligence-${date}.json`;
  a.href = url;
  a.click();
  URL.revokeObjectURL(url);
});

document.getElementById("importData").addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (ev) => {
    try {
      const backup = JSON.parse(ev.target.result);
      let restored = 0;
      DATA_KEYS.forEach(key => {
        if (backup[key]) {
          localStorage.setItem(key, JSON.stringify(backup[key]));
          restored++;
        }
      });
      alert(`Restored ${restored} data sets from backup (exported ${backup._exported ? backup._exported.slice(0,10) : "unknown date"}). Reloading.`);
      window.location.reload();
    } catch {
      alert("Could not read that file. Make sure it's a FINN-WILSON. backup JSON.");
    }
  };
  reader.readAsText(file);
});
