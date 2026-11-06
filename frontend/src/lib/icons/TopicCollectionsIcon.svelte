<script lang="ts">
    let { color = 'currentColor' } = $props();
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58 58" width="52" height="52"
    fill="none" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <!-- back card (partial outline) -->
    <path d="M 22 14 L 40 14 Q 43 14 43 17 L 43 29 Q 43 32 40 32 L 39 32 M 22 14 Q 19 14 19 17 L 19 20"/>
    <!-- middle card (partial outline) -->
    <path d="M 18 20 L 36 20 Q 39 20 39 23 L 39 35 Q 39 38 36 38 L 35 38 M 18 20 Q 15 20 15 23 L 15 26"/>
    <!-- front card -->
    <rect x="11" y="26" width="24" height="18" rx="1.5"/>
</svg>
