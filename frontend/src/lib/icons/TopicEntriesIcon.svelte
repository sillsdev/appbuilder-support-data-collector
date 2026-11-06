<script lang="ts">
    let { color = 'currentColor' } = $props();
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58 58" width="52" height="52"
    fill="none" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <!-- bold headwords -->
    <line x1="15" y1="15" x2="26" y2="15" stroke-width="4"/>
    <line x1="15" y1="33" x2="28" y2="33" stroke-width="4"/>
    <!-- definition text lines -->
    <line x1="31" y1="15" x2="43" y2="15"/>
    <line x1="15" y1="22" x2="39" y2="22"/>
    <line x1="33" y1="33" x2="43" y2="33"/>
    <line x1="15" y1="40" x2="36" y2="40"/>
</svg>
