<script lang="ts">
    let { color = 'currentColor' } = $props();
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58 58" width="52" height="52"
    fill="none" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="13" y="14" width="32" height="30" rx="1.5"/>
    <line x1="19" y1="23" x2="39" y2="23"/>
    <line x1="19" y1="31" x2="39" y2="31"/>
    <line x1="19" y1="39" x2="31" y2="39"/>
</svg>
