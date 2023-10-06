'use client'

export default function AdminPage() {
    // const [session] = await Promise.all([useSession()])

    // if (session?.user?.role === "admin") {
        return <p>You are an admin, welcome!</p>
    }

    return <p>You are not authorized to view this page!</p>
}