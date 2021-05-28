import search from './API/search'
import header from './header'

async function handleRequest(request) {
    const headers = header(request.headers)
    const path = new URL(request.url).pathname;

    if (request.method == 'GET') {
        if (path.startsWith('/search/')) {
            return new Response(await search(path.replace('/search/', '')), {
                status: 200,
                headers
            })
        } else {
            //var result = 
            //result.push()
            return new Response(JSON.stringify(
                [{
                    "name": "flipkart-scraper",
                    "description": "API to scrapes search result and product details from flipkart",
                    "author": "Vishal Das",
                    "examples": {
                        "search_api": "https://flipkart.dvishal485.workers.dev/search/laptop"
                    }
                }]
            , null, 2), {
                status: 200,
                headers
            })
        }
    } else {
        return Response.redirect("https://github.com/dvishal485/flipkart-scraper/", 301)
    }

}

addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
})