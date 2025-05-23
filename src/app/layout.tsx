import "./globals.css";
import { Inter } from "next/font/google";
import { Metadata } from "next";
import ClientBody from "./ClientBody";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Umer Shaikh | Software Engineer",
  description: "Portfolio website of Umer Shaikh, Software Engineer. Showcasing projects, experience, education, and skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
};
