import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { EventType } from "@/app/[lang]/events/page";
import { getFilteredEvents } from "../utils";


export async function GET() {
  const session = await getServerSession(authOptions);

  let events: EventType[] = [
    {
      id: 1,
      date: '2023-12-29',
      start: '10AM',
      end: '12AM',
      dayName: '',
      forWho: 'Kindergarteners',
      desc: 'Kreastol workshop!',
      private: false
    },
    {
      id: 2,
      date: '2023-12-29',
      start: '4PM',
      end: '6PM',
      dayName: '',
      forWho: 'Schoolers',
      desc: 'Kreastol workshop!',
      private: false
    },
    {
      id: 3,
      date: '2024-01-05',
      start: '10AM',
      end: '12AM',
      dayName: '',
      forWho: 'Kindergarteners',
      desc: 'Kreastol workshop!',
      private: false
    },
    {
      id: 4,
      date: '2024-01-05',
      start: '4PM',
      end: '6PM',
      dayName: '',
      forWho: 'Schoolers',
      desc: 'Kreastol workshop!',
      private: false
    }
  ]

  return new Response(JSON.stringify(getFilteredEvents(events, "en-US", session?.user.role === "admin" ?? false)));
}
