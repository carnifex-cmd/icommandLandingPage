import type { Metadata } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "icommand — Semantic CLI History Search",
  description:
    "Search your command history the way you think. icommand uses local vector embeddings for semantic search — no exact substrings, no grepping, just intent.",
  openGraph: {
    title: "icommand — Semantic CLI History Search",
    description:
      "Search your command history the way you think. Powered by local AI, works offline, zero latency.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${jetbrainsMono.variable} ${spaceGrotesk.variable} font-mono antialiased flex flex-col min-h-screen bg-background-dark text-white selection:bg-primary selection:text-black`}
      >
        {children}
      </body>
    </html>
  );
}
