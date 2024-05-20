import "../styles/globals.css";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import { ApolloWrapper } from "@/appolo/AppoloWrapper";
import { Header } from "@/components/Header";

const urbanist = Urbanist({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});
export const metadata: Metadata = {
  title: "Cinema Fullstack App",
  description: "Cinema Fullstack App",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <ApolloWrapper>
    <html lang="en">
      <body className={`${urbanist.className} bg-gray-900`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  </ApolloWrapper>
);

export default RootLayout;
