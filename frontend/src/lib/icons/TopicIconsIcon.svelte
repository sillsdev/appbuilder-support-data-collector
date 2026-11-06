<script lang="ts">
    let { color = 'currentColor' } = $props();
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58 58" width="52" height="52"
    fill="none" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="15" y="15" width="11" height="11" rx="1.5"/>
    <rect x="32" y="15" width="11" height="11" rx="1.5"/>
    <rect x="15" y="32" width="11" height="11" rx="1.5"/>
    <rect x="32" y="32" width="11" height="11" rx="1.5"/>
</svg>
