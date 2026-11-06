<script lang="ts">
    let { color = 'currentColor' } = $props();
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58 58" width="52" height="52"
    fill="none" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <line x1="29" y1="24" x2="29" y2="44"/>
    <line x1="21" y1="44" x2="37" y2="44"/>
    <!-- small arc: cx=29 cy=25 r=10, from 35° to 145° CCW on screen -->
    <path d="M 37.19 19.26 A 10 10 0 0 0 20.81 19.26"/>
    <!-- large arc: cx=29 cy=25 r=16, from 35° to 145° CCW on screen -->
    <path d="M 42.11 15.82 A 16 16 0 0 0 15.89 15.82"/>
    <circle cx="29" cy="24" r="2" fill={color} stroke="none"/>
</svg>
