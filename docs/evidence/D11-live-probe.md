# D11 — Authenticated model and bounded response evidence

Task: T04 / D11. Date: 2026-10-26 (Asia/Calcutta). No credential values are recorded.

## User-reported account facts

The user reports a `$5` project-specific hard limit, says this is the only project they use, and gives 1 Jan 2028 as the expiry date. The user instructed that the limit not be changed and said to proceed. These facts were not independently verified against a billing dashboard. Current balance, prepaid/monthly billing mode, automatic recharge status, and exactly what the expiry date refers to are unknown. No billing settings were changed. The user accepts use of the dedicated project within the reported limit; this is not a claim that OpenAI's enforcement is instantaneous.

## Official-source checks

- [GPT-6 Luna model documentation](https://developers.openai.com/api/docs/models/gpt-6-luna): describes GPT-6 Luna as its most efficient model for focused/high-volume tasks, lists Responses (`v1/responses`) as supported, and publishes standard text rates of `$0.10` per million input tokens and `$0.50` per million output tokens. The API model list for this key had previously returned HTTP 200/133 entries and included `gpt-6-luna`.
- [GPT-5 Mini model documentation](https://developers.openai.com/api/docs/models/gpt-5-mini): prior review found it marked deprecated, so the current enabled GPT-6 Luna model was selected.
- [API authentication guidance](https://developers.openai.com/api/docs/api-reference/overview#authentication): API keys are bearer secrets and should remain server-side. The prior successful authenticated model-list request needed no organization/project header.
- [Prepaid API billing](https://help.openai.com/en/articles/8264644-setting-up-and-managing-prepaid-api-billing): explains free credits are used before purchased credits, automatic recharge is a separate setting, and access may not stop immediately at zero; usage during processing delay can create a negative balance.
- [API usage and spend limits](https://help.openai.com/en/articles/6614457-troubleshooting-api-usage-and-spend-limits): organization and project hard limits are separate from approved usage limits; enforcement is not instantaneous and recorded spend can slightly exceed the configured limit.
- [OpenAI API error codes](https://developers.openai.com/api/docs/guides/error-codes) and [rate limits](https://developers.openai.com/api/docs/guides/rate-limits): consulted for error interpretation and retry policy. The product implementation will not blindly replay an ambiguous timed-out generation.

## Bounded live response probe

One fictional, non-sensitive prompt was sent via authenticated `POST https://api.openai.com/v1/responses` with model `gpt-6-luna`, `reasoning.effort=none`, `store=false`, and `max_output_tokens=24`. The local client timeout was 25 seconds. The key was read directly from `.env` by a short-lived Python process; it was not printed, logged, passed on the command line, or written to disk. No tools, web search, real user information, or project data were included.

| Result | Observation |
|---|---|
| HTTP / response | 200 / `completed` |
| Model | `gpt-6-luna` |
| Output | `probe ok` |
| Usage | 15 input, 6 output, 21 total tokens; 0 reasoning tokens |
| Elapsed time | 4.52 seconds |
| Published-rate estimate | `(15 × $0.10 + 6 × $0.50) / 1,000,000 = $0.0000045` before account adjustments |
| Retry | None |

This verifies one authenticated generation and model availability at the time of the probe only. It does not establish the account balance, credit expiry, recharge mode, maximum possible charge, or a hard no-overage guarantee.

## Verification outcome

PASS for T04's documentary/research DoD: enabled low-cost model selected and exercised; published rates and user-reported project limit recorded; official provider overage caveats preserved; no app caps or billing setting changes; state-preserving error/timeout and no-ambiguous-retry behavior defined in D11. Exact application timeouts and state tests are deferred to future implementation tasks, since no application implementation exists yet.
