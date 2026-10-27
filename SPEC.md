# AI Health Insurance Advisor — Hackathon MVP

Status: Draft for review · 2026-10-25

Basis: `docs/interview-progress.md` plus the subsequent completed interview and explicit intent confirmation. Later conversation decisions supersede the older checkpoint. This document specifies product behavior; it does not authorize implementation or define tasks.

Priority: **MUST** = required MVP behavior; **SHOULD** = desirable, may be deferred explicitly; **LATER** = outside this MVP, requiring separate scope approval. Open questions are not permission to invent rules. IDs identify requirements and acceptance checks.

## 1. Product goal

Help Indian users understand health insurance and make an informed choice through multilingual conversation, an explainable shortlist of real plans, comparison, and hypothetical hospitalization-claim education. Success is understanding suitable options and trade-offs, not purchasing a policy or predicting claim approval.

## 2. Target users

- Primary: first-time buyers aged approximately 28–40, buying for themselves, a spouse, and possibly children; more comfortable speaking Hindi-English than reading policy documents.
- Additional: other ages, relationships, and health situations supported by documented catalogue rules. No claim of universal coverage.
- Owner: builder reviewing dummy-data test sessions privately.

## 3. Core problem

Users struggle to interpret policy language, choose affordable coverage, compare restrictions, and understand why a hospitalization claim might be limited or excluded. Generic answers and cheapest-only lists do not explain individual fit or uncertainty.

## 4. MVP scope

| Priority | Capability |
|---|---|
| MUST | Responsive web app with conversation and stepped-form entry feeding the same profile and recommendation journey. |
| MUST | Multilingual voice/text, interruption handling, language switching, translated interface, and persistent session continuity. |
| MUST | Curated catalogue of 8–9 real plans with verified official documents; deterministic eligibility/ranking and AI explanations. |
| MUST | Coverage/budget guidance, editable confirmation, up to three ranked matches, selectable comparison, sourced policy details. |
| MUST | Hypothetical claim education and live external search for clearly separated, unverified options. |
| MUST | Hosted deployment, persistent laptop/hosted records, owner-only review, manual deletion, service fallbacks. |
| SHOULD | Calm light styling, teal/navy accents, readable typography, restrained animation and subtle voice activity indication. |

## 5. Out-of-scope items

- **LATER / separate scope:** purchasing/payment/issuance, actual claim submission or tracking, renewals, portability, prior-policy waiting-period credits, complex optimization of multiple-policy combinations.
- No guarantees of insurer acceptance, final premium, cashless availability, or claim payment.
- No collection of Aadhaar, PAN, contact details, full addresses, or medical documents for this dummy-data MVP.
- No customer accounts/history dashboard, exports, analytics, or extra owner-dashboard features are required beyond session review/deletion.
- No automatic promotion of external search hits into verified ranked recommendations.
- Do not add app-enforced session-duration or request-count caps; the user explicitly rejected them. Provider limits and failures still apply.
- Demonstration logistics, script, exact fictional family, and presentation arrangements remain with the owner.

## 6. Complete user journey

1. Open welcome page; see fictional-data notice, select language, choose **Talk to the advisor** or **Fill in my details**.
2. Enter workspace in one click. Users may ask insurance questions before supplying a profile.
3. Collect missing information conversationally or through form steps: family → health → budget/coverage → preferences. Back navigation preserves entries.
4. If unsure about budget, show sourced indicative ranges where available. If unsure about coverage, explain 2–3 catalogue-supported choices, suggest one using documented guidance, and accept the user's selection.
5. Clarify uncertain/conflicting details; present an editable summary of family ages, conditions, budget, coverage, and preferences. Obtain confirmation before generating recommendations.
6. Apply eligibility and ranking rules. Explain catalogue gaps, uncertainty, restrictions, and any need for separate policies.
7. Show up to three concise plan summaries and comparison. Initially compare all shortlisted plans; users can remove/reselect plans and expand documented details.
8. Answer plan questions and hypothetical claim questions. Search externally when no catalogue plan fits or the user explicitly asks about an outside plan, subject to insurer-preference permission rules.
9. Save profile edits; refresh results only when the user presses **Update recommendations**. Preserve conversation and profile across voice/text switching, language changes, and refresh in the same browser.
10. **Start new session** clears the active journey. Saved records remain owner-only until the owner uses **Delete all sessions** after the demo.

## 7. Functional requirements

| ID | Priority | Requirement |
|---|---|---|
| F1 | MUST | Maintain one shared profile across form and conversation; ask only for missing details or explicit corrections. Never interpret missing health information as “No conditions.” |
| F2 | MUST | Show full conversation messages with the latest visible, text input, and an editable profile. Laptop layout: conversation left, profile/coverage right; right panel becomes comparison when ready. Phone layout stacks sections. |
| F3 | MUST | Translate buttons, forms, messages, and comparisons into the selected language; retain official insurer/plan names. Changing language must not clear state. |
| F4 | MUST | Use short form steps with preserved back navigation. Validate malformed ages/amounts and clarify conflicting answers; exact supported ranges follow catalogue rules and Q3. |
| F5 | MUST | Show editable confirmation before initial recommendations. After edits, retain old results as visibly outdated until explicit **Update recommendations**; never present them as reflecting the new profile. |
| F6 | MUST | Each result shows covered people/policy structure, sum insured, sourced indicative annual premium or an unknown-price label, ranking reason, key restrictions/trade-offs, and expandable details/sources. |
| F7 | MUST | Allow selecting/deselecting shortlisted plans for side-by-side comparison, initially selecting all. Official insurer links are optional next actions, not a purchase flow. |
| F8 | MUST | Explain room-rent limits, cashless versus reimbursement, waiting periods, co-pay, deductibles, pre-existing conditions, network hospitals, sum insured, and restoration using simple examples and documented plan facts where applicable. |
| F9 | MUST | Provide a hypothetical claim interaction: select a plan and collect illness, time since policy start, estimated bill, and only other details required by its documented terms. |
| F10 | MUST | Persist transcripts, profiles, and recommendations for laptop and hosted sessions. Owner page lists sessions and opens these records; no user may view another user's records. |
| F11 | MUST | Restore the current journey on refresh in the same browser. **Start new session** clears active state; **Delete all sessions** removes saved sessions and prevents deleted state from being restored. Exact deletion boundaries are Q8. |

## 8. Voice-agent behavior

| ID | Priority | Requirement |
|---|---|---|
| V1 | MUST | Use Gnani speech services and support every applicable language of the selected speech endpoints, including Tamil; Hindi-English is the primary demonstration language. Verify the actual STT/TTS language intersection and code-switch support (Q5); do not assume a count. |
| V2 | MUST | Stop advisor speech when the user speaks over it; address the interruption and return naturally to the pending flow. Sending a typed message during speech also stops playback and redirects the conversation. |
| V3 | MUST | Switch voice/text without losing collected answers. Automatically continue in a newly used language; offer a visible selector to correct detection. Ordinary English insurance terms alone must not trigger a language switch. |
| V4 | MUST | Clarify uncertain recognition immediately. Use final editable confirmation rather than asking users to confirm every utterance. |
| V5 | MUST | Speak concise main points; make fuller explanations available in text/cards. Use simple examples and check comprehension when confusion is expressed. |
| V6 | SHOULD | Begin ordinary spoken replies approximately two seconds after the end of user speech. Record measured response times; searches may take longer. Percentile, cutoff, and test conditions remain Q11. |
| V7 | MUST | Distinguish listening, processing/searching, speaking, and error states visibly; provide actionable microphone/service failure messages. Exact browser support remains Q12. |

## 9. Insurance recommendation rules

All rules below are **MUST**. Exact scoring/coverage algorithms are unresolved; do not replace them with model intuition.

| ID | Rule |
|---|---|
| R1 | Fixed rules determine documented eligibility and ranking; AI gathers information and explains documented results. AI must not invent policy terms, underwriting outcomes, scores, or premiums. |
| R2 | Enforce known age, relationship, family-structure, and other documented eligibility rules regardless of preference. Plans with unverified age/family eligibility stay outside the ranked shortlist, separately marked as needing verification. |
| R3 | Distinguish documented eligibility from insurer medical assessment. “Not sure” health history may continue provisionally; disclose affected suitability/eligibility uncertainty. Do not describe provisional results as confirmed acceptance. |
| R4 | Ask for one main ranking priority, e.g. lowest price, fewer restrictions, or fit for disclosed conditions. Secondary preferences still apply; explain conflicts. For unsure users, prioritize family/health fit, affordability, and fewer significant restrictions (Q2 defines the exact method). |
| R5 | For lowest-price priority, sort comparable known indicative premiums ascending, even if a higher-priced option provides more protection; explain trade-offs. Unknown premiums follow known premiums and have no claimed price position. Comparability assumptions must be visible. |
| R6 | For otherwise equally suitable plans, prefer the lower comparable known premium. Equal or non-comparable/unknown prices do not establish a tie-break; label plans equally suitable. Do not invent precision. |
| R7 | Start with the preferred insurer. If it cannot meet requirements, explain gaps and ask before offering other insurers, including external alternatives. Respect an informed preference among its eligible plans. |
| R8 | Target 2–3 options; never pad results with ineligible or unverified plans. If fewer verified matches exist, show those and explain the gap. If none exist, show a no-match explanation and clearly separated external options when permitted. |
| R9 | If every eligible priced option exceeds budget, show closest priced options clearly labeled over budget, including the amount above budget. Ask whether to adjust budget or coverage; never change either silently. Unknown premiums cannot be claimed affordable. |
| R10 | An otherwise suitable plan with unknown premium may appear with “Premium needs insurer confirmation.” Do not invent an amount or claim it is within budget/cheapest. Show estimate sources and assumptions; final price/eligibility require insurer confirmation. |
| R11 | Coverage guidance offers 2–3 supported amounts, explains the suggestion, and continues with the user's choice. Consider family circumstances and affordability; no unverified city-tier-only formula (Q3). |
| R12 | Explain individual/floater/separate-policy structures and exactly who each option covers. Separate policies are allowed where documented rules require them; do not optimize complex combinations or imply one plan covers everyone. |
| R13 | Ask about upcoming treatment when relevant; explain applicable initial, pre-existing, disease-specific, and other documented waits/exceptions. Waiting-period completion alone never establishes claim eligibility. Do not carry over previous-policy credit. |
| R14 | Claim education must consider applicable exclusions, limits, co-pay, deductibles, room rules, and other documented conditions. Calculate an illustrative payable amount only when known inputs and terms support it; show assumptions and uncertainty, never a guaranteed payout. Otherwise explain missing information and applicable deductions. |
| R15 | Important policy explanations link to official evidence and page/section where available. If evidence is absent or contradictory, say the answer cannot be verified and identify what needs insurer confirmation. |
| R16 | External search is live, triggered by no catalogue fit or an explicit outside-plan question. Present results as unverified options to investigate with official links, distinct from ranked catalogue results; search hits alone establish no eligibility, price, or restrictions. |

## 10. Required user data

**MUST:** collect only the information needed for the current journey; permit explicit unknowns and clarify before decisions that require a value.

| Data | Required behavior |
|---|---|
| Session label | Do not request a nickname or first name solely to label the session; use a neutral generated label (D05). |
| Proposer | An adult older than 18 who proposes and pays premium/GST; may be outside the insured set. The owner permits any adult to propose for another person; a minor's proposer must be a family adult older than 18. This is the owner's profile rule; exact insurer proposal/payer requirements still need source verification. |
| People to cover | Relationship to the selected proposer when two or more people are proposed under one policy, and age per person; count derives from entries. For parent-child pairs, the parent must be more than 18 years older under the owner rule. Spouse, own parents, and children may share a plan; uncle, aunt, and other extended relatives cannot share it. A father-in-law must be covered through a separate policy, not the primary shared plan. Floater and split-policy membership must match exact current product wording. |
| Proposer/member roles | The owner uses “dependent” to mean a covered person who is not the proposer; keep this distinct from a product's dependent-child definition. |
| Child age-out | If a product's documented dependent-child age limit is exceeded at renewal, do not show that person as remaining on that floater; show a verified separate-policy/migration route and applicable continuity caveats. Do not imply the person simply loses all renewal rights. |
| Location | City or PIN; request additional precision only when a documented rule/pricing source needs it. |
| Health per person | Condition names, “No conditions,” or “Not sure” as distinct values. Ask medical follow-ups only for a documented plan rule. |
| Annual budget | Amount or initially unknown; guide with sourced ranges where available, never fabricated prices. |
| Sum insured | Amount or initially unsure; offer supported choices before final shortlist. |
| Preferences | Main priority, preferred insurer if any, and secondary preferences disclosed by the user. |
| Upcoming treatment | Conditional question; collect only details needed to explain relevant policy restrictions. |
| Language | Selected/detected language with manual override. |
| Claim scenario | Selected plan, hypothetical illness/event, time since policy start, estimated bill; additional inputs only as required. |

## 11. Insurance-plan data

**MUST:** use 8–9 real plans researched from official documents; research is authorized, but no products are selected yet. Represent unknown/not applicable explicitly. Material missing or conflicting fields must affect eligibility/explanations rather than be guessed.

| Group | Required data |
|---|---|
| Identity/evidence | Insurer, plan, variant, UIN/version where available, official wording/prospectus links, relevant page/section, verification date. |
| Eligibility | Entry ages, relationships, family composition/policy structures, location applicability, documented health restrictions and medical-assessment caveats. |
| Coverage | Sum-insured choices; room-rent rules; co-pay; deductible; exclusions; disease-specific limits; restoration conditions. |
| Waiting periods | Initial, pre-existing and specified-condition waits; documented accident exceptions/reductions where applicable; conditions attached to each. |
| Premium evidence | Annual amount/range or unknown; source/date; applicable ages, location, family, coverage, variant; known tax/discount/add-on/loading treatment. |
| Claim education | Relevant cashless/reimbursement process and conditions; official network-hospital lookup/source when available. Never assume a hypothetical hospital is currently cashless. |

Catalogue selection, conflict handling, update policy, source sufficiency, and premium comparability remain Q1. No claim-settlement ratio/ranking metric is required without a separate verified definition and decision.

## 12. Integrations

| Area | Confirmed requirement | Unresolved |
|---|---|---|
| Frontend | React, TypeScript, Vite, Tailwind CSS. | Versions/component library. |
| Backend | Node.js, TypeScript, Express. | Hosting arrangement/streaming compatibility. |
| Speech | Gnani; preferred Prisma V2.5 STT and Timbre V2.5 TTS. Authenticated account-specific REST STT/TTS passed for ten matching languages, including Tamil; realtime STT/TTS WebSocket routes also passed. The user reports 5,000 free API credits expiring 31 Dec 2026 and paid overage disabled. | Human voice/ASR quality acceptance; simultaneous audible/browser barge-in; provider-side cancellation and charge behavior; broad code-switch accuracy. Recheck the owner-reported balance/overage setting before later chargeable probes. See D06. |
| Reasoning | OpenAI API using reported $5 credit. | Model, availability, measured cost/latency. |
| Search | Tavily free-plan preference; live search required. | Key/access, current allowance/terms, official-domain policy, result quality. |
| Hosting | Vercel remains a candidate for deployment; verify compatibility using the real voice application. | Vercel account/plan eligibility and hosted WebSocket behavior on the deployed app. |
| Persistence | Neon is owner-selected for database feasibility; a real SQL write/read passed against the existing project. | Actual account plan/resource state, app storage adapter and restart/redeploy persistence; authorization and deletion are Q7/Q8. |

**MUST:** no additional out-of-pocket spend; validate allowances and avoid paid overages. No app-enforced session/request caps. Do not assume provider credits or deployment suitability are verified. Exhausted services follow §15. Deployment and storage choices must satisfy these constraints rather than silently reducing scope.

Repository is currently documentation-only. The planned source layout and file formats are defined below; create files incrementally when their implementation task starts. Commands, dependency versions, test framework and detailed provider/storage choices remain downstream technical decisions.

### 12.1. Project structure and file formats

Use this layout for the fixed React/TypeScript frontend and Node/TypeScript/Express backend. Paths identify ownership, not separate deployment services; hosting/streaming suitability remains Q6. Names in angle brackets are placeholders, not literal files or selected products/languages. Only the three specification/planning documents are being revised now.

```text
SPEC.md
package.json                         # Root orchestration scripts; D01 defines commands
.gitignore                           # Secrets, dependencies, build and test output
frontend/
  package.json
  index.html
  vite.config.ts
  tsconfig.json
  .env.example                       # Public configuration names only
  src/
    main.tsx
    App.tsx
    styles.css
    components/                      # Small UI primitives shared by features
    features/
      onboarding/                    # Welcome and stepped intake
      profile/                       # Editable summary and confirmation
      advisor/                       # Transcript, text input, pending-flow continuity
      recommendations/               # Result cards and update/stale-result state
      comparison/                    # Selected plans and side-by-side details
      voice/                         # Mic, playback, cancellation and language state
      claims/                        # Hypothetical scenario interaction
      owner/                         # Private session list/detail/delete controls
    state/
      session.ts                     # One active profile/conversation/result state
    lib/
      api.ts                         # Browser-to-backend requests, no provider secrets
    i18n/
      index.ts
      locales/<language-code>/
        onboarding.json
        results.json
        voice-claims.json
        owner-errors.json
backend/
  package.json
  tsconfig.json
  .env.example                       # Variable names/placeholders, never actual keys
  src/
    app.ts                           # Express setup, independently testable
    server.ts                        # Runtime entry; host adapter remains Q6
    config/                          # Server environment validation
    middleware/                      # Access checks, input/error handling
    routes/                          # Profile/recommendation/advisor/search/voice/
                                     # session/owner/claim boundaries as slices need them
    services/                        # Gnani, OpenAI, Tavily and conversation orchestration
    rules/
      eligibility.ts
      ranking.ts
      coverage.ts
      claims.ts
    catalogue/
      load.ts
      validate.ts                    # Runtime validation and evidence checks
    storage/                         # Session persistence/deletion boundary;
                                     # adapter follows D07a + Q7/Q8; hosted check is D07b
shared/
  profile.ts
  plan.ts
  session.ts
  contracts.ts                       # Browser-safe request/response contracts
data/
  catalogue/<plan-id>.json            # One verified plan/variant per stable ID
  sources.json                       # Official evidence register and verification dates
tests/
  integration/                       # API/provider/storage contract tests
  e2e/                               # Browser journeys, voice and permission checks
  fixtures/                          # Fictional profiles, expected rules, provider faults
docs/
  interview-progress.md              # Historical checkpoint; SPEC is current authority
  decisions/<decision-id>.md          # D01–D13 outcomes and unresolved blockers
  evidence/                          # Source audits, service probes, language/acceptance reports
tasks/
  plan.md
  todo.md
```

| File category | Format / convention |
|---|---|
| Browser UI | `.tsx` for React components; `.ts` for state, helpers and contracts; `.css` for stylesheet/Tailwind entry. Feature components use PascalCase names; feature directories use lowercase names. |
| Backend/shared logic | `.ts`; descriptive lowercase or kebab-case filenames. Business rules stay in `backend/src/rules/`; shared types must not import server code, credentials or provider SDKs. |
| Plan data/evidence | UTF-8 `.json`, one stable `<plan-id>.json` per selected plan/variant; `sources.json` holds source metadata. D02 defines the validated schema, unknown-value representation and source-conflict rules; do not invent policy values from this tree. |
| Translations | UTF-8 `.json` by verified language code and screen group above. Language inventory remains Q5/Q12; official plan/insurer names are not translated. |
| Tests | Focused unit/component tests colocated as `<name>.test.ts` or `.test.tsx`; integration tests under `tests/integration/`; browser tests under `tests/e2e/` as `<journey>.spec.ts`. D01 selects tools and commands. |
| Fixtures | UTF-8 `.json` for static fictional input/expected data, `.ts` when executable provider/fault fixtures are needed. Never use fixtures as successful live-search, quote or claim results. |
| Decisions/reports | UTF-8 Markdown `.md`; decision files keyed by stable D01–D13 IDs; acceptance evidence links back to requirement/task IDs. |
| Configuration | `package.json`/`tsconfig.json`, Vite `.ts` config and chosen tool config only when needed. D01 defines dependency management/lockfile and shared-source compilation; the tree does not choose a test runner or package-workspace strategy. |
| Environment/build output | Commit `.env.example` with names/placeholders only; ignore real `.env` files. Ignore `node_modules/`, frontend/backend build outputs, coverage, browser reports and transient audio. No session transcripts or live records belong in committed `data/` or fixtures. |

**MUST:** frontend code accesses providers and stored records through authorized backend boundaries; owner-screen code is not an authorization boundary. Implement browser/shared/server separation consistently with P2–P4. The generic tooling/browser/server baseline may proceed under D01. Business schemas and protected storage behavior remain gated by their relevant decisions. The concrete Postgres session adapter may be implemented only after D07a database feasibility passes and Q7/Q8 are resolved; hosted compatibility D07b is a post-implementation check, not a prerequisite to building that adapter. Deployment configuration may be created only after Q7/Q8 are resolved and a pre-deployment check confirms the selected host/database plans and account resources meet the no-out-of-pocket-spend constraint. That preflight does not establish hosted compatibility: D07b must still verify WebSocket transport and persistence across restart/redeploy on the real application before Q6/D07 or T08 can be marked complete. This layout adds no features and requires no empty placeholder files.

## 13. Privacy/security requirements

| ID | Priority | Requirement |
|---|---|---|
| P1 | MUST | Display dummy-data-only notice; do not solicit real identity/medical documents. Treat saved records as private despite fictional inputs. |
| P2 | MUST | Only the owner may list/read/delete saved sessions. Deny unauthenticated or other-user access, including direct record requests. User journeys must not expose another session. Owner authorization method is Q7. |
| P3 | MUST | Keep API credentials server-side and out of frontend bundles, transcripts, logs, and repository files. Validate inputs and treat documents/search content as data, not instructions that can override app rules. |
| P4 | MUST | Retain transcripts, profiles, and recommendations; microphone audio is temporary, not a retained application record. Disclose third-party speech/reasoning/search processing; provider retention still needs verification. |
| P5 | MUST | Provide owner **Delete all sessions** after the demo. Report deletion success/failure accurately; do not restore deleted journeys. Storage, browser copies, backups, and provider retention boundaries must be resolved in Q8. |
| P6 | MUST | Preserve previously agreed owner/invited-tester live access intent. Access mechanism remains undecided; do not assume that deployment on Vercel supplies it or that rejecting usage caps authorizes public record access. |
| P7 | SHOULD | Minimize data sent to each provider, especially search; avoid names/full profiles in search queries. Exact query and notice policies remain Q9. |

## 14. Important edge cases

| Case | Required behavior |
|---|---|
| Unknown budget/coverage | Explain sourced ranges/supported coverage options; retain unknowns if evidence is unavailable (§6, R10–R11). |
| Unknown medical history | Keep distinct from no conditions; disclose provisional assessment (F1, R3). |
| Multiple conditions, senior members, unusual family | Apply documented per-person rules; ask only necessary follow-ups; identify uncovered people/separate policies or no match (R2–R3, R12). |
| Preferred insurer unsuitable/ineligible | Explain gaps; ask before alternatives; never override hard eligibility (R2, R7). |
| Too few matches, over-budget or unknown premium | Explain result count/affordability honestly; never fabricate options or prices (R8–R10). |
| Treatment soon / conflicting waiting clauses | Explain documented interactions/exceptions; unresolved conflicts require insurer confirmation (R13–R15). |
| Conflicting answers, recognition errors, mid-flow questions | Clarify, permit edits, answer interruption, resume; no silent profile changes (F4–F5, V2–V4). |
| Policy source missing, outdated or contradictory | Do not assert unsupported facts; flag uncertainty and apply catalogue verification rules (R2, R15, Q1). |
| Refresh, new session, deletion | Restore only active non-deleted journey; new session starts blank; prior records remain owner-only until deletion (F11, P5). |

## 15. Error/fallback behavior

All rows are **MUST**; preserve the profile and completed results, explain the affected capability, and never manufacture a successful answer.

| Failure | Behavior |
|---|---|
| Mic denied/unavailable or STT failure | Explain and allow text entry; retain recognized/confirmed details. |
| TTS failure | Show the written answer and permit continued text conversation. |
| Reasoning unavailable/credits exhausted | Show collected profile and completed results; clearly state new AI answers are unavailable. |
| Search unavailable/quota exhausted | Keep catalogue results; report external search unavailable. Do not pass static links or invented hits off as successful live search. |
| Slow request | Show processing/search state; do not discard state or claim the two-second target was met. Timeout/retry policy is Q10. |
| Save/restore failure | Show that saving/restoration failed; do not claim persistence succeeded. Keep available current state. |
| Deletion failure | Report failure accurately; do not claim records were erased. |
| Unsupported speech language | Explain the limitation and offer available text/manual-language options; do not mark that language passed. Supported inventory is Q5. |

## 16. Acceptance criteria

Each **MUST** requirement must pass its applicable checks. Unresolved rules cannot be declared implemented by choosing undocumented defaults. **SHOULD** deviations must be stated, not reported as passes.

| ID | Check and expected result |
|---|---|
| A1 | Complete both empty-profile entry paths; switch form/voice/text, go back in the form, refresh, and correct details. Confirmed data survives; missing details alone are requested; new session starts blank (F1–F5, F11). |
| A2 | Edit profile after results. Old results are visibly outdated; only **Update recommendations** refreshes them. Selected plan comparisons and documented details render correctly (F5–F7). |
| A3 | For each supported language, a competent human completes a journey, corrects a misheard detail, interrupts with a claim question, and checks the shortlist and translated UI. Record outcomes and response times; fix material errors before marking passed. Include Hindi-English and Tamil (F3, V1–V6). |
| A4 | Speak and send text during advisor speech; playback stops, the new question is addressed, and the pending flow resumes without losing answers. Test manual and automatic language changes (V2–V4). |
| A5 | Against documented fixtures, test eligibility boundaries, unknown eligibility, disclosed/unknown/multiple conditions, senior/family structures, insurer preference, and insufficient matches. No known-ineligible/unverified age-family option enters ranked results (R1–R3, R7–R8, R12). |
| A6 | Verify main-priority behavior, cheapest-first ordering, tied fit, unknown prices, and all-over-budget cases against the agreed rule set. Missing prices never become zero/affordable; priority trade-offs are explained (R4–R10; Q1–Q2). |
| A7 | Test unsure coverage/budget and upcoming treatment using sourced guidance. Choices are catalogue-supported; waiting-period answers follow actual documents without implying a payable claim (R11, R13; Q3). |
| A8 | Test claim scenarios before/at/after each applicable waiting boundary, exceptions, exclusions, co-pay, deductible, room and disease limits, and missing/conflicting terms. Calculate only when inputs/terms suffice; cite sources; make no payout guarantees (R13–R15). Exact cases derive from selected plans. |
| A9 | Trigger no-match and explicit outside-plan search; results are live when available, link to official evidence, remain separate from verified rankings, and respect insurer permission. Simulate unavailable search (R7, R16, §15). |
| A10 | Verify saved laptop/hosted sessions persist across application restarts/deployments supported by the chosen arrangement. Owner can review; unauthenticated/other-session requests cannot access records. Delete all and confirm no deleted session can be reopened/restored within the defined deletion scope (F10–F11, P2, P5; Q6–Q8). |
| A11 | Exercise each §15 failure; retain available state, show accurate status and the appropriate fallback; never invent answers or successful saves/deletions. |
| A12 | Review 8–9 catalogue entries and surfaced policy claims against official sources. Check secrets are absent from client/output, mic audio is not retained by the app, and no app session/request caps or paid overages are configured (R15, §11–§13). |
| A13 | Run core journey on laptop and phone layouts; verify readable transcript, editable profile, stacked phone sections, comparison, language selector, and visible service states (F2–F3, V7). |

## 17. Demo success criteria

- **MUST:** A 2–3 minute demonstration can use a clearly labeled prefilled dummy profile, live voice confirmation/change, one hypothetical claim interruption, and final explained comparison. Empty-profile entry remains separately functional.
- **MUST:** Recommendations and claim explanations use verified plan facts without invented premiums, eligibility, or guarantees; uncertainty and catalogue limits are visible.
- **MUST:** Hosted and laptop journeys support the required features and private record persistence, subject to resolved deployment decisions.
- **MUST:** All supported-language journey checks pass before claiming full language support; the short presentation does not replace those checks.
- **SHOULD:** Measured ordinary reply start approaches two seconds; report actual measurements and exceptions, not an unverified guarantee.
- No exact scenario, rehearsal plan, or presentation arrangements are prescribed. Originally reported build window: three days; current deadline is not re-established here.

## 18. Open questions

Resolve these through research/technical decisions or explicit clarification; do not silently drop requirements. No additional feature interview or demonstration planning is implied.

| ID | Unresolved decision / required evidence |
|---|---|
| Q1 | D02 decision/research resolved: [catalogue/evidence/comparability policy](docs/decisions/D02.md), [eight selected identities and official documents](docs/evidence/D02-source-register.md), and [verification cases](docs/evidence/D02-policy-checks.md). Exactly eight distinct product/UIN slots from five insurers are selected; current-profile premiums remain unknown until matched evidence exists. Source sufficiency, freshness/conflicts/missing values, evidence schema, premium assumptions and point/range/structure comparison rules are explicit. Full per-entry extraction/verification remains M05–M12, with the eight-plan applicability record in M13; selection does not establish verified eligibility or market-wide coverage. |
| Q2 | Resolved by [D03](docs/decisions/D03.md): explicit main priority dominates; secondary preferences refine equal-fit tiers; no weighted scoring. Unsure-user order is family/health fit, affordability, then fewer relevant restrictions. Condition fit prioritizes the disclosed scenario; broader coverage is secondary and cannot override it. Known comparable prices follow R5/R6; unknown/non-comparable prices never establish affordability or a tie-break. Synthetic examples and the RD1 audit are in [D03 evidence](docs/evidence/D03-ranking-examples.md). |
| Q3 | Resolved by [D04](docs/decisions/D04.md): offer only source-backed amounts for the eligible plan/structure; validate ages/amounts using product rules; if budget and a profile-matched quote exist, suggest the highest supported base SI within budget. The user selected INR 20 lakh as the default starting suggestion when budget or matching quote is missing, only if that exact eligible policy/structure offers it; label price/affordability unknown and do not claim universal adequacy. If unavailable, show actual options without substituting a nearest value. R9/R10 remain in force. Sources, stale-UIN exclusions and examples are in [D04 evidence](docs/evidence/D04-coverage-evidence.md). |
| Q4 | Resolved by [D05](docs/decisions/D05.md): missing health remains missing and must be answered before profile confirmation; explicit “Not sure” may continue provisionally under R3 with affected uncertainty disclosed; known condition names are preserved; only documented-plan rules may trigger follow-ups. See [scenario evidence](docs/evidence/D05-profile-cases.md). This does not imply insurer acceptance. |
| Q5 | The account-specific REST STT/TTS intersection is `bn-IN`, `en-IN`, `gu-IN`, `hi-IN`, `kn-IN`, `ml-IN`, `mr-IN`, `pa-IN`, `ta-IN`, and `te-IN`; each passed a short synthetic TTS-to-matching-STT loopback using the listed Timbre v2.5 voice. One synthetic Hindi-English (`hi-en`) TTS phrase was recognized by explicit Hindi and English STT routes. Authenticated realtime STT/TTS WebSockets passed. The user reports 5,000 free API credits through 31 Dec 2026 with paid overage disabled. Reviewer status: available—English, Hindi, Punjabi; unavailable—Tamil, Telugu; unsure—Bengali, Gujarati, Kannada, Malayalam, Marathi. Remaining: competent-human quality/journey acceptance; simultaneous audible/browser and typed barge-in; provider-side cancellation/charge effects; broader code-switch quality. See D06 and `docs/evidence/D06-live-probes.md`. |
| Q6 | The owner-selected Neon project is confirmed Free in the signed-in console. D07a SQL connectivity passed; an owner-authorized disposable local Express probe inserted a dummy row, read the same committed row after restarting the local process, then deleted the row and dropped its unique table. A no-account `tmp.now` Vercel deployment command succeeded, but HTTP `/health` returned 403 at Vercel's edge and the WebSocket handshake failed before echo or reconnect. Current provider docs support Vercel Express/`ws` with Fluid Compute on all plans and Neon standard Postgres with durable storage separate from compute. Vercel Hobby is personal/non-commercial only, has a 300-second Node Function maximum plus CPU/memory/invocation/transfer quotas; the actual Vercel account, its remaining limits, and product eligibility cannot be verified without sign-in. Neon Free is $0/no card, with 100 CU-hours and 1 GB database storage per project; its compute suspends after five idle minutes. No real application is deployed, and Vercel-hosted DB access or read-after-Vercel-redeploy has not been proven. Keep D07/Q6/T08 Pending. Before Z01, verify Vercel eligibility and actual host/database usage under the no-out-of-pocket-spend constraint; T57/Z04 must test the real app's hosted stream, local/hosted access, WebSocket reconnect/state reload, and same-record read after real restart/redeploy before closing this question. See [D07](docs/decisions/D07.md) and [evidence](docs/evidence/D07-hosting-feasibility.md). |
| Q7 | Owner authorization and invited-tester access mechanisms. Shared access code was suggested but not confirmed; no session/request caps are authorized. |
| Q8 | Deletion coverage for server records, browser restoration data, logs/backups and in-flight writes; third-party retention limits and accurate user-facing deletion wording. No scheduled automatic deletion is required. |
| Q9 | Provider processing/retention notice, minimal search-query policy, allowed official domains, Tavily credentials/current terms, and handling missing official links. |
| Q10 | Resolved by [D11](docs/decisions/D11.md): use enabled `gpt-6-luna` via Responses API; the user reports a $5 project-specific limit and 1 Jan 2028 expiry. Current balance, billing mode and auto-recharge remain unknown. Provider enforcement may lag and spend may slightly exceed a limit; no cost/availability guarantee or app usage cap is introduced. Preserve state on errors/timeouts and do not automatically replay an ambiguous paid request. |
| Q11 | Two-second target percentile, acceptable distribution, and measurement conditions; target is end-of-user-speech to start-of-advisor-speech, excluding separately reported search delays. |
| Q12 | Supported browser/device matrix, microphone/streaming compatibility, accessibility criteria, and exact translation review inventory. |
| Q13 | Resolved by [D05](docs/decisions/D05.md): no nickname/first-name prompt for session labeling; use a neutral generated label. Confirm the editable profile before initial recommendations. The proposer is older than 18, pays premium/GST, may be outside the insured set, and for a minor must be a family adult older than 18. For 2+ people under one policy, capture each relationship and age, enforce the owner-defined parent-child age gap, allow spouse/own parents/children in a shared plan, and exclude uncle/aunt/extended relatives. Father-in-law requires a separate policy. Exact member counts/ages/proposer acceptance come from current policy wording. If one floater cannot cover all, show only verified separate structures naming each person; at dependent-child age-out, surface a source-backed separate/migration path and continuity caveats. The owner rules are not attributed to IRDAI. RD2 passed on 2026-10-26. |

Source structure, file formats and naming conventions are defined in §12.1. D01 tooling conventions are recorded in [docs/decisions/D01.md](docs/decisions/D01.md), with official-source verification in [docs/evidence/D01-tooling-evidence.md](docs/evidence/D01-tooling-evidence.md): pinned tooling, npm workspaces/root lock, exact commands, shared-TypeScript boundaries, source/test paths and bounded setup steps. These are documentary decisions; installation/configuration validation follows in M01A and executable confirmation in M01B. Request schemas and provider/deployment architecture remain downstream choices. Boundary: preserve the confirmed scope; explicitly surface trade-offs or unresolved evidence; never fabricate insurance facts, commit secrets, or silently weaken acceptance checks.
