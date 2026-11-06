<script lang="ts">
    let { color = 'currentColor' } = $props();
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58 58" width="52" height="52"
    fill="none" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <line x1="14" y1="41" x2="44" y2="41"/>
    <line x1="16" y1="41" x2="16" y2="16"/>
    <rect x="21" y="32" width="5" height="9" fill={color} stroke="none"/>
    <rect x="29" y="25" width="5" height="16" fill={color} stroke="none"/>
    <rect x="37" y="19" width="5" height="22" fill={color} stroke="none"/>
    <line x1="20" y1="28" x2="30" y2="22"/>
    <line x1="30" y1="22" x2="42" y2="15"/>
</svg>
