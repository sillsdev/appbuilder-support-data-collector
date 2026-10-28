<script lang="ts">
  import { getSelectedProjectDataItems } from "../../components/projectData";
  import { upload } from "../state.svelte";
  import { m } from "../../lib/paraglide/messages.js";

  let selectedItems = $derived(getSelectedProjectDataItems(upload.selectedProjectData));

  export function canNext(): boolean {
    return upload.accessGranted;
  }

  function getAccess(): void {
    upload.accessGranted = true;
  }
</script>

<div class="mb-5">
  <h2 class="text-lg font-semibold">{m.access_page_title()}</h2>
  <p class="mt-1 text-sm text-base-content/70">
    {m.access_page_subtitle()}
  </p>
</div>

<fieldset class="dy-fieldset">
  <legend class="dy-fieldset-legend">{m.upload_location()}</legend>
  <input
    class="dy-input w-full text-base"
    type="url"
    value={upload.uploadUrl}
    readonly
    aria-label={m.upload_location_aria()}
  />
</fieldset>

<section class="mt-5 rounded-box border border-base-300 bg-base-200 p-4">
  <h3 class="text-sm font-semibold">Data selected for upload</h3>
  {#if selectedItems.length > 0}
    <ul class="mt-2 list-inside list-disc text-sm">
      {#each selectedItems as item (item.id)}
        <li>{item.fileName(upload.project?.name ?? "")}</li>
      {/each}
    </ul>
  {:else}
    <p class="mt-2 text-sm text-base-content/70">
      No project data is selected. No project files will be prepared for upload.
    </p>
  {/if}
  <p class="mt-3 text-sm text-base-content/70">
    Go Back to change your selection before requesting upload access.
  </p>
</section>

<section class="mt-5 rounded-box border border-base-300 bg-base-200 p-4">
  <h3 class="text-sm font-semibold">{m.access_status()}</h3>
  {#if upload.accessGranted}
    <p class="mt-2 text-sm text-success">
      {m.access_granted()}
    </p>
  {:else}
    <p class="mt-2 text-sm text-base-content/70">
      {m.access_not_granted()}
    </p>
    <button class="dy-btn dy-btn-sm dy-btn-primary mt-4" onclick={getAccess}>{m.get_access()}</button>
  {/if}
</section>
