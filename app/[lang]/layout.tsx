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
              <footer className="footer footer-center gap-4 p-4 flex justify-evenly flex-row max-sm:flex-col">
                <aside className='flex'>
                  <p>Copyright © 2023 - Kreastol Klub Org.</p>
                </aside>
                <Badge>preview | kreastol-next@{publicRuntimeConfig.version}</Badge>
                <div className='flex'>
                  <UserCard />
                </div>
              </footer>
            </AuthProvider>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
