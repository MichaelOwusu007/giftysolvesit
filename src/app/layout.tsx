import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./global.css";

// Providers
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster as ShadToaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import { ReactQueryProvider } from "@/components/providers/react-query-provider";

// Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata
export const metadata: Metadata = {
  title: "GiftySolves",
  description: "Celebrate with Intention.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReactQueryProvider>
          <TooltipProvider>
            <ShadToaster />
            <SonnerToaster />
            {children}
          </TooltipProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}

