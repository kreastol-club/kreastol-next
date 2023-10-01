export async function GET(request: any) {

    const events = [
        {
            id: 1,
            day: 1,
            start: '4PM',
            end: '6PM'
        }
    ]
    return new Response(JSON.stringify(events));
}