<script lang="ts">
    let { color = 'currentColor' } = $props();
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58 58" width="52" height="52"
    fill="none" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="23" y="11" width="12" height="9" rx="1.5"/>
    <line x1="29" y1="20" x2="29" y2="32"/>
    <line x1="15" y1="26" x2="43" y2="26"/>
    <line x1="15" y1="26" x2="15" y2="32"/>
    <line x1="43" y1="26" x2="43" y2="32"/>
    <rect x="10" y="32" width="10" height="9" rx="1.5"/>
    <rect x="24" y="32" width="10" height="9" rx="1.5"/>
    <rect x="38" y="32" width="10" height="9" rx="1.5"/>
</svg>
