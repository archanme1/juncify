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
    "Your go-to for inviting friends and family to backyard fun with juncify. Ultimate neighborhood hotspot and get-togethers to create an unbeatable fusion of fun. Plan, coordinate, and make memories with ease. Plus, offer your unique services from your chosen location to earn extra income. Where you can create or join a junction, have fun, throw parties, play sports, go hiking, and explore endless adventures together.",
  icons: {
    icon: "/assets/images/logo.svg",
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
