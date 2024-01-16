<script>
    import { links } from '../stores/linksStore'
    import { saved } from "../stores/savedStore";

    /* svelte-ignore unused-export-let */
    export let useLinkIcon, favoriteList, active = false
    /* svelte-ignore unused-export-let */
    export let title, id

    const deleteItem = () => {
        // delete item from saved store
        saved.update(items => items.filter(item => item.id !== id))

        // update links store to update saved status to false
        links.update((arr) => {
            return arr.map((item) => {
                if (item.id === id) {
                    return {
                        ...item,
                        save: !item.save
                    };
                }
                return item;
            });
        });
    }
</script>

<li class="relative flex justify-between items-center">
    <a href="#" on:click class="inline-flex items-center {active ? 'text-white' : 'text-[#446674]'} hover:text-white ml-[20px] text-sm group leading-8 transition-colors clamp">
        <svg xmlns="http://www.w3.org/2000/svg" width="11.547" height="11.547" class="inline mr-1 group-hover:text-[#248AB6] shrink-0"><path fill="{active ? '#248AB6' : 'currentColor'}" aria-hidden="true" d="M5.773 11.547a5.664 5.664 0 0 1-2.244-.457A5.649 5.649 0 0 1 .457 8.017a5.741 5.741 0 0 1 0-4.488A5.649 5.649 0 0 1 3.529.457a5.741 5.741 0 0 1 4.488 0 5.649 5.649 0 0 1 3.073 3.072 5.741 5.741 0 0 1 0 4.488 5.649 5.649 0 0 1-3.073 3.073 5.664 5.664 0 0 1-2.244.457Zm0-8.66a2.781 2.781 0 0 0-2.041.846 2.781 2.781 0 0 0-.846 2.041 2.781 2.781 0 0 0 .846 2.041 2.781 2.781 0 0 0 2.041.846 2.781 2.781 0 0 0 2.041-.846 2.781 2.781 0 0 0 .846-2.042 2.781 2.781 0 0 0-.846-2.041 2.781 2.781 0 0 0-2.041-.845Z"/></svg>
        {title}
        {#if useLinkIcon}
            <svg xmlns="http://www.w3.org/2000/svg" width="8.469" height="8.469" class="shrink-0 ml-1.5 mt-px inline"><g fill="currentColor" aria-hidden="true"><path d="m4.705 0 1.549 1.549L2.96 4.843l.665.665 3.292-3.293 1.549 1.549V0Z"/><path d="M7.528 7.528H.941V.941h3.294L3.294 0H.941A.942.942 0 0 0 0 .941v6.587a.942.942 0 0 0 .941.941h6.587a.942.942 0 0 0 .941-.941V5.176l-.941-.941Z"/></g></svg>
        {/if}

    </a>
    {#if favoriteList}
        <button type="button" on:click={deleteItem} class="text-[#446674] mr-2.5 hover:text-white transition-colors cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-[17px] h-[17px]"><path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM8.28 7.22a.75.75 0 0 0-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 1 0 1.06 1.06L10 11.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L11.06 10l1.72-1.72a.75.75 0 0 0-1.06-1.06L10 8.94 8.28 7.22Z" clip-rule="evenodd" /></svg>
        </button>
    {/if}
    <span class="absolute top-1/2 transform -translate-y-1/2 left-0 h-[3px] w-[10px] bg-[#194355]"></span>
</li>

<style>
    .clamp {
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
    }
</style>