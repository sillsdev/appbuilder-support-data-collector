<script lang="ts">
    let { color = 'currentColor' } = $props();
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58 58" width="52" height="52"
    fill="none" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="12" y="13" width="34" height="21" rx="1.5"/>
    <line x1="29" y1="13" x2="29" y2="34"/>
    <line x1="17" y1="20" x2="25" y2="20"/>
    <line x1="33" y1="20" x2="41" y2="20"/>
    <line x1="17" y1="26" x2="25" y2="26"/>
    <line x1="33" y1="26" x2="41" y2="26"/>
    <line x1="19" y1="42" x2="39" y2="42"/>
    <path d="M 20 46 L 15 42 L 20 38"/>
    <path d="M 38 38 L 43 42 L 38 46"/>
</svg>
