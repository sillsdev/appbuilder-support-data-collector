<script lang="ts">
    let { color = 'currentColor' } = $props();
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58 58" width="52" height="52"
    fill="none" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="14" y="13" width="30" height="32"/>
    <line x1="19" y1="21" x2="36" y2="21"/>
    <line x1="19" y1="27" x2="31" y2="27"/>
    <line x1="28" y1="37" x2="39" y2="37"/>
    <!-- search magnifier: circle cx=22 cy=35 r=5 -->
    <circle cx="22" cy="35" r="5"/>
    <line x1="25" y1="38" x2="30" y2="43"/>
    <!-- horizontal arrow -->
    <line x1="31" y1="31" x2="39" y2="31"/>
    <path d="M 39 31 L 35 28 M 39 31 L 35 34"/>
</svg>
