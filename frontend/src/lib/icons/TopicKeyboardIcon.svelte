<script lang="ts">
    let { color = 'currentColor' } = $props();
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58 58" width="52" height="52"
    fill="none" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="10" y="16" width="38" height="26" rx="2.5"/>
    <!-- top row keys -->
    <rect x="15" y="21" width="4.5" height="4.5" rx="1.5" fill={color} stroke="none"/>
    <rect x="20.875" y="21" width="4.5" height="4.5" rx="1.5" fill={color} stroke="none"/>
    <rect x="26.75" y="21" width="4.5" height="4.5" rx="1.5" fill={color} stroke="none"/>
    <rect x="32.625" y="21" width="4.5" height="4.5" rx="1.5" fill={color} stroke="none"/>
    <rect x="38.5" y="21" width="4.5" height="4.5" rx="1.5" fill={color} stroke="none"/>
    <!-- middle row keys -->
    <rect x="15" y="28" width="4.5" height="4.5" rx="1.5" fill={color} stroke="none"/>
    <rect x="20.875" y="28" width="4.5" height="4.5" rx="1.5" fill={color} stroke="none"/>
    <rect x="26.75" y="28" width="4.5" height="4.5" rx="1.5" fill={color} stroke="none"/>
    <rect x="32.625" y="28" width="4.5" height="4.5" rx="1.5" fill={color} stroke="none"/>
    <rect x="38.5" y="28" width="4.5" height="4.5" rx="1.5" fill={color} stroke="none"/>
    <!-- spacebar -->
    <rect x="15" y="35" width="28" height="4" rx="1.5" fill={color} stroke="none"/>
</svg>
