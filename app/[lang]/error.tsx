'use client' // Error components must be Client Components

import React, {useEffect} from 'react'
import Card from "@/components/Card";
import {redirect} from "next/navigation";

export default function Error({error, icon, reset}: {
    error: Error
    icon: string
    reset: () => void
}) {
    function goHome() {
        redirect('/');
    }

    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])
    return (
        <Card>
            <div className='flex flex-col gap-2 items-center w-full'>
                <span className='material-symbols-outlined'>{icon}</span>
                <h2 className='text-center'>Error: {error.message}</h2>
                <div className='flex flex-row gap-2'>
                    <button onClick={() => reset()}>Try again</button>
                    <button onClick={() => goHome()}>Go Home</button>
                </div>
            </div>
        </Card>
    )
}