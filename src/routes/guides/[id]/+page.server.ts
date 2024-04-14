import { error, type ServerLoadEvent } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types"

export const load: PageServerLoad = async (event) => {   
    let guide = await fetchGuide(event);
    
    if (!guide) {
		error(404, {
			message: 'Not found'
		});
	}

    return {
      guide
    }
}

type Guide = {userId: number, id: number, title: string, body: string};

async function fetchGuide(event: ServerLoadEvent) {
    //let url = new URL(`https://jsonplaceholder.typicode.com/posts/${event.params.id}`);

    //const res = await event.fetch(url);
    const res = await event.fetch(`/guides/${event.params.id}`);
    const data = await res.json();

    if (res.ok) {
        return data as Guide;
    }
}