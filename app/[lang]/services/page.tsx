import Card from "@/components/Card";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import Link from "next/link";
import {Locale} from "@/i18n.config";

export default async function Services({params}: { params: { lang: Locale } }) {
    const session = await getServerSession(authOptions);

    return (
        <Card>
            {
                session?.user.isAdmin || session?.user.role == "moderator" ?
                    <Link className='btn' href={`/${params.lang}/services/create`}>Create</Link> : <></>
            }
            <h1>Kreastol services page</h1>
        </Card>
    );
}
