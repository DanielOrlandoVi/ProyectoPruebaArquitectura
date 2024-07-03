import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Patrones",
  description: "Aplicacion patrones",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}