import { Locale } from "@/i18n.config";
import { getDictionary } from "@/dictionaries";
import { headers } from "next/headers";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface Event {
  id: number;
  day: number;
  start: string;
  end: string;
  forWho: string;
  desc: string;
}

async function getData(lang: string) {
  const res = await fetch(
    `${process.env.BASE_URL}/api/events/${lang}`, {
    method: "GET",
    headers: headers()
  }
  )
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Events({ params: { lang } }: {
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
    <Table>
      <TableCaption>{dictionary.eventsPage.layout.list.caption}</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>{dictionary.eventsPage.layout.list.day}</TableHead>
          <TableHead>{dictionary.eventsPage.layout.list.start}</TableHead>
          <TableHead>{dictionary.eventsPage.layout.list.end}</TableHead>
          <TableHead>{dictionary.eventsPage.layout.list.forWho}</TableHead>
          <TableHead>{dictionary.eventsPage.layout.list.desc}</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {events.map((event) => (
          <TableRow key={event.id} className="hover">
            <TableCell>{numberToDay(event.day)}</TableCell>
            <TableCell>{event.start}</TableCell>
            <TableCell>{event.end}</TableCell>
            <TableCell>{event.forWho}</TableCell>
            <TableCell>{event.desc}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
