import {NextResponse} from "next/server";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";

export async function GET(request: any) {
    return NextResponse.json({"message":"GET /api/products under development"})
}

export async function POST(request: any) {
    const session = await getServerSession(authOptions);

    return NextResponse.json(session)
}