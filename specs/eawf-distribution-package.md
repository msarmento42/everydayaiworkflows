# EAWF distribution package

**Status:** Prepared for activation after the newsletter provider is configured.
**Scope:** Owned, consent-based distribution for the four flagship workflow
jobs. This document drafts messages and measurement; it does not send email,
post to a personal account, contact people, or spend money.

## Guardrails

- Send only to people who explicitly opted in through the EAWF form.
- Include the sender identity, a plain-language reason for the message, and a
  one-click unsubscribe in every provider-rendered email.
- Keep the existing instant-download fallback available when the provider is
  unavailable; do not imply that an email signup is required to access it.
- Describe the Workflow Lab fixtures as synthetic/public or pending owner-run
  observations. Do not claim firsthand vendor tests, time savings, sales,
  commissions, or AdSense results.
- Use one primary call to action per message. Product mentions remain optional,
  disclosed, and secondary to the useful explanation.

## Five-message welcome sequence

The sequence is a draft for a configured provider. Relative timing is measured
from confirmed consent, not from a page visit.

### Message 1 — Immediate delivery: choose the bottleneck

- **Subject:** Your AI Workflow Reset is ready
- **Purpose:** Deliver the free reset and orient the reader to one repeated job.
- **Content:** Link to the existing free reset; ask the reader to choose email
  triage, meeting follow-up, research monitoring, or content repurposing. Link
  to `/start-here` for the four paths and explain that the worksheets stay
  local to the browser.
- **Primary CTA:** Open the matching workflow lab.
- **Measurement:** `lead_success` already records the form outcome; link clicks
  use the existing `template_download`/`product_view` contract.

### Message 2 — Day 2: run one safe fixture

- **Subject:** Test one workflow before automating it
- **Purpose:** Move from a generic prompt to a small, reviewable fixture.
- **Content:** Explain the three-step loop: define the input, inspect the
  output, record the correction. Feature one lab (rotate the featured job each
  week) and link to its evidence record and local worksheet.
- **Primary CTA:** Run the lab worksheet with synthetic or sanitized input.
- **Safety note:** Keep sending, task creation, publishing, and other
  consequential actions behind human review.

### Message 3 — Day 4: turn a win into a repeatable system

- **Subject:** Keep the useful handoff, remove the busywork
- **Purpose:** Help the reader decide whether the workflow deserves a place in
  a weekly routine.
- **Content:** Suggest recording the current manual steps, the review point,
  and the correction made after five uses. Link to the relevant lab and the
  existing Workday System product only as an optional implementation asset.
- **Primary CTA:** Compare the free reset with the existing Workday System.
- **Disclosure:** Product links are managed by the same publisher and are not
  required to use the editorial guide.

### Message 4 — Day 7: expand carefully

- **Subject:** Choose the next workflow to improve
- **Purpose:** Cross-sell the next useful lab without implying that more tools
  or more automation are inherently better.
- **Content:** Link to the other three jobs, explain when each is a fit, and
  call out the evidence status on each page. Mention the Complete collection
  only for readers who want the existing templates in one place.
- **Primary CTA:** Choose the next lab from `/start-here`.
- **Measurement:** Use one `utm_content` value for the featured job and keep
  the campaign `eawf_funnel_2026q3`.

### Message 5 — Day 10: feedback and preferences

- **Subject:** What should the next workflow lab cover?
- **Purpose:** Invite a correction, preference, or unsubscribe; do not use
  artificial urgency.
- **Content:** Link to the contact page for corrections and ask which job is
  most difficult. Include a clear unsubscribe and a reminder that no result is
  guaranteed.
- **Primary CTA:** Reply through the approved provider mechanism or visit the
  contact page.
- **Stop rule:** If the provider cannot render an unsubscribe or consent
  record, do not activate the sequence.

## Weekly publishing package

Prepare one package around one flagship lab per week:

1. **Lab excerpt:** one decision, one evidence caveat, and one useful example
   from the selected page.
2. **Artifact:** link to that lab's local worksheet; do not upload visitor
   entries or real customer material.
3. **Email:** use the matching sequence message or a standalone opt-in update.
4. **Manual community/social draft:** a short, source-linked excerpt that the
   owner reviews and posts from the appropriate account.
5. **Measurement:** use the existing page/placement/product fields and a
   stable UTM content value; record views, lead progression, product views,
   affiliate clicks, and provider-reported purchases separately.

Recommended UTM shape:

```text
utm_source=eawf
utm_medium=owned
utm_campaign=eawf_funnel_2026q3
utm_content=<job>_<asset>_<week>
```

## Experiment rules

- Run one distribution variable at a time: featured job, subject line, CTA
  wording, or placement—not all four together.
- Start with the existing audience and zero-cost owned channels. Do not buy
  traffic or join a partner program as part of this package.
- Treat `lead_view → lead_start → lead_submit → lead_success → product_view`
  as the funnel diagnostic. A click is not a sale; only Gumroad/provider
  reporting can establish revenue.
- If there is no qualified traffic, record “distribution not yet observed”
  rather than optimizing copy from noise. Pause a variant when it creates
  privacy, consent, broken-link, or unsupported-claim risk.
- Keep a dated experiment log with the exact URL, UTM values, audience/channel,
  start/end dates, and provider-reported outcomes.

## Activation checklist

- [ ] Configure and test the approved newsletter webhook and token in the
      deployment environment; never commit them.
- [ ] Verify provider consent and unsubscribe behavior with a test address.
- [ ] Confirm the live free-reset URL, four lab URLs, and all UTM parameters.
- [ ] Select one featured job and one CTA for the first package.
- [ ] Get owner approval before any manual community/social post or external
      partner communication.
- [ ] Record the first provider and Gumroad baselines in
      `vault-control-plane-work/projects/income-sites.md`.
