<script lang="ts">
    let { color = 'currentColor' } = $props();
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58 58" width="52" height="52"
    fill="none" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="13" y="14" width="32" height="30" rx="1.5"/>
    <line x1="13" y1="23" x2="45" y2="23"/>
    <line x1="21" y1="23" x2="21" y2="44"/>
    <circle cx="19.5" cy="19.5" r="1.5" fill={color} stroke="none"/>
    <circle cx="25.5" cy="19.5" r="1.5" fill={color} stroke="none"/>
</svg>
