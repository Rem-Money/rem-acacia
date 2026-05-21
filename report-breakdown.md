# Project Acacia -  Final Report Breakdown

**Source:** *Project Acacia – Exploring the role of digital money in wholesale tokenised asset markets, Final Report* (Reserve Bank of Australia + Digital Finance CRC, May 2026)

---

## 1. Executive Summary

- **What it was:** A joint RBA + DFCRC research project exploring how tokenised money and settlement infrastructure could improve Australia's wholesale asset markets.
- **Scope:** 20 industry-led use cases across fixed income, managed funds, repos, structured products, private markets, carbon credits, and trade payables. Settlement tested with ESA balances, a pilot wCBDC, deposit tokens, and stablecoins.
- **Headline finding:** Strong potential for tokenisation + tokenised money to improve efficiency, resilience, and functionality of financial markets -  but capturing the benefits requires coordinated public/private effort.
- **Two-tier monetary system reaffirmed:** Central bank money remains an "anchor and enabler"; private digital money (stablecoins, deposit tokens) can complement it.
- **Key barriers identified:** Legal/regulatory uncertainty, industry coordination challenges, network-effect inertia among incumbents, and the international integration needs of Australian issuers.
- **Response:** A new multi-stream, multi-agency program of work to advance responsible innovation -  expanded Industry Advisory Group, exploration of a DFMI regulatory sandbox, continued bank-deposit-token work, RITS/ESA review, further wCBDC research, and cross-border payments exploration.

---

## 2. Introduction

### Global context
- Stablecoin issuance > **US$320B** (May 2026), mostly USD non-bank issuers.
- Tokenised real-world assets > **US$30B**; some analysts project **US$30T by mid-2030s**.
- >80% of tokenised value is private credit + US Treasuries today.
- Major public initiatives: UK Digital Gilt, ECB Appia, BIS Project Agorá, MAS Project Guardian.
- Nasdaq, LSEG, DTCC moving into tokenised equities/settlement.

### Box A -  Fixed-income focus globally
- Public-sector issuances: Hong Kong digital green bonds, EIB €100M digital bond, Slovenia €30M, World Bank/SNB CHF200M, Luxembourg digital treasury certificates.
- Private-sector: Siemens €300M, KfW (Clearstream D7, SIX), JPM tokenised commercial paper on Solana settling in USDC.
- **Tokenised MMFs** ~US$15B (Q2 2026), 66 products, 62k+ investors. BlackRock BUIDL ~$2.4B; Franklin Templeton BENJI ~$2.2B.
- Repo/collateral mobility: Broadridge DLR averaging **US$368B/day** in April 2026.

### Australian context
- Earlier work: CBA Bond-i (2018), ANZ stablecoin trials, FCX, BetaCarbon, the 2022–23 CBDC Pilot.
- Tokenised markets have not yet developed at scale domestically.

---

## 3. Project Overview

### Phase 2 design
- ~50 EOIs received → 40 RFIs → 24 conditionally selected → **20 completed** between Aug 2025 – Feb 2026.
- **12 pilots** (real money) + **8 proofs of concept** (simulated).

### Use case landscape (Figure 1)
- **Fixed income (13/20):** ABE, Canvas, CBA Intraday Repo, Imperium (term deposit, NCDs, annuities), Fireblocks, Westpac, ANZ Corporate Bond, Forte, Zerocap, NotCentralised, Macropod.
- **Other asset classes:** Canvas Private Credit, ANZ Trade Payable, Northern Trust Carbon Credits, Macropod Digital Asset Fund, ProspEx Mining Royalty.
- **Infrastructure/services:** AP+ Token Interchange, AP+ NPP-Token Integration.
- **DLT networks used:** Ethereum (public), Canvas Connect (private), Hedera (public + private), Redbelly (public-permissioned), XRP Ledger (public).

### Pilot wCBDC details
- Real claim on the RBA via deed poll, redeemable at par at project end.
- AUD-denominated, no interest, restricted to Australian wholesale investors.
- Issued on **third-party DLT platforms** (HashSphere, Canvas Connect, Redbelly) -  distinguishing feature vs. prior CBDC pilots.
- ERC-20 with embedded controls (mint/burn, pause, allowlist).
- **Total issued:** **A$4.4M**; individual transactions up to A$250k.
- Distributors: ANZ, Banking Circle Australia, Cuscal.

### Deposit Token Working Group (DTWG)
- Chaired by DFCRC; observers from RBA, ASIC, APRA, AUSTRAC, Treasury.
- 4 months of work focused on legal/regulatory issues for bank deposit tokens.
- Explored two transferability models (see §5).

### Governance
- Steering Committee (RBA, DFCRC, ASIC, APRA, Treasury).
- ASIC class relief from licensing requirements; AUSTRAC AML/CTF exemptions for specific participants.
- Industry Advisory Group (IAG) chaired by DFCRC.

---

## 4. Asset Tokenisation in Australia

### Key findings
- Early-stage but growing industry interest.
- Most efficiency-gain interest is in **fixed income** (13/20 use cases).
- Barriers: coordination/network effects, legal & regulatory uncertainty, interoperability.

### Token structures
- **Digital twin** (most use cases): DLT record represents an off-chain registry asset.
- **Digital native** (Fireblocks, Macropod Digital Asset Fund): DLT record IS the authoritative record.
- Industry views digital native as the preferred target; digital twin likely dominant near-term.

### Five capability/benefit categories
1. **Programmability & composability** -  lower-cost issuance, atomic settlement, automated lifecycle (coupons, voting), embedded compliance (KYC/AML).
2. **Transferability & fractionalisation** -  streamlined transfers; smaller minimum investment sizes (e.g. ProspEx, ANZ Trade Payable).
3. **Transparency & immutability** -  single shared source of truth; verifiable timely info; tamper-resistant histories (Imperium, Canvas, AP+, Northern Trust).
4. **Decentralised ecosystems** -  resilience via avoiding single points of failure; shared control (caveats: governance/operator accountability).
5. **Direct control of tokenised assets** -  cryptographic authorisation; owners and custodians control transfers directly.

### Box B -  DFCRC economic gains estimate
- **~A$24B per annum** in potential gains for Australia: A$10B "better markets" + A$8B "better payments" + A$6B "better assets".
- Current trajectory (4% RWA tokenised by 2030) would only realise ~A$1B.
- Fixed-income markets alone: ~A$2B p.a.

### Three main adoption barriers
1. Legal/regulatory environment needs modernising for tokenisation/atomic settlement.
2. Need for enduring coordination mechanisms (vs. one-off pilots); enduring industry-regulator engagement.
3. Effective interoperability between traditional and DLT infrastructures -  forestall "walled gardens."

---

## 5. Forms of Money to Facilitate Tokenised Wholesale Markets

### How tokenised money supports tokenised assets
- **Atomic settlement** -  single-system, irreversible exchange; 24/7/365.
- **Programmability & composability** -  state-contingent settlement (e.g. ProspEx subscription threshold).
- **Resilience** -  co-locating asset + money can simplify ops, but creates new points of failure.

### Box C -  Composability
- Traditional DvP via FMIs requires multi-step orchestration across custodians, FMI, RTGS, etc.
- Atomic composition: a single smart contract orchestrates settlement + interchange end-to-end.
- Examples: NotCentralised collateralised loan repayment (atomic loan close + collateral release); Canvas coupon payments on-chain.

### Tokenised private money -  stablecoins
- Used: AUDM, AUDF, AUDD, RLUSD plus project-created instances.
- Concerns: evolving regulation, credit risk, lack of remuneration (proposed Aus regime likely restricts interest).
- Several participants preferred stablecoins backed by central bank money (Imperium Markets, NotCentralised, Forte).

### Tokenised private money -  deposit tokens
- Leverage existing bank trust, prudential oversight.
- Tested by CBA (repo settlement) and ANZ.
- **DTWG findings (Box D):**
  - **Model 1:** Burn-and-reissue on interbank payment (closer to today's flows; near-term feasible).
  - **Model 2:** Transferable/assignable across banks (more like stablecoins; novel legal/regulatory challenges).
  - Policy clarifications likely needed: confirming "banking business" status, FCS coverage, exemption from "financial product" status for the platform, AML/CTF "virtual asset" treatment.

### Interoperability between private money tokens
- Use cases mostly aligned with Model E from the consultation paper -  wCBDC plays the ESA-like role for interbank settlement of token swaps.
- AP+ variant: "white coin" digital twin of wCBDC issued on public chain, real wCBDC kept on private chain, kept aligned via a synchroniser.
- **Box E -  Bilateral vs. multilateral interchange models.** Multilateral (e.g. AP+ scheme) is simpler at scale, but needs upfront industry coordination.

### Central bank money
- wCBDC roles demonstrated: direct asset settlement, interchange between private monies, backing for stablecoins.
- **Challenges of issuing wCBDC on third-party platforms:**
  - Operational/governance/compliance complexity (Box F).
  - Legal settlement finality (PSNA, RTGS approval).
  - Liquidity fragmentation across platforms -  needs aggregated views (CBA dashboard demo) and bridging.

### Box F -  Platform considerations for wCBDC
- Transaction finality + ledger integrity -  private-permissioned easiest; public-permissioned feasible with proven track record; public-permissionless generally not viable.
- Governance/compliance -  central bank must exclusively control mint/burn; needs visibility into validators.
- Integration -  EVM compatibility reused across use cases.

### ESAs supporting tokenised markets
- Two use cases used synchronisation mechanisms:
  - **Northern Trust** -  SWIFT/HVCS-orchestrated DvP across ESAs.
  - **Westpac** -  NPP PayTo + RITS Fast Settlement Service for DvP.
- ESAs can also back stablecoins (Forte) or enable interchange (AP+ variant).

### Box G -  Synchronisation mechanism designs
1. Lock asset, then pay, then transfer (Westpac, Northern Trust; Austraclear/CHESS today).
2. Lock funds, transfer asset, settle funds (PEXA today).
3. Lock multiple assets/funds across platforms (BoE renewed RTGS; not tested in Acacia).

### Access to central bank money
- Current ESA eligibility limited to ADIs and a small set of others.
- No compelling case in Acacia to broaden direct access for end-user settlement.
- Live policy question: backing for stablecoin issuers under the proposed tokenised SVF framework -  Forte tried a 1:1 ESA-backed structure, but legal/operational separation issues remained.

---

## 6. Legal and Regulatory Considerations

### Key findings
- Legal/regulatory clarity is a critical enabler.
- Multiple areas need work; longer-term sandboxes preferred over time-bound relief.

### Legal structure of different forms of money
- **ESA:** Contractual claim, free of counterparty risk (RBA liability).
- **wCBDC:** Pilot issued under deed poll -  production form TBD; possibly a digital twin of ESA or distinct new form.
- **Stablecoins:** Contractual redemption claims; new tokenised SVF regime incoming.
- **Deposit tokens:** Likely characterisable as deposits; but FCS may not cover them without further classification.

### Legal structure of tokenised assets
- Digital twin dominant; digital native requires clarity on registers, finality.
- Digital Assets Framework Bill (passed Apr 2026, commencing Apr 2027) introduces "tokenised custody platforms" (TCPs) regulation.
- MLETR (UNCITRAL) implementation by AGD is in progress -  would enable digitised trade records to act as bearer instruments.

### Settlement finality
- **Technical finality** -  depends on consensus mechanism (deterministic vs. probabilistic).
- **Legal finality** -  needs explicit rules in operating frameworks.
- **PSNA "approved RTGS systems"** currently include RITS, Austraclear, CHESS RTGS. DLT platforms would need this approval for similar protection from zero-hour rule.

### Regulatory treatment of tokenised market infrastructures
- Tight integration of trading + settlement on DLT challenges existing separate licensing regimes.
- Public-DLT-without-clear-operator scenarios raise regulatory perimeter questions.
- Some use cases (e.g. Fireblocks) interposed regulated entities (ABE) deliberately to preserve clarity.

### Regulatory treatment of tokenised money/assets
- ASIC Info Sheet 225 (Oct 2025) clarified financial product treatment of digital assets.
- Digital asset reforms add a "look through" exemption for digital twins under tokenised custody platforms.
- **Prudential (banks):** Awaiting clarity on Basel crypto-asset standard implementation timing.
- **Superannuation funds:** Valuation basis + operational risk questions for APRA.

### Supporting responsible innovation
- Acacia's regulatory relief was instrumental but time-bound.
- Larger institutions reported insufficient time for internal risk reviews -  some shifted from pilots to PoCs.
- Common features of effective international approaches: longer timeframes, broad industry-regulator engagement, convening, availability of "safe assets" (tokenised gov bonds + central bank money).

### Box H -  International regulatory model examples
- **Project Guardian (MAS, Singapore)** -  multi-asset, multi-issuer, industry frameworks for fixed income + funds.
- **HKMA Supervisory Incubator for DLT** -  iterative supervisory engagement; supports Project Ensemble.
- **UK Digital Securities Sandbox (DSS)** -  4-gate "glidepath" from testing to full authorisation; 16 applicants past Gate 1 as of report date; will host the DIGIT pilot.

---

## 7. The Road Ahead -  Post-Acacia Program

A new multi-stream, multi-agency program of work with **11 initiatives** across three workstreams:

### Regulatory workstream
1. **Inter-agency Regulator Working Group** -  coordinated forum across RBA/APRA/ASIC/Treasury.
2. **DFMI sandbox exploration** -  stage-gated, longer-term sandbox specifically for tokenised finance and DFMIs (vs. ASIC's general ERS).
3. **Tokenised government bond initiative** -  explore digitally native government bonds with central borrowing authorities.
4. **C-suite roundtable** on the future of tokenised finance.

### Industry workstream
5. **Joint Regulator-Industry Tokenisation Advisory Group** -  reconstituted/expanded IAG.
6. **Extension of the DTWG** -  broader bank participation, interoperability focus.
7. **Other industry working groups** -  common standards/frameworks as needed.

### RBA workstream
8. **Industry consultation on tokenised money + RITS infrastructure** -  feeds into RITS modernisation.
9. **Review of ESA policy** -  post payment service provider licensing reforms.
10. **Further applied research on wCBDC** -  including potential provision into the DFMI sandbox.
11. **Cross-border payments exploration** -  tokenised money + new RTGS uses; potentially with other central banks.

**Feedback channel:** ProjectAcacia@rba.gov.au

---

## Appendix 1 -  Use Case Index

| Lead participant | Use case | Type | Asset class | Settlement asset | DLT network |
|---|---|---|---|---|---|
| Australian Bond Exchange | Corporate Bond | Pilot | Corporate bond | wCBDC | Redbelly |
| ANZ | Corporate Bond | PoC | Corporate bond | wCBDC + private payment token | Private ZK L2 (Validium) |
| ANZ | Trade Payable | PoC | Trade payable | wCBDC + payment token | Private ZK L2 |
| AP+ | NPP-Token Integration | PoC | Infrastructure | NPP/RITS Fast Settlement Service | N/A (research) |
| AP+ | Token Interchange | Pilot | Infrastructure | wCBDC + private tokens | Hedera public + HashSphere |
| Canvas | Government Bond | Pilot | Government bond | wCBDC | Canvas Connect L2 |
| Canvas | Private Credit Fund | Pilot | Private credit | wCBDC | Canvas Connect L2 |
| CBA | Intraday Repo | PoC | Repo | CBA deposit token + wCBDC interchange | Gravital + Kinexys + HQLAx |
| Fireblocks | Corporate Bond with Interchange | PoC | Corporate bond | wCBDC + multiple stablecoins | Redbelly |
| Forte Tech Solutions | Government Bond | Pilot | Government bond | AUDF stablecoin | Ethereum (public) |
| Imperium Markets | Term Deposit | Pilot | Term deposit | wCBDC-backed Cuscal stablecoin | Hedera + HashSphere |
| Imperium Markets | Certificates of Deposit | Pilot | NCDs | wCBDC-backed stablecoin | Hedera + HashSphere |
| Imperium Markets | Annuities | Pilot | Annuities | wCBDC-backed stablecoin | Hedera + HashSphere |
| Macropod | Digital Asset Fund | Pilot | Managed fund | AUDM stablecoin | Redbelly |
| Macropod | Corporate Bond | Pilot | Corporate bond | AUDM stablecoin | Redbelly |
| Northern Trust | Carbon Credits | PoC | Carbon credits | RITS via SWIFT synchronisation | Matrix Zenith (Hyperledger Besu) |
| NotCentralised | Collateralised Loans | Pilot | Structured finance | wCBDC-backed payment token | Redbelly |
| ProspEx Group | Mining Royalty Interests | PoC | Mining royalty | AUDF stablecoin | Ethereum (public) |
| Westpac | Term Deposit | PoC | Term deposit | NPP PayTo via RITS FSS | Blockchain-agnostic |
| Zerocap | Government Bond | Pilot | Government bond | RLUSD stablecoin | XRP Ledger |

---

## Appendix 2 -  Project Contributors (selected)

- **Steering Committee:** Brad Jones (Chair, RBA), Chris Thompson (RBA), Tālis Putniņš (DFCRC), Tony Richards (DFCRC), Rhys Bollen (ASIC), Daniel Chippeck (APRA), Tony McDonald (Treasury).
- **Partner agencies:** APRA, ASIC, Treasury, AUSTRAC.
- **Support partners:** Allens, EY, Fireblocks, Kaleido.
- **DTWG banks:** ANZ, CBA, NAB, Westpac; legal support from Ashurst.

---

## Abbreviations (selected)

- **ADI** -  Authorised deposit-taking institution
- **DFMI** -  Digital financial market infrastructure
- **DLT** -  Distributed ledger technology
- **DvP** -  Delivery versus payment
- **ESA** -  Exchange Settlement Account
- **FCS** -  Financial Claims Scheme
- **FMI** -  Financial market infrastructure
- **NPP** -  New Payments Platform
- **PSNA** -  Payment Systems and Netting Act 1998
- **RITS** -  Reserve Bank Information and Transfer System
- **RTGS** -  Real-time gross settlement
- **TCP** -  Tokenised custody platform
- **wCBDC** -  Wholesale central bank digital currency

---

## Glossary (selected)

- **Atomic settlement** -  multi-leg transaction executed simultaneously as an all-or-nothing event via smart contracts.
- **Deposit token** -  digitally native token representing a claim on a bank's balance sheet.
- **Tokenised deposit** -  digital twin of an account-based deposit recorded in another system.
- **Digital native token** -  DLT record is the authoritative claim record.
- **Digital twin token** -  DLT record represents a claim authoritatively held elsewhere.
- **Tokenisation** -  creating a token to represent ownership, rights, or claims to an asset.
