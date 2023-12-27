import Nav from '@/components/Nav';
import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from "react";
import { i18n, Locale } from "@/i18n.config";
import getConfig from "next/config";
import AuthProvider from "@/app/[lang]/context/AuthProvider";
import UserCard from "@/components/UserCard";
import { Badge } from '@/components/ui/badge';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kreastol Hub',
  description: 'A hub for connecting with the kreastol community',
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

function envBadge() {
  return process.env.NODE_ENV === 'production' ? "" : `${process.env.NODE_ENV} | `;
}

export default function RootLayout({ children, params }: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  const { publicRuntimeConfig } = getConfig();

  return (
    <html lang={params.lang}>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex flex-col h-screen mx-3">
            <AuthProvider>
              <Nav params={params} />
              <main className="w-full h-full">
                {children}
              </main>
              <footer className="gap-4 p-4 flex justify-evenly flex-col xs:flex-row">
                <aside className='xs:w-fit w-full'>
                  <p className='text-sm xs:text-left text-center'>Copyright © 2023 - Kreastol Klub Org.</p>
                </aside>
                <div className='flex xs:w-fit w-full h-fit self-center justify-center'>
                  <Badge>{envBadge()}kreastol-next@{publicRuntimeConfig.version}</Badge>
                </div>
              </footer>
            </AuthProvider>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
