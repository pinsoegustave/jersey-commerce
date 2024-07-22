import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/components/admin-panel/AuthProvider";
import App from "./App";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home - Pinsoe Jersey Commerce",
  description: "Generated by create next app",
  icons: {
    icon: ['/favicon.ico?v=4'],
    shortcut: ['/logo.png']
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <App>
            {children}
          </App>
        </AuthProvider>
        <Toaster position="bottom-center" />
        </body>
    </html>
  );
}
