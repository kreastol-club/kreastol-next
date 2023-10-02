export async function GET(request: any) {

    const events = [
        {
            id: 1,
            day: 3,
            start: '4PM',
            end: '5PM',
            forWho: '3-4 éveseknek',
            desc: 'Játszva angolul!'
        },
        {
            id: 2,
            day: 3,
            start: '5:30PM',
            end: '6:30PM',
            forWho: '5-6 éveseknek',
            desc: 'Játszva angolul!'
        },
        {
            id: 3,
            day: 5,
            start: '4PM',
            end: '6PM',
            forWho: 'Általános iskolásoknak'
        },
        {
            id: 4,
            day: 6,
            start: '10AM',
            end: '12PM',
            forWho: 'Óvodásoknak'
        }
    ]
    return new Response(JSON.stringify(events));
}