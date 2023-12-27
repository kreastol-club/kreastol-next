import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { EventType } from "@/app/[lang]/events/page";


export async function GET() {
  const session = await getServerSession(authOptions);
  const isAdmin = session?.user.role === "admin" ?? false;
  let events: EventType[] = [
    {
      id: 1,
      date: '2023-12-29',
      start: '10AM',
      end: '12AM',
      dayName: '',
      forWho: 'for 3-4 years old',
      desc: 'Kreastol workshop!',
      private: false
    },
    {
      id: 2,
      date: '2023-12-29',
      start: '4PM',
      end: '6PM',
      dayName: '',
      forWho: 'for 3-4 years old',
      desc: 'Kreastol workshop!',
      private: false
    },
    {
      id: 3,
      date: '2023-01-05',
      start: '10AM',
      end: '12AM',
      dayName: '',
      forWho: 'for 3-4 years old',
      desc: 'Kreastol workshop!',
      private: false
    },
    {
      id: 4,
      date: '2023-01-05',
      start: '4PM',
      end: '6PM',
      dayName: '',
      forWho: 'for 3-4 years old',
      desc: 'Kreastol workshop!',
      private: false
    }
  ]

  const currentDate = new Date();

  // Function to get the day name in a given locale
  const getDayName = (date: Date, locale: string) => {
    return date.toLocaleDateString(locale, { weekday: 'long' });
  };

  // Filter out events that have already passed based on the date
  events = events.filter((event) => {
    // If the event has a date field, compare it with the current date
    if (event.date) {
      const eventDate = new Date(event.date);
      // Add a dayName property to the event object
      event.dayName = getDayName(eventDate, 'en-US'); // Change 'en-US' to your desired locale
      return eventDate >= currentDate;
    }
    // If the event doesn't have a date field, consider it as a future event
    return true;
  });

  events = isAdmin ? events : events.filter((event) => !event.private);
  return new Response(JSON.stringify(events));
}
