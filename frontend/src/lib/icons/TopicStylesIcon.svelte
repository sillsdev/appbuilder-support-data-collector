<script lang="ts">
    let { color = 'currentColor' } = $props();
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58 58" width="52" height="52"
    fill="none" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <line x1="16" y1="20" x2="42" y2="20"/>
    <line x1="16" y1="29" x2="42" y2="29"/>
    <line x1="16" y1="38" x2="42" y2="38"/>
    <circle cx="25" cy="20" r="3" fill={color} stroke="none"/>
    <circle cx="35" cy="29" r="3" fill={color} stroke="none"/>
    <circle cx="28" cy="38" r="3" fill={color} stroke="none"/>
</svg>
