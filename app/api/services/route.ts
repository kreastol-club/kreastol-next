import {NextRequest, NextResponse} from "next/server";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import {PrismaClient, Service} from "@prisma/client";

const prisma = new PrismaClient()

type TranslationObject = {
    translation: [
        {
            text: string
        }
    ]
}

function getLocale(locale: string) {
    return {
        select: {
            translation: {
                select: {
                    text: true
                },
                where: {
                    language: {
                        name: locale
                    }
                }
            }
        }
    }
}

function deserialize(object: TranslationObject): string {
    return object.translation[0].text;
}

export async function GET(request: NextRequest) {
    const service = await prisma.service.findMany({
        select: {
            name: getLocale("en"),
            description: getLocale("en")
        },
    });

    const services = service.map((s) => {
        if(s && s.name && s.description){
            return { name: deserialize(s.name)}
        }
        else {
            return null;
        }
    });

}

export async function POST(request: NextRequest) {
    const session = await getServerSession(authOptions);
    return NextResponse.json(session)
}