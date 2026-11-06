<script lang="ts">
    let { color = 'currentColor' } = $props();
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58 58" width="52" height="52"
    fill="none" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <!-- speaker cone -->
    <path d="M 17 29 L 26 20 L 26 38 Z"/>
    <!-- small sound wave: 90° arc on right side, cx=30 cy=29 r=4 -->
    <path d="M 32.83 31.83 A 4 4 0 0 0 32.83 26.17"/>
    <!-- large sound wave: 90° arc on right side, cx=33 cy=29 r=8 -->
    <path d="M 38.66 34.66 A 8 8 0 0 0 38.66 23.34"/>
</svg>
