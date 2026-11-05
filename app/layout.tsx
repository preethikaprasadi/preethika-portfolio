import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Preethika Prasadi | Software Engineer | AI & ML",
  description:
    "Software Engineer specializing in full-stack development, Artificial Intelligence, Machine Learning, Data Analytics and computer vision research.",
  openGraph: {
    title: "Preethika Prasadi | Software Engineer",
    description:
      "Building intelligent applications, data-driven solutions and modern software systems.",
    type: "website",
},
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
