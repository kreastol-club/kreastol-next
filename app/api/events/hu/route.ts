import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { EventType } from "@/app/[lang]/events/page";
import { getFilteredEvents } from "../utils";

export async function GET(request: any) {
  const session = await getServerSession(authOptions);

  let events: EventType[] = [
    {
      id: 1,
      start: '2023-12-29 10:00',
      end: '2023-12-29 12:00',
      forWho: 'Óvodásoknak',
      desc: 'Kreastol foglalkozás!',
      private: false
    },
    {
      id: 2,
      start: '2023-12-29 16:00',
      end: '2023-12-29 18:00',
      forWho: 'Iskolásoknak',
      desc: 'Kreastol foglalkozás!',
      private: false
    },
    {
      id: 3,
      start: '2024-01-05 10:00',
      end: '2024-01-05 12:00',
      forWho: 'Óvodásoknak',
      desc: 'Kreastol foglalkozás!',
      private: true
    },
    {
      id: 4,
      start: '2024-01-05 16:00',
      end: '2024-01-05 18:00',
      forWho: 'Iskolásoknak',
      desc: 'Kreastol foglalkozás!',
      private: false
    }
  ]

  return new Response(JSON.stringify(getFilteredEvents(events, "hu", session?.user.role === "admin" ?? false)));
}
