<script lang="ts">
    let { color = 'currentColor' } = $props();
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58 58" width="52" height="52"
    fill="none" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="14" y="12" width="30" height="34"/>
    <rect x="18" y="18" width="7" height="7" fill={color} stroke="none"/>
    <line x1="29" y1="19" x2="39" y2="19"/>
    <line x1="29" y1="24" x2="37" y2="24"/>
    <rect x="18" y="32" width="7" height="7" fill={color} stroke="none"/>
    <line x1="29" y1="33" x2="39" y2="33"/>
    <line x1="29" y1="38" x2="37" y2="38"/>
</svg>
