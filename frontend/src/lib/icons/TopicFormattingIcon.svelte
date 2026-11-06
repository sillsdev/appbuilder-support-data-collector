<script lang="ts">
    let { color = 'currentColor' } = $props();
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58 58" width="52" height="52"
    fill="none" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="13" y="15" width="29" height="20" rx="2.5"/>
    <path d="M 25 35 L 21 42 L 32 35"/>
    <line x1="20" y1="23" x2="35" y2="23"/>
    <line x1="20" y1="29" x2="31" y2="29"/>
</svg>
