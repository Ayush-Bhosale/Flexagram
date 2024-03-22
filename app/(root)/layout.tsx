import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

import "../globals.css";
import LeftSidebar from "@/components/Shared/Leftsidebar";
import Bottombar from "@/components/Shared/Bottombar";
import RightSidebar from "@/components/Shared/Rightsidebar";
import Topbar from "@/components/Shared/Topbar";
import LayoutProvider from "@/Providers/LayoutProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Flexgram ",
  description: "A Next.js 13 Meta Flexagram application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang='en'>
        <body className={inter.className}>
          <Topbar />

          <main className='flex flex-row'>
            <LeftSidebar />
            <section className='main-container'>
              <div className='w-full max-w-4xl'>{children}</div>
            </section>
            {/* @ts-ignore */}
            <RightSidebar />
          </main>

          <Bottombar />
        </body>
      </html>
    </ClerkProvider>


  );
}