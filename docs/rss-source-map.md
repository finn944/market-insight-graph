# RSS Source Map

This is the first curated RSS map for the FINN-WILSON. insight engine. It is a strong starter list, not an exhaustive claim about every relevant feed on the internet.

The useful job is not to collect everything. The useful job is to collect enough high-signal evidence across clean energy deployment, grid constraints, EV charging, storage, policy, data, capital, and commercial execution to expose recurring market patterns.

## Collection Principles

- Favor sources that reveal deployment reality: grid readiness, interconnection, permitting, commissioning, operations, utilization, procurement, and capital allocation.
- Mix market media, technical trade coverage, public data, policy analysis, and investor-facing research.
- Store the feed URL, site URL, cadence, source category, watch criteria, and confidence level before automating ingestion.
- Treat RSS as the intake layer. Extraction, evidence scoring, deduplication, summaries, and insight links belong in the backend pipeline.

## Starter Feed List

| Source | Category | Feed URL | Watch For |
| --- | --- | --- | --- |
| Canary Media | Clean energy | `https://www.canarymedia.com/rss` | Deployment constraints, grid bottlenecks, capital shifts, policy-commercial tension |
| Utility Dive | Grid and utilities | `https://www.utilitydive.com/feeds/news/` | Interconnection queues, utility programs, rate design, grid planning, regulatory blockers |
| Smart Energy International | Grid and utilities | `https://www.smart-energy.com/feed/` | Grid flexibility, digital infrastructure, demand response, utility operating models |
| Energy-Storage.news | Storage | `https://www.energy-storage.news/feed/` | Storage revenue models, commissioning risk, grid services, project finance |
| pv magazine | Solar | `https://www.pv-magazine.com/feed/` | Solar economics, supply chain shifts, interconnection, commercial adoption |
| Renewable Energy World | Clean energy | `https://www.renewableenergyworld.com/feed/` | Project deployment, procurement language, policy shifts, market adoption |
| CleanTechnica | Clean energy | `https://cleantechnica.com/feed/` | EV adoption, charging friction, product claims, category narratives |
| Electrek | EV charging | `https://electrek.co/feed/` | Charging rollout, EV adoption barriers, infrastructure announcements |
| InsideEVs | EV charging | `https://insideevs.com/rss/news/all/` | Charging access, buyer friction, fleet electrification, OEM claims |
| Green Car Reports | EV charging | `https://www.greencarreports.com/rss` | Charging reliability, adoption objections, consumer language |
| Charged EVs | EV charging | `https://chargedevs.com/feed/` | Charging hardware, fleet charging, power electronics, supplier claims |
| The Energyst | Commercial energy | `https://theenergyst.com/feed/` | Commercial energy buyers, flexibility revenue, site economics |
| RMI | Research and strategy | `https://rmi.org/feed/` | Systems constraints, deployment frameworks, capital mobilization |
| IEA News | Policy and data | `https://www.iea.org/rss/news.xml` | Demand forecasts, policy direction, investment gaps, adoption curves |
| EIA Today in Energy | Policy and data | `https://www.eia.gov/rss/todayinenergy.xml` | Power market data, fuel mix changes, demand trends, price signals |
| Ember | Policy and data | `https://ember-energy.org/feed/` | Power mix shifts, electricity demand, transition evidence |
| Carbon Tracker | Capital | `https://carbontracker.org/feed/` | Capital discipline, transition risk, stranded assets, valuation assumptions |

## Next Pipeline Shape

1. Fetch feed entries on a schedule.
2. Normalize title, URL, author, published date, source, summary, and raw text.
3. Deduplicate by canonical URL and near-duplicate title matching.
4. Score evidence for relevance to deployment, capital, grid, commercial model, and execution.
5. Extract candidate signals with source traceability.
6. Link repeated signals into insight briefs and surface contradictions.

## Open Questions

- Which feeds create the highest rate of evidence that is useful for strategy, not just news awareness?
- Which source categories are underrepresented after the first month of collection?
- Which commercial signals appear before they become mainstream narratives?
- Which feed items should be ignored because they are too generic, promotional, or disconnected from deployment reality?
