<script lang="ts">
    let { color = 'currentColor' } = $props();
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58 58" width="52" height="52"
    fill="none" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <!-- outer circle -->
    <circle cx="29" cy="29" r="15"/>
    <!-- longitude oval -->
    <ellipse cx="29" cy="29" rx="9" ry="15"/>
    <!-- equator -->
    <line x1="15" y1="29" x2="43" y2="29"/>
    <!-- latitude oval -->
    <ellipse cx="29" cy="29" rx="13" ry="9"/>
</svg>
