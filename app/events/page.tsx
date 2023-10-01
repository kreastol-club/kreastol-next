interface Event {
    id: number;
    day: string;
    start: string;
    end: string;
}

export default async function Events() {
    const res = await fetch('https://next.kreastol-klub.org/api/events');
    const events: Event[] = await res.json();

    return (
        <>
            <div>
                <h2>Events Page</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Day</th>
                            <th>Start</th>
                            <th>End</th>
                        </tr>
                    </thead>
                    <tbody>
                    {events.map((event) => (
                        <tr key={event.id}>
                            <td>{event.day}</td>
                            <td>{event.start}</td>
                            <td>{event.end}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}