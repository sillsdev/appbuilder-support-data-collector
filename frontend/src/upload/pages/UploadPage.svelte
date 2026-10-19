<script lang="ts">
  import { UploadService } from "../../../bindings/github.com/sillsdev/appbuilder-support-data-collector";
  import { upload } from "../state.svelte";

  let loading = $state(false);
  let error = $state("");

  export function canNext(): boolean {
    return upload.accessGranted;
  }

  async function getAccess(): Promise<void> {
    loading = true;
    error = "";
    try {
      await UploadService.GetUploadAccess(upload.uploadUrl);
      upload.accessGranted = true;
    } catch (e) {
      error = e instanceof Error ? e.message : String(e);
    } finally {
      loading = false;
    }
  }
</script>

<div class="mb-5">
  <h2 class="text-lg font-semibold">Get Access</h2>
  <p class="mt-1 text-sm text-base-content/70">
    Confirm the upload location and request access before continuing.
  </p>
</div>

<fieldset class="dy-fieldset">
  <legend class="dy-fieldset-legend">Upload Location</legend>
  <input
    class="dy-input w-full text-base"
    type="url"
    value={upload.uploadUrl}
    readonly
    aria-label="Upload location"
  />
</fieldset>

<section class="mt-5 rounded-box border border-base-300 bg-base-200 p-4">
  <h3 class="text-sm font-semibold">Access Status</h3>
  {#if upload.accessGranted}
    <p class="mt-2 text-sm text-success">Access granted.</p>
  {:else}
    <p class="mt-2 text-sm {error ? 'text-error' : 'text-base-content/70'}">
      {error || "Access has not been granted yet. Use Get Access to continue."}
    </p>
    <button class="dy-btn dy-btn-sm dy-btn-primary mt-4" disabled={loading} onclick={getAccess}>Get Access</button>
  {/if}
</section>
