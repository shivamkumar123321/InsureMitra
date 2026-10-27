# Task checklist — AI Health Insurance Advisor MVP

Source: [SPEC.md](../SPEC.md). Sequence/slices/risks: [plan.md](plan.md). D01 and D02 decision/research are complete; no application implementation has started. See [build-progress.md](../build-progress.md).

## Task conventions

- Task statuses start **TODO** and become complete only after required verification passes. All listed dependencies are hard blockers on task start, including research/decision IDs. After closure, record evidence/outcome and update relevant SPEC open questions; never infer a decision from an unchecked task.
- Scope labels: S = 1–2 likely files; M = 3–5. Each task lists target paths under SPEC §12.1; directory/glob targets identify ownership, not permission to edit every matching file. D01 confirms at most five concrete files per coding task and adds only necessary tool configuration. If a task needs more than five files or approximately two hours, split it before coding; do not combine independent capabilities to finish faster.
- Common build Definition of Done: stated behavior verified, focused checks plus applicable build/type/lint commands from D01 pass, no secrets/retained mic audio or out-of-scope features, failures accurately surfaced. Tests target meaningful behavior, not implementation mirrors. Decision tasks finish with evidence and explicit recorded resolutions, not application code.
- Checkpoints are review gates, not new features. Record results and obtain human review before advancing the affected path; independent unblocked research may continue. No existing unchecked work was present when this checklist was created.

## 1. Blocking research/decisions

### D01 — Establish executable project conventions
- **Description:** Choose minimal tooling/versions within SPEC §12.1, including shared-TypeScript compilation and dependency management; define actual build/dev/type/lint/focused-test/browser-test commands.
- **SPEC:** §12.1, §18 downstream technical choices.
- **Dependencies:** None. **Scope:** S; decision/conventions record.
- **Files:** `docs/decisions/D01.md`; `docs/evidence/D01-*.md`; `SPEC.md` (affected question only).
- **DoD:** Record chosen tools, exact commands and per-task file budgets against the specified layout; preserve file formats and browser/server boundaries. Split M01A or other tasks if necessary config exceeds five files; avoid product code in this decision task.
- **Verification:** Check commands against chosen tools' official documentation; executable confirmation follows M01B.
- **Evidence:** [D01 decision](../docs/decisions/D01.md), [D01 verification](../docs/evidence/D01-tooling-evidence.md). PASS: documentary/source/compatibility/budget checks; application commands not run (deferred to M01A/M01B).
- [x] **Status: COMPLETE**.

### D02 — Resolve catalogue evidence and comparability policy
- **Description:** Research/propose 8–9 real plan slots and define source sufficiency, conflicting/stale sources, premium assumptions/comparability, missing values and evidence schema.
- **SPEC:** Q1, §11, R2, R10, R12–R15.
- **Dependencies:** None. **Scope:** M; source register, catalogue policy and SPEC decision record.
- **Files:** `docs/decisions/D02.md`; `docs/evidence/D02-*.md`; `SPEC.md` (affected question only).
- **DoD:** Slot identities and official documents listed; verification/update criteria and comparable-price rules recorded. No unsupported price/eligibility values accepted. Per-entry full extraction remains M05–M13.
- **Verification:** Official-source spot check and sample known/unknown/conflicting fields; obtain clarification for unresolved selection or comparison behavior.
- **Evidence:** [D02 decision](../docs/decisions/D02.md), [official sources](../docs/evidence/D02-source-register.md), [policy checks](../docs/evidence/D02-policy-checks.md). PASS: eight selected identities/official wordings, UIN/page/hash checks, evidence-state samples and explicit comparison rules; full extraction/application commands not run.
- [x] **Status: COMPLETE**.

### D03 — Resolve deterministic ranking behavior
- **Description:** Define default/main-priority fit, restrictions/condition fit, secondary preference conflicts and ties without changing settled cheapest-first rules.
- **SPEC:** Q2, R1, R4–R10.
- **Dependencies:** D02. **Scope:** S; rule/fixture decision record and SPEC update.
- **Files:** `docs/decisions/D03.md`; `docs/evidence/D03-*.md`; `SPEC.md` (affected question only).
- **DoD:** A deterministic rule set and small input/expected-order examples exist for every supported priority, including equivalent/unknown-price outcomes; no model-selected scoring.
- **Verification:** Walk examples against SPEC R4–R10; user resolves intent not settled by evidence.
- **Outcome (2026-10-26):** PASS. User approved unsure-user order (family/health fit ? affordability ? fewer relevant restrictions), main-priority dominance with secondary equal-fit refinements, no weighted scores, and scenario-specific condition fit with broader coverage secondary. Synthetic examples pass against R1/R4?R10. RD1 reviewed D01?D03 against the plan; no hidden versions, insurer choices, scores, or prices found. See [D03 decision](../docs/decisions/D03.md) and [examples/RD1 evidence](../docs/evidence/D03-ranking-examples.md).
- [x] **Status: COMPLETE**.

#### Research checkpoint RD1
- [x] D01?D03 outcomes reviewed (2026-10-26); no assumed versions, insurer choices, scores, or prices hidden in the plan. Audit: [D03 evidence](../docs/evidence/D03-ranking-examples.md#rd1-checkpoint-audit).

### D04 — Resolve coverage guidance and validation
- **Description:** Establish evidence-based coverage/budget suggestions, policy-structure amount options and input validation boundaries.
- **SPEC:** Q3, F4, R9–R11, §10.
- **Dependencies:** D02. **Scope:** M; guidance evidence, rule examples, SPEC decision record.
- **Files:** `docs/decisions/D04.md`; `docs/evidence/D04-*.md`; `SPEC.md` (affected question only).
- **DoD:** Supported choices and recommendation rationale recorded; insufficient-premium guidance behavior defined; no unapproved city-tier formula.
- **Verification:** Trace sample suggestions and boundaries to sources/catalogue options; clarify unsupported choices.
- **Outcome (2026-10-26):** PASS. Official source examples and input boundaries verified; mismatched UIN evidence excluded. User selected INR 20 lakh as a default starting suggestion when budget or matching quote is missing, only if exactly supported by the eligible product/structure; affordability and adequacy are not asserted. With matched quote and budget, highest supported base SI within budget is suggested. R9/R10 behavior is preserved. See [D04 decision](../docs/decisions/D04.md) and [evidence](../docs/evidence/D04-coverage-evidence.md).
- [x] **Status: COMPLETE**.
### D05 — Resolve minimal profile and health uncertainty
- **Description:** Decide nickname optionality, minimum confirmation, exact provisional-health cases and required medical follow-ups/labels.
- **SPEC:** Q4, Q13, F1/F4/F5, R2–R3, §10.
- **Dependencies:** D02. **Scope:** S; profile decision table and SPEC update.
- **Files:** `docs/decisions/D05.md`; `docs/evidence/D05-*.md`; `SPEC.md` (affected question only).
- **DoD:** Unknown/no-condition/missing values distinguished; permitted provisional cases versus blocked decisions explicit; only documented-rule follow-ups allowed.
- **Verification:** Review family, senior, multiple-condition and unknown-history examples; unresolved intent gets explicit clarification.
- **Outcome (2026-10-26):** PASS. Owner profiling rules and official IRDAI floater/renewal/migration distinctions recorded; scenario and source verification passed. Owner approved RD2 after reviewing D04–D06. See [D05 decision](../docs/decisions/D05.md), [evidence](../docs/evidence/D05-profile-cases.md), [IRDAI source research](../docs/evidence/D05-irdai-floater-structure.md), and [RD2 review](../docs/evidence/D05-RD2-review.md).
- [x] **Status: COMPLETE**.
- **Attempt 2026-10-26 18:06 +05:30:** Owner specified no nickname, proposer age >18, multi-person relationships to proposer, source-verified floater eligibility, and separate-plan suggestions when one floater cannot cover all. IRDAI source checks and profile cases are recorded in [D05](../docs/decisions/D05.md), [floater-source evidence](../docs/evidence/D05-irdai-floater-structure.md), and [scenario evidence](../docs/evidence/D05-profile-cases.md). Agent RD2 cross-check is recorded at [RD2 review](../docs/evidence/D05-RD2-review.md); required owner checkpoint review is pending. Keep task TODO until RD2 passes.
- **Profile-rule update 2026-10-26 18:41 +05:30:** Owner clarified outside-plan proposer, minor proposer, dependent role, strict parent-child age gap, close-family boundary, member-count/child-age examples, and child transition at renewal. Official IRDAI renewal/migration guidance was checked and recorded. Spouse/father-in-law membership remained unclear at that point; RD2 owner review remains pending. See updated [D05](../docs/decisions/D05.md), [scenario evidence](../docs/evidence/D05-profile-cases.md), and [official evidence](../docs/evidence/D05-irdai-floater-structure.md).
- **Profile-rule update 2026-10-26 18:52 +05:30:** Owner clarified spouse may be in the shared plan and father-in-law must have a separate plan (and may be proposer if over 18). This resolves the close-family question; exact product/proposer eligibility remains source-dependent. RD2 owner review remains pending. See updated [D05](../docs/decisions/D05.md), [scenario evidence](../docs/evidence/D05-profile-cases.md), and [official evidence](../docs/evidence/D05-irdai-floater-structure.md).

### D06 — Verify speech feasibility and language inventory
- **Description:** Check actual Gnani endpoints/credits, streaming and interruption capabilities, language/voice/code-switch inventory and human-review coverage.
- **SPEC:** Q5, V1–V4, P4, §12.
- **Dependencies:** None. **Scope:** M; capability matrix and bounded probe evidence.
- **Files:** `docs/decisions/D06.md`; `docs/evidence/D06-*.md`; `SPEC.md` (affected question only).
- **DoD:** Document supported intersection including Tamil, endpoint availability and usable credit evidence; identify evaluator coverage and blockers. Expand Z05 into one concrete TODO child task per verified language, copying all required task fields; do not invent an inventory now. Missing support is flagged, not silently removed.
- **Verification:** Official docs plus minimal dummy-data STT/TTS/interrupt probe within available credits; no retained audio or unapproved paid services.
- **Attempt:** 2026-10-26 — blocked: no configured Gnani access found in checked environment/workspace/connector channels; credits and live probes unverified. [D06 status](../docs/decisions/D06.md), [preflight evidence](../docs/evidence/D06-access-blocker.md). No verification pass; T03–T07 range stopped at T03 under the user's stop condition.
- **Resumed attempt:** 2026-10-26 11:20 +05:30 — [official auth research](../docs/evidence/D06-auth-research.md) and no-key REST 401 checks recorded. No project-ID requirement established; actual .env/key still not visible in checked channels. Authenticated probes/resources remain unverified; no completion claimed.
- **Configuration update:** 11:26 +05:30 — user-requested .env/key saved and ignored via .gitignore. Authentication request to documented alternate host was rejected by automatic approval review before execution; specific alternate-host credential authorization needed. No authenticated result or task completion claimed.
- **Authenticated resume:** 11:48 +05:30 — host authorization resolved; [controlled key checks](../docs/evidence/D06-authenticated-preflight.md) verify authentication without a project ID. Balance/expiry/no-overage and evaluator evidence remain missing; actual STT/TTS/streaming/interruption verification not run. Status remains TODO; do not start T04.
- **Final T03 verification:** 2026-10-26 — PASS. [Live-probe and resource evidence](../docs/evidence/D06-live-probes.md) records owner-attested usable credits/no-overage, authenticated REST TTS/STT for all ten common languages including Tamil, one Hinglish synthetic loopback, TTS WebSocket completion/early client close, realtime STT transcript, and reviewer status for all languages. [D06 decision](../docs/decisions/D06.md) records remaining human-quality/browser barge-in/provider cancellation limits. Added one child task per verified language under Z05; all ten remain TODO pending their existing dependencies and human acceptance. Updated the affected SPEC Q5/integration notes. No audio retained, no secret recorded, no project ID assumed, and T04 not started.
- [x] **Status: COMPLETE for the D06 research and bounded-probe task.**

#### Research checkpoint RD2
- [x] D04–D06 outcomes reviewed; guidance/profile decisions concrete and language/speech feasibility gaps visible.
- **Agent cross-check:** PASS; [review record](../docs/evidence/D05-RD2-review.md). **Owner/human review:** PASS — owner replied “yes go ahead” on 2026-10-26 after review request.

### D07 — Verify hosting and storage arrangement
- **Description:** Investigate Vercel transport requirements and any necessary free backend/storage without committing to an unsupported topology.
- **SPEC:** Q6, §12, F10/F11, V2.
- **Dependencies:** D06. **Scope:** M; compatibility/cost record and bounded transport probe.
- **Files:** `docs/decisions/D07.md`; `docs/evidence/D07-*.md`; `SPEC.md` (affected question only).
- **DoD:** Chosen/proposed arrangement has documented streaming/connection and durable laptop/hosted access evidence, limits and free conditions; incompatibilities explicitly blocked.
- **Verification:** Verify official hosting terms and minimal transport/restart persistence feasibility; distinguish probe evidence from final deployed-app acceptance.
- **D07a outcome (2026-10-26):** PASS for owner-authorized Neon database feasibility. The existing `production` branch is linked/deployed; Neon status passed; pooled/direct connection URLs were added to ignored `.env` without changing prior assignments; a real temporary-table insert/read using `pg` passed and rolled back. This does not verify an app adapter or hosted persistence. See [D07 evidence](../docs/evidence/D07-hosting-feasibility.md).
- **D07b status:** TODO. Hosted WebSocket and persistence across app restart/redeploy are NOT RUN because the real application runtime and deployment do not exist yet. Schedule it as part of Z04 after M25, M26–M29 and Z01, using the real app: verify local/hosted access to synthetic persistent data, restart/redeploy, reconnect, read the same record and verify hosted WebSocket transport. Do not create a throwaway runtime solely for this probe. SPEC §12.1 now distinguishes prerequisites from post-implementation verification: M26 requires D07a plus resolved Q7/Q8; Z01 requires resolved Q7/Q8 and a pre-deployment host/database plan and account-resource eligibility check; D07b remains required after Z01 before claiming hosted compatibility. Q7/Q8 gates remain intact. Overall D07 remains TODO until D07b passes.
- [ ] **Status: TODO**.

### D08 — Decide owner and tester access boundaries
- **Description:** Define owner authentication/authorization, invited-tester access and current-session isolation without adding customer accounts or usage caps.
- **SPEC:** Q7, P2/P6, F10/F11.
- **Dependencies:** D07a. **Scope:** S; access matrix and SPEC update.
- **Files:** `docs/decisions/D08.md`; `docs/evidence/D08-*.md`; `SPEC.md` (affected question only).
- **DoD:** Owner/tester/unauthenticated permissions and session restoration identity recorded; shared code is not assumed approved.
- **Verification:** Table covers direct list/read/delete requests, another tester's session and expired/invalid credentials.
- [ ] **Status: TODO**.

### D09 — Decide complete deletion semantics
- **Description:** Define deletion coverage, browser invalidation, concurrent/in-flight saves, logs/backups/provider limits and accurate owner wording.
- **SPEC:** Q8, F11, P4/P5.
- **Dependencies:** D07a, D08, D10. **Scope:** S; deletion cases and SPEC update.
- **Files:** `docs/decisions/D09.md`; `docs/evidence/D09-*.md`; `SPEC.md` (affected question only).
- **DoD:** Delete-all success/failure contract and no-resurrection behavior defined for every retained copy; provider limits disclosed; no automatic schedule added.
- **Verification:** Walk delete-during-save, restored browser, partial failure and provider-retention cases against chosen storage evidence.
- [ ] **Status: TODO**.

#### Research checkpoint RD3
- [ ] D07a, D08 and D09 reviewed once prerequisites close; do not wait for D07b's future hosted probe to start app development. Hosted verification remains at Z04.

### D10 — Verify provider notices and live-search policy
- **Description:** Verify processing/retention disclosures and Tavily access/free terms; define query minimization, official domains and missing-link behavior.
- **SPEC:** Q9, R15/R16, P3/P4/P7, §12.
- **Dependencies:** D06, D07a, D11. **Scope:** M; provider evidence, query/domain rules and notice text.
- **Files:** `docs/decisions/D10.md`; `docs/evidence/D10-*.md`; `SPEC.md` (affected question only).
- **DoD:** Search access/allowances checked; permitted query/result behavior and provider notice approved/recorded; P7 deferral, if any, explicit.
- **Verification:** Bounded dummy search, source-link checks and query inspection; never send names/full profiles by assumption.
- [ ] **Status: TODO**.

### D11 ? Verify reasoning resources and failure policies
- **Description:** Select/verify OpenAI model/access and cost protections, reasoning/search/transport timeout and retry behavior within available resources.
- **SPEC:** Q10, ?12/?15, P3; no app caps in ?5.
- **Dependencies:** None. **Scope:** M; model/credit/timeout decision record.
- **Files:** `docs/decisions/D11.md`; `docs/evidence/D11-*.md`; `SPEC.md` (affected question only).
- **DoD:** Model/credit availability and no-overage conditions documented; timeout/retry outcomes preserve state; any conflict between no-spend/no-caps/availability escalated, not bypassed.
- **Verification:** Official model/provider terms and bounded dummy text call; no credential values in records; no invented credit guarantee.
- **Outcome (2026-10-26):** PASS. User-reported project limit/expiry and remaining unknown billing facts are explicitly distinguished; no billing setting changed. Authenticated `gpt-6-luna` probe passed with 15 input/6 output tokens. Official overage caveat retained; D11 records state-preserving failures and no automatic retry of ambiguous timeouts. Application-level tests are deferred to implementation tasks. See [D11 decision](../docs/decisions/D11.md) and [live evidence](../docs/evidence/D11-live-probe.md).
- [x] **Status: COMPLETE**.

### D12 — Define browser, translation and accessibility checks
- **Description:** Establish target browsers/devices, language UI inventory and concrete accessibility/readability criteria.
- **SPEC:** Q12, F2/F3, V1/V7, A3/A13.
- **Dependencies:** D06. **Scope:** S; compatibility and review matrix.
- **Files:** `docs/decisions/D12.md`; `docs/evidence/D12-*.md`; `SPEC.md` (affected question only).
- **DoD:** Language/screen inventory and human review coverage linked to D06; chosen browser and accessibility expectations are testable; no arbitrary unsupported pass threshold.
- **Verification:** Trace every translated screen and speech path to a browser/language check; record unverified devices.
- [ ] **Status: TODO**.

#### Research checkpoint RD4
- [ ] D10–D12 outcomes reviewed; verify privacy/resource/browser decisions before provider-backed features start. Dependency execution may place D11 earlier.

### D13 — Define latency evidence
- **Description:** Define end-of-speech/start-of-audio measurement, conditions, percentile/distribution and search-delay reporting.
- **SPEC:** Q11, V6 (SHOULD), A3, §17.
- **Dependencies:** D06, D11, D12. **Scope:** S; measurement criteria record.
- **Files:** `docs/decisions/D13.md`; `docs/evidence/D13-*.md`; `SPEC.md` (affected question only).
- **DoD:** Measurable target and report format recorded without promising a hard two-second guarantee or lowering any MUST.
- **Verification:** Review sample timestamps/calculation and explicit separation of search delays.
- [ ] **Status: TODO**.

Decision execution order where dependencies require it: D01/D02/D06/D11 → D03/D04/D05/D07a/D12 → D08/D10/D13 → D09. D07b is a hosted verification checkpoint assigned to Z04 after the real application and deployment exist. Research checkpoint grouping does not override dependency order; M01A is eligible after D01 and M01B follows M01A. Neither generic S0 task requires hosted D07b.

## 2. MVP build tasks

### M01A — Fixed-stack tooling baseline (S0)
- **Description:** Add only the minimal package, compiler and runner configuration chosen in D01.
- **SPEC:** §12 fixed stack and downstream tooling choices.
- **Dependencies:** D01. **Scope:** M; at most five configuration/manifest files assigned in D01; use minimal configuration, not a whole generated template.
- **Files:** `package.json`; `frontend/package.json`; `backend/package.json`; `frontend/tsconfig.json`; `backend/tsconfig.json` (D01 must budget lockfile/tool config separately if needed).
- **DoD:** Dependency installation and chosen command definitions are valid; no product behavior/provider integrations added; source-dependent build checks are explicitly deferred to M01B, not falsely reported passing.
- **Verification:** Installation/configuration validation and dependency/version review against D01; no secrets or paid service setup.
- **Substep progress:** T14.a manifests/lock and T14.b compiler/Vite/lint configuration passed. T14.c test-runner configuration remains Pending; keep M01A Pending until the bounded baseline setup is complete. Source-dependent build/dev/typecheck/test execution remains with M01B.
- [ ] **Status: TODO**.

### M01B — Executable browser/server baseline (S0)
- **Description:** Add the smallest frontend and Express server entry paths needed to execute the chosen stack.
- **SPEC:** §12 fixed stack.
- **Dependencies:** M01A. **Scope:** M; browser HTML/entry, server entry, runner wiring and focused smoke check, at most five files.
- **Files:** `frontend/index.html`; `frontend/src/main.tsx`; `backend/src/app.ts`; `backend/src/server.ts`; `tests/integration/baseline.test.ts`.
- **DoD:** Browser and server execute locally with D01 commands; build/type/lint baseline passes; no business rules or speculative endpoint contracts introduced.
- **Verification:** Actual D01 build/type/lint commands and focused browser/server smoke check.
- [ ] **Status: TODO**.

### M01C — Welcome and workspace shell (S0)
- **Description:** Add welcome-to-workspace entry, responsive shell, language state and dummy notice to the running baseline.
- **SPEC:** F2/F3 foundation, P1, §6/§12.
- **Dependencies:** M01B, D12. **Scope:** M; shell/welcome UI, styles/language state and browser check, at most five files.
- **Files:** `frontend/src/App.tsx`; `frontend/src/styles.css`; `frontend/src/features/onboarding/Welcome.tsx`; `frontend/src/i18n/index.ts`; `tests/e2e/welcome.spec.ts`.
- **DoD:** One-click form/conversation entry, laptop/phone shell and language selector run; selected language preserved when entering workspace; no provider credentials required.
- **Verification:** Actual D01 checks and browser welcome/entry/layout check.
- [ ] **Status: TODO**.

#### Foundation checkpoint K00
- [ ] M01A–M01C reviewed; executable fixed-stack shell works before intake; no oversized generated scaffold or invented product behavior.

### M02 — Family and health intake (S1)
- **Description:** Add stepped family/health entry backed by one shared profile.
- **SPEC:** F1/F4, R3, §10, P1.
- **Dependencies:** M01C, D04, D05. **Scope:** M; profile state, family/health form and focused tests.
- **Files:** `shared/profile.ts`; `frontend/src/state/session.ts`; `frontend/src/features/onboarding/FamilyHealthStep.tsx`; `frontend/src/features/onboarding/FamilyHealthStep.test.tsx`.
- **DoD:** Ages/relationships and per-person condition/no-condition/not-sure values persist across back navigation; malformed/conflicting values clarified; prohibited identity fields absent.
- **Verification:** Multiple people, senior/child boundaries from agreed rules, unknown versus no conditions and back-navigation cases.
- [ ] **Status: TODO**.

### M03 — Budget and preference intake (S1)
- **Description:** Capture budget/coverage values or explicit uncertainty, main priority and optional insurer/secondary preferences.
- **SPEC:** F1/F4, R4/R7/R11, §10.
- **Dependencies:** M02, D03, D04. **Scope:** M; next form steps, profile fields and tests.
- **Files:** `frontend/src/features/onboarding/BudgetPreferencesStep.tsx`; `frontend/src/state/session.ts`; `shared/profile.ts`; `frontend/src/features/onboarding/BudgetPreferencesStep.test.tsx`.
- **DoD:** Choices persist on back navigation; malformed amounts rejected using decided rules; no automatic budget/coverage adjustment or fabricated estimates.
- **Verification:** Known/unknown amounts, changed priority, preferred insurer and conflicting inputs.
- [ ] **Status: TODO**.

#### Checkpoint K01 — Intake
- [ ] M02–M03 pass focused/build checks; welcome and stepped intake work on laptop/phone; review before next affected slice.

### M04 — Shared editable confirmation (S1)
- **Description:** Complete intake with editable summary and explicit confirmation state usable by form and later conversation.
- **SPEC:** F1/F5, V4, Q13, §6.
- **Dependencies:** M03, D05. **Scope:** M; confirmation UI, profile transitions and tests.
- **Files:** `frontend/src/features/profile/ProfileConfirmation.tsx`; `frontend/src/state/session.ts`; `frontend/src/features/profile/ProfileConfirmation.test.tsx`.
- **DoD:** Confirmed summary includes required ages/health/budget/coverage/preferences; corrections preserve unaffected data; required unknowns follow D05 and no premature recommendation occurs.
- **Verification:** Missing required field, provisional health, correction and successful confirmation cases.
- [ ] **Status: TODO**.

### M05 — First verified real plan (S2)
- **Description:** Define the catalogue evidence representation and load selected slot 1, with explicit unknown/not-applicable fields.
- **SPEC:** §11, R2/R10/R12/R15, A12.
- **Dependencies:** D01, D02. **Scope:** M; catalogue contract/validation, one entry/source record and tests.
- **Files:** `shared/plan.ts`; `backend/src/catalogue/validate.ts`; `data/catalogue/<slot-1-plan-id>.json`; `data/sources.json`; `backend/src/catalogue/validate.test.ts`.
- **DoD:** First entry has sourced eligibility/coverage/waits/price assumptions; no fabricated premiums; validation rejects unsupported mandatory claims and distinguishes unknowns.
- **Verification:** Compare entry to official wording/prospectus and test missing/conflicting-field validation per D02.
- [ ] **Status: TODO**.

### M06 — Verify catalogue slot 2 (S2)
- **Description:** Research, encode and validate the second selected real plan using the established evidence format.
- **SPEC:** §11, R2/R10/R12–R15, A12.
- **Dependencies:** M05. **Scope:** S; one entry/evidence file and fixture.
- **Files:** `data/catalogue/<slot-2-plan-id>.json`; `data/sources.json`; `tests/fixtures/catalogue/<slot-2-plan-id>.json`.
- **DoD:** Identity/variant and all applicable rules traced; premium unknowns/assumptions explicit; data passes catalogue validation.
- **Verification:** Official-source field review plus focused entry-validation check.
- [ ] **Status: TODO**.

#### Checkpoint K02 — Evidence representation
- [ ] M04–M06 focused/build checks pass; profile confirmation and two source-backed entries reviewed. M05 can proceed independently of M04.

### M07 — Verify catalogue slot 3 (S2)
- **Description:** Research and encode selected real plan 3, preserving source provenance.
- **SPEC:** §11, R2/R10/R12–R15, A12.
- **Dependencies:** M05. **Scope:** S; one entry/evidence file and fixture.
- **Files:** `data/catalogue/<slot-3-plan-id>.json`; `data/sources.json`; `tests/fixtures/catalogue/<slot-3-plan-id>.json`.
- **DoD:** Applicable rules/unknowns and price assumptions documented; catalogue validation passes.
- **Verification:** Official-source review and entry-validation check.
- [ ] **Status: TODO**.

### M08 — Verify catalogue slot 4 (S2)
- **Description:** Research and encode selected real plan 4 in the same format.
- **SPEC:** §11, R2/R10/R12–R15, A12.
- **Dependencies:** M05. **Scope:** S; one entry/evidence file and fixture.
- **Files:** `data/catalogue/<slot-4-plan-id>.json`; `data/sources.json`; `tests/fixtures/catalogue/<slot-4-plan-id>.json`.
- **DoD:** Applicable rules/unknowns and price assumptions documented; catalogue validation passes.
- **Verification:** Official-source review and entry-validation check.
- [ ] **Status: TODO**.

### M09 — Verify catalogue slot 5 (S2)
- **Description:** Research and encode selected real plan 5 in the same format.
- **SPEC:** §11, R2/R10/R12–R15, A12.
- **Dependencies:** M05. **Scope:** S; one entry/evidence file and fixture.
- **Files:** `data/catalogue/<slot-5-plan-id>.json`; `data/sources.json`; `tests/fixtures/catalogue/<slot-5-plan-id>.json`.
- **DoD:** Applicable rules/unknowns and price assumptions documented; catalogue validation passes.
- **Verification:** Official-source review and entry-validation check.
- [ ] **Status: TODO**.

#### Checkpoint K03 — Catalogue growth
- [ ] M07–M09 source reviews pass; no unsupported eligibility, premiums, or waiting clauses; independent core-flow work need not wait for this batch.

### M10 — Verify catalogue slot 6 (S2)
- **Description:** Research and encode selected real plan 6 in the same format.
- **SPEC:** §11, R2/R10/R12–R15, A12.
- **Dependencies:** M05. **Scope:** S; one entry/evidence file and fixture.
- **Files:** `data/catalogue/<slot-6-plan-id>.json`; `data/sources.json`; `tests/fixtures/catalogue/<slot-6-plan-id>.json`.
- **DoD:** Applicable rules/unknowns and price assumptions documented; catalogue validation passes.
- **Verification:** Official-source review and entry-validation check.
- [ ] **Status: TODO**.

### M11 — Verify catalogue slot 7 (S2)
- **Description:** Research and encode selected real plan 7 in the same format.
- **SPEC:** §11, R2/R10/R12–R15, A12.
- **Dependencies:** M05. **Scope:** S; one entry/evidence file and fixture.
- **Files:** `data/catalogue/<slot-7-plan-id>.json`; `data/sources.json`; `tests/fixtures/catalogue/<slot-7-plan-id>.json`.
- **DoD:** Applicable rules/unknowns and price assumptions documented; catalogue validation passes.
- **Verification:** Official-source review and entry-validation check.
- [ ] **Status: TODO**.

### M12 — Verify catalogue slot 8 (S2)
- **Description:** Research and encode selected real plan 8 in the same format.
- **SPEC:** §11, R2/R10/R12–R15, A12.
- **Dependencies:** M05. **Scope:** S; one entry/evidence file and fixture.
- **Files:** `data/catalogue/<slot-8-plan-id>.json`; `data/sources.json`; `tests/fixtures/catalogue/<slot-8-plan-id>.json`.
- **DoD:** Applicable rules/unknowns and price assumptions documented; catalogue validation passes.
- **Verification:** Official-source review and entry-validation check.
- [ ] **Status: TODO**.

#### Checkpoint K04 — Minimum full catalogue
- [ ] M10–M12 plus prior entries yield eight verified plans with explicit gaps; overall catalogue validation passes; review full-catalogue evidence before claiming A12.

### M13 — Resolve catalogue slot 9 (S2, conditional on D02)
- **Description:** Encode selected slot 9 if D02 chooses nine plans; otherwise record that the approved catalogue contains eight and this task is not applicable.
- **SPEC:** §11, A12; 8–9-plan requirement.
- **Dependencies:** M05, D02. **Scope:** S; one entry/evidence file and fixture, or documented non-applicability.
- **Files:** `data/catalogue/<slot-9-plan-id>.json`; `data/sources.json`; `tests/fixtures/catalogue/<slot-9-plan-id>.json` (or eight-plan non-applicability recorded in docs/decisions/D02.md).
- **DoD:** Catalogue contains exactly the approved eight or nine verified entries; no placeholder ninth product.
- **Verification:** Source/validation check for ninth entry, or documented eight-plan decision and catalogue count.
- [ ] **Status: TODO**.

### M14 — Documented eligibility path (S3)
- **Description:** Evaluate the confirmed profile against catalogue eligibility and clearly represent provisional, separate-policy and unverified cases.
- **SPEC:** R1–R3/R12, F5, A5.
- **Dependencies:** M04, M05, D05. **Scope:** M; eligibility evaluator, result contract and focused fixtures.
- **Files:** `backend/src/catalogue/load.ts`; `backend/src/rules/eligibility.ts`; `backend/src/rules/eligibility.test.ts`; `shared/contracts.ts`; `tests/fixtures/eligibility.json`.
- **DoD:** Known-ineligible/unverified age-family plans never ranked; health uncertainty follows D05; exactly covered people and insurer medical-assessment caveats explicit.
- **Verification:** Source-derived age/family boundaries, multiple conditions, senior members and unknown history against deterministic fixtures.
- [ ] **Status: TODO**.

### M15 — Priority and price ordering (S3)
- **Description:** Rank eligible results using the resolved rules, insurer preference and comparable price evidence.
- **SPEC:** R4–R10, A6.
- **Dependencies:** M14, D02, D03. **Scope:** M; ranking rules, permission state and fixtures.
- **Files:** `backend/src/rules/ranking.ts`; `backend/src/rules/ranking.test.ts`; `tests/fixtures/ranking.json`; `shared/contracts.ts`.
- **DoD:** Main/default priorities, ties and unknown prices follow D03; over-budget deltas and too-few/no-match states accurate; alternatives require permission when insurer preference applies.
- **Verification:** Priority conflicts, comparable/unknown/equal premiums, all-over-budget, single/no match and preferred-insurer fixtures.
- [ ] **Status: TODO**.

#### Checkpoint K05 — Rule authority
- [ ] M13 applicability resolved; M14–M15 focused/build checks pass; review evidence-based rules and first-entry results without claiming full catalogue acceptance.

### M16 — Form-to-shortlist vertical path (S3)
- **Description:** Connect confirmed profile to rule evaluation and concise result cards; support explicit updates after edits.
- **SPEC:** F5/F6, R8–R10/R12/R15, A1/A2.
- **Dependencies:** M15. **Scope:** M; result action, cards/stale state and browser test.
- **Files:** `backend/src/routes/recommendations.ts`; `frontend/src/features/recommendations/Results.tsx`; `frontend/src/state/session.ts`; `frontend/src/lib/api.ts`; `tests/e2e/recommendations.spec.ts`.
- **DoD:** User completes form and sees real sourced results; edits retain visibly outdated cards until Update recommendations; no padded results, invented prices or hidden uncovered people.
- **Verification:** End-to-end form→confirm→result→edit→update using a verified entry; lower-than-three matches are explained.
- [ ] **Status: TODO**.

### M17 — Budget and coverage guidance (S3)
- **Description:** Add the agreed guidance to the existing intake/result flow for unsure users.
- **SPEC:** R9–R11, F1/F4, A7.
- **Dependencies:** M16, D04. **Scope:** M; guidance rules, choice UI and fixtures.
- **Files:** `backend/src/rules/coverage.ts`; `backend/src/rules/coverage.test.ts`; `frontend/src/features/onboarding/CoverageGuidance.tsx`; `tests/fixtures/coverage.json`.
- **DoD:** Show 2–3 supported coverage choices with documented suggestion and sourced premium ranges or honest price insufficiency; respect selection and never silently adjust values. If evidence cannot support the required coverage choices, record a blocker rather than mark the requirement passed.
- **Verification:** Unknown budget/coverage, unsupported amount and all-over-budget corrections against D04 examples.
- [ ] **Status: TODO**.

#### Checkpoint K06 — First useful deterministic journey
- [ ] M16–M17 build and browser journey pass; confirm rules rather than model intuition generate the shortlist. Remaining catalogue entries still required for release.

### M18 — Grounded text question path (S4)
- **Description:** Add server-side reasoning for insurance questions before profile intake, with transcript and provider failure states.
- **SPEC:** F2/F8, V5, P3/P4/P6, §15.
- **Dependencies:** M16, D07a, D08, D10, D11. **Scope:** M; protected reasoning boundary, text conversation UI and focused checks.
- **Files:** `backend/src/services/openai.ts`; `backend/src/routes/advisor.ts`; `backend/src/middleware/access.ts`; `frontend/src/features/advisor/Conversation.tsx`; `tests/integration/advisor.test.ts`.
- **DoD:** Text question→grounded written answer works with provider notice/access policy; secrets stay server-side; reasoning failure preserves profile/results and displays unavailability.
- **Verification:** Bounded real dummy question, invalid access, timeout/exhaustion fixture and client-secret inspection.
- [ ] **Status: TODO**.

### M19 — Conversation-driven profile collection (S4)
- **Description:** Feed conversational extraction/corrections into the same profile and confirmation/result actions as the form.
- **SPEC:** F1/F4/F5, V4, R1/R3/R4/R7/R11.
- **Dependencies:** M18, M17. **Scope:** M; conversation/profile bridge, validation and flow tests.
- **Files:** `backend/src/services/conversation.ts`; `frontend/src/state/session.ts`; `shared/profile.ts`; `tests/integration/conversation-profile.test.ts`.
- **DoD:** Ask missing information only; clarify uncertain/conflicting details; confirmation and explicit Update recommendations remain mandatory; AI cannot override rule outcomes.
- **Verification:** Form→text→form switching, unknown health, correction of age/budget and attempted eligibility override.
- [ ] **Status: TODO**.

### M20 — Sourced explanations and interruption recovery (S4)
- **Description:** Ground plan/concept answers in evidence and resume pending intake after user questions.
- **SPEC:** F8, R13/R15, V4/V5, P3, A7/A12.
- **Dependencies:** M19. **Scope:** M; grounded explanation/continuation behavior and focused fixtures.
- **Files:** `backend/src/services/explanations.ts`; `backend/src/services/conversation.ts`; `tests/fixtures/policy-questions.json`; `tests/integration/grounding.test.ts`.
- **DoD:** Required insurance concepts have concise explanations; documented plan claims cite sources; absent/conflicting facts yield uncertainty; confusing questions get examples/checks and return to flow.
- **Verification:** Concept inventory, upcoming-treatment question, missing/conflicting source, document-instruction injection and interruption/resume cases.
- [ ] **Status: TODO**.

#### Checkpoint K07 — Shared text advisor
- [ ] M18–M20 focused/build/browser checks pass; form and text reach the same profile/results; no fabricated policy facts or duplicate intake.

### M21 — Selectable plan comparison (S5)
- **Description:** Turn result cards into the right-panel side-by-side comparison with expandable evidence.
- **SPEC:** F2/F6/F7, R10/R12/R15, A2/A13.
- **Dependencies:** M16. **Scope:** M; comparison state/view and browser checks.
- **Files:** `frontend/src/features/comparison/Comparison.tsx`; `frontend/src/features/comparison/selection.ts`; `frontend/src/features/recommendations/Results.tsx`; `tests/e2e/comparison.spec.ts`.
- **DoD:** All shortlisted plans selected initially; remove/reselect works; comparable fields, unknown premiums, covered people, sources and official optional links are visible on laptop/phone.
- **Verification:** One/two/three result states, changed selection, source expansion and stale results after profile edits.
- [ ] **Status: TODO**.

### M22 — Live external-plan search (S5)
- **Description:** Add Tavily search to no-match and explicitly requested outside-plan flows without promoting hits into ranked recommendations.
- **SPEC:** R7/R15/R16, P3/P7, A9, §15.
- **Dependencies:** M20, M21, D10, D11. **Scope:** M; search integration, separated result view and fixtures.
- **Files:** `backend/src/services/tavily.ts`; `backend/src/routes/search.ts`; `frontend/src/features/advisor/ExternalOptions.tsx`; `tests/integration/search.test.ts`; `tests/fixtures/search.ts`.
- **DoD:** Permission/query/domain policies enforced; official links shown per D10; results labeled unverified; quota/unavailable search preserves catalogue results and reports failure.
- **Verification:** Bounded live dummy search, explicit outside-plan query, preferred-insurer refusal, missing official link and quota/error fixtures.
- [ ] **Status: TODO**.

#### Checkpoint K08 — Comparison and discovery
- [ ] M21–M22 browser/integration checks pass; ranked catalogue and external options cannot be confused; no fabricated live-search success.

### M23 — Microphone-to-shared-conversation path (S6)
- **Description:** Integrate verified STT with the existing text intake and visible listening/processing states.
- **SPEC:** V1/V3/V4/V7, F1, P3/P4, §15.
- **Dependencies:** M20, D06, D07a, D10, D12. **Scope:** M; speech input transport, state UI and tests.
- **Files:** `backend/src/services/gnani-stt.ts`; `backend/src/routes/voice.ts`; `frontend/src/features/voice/input.ts`; `frontend/src/features/voice/VoiceControls.tsx`; `tests/integration/speech-input.test.ts`.
- **DoD:** Spoken input enters the same profile flow; uncertainty is clarified; mic denial/STT failures offer text and preserve state; audio is not retained as a record.
- **Verification:** Real dummy utterance, uncertain recognition, mic denied/unavailable and STT timeout cases on selected browsers.
- [ ] **Status: TODO**.

### M24 — Concise spoken answers (S6)
- **Description:** Add TTS playback for the main points while retaining full written content.
- **SPEC:** V1/V5/V7, P4, §15.
- **Dependencies:** M23. **Scope:** M; speech output transport/playback and focused checks.
- **Files:** `backend/src/services/gnani-tts.ts`; `frontend/src/features/voice/playback.ts`; `frontend/src/features/voice/VoiceControls.tsx`; `tests/integration/speech-output.test.ts`.
- **DoD:** Written answer and concise audio agree on facts; speaking state accurate; TTS failure leaves usable text conversation; no persistent microphone audio.
- **Verification:** Bounded real playback, TTS failure, long policy explanation consistency and audio lifecycle inspection.
- [ ] **Status: TODO**.

### M25 — Interruption and language continuity (S6)
- **Description:** Add spoken/typed barge-in, automatic/manual language changes and speech latency event capture.
- **SPEC:** V1–V7, F3, A4.
- **Dependencies:** M24, D06, D12, D13. **Scope:** M; playback cancellation/language state and focused tests.
- **Files:** `frontend/src/features/voice/interruptions.ts`; `frontend/src/features/voice/language.ts`; `frontend/src/features/voice/playback.ts`; `frontend/src/state/session.ts`; `tests/e2e/voice-continuity.spec.ts`.
- **DoD:** Interruptions stop playback and redirect/resume naturally; profile survives changes; ordinary English insurance terms do not force switching; timestamps captured without adding transcript analytics features.
- **Verification:** Spoken and typed interruption, manual correction, verified code-switch cases and simulated late/stale audio; end-of-speech→audio-start event check.
- [ ] **Status: TODO**.

#### Checkpoint K09 — Voice loop
- [ ] M23–M25 pass transport/browser checks; speech/text share state, error fallbacks work and interruptions stop stale audio. Every-language acceptance remains Z05.

### M26 — Isolated durable session records (S7)
- **Description:** Save shared transcript/profile/result snapshots to the chosen persistent store with server-enforced current-session boundaries.
- **SPEC:** F10, P2–P4/P6, §15.
- **Dependencies:** M19, M16, D07a, D08, D09, D10. **Scope:** M; protected storage boundary, session integration and tests.
- **Files:** `backend/src/storage/sessions.ts`; `backend/src/routes/sessions.ts`; `backend/src/middleware/access.ts`; `shared/session.ts`; `tests/integration/session-storage.test.ts` (SPEC §12.1 permits adapter implementation after D07a passes and Q7/Q8 are resolved. D07b/T08b remains a later hosted acceptance check and does not gate M26).
- **DoD:** Laptop/hosted save path exists; raw mic audio excluded; current user cannot fetch/list another session; save errors are visible and do not erase active state.
- **Verification:** Save/restart/read fixture, unauthenticated/cross-session direct requests and storage-write failure.
- [ ] **Status: TODO**.

### M27 — Refresh and new-session continuity (S7)
- **Description:** Restore the current journey in the same browser and support a clean new active journey.
- **SPEC:** F11, F1/F5, P2/P5, A1/A10.
- **Dependencies:** M26. **Scope:** M; restore/new-session state flow and browser tests.
- **Files:** `frontend/src/state/session.ts`; `frontend/src/lib/api.ts`; `backend/src/routes/sessions.ts`; `tests/e2e/session-restore.spec.ts`.
- **DoD:** Transcript/profile/completed results and stale/confirmation state restore accurately; Start new session starts blank without deleting saved history; failed/deleted restoration is reported, never resurrected.
- **Verification:** Refresh mid-form/after result, new session, separate browser sessions and unavailable/deleted record cases.
- [ ] **Status: TODO**.

### M28 — Owner-only session review (S7)
- **Description:** Provide the chosen owner authorization plus session list/detail for saved transcript, profile and recommendations.
- **SPEC:** F10, P2/P6, A10.
- **Dependencies:** M26, D08. **Scope:** M; owner authorization boundary, list/detail and access tests.
- **Files:** `backend/src/routes/owner.ts`; `backend/src/middleware/access.ts`; `frontend/src/features/owner/SessionReview.tsx`; `tests/integration/owner-access.test.ts`.
- **DoD:** Owner can review laptop/hosted records; other/unauthenticated requests cannot list/read records or gain owner privileges through direct requests; no extra dashboard features.
- **Verification:** Owner/tester/unauthenticated list and direct detail requests; session-to-session isolation and invalid owner credential cases.
- [ ] **Status: TODO**.

#### Checkpoint K10 — Private persistence
- [ ] M26–M28 focused/build/browser checks pass; successful saves verified, refresh stable, owner-only direct access enforced. Deletion is not accepted until M29.

### M29 — Delete-all without record resurrection (S7)
- **Description:** Implement owner-triggered deletion and invalidation following the approved complete-copy/in-flight-write policy.
- **SPEC:** F11, P2/P5, A10/A11.
- **Dependencies:** M27, M28, D09. **Scope:** M; delete/invalidation behavior, owner action and focused tests.
- **Files:** `backend/src/storage/sessions.ts`; `backend/src/routes/owner.ts`; `frontend/src/features/owner/DeleteSessions.tsx`; `frontend/src/state/session.ts`; `tests/integration/session-deletion.test.ts`.
- **DoD:** Owner action removes records within defined scope; active/browser restore cannot recreate them; partial failure reported accurately with provider-retention limitations disclosed.
- **Verification:** Owner/non-owner delete, delete during save, refreshed old browser, stale in-flight response, partial storage failure and post-delete list/detail requests.
- [ ] **Status: TODO**.

### M30 — Documented claim-rule explanations (S8)
- **Description:** Evaluate a supplied hypothetical scenario against documented waits, exclusions and deductions without assuming payout eligibility.
- **SPEC:** F8/F9, R13–R15, A8.
- **Dependencies:** M20, M05, D02. **Scope:** M; claim explanation rules and source-derived fixtures.
- **Files:** `backend/src/rules/claims.ts`; `backend/src/rules/claims.test.ts`; `tests/fixtures/claim-explanations.json`.
- **DoD:** Relevant waits/exceptions/exclusions and missing/conflicting facts identified with citations; unsupported scenarios request information/insurer confirmation rather than invent outcomes.
- **Verification:** Before/at/after documented waiting boundaries, accident exceptions, upcoming treatment, excluded conditions and conflicting evidence.
- [ ] **Status: TODO**.

### M31 — Supported illustrative claim amounts (S8)
- **Description:** Add numerical illustrations only for scenarios where documented rules and known inputs support a calculation.
- **SPEC:** R14/R15, A8.
- **Dependencies:** M30. **Scope:** M; guarded calculation and numerical fixtures.
- **Files:** `backend/src/rules/claims.ts`; `backend/src/rules/claims.test.ts`; `tests/fixtures/claim-calculations.json`.
- **DoD:** Co-pay/deductible/room/disease-limit interactions use documented applicable order/conditions; assumptions visible; incomplete/ambiguous interactions produce explanation only, never guaranteed payout.
- **Verification:** Source-supported calculations and missing-input/ambiguous-order guard cases; fixtures cover each interaction actually supported by selected plans.
- [ ] **Status: TODO**.

#### Checkpoint K11 — Deletion and claim core
- [ ] M29–M31 focused/build checks pass; deletion is authoritative and claim outcomes are evidence-bound. Full catalogue and conversational claim integration remain required.

### M32 — Hypothetical claim interaction in text and voice (S8)
- **Description:** Collect plan/illness/policy timing/bill and necessary additional details, then explain through the existing conversation and save the record.
- **SPEC:** F9, V2/V5, R13–R15, §17.
- **Dependencies:** M31, M25, M26. **Scope:** M; claim conversation/UI state and integration checks.
- **Files:** `backend/src/services/conversation.ts`; `backend/src/routes/claims.ts`; `frontend/src/features/claims/ClaimScenario.tsx`; `tests/e2e/claim-conversation.spec.ts`.
- **DoD:** Plan-specific scenario can interrupt intake/recommendation flow and return naturally; spoken summary and written details agree; only documented-rule extra questions asked; saved transcript contains explanation.
- **Verification:** Text and voice scenario, interrupted profile intake, incomplete scenario, explanation-only and supported numeric case.
- [ ] **Status: TODO**.

### M33A — Translate welcome and profile intake (S9)
- **Description:** Complete welcome/form/profile/confirmation strings for the verified language inventory.
- **SPEC:** F3, V1/V3, A3/A13, Q12.
- **Dependencies:** M19, D12. **Scope:** M; onboarding language resources, language integration and focused checks, at most five files.
- **Files:** `frontend/src/i18n/locales/<language-code>/onboarding.json`; `frontend/src/i18n/index.ts`; `tests/integration/translation-coverage.test.ts`.
- **DoD:** Each D12 language covers onboarding strings; official names unchanged; switching preserves profile. If translation volume exceeds one session, D12 must create concrete per-language child tasks before this task starts.
- **Verification:** Missing-string check and language switching through all onboarding steps; competent review in Z05.
- [ ] **Status: TODO**.

### M33B — Translate results and external options (S9)
- **Description:** Complete result/comparison/source/search UI strings for every verified language.
- **SPEC:** F3/F6/F7, R15/R16, A3/A13.
- **Dependencies:** M22, M33A. **Scope:** M; result/search language resources and focused browser checks, at most five files.
- **Files:** `frontend/src/i18n/locales/<language-code>/results.json`; `frontend/src/i18n/index.ts`; `tests/integration/translation-coverage.test.ts`.
- **DoD:** Price uncertainty, trade-offs and unverified-search labels retain meaning; official names unchanged; selected comparison survives language changes. D12 creates per-language children first if needed for one-session size.
- **Verification:** Missing-string check and known/unknown-price, comparison and external-option language cases.
- [ ] **Status: TODO**.

### M33C — Translate voice and claim states (S9)
- **Description:** Complete listening/speaking/recognition and hypothetical-claim interface strings for every verified language.
- **SPEC:** F3/F9, V1/V3/V7, R13–R15, A3.
- **Dependencies:** M25, M32, M33A. **Scope:** M; speech/claim language resources and focused checks, at most five files.
- **Files:** `frontend/src/i18n/locales/<language-code>/voice-claims.json`; `frontend/src/i18n/index.ts`; `tests/integration/translation-coverage.test.ts`.
- **DoD:** Every applicable state translated without changing claim uncertainty or guarantee boundaries; language changes preserve scenario and conversation. D12 creates per-language children first if needed.
- **Verification:** Missing-string check, language change mid-scenario, incomplete-claim and speech-error states.
- [ ] **Status: TODO**.

#### Translation checkpoint KT1
- [ ] M33A–M33C inventory coverage and state-preservation checks pass; final human language evaluation remains mandatory.

### M33D — Translate record and recovery controls (S9)
- **Description:** Complete owner review, delete, restore/new-session and remaining service error strings for all verified languages.
- **SPEC:** F3/F10/F11, P5, V7, §15.
- **Dependencies:** M28, M29, M33A, M33B, M33C. **Scope:** M; record/error language resources and focused checks, at most five files.
- **Files:** `frontend/src/i18n/locales/<language-code>/owner-errors.json`; `frontend/src/i18n/index.ts`; `tests/integration/translation-coverage.test.ts`.
- **DoD:** Entire D12 UI inventory covered; deletion success/failure/provider limits accurately translated; no missing control/error labels. D12 creates per-language children first if needed.
- **Verification:** Missing-string inventory, owner and failed-save/restore/delete screens across language selectors.
- [ ] **Status: TODO**.

### M34 — Integrated service-state and fallback behavior (S9)
- **Description:** Reconcile existing feature fallbacks across shared state so simultaneous/late failures cannot erase or misrepresent results.
- **SPEC:** §15, V7, P3/P4, A11.
- **Dependencies:** M22, M25, M29, M32, M33D, D11. **Scope:** M; shared state/error integration and fault-injection tests; each feature's individual fallback already exists.
- **Files:** `frontend/src/state/session.ts`; `backend/src/middleware/errors.ts`; `tests/integration/service-failures.test.ts`; `tests/fixtures/provider-failures.ts`.
- **DoD:** All §15 errors retain available state and report true capability/save/deletion status; late responses cannot revive canceled/deleted work; no credentials/audio leakage in error output.
- **Verification:** Combined reasoning/speech/search/storage faults, slow responses, timeout/retry behavior and unsupported-language fallback.
- [ ] **Status: TODO**.

### M35 — Clearly labeled prefilled dummy entry (S9)
- **Description:** Allow the existing journey to start with a fictional profile for the short demonstration without changing empty-profile entry.
- **SPEC:** §17, P1, F5, A1.
- **Dependencies:** M32, M34, M16; owner-selected fictional profile values (not yet supplied; content blocker only). **Scope:** S; prefilled entry/data and browser check.
- **Files:** `frontend/src/features/onboarding/DummyProfileEntry.tsx`; `frontend/src/features/onboarding/dummy-profile.ts`; `tests/fixtures/dummy-profile.json`; `tests/e2e/prefilled-journey.spec.ts`.
- **DoD:** Prefill visibly fictional, editable and subject to confirmation; uses ordinary rules/voice/comparison, never hardcoded successful recommendations or claim answers. Exact fictional scenario remains owner-selected.
- **Verification:** Prefilled→live correction→claim question→comparison and separate empty-profile journeys use the same logic.
- [ ] **Status: TODO**.

#### Checkpoint K12 — Feature-complete candidate
- [ ] M33D/M34/M35, M32 and catalogue tasks complete; translated UI/fallback/prefill checks pass. Review outstanding MUSTs and recorded SHOULD deviations before deployed acceptance.

## 3. Final verification/deployment tasks

### Z01 — Deploy a restricted candidate
- **Description:** Deploy the integrated candidate using the verified Vercel/backend/storage arrangement and chosen owner/tester access.
- **SPEC:** §12/§17, P2/P3/P6, Q6/Q7.
- **Dependencies:** M34, M35, M06, M07, M08, M09, M10, M11, M12, M13, M26, M27, M28, M29, D07a, D08, D09, D11.
- **Files:** `docs/evidence/Z01-deployment.md`; deployment config remains gated by resolved Q7/Q8 and a passing pre-deployment check that selected host/database plans and account resources meet the no-out-of-pocket-spend constraint; `.env.example` files contain names/placeholders only. D07b is the later hosted-compatibility check at Z04 and does not gate Z01.
- **Scope:** M; deployment config/evidence, server-only environment wiring. **DoD:** Candidate URL works with intended transport/access, secrets excluded from client, no paid-overage settings/app caps introduced; record rollback/removal procedure for this deployment only.
- **Verification:** Clean build and deployed text request, live connection check, invalid-access denial and client bundle/environment inspection.
- [ ] **Status: TODO**.

### Z02 — Verify full user journeys and layouts
- **Description:** Run empty/prefilled form/text/voice journeys, edits and comparison on the target laptop/phone/browser matrix.
- **SPEC:** A1/A2/A13, F1–F7/F11, §17.
- **Dependencies:** Z01, M21, M27, M33D. **Scope:** M; end-to-end tests/evidence.
- **Files:** `tests/e2e/core-journeys.spec.ts`; `docs/evidence/Z02-journeys.md`.
- **DoD:** Confirm/edit/update/compare/new-session behavior and responsive UI pass in the deployed candidate; deviations fixed or explicitly unresolved, never marked passed.
- **Verification:** Browser-backed journey evidence including latest transcript, selected comparisons, refresh and stale-result state.
- [ ] **Status: TODO**.

### Z03 — Verify catalogue, recommendation and claim cases
- **Description:** Exercise source-derived rule fixtures and deployed search/claim paths across the complete catalogue.
- **SPEC:** A5–A9, R1–R16, §11/§14.
- **Dependencies:** Z01, M17, M22, M31, M32, M06, M07, M08, M09, M10, M11, M12, M13.
- **Files:** `tests/integration/rule-acceptance.test.ts`; `tests/e2e/search-claims.spec.ts`; `docs/evidence/Z03-rule-acceptance.md`.
- **Scope:** M per fixture family; split focused batches if necessary. **DoD:** Eligibility/default/price/ties/over-budget/separate-policy/waiting/deduction cases match recorded rules; no-match/external-plan behavior honest; no guarantees.
- **Verification:** Focused deterministic tests, independent official-source spot checks and bounded deployed live-search/claim checks; include missing/contradictory data.
- [ ] **Status: TODO**.

#### Final checkpoint KF1
- [ ] Z01–Z03 reviewed; real deployed journeys and complete source-backed rules work before broad live acceptance.

### Z04 — Verify deployed transport and record isolation
- **Description:** Validate streaming/barge-in and durable isolated records through actual hosting/restarts and deletion boundaries.
- **SPEC:** A4/A10/A13, P2/P5/P6, F10/F11.
- **Dependencies:** Z01, M25, M26, M27, M28, M29, D07a. **Scope:** M; integration/browser security evidence. This is the scheduled execution point for D07b/T08b and runs only against the real application.
- **Files:** `tests/e2e/hosted-continuity.spec.ts`; `tests/integration/record-isolation.test.ts`; `docs/evidence/Z04-hosted-isolation.md`.
- **DoD:** Spoken/typed interruption works on chosen hosts; records survive supported restart/deploy; non-owner/cross-session direct access denied; deleted records cannot restore or reappear after in-flight writes.
- **Verification:** Laptop and hosted save/restart/redeploy, concurrent separate browser sessions, direct list/read/delete requests and deletion-race checks. Verify local/hosted access to a synthetic persistent record through the real app, hosted WebSocket exchange, then restart/redeploy, reconnect and read the same record again. D07b/T08b closes only if all hosted checks pass; do not create a throwaway runtime for this probe.
- [ ] **Status: TODO**.

### Z05 — Verify every supported language with humans
- **Description:** Run the complete A3 journey in each verified language and supported code-switch pair on the deployed candidate.
- **SPEC:** A3/A4, F3, V1–V5/V7, §17.
- **Dependencies:** Z02, Z03, Z04, M33D, D06, D12. **Scope:** S per language; D06 must create one concrete child task per verified language before execution; Z05 itself is the small aggregate review, not a single oversized testing session.
- **Files:** `tests/e2e/language-journey.spec.ts`; `docs/evidence/languages/<language-code>.md`; `docs/evidence/Z05-language-summary.md` (D06 instantiates verified language codes).
- **DoD:** Each evaluator verifies completion, misheard-detail correction, claim interruption, translated UI and correct shortlist; material errors fixed/rechecked; unavailable evaluators/languages remain blockers.
- **Verification:** Language-by-language result record with reviewer, browser, scenario, sources checked, defects and response times; no assumed “13-language” pass.
- [ ] **Status: TODO**.

#### Z05 per-language child tasks (created by D06/T03; all remain TODO)

The ten codes below have each passed the bounded account-specific TTS v2.5 and matching STT REST smoke probe. Reviewer availability is the user's report at the D06 checkpoint. Human journey execution still depends on the parent dependencies above and a confirmed competent reviewer. A missing/uncertain reviewer remains a blocker under the existing Z05 DoD; do not mark that child's human verification complete without its reviewer.

##### Z05-bn-IN — Bengali human journey
- **Description:** Run the existing complete A3 journey in Bengali (`bn-IN`) on the deployed candidate; include the supported Hindi-English code-switch scenario where applicable to the shared conversation.
- **SPEC:** A3/A4, F3, V1–V5/V7, §17.
- **Dependencies:** Z02, Z03, Z04, M33D, D06, D12. **Scope:** S per language; one Bengali acceptance child of Z05.
- **Files:** `tests/e2e/language-journey.spec.ts`; `docs/evidence/languages/bn-IN.md`.
- **DoD:** A competent evaluator verifies completion, misheard-detail correction, claim interruption, translated UI and correct shortlist; material errors are fixed/rechecked; unavailable evaluators/languages remain blockers. Reviewer availability at D06: unsure.
- **Verification:** Record reviewer, browser, scenario, sources checked, defects and response times in `docs/evidence/languages/bn-IN.md`; do not infer a human pass from synthetic API loopback.
- [ ] **Status: TODO**.

##### Z05-en-IN — English human journey
- **Description:** Run the existing complete A3 journey in English (`en-IN`) on the deployed candidate; include the supported Hindi-English code-switch scenario where applicable to the shared conversation.
- **SPEC:** A3/A4, F3, V1–V5/V7, §17.
- **Dependencies:** Z02, Z03, Z04, M33D, D06, D12. **Scope:** S per language; one English acceptance child of Z05.
- **Files:** `tests/e2e/language-journey.spec.ts`; `docs/evidence/languages/en-IN.md`.
- **DoD:** A competent evaluator verifies completion, misheard-detail correction, claim interruption, translated UI and correct shortlist; material errors are fixed/rechecked; unavailable evaluators/languages remain blockers. Reviewer availability at D06: available.
- **Verification:** Record reviewer, browser, scenario, sources checked, defects and response times in `docs/evidence/languages/en-IN.md`; do not infer a human pass from synthetic API loopback.
- [ ] **Status: TODO**.

##### Z05-gu-IN — Gujarati human journey
- **Description:** Run the existing complete A3 journey in Gujarati (`gu-IN`) on the deployed candidate; include the supported Hindi-English code-switch scenario where applicable to the shared conversation.
- **SPEC:** A3/A4, F3, V1–V5/V7, §17.
- **Dependencies:** Z02, Z03, Z04, M33D, D06, D12. **Scope:** S per language; one Gujarati acceptance child of Z05.
- **Files:** `tests/e2e/language-journey.spec.ts`; `docs/evidence/languages/gu-IN.md`.
- **DoD:** A competent evaluator verifies completion, misheard-detail correction, claim interruption, translated UI and correct shortlist; material errors are fixed/rechecked; unavailable evaluators/languages remain blockers. Reviewer availability at D06: unsure.
- **Verification:** Record reviewer, browser, scenario, sources checked, defects and response times in `docs/evidence/languages/gu-IN.md`; do not infer a human pass from synthetic API loopback.
- [ ] **Status: TODO**.

##### Z05-hi-IN — Hindi human journey
- **Description:** Run the existing complete A3 journey in Hindi (`hi-IN`) on the deployed candidate; include the supported Hindi-English code-switch scenario where applicable to the shared conversation.
- **SPEC:** A3/A4, F3, V1–V5/V7, §17.
- **Dependencies:** Z02, Z03, Z04, M33D, D06, D12. **Scope:** S per language; one Hindi acceptance child of Z05.
- **Files:** `tests/e2e/language-journey.spec.ts`; `docs/evidence/languages/hi-IN.md`.
- **DoD:** A competent evaluator verifies completion, misheard-detail correction, claim interruption, translated UI and correct shortlist; material errors are fixed/rechecked; unavailable evaluators/languages remain blockers. Reviewer availability at D06: available.
- **Verification:** Record reviewer, browser, scenario, sources checked, defects and response times in `docs/evidence/languages/hi-IN.md`; do not infer a human pass from synthetic API loopback.
- [ ] **Status: TODO**.

##### Z05-kn-IN — Kannada human journey
- **Description:** Run the existing complete A3 journey in Kannada (`kn-IN`) on the deployed candidate; include the supported Hindi-English code-switch scenario where applicable to the shared conversation.
- **SPEC:** A3/A4, F3, V1–V5/V7, §17.
- **Dependencies:** Z02, Z03, Z04, M33D, D06, D12. **Scope:** S per language; one Kannada acceptance child of Z05.
- **Files:** `tests/e2e/language-journey.spec.ts`; `docs/evidence/languages/kn-IN.md`.
- **DoD:** A competent evaluator verifies completion, misheard-detail correction, claim interruption, translated UI and correct shortlist; material errors are fixed/rechecked; unavailable evaluators/languages remain blockers. Reviewer availability at D06: unsure.
- **Verification:** Record reviewer, browser, scenario, sources checked, defects and response times in `docs/evidence/languages/kn-IN.md`; do not infer a human pass from synthetic API loopback.
- [ ] **Status: TODO**.

##### Z05-ml-IN — Malayalam human journey
- **Description:** Run the existing complete A3 journey in Malayalam (`ml-IN`) on the deployed candidate; include the supported Hindi-English code-switch scenario where applicable to the shared conversation.
- **SPEC:** A3/A4, F3, V1–V5/V7, §17.
- **Dependencies:** Z02, Z03, Z04, M33D, D06, D12. **Scope:** S per language; one Malayalam acceptance child of Z05.
- **Files:** `tests/e2e/language-journey.spec.ts`; `docs/evidence/languages/ml-IN.md`.
- **DoD:** A competent evaluator verifies completion, misheard-detail correction, claim interruption, translated UI and correct shortlist; material errors are fixed/rechecked; unavailable evaluators/languages remain blockers. Reviewer availability at D06: unsure.
- **Verification:** Record reviewer, browser, scenario, sources checked, defects and response times in `docs/evidence/languages/ml-IN.md`; do not infer a human pass from synthetic API loopback.
- [ ] **Status: TODO**.

##### Z05-mr-IN — Marathi human journey
- **Description:** Run the existing complete A3 journey in Marathi (`mr-IN`) on the deployed candidate; include the supported Hindi-English code-switch scenario where applicable to the shared conversation.
- **SPEC:** A3/A4, F3, V1–V5/V7, §17.
- **Dependencies:** Z02, Z03, Z04, M33D, D06, D12. **Scope:** S per language; one Marathi acceptance child of Z05.
- **Files:** `tests/e2e/language-journey.spec.ts`; `docs/evidence/languages/mr-IN.md`.
- **DoD:** A competent evaluator verifies completion, misheard-detail correction, claim interruption, translated UI and correct shortlist; material errors are fixed/rechecked; unavailable evaluators/languages remain blockers. Reviewer availability at D06: unsure.
- **Verification:** Record reviewer, browser, scenario, sources checked, defects and response times in `docs/evidence/languages/mr-IN.md`; do not infer a human pass from synthetic API loopback.
- [ ] **Status: TODO**.

##### Z05-pa-IN — Punjabi human journey
- **Description:** Run the existing complete A3 journey in Punjabi (`pa-IN`) on the deployed candidate; include the supported Hindi-English code-switch scenario where applicable to the shared conversation.
- **SPEC:** A3/A4, F3, V1–V5/V7, §17.
- **Dependencies:** Z02, Z03, Z04, M33D, D06, D12. **Scope:** S per language; one Punjabi acceptance child of Z05.
- **Files:** `tests/e2e/language-journey.spec.ts`; `docs/evidence/languages/pa-IN.md`.
- **DoD:** A competent evaluator verifies completion, misheard-detail correction, claim interruption, translated UI and correct shortlist; material errors are fixed/rechecked; unavailable evaluators/languages remain blockers. Reviewer availability at D06: available.
- **Verification:** Record reviewer, browser, scenario, sources checked, defects and response times in `docs/evidence/languages/pa-IN.md`; do not infer a human pass from synthetic API loopback.
- [ ] **Status: TODO**.

##### Z05-ta-IN — Tamil human journey
- **Description:** Run the existing complete A3 journey in Tamil (`ta-IN`) on the deployed candidate; include the supported Hindi-English code-switch scenario where applicable to the shared conversation.
- **SPEC:** A3/A4, F3, V1–V5/V7, §17.
- **Dependencies:** Z02, Z03, Z04, M33D, D06, D12. **Scope:** S per language; one Tamil acceptance child of Z05.
- **Files:** `tests/e2e/language-journey.spec.ts`; `docs/evidence/languages/ta-IN.md`.
- **DoD:** A competent evaluator verifies completion, misheard-detail correction, claim interruption, translated UI and correct shortlist; material errors are fixed/rechecked; unavailable evaluators/languages remain blockers. Reviewer availability at D06: unavailable.
- **Verification:** Record reviewer, browser, scenario, sources checked, defects and response times in `docs/evidence/languages/ta-IN.md`; do not infer a human pass from synthetic API loopback.
- [ ] **Status: TODO**.

##### Z05-te-IN — Telugu human journey
- **Description:** Run the existing complete A3 journey in Telugu (`te-IN`) on the deployed candidate; include the supported Hindi-English code-switch scenario where applicable to the shared conversation.
- **SPEC:** A3/A4, F3, V1–V5/V7, §17.
- **Dependencies:** Z02, Z03, Z04, M33D, D06, D12. **Scope:** S per language; one Telugu acceptance child of Z05.
- **Files:** `tests/e2e/language-journey.spec.ts`; `docs/evidence/languages/te-IN.md`.
- **DoD:** A competent evaluator verifies completion, misheard-detail correction, claim interruption, translated UI and correct shortlist; material errors are fixed/rechecked; unavailable evaluators/languages remain blockers. Reviewer availability at D06: unavailable.
- **Verification:** Record reviewer, browser, scenario, sources checked, defects and response times in `docs/evidence/languages/te-IN.md`; do not infer a human pass from synthetic API loopback.
- [ ] **Status: TODO**.

### Z06 — Audit sources and data handling
- **Description:** Review final catalogue/answers and deployed secret/audio/provider data handling against the approved boundaries.
- **SPEC:** A12, P1–P4/P7, R15, §11/§12.
- **Dependencies:** Z01, Z03, D09, D10. **Scope:** M; audit evidence and focused security checks.
- **Files:** `tests/integration/security-boundaries.test.ts`; `docs/evidence/Z06-source-privacy-audit.md`.
- **DoD:** All eight/nine entries traced, premiums/assumptions accurate, absent evidence disclosed; no client/output secrets or application-retained mic audio; notices/query policy match actual requests; no app caps/paid overages.
- **Verification:** Source audit, client bundle/log/record inspection, actual sanitized provider payload review and document/search instruction-injection cases.
- [ ] **Status: TODO**.

#### Final checkpoint KF2
- [ ] Z04–Z06 evidence reviewed; language failures, privacy defects and missing source verification block completion claims.

### Z07 — Report measured reply latency
- **Description:** Measure ordinary spoken-response start and separately report search-delay behavior using D13 conditions.
- **SPEC:** V6 (SHOULD), A3, §17, Q11.
- **Dependencies:** Z04, Z05, D13. **Scope:** S; timing report.
- **Files:** `docs/evidence/Z07-latency.md`; `tests/fixtures/latency-samples.json` (dummy timing data only).
- **DoD:** Actual distributions/conditions and exceptions recorded; target met or explicit SHOULD deviation stated; no unsupported two-second guarantee.
- **Verification:** Inspect timestamp calculations against sample audible responses; include supported-language measurements and separate searches.
- [ ] **Status: TODO**.

### Z08 — Verify complete failure and exhaustion matrix
- **Description:** Exercise every §15 failure on the integrated candidate using controlled fixtures or safe provider responses, without deliberately purchasing/exhausting credits.
- **SPEC:** A11, §15, F11, V7, P3/P5.
- **Dependencies:** Z01, M34, Z04. **Scope:** M; fault-injection evidence.
- **Files:** `tests/integration/service-failures.test.ts`; `tests/e2e/fallbacks.spec.ts`; `docs/evidence/Z08-failures.md`.
- **DoD:** Mic/STT/TTS/reasoning/search/slow-request/save/restore/delete/unsupported-language failures preserve available state and display accurate fallbacks; late responses do not corrupt state.
- **Verification:** Run each matrix row including simulated quota exhaustion, concurrent faults and post-error recovery; no fake success or paid calls needed for exhaustion tests.
- [ ] **Status: TODO**.

### Z09 — Record final MVP acceptance
- **Description:** Compile the completed acceptance inventory and identify any unresolved release blockers without designing demonstration logistics.
- **SPEC:** A1–A13, §16/§17, all MUSTs and recorded SHOULDs.
- **Dependencies:** Z02, Z03, Z04, Z05, Z06, Z07, Z08, D01, D02, D03, D04, D05, D06, D07, D08, D09, D10, D11, D12, D13.
- **Files:** `docs/evidence/Z09-acceptance.md`.
- **Scope:** S; acceptance and remaining-risk record. **DoD:** Every MUST maps to passing evidence; any exception means incomplete, not implicit approval. SHOULD deviations explicit; working path supports the stated 2–3 minute interaction without prescribing owner script.
- **Verification:** Review A1–A13 evidence and catalogue count, open-question closures and scope boundaries; request owner review of the completed candidate.
- [ ] **Status: TODO**.

#### Final checkpoint KF3
- [ ] Z07–Z09 reviewed; no unresolved MUST represented as complete; deployment and acceptance evidence linked for the next developer/session.
