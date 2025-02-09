import { Metadata } from "next";
import TestingNav from "@/app/components/testing/nav/TestingNav";

export const metadata: Metadata = {
    title: "TESTING",
}

export default function RootLayout({
    children, title
}: {
    children: React.ReactNode,
    title: string
}) {
    return (
        <div className='h-screen w-screen justify-center items-center'>
            <TestingNav />
            <div className="flex justify-center h-fit items-center py-5">
                <div className="flex flex-col bg-white h-fit align-center rounded-lg shadow-lg p-8 w-96">
                    {children}
                </div>
            </div>
        </div>
    )
}
