<script lang="ts">
  import type { ProjectDataItemId, ProjectDataSelection } from "./projectData";
  import { projectDataItems } from "./projectData";

  interface Props {
    projectName: string;
    selection: ProjectDataSelection;
    onSelectionChange: (id: ProjectDataItemId, selected: boolean) => void;
  }

  let { projectName, selection, onSelectionChange }: Props = $props();
</script>

<fieldset>
  <legend class="sr-only">Project data to include</legend>
  <ul class="space-y-3">
    {#each projectDataItems as item (item.id)}
      <li>
        <div class="flex gap-3 rounded-box border border-base-300 bg-base-200 p-4">
          <input
            class="dy-checkbox dy-checkbox-primary mt-1"
            type="checkbox"
            checked={selection[item.id]}
            aria-label={`Include ${item.title}`}
            onchange={(event) => onSelectionChange(item.id, event.currentTarget.checked)}
          />
          <span class="min-w-0 flex-1">
            <span class="flex flex-wrap items-center gap-2 font-medium">
              {item.title}
              {#if selection[item.id]}
                <span class="dy-badge dy-badge-primary dy-badge-sm">Included</span>
              {:else}
                <span class="dy-badge dy-badge-ghost dy-badge-sm">Not included</span>
              {/if}
              <span class="dy-badge dy-badge-outline dy-badge-sm">Requested by support</span>
            </span>
            <span class="mt-1 block text-sm text-base-content/70">{item.description}</span>
            <code class="mt-2 block break-all text-sm">{item.fileName(projectName)}</code>
            {#if item.sensitiveNote}
              <span class="mt-2 block text-sm text-warning">
                Sensitive data: {item.sensitiveNote}
              </span>
            {/if}
          </span>
        </div>
      </li>
    {/each}
  </ul>
</fieldset>
