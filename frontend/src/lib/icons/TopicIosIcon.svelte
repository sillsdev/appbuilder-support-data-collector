<script lang="ts">
    let { color = 'currentColor' } = $props();
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58 58" width="52" height="52"
    fill="none" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="18" y="9" width="22" height="40" rx="3"/>
    <line x1="27" y1="13" x2="31" y2="13"/>
    <line x1="26" y1="46" x2="32" y2="46"/>
    <text x="29" y="34" text-anchor="middle" font-weight="bold" font-size="10" fill={color} stroke="none">iOS</text>
</svg>
