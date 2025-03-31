import type { Metadata } from "next";
import "./globals.css";
import "animate.css";
import BgParticle from "./components/BgParticle";
import Template from "./template/Template";
import { StoreProvider } from "./store/StoreProvider";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <Template>{children}</Template>
          <BgParticle />
        </StoreProvider>
      </body>
    </html>
  );
}
