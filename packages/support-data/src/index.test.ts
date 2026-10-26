import { it } from "vitest";
import {
  parseCollectionRequest,
  serializeCollectionRequest,
  SUPPORT_DATA_ITEMS,
  SUPPORT_DATA_SCHEMA_VERSION,
  toggleSupportDataItem,
  validateCollectionRequest,
} from "./index.js";

it("validates the support-data catalog, requests, and selection", () => {
  function assert(condition: boolean, message: string): void {
    if (!condition) {
      throw new Error(message);
    }
  }

  const ids = SUPPORT_DATA_ITEMS.map((item) => item.id);
  assert(new Set(ids).size === ids.length, "catalog IDs must be unique");
  assert(SUPPORT_DATA_ITEMS.length === 9, "catalog must contain all nine items");
  for (const item of SUPPORT_DATA_ITEMS) {
    assert(item.displayName.length > 0, `${item.id} needs a display name`);
    assert(item.description.length > 0, `${item.id} needs a description`);
    assert(typeof item.sensitive === "boolean", `${item.id} needs a sensitivity indicator`);
  }

  const validRequest = {
    requestId: "request-1",
    schemaVersion: SUPPORT_DATA_SCHEMA_VERSION,
    supportUrl: "https://app.scriptoria.io/support/request-1",
    requestedItems: ["project-config", "build-diagnostics"],
  };
  const parsed = parseCollectionRequest(JSON.stringify(validRequest));
  assert(parsed.success, "valid request should validate");
  if (parsed.success) {
    assert(
      parseCollectionRequest(serializeCollectionRequest(parsed.value)).success,
      "serialized request should validate",
    );
  }

  assert(!validateCollectionRequest(null).success, "null must be rejected");
  assert(
    !validateCollectionRequest({ ...validRequest, schemaVersion: 2 }).success,
    "unsupported schema must be rejected",
  );
  assert(
    !validateCollectionRequest({ ...validRequest, requestedItems: ["not-an-item"] }).success,
    "unknown item IDs must be rejected",
  );
  assert(!parseCollectionRequest("{not-json").success, "invalid JSON must be rejected");
  const initialSelection = ["project-config", "project-content"] as const;
  assert(
    toggleSupportDataItem(initialSelection, "project-content").join(",") === "project-config",
    "deselected items must be excluded from the final selection",
  );
  assert(
    toggleSupportDataItem(initialSelection, "build-diagnostics").join(",") ===
      "project-config,project-content,build-diagnostics",
    "new selections must be added",
  );
});

it("supports localized labels in a restricted selector catalog", () => {
  const availableItems = SUPPORT_DATA_ITEMS.filter(
    (item) => item.id === "project-config" || item.id === "project-content",
  ).map((item) => ({
    ...item,
    displayName: `Localized ${item.id}`,
    description: `Description for ${item.id}`,
  }));
  if (availableItems.length !== 2 || availableItems.some((item) => !item.id.startsWith("project-"))) {
    throw new Error("the selector should accept a restricted catalog with stable IDs");
  }
  if (availableItems[1].displayName !== "Localized project-content") {
    throw new Error("localized item labels should be preserved");
  }
  if (toggleSupportDataItem(["project-content"], "project-content").length !== 0) {
    throw new Error("localized catalog selections should remain user-controlled");
  }
});
