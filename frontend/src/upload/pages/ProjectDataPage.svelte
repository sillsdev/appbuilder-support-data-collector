<script lang="ts">
  import ProjectDataSelection from "../../components/ProjectDataSelection.svelte";
  import type { ProjectDataItemId } from "../../components/projectData";
  import { upload } from "../state.svelte";
  import { m } from "../../lib/paraglide/messages.js";

  function setSelected(id: ProjectDataItemId, selected: boolean): void {
    upload.selectedProjectData[id] = selected;
  }
</script>

<div class="mb-5">
  <h2 class="text-lg font-semibold">{m.project_data_heading()}</h2>
  <p class="mt-1 text-sm text-base-content/70">
    {m.project_data_intro()}
  </p>
</div>

{#if upload.project}
  <ProjectDataSelection
    project={upload.project}
    selection={upload.selectedProjectData}
    onSelectionChange={setSelected}
  />
{/if}

<p class="mt-4 text-sm text-base-content/70">
  {m.project_data_footer_before()} <strong>{m.project_data_included()}</strong>
  {m.project_data_footer_after()}
</p>
