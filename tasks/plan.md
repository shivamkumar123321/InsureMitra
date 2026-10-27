# Implementation plan — AI Health Insurance Advisor MVP

Status: Proposed; no implementation started. Source of truth: [SPEC.md](../SPEC.md). Task checklist: [todo.md](todo.md).

## Planning boundaries

- Deliver vertical slices with a working user-visible path, not separate whole-database/API/UI phases. Each slice may span a few focused tasks.
- Keep every SPEC MUST. SHOULD items may be deferred only with an explicit recorded deviation; LATER features stay out.
- Do not select insurers, scores, coverage formulas, model, storage/auth providers, speech inventory, deployment topology, or timeout values in code before their decision gates close.
- Decisions below are work to perform, not conclusions already reached. Record evidence and chosen behavior in the relevant SPEC open question; get user clarification where research cannot determine intent. Compatibility evidence alone does not approve a scope change.
- No app session/request caps, paid overages, fabricated plan facts, customer accounts, or extra dashboards. Owner review/deletion is in scope.
- Repository currently has documentation only. SPEC §12.1 fixes the planned frontend/backend/shared/data/test/documentation paths and file formats. D01 defines executable commands and tool configuration within that layout; no framework version, test runner, schema, endpoint design, or deployment capability is assumed here.
- This plan does not prescribe a presentation script or ask the owner to decide demonstration logistics.

## Recommended build order

1. Close the minimum profile/catalogue/ranking/tooling gates; investigate high-risk speech/hosting/resource gates early alongside this research.
2. Build onboarding and one shared editable profile.
3. Add one verified real catalogue entry, eligibility, ranking, and a basic result card; reach the first form-to-real-result path.
4. Add the remaining entries and documented coverage/budget guidance; complete deterministic edge cases.
5. Add text AI conversation to the same working profile/result flow.
6. Add selectable comparison and live external search.
7. Add voice to the existing conversation, including barge-in and language changes.
8. Add protected persistent sessions, refresh/new-session behavior, owner review, and deletion.
9. Add hypothetical claim education to text and voice; finish translated UI and cross-service fallback integration.
10. Deploy the complete candidate, then verify live streaming, persistence, privacy, all languages, rule correctness, and failure behavior.

Why this differs slightly from a strict sequential list: catalogue completeness can grow while rules use the first verified entry; high-risk deployment research precedes backend choices; basic result cards precede AI so the earliest journey is useful. Actual deployment acceptance follows voice/persistence integration. An early compatibility probe is not final deployment.

## Blocking decisions/research

All gates start unresolved. A task cannot start until its listed decision dependencies have recorded, sufficient outcomes. Nondependent work can continue.

| Gate | SPEC questions | Output needed before dependent work starts |
|---|---|---|
| D01 | §12.1, §18 downstream choices | Minimal project/test tooling, actual commands, shared-TypeScript compilation and task file budgets within the specified layout; fixed stack preserved. |
| D02 | Q1 | Select 8–9 real plan slots, official-source sufficiency/conflict/update policy, evidence fields, premium comparability and unknown-value treatment. Verification per entry occurs in M05–M13. |
| D03 | Q2 | Deterministic main/default priority rules, restriction/condition fit definitions, secondary preferences, ties; examples with expected ordering. |
| D04 | Q3 | Sourced coverage/budget guidance and catalogue-supported amounts, validation boundaries, treatment when evidence is insufficient. |
| D05 | Q4, Q13 | Minimum confirmed profile, optional/required nickname, unknown-health cases permitted versus blocked, unresolved labels. |
| D06 | Q5 | Gnani credentials/credit feasibility, actual endpoint language/voice inventory, code-switch/barge-in capability, human-review coverage. |
| D07a | Q6 | Owner-authorized Neon database feasibility: successful connection and SQL write/read; retain Vercel as a candidate, not an accepted host. Enables database-adapter implementation only after Q7/Q8 are resolved; it does not by itself approve deployment or hosted compatibility. |
| D07b | Q6 | Hosted WebSocket and restart/redeploy persistence proof on the real app, assigned to Z04 after M25/M26–M29/Z01. Required before claiming topology compatibility or final acceptance; never create a throwaway app for it. It is post-implementation verification, not a prerequisite for M26 or Z01. Before Z01, separately verify selected host/database plan eligibility and account resources against the no-spend constraint. |
| D08 | Q7 | Owner authorization, tester access, current-session isolation; no customer accounts or usage caps introduced. |
| D09 | Q8 | Storage/browser/log/backup/provider deletion boundaries and in-flight-write policy; accurate deletion wording and restoration behavior. |
| D10 | Q9 | Provider processing notice, search query/domain policy, Tavily credentials/terms and missing-official-link behavior. |
| D11 | Q10 | OpenAI model/access/credit check, provider cost protections without app caps, timeout/retry behavior, recorded free-resource feasibility. |
| D12 | Q12 | Target browser/device and accessibility checks, translation-review inventory linked to verified speech languages. |
| D13 | Q11 | Latency measurement method, percentile/conditions and explicit target interpretation; do not turn SHOULD into a guaranteed SLA. |

## Vertical slices and dependency map

Dependencies below are logical prerequisites, not a requirement to finish every task of an upstream slice before starting any downstream task. `todo.md` gives exact dependencies and partial-slice entry points.

| Slice | User-visible increment / tasks | Prerequisites | SPEC coverage | Verification / exit checkpoint |
|---|---|---|---|---|
| S0 Runnable foundation | Welcome/workspace and fixed-stack executable baseline; M01A–M01C. | M01A/M01B need D01; M01C also needs D12. No hosted D07b result is required for this baseline. Provider-backed features use their listed decision gates. | F2–F3 foundation, P1; §12 | App builds, welcome reaches workspace in one click, phone/laptop shell and language state work. K00. |
| S1 Onboarding/profile | Stepped family/health/preferences entry, shared profile and editable confirmation; M02–M04. | S0, D04, D05. | F1, F4–F5; §6, §10; P1 | Back navigation, explicit unknowns, invalid/conflicting inputs and edits pass; no recommendations without required confirmation. K01. |
| S2 Verified catalogue | First verified entry, then full 8–9 entries; M05–M13. | D02, D01. | R2, R10, R12–R15; §11 | Each entry traced to official evidence; unknowns explicit; correct coverage/price assumptions. K02–K04, A12. |
| S3 Deterministic recommendation journey | Form → confirmed profile → real result cards, preference/ranking/coverage guidance; M14–M17. | S1, initial S2 entry, D03–D05. Full catalogue required for final acceptance. | F5–F6, R1–R13, R15 | Evidence-based eligibility, price/tie/insurer/no-match/over-budget tests; stale-result update flow; coverage choices. K05–K06, A5–A7. |
| S4 AI text conversation | Questions before intake, missing-field collection, corrections, interruptions and grounded explanations; M18–M20. | S3, D07a/D08/D10/D11, M22 not required until live external search. | F1–F2, F8, R1, R7, R13, R15, V4–V5; P3–P4 | Text journey uses same profile/rules; AI cannot override eligibility; citations and unavailable-reasoning fallback. K07. |
| S5 Comparison/search | Selectable side-by-side results and clearly separate external search; M21–M22. | S3 result cards; search additionally S4, D10. | F6–F7, R7–R10, R15–R16; P3, P7 | Default comparison selection, source expansion, no-match/explicit-plan live search, preferred-insurer permission, quota fallback. K08, A2/A9. |
| S6 Voice conversation | STT → same text flow → concise TTS; interruption/language continuity; M23–M25. | S4, D06/D07a/D10/D12. Hosted compatibility is checked later by D07b/Z04. | V1–V7, F3; P3–P4 | Mic/STT/TTS errors, spoken/typed barge-in, manual/automatic language switch and temporary audio checks. K09. |
| S7 Persistent/private sessions | Durable sessions, refresh/new session, owner list/detail, delete all; M26–M29. | D07a, D08–D10, S1/S3/S4 shared state. Voice records use transcript only. D07a permits adapter implementation only after Q7/Q8 decisions close; D07b is later hosted acceptance at Z04 and remains required for topology claims. | F10–F11, P2–P6 | Laptop/hosted save/restart, cross-session denial, refresh, deletion and in-flight restore cases. K10, A10. |
| S8 Claim education | Plan-specific hypothetical explanation and supported illustration in text/voice; M30–M32. | S2 evidence, S4 conversation; voice integration needs S6; record integration needs S7. | F8–F9, R13–R15; §14 | Boundary/exception/exclusion/deduction cases against official terms; incomplete data produces explanation, not guessed payout. K11, A8. |
| S9 Complete language/UI integration | Translate remaining screens; integrate fallbacks and prefilled dummy entry; M33A–M33D, M34–M35. | S5–S8, D12; D13 for latency judgment. | F2–F3, V7; §15, §17 | Selected language covers all screens; no state loss; full failure matrix; prefilled and empty journeys. KT1/K12. |
| S10 Hosted verification/release | Restricted deployed candidate and complete acceptance evidence; Z01–Z09. | Z01 requires D07a, resolved Q7/Q8 (D08/D09), the complete storage slice M26–M29, and a passing host/database plan and account-resource preflight. Z04 executes D07b after the real app and deployment paths exist. D07b does not gate M26 or Z01, but remains required before claiming hosted compatibility or final acceptance. | A1–A13; §17 | Real host tests, every-language human checks, source/rule/security audits, latency report, complete MUST checklist. |

### Shortest path versus MVP completion

- First real result: close the prerequisites of D01/D02/D03/D04/D05/D12 (including D06 for the language/browser inventory) → M01A–M01C, M02–M05 → M14–M16. This is an intermediate form-to-shortlist checkpoint with one verified entry; it is **not** catalogue/MVP acceptance.
- Next working loop: M17–M20 → M21/M22 → M23–M25. This adds guidance, grounded dialogue, comparison/search and voice without a separate prototype architecture.
- Close persistence/deletion and claims before claiming the full product works. M26 can start after its shared session representation and application prerequisites exist, D07a passes, and D08/D09 resolve Q7/Q8; it need not wait for voice or D07b.
- M06–M13 catalogue entries, provider/access research, and human-language-review preparation can progress independently of that initial path once their dependencies close. “Independent” permits separate work; it does not authorize automatic agent delegation.
- If a critical capability or no-spend constraint fails research, record the blocker and seek an explicit scope/technical decision. Do not silently replace live search, reduce languages, fabricate data, or remove barge-in.

## File ownership and slice locations

Follow SPEC §12.1. This is a planned layout; create only the files needed by the active task. Detailed per-task paths are recorded in `todo.md`.

| Slices | Main paths / formats | Boundary |
|---|---|---|
| S0–S1 | `frontend/src/features/onboarding/`, `profile/`, `state/session.ts`, `shared/profile.ts` | UI `.tsx`, state/contracts `.ts`; one shared active profile. |
| S2 | `data/catalogue/<plan-id>.json`, `data/sources.json`, `backend/src/catalogue/`, `shared/plan.ts` | Plan/schema content remains D02-gated; data JSON cannot contain fabricated premiums. |
| S3 | `backend/src/rules/`, `routes/`, `frontend/src/features/recommendations/`, `shared/contracts.ts` | Backend rules determine results; UI renders them and marks stale state. |
| S4–S6 | `backend/src/services/`, `routes/`, `middleware/`, `frontend/src/features/advisor/`, `comparison/`, `voice/`, `lib/api.ts` | Provider credentials stay server-side; frontend handles interaction/playback only. |
| S7 | `backend/src/storage/`, `middleware/`, `routes/`, `frontend/src/features/owner/`, `state/session.ts`, `shared/session.ts` | Owner access enforced on backend; runtime records are not repository JSON fixtures. |
| S8–S9 | `backend/src/rules/claims.ts`, `services/`, `frontend/src/features/claims/`, `i18n/locales/<language-code>/*.json` | Evidence-driven claim logic, verified-language translations; no assumed language list. |
| S10 / all checks | Colocated `.test.ts(x)`, `tests/integration/`, `tests/e2e/*.spec.ts`, `tests/fixtures/`, `docs/evidence/` | D01 chooses test tools; D06/D12 define language/browser inventory. |
| D01–D13 | `docs/decisions/<decision-id>.md`, `docs/evidence/`, relevant SPEC question | Record decisions/evidence before gated implementation; Markdown reports, no secret values. |

The generic S0 browser/server baseline is independent of hosted compatibility. D07a verifies Postgres connectivity only. M26 may implement the concrete database adapter after D07a and the Q7/Q8 decisions (D08/D09) pass; this does not claim hosted compatibility. Z01 remains gated on D08/D09 and a passing pre-deployment check of selected host/database plan eligibility and account resources. D07b stays at Z04 after the real adapter and deployment exist. Q7/Q8 are not waived, and D07/Q6/T08 remain open until D07b passes. Root `package.json` coordinates commands; package management and shared-source bundling remain D01 decisions. The filesystem split does not require a particular API schema.

## Checkpoints and task execution rules

- `todo.md` separates decision tasks, MVP build tasks, and final verification/deployment tasks. All start **TODO**.
- Task dependencies are hard prerequisites; decision dependencies also block task start. Marking TODO does not imply ready to start.
- Each task targets one focused session, normally S (1–2 files) or M (3–5 files). Use the per-task target paths under SPEC §12.1; D01 checks concrete file budgets and any tool-specific config needs. Split further before coding if scope exceeds five files or roughly two hours. No implementation code is part of this planning deliverable.
- K00–K12 and KT1 are review checkpoints after approximately 2–3 related build tasks. At each: focused checks pass, type/build checks pass, the accumulated journey runs, and failures/deviations are recorded. Checkpoint feedback must not become an invented product decision.
- D06 must expand Z05 into one concrete acceptance task per verified language. D12 must expand translation tasks into per-language children before their start if volume exceeds one session. Child tasks retain IDs, SPEC links, dependencies, DoD, verification and TODO status; the unknown inventory is a blocker, not permission to omit a language.
- Research tasks close with source/evidence records, not assumed answers. Live probes belong to future research tasks and must respect available credits and dummy data.
- Use deterministic fixtures for rules and model/provider failure responses; use bounded real-service tests for actual transport/integration. Fixtures are test evidence, never fake successful product results.
- D01 records actual commands. Subsequent tasks cite focused test names/scenarios plus the applicable build/type/lint commands; do not invent executable commands before tooling exists.

## Risks and blockers

| Risk | Effect | Treatment / blocking gate |
|---|---|---|
| 8–9 reliable plans and comparable premium evidence not yet collected | Recommendations/claims cannot be verified. | D02, per-plan tasks, D03–D05. Keep unknown values explicit; a first-entry checkpoint does not waive full catalogue. |
| Undefined ranking/default coverage/medical uncertainty rules | Developers would otherwise invent business behavior. | D03–D05 are hard blockers on dependent rule work. |
| Streaming/barge-in or Vercel arrangement incompatible | Voice architecture/deployment may require revision. | D06/D07a early feasibility; preflight account/plan eligibility within Z01; test actual hosted transport at D07b/Z04 after real paths exist. Keep S0 unblocked, retain Q7/Q8 as M26/Z01 gates, and retain D07b as a release/compatibility gate. |
| Free allowances insufficient; no app usage caps authorized | Testing or live availability may fail despite desired scope. | D06/D10/D11 verify credits and no-overage conditions; disclose provider exhaustion per §15; escalate incompatible constraints. |
| Session privacy/deletion and browser restoration conflict | Old sensitive state could reappear or cross users. | D08/D09 define isolation/deletion before persistence; test direct access and in-flight writes. |
| Full-language review exceeds available evaluators/time | Cannot claim language acceptance. | D06/D12 establish coverage early; Z05 includes every supported language; material failures block release claims. |
| AI/search documents contain unsupported facts or instructions | Hallucinated eligibility, premiums or payout. | Server-side rule authority, cited facts, untrusted-source handling, unknowns; M20/M22/M30 and Z06. |
| Originally reported three-day window conflicts with breadth | Completion is uncertain. | No unverified schedule guarantee; prioritize the first real path and record remaining MUSTs honestly. |
| Two-second target lacks measurement definition | Misleading performance claims. | D13 and Z07; report actual distributions, search delays separately; preserve SHOULD priority. |

## Requirement-to-delivery coverage

| SPEC requirements | Delivery tasks | Final evidence |
|---|---|---|
| F1, F4–F5, §10 | M02–M04, M16–M19 | A1/A2: Z02 |
| F2–F3, V7 | M01A–M01C, M18, M21, M23–M25, M33A–M33D, M34 | A3/A4/A13: Z02/Z04/Z05 |
| F6–F7, R1–R12 | M05–M17, M21 | A2/A5–A7/A12: Z02/Z03/Z06 |
| F8–F9, R13–R15 | M20, M30–M32 | A7/A8/A12: Z03/Z06 |
| R16, P7 | M22 | A9/A11: Z03/Z08; any P7 deferral recorded |
| V1–V5, V7 | M23–M25, M32, M33A–M33D | A3/A4/A13: Z04/Z05 |
| V6 (SHOULD) | M25 measurement events, D13 | Z07, explicit target deviation if needed |
| F10–F11, P2/P5 | M26–M29 | A10/A11: Z04/Z08 |
| P1/P3/P4/P6; §12 no-spend/no-caps | M01C, M18, M22–M29, M34 | A10–A12: Z01/Z04/Z06/Z08 |
| §15 all failure rows | Respective feature tasks, M34 | A11: Z08 |
| §17, remaining MUST gates | M35, Z01–Z09 | Z09 acceptance inventory; owner controls demonstration arrangements |

## Approval boundary

Review this plan before implementation. Decision closure must update the source of truth rather than bury new product rules in a task. This document creates no purchase, account signup, deployment, or code change by itself; those operations belong to the relevant approved future task and applicable authorization.
