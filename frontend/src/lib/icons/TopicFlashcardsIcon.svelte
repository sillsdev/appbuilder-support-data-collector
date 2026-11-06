<script lang="ts">
    let { color = 'currentColor' } = $props();
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58 58" width="52" height="52"
    fill="none" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <!-- back card (partial outline) -->
    <path d="M 20 21 L 20 16 Q 20 12 24 12 L 42 12 Q 46 12 46 16 L 46 28 Q 46 32 42 32 L 41 32"/>
    <!-- front card -->
    <rect x="12" y="21" width="29" height="24" rx="4"/>
    <text x="26" y="39" text-anchor="middle" font-weight="bold" font-size="15" fill={color} stroke="none">A</text>
</svg>
