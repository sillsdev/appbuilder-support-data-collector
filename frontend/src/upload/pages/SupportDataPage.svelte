<script lang="ts">
  import SupportDataSelector from "@sil/support-data/SupportDataSelector.svelte";
  import { upload } from "../state.svelte";

  const requestedItems = $derived(upload.collectionRequest?.requestedItems ?? []);

  export function canNext(): boolean {
    return upload.collectionRequest !== undefined;
  }
</script>

{#if upload.collectionRequest}
  <SupportDataSelector
    requestedItems={requestedItems}
    bind:selectedItems={upload.selectedItems}
  />
  <p class="mt-4 rounded-box border border-warning/40 bg-warning/10 p-3 text-sm">
    Sensitive items are marked for your review. Android keystores and passwords are never collected.
  </p>
{:else}
  <p class="text-error">The collection request could not be validated.</p>
{/if}
