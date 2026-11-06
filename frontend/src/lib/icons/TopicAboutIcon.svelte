<script lang="ts">
    let { color = 'currentColor' } = $props();
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58 58" width="52" height="52"
    fill="none" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="28" cy="28" r="16"/>
    <circle cx="28" cy="21" r="1.5" fill={color} stroke="none"/>
    <line x1="28" y1="26" x2="28" y2="36"/>
</svg>
