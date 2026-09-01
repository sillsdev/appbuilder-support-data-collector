# AppBuilder Support Data Collector

A desktop application built with [Wails3](https://v3alpha.wails.io/), using a Go backend and a Svelte/TypeScript frontend.

## Prerequisites

- [Go](https://go.dev/dl/) 1.25 or later
- [Node.js](https://nodejs.org/) (LTS) and npm
- Platform build tools:
  - **macOS**: Xcode command line tools (`xcode-select --install`)
  - **Windows**: WebView2 (usually preinstalled on Windows 10/11) and a C compiler (e.g. via MSYS2/TDM-GCC)
  - **Linux**: `gtk3` and `webkit2gtk` development packages

## Installing the Wails3 CLI

Wails3 is currently in beta. Install the CLI with:

```bash
go install github.com/wailsapp/wails/v3/cmd/wails3@latest
```

Confirm it installed correctly:

```bash
wails3 version
```

Then check your environment is set up correctly for Wails development:

```bash
wails3 doctor
```

## Getting Started

Clone the repository and install frontend dependencies:

```bash
git clone git@github.com:sillsdev/appbuilder-support-data-collector.git
cd appbuilder-support-data-collector
cd frontend && npm install && cd ..
```

Run the app in development mode with hot reload for both the Go backend and the frontend:

```bash
wails3 dev
```

## Building

To produce a production build for your current platform:

```bash
wails3 build
```

Build output is written to `build/bin/`.

## Project Structure

A typical Wails3 project is laid out as:

```
.
├── main.go          # Application entry point
├── app.go           # App struct and Go methods exposed to the frontend
├── frontend/         # Svelte/TypeScript frontend source
│   ├── src/
│   └── package.json
├── build/            # Platform build assets and output (ignored in git)
└── wails.json        # Wails project configuration
```

## Learn More

- [Wails3 Documentation](https://v3alpha.wails.io/)
- [Wails3 GitHub Repository](https://github.com/wailsapp/wails)

## License

This project is licensed under the terms of the [LICENSE](LICENSE) file.
