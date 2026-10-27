# D11 — OpenAI access and resource preflight

Task: T04 / D11. Updated: 2026-10-26 (Asia/Calcutta). No credential values are present in this record.

## Current local access checks

| Check | Result |
|---|---|
| Root `.env` exists | Yes |
| `OPENAI_API_KEY` name in root `.env` | Yes; presence only, value not displayed |
| `OPENAI_BASE_URL` | Not configured; official `api.openai.com` host used |
| `OPENAI_API_KEY` in Process/User/Machine environment | No (not needed because the ignored root `.env` contains it) |
| OpenAI account connector | None in tool inventory |
| Official `GET https://api.openai.com/v1/models` with configured key | HTTP 200; 133 model records returned |
| Candidate IDs in live model list | `gpt-6-luna`, `gpt-5-mini`, `gpt-5.4-mini`, and `gpt-5-nano` present |
| Generation request or prompt submitted | No |
| Current account credit/expiry, prepaid-vs-monthly status, auto-recharge status, hard-limit scope | NOT VERIFIED |

This is an availability listing only; it does not establish that a model is suitable, priced within the available balance, or protected from paid overage. The user requested a small, inexpensive model such as GPT Mini and reports a `$5` hard limit that must not be changed. The scope of that limit (organization or project), current remaining credit/expiry, billing mode, and auto-recharge setting remain unverified.

The official [GPT-6 Luna model page](https://developers.openai.com/api/docs/models/gpt-6-luna) describes it as the most efficient model for focused/high-volume tasks, supports the Responses endpoint, and lists standard text pricing of `$0.10` per million input tokens and `$0.50` per million output tokens. The live model list confirms it is enabled for this API key. The official [GPT-5 Mini model page](https://developers.openai.com/api/docs/models/gpt-5-mini) marks GPT-5 Mini as **Deprecated**, despite the API listing it. Therefore GPT-6 Luna is the preferred candidate matching the user's cost preference; final selection and generation probe await billing safeguards. The `$5` hard limit will not be changed.

The `GET /v1/models` call follows the [official Models API reference](https://developers.openai.com/api/reference/models/list) and [API authentication guidance](https://developers.openai.com/api/docs/api-reference/overview#authentication). The key was loaded directly from `.env` in a short-lived process, sent only to the documented official OpenAI API host, and never logged, passed as a command-line argument, or written into a record. The endpoint returned no generation output or usage object; no claim about a zero account charge is made.

## Official billing and safety findings

- [OpenAI prepaid API billing](https://help.openai.com/en/articles/8264644-setting-up-and-managing-prepaid-api-billing) explains that free credits are consumed before purchased credits, and during processing delay after balance exhaustion usage can produce a negative balance. It says prepaid usage stops on exhaustion subject to that delay. During prepaid setup, automatic recharge is on by default and can be turned off; a monthly recharge limit controls recharge purchases, not API usage.
- [OpenAI API usage and spend limits](https://help.openai.com/en/articles/6614457-troubleshooting-api-usage-and-spend-limits) distinguishes notification-only spend alerts from hard spend limits. It states enforcement is not instantaneous and recorded spend can slightly exceed a configured limit.
- The official [API overview](https://developers.openai.com/api/docs/api-reference/overview#authentication) says bearer API keys are secrets and should be loaded from server-side environment/configuration. It documents organization/project headers for requests when a user belongs to multiple organizations or uses legacy user keys; the successful model-list request required no extra identifier.

These official policies mean a displayed credit balance or spend alert alone does not prove the user's no-out-of-pocket constraint. The account's actual billing mode, current balance/expiry, automatic recharge and organization/project controls must be checked before a generation request. This record does not infer that prepaid credit exhaustion is a hard instantaneous zero-charge cutoff.

## Exact unresolved input and verification

The user has now configured the API key, and authentication/catalog access succeeds. However, no current dashboard evidence was supplied for:

1. Current remaining API balance/allowance and expiry if shown.
2. Whether the account uses prepaid or monthly billing.
3. Whether automatic recharge is disabled.
4. Organization and project hard spend-limit values (and whether the key's project is the one covered).

The earlier SPEC `$5` credit is a report of a previous balance, not proof of the current remaining balance or billing controls. The user's later `$5` hard-limit report is recorded as owner-reported; its scope and recharge interaction are not yet confirmed. Because OpenAI documents delayed balance enforcement, a bounded generation probe cannot safely run until current credit and recharge conditions are confirmed. No zero-cost claim or hard-stop guarantee is used.

**Still NOT RUN:** current official model pricing/terms comparison for a final model choice; bounded fictional-text generation; spend/balance dashboard validation; observed generation errors; application timeout/retry behavior. No application exists yet, so application-level state-preservation and error fallback tests remain future implementation checks, not inferred passes.

Resume only after the non-secret dashboard fields above are provided. T04 remains Pending. Do not start T05-T10 before T04 verification passes.
