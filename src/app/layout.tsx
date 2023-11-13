<<<<<<< HEAD
import { GlobalContextProvider } from "@/contexts/ContextHome";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/global.scss";
=======
// import { ContextProvider, Provider } from "@/contexts/StateContextHomeType";
import "../styles/global.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GlobalContextProvider } from "@/contexts/ContextHome";
import NextAuthSessionProvider from "@/providers/sessionProvider";
>>>>>>> e3c20e68ca68568dc64d3abde960b93df6cfea65
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
<<<<<<< HEAD
        <GlobalContextProvider>{children}</GlobalContextProvider>
=======
        <GlobalContextProvider>
          <NextAuthSessionProvider>
          {children}
          </NextAuthSessionProvider>
        </GlobalContextProvider>
>>>>>>> e3c20e68ca68568dc64d3abde960b93df6cfea65
      </body>
    </html>
  );
}
