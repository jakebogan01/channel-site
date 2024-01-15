<script>
    /* svelte-ignore unused-export-let */
    export let filterBy
</script>

<tr>
    {#if filterBy === "Images"}
        <th scope="col" class="py-2 font-medium text-center px-8">Image</th>
    {:else}
        <th scope="col" class="py-2 pl-4 font-medium sm:pl-6 lg:pl-8">Title</th>
    {/if}
    <th scope="col" class="hidden py-2 text-center font-medium md:table-cell">Group</th>
    <th scope="col" class="hidden sm:table-cell py-2 text-center font-medium px-12">Type</th>
    {#if filterBy === "Images"}
        <th scope="col" class="py-2 font-medium text-center px-8">Download</th>
    {:else}
        <th scope="col" class="py-2 font-medium text-center px-8">Save</th>
    {/if}
</tr>