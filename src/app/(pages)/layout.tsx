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
      <body className="vsc-initialized max-h-100">
        <MyNav />
        {children}
      </body>
    </html>
  )
}
