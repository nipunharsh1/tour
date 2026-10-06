import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Ceylon Stays — Find Your Place in Paradise",
  description: "Beautiful spaces. Unhurried days. Discover Sri Lankan coastal villas, city apartments and garden escapes with Ceylon Stays.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
