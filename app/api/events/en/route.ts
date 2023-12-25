import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function GET() {
  const session = await getServerSession(authOptions);
  const isAdmin = session?.user.role === "admin" ?? false;
  let events = [
    {
      id: 1,
      day: 3,
      start: '4PM',
      end: '5PM',
      forWho: 'for 3-4 years old',
      desc: 'Play your way in English!',
      private: false
    },
    {
      id: 2,
      day: 3,
      start: '5:30PM',
      end: '6:30PM',
      forWho: 'for 5-6 years old',
      desc: 'Play your way in English!',
      private: false
    },
    {
      id: 3,
      day: 5,
      start: '4PM',
      end: '6PM',
      forWho: 'for Elementary schoolers',
      private: false
    },
    {
      id: 4,
      day: 6,
      start: '10AM',
      end: '12PM',
      forWho: 'for Kindergarteners',
      private: false
    },
    {
      id: 4,
      day: 1,
      start: '-',
      end: '-',
      forWho: 'SENTA TEMP',
      private: true
    }
  ]

  events = isAdmin ? events : events.filter((event) => !event.private);
  return new Response(JSON.stringify(events));
}
