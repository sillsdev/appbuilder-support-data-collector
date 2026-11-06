<script lang="ts">
    let { color = 'currentColor' } = $props();
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58 58" width="52" height="52"
    fill="none" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="12" y="15" width="34" height="28" rx="1.5"/>
    <line x1="12" y1="23" x2="46" y2="23"/>
    <line x1="20" y1="31" x2="28" y2="35"/>
    <line x1="28" y1="35" x2="38" y2="28"/>
</svg>
