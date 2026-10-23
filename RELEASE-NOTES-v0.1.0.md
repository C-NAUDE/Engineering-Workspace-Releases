# Engineering Workspace v0.1.0 Beta

The first free Windows beta of Engineering Workspace.

Engineering Workspace is a free Windows desktop application for symbolic integration and differentiation, graphing, matrices, numerical work and engineering calculations. Its mathematics engine runs locally without an account or ongoing internet connection.

## Download and install

- Standard: download `EngineeringWorkspace-Setup-v0.1.0.exe`, run the installer, and open Engineering Workspace from the Start Menu.
- Portable: download `EngineeringWorkspace-Portable-v0.1.0-Windows-x64.zip`, extract the folder, and run `Engineering Workspace.exe`.
- Check the SHA-256 hashes in `SHA256SUMS.txt` against the downloaded files.

Windows 10 or 11 x64 is the target. The Microsoft Edge WebView2 Runtime is required for formatted results. The installer includes Microsoft's bootstrapper for systems missing it; first-time setup on those systems needs internet. Clean Windows validation is still pending.

## Beta limits

Some difficult integrals are unsupported. Numerical verification is evidence of agreement at tested points, not a symbolic proof across every branch. Read domain and verification notes shown with answers. Calculation history within the GUI is currently session-only.

## Feedback

Use this repository's Issues page once the public distribution repository exists. Include the exact command and output, status, version and steps to reproduce.

The application is free under the Engineering Workspace Freeware Licence. Copyright © 2026 Christiaan Petrus Naude. Source code remains private. The package includes third-party notices.
