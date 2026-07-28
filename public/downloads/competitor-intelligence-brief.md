# Competitor Intelligence Brief

Use this reusable, ungated template to turn public evidence into a decision—not a pile of AI-generated assumptions. Duplicate everything from “Blank brief” onward for each competitor. The completed example is fictional and demonstrates the method without making claims about a real company.

## Rules of evidence

1. Prefer first-party sources for product capabilities, pricing, policies, and positioning.
2. Record the URL and the date you accessed every source. Pages change.
3. Separate what the source says from what you infer.
4. Never treat an AI model's memory as a source. Give the model the evidence yourself.
5. Preserve disagreements. A pricing page and a review can both be accurate for different plans, dates, or customer types.
6. Do not collect private, gated, deceptive, or unlawfully obtained information.

## Source and evidence checklist

- [ ] Homepage and product pages
- [ ] Current pricing page and plan footnotes
- [ ] Documentation or help center
- [ ] Public changelog or release notes
- [ ] Terms, limits, cancellation, and refund policies
- [ ] Two independent customer-review sources
- [ ] Recent job listings, if relevant to strategy
- [ ] Search results or keyword data from a real research tool
- [ ] Date captured for every source
- [ ] Direct evidence attached to every material conclusion

## Blank brief

### 1. Research question

**Competitor:**  
**Prepared on:**  
**Decision this research should inform:**  
**Time horizon:**  
**Analyst:**  

### 2. Source register

Assign a short source ID so conclusions can point back to evidence.

| ID | Source type | URL or document | Accessed | What it can establish | Limitations |
|---|---|---|---|---|---|
| S1 | First-party pricing |  | YYYY-MM-DD | Published plans and prices | Taxes, negotiated plans, or old customers may differ |
| S2 | Product documentation |  | YYYY-MM-DD | Documented capability and limits | Does not establish actual customer experience |
| S3 | Customer reviews |  | YYYY-MM-DD | Recurring customer perceptions | Self-selected sample |

### 3. Evidence ledger

Keep observations atomic. Paraphrase unless a short exact quote is necessary.

| Evidence ID | Source ID | Observation | Observation date | Fact or claim? | Confidence | Follow-up needed |
|---|---|---|---|---|---|---|
| E1 | S1 |  | YYYY-MM-DD | Published claim | High |  |
| E2 | S3 |  | YYYY-MM-DD | Customer report | Medium |  |

### 4. Positioning teardown

**Stated target customer:**  
**Primary job to be done:**  
**Core value proposition:**  
**Three most-emphasized benefits:**  
1.  
2.  
3.  

**Important omissions:**  
**Evidence IDs:**  
**Interpretation (clearly labeled):**  

### 5. Offer and pricing map

| Plan | Published price | Billing basis | Included limits | Gating or overage | Best-fit customer | Evidence IDs |
|---|---:|---|---|---|---|---|
|  |  |  |  |  |  |  |

**Change since last review:**  
**Strategic signal (interpretation):**  
**Confidence and why:**  

### 6. Capability comparison

Score only what the evidence supports: `Confirmed`, `Partial`, `Absent`, or `Unknown`.

| Customer job | Our offer | Competitor | Evidence IDs | Why it matters |
|---|---|---|---|---|
|  |  |  |  |  |

### 7. Customer evidence

**Sample:** number of reviews, sources, and date range  

| Theme | Positive/negative | Mentions | Example evidence IDs | Segment or plan | Confidence |
|---|---|---:|---|---|---|
|  |  |  |  |  |  |

Do not convert a handful of anecdotes into a market-wide percentage.

### 8. Content and demand signals

| Topic or query | Observed competitor asset | Demand evidence | Intent | Gap we could serve | Evidence IDs |
|---|---|---|---|---|---|
|  |  |  |  |  |  |

### 9. Synthesis

**Three strongest findings**

1. Finding — evidence IDs — confidence  
2. Finding — evidence IDs — confidence  
3. Finding — evidence IDs — confidence  

**Contradictions or unknowns:**  
**What would change our conclusion:**  
**What we deliberately did not infer:**  

### 10. Decision and experiment

**Decision:**  
**Why now:**  
**Evidence supporting it:**  
**Smallest validation experiment:**  
**Owner:**  
**Due date:**  
**Success threshold:**  
**Stop condition:**  
**Next refresh date:**  

## Reusable AI prompts

### Evidence extraction

```text
You are analyzing only the sources pasted below. Do not add facts from memory.

For every observation, return:
- source ID
- concise observation
- whether it is a first-party claim, documented fact, or customer report
- relevant date
- confidence (high/medium/low) with a reason
- any contradiction or missing context

If the material does not answer a question, write “unknown.”

[PASTE SOURCE REGISTER AND SOURCE TEXT]
```

### Cross-source synthesis

```text
Using this evidence ledger, group observations into positioning, pricing,
capability, customer sentiment, and demand. Every conclusion must cite one or
more evidence IDs. Separate direct observations from interpretations. List
contradictory evidence and unknowns before recommending any action.

[PASTE EVIDENCE LEDGER]
```

### Skeptical review

```text
Act as a skeptical strategy reviewer. Find conclusions that overreach their
evidence, rely on a single weak source, confuse a published claim with observed
performance, or omit a plausible alternative explanation. Do not rewrite the
brief. Return a prioritized verification checklist.

[PASTE DRAFT SYNTHESIS]
```

## Completed fictional example

### Research question

**Competitor:** Northstar Notes (fictional)  
**Prepared on:** 2026-07-27  
**Decision:** Should our fictional team test a simpler freelancer plan?  
**Time horizon:** Next 60 days  

### Source register

| ID | Source type | URL or document | Accessed | What it can establish | Limitations |
|---|---|---|---|---|---|
| S1 | Fictional pricing capture | Internal example text | 2026-07-27 | Published example plans | Not a real company or live offer |
| S2 | Fictional documentation capture | Internal example text | 2026-07-27 | Example plan limits | Cannot establish user satisfaction |
| S3 | Fictional review sample | 20 invented training rows | 2026-07-27 | Demonstrates theme counting | Not real market evidence |

### Evidence ledger

| Evidence ID | Source ID | Observation | Observation date | Fact or claim? | Confidence | Follow-up needed |
|---|---|---|---|---|---|---|
| E1 | S1 | Solo plan is listed at $12 monthly with 10 projects | 2026-07-27 | Published claim | High within example | Check annual billing terms |
| E2 | S2 | Export is documented only for Team plans | 2026-07-27 | Documented claim | High within example | Test whether manual copy remains possible |
| E3 | S3 | 7 of 20 fictional reviews mention setup positively | 2026-07-27 | Customer-report example | Low | A real study needs genuine reviews |
| E4 | S3 | 5 of 20 fictional reviews object to export gating | 2026-07-27 | Customer-report example | Low | Segment by plan and review date |

### Positioning and offer

Northstar Notes is positioned in the example as a low-friction research workspace for independent consultants. Simplicity receives more emphasis than collaboration. The Solo plan's 10-project limit and Team-only export are the most consequential gates (E1, E2). This suggests—but does not prove—that the fictional company uses export to move growing customers upmarket.

### Customer evidence

The invented sample contains a positive setup theme (7/20) and a negative export-gating theme (5/20), but these are demonstrations, not market estimates (E3, E4). A real analyst would collect genuine dated reviews, remove duplicates, and check whether complaints cluster by plan.

### Synthesis

1. The example offer creates a clear entry point at $12 (E1, high confidence within the fictional source).
2. Export is a meaningful upgrade boundary (E2, high confidence within the fictional source).
3. Ease of setup may be a positioning strength, while export gating may create dissatisfaction (E3, E4, low confidence because the sample is fictional).

**Unknown:** conversion rate, retention, negotiated pricing, and whether export complaints affect purchases.  
**Alternative explanation:** export may carry real infrastructure or support costs rather than being purely an upsell device.

### Decision and experiment

**Decision:** Test a simple freelancer landing-page concept with transparent export access.  
**Smallest experiment:** Send qualified traffic to two positioning variants for 14 days.  
**Success threshold:** At least 5% of qualified visitors request early access, with 20 total responses before interpreting the result.  
**Stop condition:** Fewer than 10 qualified visits per variant or evidence that export is not a meaningful buying criterion.  
**Next step:** Interview five target users about project limits and export before building the feature.

---

This template is educational. Verify current source material and make decisions appropriate to your business, customers, and legal obligations.
