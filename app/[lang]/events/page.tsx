import { Locale } from "@/i18n.config";
import { getDictionary } from "@/dictionaries";
import { headers } from "next/headers";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { get } from "https";

export type EventType = {
  id: number;
  start: string;
  end: string;
  forWho: string;
  desc: string;
  private: boolean;
}

type DisplayedEvent = {
  id: number;
  date: string;
  duration: string;
  forWho: string;
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

  function convertEvents(events: EventType[]): DisplayedEvent[] {
    return events.map(e => getDisplayedEvent(e));
  }

  const dictionary = await getDictionary(lang);
  const events: DisplayedEvent[] = convertEvents(await getData(lang));

  function getFormattedDate(date: Date) {
    return date.toLocaleDateString(lang, { year: "numeric", month: "numeric", day: "numeric", weekday: "short" });
  }

  function getFormattedTime(date: Date) {
    return date.toLocaleTimeString(lang, { hour: "numeric", minute: "numeric" });
  }

  function getDisplayedEvent(event: EventType): DisplayedEvent {
    let displayedEvent = {} as DisplayedEvent;
    let startDate = new Date(event.start);
    let endDate = new Date(event.end);

    if (endDate.getDate() - startDate.getDate() === 0) {
      displayedEvent.date = getFormattedDate(startDate);
    } else {
      displayedEvent.date = `${getFormattedDate(startDate)} - ${getFormattedDate(endDate)}`
    }

    displayedEvent.id = event.id;
    displayedEvent.forWho = event.forWho;
    displayedEvent.duration = `${getFormattedTime(startDate)} - ${getFormattedTime(endDate)}`;

    return displayedEvent;
  }

  return (
    <Table>
      <TableCaption>{dictionary.eventsPage.layout.list.caption}</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>{dictionary.eventsPage.layout.list.date}</TableHead>
          <TableHead className='sm:w-[100px] md:w-fit'>{dictionary.eventsPage.layout.list.duration}</TableHead>
          <TableHead>{dictionary.eventsPage.layout.list.forWho}</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {events.map((event) => (
          <TableRow key={event.id} className="hover">
            <TableCell>{event.date}</TableCell>
            <TableCell>{event.duration}</TableCell>
            <TableCell>{event.forWho}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
