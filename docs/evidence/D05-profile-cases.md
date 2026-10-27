# D05 — Profile, health, and plan-structure case review

Task: T07 / D05. Review date: 2026-10-26. This is a requirement and decision-rule review, not medical advice or underwriting evidence.

## Scenario checks

| Scenario | Expected disposition | Check |
|---|---|---|
| Two adults and a child request one plan | Select a proposer older than 18. Capture each person's relationship to the proposer, age, and explicit health state. Offer one floater only if that exact product's current wording permits every member. | Pass: no global relationship allowlist; no silent omission; F1/F5/R2/R12. |
| Senior parent is included with a spouse and child | Check the product's exact relationship, dependency, member-count, and entry-age rules. If the single floater cannot include the parent, show only source-supported separate policies/groups that cover every requested person. | Pass: no universal age or family rule inferred; affected members and each SI remain explicit. |
| Multiple conditions are reported for one person | Preserve every named condition. Ask only for an extra fact required by an identified plan rule. If unanswered, keep that plan/rule unverified and continue evaluating other rules independently. | Pass: F1, R1/R3/R15 and §10; no general health questionnaire. |
| No health response is entered | Keep it as missing and request an explicit “No conditions”, condition list, or “Not sure” answer before profile confirmation. | Pass: missing is not “No conditions” (F1). |
| User explicitly answers “Not sure” about health | Permit provisional continuation under R3, disclose the affected uncertainty, and do not claim insurer acceptance. Preserve volunteered known condition names. | Pass: explicit unknown differs from both missing and no-condition. |
| A family relationship is not allowed by a product's current wording | Do not present that one-floater arrangement as eligible. Offer separate source-backed structures only if every requested person can be covered; otherwise state that no full arrangement is verified. | Pass: source-derived eligibility; no unsupported composite policy. |
| Adult proposer is not one of the covered people | Allow the proposer role in the profile as the owner directs, but verify the exact policy's proposal/payer requirements before calling that arrangement a verified match. If the insurer's rules are absent or unclear, label confirmation needed. | Pass: owner role model does not claim universal insurer acceptance. |
| A 15-year-old wants an individual plan | The minor is an insured person, not the proposer. Capture a family proposer older than 18; apply the product's exact minor/child eligibility and proposal rules. | Pass: owner rule; no IRDAI proposer mandate is claimed. |
| Parent and child have an age difference of exactly 18 years | The owner rule requires a gap greater than 18; do not treat an 18-year gap as satisfying it. | Pass: strict threshold preserved. |
| Parent, mother/father/child group, and an uncle or aunt are entered together | Apply the owner's close-family-only boundary; do not place uncle/aunt or other extended relatives into the same plan. A separate plan is shown only if source-supported and all persons are eligible. | Pass: no wider insurer roster overrides the owner rule. |
| A spouse is proposed in the shared plan | Allow the spouse as close family, subject to the selected plan's exact relationship, age, and structure terms. | Pass: owner explicitly allows spouse. |
| A father-in-law is proposed in the primary shared plan or as a separate policy | Do not add him to the primary family floater. He may be considered for a separate policy, with exact product eligibility and proposer/payer rules checked; he may be proposer if older than 18. | Pass: owner explicitly requires separate structure; insurer acceptance remains source-dependent. |
| A plan states a dependent-child maximum age of 25 and the child is 26 at renewal | Do not show that person as eligible to remain in that floater if the exact wording confirms the exit. Show a source-backed separate policy/migration path and explain that renewal/continuity rights must be checked; do not promise a fresh-policy reset or automatic acceptance. | Pass: product age cap and IRDAI renewal/migration guidance are kept distinct. |
| Plan wording states a member composition such as 2 adults/4 children or a child limit of 25/30 | Use that exact current product's count and age rule; treat the user's figures as examples only unless they match the selected plan's UIN/variant. | Pass: no global count or child-age cap invented. |
| A current source is missing, stale, or has a mismatched UIN | Do not use it to claim the member or structure is eligible. Keep the relevant person/plan outside the verified shortlist pending current insurer evidence. | Pass: D02 source rules remain in force. |
| Proposer age is 18, or relationship/age is missing | The owner rule requires proposer age >18; the existing profile uses whole-year ages, so 18 does not satisfy the rule. Missing relationship/age cannot verify a multi-person structure. | Pass: implements the owner's literal threshold; this is not attributed to IRDAI. |
| User has not supplied a nickname | Do not prompt for one; use a neutral generated session label. | Pass: no nickname/first-name collection solely for session labeling. |

## Verification outcome

Confirmed cases pass against D05, SPEC F1/F5, R1–R3/R12/R15, §10, and D02's current-source/UIN rules. The single-floater versus split-plan decision, proposer/payer acceptance, and child exit transition remain product-source dependent. No catalogue slot is certified by these scenarios; per-plan verification remains assigned to the relevant catalogue task.

