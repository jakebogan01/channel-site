<script>
    /* svelte-ignore unused-export-let */
    export let useLinkIcon, active = false
    export let title
</script>

<li class="relative">
    <a href="#" on:click class="inline-flex items-center {active ? 'text-white' : 'text-[#446674]'} hover:text-white ml-[20px] text-sm group leading-8 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" width="11.547" height="11.547" class="mr-1 group-hover:text-[#248AB6] shrink-0"><path fill="{active ? '#248AB6' : 'currentColor'}" aria-hidden="true" d="M5.773 11.547a5.664 5.664 0 0 1-2.244-.457A5.649 5.649 0 0 1 .457 8.017a5.741 5.741 0 0 1 0-4.488A5.649 5.649 0 0 1 3.529.457a5.741 5.741 0 0 1 4.488 0 5.649 5.649 0 0 1 3.073 3.072 5.741 5.741 0 0 1 0 4.488 5.649 5.649 0 0 1-3.073 3.073 5.664 5.664 0 0 1-2.244.457Zm0-8.66a2.781 2.781 0 0 0-2.041.846 2.781 2.781 0 0 0-.846 2.041 2.781 2.781 0 0 0 .846 2.041 2.781 2.781 0 0 0 2.041.846 2.781 2.781 0 0 0 2.041-.846 2.781 2.781 0 0 0 .846-2.042 2.781 2.781 0 0 0-.846-2.041 2.781 2.781 0 0 0-2.041-.845Z"/></svg>
        {title}
        {#if useLinkIcon}
            <svg xmlns="http://www.w3.org/2000/svg" width="8.469" height="8.469" class="shrink-0 ml-1.5 mt-px"><g fill="currentColor" aria-hidden="true"><path d="m4.705 0 1.549 1.549L2.96 4.843l.665.665 3.292-3.293 1.549 1.549V0Z"/><path d="M7.528 7.528H.941V.941h3.294L3.294 0H.941A.942.942 0 0 0 0 .941v6.587a.942.942 0 0 0 .941.941h6.587a.942.942 0 0 0 .941-.941V5.176l-.941-.941Z"/></g></svg>
        {/if}
    </a>
    <span class="absolute top-1/2 transform -translate-y-1/2 left-0 h-[3px] w-[10px] bg-[#194355]"></span>
</li>
