import type { ServerLoadEvent } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types"

export const load: PageServerLoad = async (event) => {   
    let cards = await fetchCards(event);
    
    return {
        cards
    }
}

export type Cards = {id: number, title: string, studyTime: number, restTime: number, done: boolean, erase: boolean};

async function fetchCards(event: ServerLoadEvent) {
    const res = await event.fetch('/study');
    const data = await res.json();

    if (res.ok) {
        return data as Cards[];
    }
}