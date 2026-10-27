# Execution map — AI Health Insurance Advisor MVP

This execution view uses [SPEC.md](SPEC.md), [tasks/plan.md](tasks/plan.md), and [tasks/todo.md](tasks/todo.md). All 62 original tasks appear once, retaining their scope, files, completion criteria and verification. Original IDs remain the cross-reference to the source checklist. Pending corresponds to TODO. T08/D07 is split conceptually into T08a (database feasibility) and T08b (hosted integration); these are subchecks, not new product tasks. T08 remains Pending until both pass. See [build-progress.md](build-progress.md) for the execution checkpoint.

Follow hard dependencies and the planned build slices; task IDs remain stable and may be executed out of numeric order when independent prerequisites allow it. T08a is complete; T14/M01A is eligible under D01 and the explicit generic-baseline allowance in SPEC §12.1, and T15/M01B follows T14. T08b is assigned to T57/Z04 after real application paths exist. SPEC §12.1 now separates prerequisite gates from hosted acceptance: M26/T41 needs D07a plus resolved Q7/Q8; Z01/T54 needs resolved Q7/Q8 and a passing host/database plan and account-resource preflight; D07b/T08b remains a post-deployment check. Q7/Q8 are not waived, and T08 remains Pending until T08b passes. Independently executable means one bounded task after its prerequisites, required reviews and external inputs are satisfied.

## Global execution rule

1. Read the selected task and its original TODO entry, including scope and Definition of Done.
2. Read referenced SPEC/PLAN sections and completed decision records.
3. Confirm dependencies are complete with passing evidence, required checkpoint reviews are recorded, and external inputs are available.
4. Use listed skills, reading their SKILL.md instructions before applying them.
5. Implement only that task. Decision/research and acceptance tasks perform their stated work rather than introduce product code.
6. Run verification; record commands/checks, outcomes and evidence.
7. Update task status only if verification passes; keep this map and its original TODO status consistent. Failed checks, unresolved decisions and unavailable required reviewers prevent completion.
8. Stop after one task.

For T08, downstream work that needs a verified Postgres connection may depend on T08a. No task may claim hosted transport or restart/redeploy persistence until T08b passes. T08b must use the real application produced by the build tasks; do not create a throwaway runtime solely for this probe.

SPEC §12.1 distinguishes database feasibility and access/deletion decisions before implementation from hosted compatibility verification after implementation. T41/M26 requires T08a, T09/D08, T11/D09 and its existing application dependencies. T54/Z01 requires T08a, T09/D08, T11/D09, its existing release dependencies, the persistent-session slice T41–T44, and a passing no-spend host/database eligibility preflight. T57/Z04 performs T08b only after those real paths and deployment exist. T08 overall and D07/Q6 remain Pending until T08b passes; the generic S0 baseline remains eligible.

## Skills and verification conventions

Selection follows [using-agent-skills](.agents/skills/using-agent-skills/SKILL.md) and the local `addyosmani/agent-skills` inventory in [skills-lock.json](skills-lock.json). Skill names resolve to `.agents/skills/<skill-name>/SKILL.md`. Use context-engineering → relevant specialist → incremental-implementation → test-driven-development → verification where applicable. TDD's failing test precedes production behavior changes. Documentary research, catalogue transcription and acceptance use evidence checks rather than artificial red/green cycles. Apply git-workflow-and-versioning when making code changes; no unsolicited commit, push or merge is required. Browser-testing-with-devtools requires Chrome DevTools MCP; unavailable tooling is a verification blocker, not a passing check.

No package manifest, runner or executable command set exists yet. T01 (D01) records exact install/dev/build/type/lint/focused-test/browser-test commands in `docs/decisions/D01.md`. Later tasks use those actual commands, with the exact test paths below as runner-supported targets. Record resolved commands and outcomes in each task's evidence; do not invent scripts or flags. T15 (M01B) confirms source-dependent commands execute.

After M01B, build/data tasks run D01 build/type/lint commands plus focused tests/checks. M01A validates installation/configuration and explicitly defers source-dependent checks to M01B. Deployment/acceptance uses applicable D01 checks and records the candidate URL/revision. For documentary tasks, “Tests pass” means the listed decision/evidence checks pass, with automated tests explicitly marked not applicable and explained; unrun tests never count as passing.

Existing unresolved gates remain: D06 verified and instantiated Z05's ten per-language TODO children in `tasks/todo.md`; run them within T58/Z05 after the listed dependencies, and verify each before completing the parent. D12 instantiates translation children if the existing size rule requires them. No additional languages or requirements are inferred. Carry source-authorized children into their existing parent execution slot and verify each before completing the parent. If a required split changes task boundaries, reconcile this map before execution rather than silently omit work or exceed the task-size rule. M35 needs owner-selected fictional profile values. Research cannot substitute guesses for user intent. This map orders work; it does not claim future decisions or external inputs already exist.

## Original review checkpoints

These existing TODO gates add no implementation tasks. At the indicated execution slot, perform the original checkpoint checks and record required human review before advancing the affected path. Full wording remains in tasks/todo.md.

| Checkpoint | After | Original tasks reviewed |
|---|---|---|
| RD1 | T05 (D03) | D01, D02, D03; original checks apply. |
| RD2 | T07 (D05) | D04, D05, D06; original checks apply. |
| RD3 | T11 (D09) | D07a, D08, D09; original checks apply. D07b remains deferred to T57 and does not block application development. |
| RD4 | T12 (D12) | D10, D11, D12; original checks apply. |
| K00 | T16 (M01C) | M01A, M01B, M01C; original checks apply. |
| K01 | T18 (M03) | M02, M03; original checks apply. |
| K02 | T21 (M06) | M04, M05, M06; original checks apply. |
| K03 | T24 (M09) | M07, M08, M09; original checks apply. |
| K04 | T27 (M12) | M10, M11, M12; original checks apply. |
| K05 | T30 (M15) | M13, M14, M15; original checks apply. |
| K06 | T32 (M17) | M16, M17; original checks apply. |
| K07 | T35 (M20) | M18, M19, M20; original checks apply. |
| K08 | T37 (M22) | M21, M22; original checks apply. |
| K09 | T40 (M25) | M23, M24, M25; original checks apply. |
| K10 | T43 (M28) | M26, M27, M28; original checks apply. |
| K11 | T46 (M31) | M29, M30, M31; original checks apply. |
| KT1 | T50 (M33C) | M33A, M33B, M33C; original checks apply. |
| K12 | T53 (M35) | M05, M06, M07, M08, M09, M10, M11, M12, M13, M32, M33D, M34, M35; original checks apply. |
| KF1 | T56 (Z03) | Z01, Z02, Z03; original checks apply. |
| KF2 | T59 (Z06) | Z04, Z05, Z06; original checks apply. |
| KF3 | T62 (Z09) | Z07, Z08, Z09; original checks apply. |

## Task index

| Execution ID | TODO ID | Task |
|---|---|---|
| T01 | D01 | Establish executable project conventions |
| T02 | D02 | Resolve catalogue evidence and comparability policy |
| T03 | D06 | Verify speech feasibility and language inventory |
| T04 | D11 | Verify reasoning resources and failure policies |
| T05 | D03 | Resolve deterministic ranking behavior |
| T06 | D04 | Resolve coverage guidance and validation |
| T07 | D05 | Resolve minimal profile and health uncertainty |
| T08 | D07 | Verify hosting and storage arrangement (T08a database feasibility; T08b hosted verification at T57) |
| T09 | D08 | Decide owner and tester access boundaries |
| T10 | D10 | Verify provider notices and live-search policy |
| T11 | D09 | Decide complete deletion semantics |
| T12 | D12 | Define browser, translation and accessibility checks |
| T13 | D13 | Define latency evidence |
| T14 | M01A | Fixed-stack tooling baseline (S0) |
| T15 | M01B | Executable browser/server baseline (S0) |
| T16 | M01C | Welcome and workspace shell (S0) |
| T17 | M02 | Family and health intake (S1) |
| T18 | M03 | Budget and preference intake (S1) |
| T19 | M04 | Shared editable confirmation (S1) |
| T20 | M05 | First verified real plan (S2) |
| T21 | M06 | Verify catalogue slot 2 (S2) |
| T22 | M07 | Verify catalogue slot 3 (S2) |
| T23 | M08 | Verify catalogue slot 4 (S2) |
| T24 | M09 | Verify catalogue slot 5 (S2) |
| T25 | M10 | Verify catalogue slot 6 (S2) |
| T26 | M11 | Verify catalogue slot 7 (S2) |
| T27 | M12 | Verify catalogue slot 8 (S2) |
| T28 | M13 | Resolve catalogue slot 9 (S2, conditional on D02) |
| T29 | M14 | Documented eligibility path (S3) |
| T30 | M15 | Priority and price ordering (S3) |
| T31 | M16 | Form-to-shortlist vertical path (S3) |
| T32 | M17 | Budget and coverage guidance (S3) |
| T33 | M18 | Grounded text question path (S4) |
| T34 | M19 | Conversation-driven profile collection (S4) |
| T35 | M20 | Sourced explanations and interruption recovery (S4) |
| T36 | M21 | Selectable plan comparison (S5) |
| T37 | M22 | Live external-plan search (S5) |
| T38 | M23 | Microphone-to-shared-conversation path (S6) |
| T39 | M24 | Concise spoken answers (S6) |
| T40 | M25 | Interruption and language continuity (S6) |
| T41 | M26 | Isolated durable session records (S7) |
| T42 | M27 | Refresh and new-session continuity (S7) |
| T43 | M28 | Owner-only session review (S7) |
| T44 | M29 | Delete-all without record resurrection (S7) |
| T45 | M30 | Documented claim-rule explanations (S8) |
| T46 | M31 | Supported illustrative claim amounts (S8) |
| T47 | M32 | Hypothetical claim interaction in text and voice (S8) |
| T48 | M33A | Translate welcome and profile intake (S9) |
| T49 | M33B | Translate results and external options (S9) |
| T50 | M33C | Translate voice and claim states (S9) |
| T51 | M33D | Translate record and recovery controls (S9) |
| T52 | M34 | Integrated service-state and fallback behavior (S9) |
| T53 | M35 | Clearly labeled prefilled dummy entry (S9) |
| T54 | Z01 | Deploy a restricted candidate |
| T55 | Z02 | Verify full user journeys and layouts |
| T56 | Z03 | Verify catalogue, recommendation and claim cases |
| T57 | Z04 | Verify deployed transport and record isolation |
| T58 | Z05 | Verify every supported language with humans |
| T59 | Z06 | Audit sources and data handling |
| T60 | Z07 | Report measured reply latency |
| T61 | Z08 | Verify complete failure and exhaustion matrix |
| T62 | Z09 | Record final MVP acceptance |

## T01 — Establish executable project conventions

Status: Complete
Depends on: None

Skills:
- context-engineering
- source-driven-development
- documentation-and-adrs

Relevant Context:
- SPEC §12.1, §18 downstream technical choices.
- PLAN §Blocking decisions/research → D01; §Planning boundaries; §Checkpoints and task execution rules.
- TODO reference: [tasks/todo.md](tasks/todo.md), `D01 — Establish executable project conventions`.

Scope (unchanged):
- Choose minimal tooling/versions within SPEC §12.1, including shared-TypeScript compilation and dependency management; define actual build/dev/type/lint/focused-test/browser-test commands.
- Files: `docs/decisions/D01.md`; `docs/evidence/D01-*.md`; `SPEC.md` (affected question only).
- Original completion criteria: Record chosen tools, exact commands and per-task file budgets against the specified layout; preserve file formats and browser/server boundaries. Split M01A or other tasks if necessary config exceeds five files; avoid product code in this decision task.

Verification:
- Check commands against chosen tools' official documentation; executable confirmation follows M01B.
- Check original completion criteria against the decision/evidence record and affected SPEC question; unresolved outcomes keep this task Pending.

Verification result: PASS (decision/documentation checks, 2026-10-26). [Decision](docs/decisions/D01.md) and [supporting evidence](docs/evidence/D01-tooling-evidence.md). Application commands NOT RUN; installation/configuration validation remains M01A and executable confirmation remains M01B. Automated product tests are not applicable to this research deliverable.

Completion:
- [x] Implementation complete
- [x] Tests pass
- [x] Verification pass

## T02 — Resolve catalogue evidence and comparability policy

Status: Complete
Depends on: None

Skills:
- context-engineering
- source-driven-development
- documentation-and-adrs

Relevant Context:
- SPEC Q1, §11, R2, R10, R12–R15. IDs resolve in §9, §18.
- PLAN §Blocking decisions/research → D02; §Planning boundaries; §Checkpoints and task execution rules.
- TODO reference: [tasks/todo.md](tasks/todo.md), `D02 — Resolve catalogue evidence and comparability policy`.

Scope (unchanged):
- Research/propose 8–9 real plan slots and define source sufficiency, conflicting/stale sources, premium assumptions/comparability, missing values and evidence schema.
- Files: `docs/decisions/D02.md`; `docs/evidence/D02-*.md`; `SPEC.md` (affected question only).
- Original completion criteria: Slot identities and official documents listed; verification/update criteria and comparable-price rules recorded. No unsupported price/eligibility values accepted. Per-entry full extraction remains M05–M13.

Verification:
- Official-source spot check and sample known/unknown/conflicting fields; obtain clarification for unresolved selection or comparison behavior.
- Check original completion criteria against the decision/evidence record and affected SPEC question; unresolved outcomes keep this task Pending.

Verification result: PASS (research/documentary checks, 2026-10-26). [Decision](docs/decisions/D02.md), [official-source register](docs/evidence/D02-source-register.md), and [policy checks](docs/evidence/D02-policy-checks.md). Eight selected identities/UINs and wording hashes verified; evidence/comparison cases pass. Full per-entry extraction and application commands NOT RUN; M05–M13 remain pending. No D02 selection/comparison issue remains unresolved.

Completion:
- [x] Implementation complete
- [x] Tests pass
- [x] Verification pass

## T03 — Verify speech feasibility and language inventory

Status: Complete
Depends on: None

Execution note (2026-10-26): attempted, blocked by unavailable configured Gnani access and unverified account credits. No live probes or language verification run; completion remains Pending. [D06 status](docs/decisions/D06.md), [preflight evidence](docs/evidence/D06-access-blocker.md), [resume checkpoint](build-progress.md). User's stop-on-unavailable-input rule halted the T03–T07 range here.

Resumed note (2026-10-26 11:20 +05:30): [official authentication research and no-key HTTP checks](docs/evidence/D06-auth-research.md) recorded. Endpoint docs list X-API-Key-ID without a project-ID parameter; no real .env/key is currently visible. Authenticated speech/credit/interruption checks remain unrun, so status and completion boxes remain Pending/unchecked.

Configuration update (11:26 +05:30): user-requested .env/key and .gitignore are now created. Automatic approval review rejected an unexecuted authentication request to documented api.vachana.ai because the configured host is api.gnani.ai. Alternate-host credential authorization is now the immediate blocker; missing key is resolved. T03 remains Pending.

Authenticated resume (11:48 +05:30): host explicitly authorized and corrected; missing/invalid/configured-key controls verify authentication at the documented TTS route. [Latest evidence](docs/evidence/D06-authenticated-preflight.md). Free-credit/expiry/no-overage and evaluator evidence remain unavailable; chargeable speech and streaming/interruption probes are unrun. No project-ID requirement established. T03 remains Pending; stop after T03 under latest authorization.

Final T03 verification (2026-10-26): PASS. [Authenticated live-probe record](docs/evidence/D06-live-probes.md) records owner-reported 5,000 free credits expiring 31 Dec 2026 with paid overage disabled; successful matching TTS v2.5/STT REST smoke probes for all ten common language codes including Tamil; a synthetic `hi-en` code-mix probe; complete TTS WebSocket chunk/final delivery, client-initiated early close, and realtime STT paced-PCM transcript. Human-review availability is recorded for every language; gaps remain explicit blockers for Z05, not hidden acceptance claims. Z05 now has ten TODO children with all original fields. SPEC Q5 and the speech integration row now reflect verified facts and remaining acceptance gaps. No project ID was required by documented or observed requests. T03 complete; stop here; T04 not started.

Skills:
- context-engineering
- source-driven-development
- documentation-and-adrs

Relevant Context:
- SPEC Q5, V1–V4, P4, §12. IDs resolve in §8, §13, §18.
- PLAN §Blocking decisions/research → D06; §Planning boundaries; §Checkpoints and task execution rules.
- TODO reference: [tasks/todo.md](tasks/todo.md), `D06 — Verify speech feasibility and language inventory`.

Scope (unchanged):
- Check actual Gnani endpoints/credits, streaming and interruption capabilities, language/voice/code-switch inventory and human-review coverage.
- Files: `docs/decisions/D06.md`; `docs/evidence/D06-*.md`; `SPEC.md` (affected question only).
- Original completion criteria: Document supported intersection including Tamil, endpoint availability and usable credit evidence; identify evaluator coverage and blockers. Expand Z05 into one concrete TODO child task per verified language, copying all required task fields; do not invent an inventory now. Missing support is flagged, not silently removed.

Verification:
- Official docs plus minimal dummy-data STT/TTS/interrupt probe within available credits; no retained audio or unapproved paid services.
- Check original completion criteria against the decision/evidence record and affected SPEC question; unresolved outcomes keep this task Pending.

Completion:
- [x] Implementation complete (decision/evidence and required Z05 TODO expansion)
- [x] Tests pass (bounded live dummy-data STT/TTS/streaming probes)
- [x] Verification pass

## T04 — Verify reasoning resources and failure policies

Status: Complete

Attempt history: The initial T04 preflight paused before generation while the API key and account facts were unavailable; see [D11 access preflight](docs/evidence/D11-access-blocker.md). On resume, authenticated GET /v1/models returned HTTP 200/133 model records. The user then confirmed a $5 project-specific hard limit, said this is the only project they use, provided 1 Jan 2028 as the expiry date, and instructed not to change the limit. Current balance, billing mode, auto-recharge status and the precise meaning of the expiry remain unverified. No billing settings were changed.

Completion evidence: Official model/pricing/authentication/billing/error documentation reviewed. One fictional Responses API probe using `gpt-6-luna` succeeded (HTTP 200, completed, 15 input/6 output tokens; 24-token output ceiling). The published-rate estimate is $0.0000045 before account adjustments. Official sources warn hard-limit/prepaid enforcement may lag and spend can slightly exceed the configured limit; no guarantee is made. D11 defines state-preserving error/timeout handling and prohibits automatic replay after an ambiguous timeout. Application-level checks are deferred to implementation tasks, not claimed as run. See [D11 decision](docs/decisions/D11.md) and [live probe evidence](docs/evidence/D11-live-probe.md).
Skills:
- context-engineering
- source-driven-development
- documentation-and-adrs

Relevant Context:
- SPEC Q10, §12/§15, P3; no app caps in §5. IDs resolve in §13, §18.
- PLAN §Blocking decisions/research → D11; §Planning boundaries; §Checkpoints and task execution rules.
- TODO reference: [tasks/todo.md](tasks/todo.md), `D11 — Verify reasoning resources and failure policies`.

Scope (unchanged):
- Select/verify OpenAI model/access and cost protections, reasoning/search/transport timeout and retry behavior within available resources.
- Files: `docs/decisions/D11.md`; `docs/evidence/D11-*.md`; `SPEC.md` (affected question only).
- Original completion criteria: Model/credit availability and no-overage conditions documented; timeout/retry outcomes preserve state; any conflict between no-spend/no-caps/availability escalated, not bypassed.

Verification:
- Official model/provider terms and bounded dummy text call; no credential values in records; no invented credit guarantee.
- Check original completion criteria against the decision/evidence record and affected SPEC question; unresolved outcomes keep this task Pending.

Completion:
- [x] Decision and research complete
- [x] Bounded probe passed; application tests deferred
- [x] Verification pass

## T05 — Resolve deterministic ranking behavior

Status: Complete
Depends on: T02

Outcome (2026-10-26): User approved D03's three ranking choices. Verified explicit-priority dominance, secondary preferences as equal-fit refinements, no weighted scoring, scenario-first condition fit with broader coverage secondary, and unsure-user lexicographic order. Synthetic fixtures walk all supported priorities, equal/equivalent outcomes, unknown/non-comparable prices, budget boundaries, insurer preference, eligibility and short-result cases against SPEC R1/R4?R10. RD1 review passed at the user's direction: D01/D02/D03 checked against the plan; no hidden versions, insurer choices, scores, or prices found. See [D03 decision](docs/decisions/D03.md) and [examples/RD1 evidence](docs/evidence/D03-ranking-examples.md).

Skills:
- context-engineering
- api-and-interface-design
- documentation-and-adrs

Relevant Context:
- SPEC Q2, R1, R4–R10. IDs resolve in §9, §18.
- PLAN §Blocking decisions/research → D03; §Planning boundaries; §Checkpoints and task execution rules.
- TODO reference: [tasks/todo.md](tasks/todo.md), `D03 — Resolve deterministic ranking behavior`.

Scope (unchanged):
- Define default/main-priority fit, restrictions/condition fit, secondary preference conflicts and ties without changing settled cheapest-first rules.
- Files: `docs/decisions/D03.md`; `docs/evidence/D03-*.md`; `SPEC.md` (affected question only).
- Original completion criteria: A deterministic rule set and small input/expected-order examples exist for every supported priority, including equivalent/unknown-price outcomes; no model-selected scoring.

Verification:
- Walk examples against SPEC R4–R10; user resolves intent not settled by evidence.
- Check original completion criteria against the decision/evidence record and affected SPEC question; unresolved outcomes keep this task Pending.
- Complete original checkpoint review(s): RD1; retain evidence and required human review before advancing the affected path.

Completion:
- [x] Decision complete
- [x] Synthetic decision examples pass
- [x] Verification pass; RD1 complete

## T06 — Resolve coverage guidance and validation

Status: Complete
Depends on: T02

Outcome (2026-10-26): T02 dependency confirmed. Official policy-source spot checks verified product/structure-specific examples; stale/mismatched UIN sources were excluded. Input validation examples pass for age, budget, SI, unknowns and structure. The user selected an INR 20 lakh fallback when budget or matching quote is missing, conditional on exact source-supported availability and confirmed eligibility; no price/adequacy claim is made. With a known budget and matched quote, suggest the highest supported base SI within budget. Synthetic fixtures pass including R9/R10. See [D04 decision](docs/decisions/D04.md) and [evidence](docs/evidence/D04-coverage-evidence.md).
Skills:
- context-engineering
- source-driven-development
- documentation-and-adrs

Relevant Context:
- SPEC Q3, F4, R9–R11, §10. IDs resolve in §7, §9, §18.
- PLAN §Blocking decisions/research → D04; §Planning boundaries; §Checkpoints and task execution rules.
- TODO reference: [tasks/todo.md](tasks/todo.md), `D04 — Resolve coverage guidance and validation`.

Scope (unchanged):
- Establish evidence-based coverage/budget suggestions, policy-structure amount options and input validation boundaries.
- Files: `docs/decisions/D04.md`; `docs/evidence/D04-*.md`; `SPEC.md` (affected question only).
- Original completion criteria: Supported choices and recommendation rationale recorded; insufficient-premium guidance behavior defined; no unapproved city-tier formula.

Verification:
- Trace sample suggestions and boundaries to sources/catalogue options; clarify unsupported choices.
- Check original completion criteria against the decision/evidence record and affected SPEC question; unresolved outcomes keep this task Pending.

Completion:
- [x] Decision complete
- [x] Synthetic source/validation examples pass
- [x] Verification pass

## T07 — Resolve minimal profile and health uncertainty

Status: Complete
Depends on: T02

Outcome (2026-10-26): Owner confirmed no nickname, proposer/member rules, spouse inclusion, father-in-law separate-plan treatment, age gap and plan-specific member limits. Official IRDAI research distinguishes the shared-SI floater definition, insurer-specific family membership, renewal-age rules and migration/portability. Family, senior, multiple-condition, unknown-history, proposer, age-gap, floater/split-plan and child-age-out scenarios pass. Owner approved RD2 by replying “yes go ahead” after review of D04–D06; approval and limits are recorded in [RD2 evidence](docs/evidence/D05-RD2-review.md). See [D05 decision](docs/decisions/D05.md), [official evidence](docs/evidence/D05-irdai-floater-structure.md) and [scenario evidence](docs/evidence/D05-profile-cases.md).

Skills:
- context-engineering
- api-and-interface-design
- documentation-and-adrs

Relevant Context:
- SPEC Q4, Q13, F1/F4/F5, R2–R3, §10. IDs resolve in §7, §9, §18.
- PLAN §Blocking decisions/research → D05; §Planning boundaries; §Checkpoints and task execution rules.
- TODO reference: [tasks/todo.md](tasks/todo.md), `D05 — Resolve minimal profile and health uncertainty`.

Scope (unchanged):
- Decide nickname optionality, minimum confirmation, exact provisional-health cases and required medical follow-ups/labels.
- Files: `docs/decisions/D05.md`; `docs/evidence/D05-*.md`; `SPEC.md` (affected question only).
- Original completion criteria: Unknown/no-condition/missing values distinguished; permitted provisional cases versus blocked decisions explicit; only documented-rule follow-ups allowed.

Verification:
- Review family, senior, multiple-condition and unknown-history examples; unresolved intent gets explicit clarification.
- Check original completion criteria against the decision/evidence record and affected SPEC question; unresolved outcomes keep this task Pending.
- Complete original checkpoint review(s): RD2; retain evidence and required human review before advancing the affected path.

Completion:
- [x] Decision complete
- [x] Scenario/source verification pass
- [x] RD2 human review and verification pass

## T08 — Verify hosting and storage arrangement

Status: Pending
Depends on: T03

Skills:
- context-engineering
- shipping-and-launch
- source-driven-development
- documentation-and-adrs

Relevant Context:
- SPEC Q6, §12, F10/F11, V2. IDs resolve in §7, §8, §18.
- PLAN §Blocking decisions/research → D07; §Planning boundaries; §Checkpoints and task execution rules.
- TODO reference: [tasks/todo.md](tasks/todo.md), `D07 — Verify hosting and storage arrangement`.

Scope (unchanged):
- Investigate Vercel transport requirements and any necessary free backend/storage without committing to an unsupported topology.
- Files: `docs/decisions/D07.md`; `docs/evidence/D07-*.md`; `SPEC.md` (affected question only).
- Original completion criteria: Chosen/proposed arrangement has documented streaming/connection and durable laptop/hosted access evidence, limits and free conditions; incompatibilities explicitly blocked.

Verification:
- Verify official hosting terms and minimal transport/restart persistence feasibility; distinguish probe evidence from final deployed-app acceptance.
- Check original completion criteria against the decision/evidence record and affected SPEC question; unresolved outcomes keep this task Pending.

Completion:
- [ ] Implementation complete
- [ ] Tests pass
- [ ] Verification pass

### T08a — Infrastructure/database feasibility

Status: Complete
Depends on: T03

Verification: PASS. Owner-authorized Neon project is linked/deployed; `neon status` passed; pooled/direct connection configuration is present in ignored `.env`; a real Neon insert/read using `pg` passed and rolled back. Evidence: [D07 hosting evidence](docs/evidence/D07-hosting-feasibility.md). This proves database connectivity and SQL write/read only.

### T08b — Hosted application verification

Status: Pending
Depends on: T08a, T40, T41, T42, T54
Verification slot: T57 / Z04, after the real application has WebSocket, durable-session and deploy paths. Verify local/hosted access to synthetic persistent data, hosted WebSocket exchange, and read the same record after restart/redeploy and reconnect. Record hosted results in [D07 evidence](docs/evidence/D07-hosting-feasibility.md) and [Z04 evidence](docs/evidence/Z04-hosted-isolation.md).

Do not create a throwaway application/runtime solely to satisfy this probe. The workspace currently has no runnable application; hosted WebSocket verification has NOT RUN and restart/redeploy persistence verification has NOT RUN. SPEC §12.1 now permits the adapter after T08a and Q7/Q8 decisions, and deployment after Q7/Q8 plus the account/plan eligibility preflight. T08b still needs T41/M26 and T54/Z01 and runs only after they exist. Keep T08b and T08 overall Pending until every hosted check passes.

## T09 — Decide owner and tester access boundaries

Status: Pending
Depends on: T08a

Skills:
- context-engineering
- security-and-hardening
- documentation-and-adrs

Relevant Context:
- SPEC Q7, P2/P6, F10/F11. IDs resolve in §7, §13, §18.
- PLAN §Blocking decisions/research → D08; §Planning boundaries; §Checkpoints and task execution rules.
- TODO reference: [tasks/todo.md](tasks/todo.md), `D08 — Decide owner and tester access boundaries`.

Scope (unchanged):
- Define owner authentication/authorization, invited-tester access and current-session isolation without adding customer accounts or usage caps.
- Files: `docs/decisions/D08.md`; `docs/evidence/D08-*.md`; `SPEC.md` (affected question only).
- Original completion criteria: Owner/tester/unauthenticated permissions and session restoration identity recorded; shared code is not assumed approved.

Verification:
- Table covers direct list/read/delete requests, another tester's session and expired/invalid credentials.
- Check original completion criteria against the decision/evidence record and affected SPEC question; unresolved outcomes keep this task Pending.

Completion:
- [ ] Implementation complete
- [ ] Tests pass
- [ ] Verification pass

## T10 — Verify provider notices and live-search policy

Status: Pending
Depends on: T03, T08a, T04

Skills:
- context-engineering
- security-and-hardening
- source-driven-development
- documentation-and-adrs

Relevant Context:
- SPEC Q9, R15/R16, P3/P4/P7, §12. IDs resolve in §9, §13, §18.
- PLAN §Blocking decisions/research → D10; §Planning boundaries; §Checkpoints and task execution rules.
- TODO reference: [tasks/todo.md](tasks/todo.md), `D10 — Verify provider notices and live-search policy`.

Scope (unchanged):
- Verify processing/retention disclosures and Tavily access/free terms; define query minimization, official domains and missing-link behavior.
- Files: `docs/decisions/D10.md`; `docs/evidence/D10-*.md`; `SPEC.md` (affected question only).
- Original completion criteria: Search access/allowances checked; permitted query/result behavior and provider notice approved/recorded; P7 deferral, if any, explicit.

Verification:
- Bounded dummy search, source-link checks and query inspection; never send names/full profiles by assumption.
- Check original completion criteria against the decision/evidence record and affected SPEC question; unresolved outcomes keep this task Pending.

Completion:
- [ ] Implementation complete
- [ ] Tests pass
- [ ] Verification pass

## T11 — Decide complete deletion semantics

Status: Pending
Depends on: T08a, T09, T10

Skills:
- context-engineering
- security-and-hardening
- documentation-and-adrs

Relevant Context:
- SPEC Q8, F11, P4/P5. IDs resolve in §7, §13, §18.
- PLAN §Blocking decisions/research → D09; §Planning boundaries; §Checkpoints and task execution rules.
- TODO reference: [tasks/todo.md](tasks/todo.md), `D09 — Decide complete deletion semantics`.

Scope (unchanged):
- Define deletion coverage, browser invalidation, concurrent/in-flight saves, logs/backups/provider limits and accurate owner wording.
- Files: `docs/decisions/D09.md`; `docs/evidence/D09-*.md`; `SPEC.md` (affected question only).
- Original completion criteria: Delete-all success/failure contract and no-resurrection behavior defined for every retained copy; provider limits disclosed; no automatic schedule added.

Verification:
- Walk delete-during-save, restored browser, partial failure and provider-retention cases against chosen storage evidence.
- Check original completion criteria against the decision/evidence record and affected SPEC question; unresolved outcomes keep this task Pending.
- Complete original checkpoint review(s): RD3; retain evidence and required human review before advancing the affected path.

Completion:
- [ ] Implementation complete
- [ ] Tests pass
- [ ] Verification pass

## T12 — Define browser, translation and accessibility checks

Status: Pending
Depends on: T03

Skills:
- context-engineering
- frontend-ui-engineering
- browser-testing-with-devtools
- documentation-and-adrs

Relevant Context:
- SPEC Q12, F2/F3, V1/V7, A3/A13. IDs resolve in §7, §8, §16, §18.
- PLAN §Blocking decisions/research → D12; §Planning boundaries; §Checkpoints and task execution rules.
- TODO reference: [tasks/todo.md](tasks/todo.md), `D12 — Define browser, translation and accessibility checks`.

Scope (unchanged):
- Establish target browsers/devices, language UI inventory and concrete accessibility/readability criteria.
- Files: `docs/decisions/D12.md`; `docs/evidence/D12-*.md`; `SPEC.md` (affected question only).
- Original completion criteria: Language/screen inventory and human review coverage linked to D06; chosen browser and accessibility expectations are testable; no arbitrary unsupported pass threshold.

Verification:
- Trace every translated screen and speech path to a browser/language check; record unverified devices.
- Check original completion criteria against the decision/evidence record and affected SPEC question; unresolved outcomes keep this task Pending.
- Complete original checkpoint review(s): RD4; retain evidence and required human review before advancing the affected path.

Completion:
- [ ] Implementation complete
- [ ] Tests pass
- [ ] Verification pass

## T13 — Define latency evidence

Status: Pending
Depends on: T03, T04, T12

Skills:
- context-engineering
- performance-optimization
- documentation-and-adrs

Relevant Context:
- SPEC Q11, V6 (SHOULD), A3, §17. IDs resolve in §8, §16, §18.
- PLAN §Blocking decisions/research → D13; §Planning boundaries; §Checkpoints and task execution rules.
- TODO reference: [tasks/todo.md](tasks/todo.md), `D13 — Define latency evidence`.

Scope (unchanged):
- Define end-of-speech/start-of-audio measurement, conditions, percentile/distribution and search-delay reporting.
- Files: `docs/decisions/D13.md`; `docs/evidence/D13-*.md`; `SPEC.md` (affected question only).
- Original completion criteria: Measurable target and report format recorded without promising a hard two-second guarantee or lowering any MUST.

Verification:
- Review sample timestamps/calculation and explicit separation of search delays.
- Check original completion criteria against the decision/evidence record and affected SPEC question; unresolved outcomes keep this task Pending.

Completion:
- [ ] Implementation complete
- [ ] Tests pass
- [ ] Verification pass

## T14 — Fixed-stack tooling baseline (S0)

Status: Pending
Depends on: T01

Skills:
- context-engineering
- source-driven-development
- incremental-implementation

Relevant Context:
- SPEC §12 fixed stack and downstream tooling choices.
- PLAN §Vertical slices and dependency map → S0 Runnable foundation; §File ownership and slice locations; §Checkpoints and task execution rules.
- TODO reference: [tasks/todo.md](tasks/todo.md), `M01A — Fixed-stack tooling baseline (S0)`.

Scope (unchanged):
- Add only the minimal package, compiler and runner configuration chosen in D01.
- Files: `package.json`; `frontend/package.json`; `backend/package.json`; `frontend/tsconfig.json`; `backend/tsconfig.json` (D01 must budget lockfile/tool config separately if needed).
- Original completion criteria: Dependency installation and chosen command definitions are valid; no product behavior/provider integrations added; source-dependent build checks are explicitly deferred to M01B, not falsely reported passing.

Verification:
- Installation/configuration validation and dependency/version review against D01; no secrets or paid service setup.
- Run D01 installation/configuration validation; record source-dependent checks as deferred to M01B.

Bounded setup steps from D01 (complete one, verify it, then stop):

### T14.a — Manifests and lock

Status: Complete
Depends on: T01
Files: `package.json`; `frontend/package.json`; `backend/package.json`; `package-lock.json`; `.gitignore` (5).
Verification: Validate pinned manifests/workspaces; run first install; inspect `npm ls --all` for peer errors and lock consistency. No source-build pass is claimed.
Verification result: PASS for the defined manifest/workspace/lock and peer-error checks. `npm install --save-exact` succeeded; all D01 and preserved Neon direct pins resolve in the sole root lock; no peer problems were reported. `npm ls --all` itself exits 1 only for five missing transitive dependencies of Tailwind's optional `@tailwindcss/oxide-wasm32-wasi` package (`cpu: wasm32`), which is not installed on this win32 x64 environment; that caveat is recorded in `build-progress.md`. Source-dependent commands remain deferred.

### T14.b — Compiler, Vite, and lint configuration

Status: Complete
Depends on: T14.a
Files: `frontend/tsconfig.json`; `backend/tsconfig.json`; `tsconfig.tests.json`; `frontend/vite.config.ts`; `eslint.config.mjs` (5).
Verification: Confirm documented compiler/output boundaries, config syntax, and installed tool configuration loading. Source-dependent results remain deferred.
Verification result: PASS. TypeScript parsed all three configs and checked strict targets/module resolution plus backend `rootDir`/`outDir`; empty-source TS18003 was the only excluded diagnostic. Vite loaded the config with its supported native loader and exposed React/Tailwind plugins plus the `/api` proxy. ESLint loaded the flat config and blocked frontend→backend, shared→backend, and shared→Node imports. The default bundled Vite loader hit Windows `spawn EPERM` in this environment; the native loader passed. No source-dependent build/dev/typecheck/test result is claimed.

### T14.c — Test runners

Status: Pending
Depends on: T14.b
Files: `vitest.config.ts`; `playwright.config.ts` (2).
Verification: Installed runner help/config discovery as applicable; report missing source/tests honestly. Final T14 review accounts for all three setup steps.

Keep T14 Pending until T14.a, T14.b, and T14.c pass. Persist each step's progress and stop after one selected step.

Completion:
- [ ] Implementation complete
- [ ] Tests pass
- [ ] Verification pass

## T15 — Executable browser/server baseline (S0)

Status: Pending
Depends on: T14

Skills:
- context-engineering
- api-and-interface-design
- incremental-implementation
- test-driven-development

Relevant Context:
- SPEC §12 fixed stack.
- PLAN §Vertical slices and dependency map → S0 Runnable foundation; §File ownership and slice locations; §Checkpoints and task execution rules.
- TODO reference: [tasks/todo.md](tasks/todo.md), `M01B — Executable browser/server baseline (S0)`.

Scope (unchanged):
- Add the smallest frontend and Express server entry paths needed to execute the chosen stack.
- Files: `frontend/index.html`; `frontend/src/main.tsx`; `backend/src/app.ts`; `backend/src/server.ts`; `tests/integration/baseline.test.ts`.
- Original completion criteria: Browser and server execute locally with D01 commands; build/type/lint baseline passes; no business rules or speculative endpoint contracts introduced.

Verification:
- Actual D01 build/type/lint commands and focused browser/server smoke check.
- Run exact D01 focused-test/browser-test command(s) targeting: `tests/integration/baseline.test.ts`.
- Run exact D01 build/type/lint commands; record output and verify the accumulated journey still works.

Completion:
- [ ] Implementation complete
- [ ] Tests pass
- [ ] Verification pass

## T16 — Welcome and workspace shell (S0)

Status: Pending
Depends on: T15, T12

Skills:
- context-engineering
- frontend-ui-engineering
- incremental-implementation
- test-driven-development
- browser-testing-with-devtools

Relevant Context:
- SPEC F2/F3 foundation, P1, §6/§12. IDs resolve in §7, §13.
- PLAN §Vertical slices and dependency map → S0 Runnable foundation; §File ownership and slice locations; §Checkpoints and task execution rules.
- TODO reference: [tasks/todo.md](tasks/todo.md), `M01C — Welcome and workspace shell (S0)`.

Scope (unchanged):
- Add welcome-to-workspace entry, responsive shell, language state and dummy notice to the running baseline.
- Files: `frontend/src/App.tsx`; `frontend/src/styles.css`; `frontend/src/features/onboarding/Welcome.tsx`; `frontend/src/i18n/index.ts`; `tests/e2e/welcome.spec.ts`.
- Original completion criteria: One-click form/conversation entry, laptop/phone shell and language selector run; selected language preserved when entering workspace; no provider credentials required.

Verification:
- Actual D01 checks and browser welcome/entry/layout check.
- Run exact D01 focused-test/browser-test command(s) targeting: `tests/e2e/welcome.spec.ts`.
- Run exact D01 build/type/lint commands; record output and verify the accumulated journey still works.
- Complete original checkpoint review(s): K00; retain evidence and required human review before advancing the affected path.

Completion:
- [ ] Implementation complete
- [ ] Tests pass
- [ ] Verification pass

## T17 — Family and health intake (S1)

Status: Pending
Depends on: T16, T06, T07

Skills:
- context-engineering
- frontend-ui-engineering
- incremental-implementation
- test-driven-development
- browser-testing-with-devtools

Relevant Context:
- SPEC F1/F4, R3, §10, P1. IDs resolve in §7, §9, §13.
- PLAN §Vertical slices and dependency map → S1 Onboarding/profile; §File ownership and slice locations; §Checkpoints and task execution rules.
- TODO reference: [tasks/todo.md](tasks/todo.md), `M02 — Family and health intake (S1)`.

Scope (unchanged):
- Add stepped family/health entry backed by one shared profile.
- Files: `shared/profile.ts`; `frontend/src/state/session.ts`; `frontend/src/features/onboarding/FamilyHealthStep.tsx`; `frontend/src/features/onboarding/FamilyHealthStep.test.tsx`.
- Original completion criteria: Ages/relationships and per-person condition/no-condition/not-sure values persist across back navigation; malformed/conflicting values clarified; prohibited identity fields absent.

Verification:
- Multiple people, senior/child boundaries from agreed rules, unknown versus no conditions and back-navigation cases.
- Run exact D01 focused-test/browser-test command(s) targeting: `frontend/src/features/onboarding/FamilyHealthStep.test.tsx`.
- Run exact D01 build/type/lint commands; record output and verify the accumulated journey still works.

Completion:
- [ ] Implementation complete
- [ ] Tests pass
- [ ] Verification pass

## T18 — Budget and preference intake (S1)

Status: Pending
Depends on: T17, T05, T06

Skills:
- context-engineering
- frontend-ui-engineering
- incremental-implementation
- test-driven-development
- browser-testing-with-devtools

Relevant Context:
- SPEC F1/F4, R4/R7/R11, §10. IDs resolve in §7, §9.
- PLAN §Vertical slices and dependency map → S1 Onboarding/profile; §File ownership and slice locations; §Checkpoints and task execution rules.
- TODO reference: [tasks/todo.md](tasks/todo.md), `M03 — Budget and preference intake (S1)`.

Scope (unchanged):
- Capture budget/coverage values or explicit uncertainty, main priority and optional insurer/secondary preferences.
- Files: `frontend/src/features/onboarding/BudgetPreferencesStep.tsx`; `frontend/src/state/session.ts`; `shared/profile.ts`; `frontend/src/features/onboarding/BudgetPreferencesStep.test.tsx`.
- Original completion criteria: Choices persist on back navigation; malformed amounts rejected using decided rules; no automatic budget/coverage adjustment or fabricated estimates.

Verification:
- Known/unknown amounts, changed priority, preferred insurer and conflicting inputs.
- Run exact D01 focused-test/browser-test command(s) targeting: `frontend/src/features/onboarding/BudgetPreferencesStep.test.tsx`.
- Run exact D01 build/type/lint commands; record output and verify the accumulated journey still works.
- Complete original checkpoint review(s): K01; retain evidence and required human review before advancing the affected path.

Completion:
- [ ] Implementation complete
- [ ] Tests pass
- [ ] Verification pass

## T19 — Shared editable confirmation (S1)

Status: Pending
Depends on: T18, T07

Skills:
- context-engineering
- frontend-ui-engineering
- incremental-implementation
- test-driven-development
- browser-testing-with-devtools

Relevant Context:
- SPEC F1/F5, V4, Q13, §6. IDs resolve in §7, §8, §18.
- PLAN §Vertical slices and dependency map → S1 Onboarding/profile; §File ownership and slice locations; §Checkpoints and task execution rules.
- TODO reference: [tasks/todo.md](tasks/todo.md), `M04 — Shared editable confirmation (S1)`.

Scope (unchanged):
- Complete intake with editable summary and explicit confirmation state usable by form and later conversation.
- Files: `frontend/src/features/profile/ProfileConfirmation.tsx`; `frontend/src/state/session.ts`; `frontend/src/features/profile/ProfileConfirmation.test.tsx`.
- Original completion criteria: Confirmed summary includes required ages/health/budget/coverage/preferences; corrections preserve unaffected data; required unknowns follow D05 and no premature recommendation occurs.

Verification:
- Missing required field, provisional health, correction and successful confirmation cases.
- Run exact D01 focused-test/browser-test command(s) targeting: `frontend/src/features/profile/ProfileConfirmation.test.tsx`.
- Run exact D01 build/type/lint commands; record output and verify the accumulated journey still works.

Completion:
- [ ] Implementation complete
- [ ] Tests pass
- [ ] Verification pass

## T20 — First verified real plan (S2)

Status: Pending
Depends on: T01, T02

Skills:
- context-engineering
- api-and-interface-design
- source-driven-development
- incremental-implementation
- test-driven-development

Relevant Context:
- SPEC §11, R2/R10/R12/R15, A12. IDs resolve in §9, §16.
- PLAN §Vertical slices and dependency map → S2 Verified catalogue; §File ownership and slice locations; §Checkpoints and task execution rules.
- TODO reference: [tasks/todo.md](tasks/todo.md), `M05 — First verified real plan (S2)`.

Scope (unchanged):
- Define the catalogue evidence representation and load selected slot 1, with explicit unknown/not-applicable fields.
- Files: `shared/plan.ts`; `backend/src/catalogue/validate.ts`; `data/catalogue/<slot-1-plan-id>.json`; `data/sources.json`; `backend/src/catalogue/validate.test.ts`.
- Original completion criteria: First entry has sourced eligibility/coverage/waits/price assumptions; no fabricated premiums; validation rejects unsupported mandatory claims and distinguishes unknowns.

Verification:
- Compare entry to official wording/prospectus and test missing/conflicting-field validation per D02.
- Run exact D01 focused-test/browser-test command(s) targeting: `backend/src/catalogue/validate.test.ts`.
- Run exact D01 build/type/lint commands; record output and verify the accumulated journey still works.

Completion:
- [ ] Implementation complete
- [ ] Tests pass
- [ ] Verification pass

## T21 — Verify catalogue slot 2 (S2)

Status: Pending
Depends on: T20

Skills:
- context-engineering
- source-driven-development
- incremental-implementation

Relevant Context:
- SPEC §11, R2/R10/R12–R15, A12. IDs resolve in §9, §16.
- PLAN §Vertical slices and dependency map → S2 Verified catalogue; §File ownership and slice locations; §Checkpoints and task execution rules.
- TODO reference: [tasks/todo.md](tasks/todo.md), `M06 — Verify catalogue slot 2 (S2)`.

Scope (unchanged):
- Research, encode and validate the second selected real plan using the established evidence format.
- Files: `data/catalogue/<slot-2-plan-id>.json`; `data/sources.json`; `tests/fixtures/catalogue/<slot-2-plan-id>.json`.
- Original completion criteria: Identity/variant and all applicable rules traced; premium unknowns/assumptions explicit; data passes catalogue validation.

Verification:
- Official-source field review plus focused entry-validation check.
- Run exact D01 build/type/lint commands; record output and verify the accumulated journey still works.
- Complete original checkpoint review(s): K02; retain evidence and required human review before advancing the affected path.

Completion:
- [ ] Implementation complete
- [ ] Tests pass
- [ ] Verification pass

## T22 — Verify catalogue slot 3 (S2)

Status: Pending
Depends on: T20

Skills:
- context-engineering
- source-driven-development
- incremental-implementation

Relevant Context:
- SPEC §11, R2/R10/R12–R15, A12. IDs resolve in §9, §16.
- PLAN §Vertical slices and dependency map → S2 Verified catalogue; §File ownership and slice locations; §Checkpoints and task execution rules.
- TODO reference: [tasks/todo.md](tasks/todo.md), `M07 — Verify catalogue slot 3 (S2)`.

Scope (unchanged):
- Research and encode selected real plan 3, preserving source provenance.
- Files: `data/catalogue/<slot-3-plan-id>.json`; `data/sources.json`; `tests/fixtures/catalogue/<slot-3-plan-id>.json`.
- Original completion criteria: Applicable rules/unknowns and price assumptions documented; catalogue validation passes.

Verification:
- Official-source review and entry-validation check.
- Run exact D01 build/type/lint commands; record output and verify the accumulated journey still works.

Completion:
- [ ] Implementation complete
- [ ] Tests pass
- [ ] Verification pass

## T23 — Verify catalogue slot 4 (S2)

Status: Pending
Depends on: T20

Skills:
- context-engineering
- source-driven-development
- incremental-implementation

Relevant Context:
- SPEC §11, R2/R10/R12–R15, A12. IDs resolve in §9, §16.
- PLAN §Vertical slices and dependency map → S2 Verified catalogue; §File ownership and slice locations; §Checkpoints and task execution rules.
- TODO reference: [tasks/todo.md](tasks/todo.md), `M08 — Verify catalogue slot 4 (S2)`.

Scope (unchanged):
- Research and encode selected real plan 4 in the same format.
- Files: `data/catalogue/<slot-4-plan-id>.json`; `data/sources.json`; `tests/fixtures/catalogue/<slot-4-plan-id>.json`.
- Original completion criteria: Applicable rules/unknowns and price assumptions documented; catalogue validation passes.

Verification:
- Official-source review and entry-validation check.
- Run exact D01 build/type/lint commands; record output and verify the accumulated journey still works.

Completion:
- [ ] Implementation complete
- [ ] Tests pass
- [ ] Verification pass

## T24 — Verify catalogue slot 5 (S2)

Status: Pending
Depends on: T20

Skills:
- context-engineering
- source-driven-development
- incremental-implementation

Relevant Context:
- SPEC §11, R2/R10/R12–R15, A12. IDs resolve in §9, §16.
- PLAN §Vertical slices and dependency map → S2 Verified catalogue; §File ownership and slice locations; §Checkpoints and task execution rules.
- TODO reference: [tasks/todo.md](tasks/todo.md), `M09 — Verify catalogue slot 5 (S2)`.

Scope (unchanged):
- Research and encode selected real plan 5 in the same format.
- Files: `data/catalogue/<slot-5-plan-id>.json`; `data/sources.json`; `tests/fixtures/catalogue/<slot-5-plan-id>.json`.
- Original completion criteria: Applicable rules/unknowns and price assumptions documented; catalogue validation passes.

Verification:
- Official-source review and entry-validation check.
- Run exact D01 build/type/lint commands; record output and verify the accumulated journey still works.
- Complete original checkpoint review(s): K03; retain evidence and required human review before advancing the affected path.

Completion:
- [ ] Implementation complete
- [ ] Tests pass
- [ ] Verification pass

## T25 — Verify catalogue slot 6 (S2)

Status: Pending
Depends on: T20

Skills:
- context-engineering
- source-driven-development
- incremental-implementation

Relevant Context:
- SPEC §11, R2/R10/R12–R15, A12. IDs resolve in §9, §16.
- PLAN §Vertical slices and dependency map → S2 Verified catalogue; §File ownership and slice locations; §Checkpoints and task execution rules.
- TODO reference: [tasks/todo.md](tasks/todo.md), `M10 — Verify catalogue slot 6 (S2)`.

Scope (unchanged):
- Research and encode selected real plan 6 in the same format.
- Files: `data/catalogue/<slot-6-plan-id>.json`; `data/sources.json`; `tests/fixtures/catalogue/<slot-6-plan-id>.json`.
- Original completion criteria: Applicable rules/unknowns and price assumptions documented; catalogue validation passes.

Verification:
- Official-source review and entry-validation check.
- Run exact D01 build/type/lint commands; record output and verify the accumulated journey still works.

Completion:
- [ ] Implementation complete
- [ ] Tests pass
- [ ] Verification pass

## T26 — Verify catalogue slot 7 (S2)

Status: Pending
Depends on: T20

Skills:
- context-engineering
- source-driven-development
- incremental-implementation

Relevant Context:
- SPEC §11, R2/R10/R12–R15, A12. IDs resolve in §9, §16.
- PLAN §Vertical slices and dependency map → S2 Verified catalogue; §File ownership and slice locations; §Checkpoints and task execution rules.
- TODO reference: [tasks/todo.md](tasks/todo.md), `M11 — Verify catalogue slot 7 (S2)`.

Scope (unchanged):
- Research and encode selected real plan 7 in the same format.
- Files: `data/catalogue/<slot-7-plan-id>.json`; `data/sources.json`; `tests/fixtures/catalogue/<slot-7-plan-id>.json`.
- Original completion criteria: Applicable rules/unknowns and price assumptions documented; catalogue validation passes.

Verification:
- Official-source review and entry-validation check.
- Run exact D01 build/type/lint commands; record output and verify the accumulated journey still works.

Completion:
- [ ] Implementation complete
- [ ] Tests pass
- [ ] Verification pass

## T27 — Verify catalogue slot 8 (S2)

Status: Pending
Depends on: T20

Skills:
- context-engineering
- source-driven-development
- incremental-implementation

Relevant Context:
- SPEC §11, R2/R10/R12–R15, A12. IDs resolve in §9, §16.
- PLAN §Vertical slices and dependency map → S2 Verified catalogue; §File ownership and slice locations; §Checkpoints and task execution rules.
- TODO reference: [tasks/todo.md](tasks/todo.md), `M12 — Verify catalogue slot 8 (S2)`.

Scope (unchanged):
- Research and encode selected real plan 8 in the same format.
- Files: `data/catalogue/<slot-8-plan-id>.json`; `data/sources.json`; `tests/fixtures/catalogue/<slot-8-plan-id>.json`.
- Original completion criteria: Applicable rules/unknowns and price assumptions documented; catalogue validation passes.

Verification:
- Official-source review and entry-validation check.
- Run exact D01 build/type/lint commands; record output and verify the accumulated journey still works.
- Complete original checkpoint review(s): K04; retain evidence and required human review before advancing the affected path.

Completion:
- [ ] Implementation complete
- [ ] Tests pass
- [ ] Verification pass

## T28 — Resolve catalogue slot 9 (S2, conditional on D02)

Status: Pending
Depends on: T20, T02

Skills:
- context-engineering
- source-driven-development
- incremental-implementation

Relevant Context:
- SPEC §11, A12; 8–9-plan requirement. IDs resolve in §16.
- PLAN §Vertical slices and dependency map → S2 Verified catalogue; §File ownership and slice locations; §Checkpoints and task execution rules.
- TODO reference: [tasks/todo.md](tasks/todo.md), `M13 — Resolve catalogue slot 9 (S2, conditional on D02)`.

Scope (unchanged):
- Encode selected slot 9 if D02 chooses nine plans; otherwise record that the approved catalogue contains eight and this task is not applicable.
- Files: `data/catalogue/<slot-9-plan-id>.json`; `data/sources.json`; `tests/fixtures/catalogue/<slot-9-plan-id>.json` (or eight-plan non-applicability recorded in docs/decisions/D02.md).
- Original completion criteria: Catalogue contains exactly the approved eight or nine verified entries; no placeholder ninth product.

Verification:
- Source/validation check for ninth entry, or documented eight-plan decision and catalogue count.
- Run exact D01 build/type/lint commands; record output and verify the accumulated journey still works.

Completion:
- [ ] Implementation complete
- [ ] Tests pass
- [ ] Verification pass

## T29 — Documented eligibility path (S3)

Status: Pending
Depends on: T19, T20, T07

Skills:
- context-engineering
- api-and-interface-design
- incremental-implementation
- test-driven-development

Relevant Context:
- SPEC R1–R3/R12, F5, A5. IDs resolve in §7, §9, §16.
- PLAN §Vertical slices and dependency map → S3 Deterministic recommendation journey; §File ownership and slice locations; §Checkpoints and task execution rules.
- TODO reference: [tasks/todo.md](tasks/todo.md), `M14 — Documented eligibility path (S3)`.

Scope (unchanged):
- Evaluate the confirmed profile against catalogue eligibility and clearly represent provisional, separate-policy and unverified cases.
- Files: `backend/src/catalogue/load.ts`; `backend/src/rules/eligibility.ts`; `backend/src/rules/eligibility.test.ts`; `shared/contracts.ts`; `tests/fixtures/eligibility.json`.
- Original completion criteria: Known-ineligible/unverified age-family plans never ranked; health uncertainty follows D05; exactly covered people and insurer medical-assessment caveats explicit.

Verification:
- Source-derived age/family boundaries, multiple conditions, senior members and unknown history against deterministic fixtures.
- Run exact D01 focused-test/browser-test command(s) targeting: `backend/src/rules/eligibility.test.ts`.
- Run exact D01 build/type/lint commands; record output and verify the accumulated journey still works.

Completion:
- [ ] Implementation complete
- [ ] Tests pass
- [ ] Verification pass

## T30 — Priority and price ordering (S3)

Status: Pending
Depends on: T29, T02, T05

Skills:
- context-engineering
- api-and-interface-design
- incremental-implementation
- test-driven-development

Relevant Context:
- SPEC R4–R10, A6. IDs resolve in §9, §16.
- PLAN §Vertical slices and dependency map → S3 Deterministic recommendation journey; §File ownership and slice locations; §Checkpoints and task execution rules.
- TODO reference: [tasks/todo.md](tasks/todo.md), `M15 — Priority and price ordering (S3)`.

Scope (unchanged):
- Rank eligible results using the resolved rules, insurer preference and comparable price evidence.
- Files: `backend/src/rules/ranking.ts`; `backend/src/rules/ranking.test.ts`; `tests/fixtures/ranking.json`; `shared/contracts.ts`.
- Original completion criteria: Main/default priorities, ties and unknown prices follow D03; over-budget deltas and too-few/no-match states accurate; alternatives require permission when insurer preference applies.

Verification:
- Priority conflicts, comparable/unknown/equal premiums, all-over-budget, single/no match and preferred-insurer fixtures.
- Run exact D01 focused-test/browser-test command(s) targeting: `backend/src/rules/ranking.test.ts`.
- Run exact D01 build/type/lint commands; record output and verify the accumulated journey still works.
- Complete original checkpoint review(s): K05; retain evidence and required human review before advancing the affected path.

Completion:
- [ ] Implementation complete
- [ ] Tests pass
- [ ] Verification pass

## T31 — Form-to-shortlist vertical path (S3)

Status: Pending
Depends on: T30

Skills:
- context-engineering
- api-and-interface-design
- frontend-ui-engineering
- incremental-implementation
- test-driven-development
- browser-testing-with-devtools

Relevant Context:
- SPEC F5/F6, R8–R10/R12/R15, A1/A2. IDs resolve in §7, §9, §16.
- PLAN §Vertical slices and dependency map → S3 Deterministic recommendation journey; §File ownership and slice locations; §Checkpoints and task execution rules.
- TODO reference: [tasks/todo.md](tasks/todo.md), `M16 — Form-to-shortlist vertical path (S3)`.

Scope (unchanged):
- Connect confirmed profile to rule evaluation and concise result cards; support explicit updates after edits.
- Files: `backend/src/routes/recommendations.ts`; `frontend/src/features/recommendations/Results.tsx`; `frontend/src/state/session.ts`; `frontend/src/lib/api.ts`; `tests/e2e/recommendations.spec.ts`.
- Original completion criteria: User completes form and sees real sourced results; edits retain visibly outdated cards until Update recommendations; no padded results, invented prices or hidden uncovered people.

Verification:
- End-to-end form→confirm→result→edit→update using a verified entry; lower-than-three matches are explained.
- Run exact D01 focused-test/browser-test command(s) targeting: `tests/e2e/recommendations.spec.ts`.
- Run exact D01 build/type/lint commands; record output and verify the accumulated journey still works.

Completion:
- [ ] Implementation complete
- [ ] Tests pass
- [ ] Verification pass

## T32 — Budget and coverage guidance (S3)

Status: Pending
Depends on: T31, T06

Skills:
- context-engineering
- frontend-ui-engineering
- incremental-implementation
- test-driven-development

Relevant Context:
- SPEC R9–R11, F1/F4, A7. IDs resolve in §7, §9, §16.
- PLAN §Vertical slices and dependency map → S3 Deterministic recommendation journey; §File ownership and slice locations; §Checkpoints and task execution rules.
- TODO reference: [tasks/todo.md](tasks/todo.md), `M17 — Budget and coverage guidance (S3)`.

Scope (unchanged):
- Add the agreed guidance to the existing intake/result flow for unsure users.
- Files: `backend/src/rules/coverage.ts`; `backend/src/rules/coverage.test.ts`; `frontend/src/features/onboarding/CoverageGuidance.tsx`; `tests/fixtures/coverage.json`.
- Original completion criteria: Show 2–3 supported coverage choices with documented suggestion and sourced premium ranges or honest price insufficiency; respect selection and never silently adjust values. If evidence cannot support the required coverage choices, record a blocker rather than mark the requirement passed.

Verification:
- Unknown budget/coverage, unsupported amount and all-over-budget corrections against D04 examples.
- Run exact D01 focused-test/browser-test command(s) targeting: `backend/src/rules/coverage.test.ts`.
- Run exact D01 build/type/lint commands; record output and verify the accumulated journey still works.
- Complete original checkpoint review(s): K06; retain evidence and required human review before advancing the affected path.

Completion:
- [ ] Implementation complete
- [ ] Tests pass
- [ ] Verification pass

## T33 — Grounded text question path (S4)

Status: Pending
Depends on: T31, T08a, T09, T10, T04

Skills:
- context-engineering
- api-and-interface-design
- security-and-hardening
- incremental-implementation
- test-driven-development
- browser-testing-with-devtools

Relevant Context:
- SPEC F2/F8, V5, P3/P4/P6, §15. IDs resolve in §7, §8, §13.
- PLAN §Vertical slices and dependency map → S4 AI text conversation; §File ownership and slice locations; §Checkpoints and task execution rules.
- TODO reference: [tasks/todo.md](tasks/todo.md), `M18 — Grounded text question path (S4)`.

Scope (unchanged):
- Add server-side reasoning for insurance questions before profile intake, with transcript and provider failure states.
- Files: `backend/src/services/openai.ts`; `backend/src/routes/advisor.ts`; `backend/src/middleware/access.ts`; `frontend/src/features/advisor/Conversation.tsx`; `tests/integration/advisor.test.ts`.
- Original completion criteria: Text question→grounded written answer works with provider notice/access policy; secrets stay server-side; reasoning failure preserves profile/results and displays unavailability.

Verification:
- Bounded real dummy question, invalid access, timeout/exhaustion fixture and client-secret inspection.
- Run exact D01 focused-test/browser-test command(s) targeting: `tests/integration/advisor.test.ts`.
- Run exact D01 build/type/lint commands; record output and verify the accumulated journey still works.

Completion:
- [ ] Implementation complete
- [ ] Tests pass
- [ ] Verification pass

## T34 — Conversation-driven profile collection (S4)

Status: Pending
Depends on: T33, T32

Skills:
- context-engineering
- api-and-interface-design
- security-and-hardening
- incremental-implementation
- test-driven-development
- browser-testing-with-devtools

Relevant Context:
- SPEC F1/F4/F5, V4, R1/R3/R4/R7/R11. IDs resolve in §7, §8, §9.
- PLAN §Vertical slices and dependency map → S4 AI text conversation; §File ownership and slice locations; §Checkpoints and task execution rules.
- TODO reference: [tasks/todo.md](tasks/todo.md), `M19 — Conversation-driven profile collection (S4)`.

Scope (unchanged):
- Feed conversational extraction/corrections into the same profile and confirmation/result actions as the form.
- Files: `backend/src/services/conversation.ts`; `frontend/src/state/session.ts`; `shared/profile.ts`; `tests/integration/conversation-profile.test.ts`.
- Original completion criteria: Ask missing information only; clarify uncertain/conflicting details; confirmation and explicit Update recommendations remain mandatory; AI cannot override rule outcomes.

Verification:
- Form→text→form switching, unknown health, correction of age/budget and attempted eligibility override.
- Run exact D01 focused-test/browser-test command(s) targeting: `tests/integration/conversation-profile.test.ts`.
- Run exact D01 build/type/lint commands; record output and verify the accumulated journey still works.

Completion:
- [ ] Implementation complete
- [ ] Tests pass
- [ ] Verification pass

## T35 — Sourced explanations and interruption recovery (S4)

Status: Pending
Depends on: T34

Skills:
- context-engineering
- source-driven-development
- security-and-hardening
- incremental-implementation
- test-driven-development

Relevant Context:
- SPEC F8, R13/R15, V4/V5, P3, A7/A12. IDs resolve in §7, §8, §9, §13, §16.
- PLAN §Vertical slices and dependency map → S4 AI text conversation; §File ownership and slice locations; §Checkpoints and task execution rules.
- TODO reference: [tasks/todo.md](tasks/todo.md), `M20 — Sourced explanations and interruption recovery (S4)`.

Scope (unchanged):
- Ground plan/concept answers in evidence and resume pending intake after user questions.
- Files: `backend/src/services/explanations.ts`; `backend/src/services/conversation.ts`; `tests/fixtures/policy-questions.json`; `tests/integration/grounding.test.ts`.
- Original completion criteria: Required insurance concepts have concise explanations; documented plan claims cite sources; absent/conflicting facts yield uncertainty; confusing questions get examples/checks and return to flow.

Verification:
- Concept inventory, upcoming-treatment question, missing/conflicting source, document-instruction injection and interruption/resume cases.
- Run exact D01 focused-test/browser-test command(s) targeting: `tests/integration/grounding.test.ts`.
- Run exact D01 build/type/lint commands; record output and verify the accumulated journey still works.
- Complete original checkpoint review(s): K07; retain evidence and required human review before advancing the affected path.

Completion:
- [ ] Implementation complete
- [ ] Tests pass
- [ ] Verification pass

## T36 — Selectable plan comparison (S5)

Status: Pending
Depends on: T31

Skills:
- context-engineering
- frontend-ui-engineering
- incremental-implementation
- test-driven-development
- browser-testing-with-devtools

Relevant Context:
- SPEC F2/F6/F7, R10/R12/R15, A2/A13. IDs resolve in §7, §9, §16.
- PLAN §Vertical slices and dependency map → S5 Comparison/search; §File ownership and slice locations; §Checkpoints and task execution rules.
- TODO reference: [tasks/todo.md](tasks/todo.md), `M21 — Selectable plan comparison (S5)`.

Scope (unchanged):
- Turn result cards into the right-panel side-by-side comparison with expandable evidence.
- Files: `frontend/src/features/comparison/Comparison.tsx`; `frontend/src/features/comparison/selection.ts`; `frontend/src/features/recommendations/Results.tsx`; `tests/e2e/comparison.spec.ts`.
- Original completion criteria: All shortlisted plans selected initially; remove/reselect works; comparable fields, unknown premiums, covered people, sources and official optional links are visible on laptop/phone.

Verification:
- One/two/three result states, changed selection, source expansion and stale results after profile edits.
- Run exact D01 focused-test/browser-test command(s) targeting: `tests/e2e/comparison.spec.ts`.
- Run exact D01 build/type/lint commands; record output and verify the accumulated journey still works.

Completion:
- [ ] Implementation complete
- [ ] Tests pass
- [ ] Verification pass

## T37 — Live external-plan search (S5)

Status: Pending
Depends on: T35, T36, T10, T04

Skills:
- context-engineering
- api-and-interface-design
- security-and-hardening
- incremental-implementation
- test-driven-development

Relevant Context:
- SPEC R7/R15/R16, P3/P7, A9, §15. IDs resolve in §9, §13, §16.
- PLAN §Vertical slices and dependency map → S5 Comparison/search; §File ownership and slice locations; §Checkpoints and task execution rules.
- TODO reference: [tasks/todo.md](tasks/todo.md), `M22 — Live external-plan search (S5)`.

Scope (unchanged):
- Add Tavily search to no-match and explicitly requested outside-plan flows without promoting hits into ranked recommendations.
- Files: `backend/src/services/tavily.ts`; `backend/src/routes/search.ts`; `frontend/src/features/advisor/ExternalOptions.tsx`; `tests/integration/search.test.ts`; `tests/fixtures/search.ts`.
- Original completion criteria: Permission/query/domain policies enforced; official links shown per D10; results labeled unverified; quota/unavailable search preserves catalogue results and reports failure.

Verification:
- Bounded live dummy search, explicit outside-plan query, preferred-insurer refusal, missing official link and quota/error fixtures.
- Run exact D01 focused-test/browser-test command(s) targeting: `tests/integration/search.test.ts`.
- Run exact D01 build/type/lint commands; record output and verify the accumulated journey still works.
- Complete original checkpoint review(s): K08; retain evidence and required human review before advancing the affected path.

Completion:
- [ ] Implementation complete
- [ ] Tests pass
- [ ] Verification pass

## T38 — Microphone-to-shared-conversation path (S6)

Status: Pending
Depends on: T35, T03, T08a, T10, T12

Skills:
- context-engineering
- api-and-interface-design
- security-and-hardening
- incremental-implementation
- test-driven-development
- browser-testing-with-devtools

Relevant Context:
- SPEC V1/V3/V4/V7, F1, P3/P4, §15. IDs resolve in §7, §8, §13.
- PLAN §Vertical slices and dependency map → S6 Voice conversation; §File ownership and slice locations; §Checkpoints and task execution rules.
- TODO reference: [tasks/todo.md](tasks/todo.md), `M23 — Microphone-to-shared-conversation path (S6)`.

Scope (unchanged):
- Integrate verified STT with the existing text intake and visible listening/processing states.
- Files: `backend/src/services/gnani-stt.ts`; `backend/src/routes/voice.ts`; `frontend/src/features/voice/input.ts`; `frontend/src/features/voice/VoiceControls.tsx`; `tests/integration/speech-input.test.ts`.
- Original completion criteria: Spoken input enters the same profile flow; uncertainty is clarified; mic denial/STT failures offer text and preserve state; audio is not retained as a record.

Verification:
- Real dummy utterance, uncertain recognition, mic denied/unavailable and STT timeout cases on selected browsers.
- Run exact D01 focused-test/browser-test command(s) targeting: `tests/integration/speech-input.test.ts`.
- Run exact D01 build/type/lint commands; record output and verify the accumulated journey still works.

Completion:
- [ ] Implementation complete
- [ ] Tests pass
- [ ] Verification pass

## T39 — Concise spoken answers (S6)

Status: Pending
Depends on: T38

Skills:
- context-engineering
- frontend-ui-engineering
- security-and-hardening
- incremental-implementation
- test-driven-development
- browser-testing-with-devtools

Relevant Context:
- SPEC V1/V5/V7, P4, §15. IDs resolve in §8, §13.
- PLAN §Vertical slices and dependency map → S6 Voice conversation; §File ownership and slice locations; §Checkpoints and task execution rules.
- TODO reference: [tasks/todo.md](tasks/todo.md), `M24 — Concise spoken answers (S6)`.

Scope (unchanged):
- Add TTS playback for the main points while retaining full written content.
- Files: `backend/src/services/gnani-tts.ts`; `frontend/src/features/voice/playback.ts`; `frontend/src/features/voice/VoiceControls.tsx`; `tests/integration/speech-output.test.ts`.
- Original completion criteria: Written answer and concise audio agree on facts; speaking state accurate; TTS failure leaves usable text conversation; no persistent microphone audio.

Verification:
- Bounded real playback, TTS failure, long policy explanation consistency and audio lifecycle inspection.
- Run exact D01 focused-test/browser-test command(s) targeting: `tests/integration/speech-output.test.ts`.
- Run exact D01 build/type/lint commands; record output and verify the accumulated journey still works.

Completion:
- [ ] Implementation complete
- [ ] Tests pass
- [ ] Verification pass

## T40 — Interruption and language continuity (S6)

Status: Pending
Depends on: T39, T03, T12, T13

Skills:
- context-engineering
- frontend-ui-engineering
- observability-and-instrumentation
- incremental-implementation
- test-driven-development
- browser-testing-with-devtools

Relevant Context:
- SPEC V1–V7, F3, A4. IDs resolve in §7, §8, §16.
- PLAN §Vertical slices and dependency map → S6 Voice conversation; §File ownership and slice locations; §Checkpoints and task execution rules.
- TODO reference: [tasks/todo.md](tasks/todo.md), `M25 — Interruption and language continuity (S6)`.

Scope (unchanged):
- Add spoken/typed barge-in, automatic/manual language changes and speech latency event capture.
- Files: `frontend/src/features/voice/interruptions.ts`; `frontend/src/features/voice/language.ts`; `frontend/src/features/voice/playback.ts`; `frontend/src/state/session.ts`; `tests/e2e/voice-continuity.spec.ts`.
- Original completion criteria: Interruptions stop playback and redirect/resume naturally; profile survives changes; ordinary English insurance terms do not force switching; timestamps captured without adding transcript analytics features.

Verification:
- Spoken and typed interruption, manual correction, verified code-switch cases and simulated late/stale audio; end-of-speech→audio-start event check.
- Run exact D01 focused-test/browser-test command(s) targeting: `tests/e2e/voice-continuity.spec.ts`.
- Run exact D01 build/type/lint commands; record output and verify the accumulated journey still works.
- Complete original checkpoint review(s): K09; retain evidence and required human review before advancing the affected path.

Completion:
- [ ] Implementation complete
- [ ] Tests pass
- [ ] Verification pass

## T41 — Isolated durable session records (S7)

Status: Pending
Depends on: T34, T31, T08a, T09, T11, T10

Skills:
- context-engineering
- api-and-interface-design
- security-and-hardening
- incremental-implementation
- test-driven-development

Relevant Context:
- SPEC F10, P2–P4/P6, §15. IDs resolve in §7, §13.
- PLAN §Vertical slices and dependency map → S7 Persistent/private sessions; §File ownership and slice locations; §Checkpoints and task execution rules.
- TODO reference: [tasks/todo.md](tasks/todo.md), `M26 — Isolated durable session records (S7)`.

Scope (unchanged):
- Save shared transcript/profile/result snapshots to the chosen persistent store with server-enforced current-session boundaries.
- Files: `backend/src/storage/sessions.ts`; `backend/src/routes/sessions.ts`; `backend/src/middleware/access.ts`; `shared/session.ts`; `tests/integration/session-storage.test.ts` (SPEC §12.1 allows this adapter after T08a and the Q7/Q8 decisions T09/T11; D07b/T08b remains post-implementation hosted verification).
- Original completion criteria: Laptop/hosted save path exists; raw mic audio excluded; current user cannot fetch/list another session; save errors are visible and do not erase active state.

Verification:
- Save/restart/read fixture, unauthenticated/cross-session direct requests and storage-write failure.
- Run exact D01 focused-test/browser-test command(s) targeting: `tests/integration/session-storage.test.ts`.
- Run exact D01 build/type/lint commands; record output and verify the accumulated journey still works.

Completion:
- [ ] Implementation complete
- [ ] Tests pass
- [ ] Verification pass

## T42 — Refresh and new-session continuity (S7)

Status: Pending
Depends on: T41

Skills:
- context-engineering
- frontend-ui-engineering
- security-and-hardening
- incremental-implementation
- test-driven-development
- browser-testing-with-devtools

Relevant Context:
- SPEC F11, F1/F5, P2/P5, A1/A10. IDs resolve in §7, §13, §16.
- PLAN §Vertical slices and dependency map → S7 Persistent/private sessions; §File ownership and slice locations; §Checkpoints and task execution rules.
- TODO reference: [tasks/todo.md](tasks/todo.md), `M27 — Refresh and new-session continuity (S7)`.

Scope (unchanged):
- Restore the current journey in the same browser and support a clean new active journey.
- Files: `frontend/src/state/session.ts`; `frontend/src/lib/api.ts`; `backend/src/routes/sessions.ts`; `tests/e2e/session-restore.spec.ts`.
- Original completion criteria: Transcript/profile/completed results and stale/confirmation state restore accurately; Start new session starts blank without deleting saved history; failed/deleted restoration is reported, never resurrected.

Verification:
- Refresh mid-form/after result, new session, separate browser sessions and unavailable/deleted record cases.
- Run exact D01 focused-test/browser-test command(s) targeting: `tests/e2e/session-restore.spec.ts`.
- Run exact D01 build/type/lint commands; record output and verify the accumulated journey still works.

Completion:
- [ ] Implementation complete
- [ ] Tests pass
- [ ] Verification pass

## T43 — Owner-only session review (S7)

Status: Pending
Depends on: T41, T09

Skills:
- context-engineering
- security-and-hardening
- frontend-ui-engineering
- incremental-implementation
- test-driven-development

Relevant Context:
- SPEC F10, P2/P6, A10. IDs resolve in §7, §13, §16.
- PLAN §Vertical slices and dependency map → S7 Persistent/private sessions; §File ownership and slice locations; §Checkpoints and task execution rules.
- TODO reference: [tasks/todo.md](tasks/todo.md), `M28 — Owner-only session review (S7)`.

Scope (unchanged):
- Provide the chosen owner authorization plus session list/detail for saved transcript, profile and recommendations.
- Files: `backend/src/routes/owner.ts`; `backend/src/middleware/access.ts`; `frontend/src/features/owner/SessionReview.tsx`; `tests/integration/owner-access.test.ts`.
- Original completion criteria: Owner can review laptop/hosted records; other/unauthenticated requests cannot list/read records or gain owner privileges through direct requests; no extra dashboard features.

Verification:
- Owner/tester/unauthenticated list and direct detail requests; session-to-session isolation and invalid owner credential cases.
- Run exact D01 focused-test/browser-test command(s) targeting: `tests/integration/owner-access.test.ts`.
- Run exact D01 build/type/lint commands; record output and verify the accumulated journey still works.
- Complete original checkpoint review(s): K10; retain evidence and required human review before advancing the affected path.

Completion:
- [ ] Implementation complete
- [ ] Tests pass
- [ ] Verification pass

## T44 — Delete-all without record resurrection (S7)

Status: Pending
Depends on: T42, T43, T11

Skills:
- context-engineering
- security-and-hardening
- api-and-interface-design
- incremental-implementation
- test-driven-development

Relevant Context:
- SPEC F11, P2/P5, A10/A11. IDs resolve in §7, §13, §16.
- PLAN §Vertical slices and dependency map → S7 Persistent/private sessions; §File ownership and slice locations; §Checkpoints and task execution rules.
- TODO reference: [tasks/todo.md](tasks/todo.md), `M29 — Delete-all without record resurrection (S7)`.

Scope (unchanged):
- Implement owner-triggered deletion and invalidation following the approved complete-copy/in-flight-write policy.
- Files: `backend/src/storage/sessions.ts`; `backend/src/routes/owner.ts`; `frontend/src/features/owner/DeleteSessions.tsx`; `frontend/src/state/session.ts`; `tests/integration/session-deletion.test.ts`.
- Original completion criteria: Owner action removes records within defined scope; active/browser restore cannot recreate them; partial failure reported accurately with provider-retention limitations disclosed.

Verification:
- Owner/non-owner delete, delete during save, refreshed old browser, stale in-flight response, partial storage failure and post-delete list/detail requests.
- Run exact D01 focused-test/browser-test command(s) targeting: `tests/integration/session-deletion.test.ts`.
- Run exact D01 build/type/lint commands; record output and verify the accumulated journey still works.

Completion:
- [ ] Implementation complete
- [ ] Tests pass
- [ ] Verification pass

## T45 — Documented claim-rule explanations (S8)

Status: Pending
Depends on: T35, T20, T02

Skills:
- context-engineering
- source-driven-development
- incremental-implementation
- test-driven-development

Relevant Context:
- SPEC F8/F9, R13–R15, A8. IDs resolve in §7, §9, §16.
- PLAN §Vertical slices and dependency map → S8 Claim education; §File ownership and slice locations; §Checkpoints and task execution rules.
- TODO reference: [tasks/todo.md](tasks/todo.md), `M30 — Documented claim-rule explanations (S8)`.

Scope (unchanged):
- Evaluate a supplied hypothetical scenario against documented waits, exclusions and deductions without assuming payout eligibility.
- Files: `backend/src/rules/claims.ts`; `backend/src/rules/claims.test.ts`; `tests/fixtures/claim-explanations.json`.
- Original completion criteria: Relevant waits/exceptions/exclusions and missing/conflicting facts identified with citations; unsupported scenarios request information/insurer confirmation rather than invent outcomes.

Verification:
- Before/at/after documented waiting boundaries, accident exceptions, upcoming treatment, excluded conditions and conflicting evidence.
- Run exact D01 focused-test/browser-test command(s) targeting: `backend/src/rules/claims.test.ts`.
- Run exact D01 build/type/lint commands; record output and verify the accumulated journey still works.

Completion:
- [ ] Implementation complete
- [ ] Tests pass
- [ ] Verification pass

## T46 — Supported illustrative claim amounts (S8)

Status: Pending
Depends on: T45

Skills:
- context-engineering
- source-driven-development
- incremental-implementation
- test-driven-development

Relevant Context:
- SPEC R14/R15, A8. IDs resolve in §9, §16.
- PLAN §Vertical slices and dependency map → S8 Claim education; §File ownership and slice locations; §Checkpoints and task execution rules.
- TODO reference: [tasks/todo.md](tasks/todo.md), `M31 — Supported illustrative claim amounts (S8)`.

Scope (unchanged):
- Add numerical illustrations only for scenarios where documented rules and known inputs support a calculation.
- Files: `backend/src/rules/claims.ts`; `backend/src/rules/claims.test.ts`; `tests/fixtures/claim-calculations.json`.
- Original completion criteria: Co-pay/deductible/room/disease-limit interactions use documented applicable order/conditions; assumptions visible; incomplete/ambiguous interactions produce explanation only, never guaranteed payout.

Verification:
- Source-supported calculations and missing-input/ambiguous-order guard cases; fixtures cover each interaction actually supported by selected plans.
- Run exact D01 focused-test/browser-test command(s) targeting: `backend/src/rules/claims.test.ts`.
- Run exact D01 build/type/lint commands; record output and verify the accumulated journey still works.
- Complete original checkpoint review(s): K11; retain evidence and required human review before advancing the affected path.

Completion:
- [ ] Implementation complete
- [ ] Tests pass
- [ ] Verification pass

## T47 — Hypothetical claim interaction in text and voice (S8)

Status: Pending
Depends on: T46, T40, T41

Skills:
- context-engineering
- frontend-ui-engineering
- security-and-hardening
- incremental-implementation
- test-driven-development
- browser-testing-with-devtools

Relevant Context:
- SPEC F9, V2/V5, R13–R15, §17. IDs resolve in §7, §8, §9.
- PLAN §Vertical slices and dependency map → S8 Claim education; §File ownership and slice locations; §Checkpoints and task execution rules.
- TODO reference: [tasks/todo.md](tasks/todo.md), `M32 — Hypothetical claim interaction in text and voice (S8)`.

Scope (unchanged):
- Collect plan/illness/policy timing/bill and necessary additional details, then explain through the existing conversation and save the record.
- Files: `backend/src/services/conversation.ts`; `backend/src/routes/claims.ts`; `frontend/src/features/claims/ClaimScenario.tsx`; `tests/e2e/claim-conversation.spec.ts`.
- Original completion criteria: Plan-specific scenario can interrupt intake/recommendation flow and return naturally; spoken summary and written details agree; only documented-rule extra questions asked; saved transcript contains explanation.

Verification:
- Text and voice scenario, interrupted profile intake, incomplete scenario, explanation-only and supported numeric case.
- Run exact D01 focused-test/browser-test command(s) targeting: `tests/e2e/claim-conversation.spec.ts`.
- Run exact D01 build/type/lint commands; record output and verify the accumulated journey still works.

Completion:
- [ ] Implementation complete
- [ ] Tests pass
- [ ] Verification pass

## T48 — Translate welcome and profile intake (S9)

Status: Pending
Depends on: T34, T12

Skills:
- context-engineering
- frontend-ui-engineering
- incremental-implementation
- test-driven-development
- browser-testing-with-devtools

Relevant Context:
- SPEC F3, V1/V3, A3/A13, Q12. IDs resolve in §7, §8, §16, §18.
- PLAN §Vertical slices and dependency map → S9 Complete language/UI integration; §File ownership and slice locations; §Checkpoints and task execution rules.
- TODO reference: [tasks/todo.md](tasks/todo.md), `M33A — Translate welcome and profile intake (S9)`.

Scope (unchanged):
- Complete welcome/form/profile/confirmation strings for the verified language inventory.
- Files: `frontend/src/i18n/locales/<language-code>/onboarding.json`; `frontend/src/i18n/index.ts`; `tests/integration/translation-coverage.test.ts`.
- Original completion criteria: Each D12 language covers onboarding strings; official names unchanged; switching preserves profile. If translation volume exceeds one session, D12 must create concrete per-language child tasks before this task starts.

Verification:
- Missing-string check and language switching through all onboarding steps; competent review in Z05.
- Run exact D01 focused-test/browser-test command(s) targeting: `tests/integration/translation-coverage.test.ts`.
- Run exact D01 build/type/lint commands; record output and verify the accumulated journey still works.
- Check all D12-instantiated translation children, when required, before completing this parent.

Completion:
- [ ] Implementation complete
- [ ] Tests pass
- [ ] Verification pass

## T49 — Translate results and external options (S9)

Status: Pending
Depends on: T37, T48

Skills:
- context-engineering
- frontend-ui-engineering
- incremental-implementation
- test-driven-development
- browser-testing-with-devtools

Relevant Context:
- SPEC F3/F6/F7, R15/R16, A3/A13. IDs resolve in §7, §9, §16.
- PLAN §Vertical slices and dependency map → S9 Complete language/UI integration; §File ownership and slice locations; §Checkpoints and task execution rules.
- TODO reference: [tasks/todo.md](tasks/todo.md), `M33B — Translate results and external options (S9)`.

Scope (unchanged):
- Complete result/comparison/source/search UI strings for every verified language.
- Files: `frontend/src/i18n/locales/<language-code>/results.json`; `frontend/src/i18n/index.ts`; `tests/integration/translation-coverage.test.ts`.
- Original completion criteria: Price uncertainty, trade-offs and unverified-search labels retain meaning; official names unchanged; selected comparison survives language changes. D12 creates per-language children first if needed for one-session size.

Verification:
- Missing-string check and known/unknown-price, comparison and external-option language cases.
- Run exact D01 focused-test/browser-test command(s) targeting: `tests/integration/translation-coverage.test.ts`.
- Run exact D01 build/type/lint commands; record output and verify the accumulated journey still works.
- Check all D12-instantiated translation children, when required, before completing this parent.

Completion:
- [ ] Implementation complete
- [ ] Tests pass
- [ ] Verification pass

## T50 — Translate voice and claim states (S9)

Status: Pending
Depends on: T40, T47, T48

Skills:
- context-engineering
- frontend-ui-engineering
- incremental-implementation
- test-driven-development
- browser-testing-with-devtools

Relevant Context:
- SPEC F3/F9, V1/V3/V7, R13–R15, A3. IDs resolve in §7, §8, §9, §16.
- PLAN §Vertical slices and dependency map → S9 Complete language/UI integration; §File ownership and slice locations; §Checkpoints and task execution rules.
- TODO reference: [tasks/todo.md](tasks/todo.md), `M33C — Translate voice and claim states (S9)`.

Scope (unchanged):
- Complete listening/speaking/recognition and hypothetical-claim interface strings for every verified language.
- Files: `frontend/src/i18n/locales/<language-code>/voice-claims.json`; `frontend/src/i18n/index.ts`; `tests/integration/translation-coverage.test.ts`.
- Original completion criteria: Every applicable state translated without changing claim uncertainty or guarantee boundaries; language changes preserve scenario and conversation. D12 creates per-language children first if needed.

Verification:
- Missing-string check, language change mid-scenario, incomplete-claim and speech-error states.
- Run exact D01 focused-test/browser-test command(s) targeting: `tests/integration/translation-coverage.test.ts`.
- Run exact D01 build/type/lint commands; record output and verify the accumulated journey still works.
- Check all D12-instantiated translation children, when required, before completing this parent.
- Complete original checkpoint review(s): KT1; retain evidence and required human review before advancing the affected path.

Completion:
- [ ] Implementation complete
- [ ] Tests pass
- [ ] Verification pass

## T51 — Translate record and recovery controls (S9)

Status: Pending
Depends on: T43, T44, T48, T49, T50

Skills:
- context-engineering
- frontend-ui-engineering
- incremental-implementation
- test-driven-development
- browser-testing-with-devtools

Relevant Context:
- SPEC F3/F10/F11, P5, V7, §15. IDs resolve in §7, §8, §13.
- PLAN §Vertical slices and dependency map → S9 Complete language/UI integration; §File ownership and slice locations; §Checkpoints and task execution rules.
- TODO reference: [tasks/todo.md](tasks/todo.md), `M33D — Translate record and recovery controls (S9)`.

Scope (unchanged):
- Complete owner review, delete, restore/new-session and remaining service error strings for all verified languages.
- Files: `frontend/src/i18n/locales/<language-code>/owner-errors.json`; `frontend/src/i18n/index.ts`; `tests/integration/translation-coverage.test.ts`.
- Original completion criteria: Entire D12 UI inventory covered; deletion success/failure/provider limits accurately translated; no missing control/error labels. D12 creates per-language children first if needed.

Verification:
- Missing-string inventory, owner and failed-save/restore/delete screens across language selectors.
- Run exact D01 focused-test/browser-test command(s) targeting: `tests/integration/translation-coverage.test.ts`.
- Run exact D01 build/type/lint commands; record output and verify the accumulated journey still works.
- Check all D12-instantiated translation children, when required, before completing this parent.

Completion:
- [ ] Implementation complete
- [ ] Tests pass
- [ ] Verification pass

## T52 — Integrated service-state and fallback behavior (S9)

Status: Pending
Depends on: T37, T40, T44, T47, T51, T04

Skills:
- context-engineering
- api-and-interface-design
- security-and-hardening
- incremental-implementation
- test-driven-development

Relevant Context:
- SPEC §15, V7, P3/P4, A11. IDs resolve in §8, §13, §16.
- PLAN §Vertical slices and dependency map → S9 Complete language/UI integration; §File ownership and slice locations; §Checkpoints and task execution rules.
- TODO reference: [tasks/todo.md](tasks/todo.md), `M34 — Integrated service-state and fallback behavior (S9)`.

Scope (unchanged):
- Reconcile existing feature fallbacks across shared state so simultaneous/late failures cannot erase or misrepresent results.
- Files: `frontend/src/state/session.ts`; `backend/src/middleware/errors.ts`; `tests/integration/service-failures.test.ts`; `tests/fixtures/provider-failures.ts`.
- Original completion criteria: All §15 errors retain available state and report true capability/save/deletion status; late responses cannot revive canceled/deleted work; no credentials/audio leakage in error output.

Verification:
- Combined reasoning/speech/search/storage faults, slow responses, timeout/retry behavior and unsupported-language fallback.
- Run exact D01 focused-test/browser-test command(s) targeting: `tests/integration/service-failures.test.ts`.
- Run exact D01 build/type/lint commands; record output and verify the accumulated journey still works.

Completion:
- [ ] Implementation complete
- [ ] Tests pass
- [ ] Verification pass

## T53 — Clearly labeled prefilled dummy entry (S9)

Status: Pending
Depends on: T47, T52, T31

Skills:
- context-engineering
- frontend-ui-engineering
- incremental-implementation
- test-driven-development
- browser-testing-with-devtools

Relevant Context:
- SPEC §17, P1, F5, A1. IDs resolve in §7, §13, §16.
- PLAN §Vertical slices and dependency map → S9 Complete language/UI integration; §File ownership and slice locations; §Checkpoints and task execution rules.
- TODO reference: [tasks/todo.md](tasks/todo.md), `M35 — Clearly labeled prefilled dummy entry (S9)`.

Scope (unchanged):
- Allow the existing journey to start with a fictional profile for the short demonstration without changing empty-profile entry.
- Files: `frontend/src/features/onboarding/DummyProfileEntry.tsx`; `frontend/src/features/onboarding/dummy-profile.ts`; `tests/fixtures/dummy-profile.json`; `tests/e2e/prefilled-journey.spec.ts`.
- Original completion criteria: Prefill visibly fictional, editable and subject to confirmation; uses ordinary rules/voice/comparison, never hardcoded successful recommendations or claim answers. Exact fictional scenario remains owner-selected.
- External prerequisite: owner-selected fictional profile values must be supplied before starting.

Verification:
- Prefilled→live correction→claim question→comparison and separate empty-profile journeys use the same logic.
- Run exact D01 focused-test/browser-test command(s) targeting: `tests/e2e/prefilled-journey.spec.ts`.
- Run exact D01 build/type/lint commands; record output and verify the accumulated journey still works.
- Complete original checkpoint review(s): K12; retain evidence and required human review before advancing the affected path.

Completion:
- [ ] Implementation complete
- [ ] Tests pass
- [ ] Verification pass

## T54 — Deploy a restricted candidate

Status: Pending
Depends on: T52, T53, T21, T22, T23, T24, T25, T26, T27, T28, T41, T42, T43, T44, T08a, T09, T11, T04

Skills:
- context-engineering
- shipping-and-launch
- security-and-hardening
- incremental-implementation
- browser-testing-with-devtools

Relevant Context:
- SPEC §12/§17, P2/P3/P6, Q6/Q7. IDs resolve in §13, §18.
- PLAN §Vertical slices and dependency map → S10 Hosted verification/release; §Requirement-to-delivery coverage; §Checkpoints and task execution rules.
- TODO reference: [tasks/todo.md](tasks/todo.md), `Z01 — Deploy a restricted candidate`.

Scope (unchanged):
- Deploy the integrated candidate using the verified Vercel/backend/storage arrangement and chosen owner/tester access.
- Files: `docs/evidence/Z01-deployment.md`; deployment config remains gated by T09/T11 (Q7/Q8) and a passing pre-deployment check of selected host/database plan eligibility and account-resource limits against the no-spend constraint; `.env.example` files contain names/placeholders only. T08b/D07b is the later hosted-compatibility check at T57/Z04.
- Original completion criteria: Candidate URL works with intended transport/access, secrets excluded from client, no paid-overage settings/app caps introduced; record rollback/removal procedure for this deployment only. Verify plan eligibility/resource state before deployment; if that preflight is unavailable or fails, keep T54 pending.

Verification:
- Clean build and deployed text request, live connection check, invalid-access denial and client bundle/environment inspection.
- Run applicable D01 build/type/lint checks and record candidate-specific results in the original evidence file.

Completion:
- [ ] Implementation complete
- [ ] Tests pass
- [ ] Verification pass

## T55 — Verify full user journeys and layouts

Status: Pending
Depends on: T54, T36, T42, T51

Skills:
- context-engineering
- browser-testing-with-devtools

Relevant Context:
- SPEC A1/A2/A13, F1–F7/F11, §17. IDs resolve in §7, §16.
- PLAN §Vertical slices and dependency map → S10 Hosted verification/release; §Requirement-to-delivery coverage; §Checkpoints and task execution rules.
- TODO reference: [tasks/todo.md](tasks/todo.md), `Z02 — Verify full user journeys and layouts`.

Scope (unchanged):
- Run empty/prefilled form/text/voice journeys, edits and comparison on the target laptop/phone/browser matrix.
- Files: `tests/e2e/core-journeys.spec.ts`; `docs/evidence/Z02-journeys.md`.
- Original completion criteria: Confirm/edit/update/compare/new-session behavior and responsive UI pass in the deployed candidate; deviations fixed or explicitly unresolved, never marked passed.

Verification:
- Browser-backed journey evidence including latest transcript, selected comparisons, refresh and stale-result state.
- Run exact D01 focused-test/browser-test command(s) targeting: `tests/e2e/core-journeys.spec.ts`.
- Run applicable D01 build/type/lint checks and record candidate-specific results in the original evidence file.

Completion:
- [ ] Implementation complete
- [ ] Tests pass
- [ ] Verification pass

## T56 — Verify catalogue, recommendation and claim cases

Status: Pending
Depends on: T54, T32, T37, T46, T47, T21, T22, T23, T24, T25, T26, T27, T28

Skills:
- context-engineering
- source-driven-development
- browser-testing-with-devtools

Relevant Context:
- SPEC A5–A9, R1–R16, §11/§14. IDs resolve in §9, §16.
- PLAN §Vertical slices and dependency map → S10 Hosted verification/release; §Requirement-to-delivery coverage; §Checkpoints and task execution rules.
- TODO reference: [tasks/todo.md](tasks/todo.md), `Z03 — Verify catalogue, recommendation and claim cases`.

Scope (unchanged):
- Exercise source-derived rule fixtures and deployed search/claim paths across the complete catalogue.
- Files: `tests/integration/rule-acceptance.test.ts`; `tests/e2e/search-claims.spec.ts`; `docs/evidence/Z03-rule-acceptance.md`.
- Original completion criteria: Eligibility/default/price/ties/over-budget/separate-policy/waiting/deduction cases match recorded rules; no-match/external-plan behavior honest; no guarantees.

Verification:
- Focused deterministic tests, independent official-source spot checks and bounded deployed live-search/claim checks; include missing/contradictory data.
- Run exact D01 focused-test/browser-test command(s) targeting: `tests/integration/rule-acceptance.test.ts`, `tests/e2e/search-claims.spec.ts`.
- Run applicable D01 build/type/lint checks and record candidate-specific results in the original evidence file.
- Complete original checkpoint review(s): KF1; retain evidence and required human review before advancing the affected path.

Completion:
- [ ] Implementation complete
- [ ] Tests pass
- [ ] Verification pass

## T57 — Verify deployed transport and record isolation

Status: Pending
Depends on: T54, T40, T41, T42, T43, T44, T08a

Skills:
- context-engineering
- security-and-hardening
- browser-testing-with-devtools

Relevant Context:
- SPEC A4/A10/A13, P2/P5/P6, F10/F11. IDs resolve in §7, §13, §16.
- PLAN §Vertical slices and dependency map → S10 Hosted verification/release; §Requirement-to-delivery coverage; §Checkpoints and task execution rules.
- TODO reference: [tasks/todo.md](tasks/todo.md), `Z04 — Verify deployed transport and record isolation`.

Scope (unchanged):
- Validate streaming/barge-in and durable isolated records through actual hosting/restarts and deletion boundaries. This task executes T08b after the real application paths and restricted deployment exist.
- Files: `tests/e2e/hosted-continuity.spec.ts`; `tests/integration/record-isolation.test.ts`; `docs/evidence/Z04-hosted-isolation.md`.
- Original completion criteria: Spoken/typed interruption works on chosen hosts; records survive supported restart/deploy; non-owner/cross-session direct access denied; deleted records cannot restore or reappear after in-flight writes.

Verification:
- Laptop and hosted save/restart/redeploy, concurrent separate browser sessions, direct list/read/delete requests and deletion-race checks.
- Write synthetic persistent data through the real application and verify it from local and hosted application paths; restart/redeploy, reconnect, and read the same record again. Verify hosted WebSocket exchange on the same real deployment. This closes T08b only if all checks pass.
- Run exact D01 focused-test/browser-test command(s) targeting: `tests/e2e/hosted-continuity.spec.ts`, `tests/integration/record-isolation.test.ts`.
- Run applicable D01 build/type/lint checks and record candidate-specific results in the original evidence file.

Completion:
- [ ] Implementation complete
- [ ] Tests pass
- [ ] Verification pass

## T58 — Verify every supported language with humans

Status: Pending
Depends on: T55, T56, T57, T51, T03, T12

Skills:
- context-engineering
- browser-testing-with-devtools

Relevant Context:
- SPEC A3/A4, F3, V1–V5/V7, §17. IDs resolve in §7, §8, §16.
- PLAN §Vertical slices and dependency map → S10 Hosted verification/release; §Requirement-to-delivery coverage; §Checkpoints and task execution rules.
- TODO reference: [tasks/todo.md](tasks/todo.md), `Z05 — Verify every supported language with humans`.

Scope (unchanged):
- Run the complete A3 journey in each verified language and supported code-switch pair on the deployed candidate.
- Files: `tests/e2e/language-journey.spec.ts`; `docs/evidence/languages/<language-code>.md`; `docs/evidence/Z05-language-summary.md` (D06 instantiates verified language codes).
- Original completion criteria: Each evaluator verifies completion, misheard-detail correction, claim interruption, translated UI and correct shortlist; material errors fixed/rechecked; unavailable evaluators/languages remain blockers.
- D06 instantiated the required child TODOs: `Z05-bn-IN`, `Z05-en-IN`, `Z05-gu-IN`, `Z05-hi-IN`, `Z05-kn-IN`, `Z05-ml-IN`, `Z05-mr-IN`, `Z05-pa-IN`, `Z05-ta-IN`, `Z05-te-IN`. Run them only after this task's original dependencies; each retains the parent DoD/verification and its recorded reviewer-availability gate.

Verification:
- Language-by-language result record with reviewer, browser, scenario, sources checked, defects and response times; no assumed “13-language” pass.
- Run exact D01 focused-test/browser-test command(s) targeting: `tests/e2e/language-journey.spec.ts`.
- Verify every D06-instantiated language child passes with competent human review; aggregate only after all required children pass.

Completion:
- [ ] Implementation complete
- [ ] Tests pass
- [ ] Verification pass

## T59 — Audit sources and data handling

Status: Pending
Depends on: T54, T56, T11, T10

Skills:
- context-engineering
- source-driven-development
- security-and-hardening
- code-review-and-quality

Relevant Context:
- SPEC A12, P1–P4/P7, R15, §11/§12. IDs resolve in §9, §13, §16.
- PLAN §Vertical slices and dependency map → S10 Hosted verification/release; §Requirement-to-delivery coverage; §Checkpoints and task execution rules.
- TODO reference: [tasks/todo.md](tasks/todo.md), `Z06 — Audit sources and data handling`.

Scope (unchanged):
- Review final catalogue/answers and deployed secret/audio/provider data handling against the approved boundaries.
- Files: `tests/integration/security-boundaries.test.ts`; `docs/evidence/Z06-source-privacy-audit.md`.
- Original completion criteria: All eight/nine entries traced, premiums/assumptions accurate, absent evidence disclosed; no client/output secrets or application-retained mic audio; notices/query policy match actual requests; no app caps/paid overages.

Verification:
- Source audit, client bundle/log/record inspection, actual sanitized provider payload review and document/search instruction-injection cases.
- Run exact D01 focused-test/browser-test command(s) targeting: `tests/integration/security-boundaries.test.ts`.
- Run applicable D01 build/type/lint checks and record candidate-specific results in the original evidence file.
- Complete original checkpoint review(s): KF2; retain evidence and required human review before advancing the affected path.

Completion:
- [ ] Implementation complete
- [ ] Tests pass
- [ ] Verification pass

## T60 — Report measured reply latency

Status: Pending
Depends on: T57, T58, T13

Skills:
- context-engineering
- performance-optimization

Relevant Context:
- SPEC V6 (SHOULD), A3, §17, Q11. IDs resolve in §8, §16, §18.
- PLAN §Vertical slices and dependency map → S10 Hosted verification/release; §Requirement-to-delivery coverage; §Checkpoints and task execution rules.
- TODO reference: [tasks/todo.md](tasks/todo.md), `Z07 — Report measured reply latency`.

Scope (unchanged):
- Measure ordinary spoken-response start and separately report search-delay behavior using D13 conditions.
- Files: `docs/evidence/Z07-latency.md`; `tests/fixtures/latency-samples.json` (dummy timing data only).
- Original completion criteria: Actual distributions/conditions and exceptions recorded; target met or explicit SHOULD deviation stated; no unsupported two-second guarantee.

Verification:
- Inspect timestamp calculations against sample audible responses; include supported-language measurements and separate searches.

Completion:
- [ ] Implementation complete
- [ ] Tests pass
- [ ] Verification pass

## T61 — Verify complete failure and exhaustion matrix

Status: Pending
Depends on: T54, T52, T57

Skills:
- context-engineering
- security-and-hardening
- browser-testing-with-devtools

Relevant Context:
- SPEC A11, §15, F11, V7, P3/P5. IDs resolve in §7, §8, §13, §16.
- PLAN §Vertical slices and dependency map → S10 Hosted verification/release; §Requirement-to-delivery coverage; §Checkpoints and task execution rules.
- TODO reference: [tasks/todo.md](tasks/todo.md), `Z08 — Verify complete failure and exhaustion matrix`.

Scope (unchanged):
- Exercise every §15 failure on the integrated candidate using controlled fixtures or safe provider responses, without deliberately purchasing/exhausting credits.
- Files: `tests/integration/service-failures.test.ts`; `tests/e2e/fallbacks.spec.ts`; `docs/evidence/Z08-failures.md`.
- Original completion criteria: Mic/STT/TTS/reasoning/search/slow-request/save/restore/delete/unsupported-language failures preserve available state and display accurate fallbacks; late responses do not corrupt state.

Verification:
- Run each matrix row including simulated quota exhaustion, concurrent faults and post-error recovery; no fake success or paid calls needed for exhaustion tests.
- Run exact D01 focused-test/browser-test command(s) targeting: `tests/integration/service-failures.test.ts`, `tests/e2e/fallbacks.spec.ts`.
- Run applicable D01 build/type/lint checks and record candidate-specific results in the original evidence file.

Completion:
- [ ] Implementation complete
- [ ] Tests pass
- [ ] Verification pass

## T62 — Record final MVP acceptance

Status: Pending
Depends on: T55, T56, T57, T58, T59, T60, T61, T01, T02, T05, T06, T07, T03, T08, T09, T11, T10, T04, T12, T13

Skills:
- context-engineering
- code-review-and-quality
- shipping-and-launch
- documentation-and-adrs

Relevant Context:
- SPEC A1–A13, §16/§17, all MUSTs and recorded SHOULDs. IDs resolve in §16.
- PLAN §Vertical slices and dependency map → S10 Hosted verification/release; §Requirement-to-delivery coverage; §Checkpoints and task execution rules.
- TODO reference: [tasks/todo.md](tasks/todo.md), `Z09 — Record final MVP acceptance`.

Scope (unchanged):
- Compile the completed acceptance inventory and identify any unresolved release blockers without designing demonstration logistics.
- Files: `docs/evidence/Z09-acceptance.md`.
- Original completion criteria: Every MUST maps to passing evidence; any exception means incomplete, not implicit approval. SHOULD deviations explicit; working path supports the stated 2–3 minute interaction without prescribing owner script.

Verification:
- Review A1–A13 evidence and catalogue count, open-question closures and scope boundaries; request owner review of the completed candidate.
- Complete original checkpoint review(s): KF3; retain evidence and required human review before advancing the affected path.

Completion:
- [ ] Implementation complete
- [ ] Tests pass
- [ ] Verification pass

