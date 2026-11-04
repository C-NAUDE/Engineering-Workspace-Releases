# Engineering Workspace — Public Changelog

**Coverage:** v0.1.0, v0.1.1 and v0.1.2  
**Updated:** 5 November 2026  
**Product:** Engineering Workspace — free, offline symbolic mathematics software  
**Distribution:** Public release notes only. Engineering Workspace is **closed-source**.

> This is a public-facing changelog. It deliberately excludes source code, source patches, internal file paths, proprietary implementation methods, development prompts and private project structure. It describes user-visible functionality and measured results, not how the algorithms are implemented.

## Version history

### v0.1.2 Beta — 5 November 2026

- Expanded the symbolic integration and verification work described below. The latest archived Batch 10 checkpoint completed **4,209 of 5,000** integrals: **3,534 symbolically verified** and **675 numerically accepted**.
- Refined the desktop batch workspace, equation display, and distribution packaging.
- Kept calculations local and offline. Optional update notifications use the official release manifest only when the user enables automatic checks or asks for a manual check.
- [v0.1.2 release notes](RELEASE-NOTES-v0.1.2.md) · [v0.1.2 downloads](https://github.com/C-NAUDE/Engineering-Workspace-Releases/releases/tag/v0.1.2)

### v0.1.1 Beta — 28 October 2026

- Substantially extended integration coverage across algebraic and binomial substitutions, radicals, logarithmic and exponential forms, trigonometric products, and composition recognition. Updated simplification, verification, domain reporting, and batch execution.
- Recorded **3,553 of 5,000** completions at depth 1 with four workers (199.30 seconds wall time) and **3,555 of 5,000** at depth 4 with four workers (371.57 seconds wall time). These are distinct settings and runs.
- Updated application branding and the companion console name.
- [v0.1.1 release notes](RELEASE-NOTES-v0.1.1.md) · [v0.1.1 downloads](https://github.com/C-NAUDE/Engineering-Workspace-Releases/releases/tag/v0.1.1)

### v0.1.0 Beta — 23 October 2026

- First public Windows beta with local symbolic calculus, graphing, matrices, numerical work, chemistry tools, and batch calculations.
- Original Batch 10 baseline: **2,108 of 5,000** completions (42.16%) in **1,738.66 seconds**, as recorded in the original release history.
- [v0.1.0 release notes](RELEASE-NOTES-v0.1.0.md) · [v0.1.0 downloads](https://github.com/C-NAUDE/Engineering-Workspace-Releases/releases/tag/v0.1.0)

---

## Highlights since v0.1.1

- Symbolic integration coverage increased from a reported **3,555 of 5,000** test integrals at the v0.1.1 launch to **4,209 of 5,000** in the latest archived, fully audited development checkpoint.
- The latest audited checkpoint reports **3,534 symbolically verified** and **675 numerically accepted** integral results.
- Expanded coverage for advanced algebraic, rational, exponential, logarithmic, trigonometric, hyperbolic and special-function integrals.
- Strengthened answer verification, including better recognition of equivalent mathematical expressions and more conservative handling of real-domain restrictions.
- Improved the desktop batch-workspace experience, equation readability and interaction performance.
- Continued to support **offline execution** without relying on a cloud-based solving service.

**Benchmark comparison note:** The original 3,555 launch figure used maximum search depth. Later checkpoints were measured under their own archived benchmark configurations. The **+654** figure is a comparison of reported completions, not a controlled same-settings performance or regression measurement against the original v0.1.1 executable.

---

## Release and development history

### v0.1.1 — Initial release reference (approximately 1 November 2026)

**Reported Batch 10 results:**
- Standard search depth: **3,553 / 5,000**.
- Maximum search depth: **3,555 / 5,000** (**71.10%**).

**Available capabilities at launch:**
- Offline C++ symbolic integration and result verification.
- Common and advanced calculus integration methods.
- Desktop interface and a companion console application.
- Batch processing and benchmark reporting.
- Windows installer and portable distribution.

### Early post-launch improvements — 3,740 and 3,764 checkpoints

**Recorded milestones:** **3,740 → 3,764 / 5,000**.

- Continued expanding integral coverage and repairing regressions.
- Improved the consistency of supported results across the batch tests.
- Recorded a no-lost-completions comparison for the increase from 3,740 to 3,764.

**Historical limitation:** A complete original v0.1.1 source-and-commit history was not available for the interval from 3,555 to 3,740. Specific features cannot reliably be assigned to that period.

### Recovery and reliability improvements — 3,803 checkpoint

**Benchmark:** **3,803 / 5,000** (**76.06%**), up **39** from 3,764.

- Improved handling of additional exponential, radical, trigonometric and advanced special-function integration cases.
- Recovered previously unsupported families while retaining previously completed benchmark cases.
- A fresh full-batch rerun confirmed **zero lost completions** against the preceding checkpoint.

### Further integration coverage — 3,827 checkpoint

**Benchmark:** **3,827 / 5,000** (**76.54%**), up **24** from 3,803.

- Extended coverage for more challenging rational and algebraic expressions.
- Improved support for advanced special-function answers.
- Full-batch comparison recorded **zero lost completions** against 3,803.

### Major advanced-integration expansion — 4,193 checkpoint

**Benchmark:** **4,193 / 5,000** (**83.86%**), up **366** from 3,827.

- Introduced much broader support for advanced algebraic expressions through special-function results.
- Improved handling of integrals that previously failed because their expressions could not be reduced to simpler supported families.
- Preserved all **3,827** previously completed benchmark cases in the full audit.
- Expanded mathematical coverage beyond elementary antiderivatives; some accepted answers use advanced special-function notation.

**Verification qualification:** At this milestone, **3,042** completions were marked symbolically verified and **1,151** were numerically accepted. Two results previously marked symbolic were classified as numerical in this experimental version. Numerical acceptance is not the same as a symbolic proof.

### Verification reliability upgrade — 4,196 checkpoint

**Benchmark:** **4,196 / 5,000** (**83.92%**), up **3** from 4,193.

- Improved exact validation of certain advanced special-function results.
- Strengthened real-domain and branch-sensitive verification safeguards.
- Added clearer categorization for expressions without a valid real integration domain.
- Upgraded **80** previously numerical results to the engine's symbolic-verification category.
- Full-batch checks recorded **zero lost completions** and **zero symbolic-verification downgrades** relative to 4,193.

**Classification at this checkpoint:** **3,125 symbolic**, **1,071 numerical**.

### Stable verifier checkpoint — 4,209 completed / 3,512 symbolic

**Benchmark:** **4,209 / 5,000** (**84.18%**), up **13** from 4,196.

- Improved recognition of mathematically equivalent expressions, including more advanced transcendental and algebraic results.
- Expanded exact symbolic-verification coverage for additional answer families.
- Upgraded **374** previously numerical results to the engine's symbolic-verification category.
- Reduced the verification-limited classification from **54 to 43** in the archived audit.
- Preserved all previously completed cases with **zero lost completions** and **zero symbolic downgrades**.

**Classification:** **3,512 symbolic**, **697 numerical**.

### Latest audited verifier checkpoint — 4,209 completed / 3,534 symbolic

**Benchmark:** **4,209 / 5,000** (**84.18%**); completion total unchanged.

- Broadened symbolic verification of mixed hyperbolic, exponential and trigonometric expressions.
- Upgraded **22 additional** previously numerical results to the symbolic category.
- Retained the same **4,209 completions**, with **zero lost completions** and **zero symbolic downgrades** in the full 5,000-case comparison.

**Complete outcome breakdown:**

| Outcome | Cases |
|---|---:|
| Symbolically verified by the engine | **3,534** |
| Numerically accepted | **675** |
| Unsupported | 681 |
| Verification limited | 43 |
| Verification failed | 28 |
| Real-domain errors | 39 |
| **Total** | **5,000** |

**Important:** “Symbolically verified” describes the result of Engineering Workspace's internal verification; it is not a claim of external formal proof for every mathematical branch or complex-valued continuation.

### Windows desktop interface and distribution updates — 4 November 2026

**Visual and usability fixes:**
- Restored the larger, results-first batch workspace layout.
- Corrected low-contrast mathematical notation in light-theme equation displays.
- Preserved the existing batch-control sliders and their expected interactions.
- Improved responsiveness when viewing, selecting and scrolling through large batches.
- Reduced unnecessary visual updates while batch progress changes.

**Testing and release packaging:**
- GUI behaviour was exercised using desktop browser previews at common window sizes.
- The repaired GUI was packaged for integration into the Windows desktop application.
- Windows distribution and release scripts successfully generated a **v0.1.1-named installer** and portable package from later development sources.

**Performance qualification:** A local synthetic UI test showed substantial improvement in the cost of processing large-result updates, but this does not establish a universal end-to-end latency result on every Windows computer. Exact pixel-for-pixel equivalence to the original design reference was not independently certified.

**Windows benchmark observation:** A subsequent desktop screenshot showed **4,215 / 5,000**, with different search depth, timeout and worker settings. It is **not presented as a new audited release milestone**; the visible category totals also had a one-case discrepancy requiring investigation.

---

## Benchmark milestones at a glance

| Checkpoint | Completed / 5,000 | Symbolic | Numerical | Audit qualification |
|---|---:|---:|---:|---|
| Original v0.1.1 launch (maximum depth) | 3,555 | — | — | Historical release result |
| Early development | 3,740 | 3,024 | 716 | Archived baseline |
| Regression repairs | 3,764 | 3,029 | 735 | Compared against 3,740 |
| Recovery checkpoint | 3,803 | 3,037 | 766 | Full rerun; no lost completions |
| Experimental checkpoint | 3,827 | 3,044 | 783 | Full comparison; no lost completions |
| Advanced integration expansion | 4,193 | 3,042 | 1,151 | No lost completions; two symbolic downgrades |
| Verifier upgrade | 4,196 | 3,125 | 1,071 | No losses or symbolic downgrades |
| Stable verifier | 4,209 | 3,512 | 697 | No losses or symbolic downgrades |
| Latest audited verifier | **4,209** | **3,534** | **675** | No losses or symbolic downgrades |

Benchmark counts are from the recorded checkpoints. Different settings and platforms can affect time and completion results; the table is not a controlled runtime-speed comparison.

## Current limitations and planned improvements

- Some integrals require advanced special-function output rather than elementary closed forms.
- **675** completed integrals remain numerically accepted rather than symbolically verified in the latest archived checkpoint.
- **43** verification-limited and **28** verification-failed cases remain unresolved.
- **681** integrals are still unsupported and **39** are categorized as real-domain errors.
- Verification over restricted real intervals and mathematically sensitive branches requires continued care.
- Further improvements are planned for the clarity, practical usability and reliability of returned mathematical expressions.
- Benchmark consistency, responsiveness and Windows-specific testing remain ongoing development priorities.

---

## Source availability and publication policy

Engineering Workspace is **closed-source**. This changelog intentionally provides only public release-level information about capabilities, fixes, test results and known limitations. It does **not** include or license source code, proprietary algorithms, implementation details, patches, internal file inventories, private development records, or instructions to reconstruct the software.

© Engineering Workspace. All rights reserved. Publication of this changelog does not grant rights to the software's source code.
