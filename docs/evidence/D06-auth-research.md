# D06 — Resumed Gnani AI authentication research

Task: T03 / D06. Date: 2026-10-26, Asia/Calcutta (+05:30). This supplements the earlier [access preflight](D06-access-blocker.md); it does not erase that attempt's history or claim authenticated speech success.

## Configuration observed

The user specified GNANI_API_KEY and GNANI_BASE_URL and said the real key would be placed in .env. The supplied key text was a placeholder, not treated as a credential. Repeated local presence checks during this resumed attempt found no root .env, no other workspace environment file outside installed skills, and neither variable in the current process. Windows User and Machine environment checks also found no GNANI_API_KEY. No secret values were printed. A clarification requested only the configuration path/status, not a key in chat.

A .env is not automatically inherited by an already-running agent process. On resume, explicitly read the identified file into the short-lived probe process without logging values; do not assume checking os.environ alone loads it. This attempt checked both channels. No project ID was provided or invented.

## Official endpoint documentation

Retrieved 2026-10-26; endpoint-specific docs are the protocol evidence. No third-party wrapper was installed or executed.

| Source | Documentary finding |
|---|---|
| [Speech API introduction](https://docs.gnani.ai/api/introduction/introduction) | Base https://api.vachana.ai; API-key header X-API-Key-ID. No project ID listed for speech authentication. |
| [Prisma REST](https://docs.gnani.ai/api/STT/speech-to-text) | POST /stt/v3, multipart audio_file and language_code; API-key header. The current SDK constructor example requires api_key, not project ID. A legacy error-message example mentions other identifiers, but does not establish them as required request fields. |
| [Prisma realtime](https://docs.gnani.ai/api/STT/stt-websocket) | WSS /stt/v3/stream; key header plus lang_code; raw PCM and VAD transcript events. Language is configured at connection time. No project ID listed. |
| [Timbre REST](https://docs.gnani.ai/api/TTS/tts-inference) | POST /api/v1/tts/inference; X-API-Key-ID; preferred model timbre-v2.5 remains documented despite a newer model also being offered. |
| [Timbre realtime](https://docs.gnani.ai/api/TTS/tts-websocket) | WSS /api/v1/tts; API-key header; synthesis messages and streamed audio chunks. Client may close the connection; that alone does not prove audible playback cancellation or a complete barge-in flow. |
| [Voice catalog](https://docs.gnani.ai/api/TTS/available-voices) | Model-specific catalog: 42 v2.5 voices with preferred languages. Do not use v3.0 voices with v2.5. |
| [Official documentation index](https://docs.gnani.ai/llms.txt) | Used to locate canonical pages; previously guessed realtime paths did not resolve and were replaced with the linked websocket pages. |
| [Gnani AI TTS product page](https://www.gnani.ai/ja-jp/text-to-speech) | A marketing example instead uses api.gnani.ai/v1/tts/inference and Bearer authentication. This differs from the endpoint docs; do not mix protocols or silently send a secret to an unverified route. |

No additional credential/account identifier is established as required by the inspected speech request/connection tables. Organization status in a generic 403 explanation is not a required organization/project-ID parameter. Valid-key behavior remains untested; if an authenticated response later explicitly requires another identifier, preserve the sanitized exact error and stop at that real requirement.

## Documentation-derived language intersection

Prisma REST/realtime and Timbre v2.5 list the following common language codes. This is a **documented candidate inventory**, not demonstrated account access, speech quality, automatic language detection, code-switch support or final A3 acceptance.

| Language | Code | Candidate v2.5 voice from official catalog |
|---|---|---|
| Bengali | bn-IN | Kirra |
| English (India) | en-IN | Kaveri |
| Gujarati | gu-IN | Falak |
| Hindi | hi-IN | Nalini |
| Kannada | kn-IN | Saanvi |
| Malayalam | ml-IN | Reshma |
| Marathi | mr-IN | Zahira |
| Punjabi | pa-IN | Mehuli |
| Tamil | ta-IN | Asmita |
| Telugu | te-IN | Suhana |

Timbre additionally documents hi-en with Poorvi. Do not count that TTS option as an independently verified STT language or assume it proves the required Hindi-English conversation. Mixed-content formatting examples are not live recognition-quality evidence. Endpoint entitlement, actual language/voice behavior, code-switch pairs and human evaluator coverage remain unverified; no Z05 children are accepted as a verified inventory yet.

## Actual unauthenticated routing/authentication probes

Three empty POST requests were made without any API-key/Authorization header, audio or user data. They check public routing/auth-denial only, not valid credentials or speech. The probe does not use the user's placeholder value. Requests used JSON {} and a 15-second diagnostic timeout; this is not a product timeout decision.

| URL | Actual result |
|---|---|
| https://api.vachana.ai/stt/v3 | HTTP 401, application/json, response key detail. |
| https://api.vachana.ai/api/v1/tts/inference | HTTP 401, application/json, response key detail. |
| https://api.gnani.ai/v1/tts/inference | URLError; no HTTP status obtained. Cause not further classified; no claim of permanent outage or unsupported domain. |

The two 401s are consistent with documented missing-key rejection. They establish neither that a real key is valid nor that any project ID is needed. The third network result cannot adjudicate a second authentication scheme. No redirects carrying credentials were followed because no credentials were sent. No authenticated usage, generated audio or retained microphone audio occurred.

## Remaining verification and precise resume

1. Locate the real non-placeholder key in the user-provided .env or process environment. Current blocker: file/variable not present in the checked workspace/process. Do not create a placeholder .env and claim access configured.
2. Reconcile GNANI_BASE_URL with the documented API family before transmitting secrets. Prefer the verified endpoint documentation for its matching protocol; do not append one family's paths to the other family's host or use Bearer with the X-API-Key-ID interface by assumption.
3. Establish usable account resources/expiry and no-paid-overage conditions. A public signup-credit offer is not account evidence. No guessed billing endpoint or invented project ID.
4. Run minimal authenticated TTS/STT dummy probes and validate real output; then realtime streaming/cancellation/interruption and Hindi-English/Tamil behavior. Keep temporary audio in memory only. A closed socket is only one part of the later audible interruption check.
5. Confirm actual supported intersection and evaluator coverage, then instantiate the original per-language acceptance children with all required fields. Keep T03 Pending until its complete DoD/verification passes.

## Naming audit

Case-insensitive rg search for the obsolete provider spelling in project-authored files (including hidden content, excluding installed skills/tool metadata and .env files) returned no matches. Existing documents already spell the provider Gnani. New research uses Gnani AI. No source text required replacement; no workspace directory, path or unrelated identifier was renamed.

## Outcome

Partial research completed; **T03 Pending**. Official authentication, endpoint, model and candidate-language documentation is now recorded, and missing-key behavior was observed on the documented REST routes. Authenticated speech/credit/interruption verification remains NOT RUN. Current/next task stays T03; T04 onward unstarted. This is a real missing configuration input, not an assumed project-ID requirement.

## User-requested configuration update — 2026-10-26 11:26 +05:30

The user supplied a real key and explicitly requested creating .env. Created root .env with GNANI_API_KEY and the previously user-specified GNANI_BASE_URL=https://api.gnani.ai. Created .gitignore containing .env. An in-memory equality check verified the saved key matches the supplied value without printing it; the base URL and ignore entry were checked. No key is included in documentation. This resolves the earlier missing-file/key blocker; it does not establish valid credentials or account resources. The host was not silently changed. This configuration work is expressly user-authorized, not execution of T14/M01A.

A proposed empty-body authentication check at the documented alternative host api.vachana.ai was rejected by automatic approval review before execution. Stated reason: the action would send the user's credential to a destination different from their configured api.gnani.ai, without specific authorization for that alternate-host secret transmission. No authenticated request was executed and there is no authentication result. Do not bypass this rejection through another client, SDK, proxy or indirect request.

Current stop: obtain explicit user approval before sending the credential to api.vachana.ai, or use a verified endpoint/protocol on the already-authorized api.gnani.ai host if available. Keep T03 Pending. Credit/expiry, live STT/TTS, interruption and evaluator checks remain outstanding. No project ID has been established as required.
