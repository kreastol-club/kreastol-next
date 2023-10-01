import {Locale} from "@/i18n.config";
import {getDictionary} from "@/dictionaries";
import Card from "@/app/[lang]/components/Card";

interface Event {
    id: number;
    day: number;
    start: string;
    end: string;
}

export default async function Events({params: {lang}}: {
    params: { lang: Locale }
}) {
    const dictionary = await getDictionary(lang);

    const res = await fetch(process.env.BASE_URL + '/api/events');
    const events: Event[] = await res.json();

    function numberToDay(num: number): string {
        switch (num) {
            case 1:
                return dictionary.days.mon;
            case 2:
                return dictionary.days.tue;
            case 3:
                return dictionary.days.wed;
            case 4:
                return dictionary.days.thu;
            case 5:
                return dictionary.days.fri;
            case 6:
                return dictionary.days.sat;
            case 7:
                return dictionary.days.sun;
            default:
                return dictionary.errors.unknownDay;
        }
    }

    return (
        <Card>
            <table className="table">
                <thead>
                <tr>
                    <th>{dictionary.eventsPage.day}</th>
                    <th>{dictionary.eventsPage.start}</th>
                    <th>{dictionary.eventsPage.end}</th>
                </tr>
                </thead>
                <tbody>
                {events.map((event) => (
                    <tr key={event.id}>
                        <td>{numberToDay(event.day)}</td>
                        <td>{event.start}</td>
                        <td>{event.end}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </Card>
    )
}