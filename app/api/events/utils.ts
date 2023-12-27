import { EventType } from "@/app/[lang]/events/page";

export function getFilteredEvents(events: EventType[], locale: string, isAdmin: boolean) {
  const currentDate = new Date();

  const getDayName = (date: Date, locale: string) => {
    return date.toLocaleDateString(locale, { weekday: 'long' });
  };

  events = events.filter((event) => {
    if (event.date) {
      const eventDate = new Date(event.date);
      event.dayName = getDayName(eventDate, locale);
      return eventDate >= currentDate;
    }
    return true;
  });

  return isAdmin ? events : events.filter((event) => !event.private);
}
