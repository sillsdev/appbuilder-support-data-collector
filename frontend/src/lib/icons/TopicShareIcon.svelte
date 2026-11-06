<script lang="ts">
    let { color = 'currentColor' } = $props();
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58 58" width="52" height="52"
    fill="none" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="40" cy="16" r="5" fill={color} stroke="none"/>
    <circle cx="18" cy="29" r="5" fill={color} stroke="none"/>
    <circle cx="40" cy="42" r="5" fill={color} stroke="none"/>
    <line x1="18" y1="29" x2="40" y2="16"/>
    <line x1="18" y1="29" x2="40" y2="42"/>
</svg>
