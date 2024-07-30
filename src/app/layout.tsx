import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "ExpCo",
  description: "Single place for all our ExpCo stuff and things",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export function TopNav() {
  return (
    <nav className="flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
      <div>Downtime</div>
      <div>Characters</div>
      <div>Vault</div>
      <div>Login</div>
    </nav>
  );
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <TopNav />
        {children}
      </body>
    </html>
  );
}
