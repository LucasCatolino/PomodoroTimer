<script lang="ts">
    import Title from "$lib/title.svelte";
    import '../styles/global.css';
    import Navbar from '$lib/components/Navbar.svelte';
    import Footer from "$lib/components/Footer.svelte";
    import type { Theme } from "$lib/components/Themes.svelte";

    let { data } = $props()

    let theme = $state("dark" as Theme)
</script>

<div data-theme={ theme }>
    <Navbar bind:theme/>
    
    <main>
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
<!--style>
    header {
        text-align: center;
        background-color: rgba(0, 0, 0, 0.1);
    }

    main {
        max-width: 960px;
        margin: 20px auto;
    }

    footer {
        text-align: center;
    }

    .links {
        margin-left: auto;
    }

    a {
        margin-left: 10px;
    }

    nav {
        display: flex;
        align-items: center;
        max-width: 960px;
        margin: 0 auto;
    }
</style-->