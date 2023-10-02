import React from "react";

export default function Note ({children, noteLocale}: {children: React.ReactNode, noteLocale: string}) {
    return (
        <div
            className='border rounded-1 my-3 p-3 f5 bg-accent-focus/25 border-accent-focus color-bg-accent'>
            <p><strong>{noteLocale}</strong> <span className='font-light'>{children}</span></p>
        </div>
    );
}
