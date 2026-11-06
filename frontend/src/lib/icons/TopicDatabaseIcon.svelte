<script lang="ts">
    let { color = 'currentColor' } = $props();
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58 58" width="52" height="52"
    fill="none" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <!-- top ellipse (lid) -->
    <ellipse cx="29" cy="15" rx="13" ry="4"/>
    <!-- cylinder sides -->
    <line x1="16" y1="15" x2="16" y2="43"/>
    <line x1="42" y1="15" x2="42" y2="43"/>
    <!-- horizontal band arcs (bottom halves of ellipses) -->
    <path d="M 16 27 A 13 4 0 0 0 42 27"/>
    <path d="M 16 35 A 13 4 0 0 0 42 35"/>
    <path d="M 16 43 A 13 4 0 0 0 42 43"/>
</svg>
