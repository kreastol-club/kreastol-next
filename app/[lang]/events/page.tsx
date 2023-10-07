import {Locale} from "@/i18n.config";
import {getDictionary} from "@/dictionaries";
import Card from "@/app/[lang]/components/Card";

interface Event {
    id: number;
    day: number;
    start: string;
    end: string;
    forWho: string;
    desc: string;
}

async function getData(lang: string) {
    const res = await fetch(`${process.env.BASE_URL}/api/events/${lang}`)
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function Events({params: {lang}}: {
    params: { lang: Locale }
}) {
    const dictionary = await getDictionary(lang);

    const events: Event[] = await getData(lang);

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
                    <th>{dictionary.eventsPage.layout.list.day}</th>
                    <th>{dictionary.eventsPage.layout.list.start}</th>
                    <th>{dictionary.eventsPage.layout.list.end}</th>
                    <th>{dictionary.eventsPage.layout.list.forWho}</th>
                    <th>{dictionary.eventsPage.layout.list.desc}</th>
                </tr>
                </thead>
                <tbody>
                {events.map((event) => (
                    <tr key={event.id} className="hover">
                        <td>{numberToDay(event.day)}</td>
                        <td>{event.start}</td>
                        <td>{event.end}</td>
                        <td>{event.forWho}</td>
                        <td>{event.desc}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </Card>
    )
}