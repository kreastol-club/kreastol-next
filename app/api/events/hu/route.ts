import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { EventType } from "@/app/[lang]/events/page";
import { getFilteredEvents } from "../utils";

export async function GET(request: any) {
  const session = await getServerSession(authOptions);

  let events: EventType[] = [
    {
      id: 1,
      date: '2023-12-29',
      start: '10AM',
      end: '12AM',
      dayName: '',
      forWho: 'Óvodásoknak',
      desc: 'Kreastol foglalkozás!',
      private: false
    },
    {
      id: 2,
      date: '2023-12-29',
      start: '4PM',
      end: '6PM',
      dayName: '',
      forWho: 'Iskolásoknak',
      desc: 'Kreastol foglalkozás!',
      private: false
    },
    {
      id: 3,
      date: '2024-01-05',
      start: '10AM',
      end: '12AM',
      dayName: '',
      forWho: 'Óvodásoknak',
      desc: 'Kreastol foglalkozás!',
      private: false
    },
    {
      id: 4,
      date: '2024-01-05',
      start: '4PM',
      end: '6PM',
      dayName: '',
      forWho: 'Iskolásoknak',
      desc: 'Kreastol foglalkozás!',
      private: false
    }
  ]

  return new Response(JSON.stringify(getFilteredEvents(events, "hu", session?.user.role === "admin" ?? false)));
}
