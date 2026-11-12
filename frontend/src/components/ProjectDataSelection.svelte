<script lang="ts">
  import type { ProjectDataItemId, ProjectDataSelection } from "./projectData";
  import type { ProjectInfo } from "../../bindings/github.com/sillsdev/appbuilder-support-data-collector";
  import { projectDataItems } from "./projectData";
  import { m } from "../lib/paraglide/messages.js";

  interface Props {
    project: ProjectInfo;
    selection: ProjectDataSelection;
    onSelectionChange: (id: ProjectDataItemId, selected: boolean) => void;
  }

  let { project, selection, onSelectionChange }: Props = $props();
</script>

<fieldset>
  <legend class="sr-only">{m.project_data_legend()}</legend>
  <ul class="space-y-3">
    {#each projectDataItems as item (item.id)}
      {@const fileName = item.fileName(project)}
      {@const isAvailable = item.isAvailable(project)}
      <li>
        <div class="flex gap-3 rounded-box border border-base-300 bg-base-200 p-4">
          <input
            class="dy-checkbox dy-checkbox-primary mt-1"
            type="checkbox"
            checked={isAvailable && selection[item.id]}
            disabled={item.excluded || !isAvailable}
            aria-label={m.project_data_include_aria({ name: item.title() })}
            onchange={(event) => onSelectionChange(item.id, event.currentTarget.checked)}
          />
          <span class="min-w-0 flex-1">
            <span class="flex flex-wrap items-center gap-2 font-medium">
              <span
                class="inline-flex h-8 w-8 shrink-0 items-center justify-center text-base-content/70 [&>svg]:h-8 [&>svg]:w-8"
                aria-hidden="true"
              >
                <item.icon />
              </span>
              {item.title()}
              {#if !isAvailable}
                <span class="dy-badge dy-badge-ghost dy-badge-sm">{m.project_data_not_found()}</span>
              {:else if item.excluded}
                <span class="dy-badge dy-badge-ghost dy-badge-sm">{m.project_data_excluded()}</span>
              {:else if selection[item.id]}
                <span class="dy-badge dy-badge-primary dy-badge-sm">{m.project_data_included()}</span>
              {:else}
                <span class="dy-badge dy-badge-ghost dy-badge-sm">{m.project_data_not_included()}</span>
              {/if}
              {#if !item.excluded}
                <span class="dy-badge dy-badge-outline dy-badge-sm">{m.project_data_requested_by_support()}</span>
              {/if}
            </span>
            {#if item.description(project)}
              <span class="mt-1 block text-sm text-base-content/70">{item.description(project)}</span>
            {/if}
            {#if fileName !== undefined}
              <code class="mt-2 block break-all text-sm">{fileName}</code>
            {/if}
            {#if item.sensitiveNote}
              <span class="mt-2 block text-sm font-medium text-base-content">
                {m.project_data_sensitive_prefix()} {item.sensitiveNote()}
              </span>
            {/if}
          </span>
        </div>
      </li>
    {/each}
  </ul>
</fieldset>
