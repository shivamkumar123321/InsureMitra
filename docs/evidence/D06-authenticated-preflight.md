# D06 — Authorized authenticated preflight

Historical preflight checkpoint from before the account-resource attestation and successful live speech probes. Its “remaining blocker” table is superseded by [D06-live-probes.md](D06-live-probes.md); retain this file only for the earlier authentication/host-authorization chronology.

Task: T03 / D06. Date: 2026-10-26, Asia/Calcutta (+05:30). Resumes [prior authentication research](D06-auth-research.md). Latest user authorization: use api.vachana.ai with the securely configured key, complete T03 if verification passes, otherwise record the exact blocker, and stop after T03.

## Configuration and authorization

The user explicitly authorized the documented https://api.vachana.ai speech host. This resolves the earlier alternate-host approval rejection; that rejected command was never treated as executed. Local .env still contained its earlier base value when inspected, so GNANI_BASE_URL was corrected to the newly authorized value. GNANI_API_KEY was loaded directly into a short-lived process without printing, copying into docs, passing in command-line arguments, or committing it. .env remains listed in .gitignore. No key value or fingerprint is recorded here.

T03 has no task dependencies. T01/T02 remain complete. No application code, SDK installation, account creation, billing change or later task execution occurred.

## Actual attempts and results

All HTTP requests below used POST /api/v1/tts/inference with an empty JSON object. No synthesis text or audio was submitted. Requests carrying credentials disallowed redirects and were restricted to the authorized host. These checks validate authentication behavior, not speech, credits or entitlement to every model/language.

| Attempt | Actual result | Interpretation |
|---|---|---|
| Initial urllib request with configured key and default client headers | HTTP 403; response not parsed as the documented JSON application error | Not accepted as an invalid-key/account-credit diagnosis. |
| Default-header missing-key control | HTTP 403, text/plain, Cloudflare, body error code 1010 | Network/edge response affects a no-key request too. Not evidence that the supplied key is invalid or credits exhausted. |
| Default-header configured-key comparison | URLError; no usable HTTP result | No credential or credit conclusion. |
| Officially illustrated curl client; secret passed privately through stdin configuration | curl exit 6, HTTP 000 | Hostname-resolution failure in that attempt. No response or speech success; no secret in process arguments. |
| Subsequent DNS check | Host resolved | Earlier curl failure not carried forward as a current permanent outage. |
| Descriptive client User-Agent, no key | HTTP 401 JSON detail.error_code=MISSING_API_KEY | Documented missing-credential rejection reached. |
| Same endpoint/client with configured key | HTTP 400 JSON application response requiring model and listing timbre-v2.5/timbre-v3.0 | The key passed the authentication gate; the deliberately incomplete synthesis request was rejected before audio generation. |
| Same endpoint/client with one deliberately fake control value | HTTP 401 JSON detail.error_code=INVALID_API_KEY | Distinguishes actual credential validation from merely checking header presence. No credential guessing or repeated login search. |

Paired final controls establish that the configured key is accepted for authentication at this route. They do not prove a positive synthesis response, spendable balance, expiry, paid-overage protection, model/language entitlement, STT success or voice quality. No project ID or additional account identifier was requested by these responses.

The descriptive User-Agent was GnaniAdvisor-D06-Research/1.0. It identifies a legitimate API client; it is not a fabricated browser session. No certificate validation was disabled, no proxy workaround used, and no access challenge bypassed. A redundant web-tool documentation refresh stalled and was terminated; the later direct read of official Markdown pages succeeded. No running probe process remains.

## Official documentation rechecked

Direct read-only retrieval succeeded for:

- [Documentation index](https://docs.gnani.ai/llms.txt).
- [Quick start](https://docs.gnani.ai/api/introduction/quick-start.md).
- [TTS inference](https://docs.gnani.ai/api/TTS/tts-inference.md).
- [STT realtime](https://docs.gnani.ai/api/STT/stt-websocket.md).
- [TTS realtime](https://docs.gnani.ai/api/TTS/tts-websocket.md).

Relevant protocol findings remain those in D06-auth-research.md: documented key header, preferred endpoint/model family, per-connection STT language and stream lifecycle. No public account-balance/expiry endpoint was identified in these inspected pages/index. This is a bounded research result, not a claim that no such facility exists anywhere. Agent Builder organization/platform APIs are a different surface; no organization/project/user identifier or balance route was guessed from them.

## Exact remaining blocker

SPEC §12 and original D06 require verified available resources and no additional out-of-pocket spend before bounded speech probes. Current authenticated validation does not establish the account's remaining free-credit amount, expiry or whether paid overages are disabled. The reported existence of signup credit is not balance evidence.

A non-secret clarification asked the user to provide the dashboard's remaining free balance, expiry and paid-overage setting, and identify competent human language-review coverage. No answer/evidence was available at this stop. Do not request another API key or project ID; the configured key has passed authentication.

Until the resource evidence is available, do not start chargeable TTS/STT/streaming requests or deliberately test exhaustion. Keep raw/microphone/synthetic audio temporary and in memory when probes are eventually run. No dummy speech clip was generated or retained in this attempt.

## Required checks still unpassed

| T03 requirement | Current status |
|---|---|
| Secure configuration and authorized host | PASS; key not displayed; base updated to authorized host. |
| API-key authentication | PASS for inspected TTS route, based on missing/invalid/configured-key controls. |
| Account-specific available credits/expiry/no-overage conditions | BLOCKED: non-secret account evidence needed. |
| Successful STT and TTS dummy probes | NOT RUN: await verified resources. |
| Streaming/interruption/cancellation with real audio | NOT RUN; endpoint documentation alone does not verify playback interruption. |
| Actual account-enabled language/voice/code-switch inventory including Tamil | Documentation candidates only; live evidence not established. |
| Competent evaluator coverage | Await user-provided coverage; not assumed. |
| Z05 concrete per-language acceptance children | NOT CREATED: actual inventory not yet verified. |

## Resume instructions

Read build-progress.md, D06.md and this record. Obtain the non-secret account-resource evidence. Do not repeat key setup or ask for a project ID without new documented/API evidence. With resources verified, run bounded genuine STT/TTS and realtime/interruption probes against the documented host, keeping secrets and audio out of logs/files. Establish the actual supported language intersection and evaluator coverage, then instantiate required Z05 children. Record each outcome and complete T03 only when all of its original verification passes. Stop after T03; T04 is not authorized by the latest request.

Outcome: **T03 remains Pending / incomplete**. The blocker is now account-resource/evaluator evidence, not missing credentials, an alternate-host approval, proven invalid key, or assumed project ID.
