<script>
    let switchTabs = false
</script>

<div class="border-l border-b border-t border-[#D3DFE0] bg-[#F7FCFF]">
    <div class="flex">
        <button type="button" on:click={()=>{switchTabs = false}} class="w-full py-2 text-xs font-medium leading-6 transition-colors {!switchTabs ? 'text-[#667979] bg-[#F7FCFF]' : 'text-white bg-[#75D0E0] hover:bg-[#176182]'}">Marketing Links</button>
        <button type="button" on:click={()=>{switchTabs = true}} class="w-full py-2 text-xs font-medium leading-6 transition-colors {!switchTabs ? 'text-white bg-[#75D0E0] hover:bg-[#176182]' : 'text-[#667979] bg-[#F7FCFF]'}">Sales Links</button>
    </div>
    <div class="flex justify-around text-[#2490C9] text-xs">
        <ul class="pl-2 pr-2 pt-6 leading-relaxed" role="list">
            <li>
                <a href="#" target="_blank" class="hover:text-blue-500 transition-colors">{switchTabs ? 'Partner Portal' : 'Active Programs'}</a>
            </li>
            <li>
                <a href="#" target="_blank" class="hover:text-blue-500 transition-colors">{switchTabs ? 'Daily Pricing' : 'Webinars'}</a>
            </li>
            <li>
                <a href="#" target="_blank" class="hover:text-blue-500 transition-colors">{switchTabs ? 'Corporate Documents' : 'Press Center'}</a>
            </li>
        </ul>
        <ul class="pr-2 pl-2 pt-6 leading-relaxed" role="list">
            <li>
                <a href="#" target="_blank" class="hover:text-blue-500 transition-colors">{switchTabs ? 'Presentations' : 'Pro Landing'}</a>
            </li>
            <li>
                <a href="#" target="_blank" class="hover:text-blue-500 transition-colors">{switchTabs ? 'Pro PowerPoint Template' : 'Announcements / Newsletters'}</a>
            </li>
        </ul>
    </div>
</div>