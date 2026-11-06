<script lang="ts">
  import ProjectDataSelection from "../../components/ProjectDataSelection.svelte";
  import type { ProjectDataItemId } from "../../components/projectData";
  import { upload } from "../state.svelte";

  function setSelected(id: ProjectDataItemId, selected: boolean): void {
    upload.selectedProjectData[id] = selected;
  }
</script>

<div class="mb-5">
  <h2 class="text-lg font-semibold">Choose Project Data</h2>
  <p class="mt-1 text-sm text-base-content/70">
    Support requested these project items for the investigation. Review what each contains and
    change the selection before continuing.
  </p>
</div>

{#if upload.project}
  <ProjectDataSelection
    projectName={upload.project.name}
    selection={upload.selectedProjectData}
    onSelectionChange={setSelected}
  />
{/if}

<p class="mt-4 text-sm text-base-content/70">
  You can deselect any item. Only items marked <strong>Included</strong> will be prepared for upload.
</p>
