<script lang="ts">
    let { color = 'currentColor' } = $props();
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58 58" width="52" height="52"
    fill="none" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <text x="18" y="21" text-anchor="middle" font-weight="bold" font-size="11" fill={color} stroke="none">A</text>
    <text x="18" y="33" text-anchor="middle" font-weight="bold" font-size="11" fill={color} stroke="none">B</text>
    <text x="18" y="45" text-anchor="middle" font-weight="bold" font-size="11" fill={color} stroke="none">C</text>
    <line x1="26" y1="17" x2="43" y2="17"/>
    <line x1="26" y1="29" x2="40" y2="29"/>
    <line x1="26" y1="41" x2="42" y2="41"/>
</svg>
