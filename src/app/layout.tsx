import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
   title: "Portfolio Website",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en" className="snap-y snap-proximity scroll-smooth">
         <body className={"select-none overflow-x-hidden bg-[#89A8B2]"}>
            {children}
         </body>
      </html>
   );
}
