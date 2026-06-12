# Stakeholder Layer

The person/relationship layer of the insight graph. Lives in `data/stakeholders.json`.

## Why it exists

Market evidence comes from people. This layer records who matters, how they connect, and what state each relationship is in, so outreach feeds strategy and strategy directs outreach.

## Node schema

- `id` — `sm-*` (stakeholder map seat) or `hr-*` (HeyReach-discovered contact)
- `tier` — capital | platform | fleet | energy | anz
- `priority` — A (one meaningful touch/month) | B (quarterly) | C (ambient)
- `verification` — 3 internal, 2 verified, 1 confirm on LinkedIn, 0 role seat
- `status` — not_started → researched → first_contact → in_motion → active_relationship
- `profile_depth` — deep (tier-1 dossier) | structured (facts + context) | thin (one line)
- `heyreach_conversation_id` — link to the live thread where one exists

## Edge types

`warm_path_via` · `works_with` · `similar_to` · `derived_from` · `applies_to` · `raises_question`

Edges answer the question the list can't: who gets me to whom, and which conversations triangulate.

## Operating rules

1. A-priority contacts get manual, personal messages only. No automation touches a human.
2. Anything substantive a contact says becomes evidence in the insight graph, linked back to their node.
3. New counterpart from any live programme gets a node within a week of first contact.
4. Update `status` and `last_touch` after every Friday session. The file is the log.
5. Verify role on LinkedIn before any outreach (people move).

## Weekly cycle

Friday scan (automated) → reply queue refresh → 30-minute review: two replies, one reactivation → log updates → commit.
