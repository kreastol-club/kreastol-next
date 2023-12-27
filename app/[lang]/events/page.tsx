import { Locale } from "@/i18n.config";
import { getDictionary } from "@/dictionaries";
import { headers } from "next/headers";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export type EventType = {
  id: number;
  date: string;
  start: string;
  end: string;
  forWho: string;
  desc: string;
  dayName: string;
  private: boolean;
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
  const events: EventType[] = await getData(lang);

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
            <TableCell>{event.dayName}</TableCell>
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
