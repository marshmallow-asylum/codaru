import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { MantineProvider } from '@mantine/core';
import "@fontsource-variable/league-spartan";
import "@fontsource-variable/outfit";
import '@mantine/core/styles.css';
import "./globals.css";

export const metadata: Metadata = {
  title: "codaru",
  description: "Spring Hackathon 2025",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/images/favicon.ico" />
      </head>
      <body>
        <main>
          <ClerkProvider>
            <MantineProvider>
              {children}
            </MantineProvider>
          </ClerkProvider>
        </main>
      </body>
    </html>
  );
}