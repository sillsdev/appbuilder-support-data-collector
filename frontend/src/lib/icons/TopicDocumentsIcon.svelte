<script lang="ts">
    let { color = 'currentColor' } = $props();
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58 58" width="52" height="52"
    fill="none" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M 18 11 L 34 11 L 43 20 L 43 47 L 18 47 Z"/>
    <line x1="34" y1="11" x2="34" y2="20"/>
    <line x1="34" y1="20" x2="43" y2="20"/>
    <line x1="23" y1="28" x2="38" y2="28"/>
    <line x1="23" y1="34" x2="38" y2="34"/>
</svg>
