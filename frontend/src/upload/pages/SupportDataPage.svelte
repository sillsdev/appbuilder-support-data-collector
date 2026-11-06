<script lang="ts">
  import SupportDataSelector from "@sil/support-data/SupportDataSelector.svelte";
  import type { SupportDataItem, SupportDataItemId } from "@sil/support-data";
  import { upload } from "../state.svelte";
  import { m } from "../../lib/paraglide/messages.js";

  const requestedItems = $derived(upload.collectionRequest?.requestedItems ?? []);
  const localizedItemText = $derived<Record<
    SupportDataItemId,
    { name: string; description: string }
  >>({
    "project-config": {
      name: m.support_data_item_project_config_name(),
      description: m.support_data_item_project_config_description(),
    },
    "project-content": {
      name: m.support_data_item_project_content_name(),
      description: m.support_data_item_project_content_description(),
    },
    "project-resources": {
      name: m.support_data_item_project_resources_name(),
      description: m.support_data_item_project_resources_description(),
    },
    "custom-files": {
      name: m.support_data_item_custom_files_name(),
      description: m.support_data_item_custom_files_description(),
    },
    "firebase-config": {
      name: m.support_data_item_firebase_config_name(),
      description: m.support_data_item_firebase_config_description(),
    },
    "analytics-config": {
      name: m.support_data_item_analytics_config_name(),
      description: m.support_data_item_analytics_config_description(),
    },
    "ai-assistant-config": {
      name: m.support_data_item_ai_assistant_config_name(),
      description: m.support_data_item_ai_assistant_config_description(),
    },
    "ios-signing-config": {
      name: m.support_data_item_ios_signing_config_name(),
      description: m.support_data_item_ios_signing_config_description(),
    },
    "build-diagnostics": {
      name: m.support_data_item_build_diagnostics_name(),
      description: m.support_data_item_build_diagnostics_description(),
    },
  });
  const selectorStrings = $derived({
    heading: m.support_data_heading(),
    description: m.support_data_description(),
    requestedLabel: m.requested(),
    sensitiveLabel: m.sensitive(),
    selectedCount: (count: number) => m.selected_count({ count }),
    itemName: (item: SupportDataItem) => localizedItemText[item.id].name,
    itemDescription: (item: SupportDataItem) => localizedItemText[item.id].description,
  });

  export function canNext(): boolean {
    return upload.collectionRequest !== undefined;
  }
</script>

{#if upload.collectionRequest}
  <SupportDataSelector
    requestedItems={requestedItems}
    bind:selectedItems={upload.selectedItems}
    strings={selectorStrings}
  />
  <p class="mt-4 rounded-box border border-warning/40 bg-warning/10 p-3 text-sm">
    {m.sensitive_items_notice()}
  </p>
{:else}
  <p class="text-error">{m.collection_request_invalid()}</p>
{/if}
