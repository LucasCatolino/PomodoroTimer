export async function GET({ params }) {
    // connect to db and get data
    const guides = [
        { id: 1, title: 'Guide 1', body: 'This is the body of guide 1' },
        { id: 2, title: 'Guide 2', body: 'This is the body of guide 2'},
        { id: 3, title: 'Guide 3', body: 'This is the body of guide 3'},
        { id: 4, title: 'Guide 4', body: 'This is the body of guide 4'},
        { id: 5, title: 'Guide 5', body: 'This is the body of guide 5'}
    ]

    const guide = guides.find(guide => guide.id === parseInt(params.id));

    if (guide) {
        return new Response(JSON.stringify(guide), {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    return new Response(JSON.stringify({ message: 'Not found' }), {
        status: 404,
        headers: {
            'Content-Type': 'application/json'
        }
    });
    
}