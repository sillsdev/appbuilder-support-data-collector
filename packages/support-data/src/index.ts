export const SUPPORT_DATA_SCHEMA_VERSION = 1 as const;

export type SupportDataItemId =
  | "project-config"
  | "project-content"
  | "project-resources"
  | "custom-files"
  | "firebase-config"
  | "analytics-config"
  | "ai-assistant-config"
  | "ios-signing-config"
  | "build-diagnostics";

export interface SupportDataItem {
  readonly id: SupportDataItemId;
  readonly displayName: string;
  readonly description: string;
  readonly sensitive: boolean;
}

export const SUPPORT_DATA_ITEMS = [
  {
    id: "project-config",
    displayName: "Project configuration",
    description: "Project settings, metadata, and build configuration.",
    sensitive: false,
  },
  {
    id: "project-content",
    displayName: "Project content",
    description: "Scripture, dictionary, or other source content and project-specific data files.",
    sensitive: false,
  },
  {
    id: "project-resources",
    displayName: "Project resources",
    description: "Images, audio, video, and other referenced resources.",
    sensitive: false,
  },
  {
    id: "custom-files",
    displayName: "Custom files and extensions",
    description: "Custom scripts, styles, templates, and extensions.",
    sensitive: false,
  },
  {
    id: "firebase-config",
    displayName: "Firebase configuration",
    description: "Firebase configuration files for applicable platforms.",
    sensitive: true,
  },
  {
    id: "analytics-config",
    displayName: "Analytics configuration",
    description: "Analytics service configuration and related API keys, where applicable.",
    sensitive: true,
  },
  {
    id: "ai-assistant-config",
    displayName: "AI Assistant configuration",
    description: "AI Assistant settings and related configuration.",
    sensitive: true,
  },
  {
    id: "ios-signing-config",
    displayName: "iOS signing configuration",
    description: "Provisioning profiles and other relevant iOS signing files.",
    sensitive: true,
  },
  {
    id: "build-diagnostics",
    displayName: "Build and diagnostic information",
    description: "Build logs, error output, tool versions, and diagnostic reports.",
    sensitive: false,
  },
] as const satisfies readonly SupportDataItem[];

const ITEM_IDS = new Set<string>(SUPPORT_DATA_ITEMS.map((item) => item.id));

export interface CollectionRequest {
  readonly requestId: string;
  readonly schemaVersion: typeof SUPPORT_DATA_SCHEMA_VERSION;
  readonly supportUrl: string;
  readonly requestedItems: readonly SupportDataItemId[];
}

export interface ValidationSuccess<T> {
  readonly success: true;
  readonly value: T;
}

export interface ValidationFailure {
  readonly success: false;
  readonly errors: readonly string[];
}

export type ValidationResult<T> = ValidationSuccess<T> | ValidationFailure;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function validateItems(value: unknown, errors: string[]): SupportDataItemId[] {
  if (!Array.isArray(value)) {
    errors.push("requestedItems must be an array.");
    return [];
  }

  const items: SupportDataItemId[] = [];
  const seen = new Set<string>();
  for (const item of value) {
    if (typeof item !== "string" || !ITEM_IDS.has(item)) {
      errors.push(`requestedItems contains an unknown item ID: ${String(item)}.`);
      continue;
    }
    if (!seen.has(item)) {
      seen.add(item);
      items.push(item as SupportDataItemId);
    }
  }
  return items;
}

export function validateCollectionRequest(value: unknown): ValidationResult<CollectionRequest> {
  if (!isRecord(value)) {
    return { success: false, errors: ["Collection request must be a JSON object."] };
  }

  const errors: string[] = [];
  if (typeof value.requestId !== "string" || value.requestId.trim() === "") {
    errors.push("requestId must be a non-empty string.");
  }
  if (value.schemaVersion !== SUPPORT_DATA_SCHEMA_VERSION) {
    errors.push(`schemaVersion must be ${SUPPORT_DATA_SCHEMA_VERSION}.`);
  }
  if (typeof value.supportUrl !== "string" || value.supportUrl.trim() === "") {
    errors.push("supportUrl must be a non-empty string.");
  }
  const requestedItems = validateItems(value.requestedItems, errors);

  if (errors.length > 0) {
    return { success: false, errors };
  }

  return {
    success: true,
    value: {
      requestId: value.requestId as string,
      schemaVersion: SUPPORT_DATA_SCHEMA_VERSION,
      supportUrl: value.supportUrl as string,
      requestedItems,
    },
  };
}

export function parseCollectionRequest(json: string): ValidationResult<CollectionRequest> {
  let value: unknown;
  try {
    value = JSON.parse(json);
  } catch {
    return { success: false, errors: ["Collection request is not valid JSON."] };
  }
  return validateCollectionRequest(value);
}

export function serializeCollectionRequest(request: CollectionRequest): string {
  const result = validateCollectionRequest(request);
  if ("value" in result) {
    return JSON.stringify(result.value);
  }
  throw new Error(`Cannot serialize invalid collection request: ${result.errors.join(" ")}`);
}

export function createCollectionRequest(
  requestId: string,
  supportUrl: string,
  requestedItems: readonly SupportDataItemId[],
): CollectionRequest {
  const result = validateCollectionRequest({
    requestId,
    schemaVersion: SUPPORT_DATA_SCHEMA_VERSION,
    supportUrl,
    requestedItems,
  });
  if ("value" in result) {
    return result.value;
  }
  throw new Error(`Cannot create collection request: ${result.errors.join(" ")}`);
}

export function getSupportDataItem(id: SupportDataItemId): SupportDataItem {
  return SUPPORT_DATA_ITEMS.find((item) => item.id === id)!;
}

export function toggleSupportDataItem(
  selection: readonly SupportDataItemId[],
  id: SupportDataItemId,
): SupportDataItemId[] {
  return selection.includes(id)
    ? selection.filter((selected) => selected !== id)
    : [...selection, id];
}
