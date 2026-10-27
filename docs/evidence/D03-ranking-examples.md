# D03 — Ranking examples and RD1 checkpoint audit

T05 / D03. These are synthetic fixtures, not real insurer facts or premiums. User-approved rules are in [D03](../decisions/D03.md).

## Synthetic fixtures

| Fixture | Documented scenario fit | Comparable indicative premium vs budget | Relevant restrictions |
|---|---|---|---|
| A | Better fit for the disclosed condition than B | ₹10,000; budget ₹12,000 | One relevant room cap |
| B | Weaker fit for the disclosed condition than A; broader unrelated coverage | ₹11,000; budget ₹12,000 | Fewer restrictions in the disclosed scenario |
| C | Equal fit to A for the disclosed scenario | Unknown | Incomparable with A |
| D | Equal fit and restrictions to A | ₹10,000 | Equal to A |
| E | Eligibility unknown | ₹8,000 | Not ranked until eligibility is resolved |
| F | Equal scenario fit to A; broader policy coverage than A | ₹11,000 | No worse in scenario-relevant restrictions |

## Walk-through against SPEC R1/R4–R10

| Main priority | Expected result | Rule check |
|---|---|---|
| Lowest price | A and D first (equal ₹10,000), then B/F (₹11,000); C follows known comparable prices without an affordability claim; E is excluded pending eligibility. | R5 ascending known comparable premiums regardless of broader protection; R10 unknown price; R1–R2 eligibility gate. |
| Fewer relevant restrictions | Compare only restrictions material to the confirmed scenario. If B has a restriction trade-off (for example, fewer restrictions overall but worse on one material term), A and B are incomparable on this dimension, so neither receives a hidden score. A secondary preference may refine the equal-fit tier; otherwise R6 may apply. | R4 explicit priority; D03 partial-order rule; R6 price tie-break applies only when otherwise equally suitable. |
| Fit for disclosed condition | A outranks B because its documented terms better fit the disclosed condition. F's broader unrelated coverage is a secondary benefit and cannot move F above A on scenario fit. C shares A's scenario-fit tier; unknown price does not break the tie. | R1 and R4; user-approved scenario-first rule; R6/R10 price limits. If a relevant clause is unknown/conflicting, no superior-fit claim is made (R15). |
| Unsure/default | A first for better family/health fit. Within an equal-fit tier, known comparable within-budget prices sort ascending; then fewer relevant restrictions refine remaining equal-fit plans. C follows known prices without being called affordable. E remains excluded until eligible. | User-approved lexicographic order: family/health fit → affordability → fewer relevant restrictions; R5/R6/R9/R10. |

## Edge and conflict checks

- Explicit price priority may put A ahead of B despite B having fewer restrictions; explain the trade-off and keep the selected main priority (R4–R5).
- Secondary preference never reverses a difference on the explicit main priority. It refines a main-priority tie/equal-fit tier only.
- Equal comparable prices and equivalent scenario fit/restrictions remain equal; no catalog-order or insurer-order tie-break is added (R6).
- Unknown/non-comparable price cannot be treated as zero, cheapest, within-budget, or as a price tie-break (R5–R6, R10).
- If all eligible known-priced options exceed budget, show the closest options as over budget and ask whether to change budget or coverage (R9).
- A preferred insurer with no eligible match requires an explanation and permission before other insurers are offered (R7).
- Fewer than 2–3 verified matches means show the available matches only; do not pad (R8).

## RD1 checkpoint audit

**PASS, 2026-10-26; reviewed at the user's direction.** Cross-checked the outcomes of D01, D02, and D03 against `tasks/plan.md`:

| Check | Result |
|---|---|
| D01 stack versions/commands assumed or hidden in the plan? | No. Exact pins and commands live in D01; plan preserves the fixed stack and marks implementation execution/validation later. |
| D02 insurer/product identities, eligibility, or premiums assumed by the plan? | No. D02 has eight explicit product/UIN/variant slots with official-source evidence. The plan leaves scope at 8–9 and per-entry extraction/eligibility verification to later tasks; unsupported prices remain unknown. |
| D03 scores or hidden prices introduced? | No. User-approved explicit-priority and default ordering is lexicographic/partial-order only; no weighted score or real premium is introduced. |

The user approved D03's three choices in their 2026-10-26 message and directed continuation with the RD1 review. No hidden versions, insurer selections, scores, or prices were found. This completes RD1 for the research-planning checkpoint; it does not waive downstream catalogue evidence or implementation verification.
