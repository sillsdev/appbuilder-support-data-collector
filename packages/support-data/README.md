# `@sil/support-data`

Shared support-data definitions for the desktop collector and the Scriptoria
portal. The package is framework-independent except for
`SupportDataSelector.svelte`, which requires Svelte 5 as a peer dependency.

## Request contract

Collection requests are JSON objects with schema version `1`:

```json
{
  "requestId": "portal-request-id",
  "schemaVersion": 1,
  "supportUrl": "https://app.scriptoria.io/support/...",
  "requestedItems": ["project-config", "build-diagnostics"]
}
```

Use `parseCollectionRequest` or `validateCollectionRequest` for untrusted
input. Unsupported schema versions and unknown item IDs are rejected. Duplicate
known IDs are normalized by validation. Callers must treat the user's final
selection as authoritative; the request's `requestedItems` is only an initial
recommendation.

The package does not map IDs to files, collect credentials, or perform uploads.
The desktop application owns those operations and must maintain its own
allowlist. In particular, Android keystores and passwords are not represented
by this catalog.

## UI compatibility

`SupportDataSelector.svelte` uses DaisyUI semantic classes and does not bundle
Tailwind or DaisyUI CSS. Consumers must scan this package's Svelte files with
Tailwind CSS 4 and provide DaisyUI 5. This application uses the `dy-` DaisyUI
prefix, so the component follows that prefix for component classes.

The selector accepts these optional props:

- `availableItems`: the catalog of items to display. It defaults to
  `SUPPORT_DATA_ITEMS`. Consumers can pass a subset, or localized copies of
  catalog items with the same stable IDs, without changing request validation.
- `requestedItems`: item IDs recommended by support. These are used as the
  initial selection and are displayed as recommendations; they do not restrict
  `availableItems` or grant permission to collect data.
- `selectedItems`: the user's final selection, exposed with Svelte's
  `bind:selectedItems` syntax. This selection is authoritative and can differ
  from `requestedItems`.
- `strings`: optional localized component text for the heading, description,
  requested and sensitive labels, and a `selectedCount` function that handles
  singular and plural forms. Defaults are provided for omitted strings.

The shared package intentionally does not provide filenames, project-specific
warnings, or wizard navigation. Consumers that need those details should keep
them alongside their own project-specific item presentation and state.
