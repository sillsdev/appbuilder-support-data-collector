<script lang="ts">
    let { color = 'currentColor' } = $props();
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58 58" width="52" height="52"
    fill="none" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="13" y="16" width="32" height="29" rx="1.5"/>
    <line x1="13" y1="25" x2="45" y2="25"/>
    <line x1="21" y1="12" x2="21" y2="20"/>
    <line x1="37" y1="12" x2="37" y2="20"/>
    <!-- checkmark -->
    <line x1="21" y1="35" x2="27" y2="41"/>
    <line x1="27" y1="41" x2="38" y2="30"/>
</svg>
