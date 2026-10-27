# D01 — Tooling evidence and verification

Task: T01 / D01. Date: 2026-10-26, Asia/Calcutta (+05:30). Scope: documentation/research only. Decision: [D01.md](../decisions/D01.md).

## Inputs and local baseline

Read T01 completely, original TODO D01, SPEC §12/§12.1/§18, and PLAN planning boundaries, D01 gate, file ownership and execution rules. Read the context-engineering, source-driven-development and documentation-and-adrs SKILL.md files under .agents/skills/. Existing using-agent-skills guidance governs selection. No manifests or application code existed; docs/interview-progress.md was the only pre-existing docs file. The existing D01 naming/location convention takes precedence over a new generic ADR numbering scheme.

Local checks actually run:

| Check | Result |
|---|---|
| node --version | PASS: v24.15.0; inventory only, not an application execution check. |
| npm.cmd --version | PASS: 11.6.0. |
| git status --short | Unavailable: fatal “not a git repository”; no .git directory exists here. No Git baseline/commit/diff is claimed or repository initialized. Direct file/section checks are used instead. |
| Manifest/source inventory (rg and Get-ChildItem) | PASS: documentation-only checkout; skills-lock.json describes skills, not application dependencies. |
| Initial public registry reads in restricted shell | FAILED: PowerShell receive errors; Python WinError 10061. These produced no package evidence. |
| Read-only public registry retrieval with approved network escalation | PASS: exact publisher records for 23 selected dependencies plus npm; no packages installed or local config changed. |
| Initial tsx site retrieval / npm-run-script URL | Retrieval failed; replaced with upstream tsx source documentation and npm-run official documentation below. |

T01 explicitly authorizes selecting versions; the skill's generic request to ask when versions are absent does not require asking the user to make this delegated technical choice. Generic README/AGENTS/code documentation suggestions do not expand the allowed D01 file set.

## Official command and architecture sources

Retrieved 2026-10-26. These sources validate documented syntax and conventions; they do not show this repository executing them.

| Source | Check supported / conclusion |
|---|---|
| [npm workspaces](https://docs.npmjs.com/cli/v11/using-npm/workspaces/) | Root workspaces can manage the two local packages; workspace scripts run in their package directory. |
| [npm run](https://docs.npmjs.com/cli/v11/commands/npm-run/) | Scripts expose local executable binaries; -- forwards positional filters to the selected script. |
| [npm ci](https://docs.npmjs.com/cli/v11/commands/npm-ci/) | Clean installation requires a matching lock and manifest; initial lock generation must use install. |
| [npm install](https://docs.npmjs.com/cli/v11/commands/npm-install/) | Exact-save, workspace and dev-dependency flags used in the dependency-management convention. |
| [Node 24.21.0 release](https://nodejs.org/en/blog/release/v24.21.0) | Official reference runtime release; local Node version remains separately recorded. |
| [React from scratch](https://react.dev/learn/build-a-react-app-from-scratch) | Vite is a supported starting build tool for a React app; retain the already fixed stack rather than introduce a framework. |
| [Vite CLI](https://vite.dev/guide/cli) | vite, vite build, host/port/strictPort syntax; Vite runs from frontend workspace. |
| [Vite guide](https://vite.dev/guide/) | Documented Node minimum is compatible with the chosen 24.x baseline. |
| [Tailwind Vite integration](https://tailwindcss.com/docs/installation/using-vite) | Use tailwindcss and @tailwindcss/vite; plugin plus CSS import avoids an unnecessary PostCSS stack. |
| [TypeScript module](https://www.typescriptlang.org/tsconfig/module.html) | NodeNext suits emitted Node modules; ESNext suits bundled frontend code. |
| [TypeScript rootDir](https://www.typescriptlang.org/tsconfig/rootDir.html) and [outDir](https://www.typescriptlang.org/tsconfig/outDir.html) | Directory structure is preserved on emission; explicit rootDir includes shared source and determines the backend start path. |
| [tsc CLI](https://www.typescriptlang.org/docs/handbook/compiler-options.html) | Project (-p) and --noEmit checks are distinct from backend emission. |
| [TypeScript 5.9 release documentation](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-9.html) | Selected compiler line has official documentation; exact 5.9.3 existence checked against registry metadata. |
| [typescript-eslint quickstart](https://typescript-eslint.io/getting-started/) | Flat ESLint configuration with eslint, @eslint/js, typescript and typescript-eslint; root .mjs needs no extra config loader. |
| [typescript-eslint supported versions](https://typescript-eslint.io/users/dependency-versions/) | Support is >=4.8.4 <6.1.0 for TypeScript and includes ESLint 10. Reject blindly selecting TypeScript 7 latest. |
| [ESLint CLI](https://eslint.org/docs/latest/use/command-line-interface) | eslint . and --max-warnings 0 are documented. |
| [Vitest CLI](https://vitest.dev/guide/cli) | vitest run is single-run; positional filename filters select focused tests. |
| [Vitest environments](https://vitest.dev/guide/environment) | Node is the default; per-file jsdom environment supports component suites. This is distinct from real-browser acceptance. |
| [Playwright CLI](https://playwright.dev/docs/test-cli) | playwright test, config/file selection and browser installation commands. |
| [Playwright web servers](https://playwright.dev/docs/test-webserver) | webServer accepts multiple servers; commands, readiness URLs, baseURL and reuse controls support isolated frontend/backend startup. |
| [tsx upstream watch documentation](https://raw.githubusercontent.com/privatenumber/tsx/master/docs/watch-mode.md) | tsx watch <file> reruns the TypeScript entry and imported dependencies. |
| [concurrently upstream usage](https://github.com/open-cli-tools/concurrently#usage) | Cross-platform quoted commands, JSON escaping and --kill-others behavior. |
| [Express installation](https://expressjs.com/en/starter/installing/) | Express 5 uses Node 18+; selected Node exceeds that minimum. |

## Exact package-version evidence

For each row in D01's version table, the publisher record at https://registry.npmjs.org/<package>/<version> was retrieved and name/version asserted. Scoped package slashes may be URL-encoded as %2f. npm 11.6.0 was verified the same way. Those immutable-version URLs, rather than latest tags, identify the selected records.

| Interoperation check | Publisher metadata observed | Assessment |
|---|---|---|
| React pair | react-dom 19.3.1 requires react ^19.3.1 | PASS: selected pair matches. |
| React types | @types/react-dom 19.3.0 requires @types/react ^19.3.0 | PASS. |
| Vite/React plugin | plugin-react 6.1.2 requires vite ^8.0.0 | PASS: Vite 8.3.5. Compiler/Babel/oxc-transform-react peers are optional. |
| Tailwind/Vite | @tailwindcss/vite 4.3.3 accepts ^5.2.0 or 6/7/8 | PASS: Vite 8; matching Tailwind core/plugin pins. |
| Vitest/Vite | vitest 5.0.5 accepts Vite ^6.4.0 / ^7 / ^8 | PASS. jsdom is an optional peer supplied explicitly. |
| ESLint/TS | typescript-eslint 8.72.0 requires ESLint ^8.57 / ^9 / ^10 and TypeScript >=4.8.4 <6.1.0 | PASS: ESLint 10.13.0, TS 5.9.3. Latest TS 7.0.2 is unsuitable for this selected set. |
| ESLint base config | @eslint/js 10.0.1 accepts ESLint ^10 | PASS. |
| React Testing Library | 16.3.3 accepts React/DOM ^18 / ^19 and @testing-library/dom ^10 | PASS: React 19.3.1, DOM library 10.4.2. |
| user-event | 14.6.8 requires @testing-library/dom >=7.21.4 | PASS: 10.4.2. |
| Runtime intersection | jsdom ^24.15.0 on the 24.x line; Vitest ^24.0.0; Vite/plugin >=22.12; ESLint >=24; concurrently >=22; Playwright >=20 | PASS for local Node 24.15.0 and reference Node 24.21.0. |
| Other engines | npm ^20.17 or >=22.9; Express >=18; TS >=14.17; tsx >=18; Testing Library >=18 | PASS for selected Node. |
| Node types | latest observed types were Node 26; select exact @types/node 24.19.2 | Matches reference major; no implicit upgrade to Node 26 APIs. |

These are direct engine/peer declaration checks, not a solved dependency tree, binary-platform test, vulnerability clearance or provider/host compatibility result. Native transitive tooling and browser binaries are validated at installation. No optional package is promoted to a requirement without a task need.

Reproducible exact-version check (PowerShell; this check is read-only and was run successfully after selecting the pins):

~~~powershell
@'
from pathlib import Path
import re, json, urllib.request, concurrent.futures
text = Path('docs/decisions/D01.md').read_text(encoding='utf-8')
pins = dict(re.findall(r'^\| ([^ |]+) \| (\d+\.\d+\.\d+) \|', text, re.M))
pins['npm'] = '11.6.0'
def check(item):
    name, version = item
    url = 'https://registry.npmjs.org/' + name.replace('/', '%2f') + '/' + version
    data = json.load(urllib.request.urlopen(url, timeout=25))
    assert data['name'] == name and data['version'] == version
    return name + '@' + version + ': PASS'
with concurrent.futures.ThreadPoolExecutor(max_workers=6) as pool:
    for result in pool.map(check, pins.items()):
        print(result)
assert len(pins) == 24
print('PASS: 24 exact publisher records; no packages installed.')
'@ | python -
~~~

## Per-task file-budget audit

Exact original target lists below come from tasks/todo.md. Counts include tracked tests/data/config; wildcard/placeholder names must be instantiated before execution. This is a budget audit, not authorization to create all these files now. M01A/M01C setup steps and their exact additional config/wiring allocations are in D01. Other rows fit their literal lists, subject to the source's existing size/split rule and a concrete pre-start check.

| Build task | Literal target count | Original paths / budget treatment |
|---|---|---|
| M01A | 5 | `package.json`; `frontend/package.json`; `backend/package.json`; `frontend/tsconfig.json`; `backend/tsconfig.json`; split into 5/5/2 setup steps including lock/config (D01). |
| M01B | 5 | `frontend/index.html`; `frontend/src/main.tsx`; `backend/src/app.ts`; `backend/src/server.ts`; `tests/integration/baseline.test.ts` |
| M01C | 5 | `frontend/src/App.tsx`; `frontend/src/styles.css`; `frontend/src/features/onboarding/Welcome.tsx`; `frontend/src/i18n/index.ts`; `tests/e2e/welcome.spec.ts`; main.tsx wiring also required; split 5/1 (D01). |
| M02 | 4 | `shared/profile.ts`; `frontend/src/state/session.ts`; `frontend/src/features/onboarding/FamilyHealthStep.tsx`; `frontend/src/features/onboarding/FamilyHealthStep.test.tsx` |
| M03 | 4 | `frontend/src/features/onboarding/BudgetPreferencesStep.tsx`; `frontend/src/state/session.ts`; `shared/profile.ts`; `frontend/src/features/onboarding/BudgetPreferencesStep.test.tsx` |
| M04 | 3 | `frontend/src/features/profile/ProfileConfirmation.tsx`; `frontend/src/state/session.ts`; `frontend/src/features/profile/ProfileConfirmation.test.tsx` |
| M05 | 5 | `shared/plan.ts`; `backend/src/catalogue/validate.ts`; `data/catalogue/<slot-1-plan-id>.json`; `data/sources.json`; `backend/src/catalogue/validate.test.ts` |
| M06 | 3 | `data/catalogue/<slot-2-plan-id>.json`; `data/sources.json`; `tests/fixtures/catalogue/<slot-2-plan-id>.json` |
| M07 | 3 | `data/catalogue/<slot-3-plan-id>.json`; `data/sources.json`; `tests/fixtures/catalogue/<slot-3-plan-id>.json` |
| M08 | 3 | `data/catalogue/<slot-4-plan-id>.json`; `data/sources.json`; `tests/fixtures/catalogue/<slot-4-plan-id>.json` |
| M09 | 3 | `data/catalogue/<slot-5-plan-id>.json`; `data/sources.json`; `tests/fixtures/catalogue/<slot-5-plan-id>.json` |
| M10 | 3 | `data/catalogue/<slot-6-plan-id>.json`; `data/sources.json`; `tests/fixtures/catalogue/<slot-6-plan-id>.json` |
| M11 | 3 | `data/catalogue/<slot-7-plan-id>.json`; `data/sources.json`; `tests/fixtures/catalogue/<slot-7-plan-id>.json` |
| M12 | 3 | `data/catalogue/<slot-8-plan-id>.json`; `data/sources.json`; `tests/fixtures/catalogue/<slot-8-plan-id>.json` |
| M13 | 3 | `data/catalogue/<slot-9-plan-id>.json`; `data/sources.json`; `tests/fixtures/catalogue/<slot-9-plan-id>.json`; alternatively one existing D02 decision record for an approved eight-plan catalogue. |
| M14 | 5 | `backend/src/catalogue/load.ts`; `backend/src/rules/eligibility.ts`; `backend/src/rules/eligibility.test.ts`; `shared/contracts.ts`; `tests/fixtures/eligibility.json` |
| M15 | 4 | `backend/src/rules/ranking.ts`; `backend/src/rules/ranking.test.ts`; `tests/fixtures/ranking.json`; `shared/contracts.ts` |
| M16 | 5 | `backend/src/routes/recommendations.ts`; `frontend/src/features/recommendations/Results.tsx`; `frontend/src/state/session.ts`; `frontend/src/lib/api.ts`; `tests/e2e/recommendations.spec.ts` |
| M17 | 4 | `backend/src/rules/coverage.ts`; `backend/src/rules/coverage.test.ts`; `frontend/src/features/onboarding/CoverageGuidance.tsx`; `tests/fixtures/coverage.json` |
| M18 | 5 | `backend/src/services/openai.ts`; `backend/src/routes/advisor.ts`; `backend/src/middleware/access.ts`; `frontend/src/features/advisor/Conversation.tsx`; `tests/integration/advisor.test.ts` |
| M19 | 4 | `backend/src/services/conversation.ts`; `frontend/src/state/session.ts`; `shared/profile.ts`; `tests/integration/conversation-profile.test.ts` |
| M20 | 4 | `backend/src/services/explanations.ts`; `backend/src/services/conversation.ts`; `tests/fixtures/policy-questions.json`; `tests/integration/grounding.test.ts` |
| M21 | 4 | `frontend/src/features/comparison/Comparison.tsx`; `frontend/src/features/comparison/selection.ts`; `frontend/src/features/recommendations/Results.tsx`; `tests/e2e/comparison.spec.ts` |
| M22 | 5 | `backend/src/services/tavily.ts`; `backend/src/routes/search.ts`; `frontend/src/features/advisor/ExternalOptions.tsx`; `tests/integration/search.test.ts`; `tests/fixtures/search.ts` |
| M23 | 5 | `backend/src/services/gnani-stt.ts`; `backend/src/routes/voice.ts`; `frontend/src/features/voice/input.ts`; `frontend/src/features/voice/VoiceControls.tsx`; `tests/integration/speech-input.test.ts` |
| M24 | 4 | `backend/src/services/gnani-tts.ts`; `frontend/src/features/voice/playback.ts`; `frontend/src/features/voice/VoiceControls.tsx`; `tests/integration/speech-output.test.ts` |
| M25 | 5 | `frontend/src/features/voice/interruptions.ts`; `frontend/src/features/voice/language.ts`; `frontend/src/features/voice/playback.ts`; `frontend/src/state/session.ts`; `tests/e2e/voice-continuity.spec.ts` |
| M26 | 5 | `backend/src/storage/sessions.ts`; `backend/src/routes/sessions.ts`; `backend/src/middleware/access.ts`; `shared/session.ts`; `tests/integration/session-storage.test.ts`; actual storage adapter remains D07/D09-gated; split before coding if extra files are needed. |
| M27 | 4 | `frontend/src/state/session.ts`; `frontend/src/lib/api.ts`; `backend/src/routes/sessions.ts`; `tests/e2e/session-restore.spec.ts` |
| M28 | 4 | `backend/src/routes/owner.ts`; `backend/src/middleware/access.ts`; `frontend/src/features/owner/SessionReview.tsx`; `tests/integration/owner-access.test.ts` |
| M29 | 5 | `backend/src/storage/sessions.ts`; `backend/src/routes/owner.ts`; `frontend/src/features/owner/DeleteSessions.tsx`; `frontend/src/state/session.ts`; `tests/integration/session-deletion.test.ts` |
| M30 | 3 | `backend/src/rules/claims.ts`; `backend/src/rules/claims.test.ts`; `tests/fixtures/claim-explanations.json` |
| M31 | 3 | `backend/src/rules/claims.ts`; `backend/src/rules/claims.test.ts`; `tests/fixtures/claim-calculations.json` |
| M32 | 4 | `backend/src/services/conversation.ts`; `backend/src/routes/claims.ts`; `frontend/src/features/claims/ClaimScenario.tsx`; `tests/e2e/claim-conversation.spec.ts` |
| M33A | 3 | `frontend/src/i18n/locales/<language-code>/onboarding.json`; `frontend/src/i18n/index.ts`; `tests/integration/translation-coverage.test.ts`; template count only; D12 creates bounded per-language children if needed. |
| M33B | 3 | `frontend/src/i18n/locales/<language-code>/results.json`; `frontend/src/i18n/index.ts`; `tests/integration/translation-coverage.test.ts`; template count only; D12 creates bounded per-language children if needed. |
| M33C | 3 | `frontend/src/i18n/locales/<language-code>/voice-claims.json`; `frontend/src/i18n/index.ts`; `tests/integration/translation-coverage.test.ts`; template count only; D12 creates bounded per-language children if needed. |
| M33D | 3 | `frontend/src/i18n/locales/<language-code>/owner-errors.json`; `frontend/src/i18n/index.ts`; `tests/integration/translation-coverage.test.ts`; template count only; D12 creates bounded per-language children if needed. |
| M34 | 4 | `frontend/src/state/session.ts`; `backend/src/middleware/errors.ts`; `tests/integration/service-failures.test.ts`; `tests/fixtures/provider-failures.ts` |
| M35 | 4 | `frontend/src/features/onboarding/DummyProfileEntry.tsx`; `frontend/src/features/onboarding/dummy-profile.ts`; `tests/fixtures/dummy-profile.json`; `tests/e2e/prefilled-journey.spec.ts` |

All 40 build tasks are covered. For Z01, D07 must enumerate actual adapter/config paths before coding; for Z03, retain focused fixture-family splits if needed; for Z05 and translation tasks, D06/D12 must instantiate the unknown inventory before execution. Research/report and status bookkeeping files are not a pretext for exceeding a coding step's five-file limit. No future source task description or dependency is changed by this audit.

## D01 Definition of Done audit

| Original criterion | Evidence / outcome |
|---|---|
| Choose minimal tooling/versions in the fixed stack | PASS: D01 pinned table; exact publisher records and official documentation checked; no added product framework. |
| Define dependency management | PASS: two npm workspaces, one root lock, exact pins, first install vs ci, explicit ownership/update policy. |
| Define actual install/dev/build/type/lint/focused/browser commands | PASS: D01 command table gives root commands, literal script bodies, cwd, configs and focused paths. |
| Define shared-TypeScript compilation | PASS: separate browser/server settings, Node ESM specifiers, explicit rootDir/outDir, emitted shared and server paths, tests/config typecheck. |
| Check per-task budgets and split oversized tooling | PASS: all 40 build-task target lists audited; M01A 5/5/2 and M01C 5/1 bounded steps documented; unknown language/adapter paths retain their gates. |
| Preserve layout, formats and browser/server boundaries | PASS: follows SPEC §12.1; no provider credentials or server code in browser/shared sources; no new service architecture. |
| Record decisions and supporting evidence | PASS: docs/decisions/D01.md and this record; SPEC §18 downstream tooling pointer only. |
| Avoid product code in decision task | PASS: only D01 docs, the affected SPEC tooling note and explicitly authorized progress/status records changed. |
| Verify commands against official docs | PASS: source table above; package engine/peer intersection inspected. |
| Executable confirmation follows M01B | NOT RUN by design: install/dev/build/type/lint/focused/browser scripts are not yet implemented; T14/T15 own execution. No executable pass claimed. |

## Verification outcome and deferred checks

Documentary verification: PASS. T01 can complete without pretending that an application was built. Automated product tests: not applicable to this research deliverable; all future application commands remain NOT RUN. Provider/hosting/catalogue/auth/language decisions remain unresolved in their original gates, not additional T01 work.

Direct consistency audit: PASS — Python stdin assertions confirmed D01's 23 exact pins, all eight required command categories, all 40 budget rows, setup-step allocations, no application/config/install output, unchanged PLAN/skills lock, and SPEC preserved outside its tooling note. SPEC preservation was checked by restoring the original single paragraph in memory and matching the pre-edit SHA-256. PLAN SHA-256 remained a5888ba4cfeeb2eb61c00019a0aeaaf950c39d081c3e98389d332dfcf39bbc5d; skills-lock SHA-256 remained daaaa9efc5533f5dc4f505692e602fa432f85ecc55a63cd2c4a82848a39bbb85. The final status audit checks only T01 is complete, T02–T62 remain Pending, D02 onward remain TODO, and progress says last completed T01/current and next T02. It also compares all future task sections with the pre-task text, rather than relying on unavailable Git metadata.

No human checkpoint is due at T01. The user's explicit request authorizes this task; RD1 remains pending until T05. No RD1 approval or future task approval is inferred.

Final verification (2026-10-26 10:25 +05:30): PASS. Read-only local Python stdin assertions confirmed synchronized completion in execution-map/TODO/progress, all three T01 completion boxes checked, T02 unstarted, and all 61 future tasks pending. Direct comparisons with the pre-task source text confirmed original D02 onward and execution-map T02 onward unchanged after newline normalization. The audit rechecked 23 pins, 40 budget rows, the unchanged PLAN hash and absence of application/install artifacts. Only the six documentation/status files listed in build-progress.md changed. No executable application command was run, and no T02 work began.

