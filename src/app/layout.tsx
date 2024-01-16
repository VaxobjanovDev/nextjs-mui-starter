"use client"
import ClientLayout from "./client-layout";

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="en">
    <body>
    {/*<ClientLayout>*/}
      {children}
    {/*</ClientLayout>*/}
    </body>
    </html>
  )
}