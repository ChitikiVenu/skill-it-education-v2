import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.skilliteducation.com"),
  title: {
    default: "Skill IT Education — Cyber Security, Generative AI & Data Science",
    template: "%s | Skill IT Education",
  },
  description:
    "Hands-on Cyber Security, Generative AI and Data Science training in Madhapur, Hyderabad — real labs, real projects, career-ready skills.",
  openGraph: {
    type: "website",
    siteName: "Skill IT Education",
    locale: "en_IN",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
