<script lang="ts">
    let { color = 'currentColor' } = $props();
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58 58" width="52" height="52"
    fill="none" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <!-- back screen (partial outline) -->
    <path d="M 26 15 L 17 15 Q 14 15 14 18 L 14 39 Q 14 42 17 42 L 26 42"/>
    <!-- front screen -->
    <rect x="26" y="12" width="18" height="31" rx="1.5"/>
    <!-- right arrow -->
    <line x1="31" y1="28" x2="38" y2="28"/>
    <line x1="35" y1="24" x2="39" y2="28"/>
    <line x1="35" y1="32" x2="39" y2="28"/>
</svg>
