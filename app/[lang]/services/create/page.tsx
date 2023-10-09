import React from "react";
import {SubmitButton} from "@/app/[lang]/components/SubmitButton";

export default function CreateService () {
    return (
        <>
        <form action={'/api/services'} method='POST'>
            <input className='input' type="text" name="service-name-hu" />
            <input className='input' type="text" name="service-name-en" />

            <SubmitButton />
        </form>
        </>
    );
}
