# D07 hosting and persistence feasibility evidence

Checked: 2026-10-26 (Asia/Calcutta)

## Scope

The initial official-source review preceded the disposable probe below. No real-app D07b project/deployment was created. A user-authorized, dummy-only Express probe was created separately under OS temp and deployed as an unclaimed Vercel temporary deployment; it did not replace final-app acceptance. The existing Neon project had already been linked for T08a.

## Independent T08 feasibility review (2026-10-26)

### Architecture assessed

React/Vite static frontend on Vercel; Node.js/Express HTTP and WebSocket handlers on Vercel Functions with Fluid Compute; server-side Postgres access to the existing Neon project. Local Express and hosted Functions use the same server-side storage interface and environment-specific `DATABASE_URL`. Durable session state lives in Postgres, not Function memory. Speech-provider WebSockets are proxied/managed by the backend; T03's direct provider probes establish provider-side route feasibility, not this hosted bridge.

### Official-source result

- [Vercel WebSockets](https://vercel.com/docs/functions/websockets), last updated 2026-08-10, says WebSockets are available on all plans and documents Node.js server frameworks including Express with `ws`. WebSocket connects are pinned to one Function instance. The client must reconnect after a Function reaches maximum duration; a new connection can reach another instance or deployment, so durable state must be external.
- [Vercel's GA announcement](https://vercel.com/changelog/websocket-support-is-now-generally-available), 2026-10-20, confirms WebSockets are generally available and intended for AI chat/streaming. Function limits and pricing still apply.
- [Vercel Function limits](https://vercel.com/docs/functions/limitations) documents a 300-second default and maximum for Hobby Node.js Functions with Fluid Compute, 2 GB memory, 1,024 shared file descriptors, and 4.5 MB HTTP request/response bodies. The HTTP body limit is not asserted as a WebSocket frame limit. A Hobby WebSocket therefore needs bounded conversations and reconnect/resync behavior.
- [Vercel Hobby plan](https://vercel.com/docs/plans/hobby) is $0 for personal, non-commercial use. Listed monthly allowances include 4 active CPU-hours, 360 GB-hours provisioned memory, 1 million Function invocations, 100 GB Fast Data Transfer, and 10 GB Fast Origin Transfer. Function memory accrues while a request waits on I/O; WebSocket traffic also counts toward Function usage and data transfer. In most cases, an exhausted Hobby feature is unavailable until 30 days have passed. Project-plan and commercial eligibility are unknown.
- [Neon pricing](https://neon.com/pricing) currently lists Free at $0 with no time limit or credit card, 100 projects, 100 CU-hours and 1 GB database storage per project, compute up to 2 CU, 10 branches, and instant restore up to six hours or 1 GB of changes. The 5 GB object-storage allowance is not needed for this design. These limits apply only if the linked project is actually on Free; current account plan/resource state was not verified.
- [Neon connection docs](https://neon.com/docs/connect/connect-from-any-app) document standard Postgres protocol and a Node `pg` connection-string example, supporting the same hosted database from laptop Node and Vercel Node. Earlier T08a evidence records the actual pooled Neon connection and a transaction-scoped synthetic insert/read/rollback.
- [Neon compute docs](https://neon.com/docs/manage/computes) state compute scales to zero after five minutes of inactivity and resumes on a subsequent query. Neon's [storage architecture](https://neon.com/storage) describes stateless compute nodes reconnecting to a separate durable storage layer; committed data remains in that storage through compute suspension. The wake-up can add a few hundred milliseconds. This describes database compute restart, not the untested app's persistence adapter or its reconnect behavior.

**Feasibility verdict:** compatible in principle. Vercel documents the backend transport and Neon documents the shared durable Postgres path needed for local/hosted access. The five-minute Hobby Function lifetime means persistent socket sessions cannot depend on one uninterrupted connection. Reconnect and database reload are required. No unsupported topology is needed on paper, but the account-specific free-plan/no-spend preflight and a real hosted bridge are still open.

### Current workspace checks and commands

Commands/checks performed in this review:

```powershell
git status --short --branch
rg --files frontend backend -g '!node_modules/**'
$names=@('VERCEL_TOKEN','DATABASE_URL','DATABASE_URL_UNPOOLED')
foreach($n in $names){$v=[Environment]::GetEnvironmentVariable($n); "$n env=$([bool]$v)"}
if(Test-Path .env){$keys=Get-Content .env -Encoding utf8 | ForEach-Object {if($_ -match '^\s*([A-Za-z_][A-Za-z0-9_]*)\s*='){$Matches[1]}}; foreach($n in $names){"$n file=$($keys -contains $n)"}}
"Vercel metadata present=$([bool](Test-Path .vercel))"
neon.cmd projects list -o json
```

Outcomes:

- `git status --short --branch`: NOT AVAILABLE; this workspace has no `.git` directory. T14 worktree/branch separation cannot be verified from this checkout. The files edited for this task are limited to D07, this evidence file, and SPEC Q6.
- Source inventory: only frontend/backend package and configuration files are present; no `src` application files exist in this workspace.
- Presence-only check: `VERCEL_TOKEN` absent from process environment and root `.env`; `.vercel` absent. `DATABASE_URL` and `DATABASE_URL_UNPOOLED` key names are present in ignored `.env`; values were not read or printed.
- `neon.cmd projects list -o json`: no usable project-plan metadata was returned (nonzero result); account plan and current usage remain unknown.
- No runtime/deployment/storage probe was run in this review. This avoids creating or using a potentially paid resource without a confirmed free account plan and avoids substituting a throwaway server for the required real-app D07b check.
- Existing T08a commands/evidence remain the only live storage probe: `neon status -o json`, `neon deploy`, and a temporary Node `pg` client that inserted/read a synthetic row in a transaction and rolled it back. This established SQL connectivity, not row persistence across process/server restart.

### Persistence/restart behavior and limits

| Event | Documented/observed behavior | Project-specific result |
|---|---|---|
| Local backend process restarts | Reconnect to shared hosted Postgres and read committed records. | NOT RUN with a committed synthetic record. |
| Vercel Function reaches max duration (Hobby: 300 seconds) | WebSocket closes; reconnect may hit a different Function instance. | NOT RUN; requires real hosted app. |
| Vercel redeploy | Existing sockets may remain on prior deployment until closed; new sockets may reach new deployment. Durable state must be external. | NOT RUN; requires real hosted app. |
| Neon compute idle/restart | Compute suspends after five idle minutes; storage is independent, and a query wakes compute. | Provider behavior documented; no retained probe row was used to verify this project's record after wake/restart. |

No synthetic row, temporary server, Vercel project, or paid resource was created in this review. No secrets were displayed or copied into evidence. The prior T08a row was rolled back.

### Remaining deployed acceptance

At T57/Z04, after the real app and deployment exist: verify account/plan eligibility and current resource state before deploy under the no-spend rule; send a small dummy WebSocket exchange through the hosted backend (including the real provider bridge if implemented); write/read synthetic data from local and hosted app paths; restart/redeploy; reconnect; and read the same non-deleted record from the real app. Record actual host revision, plan, usage and failures. Until this passes, do not claim the full app or hosted compatibility works.

## Earlier official-source checks

### Vercel transport and limits

- [Vercel WebSockets](https://vercel.com/docs/functions/websockets), page last updated 2026-08-10, says WebSockets are available on all plans; Node.js server frameworks including Express can serve them from Functions. It states each socket is pinned to one Function instance, connections close at maximum duration, reconnects should reload required state, and persistent state must use an external store. WebSockets require Fluid Compute and follow Function limits/pricing, including data transfer.
- [Vercel WebSocket general availability](https://vercel.com/changelog/websocket-support-is-now-generally-available), dated 2026-10-20, confirms GA, use for AI streaming, and the same Function limits/pricing.
- [Vercel Function limits](https://vercel.com/docs/functions/limitations), page last updated 2026-08-24, gives Hobby Node.js + Fluid Compute a 300-second default and maximum duration, 2 GB memory, 1,024 shared file descriptors, and a 4.5 MB request/response body limit. The 300-second cap means long-running sockets must handle close/reconnect and restore state.
- [Vercel Function usage and pricing](https://vercel.com/docs/functions/usage-and-pricing), checked 2026-10-26, lists Hobby allowances of 4 active CPU-hours, 360 GB-hours provisioned memory, and 1 million invocations per month. Provisioned memory time continues while a Function is waiting on I/O. [Hobby plan terms](https://vercel.com/docs/plans/hobby) state the plan is for personal, non-commercial use, include 100 GB Fast Data Transfer and 10 GB Fast Origin Transfer, and generally pause exceeded free usage until a reset period. Actual project-plan eligibility remains unverified.
- **Source conflict:** the older [general Vercel limits page](https://vercel.com/docs/limits) still contains a sentence saying Functions do not support acting as a WebSocket server. That page was last updated 2026-02-03, before the specialist WebSocket page (2026-08-10) and GA announcement (2026-10-20). The dated specialist page and later GA changelog are used as current evidence; a deployed probe is still required.

### Candidate database: Neon Free

- [Neon pricing](https://neon.com/pricing), checked 2026-10-26, lists Free at $0 with no time limit and no credit card required; 100 projects, 100 CU-hours per project/month, 1 GB database storage/project, compute up to 2 CU, 10 branches, and instant restore up to six hours or 1 GB of changes. It lists 5 GB of object storage/project, which this task does not require.
- [Connect from any application](https://neon.com/docs/connect/connect-from-any-app) documents standard Postgres connectivity from any application, a Node.js `pg` connection-string example, pooled and direct endpoints, and IPv4/IPv6 support for AWS-provisioned projects. The same hosted database can therefore be configured independently for local Express and Vercel Node.js environments; actual network access was not probed.
- [Neon serverless driver](https://neon.com/docs/serverless/serverless-driver) documents JavaScript/TypeScript queries over HTTPS or WebSockets and a Vercel Functions example. The HTTP driver suits single queries/non-interactive transactions; WebSocket `Pool`/`Client` is used for interactive sessions. Driver documentation requires Node.js 19 or later; the project's final deployed runtime is not yet present to test.
- [Neon scale-to-zero guide](https://neon.com/docs/guides/scale-to-zero-guide) states Free compute suspends after five minutes of inactivity and activates when a client connects. Paid plans can disable this; Free cannot. This is different from Supabase's full-project inactivity pause. Neon pricing separates database storage from compute; however, session survival through a real service restart remains unproven in this project.

### Comparison check: Supabase Free

- [Supabase billing](https://supabase.com/docs/guides/platform/billing-on-supabase), checked 2026-10-26, lists two Free projects, 500 MB database size/project, 5 GB egress and 1 GB object storage.
- [Supabase Free project pausing](https://supabase.com/docs/guides/platform/free-project-pausing) says a project with low activity over seven days can be paused; the owner must restore it through the dashboard, and the previous data/configuration can be restored for up to one year.
- [Supabase database connections](https://supabase.com/docs/guides/database/connecting-to-postgres) lists Data API for frontend requests, shared transaction pooler for serverless functions, and direct/shared-session connections for persistent backends. This supports technical connectivity in principle but does not test this project's authorization model or restart behavior.

## Original workspace preflight before Neon setup

Presence-only PowerShell check (2026-10-26):

```powershell
$names = @('VERCEL_TOKEN', 'NEON_API_KEY', 'DATABASE_URL', 'SUPABASE_URL', 'SUPABASE_ANON_KEY', 'SUPABASE_SERVICE_ROLE_KEY', 'SUPABASE_DB_URL')
foreach ($n in $names) { $v = [Environment]::GetEnvironmentVariable($n); "$n env=$([bool]$v)" }
if (Test-Path .env) {
  $envNames = Get-Content .env -Encoding utf8 | ForEach-Object { if ($_ -match '^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=') { $Matches[1] } }
  foreach ($n in $names) { "$n file=$($envNames -contains $n)" }
} else { 'root .env absent' }
"Vercel project metadata present=$([bool](Test-Path .vercel))"
"package.json present=$([bool](Test-Path package.json))"
```

The result had no configured Vercel token, database URL, or Neon/Supabase project credentials; `.vercel` metadata and `package.json` were absent. Only Boolean presence values and variable names were printed. No secret values were read or displayed.

| Required check | Outcome | Evidence/limit |
|---|---|---|
| Official current Vercel WebSocket compatibility | PASS (documentation) | Specialist WebSocket docs, Function limits, pricing, and later GA changelog checked. |
| Free hosting and storage conditions | PASS (documentation only) | Vercel Hobby eligibility/allowances and Neon/Supabase Free quotas/pause behaviors recorded. Account-specific plan and quota status unknown. |
| Laptop to hosted database read/write | NOT RUN | No project URL or credential is configured. |
| Vercel WebSocket connect/exchange/close/reconnect | NOT RUN | No linked Vercel project/deployment and no app handler exists. |
| Dummy record persists across local/server restart and is visible across laptop/hosted app | NOT RUN | No database project/credential or app runtime exists. |
| Final deployed-app acceptance | NOT RUN (deferred) | Separate from this bounded feasibility decision; must be covered by later build/verification tasks. |

No mock or local-only result is counted as hosted evidence. At this preflight stage, no provider account, deployment, or paid resource had been created or changed; see the later Neon setup record below.

## Local documentary consistency check

Command: `@' ... '@ | python -` from the workspace root. Exact check body:

```python
from pathlib import Path
import re

em = Path("execution-map.md").read_text(encoding="utf-8")
t03 = em.split("## T03", 1)[1].split("## T04", 1)[0]
t08 = em.split("## T08", 1)[1].split("## T09", 1)[0]
t09 = em.split("## T09", 1)[1].split("## T10", 1)[0]
assert "Status: Complete" in t03
assert "Status: Pending" in t08 and "Depends on: T03" in t08 and "NOT RUN" in t08
assert "Depends on: T08" in t09
todo = Path("tasks/todo.md").read_text(encoding="utf-8").split("### D07", 1)[1].split("### D08", 1)[0]
assert "[ ] **Status: TODO**" in todo and "NOT RUN" in todo
spec = Path("SPEC.md").read_text(encoding="utf-8")
q6 = next(line for line in spec.splitlines() if line.startswith("| Q6 |"))
assert "docs/decisions/D07.md" in q6 and "unverified" in q6.lower()
dec = Path("docs/decisions/D07.md").read_text(encoding="utf-8")
ev = Path("docs/evidence/D07-hosting-feasibility.md").read_text(encoding="utf-8")
assert "Pending" in dec and "selection" in dec.lower()
assert "Bounded probe to run" in ev and "NOT RUN" in ev and "WebSocket" in ev
assert all(u in ev for u in ["https://vercel.com/docs/functions/websockets", "https://vercel.com/docs/functions/limitations", "https://neon.com/pricing", "https://supabase.com/docs/guides/platform/free-project-pausing"])
for name in ["SPEC.md", "execution-map.md", "tasks/todo.md", "build-progress.md", "docs/decisions/D07.md"]:
    body = Path(name).read_text(encoding="utf-8")
    assert all(line == line.rstrip(" " + chr(9)) for line in body.splitlines()), name
    assert "vach_" not in body and "sk-proj-" not in body, name
assert all(line == line.rstrip(" " + chr(9)) for line in Path("docs/evidence/D07-hosting-feasibility.md").read_text(encoding="utf-8").splitlines())
progress = Path("build-progress.md").read_text(encoding="utf-8")
assert "Current task: T08 / D07" in progress and "Next task: T08 / D07" in progress and "Started: Yes" in progress
assert "Do not start T09" in progress
print("D07 documentary consistency assertions: PASS")
```

Outcome: PASS. T03 dependency is complete; T08/D07 and TODO remain pending; T09's hard dependency remains intact; SPEC Q6, official-source references, blocker, resume checkpoint, whitespace and credential-pattern checks are consistent. This check does not establish hosted transport or record persistence.

## Neon CLI setup attempt (2026-10-26)

- `npm.cmd i -g neon@latest`: PASS; installed Neon CLI 8.11.4.
- `neon.cmd --version`: PASS; output was `8.11.4`.
- `neon.cmd me -o json` using the default config directory: could not run because the restricted workspace process could not create the Neon config directory under the user profile. No credential was inspected.
- Retried the authentication status check with a temporary config directory outside the repository: confirms the `DEFAULT` profile has no stored credential and sign-in is required.
- `neon.cmd login --help`: PASS; the CLI identifies browser sign-in and gives `neon login --profile DEFAULT` as the login command.
- Owner action required: run `neon login --profile DEFAULT` in a terminal and complete the browser sign-in, then return to resume. No browser was opened by this agent.
- `neon init -y --org-id org-soft-leaf-59971756 --project-id delicate-bar-71751380 --branch production --services postgres` and `neon deploy`: NOT RUN pending that sign-in. Neon project setup, deployment, DB read/write, app wiring and hosted WebSocket/restart probes remain NOT RUN.
- Neon agent skills are not yet available in the workspace; defer their installation/reading until authenticated `neon init` completes, following the CLI's init workflow.
- `.gitignore` rules (`.env`, `.env.*`, exception `!.env.example`) were tested in an isolated temporary Git repository: `.env`, `.env.local`, and `.env.production` were ignored; `.env.example` was not ignored. PASS. The project workspace itself has no `.git` metadata, so its own `git check-ignore` command cannot run.
- No `.env` content or credential values were read or recorded during this attempt.

T08 remains Pending. Owner authentication is complete. Hosted WebSocket and restart-persistence acceptance still require the application runtime and deployment described in the bounded probe below.

## Authenticated Neon setup and database smoke check (2026-10-26)

### Official skill and project tooling

- Fetched the current [official Neon agent skill](https://neon.com/.well-known/agent-skills/neon/SKILL.md) and followed its guidance to inspect the repository before provisioning, prefer the CLI when authenticated, select only task-relevant skills, use project-local OAuth MCP configuration, and avoid printing credentials.
- Pre-setup inventory found no `.neon`, `neon.ts`, Neon skills, or project Codex MCP config. The existing `.agents/skills` and `skills-lock.json` contained 25 non-Neon skills.
- Ran authenticated `neon init` for the owner-supplied organization/project and `production` branch, declaring Postgres and installing project-local `neon` and `neon-postgres` skills plus Codex MCP with OAuth and the project ID scope. The linked branch was confirmed by `neon status -o json` (exit 0; no status payload recorded).
- Installed files: `.agents/skills/neon/SKILL.md` and its references; `.agents/skills/neon-postgres/SKILL.md` and its references; `.codex/config.toml` (project MCP entry with Neon endpoint and project scope, no API-key setting); `.neon` (link context); `neon.ts` (CLI policy); `package.json` and `package-lock.json` (CLI config dependencies `@neon/config` and `@neon/env`); updated `skills-lock.json` with the two Neon skills. All 25 pre-existing skill-lock entries remain present.
- The CLI-generated `neon.ts` initially added a seven-day TTL to future non-default branches. That unrequested branch deletion policy was removed; the file now declares only `auth: false` while PostgreSQL remains the Neon baseline. The production branch has no branch overrides. Reapplying this policy with `neon deploy` passed; no branch was deleted or created.
- `neon skills update -y` was attempted per the skill's update guidance. It reported that all project skills were up to date but exited 1 because the staged `neon-postgres-egress-optimizer` repository included an eval skill missing required frontmatter. No unrelated skill was installed into the project and no manual workaround was applied.

### Neon deployment and connection check

- `neon deploy`: PASS (exit 0), including a second apply after removing the unrequested branch TTL. It applied the Postgres policy and pulled pooled `DATABASE_URL` and direct `DATABASE_URL_UNPOOLED` into the existing, ignored `.env`.
- Existing `.env` key/value lines were compared in memory before/after deployment: PASS, unchanged. Only Boolean/key-name checks were emitted. Neither connection URL nor credential values were printed or copied to evidence.
- `.gitignore` excludes `.env` and `.env.*`, allows `.env.example`, and excludes `node_modules/`. An isolated temporary Git repository check PASS: `.env`, `.env.local`, `.env.production`, and `node_modules/` are ignored while `.env.example` remains allowed. The project folder itself has no `.git` metadata.
- A temporary `pg` package was installed under the OS temp directory only (no app dependency added). A Node `pg` client connected through the pooled `DATABASE_URL`, created a temporary table inside a transaction, inserted a synthetic row, read back an exact match, then rolled back: PASS. No persistent schema or probe row remains. The first probe attempt failed before connecting because the temporary PowerShell parser read the line incorrectly; DNS checks showed the endpoint resolves, and the corrected parser rerun passed.
- No app build was run: the repository had no app runtime or build script; `package.json` contains only the Neon CLI config dependencies and no scripts. No WebSocket app or Vercel deployment exists in this workspace.

The database smoke check establishes credential/connection and SQL write/read from a temporary Node client only. It does not establish application integration, persisted data across a process restart, hosted WebSocket behavior, or persistence after redeployment. T08 remains Pending until the required hosted probe below passes.

## Bounded probe to run when access exists

Use synthetic data only. After linking an eligible Vercel project and free hosted Postgres project:

1. From local Express, write one uniquely tagged dummy session record through the application's server-side DB path, restart the local process, and read the same record.
2. From the hosted Vercel deployment, read that record, write a second dummy record, then read it from local Express.
3. Open the Express WebSocket endpoint, exchange one small dummy message, close it, reconnect, and verify the connection restores authoritative session state from Postgres rather than Function memory.
4. Confirm no paid plan/resource was activated and record actual plan/usage results without saving secrets.

This procedure is not marked passed until executed against the configured projects.

The user-authorized disposable probe recorded below verifies only the local Express/Neon process-restart slice. It does not pass this later real-app procedure.

## 2026-10-26 dependency re-evaluation: T08a / T08b

The user requested that T08's hosted acceptance not be simulated with a throwaway application. The verified work is split for scheduling; this does not change the original acceptance requirement:

- **T08a / D07a — PASS:** Neon project status/deploy and an authenticated SQL insert/read using a temporary table passed; the transaction was rolled back. Neon connectivity is verified. This is not an application persistence test.
- **T08b / D07b — NOT RUN:** Hosted WebSocket verification has not been run. Persistence through the real application across restart/redeploy has not been run. No real application runtime or hosted application deployment exists yet.
- **No throwaway runtime:** T08b is scheduled in T57/Z04 after the real application has its voice, durable-session, and restricted-deployment paths. The same real app must write a synthetic persistent record, restart/redeploy, reconnect, and read that record.
- **Dependency consequence:** SPEC §12.1 permits generic S0 tooling/browser/server foundation under D01, while the concrete storage adapter and deployment config remain gated on Q6–Q8. T14/M01A and T15/M01B can precede T08b; D08/D10 research can use D07a. The adapter task M26 and deployment task Z01 retain the full D07 gate, while T08b itself needs M26/Z01. This creates a dependency cycle; do not waive the SPEC gate or claim the plan is executable past S0 until it is explicitly resolved. T08/D07 remains Pending overall until T08b passes.

No new app, deployment, database object, or persistent test record was created for this re-evaluation.

## 2026-10-26 dependency-cycle resolution

The preceding dependency note records the graph before the SPEC correction. The user requested that T08b stay after implementation and that genuine architecture gates remain intact. The authoritative current sequence is now:

- **Before M26/T41:** D07a/T08a database feasibility must pass and Q7/Q8 must be resolved by T09/D08 and T11/D09. The D07b hosted check is not required to write the adapter because it depends on that real path.
- **Before Z01/T54:** its existing release dependencies, D07a/T08a, T09/D08, T11/D09, and M26–M29 must pass. The first Z01 step checks the selected host/database plans and account-resource state against the no-out-of-pocket-spend constraint; missing or failing evidence blocks deployment.
- **After implementation and deployment:** T57/Z04 performs D07b/T08b against the real app. Hosted WebSocket verification and persistent read-after-restart/redeploy remain NOT RUN. Only this later check can establish hosted compatibility and close D07/Q6/T08.
- **Preserved gates:** Q7 access authorization, Q8 deletion semantics, the no-spend requirement, and the full hosted acceptance criteria remain in force. The no-throwaway note above preceded the user's direct authorization for this small disposable feasibility probe; it does not authorize replacing the later real-app T57/Z04 acceptance.

The graph no longer has a dependency cycle: M26/Z01 no longer wait for T08b, while T08b still waits for the real M26–M29 storage paths and Z01 deployment. T08a is Complete; T08b and T08 overall remain Pending.

## Owner-authorized disposable T08 feasibility probe (2026-10-26)

### Architecture tested

- OS-temp-only Node.js 24 / Express 5.3.0 service with one `GET /health` endpoint and a `ws` echo endpoint at `/ws`, exported as an HTTP server in the documented Vercel Node.js/Express pattern. `vercel.json` enabled Fluid Compute. The temp project also had fixed database endpoints for one uniquely named synthetic row; those endpoints were used only by the local process.
- An anonymous Vercel CLI temporary deployment (`tmp.now`) used an isolated empty global-config directory to ensure no account credentials were present. The deployment did not receive the Neon connection string.
- The local instance read `DATABASE_URL` from the existing ignored `.env` into its process environment without displaying it. It connected with `pg` to the owner's existing Neon `production` branch. The unique table and row were temporary and specific to this run.

This was infrastructure-only dummy functionality. It is not the product application and is not evidence that the full application works.

### Exact commands and results

Commands were run from the probe directory in OS temp unless a full workspace path is shown. The ignored `.env` value was never printed, written to the probe, passed on a command line, or uploaded to Vercel.

```powershell
npx.cmd --yes vercel@latest --version
# Exit 1: npm machine configuration was offline-only; ENOTCACHED. No request was sent.

npx.cmd --offline=false --yes vercel@latest --version
# PASS: Vercel CLI 65.3.1

npm.cmd install --offline=false --save-exact express ws pg
# PASS: 80 packages added, 81 audited, 0 vulnerabilities.

npx.cmd --offline=false --yes vercel@latest --global-config <isolated-empty-temp-directory> deploy --temporary --no-color
# PASS: exit 0; an anonymous tmp.now deployment URL was issued. CLI output was captured in memory; the private claim link was not retained.

Invoke-RestMethod -Uri ($baseUrl + '/health') -TimeoutSec 25
# FAIL: HTTP 403 Forbidden at Vercel edge (trace region bom1); the Express JSON response was not returned.

node diagnose.mjs '<ephemeral tmp.now URL>'
# FAIL: HTTP 403, body code 403 / Forbidden, x-vercel-error absent, x-vercel-id trace region bom1.
# Repeated with a browser User-Agent; same 403.

node ws-smoke.mjs '<ephemeral tmp.now URL>'
# FAIL, exit 1: first WebSocket connection/handshake failed. The planned message, clean disconnect, reconnect, and second message did not occur.
```

The deployment was not claimed. Vercel's [temporary deployment documentation](https://vercel.com/docs/cli/deploy) says unclaimed `--temporary` deployments expire within one hour. The deployment command completed at approximately 2026-10-26 17:29:39 UTC (2026-10-26 22:59:39 Asia/Calcutta), so provider expiry is expected by approximately 18:29:39 UTC. With no Vercel account signed in, manual dashboard removal was unavailable; this run relies on the documented expiry. The public temporary URL was already returning 403, so a later 403 alone cannot distinguish expiry from the earlier edge rejection. No claim link or URL was written to project files.

### Neon record and process-restart result

The PowerShell orchestrator parsed the ignored `DATABASE_URL` assignment in memory and set it only in the local process environment. It selected a free loopback port, then started the temp service hidden with `Start-Process` and redirected stdout/stderr to OS-temp log files. The relevant commands were:

```powershell
$workspace = 'C:\Users\shiva\OneDrive\Desktop\gyani_hacks_1'
$envLine = Get-Content (Join-Path $workspace '.env') -Encoding utf8 | Where-Object { $_ -match '^\s*DATABASE_URL\s*=' } | Select-Object -First 1
$dbUrl = $envLine.Substring($envLine.IndexOf('=') + 1).Trim()
if (($dbUrl.StartsWith('"') -and $dbUrl.EndsWith('"')) -or ($dbUrl.StartsWith("'") -and $dbUrl.EndsWith("'"))) { $dbUrl = $dbUrl.Substring(1, $dbUrl.Length - 2) }
# No value was printed.
$env:DATABASE_URL = $dbUrl
$nodeExe = (Get-Command node.exe).Source
$listener = [System.Net.Sockets.TcpListener]::new([System.Net.IPAddress]::Loopback, 0)
$listener.Start(); $port = $listener.LocalEndpoint.Port; $listener.Stop()
$env:PORT = [string]$port
$activeProcess = Start-Process -FilePath $nodeExe -ArgumentList @('index.js') -WorkingDirectory $probePath -WindowStyle Hidden -RedirectStandardOutput $stdoutLog -RedirectStandardError $stderrLog -PassThru
Invoke-RestMethod -Uri "$baseUrl/health"
Invoke-RestMethod -Method Post -Uri "$baseUrl/probe/seed"
Invoke-RestMethod -Uri "$baseUrl/probe/read"
Stop-Process -Id 33148 -Force
# Repeat Start-Process command above; restarted process ID: 34372
Invoke-RestMethod -Uri "$baseUrl/probe/read"
Invoke-RestMethod -Method Delete -Uri "$baseUrl/probe/cleanup"
Invoke-RestMethod -Uri "$baseUrl/probe/read"
```

Results: health PASS; Neon connection PASS; insert/read PASS for dummy ID `t08-dummy-330a3ec3` and value `T08 temporary dummy persistence record`; after process 33148 stopped and process 34372 started, the new process read the same exact row; cleanup deleted one row, dropped the unique table, and the final read confirmed `tableExists=false`, `found=false`, `record=null`. No test row or table remains. This proves Neon-backed persistence across a **local Express process restart**, not a Vercel restart/redeploy or a Neon compute restart.

### Account tiers, limits, and no-spend result

- **Neon:** The signed-in project console showed the existing project on **Free**. Before this probe, the project Usage panel displayed 0 CU-hours and 0 kB for storage/history/network; precise post-probe usage was not refreshed. Current [Neon pricing](https://neon.com/pricing) is $0 with no time limit or card requirement and lists 100 CU-hours/project/month, 1 GB database storage/project, up to 2 CU, 10 branches, and instant restore up to six hours or 1 GB of changes. The [compute docs](https://neon.com/docs/manage/endpoints/) describe Free scale-to-zero after five idle minutes. The probe stayed within the Free project; no upgrade or paid resource was activated.
- **Vercel:** No Vercel account was signed in or attached, so the actual user/project tier, usage, and commercial-use eligibility could not be checked. The temporary deployment had no account billing association and is not evidence of the account's plan. Current [Hobby documentation](https://vercel.com/docs/plans/hobby) lists 4 active CPU-hours, 360 GB-hours provisioned memory, 1 million Function invocations, 100 GB Fast Data Transfer, and 10 GB Fast Origin Transfer. Hobby is personal/non-commercial only, and exceeded allowances pause affected features; additional usage cannot be purchased on Hobby. Node.js Functions with Fluid Compute have a 300-second Hobby maximum ([Function limits](https://vercel.com/docs/functions/limitations)). Product eligibility and account remaining quotas are unverified, so the no-spend preflight does not pass for Z01.
- The unclaimed accountless `tmp.now` endpoint was intended to test Vercel but returned 403 before the route could be validated. This does not establish that the Express handler or WebSocket code is incompatible; its cause is unknown. It also does not verify that the proposed application can use the actual account's no-spend plan.

### Limits and remaining deployed acceptance

Observed reconnect behavior on Vercel: **NOT VERIFIED**. The first handshake was rejected with HTTP 403, so no server message, disconnect, or reconnect cycle was observed. Official [WebSocket guidance](https://vercel.com/docs/functions/websockets) supports `ws`/Express on all plans when Fluid Compute is enabled, but says sockets are pinned to one Function, close at maximum duration, and reconnects may reach another instance or deployment; clients must reconnect and reload durable state externally. The 300-second Hobby duration makes this a required application behavior. HTTP response streaming was not separately probed.

T08/D07 stays Pending. Later T57/Z04 acceptance still needs a real Vercel project whose plan and current usage pass the no-out-of-pocket-spend rule; the actual application deployed with server-side Neon configuration; hosted HTTP/streaming and WebSocket connect/message/disconnect/reconnect; hosted DB write/read; the same dummy row read after real redeploy/restart and reconnect; and real-app deletion/isolation checks under D08/D09. No product logic, product session data, or customer/health data was used or implemented here.
