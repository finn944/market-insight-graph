# Architecture

## System Overview

Market Insight Graph is organized as a pipeline from source material to strategic activation.

```text
Sources
  -> Collection Layer
  -> Raw Evidence Store
  -> Extraction Layer
  -> Signal Database
  -> Graph Layer
  -> Insight Briefs
  -> Strategy And Content Outputs
```

## Core Layers

### 1. Collection Layer

Responsible for bringing material into the system.

Initial collection methods:

- manual capture inbox
- source registry
- RSS/feed ingestion
- competitor watchlist snapshots
- uploaded notes, transcripts, and documents

Later collection methods:

- official APIs where useful
- newsletter ingestion
- search trend imports
- content performance imports
- CRM or customer conversation imports

### 2. Raw Evidence Store

Stores original source material and metadata. This layer should preserve traceability and prevent the system from becoming a black box.

Examples:

- article text
- social post text
- comments
- transcript excerpts
- customer notes
- competitor page snapshots
- newsletter issues

### 3. Extraction Layer

Transforms raw evidence into structured signals.

Common extracted signal types:

- pain point
- desire
- objection
- question
- trend
- claim
- competitor move
- language pattern
- audience behavior
- contradiction

### 4. Signal Database

Stores extracted observations as discrete, reusable units. Signals are smaller than insights and may later support multiple insights.

### 5. Graph Layer

Stores nodes and relationships. This is the Zettelkasten layer.

Example node types:

- evidence
- signal
- insight
- audience segment
- pain point
- desire
- objection
- trend
- competitor
- market category
- personal thesis
- content idea
- offer idea
- strategic bet
- decision
- question

Example edge types:

- supports
- contradicts
- derived_from
- similar_to
- applies_to
- inspires
- raises_question
- leads_to_content
- leads_to_offer
- affects_decision

### 6. Synthesis Layer

Clusters signals and creates insight briefs. This layer should produce structured, source-backed thinking rather than generic summaries.

### 7. Activation Layer

Turns approved insights into:

- strategy notes
- content ideas
- positioning angles
- offer hypotheses
- research questions
- decision memos

## Suggested Technical Shape

The first build can use a pragmatic stack:

- Web app for capture, review, graph exploration, and briefs
- Relational database for structured records
- Vector index for semantic search
- Graph-friendly relationship tables before adopting a dedicated graph database
- Background jobs for ingestion, extraction, and synthesis
- Local-first exportable data where possible

## Storage Strategy

Use separate stores conceptually, even if the first implementation uses one database:

- **Raw store**: original source material
- **Structured store**: evidence, signals, insights, entities, tags
- **Graph store**: nodes, edges, relationship weights
- **Vector store**: embeddings for semantic retrieval
- **Content store**: ideas, drafts, published items, performance results

## Human Review Points

The user should review:

- whether a source is worth keeping
- extracted signals before they become durable
- suggested links between nodes
- generated insight briefs
- content and strategy outputs before use

## MVP Boundary

The MVP should prioritize:

- capture
- evidence storage
- structured signal extraction
- insight brief creation
- graph-ready relationships
- weekly review workflow

It should defer:

- broad autonomous web crawling
- complex multi-user permissions
- polished content generation
- dedicated graph database migration
- advanced analytics dashboards
