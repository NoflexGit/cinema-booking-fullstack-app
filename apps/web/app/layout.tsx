import "../styles/globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { ApolloWrapper } from "../appolo/AppoloWrapper";
import { Header } from "../components/Header";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});
export const metadata: Metadata = {
  title: "Cinema Fullstack App",
  description: "Cinema Fullstack App",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <ApolloWrapper>
    <html lang="en">
      <body className={`${roboto.className} bg-gray-900`}>
        <Header />
        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  </ApolloWrapper>
);

export default RootLayout;
