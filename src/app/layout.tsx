import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Plus Store | Premium iOS Tweaks",
  description: "Download encrypted, modified apps for iOS. Instagram++, Snapchat++, and more. Premium experience for college students.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
