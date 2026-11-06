<script lang="ts">
    let { color = 'currentColor' } = $props();
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58 58" width="52" height="52"
    fill="none" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="14" y="17" width="12" height="12" fill={color} stroke="none"/>
    <rect x="29" y="17" width="12" height="12"/>
    <rect x="29" y="32" width="12" height="12" fill={color} stroke="none"/>
    <rect x="14" y="32" width="12" height="12"/>
</svg>
