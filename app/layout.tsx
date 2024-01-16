import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Juncify",
  description:
    "An ideal space for individuals to connect and organize gatherings of all kinds.",
  icons: {
    icon: "add logo in here for seo and also set favicon.ico in app folder ",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={poppins.variable}>
          <main className="flex-1">{children}</main>
      </body>
    </html>
    </ClerkProvider>
  );
}
