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

- manual market evidence capture
- recent signal triage
- interactive insight graph
- draggable graph nodes with saved positions
- selected-node detail panel
- signal-to-insight promotion flow
- insight-to-content idea creation
- structured insight briefs
- local demo data reset

## Docs

- [Product Vision](docs/product-vision.md)
- [Architecture](docs/architecture.md)
- [Data Model](docs/data-model.md)
- [Source Strategy](docs/source-strategy.md)
- [Insight Brief Format](docs/insight-brief-format.md)
- [Roadmap](docs/roadmap.md)
