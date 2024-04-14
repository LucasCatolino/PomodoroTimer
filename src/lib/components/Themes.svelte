<script lang="ts" context="module">
    export const themes = ["light", "dark"] as const
    export type Theme = (typeof themes)[number]
</script>