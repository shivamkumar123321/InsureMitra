# D06 — Authenticated speech feasibility and language probes

Task: T03 / D06. Run date: 2026-10-26 (Asia/Calcutta). This record contains sanitized outcomes only. Credentials were read from the ignored local `.env` into short-lived Python processes; the key was not printed or copied into records. All generated audio remained in memory and was discarded when each process exited. No microphone audio, user content, application code, SDK installation, paid-overage request, or credit-exhaustion test was used.

## Resource and access evidence

The user reported checking the Gnani dashboard: **5,000 free API credits remain, they expire 31 Dec 2026, and paid overage is disabled**. This is owner-reported account evidence, not an independently fetched billing API response. The probes were bounded to short fictional test phrases under that reported allowance. The official speech pages inspected do not document a balance/expiry endpoint; no billing route or extra account identifier was guessed.

The user explicitly authorized the documented `https://api.vachana.ai` host. The configured key authenticated to the documented TTS route: without a key the route returned 401 `MISSING_API_KEY`, a deliberately fake control returned 401 `INVALID_API_KEY`, and the configured key with an incomplete body returned application-level 400 requiring `model`. No project ID was requested. Subsequent positive TTS, STT, and WebSocket calls confirm access to the probed routes and models.

## Official protocol evidence

- [Gnani STT REST](https://docs.gnani.ai/api/STT/speech-to-text): `POST /stt/v3`, multipart `audio_file` and `language_code`.
- [Gnani realtime STT](https://docs.gnani.ai/api/STT/stt-websocket): `wss://api.vachana.ai/stt/v3/stream`, `x-api-key-id`, `lang_code`, raw signed 16-bit little-endian mono PCM. At 16 kHz, the documented frame is 1,024 bytes (512 samples) paced every 32 ms. Server sends `connected`, then speech/processing/transcript events.
- [Gnani TTS REST](https://docs.gnani.ai/api/TTS/tts-inference): `POST /api/v1/tts/inference`; the preferred `timbre-v2.5` model remains documented.
- [Gnani realtime TTS](https://docs.gnani.ai/api/TTS/tts-websocket): `wss://api.vachana.ai/api/v1/tts`; authenticated JSON request; audio chunks arrive before a final `complete` message. The client may close the connection.
- [Gnani voice catalog](https://docs.gnani.ai/api/TTS/available-voices): v2.5 model-specific voices and preferred-language mappings.
- [Gnani TTS language/model reference](https://docs.gnani.ai/api/TTS/tts-websocket#request-parameters): includes ten Indian language codes and `hi-en` Hinglish. [STT language reference](https://docs.gnani.ai/api/STT/stt-websocket#supported-languages) lists its configured BCP-47 codes.

Documentation describes the wire protocols. The following probes establish behavior for this account on the date above; they are not quality certification or a guarantee of continued service.

## REST STT/TTS language intersection

For each language, the probe requested a short fictional phrase from its official v2.5 voice using 16 kHz mono PCM WAV, then sent the in-memory WAV to STT REST with the matching `language_code` and `format=verbatim`. All TTS calls returned HTTP 200 `audio/wav`; all STT calls returned HTTP 200, `success: true`, and a nonempty transcript.

| Language | Code | Timbre v2.5 voice | TTS | STT | Sanitized loopback observation |
|---|---|---|---|---|---|
| Bengali | `bn-IN` | Kirra | PASS | PASS | Bengali-script greeting and thanks transcribed. |
| English (India) | `en-IN` | Kaveri | PASS | PASS | “hello this is a fictional test”. |
| Gujarati | `gu-IN` | Falak | PASS | PASS | Gujarati-script greeting transcribed. |
| Hindi | `hi-IN` | Nalini | PASS | PASS | Hindi-script greeting and test phrase transcribed. |
| Kannada | `kn-IN` | Saanvi | PASS | PASS | Kannada-script greeting transcribed. |
| Malayalam | `ml-IN` | Reshma | PASS | PASS | Malayalam-script greeting transcribed. |
| Marathi | `mr-IN` | Zahira | PASS | PASS | Marathi-script greeting transcribed. |
| Punjabi | `pa-IN` | Mehuli | PASS | PASS | Gurmukhi greeting transcribed. |
| Tamil | `ta-IN` | Asmita | PASS | PASS | Tamil greeting and test phrase transcribed. |
| Telugu | `te-IN` | Suhana | PASS | PASS | Telugu-script greeting transcribed. |

For the seven languages probed after the Hindi/Tamil/English samples, actual PCM duration was computed from decoded PCM bytes, rate, channels, and sample width (1.76–2.56 seconds). The returned WAV header's declared frame count was anomalous and overstated the duration; the header-derived duration was discarded. No latency or speech-quality conclusion is drawn from these short REST checks. Synthetic TTS-to-STT loopback verifies route/model/language acceptance and basic recognizability of generated phrases, not independent human speech recognition or competent native-language quality.

## Hindi-English code-mixed probe

Timbre v2.5 voice `Poorvi`, language `hi-en`, synthesized a short Roman/Devanagari mixed fictional phrase containing “claim status”. STT REST returned success for both explicit `hi-IN` and `en-IN` requests. Hindi transcription rendered the English phrase in Devanagari; English transcription rendered the utterance in Latin transliteration. This confirms the tested TTS Hinglish route and that both configured STT routes accept this one synthetic mixed sample. It does **not** establish automatic STT language detection, robust code-switching accuracy, or a distinct `hi-en` STT mode.

## Realtime and interruption feasibility probes

- **TTS WebSocket completion:** authenticated to the documented endpoint, sent a fictional Hindi utterance, received `start`, 899 nonempty `audio` chunks (about 1.70 MB decoded in memory), and the terminal `complete` message. Time to first audio was approximately 0.281 seconds in this single diagnostic run; it is not a latency target or benchmark.
- **Client close during TTS:** a second synthesis stream returned its first audio chunk; the client then closed the WebSocket. This demonstrates that the client can stop receiving/accepting further output by closing its transport. Whether the provider cancels generation or charges the remaining synthesis was not documented or verified. No audible playback device was involved.
- **Realtime STT interruption phrase:** authenticated to `/stt/v3/stream`, got `connected` with 16 kHz / 512-sample chunk configuration, sent 1,024-byte PCM frames paced at 32 ms plus 512 ms silence, and received `speech_start` and the matching Hindi transcript for “रुकिए, मुझे एक सवाल पूछना है।” The speech was a short synthetic phrase generated in memory, not a human microphone capture.

Together these results establish that account-accessible streaming TTS and realtime STT routes can provide the transport pieces for a spoken interruption flow, and that a client can stop consuming TTS by closing its socket. They do not prove simultaneous browser playback/microphone barge-in, cancellation of remote generation, typed interruption behavior, or end-to-end app behavior. Those remain implementation/acceptance checks in the original downstream tasks, particularly T40/Z05; this decision does not remove them.

## Competent human-review coverage (owner report)

The user supplied these availability facts. “Unsure” and omitted-from-chat data are not treated as available.

| Language | Reviewer availability reported |
|---|---|
| Bengali | Unsure |
| English | Available |
| Gujarati | Unsure |
| Hindi | Available |
| Kannada | Unsure |
| Malayalam | Unsure |
| Marathi | Unsure |
| Punjabi | Available |
| Tamil | Unavailable |
| Telugu | Unavailable |

Thus only English, Hindi, and Punjabi have a confirmed competent reviewer at this checkpoint. Bengali, Gujarati, Kannada, Malayalam, and Marathi require confirmation; Tamil and Telugu currently have no reviewer. Each language's final human-journey task remains TODO and must record/resolve this gate; no human acceptance pass is claimed here.

## Decision audit

- **Documented candidate/common intersection:** ten codes `bn-IN`, `en-IN`, `gu-IN`, `hi-IN`, `kn-IN`, `ml-IN`, `mr-IN`, `pa-IN`, `ta-IN`, `te-IN`; **live TTS and matching STT passed for all ten** with the listed v2.5 voices. Tamil is included and technically available in this probe.
- **Code-mix:** one `hi-en` TTS phrase recognized by both explicitly configured Hindi and English STT routes; robust quality remains unverified.
- **Account:** 5,000 free credits / 31 Dec 2026 expiry / paid overage disabled, reported by the account owner; positive route access verified. Do not imply the amount was returned by the API.
- **Identity:** speech auth uses the documented API key header. No project ID or other account identifier was required by inspected docs/responses.
- **Known blockers/limits:** human reviewers are not available or confirmed for every language; provider-side cancellation, simultaneous audible/browser barge-in, typed barge-in, and human voice/ASR quality remain unverified. These are explicit blockers for downstream acceptance, not hidden assumptions.
- **Scope:** no product requirement, endpoint, language, or existing task was added or removed. Z05 is expanded only as required by its existing task definition, one TODO per verified language.

Outcome: T03's bounded research probes and documentary DoD pass with the above limitations and downstream blockers recorded. The research decision is complete; human journey acceptance is not. No later execution-map task was started.
