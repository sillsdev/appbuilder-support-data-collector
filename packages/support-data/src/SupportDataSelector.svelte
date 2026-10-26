<script lang="ts">
  import {
    SUPPORT_DATA_ITEMS,
    toggleSupportDataItem,
    type SupportDataItem,
    type SupportDataItemId,
  } from "./index";

  export interface SupportDataSelectorStrings {
    heading: string;
    description: string;
    requestedLabel: string;
    sensitiveLabel: string;
    selectedCount: (count: number) => string;
  }

  export interface SupportDataSelectorProps {
    availableItems?: readonly SupportDataItem[];
    requestedItems?: readonly SupportDataItemId[];
    selectedItems?: SupportDataItemId[];
    strings?: Partial<SupportDataSelectorStrings>;
  }

  const defaultStrings: SupportDataSelectorStrings = {
    heading: "Support data to include",
    description:
      "Select only the information you want to share. Requested items are recommendations, not permission to collect data.",
    requestedLabel: "Requested",
    sensitiveLabel: "Sensitive",
    selectedCount: (count) => `${count} ${count === 1 ? "item" : "items"} selected.`,
  };

  let {
    availableItems = SUPPORT_DATA_ITEMS,
    requestedItems = [],
    selectedItems = $bindable([...requestedItems]),
    strings = {},
  }: SupportDataSelectorProps = $props();
  const requested = $derived(new Set(requestedItems));
  const localizedStrings = $derived({ ...defaultStrings, ...strings });

  function toggleItem(id: SupportDataItemId): void {
    selectedItems = toggleSupportDataItem(selectedItems, id);
  }
</script>

<section class="space-y-3" aria-labelledby="support-data-selection-heading">
  <div>
    <h2 id="support-data-selection-heading" class="text-lg font-semibold">
      {localizedStrings.heading}
    </h2>
    <p class="mt-1 text-sm text-base-content/70">{localizedStrings.description}</p>
  </div>

  <div class="space-y-2">
    {#each availableItems as item (item.id)}
      {@const isSelected = selectedItems.includes(item.id)}
      <label class="flex cursor-pointer items-start gap-3 rounded-box border border-base-300 bg-base-100 p-3">
        <input
          class="dy-checkbox dy-checkbox-sm mt-0.5"
          type="checkbox"
          checked={isSelected}
          onchange={() => toggleItem(item.id)}
          aria-label={item.displayName}
        />
        <span class="min-w-0 flex-1">
          <span class="flex flex-wrap items-center gap-2 font-medium">
            {item.displayName}
            {#if requested.has(item.id)}
              <span class="dy-badge dy-badge-sm dy-badge-outline">
                {localizedStrings.requestedLabel}
              </span>
            {/if}
            {#if item.sensitive}
              <span class="dy-badge dy-badge-sm dy-badge-warning">
                {localizedStrings.sensitiveLabel}
              </span>
            {/if}
          </span>
          <span class="mt-1 block text-sm text-base-content/70">{item.description}</span>
        </span>
      </label>
    {/each}
  </div>

  <p class="text-sm text-base-content/70">{localizedStrings.selectedCount(selectedItems.length)}</p>
</section>
