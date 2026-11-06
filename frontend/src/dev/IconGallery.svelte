<script lang="ts">
    let { onclose }: { onclose: () => void } = $props();

    const iconModules = import.meta.glob('../lib/icons/**/*.svelte', { eager: true });

    const icons = Object.entries(iconModules)
        .map(([path, module]) => {
            const fileName = path.split('/').at(-1)!;
            const name = fileName.replace('.svelte', '');
            const folder = path.replace(/.*\/icons\//, '').includes('/')
                ? path.replace(/.*\/icons\//, '').split('/')[0]
                : 'Icons';
            return { name, folder, component: (module as any).default };
        })
        .sort((a, b) => a.name.localeCompare(b.name));

    const groups = Object.groupBy(icons, (i) => i.folder);

    let selectedColor = $state('#000000');
    const presetColors = ['#000000', '#6b7280', '#3b82f6', '#ef4444', '#10b981', '#f59e0b'];
</script>

<div class="min-h-screen bg-gray-50 p-6">
    <div class="max-w-5xl mx-auto">
        <div class="flex items-center justify-between mb-6">
            <h1 class="text-2xl font-bold">Icon Gallery <span class="text-sm font-normal text-gray-500 ml-2">({icons.length} icons)</span></h1>
            <div class="flex items-center gap-3">
                <span class="text-sm font-medium text-gray-600">Color:</span>
                <div class="flex gap-1">
                    {#each presetColors as preset}
                        <button
                            onclick={() => selectedColor = preset}
                            class="w-6 h-6 rounded border-2 transition-transform hover:scale-110"
                            class:border-blue-500={selectedColor === preset}
                            class:border-transparent={selectedColor !== preset}
                            style="background-color: {preset}"
                            title={preset}
                        ></button>
                    {/each}
                </div>
                <input type="color" bind:value={selectedColor} class="w-8 h-8 rounded cursor-pointer border" />
                <button class="dy-btn dy-btn-sm ml-4" onclick={onclose}>Close</button>
            </div>
        </div>

        {#each Object.entries(groups) as [folder, folderIcons]}
            <div class="mb-8">
                <h2 class="text-lg font-semibold mb-3 pb-1 border-b border-gray-200">
                    {folder}
                </h2>
                <div class="grid grid-cols-[repeat(auto-fill,minmax(120px,1fr))] gap-3">
                    {#each folderIcons! as icon}
                        <div class="flex flex-col items-center gap-2 p-3 bg-white border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
                            <div class="flex items-center justify-center w-14 h-14">
                                <svelte:component this={icon.component} color={selectedColor} />
                            </div>
                            <span class="text-xs text-center text-gray-600 leading-tight break-all">{icon.name}</span>
                        </div>
                    {/each}
                </div>
            </div>
        {/each}
    </div>
</div>
