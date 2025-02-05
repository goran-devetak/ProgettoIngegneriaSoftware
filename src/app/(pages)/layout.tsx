import MyNav from "../components/nav/MyNav";
import '../../app/globals.css';
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
      <body className="vsc-initialized h-full">
        <div className="flex flex-col h-screen bg-gray-100">
          <MyNav />
          {children}
        </div>
      </body>
    </html>
  )
}
