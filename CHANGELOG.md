# Changelog

## v0.1.1 Beta — 2026-10-28

- Substantially developed the symbolic integration engine over the week leading up to this release. Work spans integration-rule dispatch and recognition, algebraic and binomial substitutions, radical expressions, logarithmic and exponential forms, trigonometric products, simplification, and verification/domain reporting.
- Expanded batch execution and reporting support alongside the integration work.
- In the Batch 10 output supplied for this release, the engine completed 3,553 of 5,000 expressions. That run reported 1,367 unsupported, 17 domain errors, 24 verification failures, 38 verification-limited results, and 1 resource limit; summed engine time was 686.40 seconds (371.57 seconds elapsed). These are figures from one run, not a promise that every expression is solved or that another machine will reproduce the timing.
- Updated the Windows installer and portable package; the installer creates a desktop shortcut, including on upgrade.
- Renamed the included batch console to `Engineering Workspace Console.exe` and removed legacy MATLAB branding from the shipped app.
- The application remains closed source and free to install and use.

## v0.1.0 Beta — 2026-10-23

- First proposed public Windows package of Engineering Workspace.
- Optimized x64 GUI and batch console from the shared C++ engine.
- Portable ZIP and per-user Inno Setup installer.
- Offline local MathJax assets and self-contained standalone graph HTML.
- Automatic console reports saved in the user's local app data.

The beta has known limits on difficult symbolic inputs. A reported result should be read with its verification and domain notes.
