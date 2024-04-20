import type { ServerLoadEvent } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types"

const URL: string = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";

export const load: PageServerLoad = async (event) => {   
    let quote = await fetchGuides(event);
    
    return {
        quote
    }
}

async function fetchGuides(event: ServerLoadEvent) {
    const res = await event.fetch(URL);
    const data = await res.json();

    if (res.ok) {
        return data[0];
    }
}