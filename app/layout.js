import localFont from "next/font/local";
import "./globals.css";

export const metadata = {
  title: "Nextjs Tailwind",
  description: "This is a tutorial from DevEmpower",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
