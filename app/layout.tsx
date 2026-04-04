import type { Metadata } from "next";
import { LegalNavbar } from "@/components/legal-navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ride-Share",
  description: "Terms and Conditions and Privacy Policy pages",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="site-shell">
          <LegalNavbar />
          <main className="page-shell">{children}</main>
        </div>
      </body>
    </html>
  );
}
