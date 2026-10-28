# Changelog

## v0.1.1 Beta — 2026-10-28

- Substantially developed the symbolic integration engine over the week leading up to this release. Work spans integration-rule dispatch and recognition, algebraic and binomial substitutions, radical expressions, logarithmic and exponential forms, trigonometric products, simplification, and verification/domain reporting.
- Expanded batch execution and reporting support alongside the integration work.
- Batch 10 measurements are from v0.1.1 and must be read with their run settings. At depth 1, four workers (four CPU threads) completed 3,553 of 5,000 integrals: 379.34 seconds summed engine time and 199.30 seconds wall-clock elapsed. At depth 4, four workers completed 3,555: 686.40 seconds summed engine time and 371.57 seconds wall-clock elapsed. Depth 4 is experimental and its slower timing is not the normal depth-1 result. These are individual machine runs, not guarantees.
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
