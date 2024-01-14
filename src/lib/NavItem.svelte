<script>
    /* svelte-ignore unused-export-let */
    export let element, dataset
    let category
    let close = false

    const SubMenuStatus = () => {
        if (category !== dataset && close) {
            close = false
            return
        }
        category = dataset
    }
</script>
<li class="bg-[#09232E]">
    <button type="button" on:click={SubMenuStatus} bind:this={element} data-category={dataset} class="hover:text-white group flex w-full items-center justify-between gap-x-3 px-8 py-5 leading-6 hover:bg-[#248AB6] {(category === dataset && !close) ? 'text-white bg-[#248AB6]' : 'text-[#A6AAAD] bg-[#4A5863]'}" aria-current="page">
        <slot name="navTitle" />
        {#if (category === dataset && !close)}
            <button type="button" on:click={()=>{close = true; category = undefined}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="14.027" height="14.027" class="text-[#276d8b] hover:text-white shrink-0"><path fill="currentColor" aria-hidden="true" d="M7.014 0a7.014 7.014 0 1 0 7.014 7.014A7.022 7.022 0 0 0 7.014 0Zm2.921 9.172-.763.763-2.158-2.158L4.86 9.935l-.763-.763 2.158-2.158L4.093 4.86l.763-.763 2.158 2.158 2.158-2.158.763.763-2.158 2.158Z"/></svg>
            </button>
        {/if}
    </button>
    <ul class="relative bg-[#09232E] border-l-[3px] border-[#194355] ml-[42px] mr-[20px] overflow-hidden {(category === dataset && !close) ? 'pb-[20px] pt-[20px] h-auto' : 'pb-0 pt-0 h-0'}" role="list">
        <slot />
        <span class="before:block before:absolute before:-left-0.5 before:bottom-0 before:bg-[#09232E] before:w-[3px] before:h-[30.5px]"></span>
    </ul>
</li>