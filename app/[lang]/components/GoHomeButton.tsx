'use client'
import {useRouter} from "next/navigation";

export default function GoHomeButton({btnLocale, redirect}: {btnLocale: string, redirect: string}) {
    const { push } = useRouter();

    function goHome() {
        push(redirect);
    }

    return (
        <button className='btn btn-primary m-4' onClick={() => goHome()}>{btnLocale}</button>
    )
}