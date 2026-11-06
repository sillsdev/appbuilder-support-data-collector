<script lang="ts">
    let { color = 'currentColor' } = $props();
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58 58" width="52" height="52"
    fill="none" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="13" y="12" width="32" height="34" rx="1.5"/>
    <line x1="23" y1="12" x2="23" y2="46"/>
    <line x1="28" y1="22" x2="39" y2="22"/>
    <line x1="28" y1="29" x2="39" y2="29"/>
    <line x1="28" y1="36" x2="36" y2="36"/>
</svg>
