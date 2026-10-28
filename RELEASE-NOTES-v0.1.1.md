# Engineering Workspace v0.1.1 Beta

Engineering Workspace is a free Windows desktop application for symbolic integration and differentiation, graphing, matrices, numerical work and engineering calculations. Calculations run locally. The application is closed source; its source code is not included in the downloads.

## Download and install

- Installer: `EngineeringWorkspace-Setup-v0.1.1.exe`. It installs for the current user, adds Start Menu access, and creates a desktop shortcut.
- Portable: `EngineeringWorkspace-Portable-v0.1.1-Windows-x64.zip`. Extract the ZIP and run `Engineering Workspace.exe`.
- Verify downloaded files using the SHA-256 values in `SHA256SUMS.txt`.

Windows 10 or 11 x64 is required. Microsoft Edge WebView2 Runtime is needed for formatted results and graphs. The installer includes Microsoft's bootstrapper and will attempt to install the runtime if it is missing; that first-time installation needs an internet connection. The portable package expects WebView2 Runtime to already be installed.

The installer is not code-signed. Windows may show an unrecognized-app warning for this new download. Download only from the official website or this GitHub repository and check the published SHA-256 checksum.

## Beta limitations

Some difficult integrals are unsupported. Numerical agreement is not a symbolic proof across every branch. Read the verification and domain notes shown with results. Calculation history in the GUI is session-only.

The application is free under the Engineering Workspace Freeware Licence. Copyright © 2026 Christiaan Petrus Naude. Source code remains private.
