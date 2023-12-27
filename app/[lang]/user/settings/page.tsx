"use client"

import { useSession } from "next-auth/react"
import { redirect } from "next/navigation";

export default function UserSettings() {
  const { data: session } = useSession();

  if (!session) {
    redirect("/");
  }

  return <>
    <p>Settings for: {session.user.name}</p>
  </>
}
