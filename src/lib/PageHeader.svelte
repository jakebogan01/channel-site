<script>
    /* svelte-ignore unused-export-let */
    export let filterBy, updatedLinks
</script>

<h2 class="px-4 py-6 text-lg font-medium leading-7 text-[#248AB6] sm:px-6 lg:px-8 border-r border-l border-b border-[#D3DFE0] uppercase">
    / {filterBy}
    <span class="text-[#C6C6C6] text-xs font-normal">({updatedLinks.length})</span>
</h2>