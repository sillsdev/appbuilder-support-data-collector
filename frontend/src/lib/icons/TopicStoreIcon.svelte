<script lang="ts">
    let { color = 'currentColor' } = $props();
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58 58" width="52" height="52"
    fill="none" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="16" y="25" width="26" height="20"/>
    <line x1="13" y1="25" x2="18" y2="15"/>
    <line x1="18" y1="15" x2="40" y2="15"/>
    <line x1="40" y1="15" x2="45" y2="25"/>
    <line x1="13" y1="25" x2="45" y2="25"/>
    <!-- awning panel dividers -->
    <line x1="22" y1="15" x2="20" y2="25"/>
    <line x1="29" y1="15" x2="29" y2="25"/>
    <line x1="36" y1="15" x2="38" y2="25"/>
</svg>
