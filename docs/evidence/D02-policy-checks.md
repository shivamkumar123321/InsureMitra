# D02 — Policy exercises and task verification

Task: T02 / original D02. Date: 2026-10-26, Asia/Calcutta (+05:30). [Decision](../decisions/D02.md); [official-source register](D02-source-register.md).

These are documentary acceptance exercises for the evidence/comparison decision. They do not implement catalogue loading, eligibility, ranking or claim logic; no runtime/test files are created. “Known” in a spot check does not mean the complete plan is verified.

## Known / unknown / conflicting field checks

| Case | Input / source check | Expected result and actual desk-check outcome |
|---|---|---|
| E01 Known variant-specific fact | S01 physical PDF p.61, Annexure C: geography cell in the Optima Secure column. | PASS: known India-only scope with that source/page/column. Adjacent Global/Global Plus columns are not merged. Page was visually inspected. |
| E02 Known unit-bearing fact | S06A prospectus p.1, §B.1, minimum adult entry age 18 years. | PASS: known 18 with unit years and citation. This does not verify all family/health rules; no extrapolation to child ages or all applicants. |
| E03 Missing field key | Required age/relationship path omitted from an extraction. | PASS (rejection expected): invalid authoring record, not no limit or eligible; must be restored as explicitly unknown if not sourced. |
| E04 Unknown price | No quote matching the current profile/configuration. | PASS: amount null, reason quote unavailable, needs insurer confirmation; never zero, cheapest or affordable. |
| E05 Known price in another context | S08 p.42 contextual family illustration; current user/profile not established. | PASS: retain illustration provenance only; current-user price remains unknown. No real premium amount copied into this exercise. |
| E06 Wrong-version input | ICICI current page UIN differs from the inspected app PDF; Niva search snippet differs from live S03 UIN. | PASS: version mismatch, no merged entry. For Niva, use live PDF/content/hash; for ICICI, insufficient matching current wording led to nonselection. |
| E07 Same-scope official conflict | Synthetic assertion A differs from synthetic assertion B, both purportedly for one field/version; no applicable amendment establishes precedence. | PASS: conflict, canonical null, retain both assertions; material eligibility/calculation use blocked. This is a constructed policy exercise, not an allegation about an insurer. |
| E08 Not applicable without rationale | Missing information encoded as not_applicable with no supporting scope condition. | PASS (rejection expected): unknown instead; absence is not proof of non-applicability. |
| E09 Documented conditional non-applicability | A particular optional election is not selected and matching evidence says the associated field applies only when selected. | PASS: not_applicable with source/condition rationale, not a globally absent benefit. Illustrative logic only; no product election inferred. |
| E10 Stale or changed source | Same official URL returns a different hash or a superseding version; no recheck yet. | PASS: preserve old source revision, mark current applicability not confirmed and reverify affected uses; changed facts do not silently inherit verification. |
| E11 Conditional zero / unlimited | A table has a zero co-pay in one room/configuration, but not every category. | PASS: known only with its conditions and source. Do not promote null or one conditional cell to a blanket zero/unlimited claim. |
| E12 Row/column confusion | Same product UIN covers multiple variants. | PASS: preserve explicit variant scope; page geometry/headers matter. S01 visual review showed why UIN alone is insufficient. |

## Price/comparability exercises

P and Q below are symbolic complete annual-price observations, not actual insurer premiums. No fictional numeric premium is attached to a real plan.

| Case | Input | Expected result / actual desk-check outcome |
|---|---|---|
| P01 Matched known points | P < Q; same covered people, actual location, requested SI, structure, one-year period, payable-total/tax/underwriting basis, valid sources and disclosed options. | PASS: ascending comparable point prices; protection trade-offs still explained (R5). |
| P02 Changed covered set | P covers one person; Q covers the requested family. | PASS: non-comparable. No cheapest-family claim from P. |
| P03 Floater versus individual | Same family but different per-person versus shared SI structure. | PASS: separate comparison contexts; no global cheapest or per-person multiplication without the documented complete policy calculation. |
| P04 Incomplete separate-policy bundle | One required member lacks a sourced price or eligibility rule. | PASS: no complete-family total; identify exactly who is covered. No complex combination optimization. |
| P05 Annual versus long-term/instalment | One annual total, another monthly instalment or three-year total without a verified annual formula. | PASS: not comparable on annual basis; do not multiply/divide blindly. |
| P06 Tax/loading uncertainty | A base amount is known; mandatory tax/loading/fee effect is unknown for the requested context. | PASS: payable total unknown; no affordability/price ranking from that base alone. No general GST rate assumed. |
| P07 Different insurer zone labels | Same actual city; each insurer has a different but documented zone mapping and rate basis. | PASS: label difference alone does not break comparison. Missing mapping does. |
| P08 Misleading discount | A wellness/online/medical-assumption discount is unverified or belongs to another profile. | PASS: exclude the unsupported discounted amount; unknown current price if a valid payable total cannot be established. |
| P09 Same price, different benefits | P = Q, otherwise suitable; all comparison inputs match. | PASS: no price tie-break or invented score; D03 owns non-price fit, while restrictions remain visible. |
| P10 Unknown price after priced options | Otherwise suitable offer has no usable premium. | PASS: may appear under R10 with confirmation label; unknown follows usable known prices and has no affordability/cheapest position. |
| P11 Overlapping ranges | [P_low, P_high] overlaps [Q_low, Q_high]. | PASS: price order indeterminate, no midpoint or claim of equal premiums; D03 orders by non-price rules within the disclosed uncertainty group. |
| P12 Disjoint ranges / point boundary | P_high < Q_low; a point is an interval with equal endpoints. | PASS: guaranteed relative price order only. Touching/overlapping intervals do not establish a strict cheaper result. |
| P13 Budget within/outside interval | Budget B is below lower bound, at/above upper bound, or inside a matched sourced interval. | PASS: respectively definitely over-budget (delta interval/at least lower delta), within indicative range with final-price caveat, or uncertain affordability. No hidden profile/coverage change. |
| P14 Deductible/benefit mismatch | A top-up/high-deductible configuration is compared with requested first-rupee cover. | PASS: do not compare as equivalent base cover or switch elections to win on price. |
| P15 Different known restrictions | Matched base-cover context; known room/co-pay/waiting restrictions differ. | PASS: explain restrictions and respect requested options; a lower comparable price need not provide more protection. D03 handles fit, not an invented equivalent-benefit score. |
| P16 No unique closest price | Over-budget intervals overlap so neither distance is provably smallest. | PASS: disclose no unique closest verified option, show relevant priced choices and request adjustment; no invented point distance. |

These case outcomes settle D02's evidence/comparison behavior. They do not close D03 scoring, D04 suggested coverage or D05 provisional-health intent.

## Machine-checkable evidence-envelope samples

The known geography sample is tied to S01's inspected table. The conflict and not-applicable samples are explicitly **synthetic schema exercises**, not real insurer facts or runtime catalogue entries. Unknown has no invented numeric value.

~~~json
{
  "known": {
    "field_id": "coverage.geography",
    "state": "known",
    "value": "India only",
    "unit": "territory",
    "applies_when": "S01: Optima Secure column, not sibling variants",
    "evidence_refs": [{"source_id": "S01", "pdf_page": 61, "section": "Annexure C", "column": "Optima Secure", "row": "Geography"}],
    "reason": null,
    "conflicting_assertions": [],
    "verified_at": "2026-10-26T10:45:00+05:30",
    "verified_by": "Codex source spot check",
    "freshness": "current_checked"
  },
  "unknown": {
    "field_id": "premium.current_offer",
    "state": "unknown",
    "value": null,
    "unit": "INR_paise",
    "applies_when": "No complete matching quote has been verified",
    "evidence_refs": [],
    "reason": "quote unavailable",
    "conflicting_assertions": [],
    "verified_at": null,
    "verified_by": null,
    "freshness": "not_confirmed"
  },
  "conflict": {
    "field_id": "synthetic.field",
    "state": "conflict",
    "value": null,
    "unit": "symbol",
    "applies_when": "Synthetic same-version conflicting-source exercise only",
    "evidence_refs": [{"source_id": "SYNTHETIC-A"}, {"source_id": "SYNTHETIC-B"}],
    "reason": "No documented applicable precedence",
    "conflicting_assertions": [{"value": "assertion-A", "source_id": "SYNTHETIC-A"}, {"value": "assertion-B", "source_id": "SYNTHETIC-B"}],
    "verified_at": null,
    "verified_by": null,
    "freshness": "not_confirmed"
  },
  "not_applicable": {
    "field_id": "synthetic.optional_only_field",
    "state": "not_applicable",
    "value": null,
    "unit": "symbol",
    "applies_when": "Synthetic option is not selected; source establishes field applies only when selected",
    "evidence_refs": [{"source_id": "SYNTHETIC-SCOPE"}],
    "reason": "Documented conditional scope",
    "conflicting_assertions": [],
    "verified_at": "2026-10-26T10:45:00+05:30",
    "verified_by": "Synthetic schema exercise only",
    "freshness": "current_checked"
  }
}
~~~

Read-only local verification command (PowerShell). This checks the decision samples and required record shapes, not complete application schemas or production recommendation logic. Negative samples must be rejected.

~~~powershell
@'
from pathlib import Path
import re, json, copy
text = Path('docs/evidence/D02-policy-checks.md').read_text(encoding='utf-8')
examples = json.loads(re.search(r'~~~json\n(.*?)\n~~~', text, re.S)[1])
def valid(field):
    required = {'field_id','state','value','unit','applies_when','evidence_refs','reason','conflicting_assertions','verified_at','verified_by','freshness'}
    if not required <= field.keys():
        return False
    state = field['state']
    if state == 'known':
        return field['value'] is not None and bool(field['evidence_refs']) and bool(field['verified_at']) and bool(field['verified_by']) and field['freshness'] == 'current_checked'
    if field['value'] is not None or not field['reason']:
        return False
    if state == 'unknown':
        return True
    if state == 'not_applicable':
        return bool(field['applies_when']) and bool(field['evidence_refs'])
    if state == 'conflict':
        assertions = field['conflicting_assertions']
        return len(assertions) >= 2 and len({a['source_id'] for a in assertions}) >= 2
    return False
for name, field in examples.items():
    assert valid(field), name
    print(name + ': PASS')
bad = copy.deepcopy(examples['known'])
bad['evidence_refs'] = []
assert not valid(bad)
bad = copy.deepcopy(examples['unknown'])
bad['value'] = 0
assert not valid(bad)
bad = copy.deepcopy(examples['conflict'])
bad['conflicting_assertions'] = bad['conflicting_assertions'][:1]
assert not valid(bad)
bad = copy.deepcopy(examples['not_applicable'])
bad['reason'] = None
assert not valid(bad)
bad = copy.deepcopy(examples['known'])
del bad['value']
assert not valid(bad)
assert examples['known']['evidence_refs'][0]['pdf_page'] == 61
print('PASS: 4 positive and 5 negative documentary envelope checks.')
'@ | python -
~~~

The simple sample validator deliberately does not verify source truth, freshness, every nested field, real eligibility or premium arithmetic. Those limits prevent treating these passing documentary checks as M05 runtime-schema validation.

## D02 Definition of Done audit

| Requirement | Result / evidence |
|---|---|
| Research/propose 8–9 slots | PASS: exactly eight distinct UINs, explicit variants and stable IDs; selection rationale and limitations in D02. No separately required owner selection left open. |
| Official documents and provenance | PASS: S01–S08 wordings, download links, locators and byte hashes; direct first-two-page UIN checks and page counts match all eight. |
| Source sufficiency/update policy | PASS: official provenance, current-version/applicability checks, field-level evidence, manually triggered rechecks, explicit stale/changed/unavailable treatment. |
| Known/unknown/missing/conflicting values | PASS: E01–E12 desk checks plus the positive/negative evidence-envelope exercise. No missing key interpreted as zero/no restriction. |
| Premium assumptions/comparability | PASS: P01–P16 desk checks; exact coverage/profile/time/payable-total basis, structural separation, unknown costs, symbolic point/range order and budget behavior explicit. No actual premium invented. |
| Catalogue evidence schema | PASS: source/entry/fact/premium logical contracts and states; no TypeScript/JSON/runtime implementation created. |
| Clarify unresolved selection/comparison intent | PASS: delegated eight-slot selection and explicit comparison policy resolved; no unanswered D02 intent question identified. Future extraction gaps remain in their original tasks. |
| Record decisions/evidence/SPEC Q1 | PASS after local scope/status audit; Q1 alone is updated to point to D02, not a rewrite of product requirements. |
| No premature implementation | PASS: no application files, catalogue JSON, install/build/test scripts or provider integration; document checks only. |

## Verification outcome and continuation

Research/documentary verification: PASS, 2026-10-26 10:54 +05:30. The recorded source retrieval reproduction returned eight matching UIN/page/hash results. The envelope script returned four positive passes and five expected negative rejections; it was rerun after adding reviewer/date/freshness fields. Local assertions checked eight unique slot/UIN records, eight source hashes, all 12 evidence and 16 comparison cases, required schema concepts and no application/catalogue/install artifacts. Direct baseline comparison confirmed SPEC changed only Q1 and preserved prior D01 records, PLAN and skills lock. Application tests/commands are NOT RUN and not applicable to this task. Full catalogue verification remains M05–M12; conditional M13 review remains pending.

The source and envelope commands are executed in memory by extracting their fenced Python blocks; this creates no additional test files. Record failures honestly, including source retrieval issues resolved by using the eight inspected products. Final status must leave T01 complete, mark only T02 newly complete, keep T03 onward Pending/TODO, set last completed T02/current and next T03, and stop. RD1 is still due after T05; no checkpoint approval is inferred.

Final scope/status audit: PASS. Python stdin assertions verified T01/T02 complete, 60 future tasks Pending/TODO, T02's three completion boxes checked, and progress at last completed T02/current and next T03 with Started: No. Baseline SHA-256 comparisons found exactly seven authorized documentation/status paths changed, no deleted files, and preserved D01 evidence/decision, PLAN, skills lock and interview notes. Direct text comparisons confirmed execution-map T03 onward and original TODO D03 onward unchanged; SPEC changed only the Q1 row. No application/catalogue/install artifacts exist. T03 was not started.

