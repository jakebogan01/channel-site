<script>
     import { get } from 'svelte/store'
     import { links } from '../stores/linksStore'
     import Nav from "$lib/Nav.svelte"

     // links.subscribe(...) // subscribe to changes
     // links.update(...) // update value
     // links.set(...) // set value
     $links // read value with automatic subscription
     console.log($links)

     let filterBy = "CRM"
     let showNav = false

     $: updatedLinks = $links.filter(link => {
          return link.page.includes(filterBy)
     })

     const changeFilterText = (e) => {
          filterBy = e.target.innerText
          console.log(filterBy)
     }
</script>

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
                    <Nav on:click={changeFilterText} {filterBy}/>
               </div>
          </div>
     </div>
{/if}

<!--Desktop Nav-->
<div class="hidden xl:fixed xl:inset-y-0 xl:z-50 xl:flex xl:w-[22rem] xl:flex-col">
     <Nav on:click={changeFilterText} {filterBy}/>
</div>

<!--Main section-->
<div class="xl:pl-[22rem]">
     <div class="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-6 bg-white px-4 sm:px-6 lg:px-8">
          <button type="button" on:click={()=>{showNav = true}} class="-m-2.5 p-2.5 xl:hidden text-[#667979]">
               <span class="sr-only">Open sidebar</span>
               <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z" clip-rule="evenodd" /></svg>
          </button>
          <div class="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
               <form class="flex flex-1">
                    <label for="search-field" class="sr-only">Search</label>
                    <div class="relative flex items-center w-full">
                         <svg class="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-[#A4A4A4]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd" /></svg>
                         <input id="search-field" class="block h-full w-full border-0 bg-transparent py-0 pl-8 pr-0 text-[#667979] focus:ring-0 sm:text-sm placeholder-[#A4A4A4]" placeholder="Search..." type="search" name="search">
                         <a href="/">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-[#726E6E] hover:text-black"><path fill-rule="evenodd" d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z" clip-rule="evenodd" /></svg>
                         </a>
                    </div>
               </form>
          </div>
     </div>
     <main class="p-0 xl:p-8 transition-all">
          <header class="bg-[#111827]">
               <div class="grid grid-cols-1 bg-[#F7FCFF] sm:grid-cols-2 lg:grid-cols-3">
                    <div class="flex border-l border-t border-b border-[#D3DFE0]">
                         <div class="pt-2.5 pb-4 px-4">
                              <p class="text-sm leading-6 text-[#667979]">Pro Marketing Requests</p>
                              <p class="mt-2 text-[#788888] text-xs">Please submit requests for task-based projects using our Pro Marketing request form below. If you have general questions, please email PNY Pro Marketing.</p>
                         </div>
                         <div class="flex flex-col flex-nowrap ">
                              <a href="#" target="_blank" class="flex flex-grow px-12 py-6 sm:py-0 sm:px-6 xl:px-4 font-medium justify-center items-center bg-[#75D0E0] text-white whitespace-nowrap text-xs">Submit Request</a>
                              <a href="#" target="_blank" class="flex flex-grow px-12 py-6 sm:py-0 sm:px-6 xl:px-4 font-medium justify-center items-center bg-[#248AB6] text-white whitespace-nowrap text-xs">Email PNY Pro</a>
                         </div>
                    </div>
                    <div class="border-l border-b border-t border-[#D3DFE0] bg-[#F7FCFF]">
                         <div class="flex">
                              <button type="button" class="w-full py-2 text-xs font-medium leading-6 text-[#667979] bg-[#F7FCFF]">Marketing Links</button>
                              <button type="button" class="w-full py-2 text-xs font-medium leading-6 text-white bg-[#75D0E0]">Sales Links</button>
                         </div>
                         <div class="flex justify-around text-[#2490C9] text-xs">
                              <ul class="pl-2 pr-2 pt-6 leading-relaxed" role="list">
                                   <li>
                                        <a href="#" target="_blank">Active Programs</a>
                                   </li>
                                   <li>
                                        <a href="#" target="_blank">Webinars</a>
                                   </li>
                                   <li>
                                        <a href="#" target="_blank">Press Center</a>
                                   </li>
                              </ul>
                              <ul class="pr-2 pl-2 pt-6 leading-relaxed" role="list">
                                   <li>
                                        <a href="#" target="_blank">Pro Landing</a>
                                   </li>
                                   <li>
                                        <a href="#" target="_blank">Announcements / Newsletters</a>
                                   </li>
                              </ul>
                         </div>
                    </div>
                    <div class="py-2.5 px-4 border border-[#D3DFE0]">
                         <p class="text-sm leading-6 text-[#667979]">PNY Pro Blog</p>
                         <ul class="mt-2 leading-loose text-[#2490C9] text-xs" role="list">
                              <li>
                                   <a href="#" target="_blank" class="line-clamp-1">Upcoming Virtual Event: NVIDIA Ada Lovelace Architecture - Performance For Endless Possibilities</a>
                              </li>
                              <li>
                                   <a href="#" target="_blank" class="line-clamp-1">NVIDIA Ada Lovelace Architecture: Performance for Endless Possibilities</a>
                              </li>
                              <li>
                                   <a href="#" target="_blank" class="line-clamp-1">PNY Offers NVIDIA RTX A5000: Unleashing the Power of Tomorrow’s Innovations</a>
                              </li>
                         </ul>
                    </div>
               </div>
          </header>

          <div class="bg-white">
               <h2 class="px-4 py-6 text-lg font-medium leading-7 text-[#248AB6] sm:px-6 lg:px-8 border-r border-l border-b border-[#D3DFE0]">
                    Sales / Active Programs
                    <span class="text-[#C6C6C6] text-xs font-normal">({$links.length})</span>
               </h2>
               <table class="w-full whitespace-nowrap text-left">
                    <colgroup>
                         <col class="w-full sm:w-4/12">
                         <col class="lg:w-4/12">
                         <col class="lg:w-2/12">
                         <col class="lg:w-1/12">
                         <col class="lg:w-1/12">
                    </colgroup>
                    <thead class="border-b border-r border-l border-[#D3DFE0] bg-white text-sm leading-6 text-[#667979]">
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
                    </thead>
                    <tbody>
                         {#each updatedLinks as link, i (link?.id)}
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
                                             <input id="save" aria-describedby="save-description" name="save" type="checkbox" class="h-4 w-4 rounded border-[#CBD4DC] text-[#CBD4DB] focus:ring-[#CBD4DC]">
                                        </td>
                                   </tr>
                              {/if}
                         {/each}
                    </tbody>
               </table>
          </div>
     </main>
</div>