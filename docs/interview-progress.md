# Interview progress: AI Health Insurance Advisor for Indian users

Checkpoint date: 2026-10-24 (Asia/Calcutta).

## Status and resume instructions

- Phase: DEFINE / interview-me. Interview is ongoing; this is a checkpoint, not a specification or final statement of intent.
- The user explicitly requested this file and a return to the exact pending question after saving it.
- Do not restart the interview, create SPEC.md, design architecture, create implementation tasks, or write application code.
- The original instruction deferred final stack selection, but the user later explicitly requested technical recommendations and accepted a preferred stack. Preserve that later decision without treating it as authorization to implement.
- Ask only one important question at a time, with the assistant's guess attached. Explain unfamiliar distinctions simply. If an answer is vague, clarify rather than silently deciding.
- If the user does not know, offer 2–3 realistic options, explain trade-offs, recommend one for the MVP, and let them choose.
- Keep MVP, nice-to-have, and future scope distinct. Do not silently turn this into a production insurance platform.
- A prior attempt to confirm the whole intent was explicitly rejected because technical constraints and UI/UX had not been explored. There is no final confirmation of the complete product intent.
- Current confidence: **80%** (assistant estimate, not user approval). Core journey, UI direction, and preferred technologies are substantially understood. Persistent storage, hosting/access details, exact plan data, coverage and ranking rules, and language/test inventory still prevent a precise implementation-ready specification. The last confidence explicitly stated before this checkpoint was approximately 75%.

## Project goal

Build a hackathon MVP that helps Indian users understand health insurance, obtain an explainable shortlist, compare options, and understand how hypothetical hospitalization claims work before buying. Use natural multilingual voice and text, with interruption handling and continuity of collected answers.

The primary outcome is an informed choice among up to 2–3 ranked real plans, not a completed purchase or a guarantee of claim approval. Explain the catalogue's limitations.

## Confirmed answers and decisions, in interview order

This ledger preserves substantive answers, including changes to earlier suggestions. A short “yes” is recorded against the specific proposal it followed; interpretation-sensitive cases are called out below rather than upgraded to certainty.

| # | Topic | User answer / accepted decision |
|---|---|---|
| 1 | Primary persona | First-time buyer aged 28–40, buying for self, spouse, and possibly a child; more comfortable in Hindi-English than reading policy documents. |
| 2 | Main outcome | Accepted a shortlist of suitable plans with understandable reasons; added claim-process education because users worry whether hospitalization claims will be approved. |
| 3 | Claim boundary | Confirmed hypothetical hospitals/hospitalization and education before purchase only; not assistance with an actual ongoing claim. |
| 4 | Plan authenticity | Wants a small curated set of real plans, provided reliable policy documents can be obtained. |
| 5 | Premiums | Accepted clearly labeled indicative premiums, with final price and eligibility requiring insurer confirmation. No live insurer quotation requirement was established. |
| 6 | Time constraint | Three days remain for building. |
| 7 | Language scope | Hindi-English is the demo language, but all languages provided by the relevant Gnani services must be available, including Tamil. |
| 8 | Language testing | Rejected making other languages experimental merely to reduce scope; explicitly required testing all supported languages. |
| 9 | Depth of language tests | After clarification, accepted a full journey test rather than only checking that STT and TTS work. |
| 10 | Human evaluators | Answered yes to having access to people who can assess the supported languages. Availability and coverage per language have not been verified. |
| 11 | Ending / next action | End with understanding suitable insurance; agreed to a side-by-side comparison on the website, with an optional official insurer link. “Competition” was clarified as “comparison.” |
| 12 | Ranked results | Wants 2–3 plans in descending order of fit to the customer's needs/preferences. |
| 13 | Customer priorities | Explicitly said lowest price should rank first when that is the customer's priority, even if another plan offers more protection. |
| 14 | Trade-offs | Confirmed explaining every relevant trade-off and respecting the customer's subsequent choice. |
| 15 | Unsure customer | Accepted a default emphasizing plans within budget that fit family/disclosed health needs with fewer major restrictions, explained to the user; customer can change priorities. |
| 16 | Coverage guidance | Accepted suggesting coverage and allowing adjustment; did not accept city-tier figures as verified rules. Family circumstances and affordability should inform it. |
| 17 | Coverage options | Clarified and confirmed offering 2–3 sum-insured choices to an unsure user, explaining them, suggesting one, and continuing with the user's choice. These precede the final plan shortlist. |
| 18 | Unknown budget | Accepted showing indicative premium ranges to help the user choose an affordable annual budget. |
| 19 | Entry paths and continuity | Wants both form onboarding and direct conversation/questions, with voice/text switching that preserves collected answers. |
| 20 | Separate form | Confirmed a separate “Fill in my details” alternative; both paths feed the same recommendation journey and the advisor asks for missing information only. |
| 21 | Question interruptions | Accepted brief explanations with simple examples and a natural return to the interrupted flow; check comprehension when confusion is expressed rather than repeatedly asking after every answer. |
| 22 | Dummy data and recording | Explicitly said to record everything because identities and health information in the hackathon will be dummy data. Later narrowed recording through the exchange described below. |
| 23 | Budget | Explicitly said no money will be spent on this project beyond available credits; zero additional out-of-pocket spending is a firm requirement. |
| 24 | Existing API balances | Has Gnani credits and $5 of OpenAI API credit for text/reasoning. Exact Gnani balance, expiry, and account access are not verified. |
| 25 | Recording interpretation | Answered “yes” after a two-option recording question whose attached guess was to save transcripts, answers, and recommendations locally, with microphone audio temporary. Assistant explicitly restated that interpretation in the following turn; the user did not correct it. Treat as the working interpretation, with confirmation sensitivity noted below. |
| 26 | Plan-data acquisition | Said plan research would be discussed later and emphasized not knowing how to obtain the insurance data. No policy documents or insurer API access were supplied. |
| 27 | Catalogue size | Accepted a curated catalogue but increased the proposed 5–6 plans to **8–9**, provided this requires no extra expenditure. |
| 28 | Audience breadth | Rejected restricting recommendations to buyer/spouse/children only; wants selected plans to cover different kinds of people and situations. This is an aspiration, not established universal coverage. |
| 29 | No catalogue match | Proposed live search to discover plans outside the catalogue. |
| 30 | External result status | Accepted showing outside-catalogue plans as additional options to investigate with official links, not verified ranked recommendations. Eligibility, premiums, and restrictions must not be assumed from a search hit. |
| 31 | Recommendation method | Accepted hybrid behavior: fixed rules check eligibility and rank catalogue plans; AI collects details, handles conversation, and explains documented results. |
| 32 | Preferred insurer | Start with the preferred insurer. If it does not meet requirements, explain the gaps and ask before offering alternatives. Do not be stubborn if an informed user still wants that insurer's eligible plans. |
| 33 | Hard eligibility | Explicitly confirmed that documented eligibility rules must be enforced regardless of insurer preference; do not suggest a known-ineligible plan. |
| 34 | Medical detail depth | Accepted collecting condition names per person first and asking extra medical questions only if needed for a documented plan rule; insurer medical assessment can still be required. |
| 35 | Spoken interruption / barge-in | Accepted stopping the advisor's speech when the user interrupts, addressing the question, then resuming naturally. |
| 36 | Recognition errors | Accepted an editable confirmation summary of ages, conditions, budget, and coverage before recommendations, with immediate clarification of uncertain speech rather than confirmation after every utterance. |
| 37 | Language change | Accepted automatic continuation in a newly used language without losing the session, with a visible selector to correct detection mistakes; ordinary English insurance terms should not force a full language switch. |
| 38 | Demo duration | Explicitly chose **2–3 minutes**, rather than the proposed five-minute demo. |
| 39 | Demo setup | Accepted a clearly labeled prefilled dummy family profile, with live voice confirmation/changes, a claim question, and the final comparison. An empty-profile journey still exists separately. |
| 40 | Deployment intent | Said “only laptop but I will host my project”: presentation from laptop plus a hosted project. Exact hosted feature parity is not established. |
| 41 | Live access | Accepted limiting live AI use to the builder and invited testers rather than unrestricted public usage that could exhaust credits. Method remains undecided. |
| 42 | Family policy structure | Accepted separate policies for different family members where documented rules require them, clear identification of who is covered, and no complex optimization of combinations. |
| 43 | Coverage formula | Accepted postponing the exact formula until reliable evidence and selected plans are reviewed. City-tier ₹15L/₹20L/₹25L figures are not adopted rules. |
| 44 | Demo health condition / waiting periods | Responded to a proposed one-condition demo by saying “yes consider all the edge cases on waiting period.” Waiting-period handling is important; this does not finalize the exact demo condition. |
| 45 | New purchase boundary | Accepted new policy purchases only; renewals, portability, and previous-policy waiting-period credit outside the recommendation MVP. |
| 46 | Profile minimization | Accepted first name/nickname, relationship and age per person, city/PIN code, disclosed conditions, budget, coverage, and preferences; extra fields only if documented eligibility/pricing requires them. No Aadhaar, PAN, contact details, full address, or medical-document collection for the demo. |
| 47 | Latency | After a three-second proposal was clarified, user preferred **two seconds**. Assistant described this as an ordinary-reply target from end of user speech to start of advisor speech, not a verified guarantee; searches may take longer. |
| 48 | Failure behavior | Accepted preserving state and explaining failures; text fallback when speech fails but reasoning still works. If reasoning is unavailable, show collected profile/completed results instead of inventing answers. |
| 49 | Language acceptance checks | Accepted each language test covering completion, correction of a misheard detail, a claim-question interruption, and correctly explained shortlist, with no invented policy facts or claim guarantees. Record response times and fix material errors before calling a language passed. |
| 50 | Saved-record access | Explicit answer: **“only me.”** No public transcript/history access or one tester viewing another tester's session. |
| 51 | Interview not complete | Rejected the first closing restatement; specifically asked why tech stack and UI/UX had not been explored. Continue interviewing. |
| 52 | Starting point | Answered yes to starting from scratch (assistant's explicit interpretation). No existing app/starter template has been identified. |
| 53 | Technical selection process | Asked the assistant to recommend frontend and backend technologies rather than naming familiar technologies. Team experience is still unknown. |
| 54 | Preferred stack | Accepted React + TypeScript + Vite + Tailwind frontend and Node.js + TypeScript + Express backend. Gnani for speech and OpenAI API for reasoning remain preferred; exact OpenAI model is not selected. |
| 55 | Main workspace | Asked for options, then explicitly selected **option 3: Advisor workspace**. Conversation left; updating profile/coverage information right; right side becomes comparison when ready. Phone sections stack. |
| 56 | Visual style | Explicitly selected **A: calm and trustworthy**, light background, teal/navy accents, clear typography, restrained animation/subtle voice activity indicator. |
| 57 | Transcript UI | Accepted showing full conversation messages, latest message visible, important captured details in the profile panel, and text input available. |
| 58 | Results detail | Accepted concise plan summaries first, expandable policy details/source documents. Upfront summary: indicative annual premium, sum insured, ranking reason, key trade-offs. |
| 59 | Welcome page | Accepted a short welcome page with language selector, “Talk to the advisor,” and “Fill in my details,” plus fictional-data/demo notice; workspace reachable in one click. |
| 60 | Search remains required | Rejected replacing automatic live search with static official insurer links if no free provider had been found: “no figure out for search.” |
| 61 | Search provider | After official-source research, accepted **Tavily free plan** for external search, subject to account access and testing; no payment card/additional spending intended. |

## Consolidated MVP decisions

### Experience and journey

1. Short welcome page, language choice, fictional-data notice, and form or conversation entry.
2. Users may ask an insurance question before entering details.
3. Advisor workspace shows conversation and updating profile, with voice/text switching that retains answers.
4. Collect missing family, health, location, affordability, coverage, and preference information.
5. Help unsure users with indicative price ranges and 2–3 explained coverage choices.
6. Confirm an editable profile before recommendations; clarify uncertain recognition.
7. Show up to 2–3 ranked catalogue options with reasons and trade-offs; do not force three genuine matches where fewer exist. The assistant proposed this fewer-results behavior and the user did not explicitly dispute it; exact minimum-result behavior is not independently confirmed.
8. Allow plan questions and hypothetical claim explanations, including interruption and resumption.
9. Let users inspect details and optionally visit the official insurer website. No purchase flow.
10. If catalogue fit is unavailable, use external search for clearly distinguished, unverified options to investigate.

### Recommendation principles

- Hard documented eligibility takes precedence over preferences.
- Customer priorities determine ranking within the applicable eligible set. Cheapest-first is allowed when requested, with restrictions clearly explained.
- A lowest-price match must not be described as universally best protection. The assistant proposed “lowest-price match” wording; exact UI labels remain unconfirmed.
- Default for unsure users: family/health fit, affordability, and fewer significant restrictions; no numerical scoring or tie-breakers agreed.
- Preferred insurer first; ask before alternatives. Respect an informed preference among eligible options.
- Explain trade-offs; avoid guarantees of acceptance, final pricing, cashless access, or claim payment.
- New-purchase assessment only. Waiting-period completion alone does not establish a payable claim.
- Exact coverage rules are postponed, not implicitly approved. No city-tier-only formula has been adopted.

### Voice and language behavior

- Gnani Prisma V2.5 STT and Timbre V2.5 TTS; OpenAI API reasoning using existing credit.
- Full testing in every language actually supported by the selected speech endpoints; Hindi-English is the main demo.
- Automatic language changes and code switching, manual language correction, persistent context.
- Barge-in: stop speaking and listen, answer, then resume.
- Brief explanations with simple examples; confirm understanding when confused, rather than adding a check after every answer.
- Ordinary response-start target: about two seconds, to be measured. No confirmed percentile, hard cutoff, or demonstrated performance.
- Preserve profile and completed results through service errors; text fallback when possible.

### User data and records

- Dummy data only; minimal profile fields as in ledger item 46.
- Save transcripts, collected answers, and recommendations, working interpretation: do not retain microphone audio.
- Only the builder can review saved records.
- No customer account/history dashboard has been established; a full dashboard was proposed as outside scope, not separately confirmed.
- Whether hosted sessions must also be saved is the exact pending question. No database, storage location, retention period, export format, or deletion workflow is selected.

### UI/UX and preferred technologies

- React, TypeScript, Vite, Tailwind CSS frontend.
- Node.js, TypeScript, Express backend.
- Two-panel advisor workspace for laptop; stacked responsive layout on phones. Mobile behavior beyond that is not fully specified.
- Light theme with teal/navy accents; readable text and subtle animation.
- Full transcript; editable profile; compact plan summaries and expandable restrictions/source details.
- These are preferred technologies and interface directions, not a completed architecture or authorization to scaffold.
- OpenAI exact model, storage/database, hosting provider, access mechanism, analytics, UI component library, and voice selection remain undecided.

### Demo and resource constraints

- Three-day build window; exact submission date not established by the user.
- No additional out-of-pocket spend. User reports Gnani credits and $5 OpenAI API credit.
- Hosted project, presented from laptop; restricted live access for builder/invited testers.
- Main demo 2–3 minutes, prefilled dummy profile allowed, live voice interaction and final ranked comparison.
- A claim interruption and profile confirmation/change are agreed demo elements. Exact scripted family details, condition, language switch, and judge-facing narrative remain unsettled.
- Two-second reply start and full multilingual testing are requirements/targets to evaluate, not achieved results.

## Initial brief: preserve as proposed scope, not blanket confirmation

The initial user explicitly said the idea was evolving. These items must not silently become settled specifications:

- Suggested intake included name, people count, ages, PIN/city, diabetes, blood pressure, asthma, cholesterol, heart conditions, other, none, annual budget, sum insured, and preferred insurer. Later answers narrow required data; exact disease vocabulary, medical follow-ups, and validation rules still need agreement.
- Concept education requested: room-rent limits, cashless claims, reimbursement, waiting periods, co-pay, deductibles, pre-existing disease coverage, network hospitals, sum insured, restoration. This is user-requested scope, but depth and acceptance examples per topic are not finalized.
- Plan attributes proposed: premiums, sum insured, room rules, waiting periods, co-pay, hospitals, restoration, claim-settlement information, disease-specific limits. The final required schema and whether reliable claim-settlement measures are useful remain open.
- Initial city-tier coverage assumptions were ₹15 lakh / ₹20 lakh / ₹25 lakh; user agreed to challenge and defer them.
- Initial “all 13 languages” was not a verified language inventory. Determine the intersection of actual STT and TTS support, voice availability, and code-switch capability for the selected versions.
- Edge cases named initially: unknown budget/coverage, multiple diseases, senior citizens, low budget, unsuitable preferred insurer, no match, language changes, interruptions, recognition errors, inconsistent information. Several have broad behavior agreed; detailed rules and tests are incomplete.

## Important assumptions and interpretation-sensitive answers

1. Short “yes” answers often followed an assistant guess. They support that local decision, not every adjacent proposal or an overall product sign-off.
2. No retained microphone audio is a working interpretation of an ambiguous “yes,” followed by an explicit assistant restatement without correction. Do not interpret “record everything” as current permission for indefinite audio retention.
3. Starting from scratch was interpreted from a short yes. No existing application was inspected as part of the interview.
4. Human evaluators for all languages are reported available; no named testers, schedule, or per-language competence is established.
5. The primary persona remains first-time young-family buyers, but recommendation eligibility scope expanded to other ages/family members. Do not claim every situation is covered.
6. Reliable public documents can inform a small catalogue, but no actual 8–9-plan collection has been obtained or verified. Research examples are not selected products.
7. Indicative prices must be traceable to appropriate assumptions; no permission to fabricate personalized premiums.
8. Broad “fewer restrictions” intent does not define a deterministic scoring algorithm or medical underwriting. Unknown eligibility must remain uncertain until verified.
9. API balances and free allowances may constrain testing; no throughput, total cost, or two-second latency has been demonstrated.
10. No account, key, host, database, or Tavily signup has been created by the assistant during this interview.

## Contradictions, changes, and unclear points

- **Scope versus time/budget:** Three days, no additional spend, full-language journey testing, barge-in, external search, and broad buyer coverage are all desired. Feasibility is not proven; do not silently drop a requirement or guarantee delivery.
- **Persona versus breadth:** Young families are primary, but the user wants different people/situations supported. Exact age and family composition limits must follow curated data; full universal insurance advice is not feasible by assertion.
- **Suitability versus preference:** User prioritizes cheapest when requested; that does not eliminate hard eligibility. Distinguish preference fit from comprehensive protection in explanations.
- **Recording versus privacy:** Initial “record everything” evolved toward text-only retention and owner-only visibility. Provider-side processing/retention and any consent language remain unexamined.
- **Local records versus hosting:** Local saving was the working recommendation before hosting was discussed. Persistence for hosted sessions is unanswered; do not select local files or cloud storage on assumption.
- **Catalogue versus web search:** External search is required, but searched plans were accepted as unverified leads, not automatically equivalent to verified recommendations.
- **Original no-stack instruction versus later selection:** Later user explicitly asked for a stack recommendation and accepted it. No implementation authorization follows from this alone.
- **Comprehension checks:** Original brief requested a check after each interruption. Later accepted a less repetitive approach: simple examples and checks when confused. Preserve the later answer.
- **Waiting-period “all edge cases”:** Broad request followed by agreement to new purchases only. Exact exclusions, accident exceptions, optional reductions, and disease-specific interactions must be drawn from chosen documents; portability/continuity credit is out of scope.
- **No whole-intent confirmation:** The user said no to the first proposed completion. A later series of local yes answers is not final interview confirmation.

## Open questions and intentionally postponed decisions

### Immediate unanswered question

Do saved sessions need to include hosted-site use as well as laptop use? See the exact resume text below.

### Still needed before an implementation-ready specification

- Exact 8–9 plans, insurers, variants, UIN/policy versions, source documents, verification dates, and update policy.
- Defensible coverage suggestion rules and catalogue-supported amount options; applicability to individual/floater/separate-policy situations.
- Numerical ranking and tie-breaking rules; treatment of missing premium/eligibility fields, budget overshoot, and inconsistent customer priorities.
- Price sources and profile assumptions, taxes/discounts/add-ons, valid locations/ages, and how unknown medical loading is disclosed.
- Concrete language/voice inventory, supported code-switch pairs, human test coverage, and per-language failures.
- Hosting provider, free-tier conditions, streaming connection support, restricted access, and persistence requirements.
- Storage/database, retention/deletion, export needs, and owner review mechanism after the pending answer.
- Exact OpenAI model and usage controls within $5; Gnani balance/expiry and testing budget.
- Tavily account/key access and quota behavior; official-domain list, search-result presentation, and failure handling when search is unavailable/exhausted.
- Data sharing with Gnani, OpenAI, Tavily and any host; consent/notice text, minimal search query content, and avoiding disclosure of full profiles to search.
- Exact demo family/ages/city/health condition/budget, plan outputs, language-switch demonstration, and what runs live on laptop versus hosted site.
- Precise no-match, low-budget, unknown-health-info, multiple-condition, senior-citizen, and inconsistent-answer behaviors.
- Waiting-period test matrix and acceptable wording for uncertain claim scenarios.
- Definition of two-second target (measurement and acceptable distribution), search delay handling, and language-test evidence.
- Remaining UI detail: form steps, profile-edit interaction, phone layout, visible recording/listening/thinking/speaking/error states, accessibility/readability, and translated UI expectations.
- Brand/product name, optional final saved comparison/export, analytics and any owner dashboard: not decided; do not add by default.
- Team skills/capacity: user requested recommendations rather than reporting experience.

### Already outside the recommendation MVP

- Insurance purchase/payment or issuing a policy.
- Actual in-hospital claim management, claim submission/tracking, or promises of claim approval/cashless availability.
- Renewals, portability, and calculating previous-policy waiting-period credits.
- Complex optimization of multiple-policy combinations.
- Aadhaar/PAN, contact details, full addresses, and medical documents for the dummy recommendation demo.
- Unlimited anonymous live AI access.
- Automatic promotion of outside-catalogue search hits into verified rankings.

## Research checked during the interview (evidence, not user answers)

These pages support feasibility statements made during the interview. Terms must be rechecked when integrations are implemented. No supplied example insurer/plan is a final selection.

- HDFC ERGO official policy wording downloads: https://www.hdfcergo.com/download/policy-wordings/health
- HDFC ERGO prospectuses: https://www.hdfcergo.com/download/prospectus/health
- Niva Bupa download centre: https://transactions.nivabupa.com/pages/downloads.aspx
- Gnani API introduction: https://docs.gnani.ai/api/introduction/introduction — Prisma V2.5 STT, Timbre V2.5 TTS, live/streaming APIs. Exact common language set not yet extracted.
- Gnani challenge article: https://www.gnani.ai/ja-jp/resources/blogs/great-indian-ai-internship-challenge-2026 — advertises programme credits; this is not verification of the user's account balance or the user's exact event/deadline.
- Vite: https://vite.dev/guide/
- Express: https://expressjs.com/
- Tailwind with Vite: https://tailwindcss.com/docs/installation/using-vite
- Tavily pricing: https://docs.tavily.com/documentation/api-credits — checked 2026-10-24: 1,000 free monthly credits, no credit card required, basic search 1 credit and advanced search 2. Extraction can consume additional credits. Free allowance does not prove testing sufficiency.
- Tavily search: https://docs.tavily.com/documentation/api-reference/endpoint/search — supports domain restrictions and JavaScript integration.
- Next.js documentation was consulted during comparison, but **Next.js was not the selected stack**.

## Exact interview position

### Last completed question

“Shall we choose Tavily’s free plan for external search?”

User answer: “yes”.

Recorded decision: Tavily free plan selected, account access and actual result quality still to be tested.

### Exact next question to ask

“Do you need to review saved sessions from the hosted website as well as your laptop demo, or is saving only the laptop demo’s sessions enough?”

Attached guess from the interrupted turn:

“Both. That would mean choosing persistent storage with a free allowance and access restricted to you; saving files on a hosted server may not preserve them across restarts or deployments.”

**There is no answer to this question yet. Do not treat “both” as confirmed.** Resume here, then continue one question at a time without restarting.

## Required output when the interview is eventually complete

After sufficient clarity and explicit confirmation of a concrete intent restatement, deliver the user's requested handoff covering:

1. Product goal.
2. Target user.
3. Core problem.
4. Final MVP user journey.
5. MVP features.
6. Voice-agent behavior.
7. Recommendation rules.
8. Required user data.
9. Insurance-plan data required.
10. Integrations.
11. Privacy/security requirements.
12. Important edge cases.
13. Out-of-scope features.
14. Hackathon demo scenario.
15. Success criteria.
16. Remaining assumptions or unresolved questions.
17. Decisions intentionally postponed.

Do not create that final handoff as if confirmed now, and do not write SPEC.md during this checkpoint task.
