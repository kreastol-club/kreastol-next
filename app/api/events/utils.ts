import { EventType } from "@/app/[lang]/events/page";

export function getFilteredEvents(events: EventType[], locale: string, isAdmin: boolean) {
  const currentDate = new Date();

  events = events.filter((event) => {
    if (event.end) {
      const eventDate = new Date(event.end);
      return eventDate >= currentDate;
    }
    return true;
  });

  return isAdmin ? events : events.filter((event) => !event.private);
}
