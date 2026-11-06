<script lang="ts">
  import Wizard from "./wizard/Wizard.svelte";
  import { pages } from "./upload/pages";

  let showIcons = $state(false);

  async function close(): Promise<void> {
    const { Window } = await import("@wailsio/runtime");
    Window.Close();
  }
</script>

{#if import.meta.env.DEV && showIcons}
  {#await import("./dev/IconGallery.svelte") then { default: IconGallery }}
    <IconGallery onclose={() => (showIcons = false)} />
  {/await}
{:else}
  <Wizard {pages} onfinish={close} oncancel={close}>
    {#snippet footerStart()}
      {#if import.meta.env.DEV}
        <button class="dy-btn dy-btn-sm dy-btn-ghost" onclick={() => (showIcons = true)}>Icons</button>
      {/if}
    {/snippet}
  </Wizard>
{/if}
