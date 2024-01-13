import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function User() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect("/login");
  }

  return <>
    <h1>User</h1>
    <p>{session?.user?.name}</p>
    <p>{session?.user?.email}</p>
  </>
}
