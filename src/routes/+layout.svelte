<script lang="ts">
    import '../styles/global.css';
    import Navbar from '$lib/components/Navbar.svelte';
    import Footer from "$lib/components/Footer.svelte";
    import type { Theme } from "$lib/components/Themes.svelte";

    let { data } = $props()

    let theme = $state("dark" as Theme)
</script>

<div data-theme={ theme } class="flex flex-col min-h-screen">
    <Navbar bind:theme/>
    
    <main class="body bg-gradient-to-br from-blue-500 to-green-400 h-fit">
        <!-- page content -->
        <slot></slot>
    </main>
    
    <Footer/>
</div>

<style lang="postcss">
    :global(body) {
      @apply flex min-h-screen;
    }
  
    div {
      @apply flex-1;
      @apply flex flex-col;
      @apply bg-background text-foreground;
    }
  
    header {
      @apply h-12 px-4;
      @apply bg-foreground bg-opacity-5;
      @apply drop-shadow-md;
      @apply flex flex-row items-center;
    }
</style>