<script lang="ts">
    let { color = 'currentColor' } = $props();
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58 58" width="52" height="52"
    fill="none" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="12" y="17" width="34" height="25" rx="1.5"/>
    <line x1="29" y1="17" x2="29" y2="42"/>
    <line x1="17" y1="24" x2="25" y2="24"/>
    <line x1="33" y1="24" x2="41" y2="24"/>
    <line x1="17" y1="30" x2="25" y2="30"/>
    <line x1="33" y1="30" x2="41" y2="30"/>
</svg>
