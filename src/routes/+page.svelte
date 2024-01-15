<script>
     import { links } from '../stores/linksStore'
     import { saved } from "../stores/savedStore"
     import { page } from "$app/stores";
     import { goto } from "$app/navigation";
     import { onMount } from "svelte";
     import Nav from "$lib/Nav.svelte"
     import ListItem from "$lib/ListItem.svelte"
     import TableTitles from "$lib/TableTitles.svelte"
     import Search from "$lib/Search.svelte"
     import RequestSubmission from "$lib/RequestSubmission.svelte"
     import QuickLinks from "$lib/QuickLinks.svelte"
     import PnyBlog from "$lib/PnyBlog.svelte"
     import PageHeader from "$lib/PageHeader.svelte"

     let filterBy = "crm"
     let showNav = false

     onMount(()=>{
          resetSearchParams()

          const url = new URL($page.url);
          searchField = url.searchParams.get('search') || "";
     })
     let searchField = ""

     $: updatedLinks = $links.filter(link => {
          if (searchField.length > 0) {
               return link?.title.toLowerCase().includes(searchField.toLowerCase())
          }
          return link?.page.toLowerCase().includes(filterBy)
     })

     const changeFilterText = (e) => {
          searchField = ""
          filterBy = e.target.innerText.toLowerCase()
          showNav = false
     }

     const updateSearchParams = () => {
          if (searchField.length !== 0) {
               const newUrl = new URL($page.url);
               newUrl?.searchParams?.set('search', searchField);
               goto(newUrl);
          } else {
               resetSearchParams()
          }
     }

     const updateSearchField = (e) => {
          searchField = e.target.value
     }

     const resetSearchParams = () => {
          const newUrl = new URL($page.url);
          newUrl?.searchParams?.delete('search');
          goto(newUrl);
     }

     const test = (obj) => {
          console.log(obj)

          // find the object in the links store and update the save property to true
            links.update((arr) => {
                 return arr.map((item) => {
                        if (item.id === obj.id) {
                             return {
                                ...item,
                                save: !item.save
                             };
                        }
                        return item;
                 });
            });

          // update the favorites store with the new object
            saved.update((arr) => {
                 // if the object is already in the array, remove it
                 if (arr.some((item) => item.id === obj.id)) {
                        return arr.filter((item) => item.id !== obj.id);
                 } else {
                        // otherwise, add it
                        return [...arr, obj];
                 }
            });
     }
</script>

<svelte:head>
     <title>Demo Dashboard</title>
</svelte:head>

<!--Mobile Nav-->
{#if showNav}
     <div class="relative z-50 xl:hidden" role="dialog" aria-modal="true">
          <div class="fixed inset-0 bg-gray-900/80"></div>
          <div class="fixed inset-0 flex">
               <div class="relative mr-16 flex w-full max-w-[22rem] flex-1">
                    <div class="absolute left-full top-0 flex w-16 justify-center pt-5">
                         <button type="button" on:click={()=>{showNav = false}} class="-m-2.5 p-2.5">
                              <span class="sr-only">Close sidebar</span>
                              <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                         </button>
                    </div>
                    <Nav on:click={changeFilterText} {filterBy} />
               </div>
          </div>
     </div>
{/if}

<!--Desktop Nav-->
<div class="hidden xl:fixed xl:inset-y-0 xl:z-50 xl:flex xl:w-[22rem] xl:flex-col">
     <Nav on:click={changeFilterText} {filterBy} />
</div>

<!--Main section-->
<div class="xl:pl-[22rem] bg-[#e9edf6] h-dvh">
     <div class="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-6 bg-white px-4 sm:px-6 lg:px-8">
          <button type="button" on:click={()=>{showNav = true}} class="-m-2.5 p-2.5 xl:hidden text-[#667979]">
               <span class="sr-only">Open sidebar</span>
               <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z" clip-rule="evenodd" /></svg>
          </button>
          <Search on:change={updateSearchParams} on:input={updateSearchField} {searchField} />
     </div>
     <main class="p-0 xl:m-4 transition-all mx-auto max-w-screen-xl">
          <header class="bg-[#111827]">
               <div class="grid grid-cols-1 bg-[#F7FCFF] sm:grid-cols-2 lg:grid-cols-3">
                    <RequestSubmission />
                    <QuickLinks />
                    <PnyBlog />
               </div>
          </header>

          <div class="bg-white">
               <PageHeader {filterBy} {updatedLinks} {searchField} />
               <table class="w-full whitespace-nowrap text-left">
                    <colgroup>
                         <col class="w-full sm:w-4/12">
                         <col class="lg:w-4/12">
                         <col class="lg:w-2/12">
                         <col class="lg:w-1/12">
                         <col class="lg:w-1/12">
                    </colgroup>
                    <thead class="border-b border-r border-l border-[#D3DFE0] bg-white text-sm leading-6 text-[#667979]">
                         <TableTitles {filterBy} />
                    </thead>
                    <tbody>
                         {#each updatedLinks as link, i (link?.id)}
                              <ListItem on:change={()=>{test(link)}} {link} {i} />
                         {/each}
                    </tbody>
               </table>
          </div>
     </main>
</div>