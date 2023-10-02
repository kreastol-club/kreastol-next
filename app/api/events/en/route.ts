export async function GET(request: any) {

    const events = [
        {
            id: 1,
            day: 3,
            start: '4PM',
            end: '5PM',
            forWho: 'for 3-4 years old',
            desc: 'Play your way in English!'
        },
        {
            id: 2,
            day: 3,
            start: '5:30PM',
            end: '6:30PM',
            forWho: 'for 5-6 years old',
            desc: 'Play your way in English!'
        },
        {
            id: 3,
            day: 5,
            start: '4PM',
            end: '6PM',
            forWho: 'for Elementary schoolers'
        },
        {
            id: 4,
            day: 6,
            start: '10AM',
            end: '12PM',
            forWho: 'for Kindergarteners'
        }
    ]
    return new Response(JSON.stringify(events));
}