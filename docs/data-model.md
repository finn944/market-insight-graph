# Data Model

## Design Goal

The model should preserve the chain from raw market material to strategic output:

```text
Source -> Evidence -> Signal -> Insight -> Activation
```

The graph model sits across this chain and records how concepts connect.

## Source

Represents an origin or recurring place where evidence can be collected.

Fields:

- id
- name
- source_type
- url
- owner_or_author
- collection_method
- priority
- refresh_cadence
- notes
- created_at
- updated_at

Source types:

- audience_community
- competitor
- newsletter
- podcast
- report
- social_account
- search_signal
- owned_note
- customer_conversation
- content_performance

## Evidence

Represents a captured piece of market material.

Fields:

- id
- source_id
- title
- url
- author
- published_at
- captured_at
- raw_text
- clean_text
- summary
- evidence_type
- dedupe_hash
- permission_notes
- quality_score
- relevance_score

Evidence types:

- article
- post
- comment
- transcript
- review
- note
- page_snapshot
- email
- report_excerpt
- performance_record

## Signal

Represents a discrete observation extracted from evidence.

Fields:

- id
- evidence_id
- signal_type
- statement
- audience
- topic
- entities
- quoted_language
- sentiment
- novelty_score
- urgency_score
- recurrence_score
- relevance_score
- confidence
- created_at

Signal types:

- pain_point
- desire
- objection
- question
- trend
- claim
- competitor_move
- language_pattern
- audience_behavior
- contradiction

## Insight

Represents a synthesized strategic observation.

Fields:

- id
- title
- thesis
- why_it_matters
- audience
- market_category
- evidence_ids
- signal_ids
- confidence
- status
- strategic_implication
- content_angles
- offer_implications
- open_questions
- created_at
- updated_at

Statuses:

- emerging
- active
- validated
- contradicted
- archived

## Node

Represents an item in the interactive graph.

Fields:

- id
- node_type
- ref_id
- title
- summary
- tags
- weight
- status
- created_at
- updated_at

Node types:

- evidence
- signal
- insight
- audience_segment
- pain_point
- desire
- objection
- trend
- competitor
- market_category
- personal_thesis
- content_idea
- offer_idea
- strategic_bet
- decision
- question

## Edge

Represents a relationship between two nodes.

Fields:

- id
- from_node_id
- to_node_id
- edge_type
- strength
- confidence
- rationale
- created_by
- created_at

Edge types:

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

## Content Idea

Represents a possible content output derived from insights.

Fields:

- id
- title
- hook
- format
- target_audience
- source_insight_ids
- supporting_evidence_ids
- angle
- status
- draft
- published_url
- performance_notes
- created_at
- updated_at

## Strategic Bet

Represents a larger direction the user may act on.

Fields:

- id
- title
- thesis
- related_insight_ids
- confidence
- potential_upside
- risk
- next_action
- status
- created_at
- updated_at
