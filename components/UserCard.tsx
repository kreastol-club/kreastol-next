'use client'

import {useSession} from "next-auth/react";

export default function UserCard() {
    const {data: session} = useSession();

    function content() {
        if (session) {
            return (
                <>
                    <div className='flex flex-row'>
                        <div className='flex flex-col mx-5'>
                            <div className="font-bold text-left">{session.user.name}</div>
                            <div className="text-left">{session.user.email}</div>
                            <div className="stat-desc text-secondary text-left">{session.user.role}</div>
                        </div>
                        <div className="avatar">
                            <div className="w-16 rounded-full">
                                <img src={session.user.image} alt={"Avatar Image"}/>
                            </div>
                        </div>
                    </div>
                </>
            )
        } else {
            return <></>
        }
    }

    return content();
}
