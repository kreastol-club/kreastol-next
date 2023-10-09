import {NextRequest, NextResponse} from "next/server";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import {PrismaClient, Service} from "@prisma/client";
import {deserialize, getLocale} from "@/lib/functions";

const prisma = new PrismaClient()

const serviceQuery = {
    select: {
        name: getLocale("en"),
        description: getLocale("en")
    },
};

async function getServices(){
    const results = await prisma.service.findMany(serviceQuery);

    return results.map(s => {
        return {
            name: deserialize(s.name),
            descriptions: deserialize(s.description)
        }
    })
}

export async function GET(request: NextRequest) {
    const services = await getServices();

    return NextResponse.json({
        count: services.length,
        services: services
    });
}

export async function POST(request: NextRequest) {
    const session = await getServerSession(authOptions);

    let data = await request.formData();

    console.log(data);



    let enNameData = data.get("service-name-en")!;


    // let nameTextContext = await prisma.textContent.create({
    //     data: {
    //         originalText: enNameData.toString(),
    //         originalLanguage: null
    //         te
    //     },
    //     include: {
    //         originalLanguage
    //     }
    // })
    // let enName = await prisma.translation.create({
    //
    // })

    return NextResponse.json({})
}