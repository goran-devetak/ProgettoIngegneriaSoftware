import MyNav from "../components/nav/MyNav";
import '../globals.css';
import { Metadata } from "next";


export const metadata: Metadata = {
  title: {
    default: "Park&Charge",
    template: "%s | P&R"
  },
  description: 'parkncharge',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      <body className="vsc-initialized h-full flex flex-col">
        <MyNav />
        <div className="flex-1 max-h-screen">
          {children}
        </div>
      </body>
    </html>
  )
}
