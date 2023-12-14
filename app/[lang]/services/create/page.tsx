import React from "react";
import {SubmitButton} from "@/components/SubmitButton";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import Unauthorized from "@/components/Unauthorized";
import {Locale} from "@/i18n.config";

export default async function CreateService({params}: { params: { lang: Locale } }) {
    const session = await getServerSession(authOptions);

    if (session?.user.isAdmin || session?.user.role === "moderator") {
        return <>
            <form action={'/api/services'} method='POST' className='flex flex-col gap-2'>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Service Name</span>
                        <span className="label-text-alt">Required</span>
                    </label>
                    <input type="text" placeholder="Type here" name="service-name-hu"
                           className="input input-bordered w-full max-w-xs"/>
                    <label className="label">
                        <span className="label-text-alt">Hungarian</span>
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Service Name</span>
                        <span className="label-text-alt">Required</span>
                    </label>
                    <input type="text" placeholder="Type here" name="service-name-en"
                           className="input input-bordered w-full max-w-xs"/>
                    <label className="label">
                        <span className="label-text-alt">English</span>
                    </label>
                </div>

                <SubmitButton/>
            </form>
        </>
    } else {
        return <Unauthorized lang={params.lang} redirect={'/services'}/>
    }
}
