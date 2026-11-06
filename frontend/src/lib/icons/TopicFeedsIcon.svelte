<script lang="ts">
    let { color = 'currentColor' } = $props();
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58 58" width="52" height="52"
    fill="none" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <!-- RSS dot -->
    <circle cx="17" cy="40" r="2" fill={color} stroke="none"/>
    <!-- small arc: cx=21 cy=36 r=9, from 0° to 90° CCW on screen -->
    <path d="M 30 36 A 9 9 0 0 0 21 27"/>
    <!-- large arc: cx=25 cy=32 r=15, from 0° to 90° CCW on screen -->
    <path d="M 40 32 A 15 15 0 0 0 25 17"/>
</svg>
