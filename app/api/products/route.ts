import {NextRequest, NextResponse} from "next/server";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function GET(request: NextRequest) {
    const products = (await prisma.product.findMany());

    return NextResponse.json(products);

}

export async function POST(request: NextRequest) {
    const session = await getServerSession(authOptions);

    return NextResponse.json(session)
}