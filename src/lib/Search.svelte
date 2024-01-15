<script>
    /* svelte-ignore unused-export-let */
    export let searchField = '';
</script>

<div class="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
    <form on:submit|preventDefault class="flex flex-1">
        <label for="search-field" class="sr-only">Search</label>
        <div class="relative flex items-center w-full">
            <svg class="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-[#A4A4A4]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd" /></svg>
            <input id="search-field" bind:value={searchField} on:input on:change class="block h-full w-full border-0 bg-transparent py-0 pl-8 pr-0 text-[#667979] focus:ring-0 sm:text-sm placeholder-[#A4A4A4]" placeholder="Search..." type="search" name="search">
            <a href="/">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-[#726E6E] hover:text-black"><path fill-rule="evenodd" d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z" clip-rule="evenodd" /></svg>
            </a>
        </div>
    </form>
</div>