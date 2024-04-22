<script lang="ts">
    import { resolveRoute } from "$app/paths";
    import { page } from "$app/stores";
    import Themes from "./Themes.svelte";

    let { theme } = $props<{ theme: Themes }>()

    function toggleTheme() {
        theme = theme.toString() === "light" ? "dark" : "light";
    }

    function getIcon() {
        return theme.toString() === "light" ? "🌙" : "🌞";
    }

    export function getTheme() {
        return theme;
    }
  
</script>

<nav>
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
            <div>
                <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div class="flex flex-shrink-0 items-center">
                        <a href="/">
                            <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company">
                        </a>
                    </div>
                    <div class="hidden sm:ml-6 sm:block">
                        <div class="flex space-x-4">
                            <a href="/" class="{($page.url.pathname === '/') ? 'bg-gray-900 text-white' : ''} hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Home</a>
                            <a href="/about" class="{($page.url.pathname === '/about') ? 'bg-gray-900 text-white' : ''} hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">About</a>
                            <a href="/study" class="{($page.url.pathname === '/study') ? 'bg-gray-900 text-white' : ''} hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Study</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 relative ml-3">
                <div>
                    <label class="inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" class="sr-only peer" onclick={toggleTheme}>
                        <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">{ getIcon() }</span>
                    </label>
                </div>
                <a href="/login" type="button" class="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 14c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 0a4 4 0 110-8 4 4 0 010 8z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M20 21v-1a4 4 0 00-4-4H8a4 4 0 00-4 4v1" />
                    </svg>
                </a>
            </div>
        </div>
    </div>
</nav>