# Market Insight Graph

An insight-gathering system for turning market evidence into connected strategic understanding, content ideas, and offer direction.

The goal is to build a living insight graph: raw sources become evidence, evidence becomes signals, signals become insights, and insights connect to strategy, content, positioning, and decisions.

## What This Is

Market Insight Graph is designed to help an independent strategist, creator, or operator:

- collect useful market evidence from many sources
- extract recurring pains, desires, objections, language, and trends
- connect insights in an interactive Zettelkasten-style graph
- generate clear strategic briefs and content angles
- preserve source-backed reasoning instead of relying on vague intuition

## Product Shape

The system has four main layers:

1. **Collection**: source registry, manual inbox, feed/API imports, competitor watchlists
2. **Structuring**: raw evidence, extracted signals, entities, topics, metadata
3. **Connection**: insight graph, relationships, clusters, confidence, contradictions
4. **Activation**: insight briefs, strategy notes, content ideas, offer hypotheses

## First Milestone

The first milestone is not full automation. It is a usable research and insight workspace:

- manual capture inbox
- source registry
- evidence store
- signal extraction format
- insight brief format
- graph-ready data model
- weekly review workflow

## Local Prototype

The first browser prototype lives in `app/`.

Open it from a local server at:

```text
http://127.0.0.1:5173/index.html
```

Current prototype features:

- source registry for watched communities, competitors, newsletters, and owned feedback
- RSS discovery map for clean energy, grid, EV charging, storage, policy, data, and capital feeds
- evidence inbox with source, URL/location, audience, status, and quality scoring
- evidence-to-signal extraction workflow
- signal-to-insight promotion flow
- support and contradiction links into insight briefs
- interactive draggable graph with saved positions
- source-backed insight briefs with evidence, contradictions, why-now, implications, and actions
- search across evidence, signals, insights, content ideas, and decisions
- signal clustering by pattern type
- open research questions and activation outputs
- local demo data reset

## Source Discovery

The Sources view now includes a curated RSS discovery panel. Feeds can be searched, reviewed, and added directly into the source registry as watched RSS sources.

The first feed map is documented in [RSS Source Map](docs/rss-source-map.md). It covers clean energy deployment, grid and utilities, EV charging, storage, commercial energy, policy/data, research, and capital allocation.

## Brand Direction

The prototype now follows the FINN-WILSON. brand guidelines:

- Dark Navy `#182241`, Deep Blue `#171E36`, White, and Light Grey do the visual work
- Inter is the only typeface
- tone is direct, analytical, human, and quietly confident
- demo evidence is focused on clean energy, electrification, capital allocation, and deployment
- the working thesis is: make energy systems deployable

## Docs

- [Product Vision](docs/product-vision.md)
- [Architecture](docs/architecture.md)
- [Data Model](docs/data-model.md)
- [Source Strategy](docs/source-strategy.md)
- [RSS Source Map](docs/rss-source-map.md)
- [Insight Brief Format](docs/insight-brief-format.md)
- [Roadmap](docs/roadmap.md)
