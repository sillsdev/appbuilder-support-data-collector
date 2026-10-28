<script lang="ts">
  import { getSelectedProjectDataItems } from "../../components/projectData";
  import { upload } from "../state.svelte";
  import { m } from "../../lib/paraglide/messages.js";

  let selectedItems = $derived(getSelectedProjectDataItems(upload.selectedProjectData));

  export function canBack(): boolean {
    return false;
  }

  export function canCancel(): boolean {
    return false;
  }
</script>

<div class="mb-5">
  <h2 class="text-lg font-semibold">{m.uploading_support_data()}</h2>
  <p class="mt-1 text-sm text-base-content/70">
    {m.upload_wait()}
  </p>
</div>

<section class="rounded-box border border-base-300 bg-base-200 p-4">
 <h3 class="mb-3 text-sm font-semibold">{m.upload_progress()}</h3>
  
  <p class="mb-2 text-sm text-base-content/70">Project data selected for this upload:</p>
  {#if selectedItems.length > 0}
    <ul class="list-inside list-disc text-sm mb-4">
      {#each selectedItems as item (item.id)}
        <li>{item.fileName(upload.project?.name ?? "")}</li>
      {/each}
    </ul>
  {:else}
    <p class="text-sm text-base-content/70 mb-4">No project files were selected for upload.</p>
  {/if}

  <textarea
    class="dy-textarea h-48 w-full font-mono text-sm leading-6"
    readonly
    aria-label={m.upload_progress_aria()}
  >{`${m.preparing_project({ name: upload.project?.name ?? "" })}
${m.filename_app_def()}
${m.filename_settings()}
${m.filename_database()}
${m.filename_icon()}
${m.filename_log()}
`}</textarea>
</section>
