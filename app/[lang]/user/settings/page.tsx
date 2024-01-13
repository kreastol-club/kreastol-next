import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function UserSettings() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/login");
  }

  return <>
    <p>Settings for: {session.user.name}</p>
  </>
}
