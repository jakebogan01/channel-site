<script>
     import { get } from 'svelte/store'
     import { links } from '../stores/linksStore'

     // links.subscribe(...) // subscribe to changes
     // links.update(...) // update value
     // links.set(...) // set value
     // get(links) // read value
     $links // read value with automatic subscription
     console.log($links)
</script>
