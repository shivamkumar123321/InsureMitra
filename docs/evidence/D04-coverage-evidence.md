# D04 — Coverage options, premium uncertainty, and validation evidence

Task: T06 / D04. Research date: 2026-10-26. This is a source and policy-rule check, not full per-product catalogue extraction or a personal coverage recommendation.

## Official policy-source spot checks

| Slot / source | Source match and supported observation | Decision use / limit |
|---|---|---|
| HDFC ERGO my:Optima Secure, official [prospectus PDF](https://customer-portal-assets.hdfcergo.com/documents/Prospectus_myOptimaSecure-81493430264.pdf), UIN `HDFHLIP26058V082526`, p.1 and §1 | Product UIN matches D02 S01. Adult entry is at least 18 with no maximum entry age; dependent children are 91 days through 25, with additional parent/individual conditions. The prospectus gives base-SI choices including ₹5L, ₹7.5L, ₹10L, and ₹15L (along with higher choices); it says insured persons in a policy share the same SI. | Supports only these exact product-specific sample choices and validation examples. Does not establish adequacy or a universal age/amount range. Keep base SI separate from Secure/Plus/restore amounts. |
| HDFC ERGO Easy Health, [official policy wording PDF](https://customer-portal-assets.hdfcergo.com/documents/PolicyWordings_EasyHealth-114935539788.pdf), UIN `HDFHLIP26054V102526`, printed p.47 / PDF p.46 | UIN matches D02 S08. The Standard column lists per-policy-per-policy-year base SI options ₹2L, ₹3L, ₹4L, ₹5L, ₹7.5L, ₹10L and ₹15L. | Demonstrates that discrete choices are variant-specific; ₹6L is not a listed Standard option. Do not substitute the Exclusive column or combine the columns. |
| Tata AIG MediCare Premier, [official product page](https://www.tataaig.com/health-insurance/medicare), wording UIN `TATHLIP26052V052526` | Page says this Premier product has options from ₹5L to ₹3Cr. Its [official policy wording](https://www.tataaig.com/s3/tata_aig_medicare_premier_policy_wordings_781aa2fd94.pdf), p.1, has the matching UIN and distinguishes family-floater per-policy SI from individual per-insured SI. | The product page establishes only a broad product range, not every discrete choice or a quote. Use the current wording and configuration for actual choices. |
| Niva Bupa ReAssure 3.0, [official policy wording PDF](https://transactions.nivabupa.com/pages/doc/policy_wording/ReAssure30_Policy_Wordings.pdf), UIN `NBHHLIP27059V022627` | UIN matches D02 S03. The wording distinguishes a finite base SI from an optional “Unlimited Sum Insured” selection; its Elite example separates base SI from Booster+ accumulation. | Display a source-backed unlimited option as a named non-numeric choice. Never present accumulated booster/restoration as base SI. Exact variant/configuration rules remain M07 work. |
| Star Health Super Star, [official product page](https://www.starhealth.in/health-insurance/super-star/), UIN `SHAHLIP27049V022627` | UIN matches D02 S05. The policy provides an Unlimited Sum Insured option; official page notes that some features are unavailable when it is chosen. | Keep unlimited as a distinct option and include its feature conditions; do not normalize it to a rupee number. |

## Mismatched sources deliberately excluded

- An indexed HDFC Optima Restore prospectus carries UIN `HDHFLIP25012V082425`, while D02 S02 selected `HDFHLIP26055V102526`; it was not used to populate the selected slot's amount list.
- An indexed Niva ReAssure 3.0 prospectus carries UIN `NBHHLIP26047V012526`, while D02 S03 selected `NBHHLIP27059V022627`; the stale/mismatched prospectus was not used.
- An SBI Arogya Supreme page/search result carries UIN `SBIHLIP21043V012122`, while D02 S07 selected `SBIHLIP27036V022627`; it was not used to assert current options for the selected slot.

These mismatches demonstrate why each amount/age/configuration must be tied to the exact selected UIN/variant and a current source. D02's official-source register remains the identity/provenance register; full extraction for all eight slots remains M05–M12.

## General-amount evidence and owner-selected ₹20L default

The [IRDAI health department guidance](https://irdai.gov.in/health-dept) identifies medical inflation among factors used in insurance pricing, and directs policyholders to check product restrictions, sub-limits, co-pay, and terms. It does **not** prescribe ₹20 lakh as a generally adequate or best amount. The user's preference is therefore recorded as an owner-selected default, not as an official or actuarial adequacy recommendation. A source-backed ₹20L option must exist for the exact eligible product and structure; otherwise no ₹20L option is invented.

## Premium and suggestion rule checks

No current user has supplied a complete family/age/location/structure/SI/tenure configuration or a matching insurer quote. D02's source register records that current-profile premiums are unknown. Therefore these checks pass only as policy boundaries, not as a numeric premium suggestion:

1. **Matched known quote:** can be compared to the stated budget only when the quote's plan/variant, covered people/ages, location/zone, structure, SI, tenure, selected options, taxes, discounts and loadings match. A different illustration is not extrapolated.
2. **Unknown budget:** keep the field explicitly unknown; do not infer it from age, city, income, family size, or SI.
3. **Known budget, no matching premium:** affordability remains unknown; do not label any amount affordable or produce a made-up price.
4. **All matched prices above budget:** apply SPEC R9: show the closest priced choices as over-budget, report the difference, and ask before changing budget or coverage.
5. **Unknown premium:** apply R10; label “Premium needs insurer confirmation.”

The owner has resolved the choice as follows: when budget and a matching quote are available, suggest the highest supported base SI within budget; when either is missing, use ₹20L as the default only where the eligible policy/structure offers exactly ₹20L, and clearly mark price/affordability unknown. No nearest-value substitution, city-tier, family-count, income-multiple, medical-cost-multiplier, or universal adequacy formula is sourced here.

## Input-boundary exercises

| Field / sample | Expected behavior | Outcome |
|---|---|---|
| Age `40` | Accept as whole years; evaluate against each exact product's source-backed age/relationship rules. | PASS — e.g. the selected Optima Secure adult threshold is documented; no universal maximum is inferred. |
| Age `-1`, `40.5`, `NaN`, or text | Reject as malformed age. | PASS — syntactic validation only; no insurer rule is inferred. |
| Age unknown | Retain as unknown and ask before a recommendation requiring it; do not treat unknown as eligible. | PASS — SPEC §10 and R2. |
| Budget `0` / `₹0.00` | Accept as a known non-negative budget; positive priced choices are over budget under R9. | PASS — zero is distinct from missing. |
| Budget negative, non-finite, malformed, or more than two decimal places | Reject as malformed amount. | PASS — no arbitrary maximum imposed. |
| SI `₹5L` where the exact selected policy/structure lists it | Accept that option, pending eligibility/configuration checks. | PASS — supported by the cited S01/S08 sources. |
| SI `₹6L` for HDFC Easy Health Standard | Do not accept as an offered discrete Standard option; present the exact listed choices instead. | PASS — printed p.47 lists discrete Standard amounts. |
| SI “Unlimited” where explicitly offered | Accept only as the named source-backed option, not as a finite amount. | PASS — Niva/Star wording distinction retained. |
| SI `0`, negative, or malformed | Reject; preserve unknown as a separate state. | PASS — no zero-coverage policy is inferred. |
| “₹10L floater for four members” | Keep as a ₹10L per-policy annual SI only if that structure is sourced; do not multiply by four or equate it with four individual policies. | PASS — structure remains attached to amount. |

## Suggestion-rule fixtures after owner input

| Situation | Expected result | Check |
|---|---|---|
| Exact profile-matched quotes exist; budget is ₹20,000; eligible source-backed base SIs have quotes ₹12,000 / ₹19,000 / ₹27,000 | Suggest the highest supported option within budget (the ₹19,000 quote); show the ₹12,000 alternative and the ₹27,000 over-budget option with clear labels. | PASS — not an adequacy guarantee; budget/quote match is explicit. |
| Budget unknown or no matching quote; eligible policy supports exact ₹20L base SI | Suggest ₹20L as the owner's default starting amount; mark affordability unverified and show other supported options. | PASS — user-approved fallback; not called universally sufficient. |
| Budget unknown or no matching quote; the selected eligible policy does not offer ₹20L | Show its actual supported amounts; do not substitute a nearest amount or claim one is best. | PASS — no fabricated amount. |
| Policy only has a named unlimited option | Show it as “Unlimited Sum Insured” with source terms; do not treat it as ₹20L or a finite comparison. | PASS — distinct non-numeric choice. |
| All matching priced options exceed the stated budget | Apply R9: show closest over-budget prices and ask before changing budget or coverage; do not substitute the ₹20L fallback. | PASS — preserves SPEC R9. |

## T06 result

PASS: source-backed amounts/structures and validation boundaries are concrete; stale UIN sources are excluded; insufficient-premium behavior is explicit; the owner-approved ₹20L fallback is clearly distinguished from an evidence-based adequacy claim; no city-tier formula is introduced. The sample quotes are synthetic rule fixtures, not actual premiums. Full product price/option extraction remains in M05–M12.
