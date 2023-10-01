import Nav from '@/components/Nav';
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from "react";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Kreastol App',
    description: 'Generated by create next app',
}

export default function RootLayout({ children }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className='p-3 flex flex-col h-screen'>
                <Nav />
                <main className='flex flex-1 my-3 p-2 card'>
                    {children}
                </main>
                </div>
                
            </body>
        </html>
    )
}
