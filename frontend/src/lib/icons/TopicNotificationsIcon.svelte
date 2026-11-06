<script lang="ts">
    let { color = 'currentColor' } = $props();
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58 58" width="52" height="52"
    fill="none" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M 18 36 C 21 31 19 25 22 20 C 25 15 33 15 36 20 C 39 25 37 31 40 36 Z"/>
    <line x1="16" y1="36" x2="42" y2="36"/>
    <!-- clapper: bottom half of circle cx=29 cy=40 r=4 -->
    <path d="M 25 40 A 4 4 0 0 0 33 40"/>
</svg>
