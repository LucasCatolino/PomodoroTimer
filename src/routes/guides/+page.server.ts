import type { ServerLoadEvent } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types"

export const load: PageServerLoad = async (event) => {   
    let guides = await fetchGuides(event);
    
    return {
      guides
    }
}

type Guides = {userId: number, id: number, title: string, body: string};

async function fetchGuides(event: ServerLoadEvent) {
    //let url = new URL("https://jsonplaceholder.typicode.com/posts");

    //const res = await event.fetch(url);
    const res = await event.fetch('/guides');
    const data = await res.json();

    if (res.ok) {
        return data as Guides[];
    }
}