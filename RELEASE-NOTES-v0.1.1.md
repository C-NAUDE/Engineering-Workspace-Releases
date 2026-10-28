# Engineering Workspace v0.1.1 Beta

Engineering Workspace is a free Windows desktop application for symbolic integration and differentiation, graphing, matrices, numerical work and engineering calculations. Calculations run locally. The application is closed source; its source code is not included in the downloads.

## What's new in v0.1.1

This release includes a substantial week of development on the symbolic integration engine, not just packaging and branding changes. The work extends general-purpose integration paths for algebraic and binomial substitutions, radical forms, logarithmic and exponential expressions, trigonometric products, and composition/product-rule recognition. Simplification, verification and domain reporting, and batch execution/reporting were also updated.

## Batch 10 performance context

The worker count is the number of CPU threads used for batch calculations. The previous v0.1.0 run was reported by the owner as 3,555 completed on one worker (one CPU thread) in about 600 seconds.

The supplied v0.1.1 depth-1 run used four workers (four CPU threads). Its final summary reports 3,550 completed, 1,371 unsupported, 17 domain errors, 24 verification failures, 38 verification-limited results and 1 resource limit. It took 379.34 seconds summed across engine work and 199.30 seconds wall-clock elapsed (about 200 seconds).

A separate depth-4 experimental run, also with four workers, reports 3,553 completed, 1,367 unsupported, 17 domain errors, 24 verification failures, 38 verification-limited results and 1 resource limit. It took 686.40 summed engine seconds and 371.57 seconds wall-clock elapsed. Depth 4 is experimental; this longer timing is not the normal depth-1 result. Each figure describes a particular run and hardware configuration, not a guarantee. Numerical agreement remains distinct from symbolic verification.

## Download and install

- Installer: `EngineeringWorkspace-Setup-v0.1.1.exe`. It installs for the current user, adds Start Menu access, and creates a desktop shortcut.
- Portable: `EngineeringWorkspace-Portable-v0.1.1-Windows-x64.zip`. Extract the ZIP and run `Engineering Workspace.exe`.
- Verify downloaded files using the SHA-256 values in `SHA256SUMS.txt`.

Windows 10 or 11 x64 is required. Microsoft Edge WebView2 Runtime is needed for formatted results and graphs. The installer includes Microsoft's bootstrapper and will attempt to install the runtime if it is missing; that first-time installation needs an internet connection. The portable package expects WebView2 Runtime to already be installed.

The installer is not code-signed. Windows may show an unrecognized-app warning for this new download. Download only from the official website or this GitHub repository and check the published SHA-256 checksum.

## Beta limitations

Some difficult integrals are unsupported. Numerical agreement is not a symbolic proof across every branch. Read the verification and domain notes shown with results. Calculation history in the GUI is session-only.

The application is free under the Engineering Workspace Freeware Licence. Copyright © 2026 Christiaan Petrus Naude. Source code remains private.
