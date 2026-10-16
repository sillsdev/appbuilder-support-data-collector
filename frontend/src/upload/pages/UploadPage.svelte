<script lang="ts">
  import { upload } from "../state.svelte";
  import { m } from "../../lib/paraglide/messages.js";

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
