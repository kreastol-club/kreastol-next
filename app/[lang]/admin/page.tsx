import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import {AuthRequiredError} from "@/lib/exceptions";

export default async function AdminPage() {
    const session = await getServerSession(authOptions);
    if(session?.user.isAdmin){
        return <p>You are an admin, welcome!</p>
    }
    else{
        throw new AuthRequiredError();
    }
}