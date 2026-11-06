<script lang="ts">
    let { color = 'currentColor' } = $props();
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58 58" width="52" height="52"
    fill="none" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="17" y="10" width="24" height="38" rx="2"/>
    <line x1="17" y1="38" x2="41" y2="38"/>
    <circle cx="22.5" cy="43.5" r="1.5" fill={color} stroke="none"/>
    <circle cx="29.5" cy="43.5" r="1.5" fill={color} stroke="none"/>
    <circle cx="36.5" cy="43.5" r="1.5" fill={color} stroke="none"/>
</svg>
