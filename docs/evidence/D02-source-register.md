# D02 — Official-source register and spot checks

Task: T02 / D02. Research date: 2026-10-26, Asia/Calcutta (+05:30). Decision: [D02.md](../decisions/D02.md). This Markdown register supports the decision; it is not the future application data/sources.json or full per-plan extraction.

## Source register

All eight selected wordings were retrieved directly from the URLs below into memory using Python urllib and pypdf. For every document, page count and SHA-256 were calculated, and the expected UIN was checked in the first two pages after whitespace normalization. Result: **8/8 PASS**. No PDFs, catalogue JSON, contact data or audio were saved.

Retrieval date is 2026-10-26 for all rows. Dates in download-page labels below describe that portal's applicability statement, not an invented PDF publication date. Browser search “published” labels were not used as effective dates.

### S01 — slot 1: my:Optima Secure / Optima Secure

- Selected identity: HDFC ERGO General Insurance Company Limited; UIN **HDFHLIP26058V082526**; stable ID **hdfc-ergo-optima-secure**.
- Official discovery: [insurer downloads](https://www.hdfcergo.com/download/policy-wordings/health).
- Wording: [official PDF](https://customer-portal-assets.hdfcergo.com/documents/PolicyWordings_myOptimaSecure-76673175551.pdf).
- Locator: PDF p.1 identity; pp.61–69 Annexure C plan chart; portal labels policies starting 02-Apr-2026 onwards.
- Retrieved: 69 physical PDF pages; expected UIN check PASS.
- SHA-256: `195eb0499db969c6789472e7f87ef1c72da110e2a8c7761ecb5add378fe964c1`.
- Status: selected identity/source verified for D02; full eligibility, restrictions, claim terms and premium extraction remain **M05**, not passed here.

### S02 — slot 2: Optima Restore / Base product (no named tier selected)

- Selected identity: HDFC ERGO General Insurance Company Limited; UIN **HDFHLIP26055V102526**; stable ID **hdfc-ergo-optima-restore**.
- Official discovery: [insurer downloads](https://www.hdfcergo.com/download/policy-wordings/health).
- Wording: [official PDF](https://customer-portal-assets.hdfcergo.com/documents/PolicyWordings_OptimaRestore-811520192624.pdf).
- Locator: PDF p.1 identity; portal labels policies starting 03-Mar-2026 onwards.
- Retrieved: 53 physical PDF pages; expected UIN check PASS.
- SHA-256: `0058f205f552a171befda30071681626d19b4f8f116baa986d6318b3dae66907`.
- Status: selected identity/source verified for D02; full eligibility, restrictions, claim terms and premium extraction remain **M06**, not passed here.

### S03 — slot 3: ReAssure 3.0 / Elite

- Selected identity: Niva Bupa Health Insurance Company Limited; UIN **NBHHLIP27059V022627**; stable ID **niva-bupa-reassure-3-elite**.
- Official discovery: [insurer downloads](https://transactions.nivabupa.com/pages/downloads.aspx).
- Wording: [official PDF](https://transactions.nivabupa.com/pages/doc/policy_wording/ReAssure30_Policy_Wordings.pdf).
- Locator: PDF p.1 identity; §4.2.1, §4.8 and p.62 Annexure V identify Elite; old indexed V01 is not this retrieved V02.
- Retrieved: 62 physical PDF pages; expected UIN check PASS.
- SHA-256: `73d8023f465e54350a408f29a3cbde581131568f70a1a39ee68994f81cc795a3`.
- Status: selected identity/source verified for D02; full eligibility, restrictions, claim terms and premium extraction remain **M07**, not passed here.

### S04 — slot 4: TATA AIG MediCare Premier / Premier product; base configuration

- Selected identity: Tata AIG General Insurance Company Limited; UIN **TATHLIP26052V052526**; stable ID **tata-aig-medicare-premier**.
- Official discovery: [insurer downloads](https://www.tataaig.com/downloads).
- Wording: [official PDF](https://www.tataaig.com/s3/tata_aig_medicare_premier_policy_wordings_781aa2fd94.pdf).
- Locator: PDF p.1 identity/footer; current downloads Policy Wordings section lists matching UIN.
- Retrieved: 60 physical PDF pages; expected UIN check PASS.
- SHA-256: `392feaeeb26cb9ec7f6addc3ed764291d9c9f16bf6c70f466d9f92f85db78960`.
- Status: selected identity/source verified for D02; full eligibility, restrictions, claim terms and premium extraction remain **M08**, not passed here.

### S05 — slot 5: Super Star / Base product; no separate Star Flexi bundle

- Selected identity: Star Health and Allied Insurance Company Limited; UIN **SHAHLIP27049V022627**; stable ID **star-super-star**.
- Official discovery: [insurer downloads](https://www.starhealth.in/downloads/).
- Wording: [official PDF](https://d28c6jni2fmamz.cloudfront.net/Policy_Super_Star_V_3_80e5dd8988.pdf).
- Locator: PDF cover and printed p.1: UIN plus POL/SS/V.5/2026; official Product List gives launch 26-May-2026.
- Retrieved: 67 physical PDF pages; expected UIN check PASS.
- SHA-256: `9b9e4ae76ad54ed77449011b4357eb5cbaa3081d9dc83f88e9c91d65b816e609`.
- Status: selected identity/source verified for D02; full eligibility, restrictions, claim terms and premium extraction remain **M09**, not passed here.

### S06 — slot 6: Super Health Insurance / Prime

- Selected identity: SBI General Insurance Company Limited; UIN **SBIHLIP24141V022324**; stable ID **sbi-general-super-health-prime**.
- Official discovery: [insurer downloads](https://www.sbigeneral.in/downloads).
- Wording: [official PDF](https://content.sbigeneral.in/uploads/Super_Health_Insurance_Policy_Wording_New_1512_1a70d6d07a.pdf).
- Locator: PDF p.1 footer; current active-products entry links policy, prospectus, Prime brochure and rate chart.
- Retrieved: 31 physical PDF pages; expected UIN check PASS.
- SHA-256: `78dea28e930c87dd594f6665ff5491bb68669741a32103fbc75ab5e741826ccb`.
- Status: selected identity/source verified for D02; full eligibility, restrictions, claim terms and premium extraction remain **M10**, not passed here.
- Complementary source S06A: [official prospectus](https://content.sbigeneral.in/uploads/Super_Health_Insurance_Prospectus_d913e89b45.pdf); linked under the same product in the insurer's download page.

### S07 — slot 7: Arogya Supreme / Plus

- Selected identity: SBI General Insurance Company Limited; UIN **SBIHLIP27036V022627**; stable ID **sbi-general-arogya-supreme-plus**.
- Official discovery: [insurer downloads](https://www.sbigeneral.in/downloads).
- Wording: [official PDF](https://content.sbigeneral.in/uploads/Arogya_Supreme_Policy_Wordings_w_e_f_10th_July_2026_1237d56950.pdf).
- Locator: PDF p.1 footer; current downloads labels effective 10-Jul-2026; matching prospectus pp.4–8 names Plus.
- Retrieved: 29 physical PDF pages; expected UIN check PASS.
- SHA-256: `564a77d69c2c85da6f2bf21e8ded1b501cfc2e79d7852b489ead6d8d9e06d0f2`.
- Status: selected identity/source verified for D02; full eligibility, restrictions, claim terms and premium extraction remain **M11**, not passed here.
- Complementary source S07A: [official prospectus](https://content.sbigeneral.in/uploads/Arogya_Supreme_Prospectus_w_e_f_10th_July_2026_539dcbb0b6.pdf); linked under the same product in the insurer's download page.

### S08 — slot 8: Easy Health / Standard

- Selected identity: HDFC ERGO General Insurance Company Limited; UIN **HDFHLIP26054V102526**; stable ID **hdfc-ergo-easy-health-standard**.
- Official discovery: [insurer downloads](https://www.hdfcergo.com/download/policy-wordings/health).
- Wording: [official PDF](https://customer-portal-assets.hdfcergo.com/documents/PolicyWordings_EasyHealth-114935539788.pdf).
- Locator: PDF p.1 identity; p.21 Standard/Exclusive table and p.42 Standard premium illustration; portal labels policies starting 03-Mar-2026 onwards.
- Retrieved: 52 physical PDF pages; expected UIN check PASS.
- SHA-256: `8bc1e390905fb2bb29723b0b04f81af8eda98fe35e392be2433fdcae2ecf4760`.
- Status: selected identity/source verified for D02; full eligibility, restrictions, claim terms and premium extraction remain **M12**, not passed here.

## Provenance and material spot checks

| Check | Official evidence and observation | Outcome / limit |
|---|---|---|
| Current HDFC versions | [Health wordings directory](https://www.hdfcergo.com/download/policy-wordings/health) links S01 (02-Apr-2026), S02/S08 (03-Mar-2026); each downloaded PDF has the selected UIN. | PASS for identity/version selection. The directory's generic footer still shows an older Optima Secure UIN; use the specific linked document and applicability label, not the generic footer. |
| Optima Secure variant columns | S01 physical p.61, Annexure C. In-memory PyMuPDF render was visually inspected. Optima Secure and Optima Secure + occupy separate columns under the same UIN. The selected Optima Secure geography cell says India only. | PASS: known field has a precise column/page. Do not merge benefits from the adjacent tiers. No full benefit inventory accepted here. |
| Optima Restore identity | S02 physical p.1. | PASS: exact product/UIN. New-business, family and rating conditions still require M06 extraction. |
| ReAssure mutable URL | S03 physical p.1 gives NBHHLIP27059V022627; the [official download center](https://transactions.nivabupa.com/pages/downloads.aspx) links ReAssure 3.0. Search snippets had retained NBHHLIP26047V012526 for the same URL. | PASS: live PDF selected; cached snippet discarded as a version source. This demonstrates why URL/hash and content version must all be recorded. |
| ReAssure Elite | S03 §4.8 and physical p.62 Annexure V distinguish Elite from Classic/Select. | PASS: named variant exists. Room-category co-pay is conditional, not a blanket “zero co-pay” fact. Full terms remain M07. |
| TATA AIG identity | [Downloads](https://www.tataaig.com/downloads), Policy Wordings section, and S04 p.1 match TATHLIP26052V052526. | PASS. An older searchable [wording](https://www.tataaig.com/s3/Tata_AIG_Medi_Care_Premier_2f02f3813c.pdf) identifies TATHLIP21257V022021; do not mix versions. |
| Super Star / CDN provenance | [Star downloads](https://www.starhealth.in/downloads/) links S05 in Policy Clause and [prospectus](https://d28c6jni2fmamz.cloudfront.net/Prospectus_Super_Star_V_1_without_Premium_Chart_Single_Page_25b70db850.pdf); [official product list](https://www.starhealth.in/list-products/) identifies the same UIN with launch 26-May-2026. | PASS: insurer-linked CDN accepted. Filename V_3 differs from printed POL/SS/V.5/2026; document content and hash identify the retrieved revision. |
| Super Health Prime | [Active downloads](https://www.sbigeneral.in/downloads) links S06, S06A and a [Prime brochure](https://content.sbigeneral.in/uploads/bf19a1643e924df89d3d8adb88157c32.pdf). S06A §B.1 on p.1 documents adult minimum entry age 18 years; p.20 identifies Prime among tiers. | PASS for sample known-age/identity checks only, not complete family eligibility. Do not apply a different tier's benefit table. |
| Arogya Supreme Plus | Current active downloads specifically links S07/S07A effective 10-Jul-2026; S07A p.1 explicitly names Pro, Plus and Premium. | PASS: Plus exists and the current revision is distinct from the older parallel download links. |
| Easy Health Standard | S08 p.21 distinguishes Standard/Exclusive; p.42 contains a Standard family illustration with explicit rating context. | PASS: selected variant is evidenced. A specimen illustration is not a personalized family quote. No premium amount adopted. |

Only short identity/field observations are recorded; insurer documents themselves remain at the official links. This task does not assert a plan's medical underwriting acceptance, universal family eligibility or payout.

## Price evidence discovered, not adopted as quotes

- SBI's active Super Health download entry links an [official premium chart](https://content.sbigeneral.in/uploads/78e180c9fe3e41d6b91341c3e84ea88e.pdf), 66 PDF pages. It is a future extraction source, not a validated payable price for any current user. M10 must match its UIN, tier, rating profile, taxes/discounts and effective period before using a cell.
- S08 p.42 is an explicitly contextual family illustration; its assumptions cannot be transplanted to another profile. D02 records no sample premium amount.
- All eight offer-level premiums remain unknown at this research stage. Source discovery does not satisfy R5/R9/R10's price assumptions for a current user.
- Different policy structures, base SI, covered people, tenure or unestablished tax/loading amounts prevent a global price comparison; decision cases are in [D02-policy-checks.md](D02-policy-checks.md).

## Rejected discovery evidence and retrieval limits

[ICICI's current Elevate page](https://www.icicilombard.com/health-insurance/elevate-health-policy) showed ICIHLIP27057V062627, while the [retrieved app wording](https://www.icicilombard.com/docs/default-source/apps/elevateapp/assets/pdf/elevate-policy-wordings.pdf), p.1, showed ICIHLIP25048V042425. This is a version mismatch, not permission to guess current terms. It was not selected.

[Care's current downloads](https://www.careinsurance.com/other-downloads.html) labels a 29-Apr-2026 revision; its [withdrawn/revised directory](https://www.careinsurance.com/modified-or-withdrawn-product.html) separately lists the earlier version. The old searchable [wording](https://cms.careinsurance.com/cms/public/uploads/download_center/care-supreme---policy-terms-and-conditions.pdf) identifies CHIHLIP23128V012223. Current-document retrieval was not established in this run, so it was not selected. One guessed singular-hyphen URL returned 404 and is not evidence.

Activ One MAX was discovered on its [official product page](https://www.adityabirlacapital.com/abcd/health-insurance/health-and-wellness-plans/activ-one-max), but its direct policy PDF returned gateway/certificate errors. TLS checking was not disabled and no unverified document was accepted. It was not selected.

Some direct HTML requests returned 403/timeouts. Official web-tool directory retrieval and direct selected-PDF reads succeeded. These failures are recorded rather than falsely counted as source checks. Web-tool screenshot references did not expose reviewable image pixels in this interface; the later direct in-memory render of S01 p.61 supplied the actual visual review. An earlier multi-page render attempt produced no usable output and is not counted.

Selection is based on evidence that could actually be inspected, not a claim about the merits of excluded products. No user contact forms, quote applications, logins, purchases or insurer messages were submitted. No unselected product was silently promoted as a ninth slot.

## Reproducible document identity check

Run from the project root in PowerShell with read-only network access. It parses the decision's fixed slots and the source sections above. It checks UIN presence using normalized whitespace; simple regex extraction alone can truncate a line-wrapped UIN (observed in S04).

~~~powershell
@'
from pathlib import Path
import re, json, io, hashlib, urllib.request
from pypdf import PdfReader
decision = Path('docs/decisions/D02.md').read_text(encoding='utf-8')
register = Path('docs/evidence/D02-source-register.md').read_text(encoding='utf-8')
slots = re.findall(r'^\| (\d+) / (M\d+) \| ([^|]+) \| ([^|]+) \| ([A-Z0-9]+) \|$', decision, re.M)
assert len(slots) == 8 and len({s[4] for s in slots}) == 8
for n, task, plan_id, identity, uin in slots:
    section = re.search(r'^### S' + n.zfill(2) + r' .*?\n(.*?)(?=^### |^## |\Z)', register, re.M | re.S)[1]
    url = re.search(r'Wording: \[official PDF\]\(([^)]+)\)', section)[1]
    expected_hash = re.search(r'SHA-256: `([a-f0-9]{64})`', section)[1]
    expected_pages = int(re.search(r'Retrieved: (\d+) physical', section)[1])
    data = urllib.request.urlopen(urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'}), timeout=30).read()
    pdf = PdfReader(io.BytesIO(data))
    identity_text = re.sub(r'\s+', '', ''.join(p.extract_text() or '' for p in pdf.pages[:2]))
    assert uin in identity_text
    assert len(pdf.pages) == expected_pages
    assert hashlib.sha256(data).hexdigest() == expected_hash
    print('S' + n.zfill(2) + ': PASS (UIN, pages, SHA-256)')
print('PASS: 8 official documents; no files downloaded to disk.')
'@ | python -
~~~

A later changed hash should fail and trigger D02's revalidation policy rather than an automatic expected-hash update. This documentary script does not verify all terms/quotes or implement catalogue validation.

## Task verification boundary

PASS: eight selected identities with directly inspected official wordings, observed variant evidence, source sufficiency/conflict/update rules, and explicit comparative-price policy. All eight byte/UIN/page checks passed during research. The documented reproduction was then executed from its fenced Python block and returned S01–S08 PASS for UIN, pages and SHA-256. Local field/case audits passed before status closure.

Full extraction is NOT RUN and belongs to M05–M12; slot 9 applicability is NOT completed here. No application install/build/typecheck/lint/unit/browser command was run; not applicable to this research task. Testable policy examples and final DoD/status audit are recorded in D02-policy-checks.md.

