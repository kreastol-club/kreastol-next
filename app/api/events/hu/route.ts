import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function GET(request: any) {
  const session = await getServerSession(authOptions);
  const isAdmin = session?.user.role === "admin" ?? false;

  let events = [
    {
      id: 1,
      day: 5,
      date: '2023-12-29',
      start: '10AM',
      end: '12AM',
      forWho: 'Gyerekeknek',
      desc: 'Kreastol foglalkozás!',
      private: false
    },
    {
      id: 2,
      day: 5,
      date: '2023-12-29',
      start: '4PM',
      end: '6PM',
      forWho: 'Gyerekeknek',
      desc: 'Kreastol foglalkozás!',
      private: false
    },
    {
      id: 3,
      day: 5,
      date: '2023-01-05',
      start: '10AM',
      end: '12AM',
      forWho: 'Gyerekeknek',
      desc: 'Kreastol foglalkozás!',
      private: false
    },
    {
      id: 4,
      day: 5,
      date: '2023-01-05',
      start: '4PM',
      end: '6PM',
      forWho: 'Gyerekeknek',
      desc: 'Kreastol foglalkozás!',
      private: false
    }
  ]

  events = isAdmin ? events : events.filter((event) => !event.private);
  return new Response(JSON.stringify(events));
}
