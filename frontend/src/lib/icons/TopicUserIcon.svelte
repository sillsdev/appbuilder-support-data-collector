<script lang="ts">
    let { color = 'currentColor' } = $props();
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58 58" width="52" height="52"
    fill="none" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="29" cy="20" r="6"/>
    <!-- body arc: cx=29 cy=38 rx=13 ry=11, from 25° to 155° CCW on screen -->
    <path d="M 40.78 33.35 A 13 11 0 0 0 17.22 33.35"/>
</svg>
