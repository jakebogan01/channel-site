<script>
    /* svelte-ignore unused-export-let */
    export let link, i
</script>

{#if link?.backgroundImage}
    <tr class="{i % 2 === 0 ? 'bg-[#F7FCFF]' : 'bg-white'} hover:bg-[#E4EEF4]">
        <td class="py-2 pl-4 pr-8 sm:pl-6 lg:pl-8 lg:w-9/12 border border-[#D3DFE0]">
            <a href="#" target="_blank" class="flex items-center gap-x-4">
                <img src={link?.backgroundImage} alt="" class="h-10 w-10 rounded-sm bg-gray-800">
            </a>
        </td>
        <td class="hidden py-4 text-gray-400 font-light md:table-cell px-4 text-center border border-[#D3DFE0]">{link?.group}</td>
        <td class="hidden sm:table-cell py-4 text-sm leading-6 text-gray-400 font-light text-center border border-[#D3DFE0]">{link?.type}</td>
        <td class="py-4 border border-[#D3DFE0]">
            <button type="button" class="block mx-auto text-gray-400 hover:text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path fill-rule="evenodd" d="M2 4.75C2 3.784 2.784 3 3.75 3h4.836c.464 0 .909.184 1.237.513l1.414 1.414a.25.25 0 0 0 .177.073h4.836c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 16.25 17H3.75A1.75 1.75 0 0 1 2 15.25V4.75Zm8.75 4a.75.75 0 0 0-1.5 0v2.546l-.943-1.048a.75.75 0 1 0-1.114 1.004l2.25 2.5a.75.75 0 0 0 1.114 0l2.25-2.5a.75.75 0 1 0-1.114-1.004l-.943 1.048V8.75Z" clip-rule="evenodd" /></svg>
            </button>
        </td>
    </tr>
{:else}
    <tr class="{i % 2 === 0 ? 'bg-[#F7FCFF]' : 'bg-white'} hover:bg-[#E4EEF4]">
        <td class="py-4 pl-4 pr-8 sm:pl-6 lg:pl-8 lg:w-9/12 border border-[#D3DFE0]">
            <a href="#" target="_blank" class="flex items-center gap-x-4">
                <img src={link?.image} alt="" class="h-8 w-8 rounded-full bg-gray-800">
                <div class="truncate text-sm  leading-6 text-gray-400">{link?.title}</div>
            </a>
        </td>
        <td class="hidden py-4 text-gray-400 font-light md:table-cell px-4 text-center border border-[#D3DFE0]">{link?.group}</td>
        <td class="hidden sm:table-cell py-4 text-sm leading-6 text-gray-400 font-light text-center border border-[#D3DFE0]">{link?.type}</td>
        <td class="py-4 text-sm leading-6 text-gray-400 text-center border border-[#D3DFE0]">
            <input id="save" on:change aria-describedby="save-description" name="save" type="checkbox" class="h-4 w-4 rounded border-[#CBD4DC] text-[#CBD4DB] focus:ring-[#CBD4DC]" checked={link?.save}>
        </td>
    </tr>
{/if}