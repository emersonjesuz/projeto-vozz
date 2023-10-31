import { ContextProvider, Provider } from "@/contexts/StateContextHomeType";
import "../styles/global.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GlobalContextProvider } from "@/contexts/ContextHome";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vozz",
  description: "Projeto Vozz",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <GlobalContextProvider>
          {children}
        </GlobalContextProvider>
      </body>
    </html>
  );
}

