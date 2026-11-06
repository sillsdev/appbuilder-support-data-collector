<script lang="ts">
    let { color = 'currentColor' } = $props();
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58 58" width="52" height="52"
    fill="none" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="13" y="15" width="32" height="28"/>
    <line x1="17" y1="22" x2="28" y2="22"/>
    <line x1="17" y1="27" x2="25" y2="27"/>
    <circle cx="39.5" cy="22.5" r="2.5"/>
    <path d="M 16 39 L 25 29 L 31 35 L 36 30 L 43 39"/>
</svg>
