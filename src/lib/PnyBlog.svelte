<script>
    const rssFeedUrl = 'https://blog.pny.com/blogpnycom/rss.xml'
    const numberOfPosts = 3
    let rssFeedPosts = []
    fetch(rssFeedUrl)
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser()
            const xmlDoc = parser.parseFromString(data, 'application/xml')
            const items = xmlDoc.querySelectorAll('item')

            for (let i = 0; i < numberOfPosts && i < items.length; i++) {
                const item = items[i]

                rssFeedPosts = [...rssFeedPosts, {
                    title: item.querySelector('title').textContent,
                    link: item.querySelector('link').textContent
                }]
            }
        })
        .catch(error => console.error('Error fetching RSS feed:', error))
</script>

<div class="py-2.5 px-4 border border-[#D3DFE0]">
    <p class="text-sm leading-6 text-[#667979]">PNY Pro Blog</p>
    <ul class="mt-2 leading-loose text-[#2490C9] text-xs" id="rss-feed-pro-blog" role="list">
        {#each rssFeedPosts as post}
            <li>
                <a href={post?.link} target="_blank" class="line-clamp-1 hover:text-blue-500 transition-colors">{post?.title}</a>
            </li>
        {/each}
    </ul>
</div>