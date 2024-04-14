export async function GET() {
    // connect to db and get data
    const guides = [
        { id: 1, title: 'Guide 1', body: 'This is the body of guide 1' },
        { id: 2, title: 'Guide 2', body: 'This is the body of guide 2'},
        { id: 3, title: 'Guide 3', body: 'This is the body of guide 3'},
        { id: 4, title: 'Guide 4', body: 'This is the body of guide 4'},
        { id: 5, title: 'Guide 5', body: 'This is the body of guide 5'}
    ]

    return new Response(JSON.stringify(guides), {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    
}