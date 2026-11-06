<script lang="ts">
    let { color = 'currentColor' } = $props();
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58 58" width="52" height="52"
    fill="none" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="15" y="12" width="28" height="34"/>
    <line x1="21" y1="21" x2="37" y2="21"/>
    <line x1="21" y1="27" x2="34" y2="27"/>
    <line x1="21" y1="33" x2="31" y2="33"/>
    <rect x="20" y="37" width="17" height="4" fill={color} stroke="none"/>
</svg>
