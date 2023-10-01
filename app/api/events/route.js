export async function GET(request) {
    const events = [
        {
            id: 1,
            day: 'Monday',
            start: '4PM',
            end: '6PM'
        }
    ]
    return new Response(JSON.stringify(events));
}