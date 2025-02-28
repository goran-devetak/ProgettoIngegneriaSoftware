import { Metadata } from "next"
import MyMap from "../../components/map/MyMap"

export const metadata: Metadata = {
    title: "Home"
}

export default function Home() {
    return (
        <div className="relative w-screen h-screen">
            <MyMap />
        </div>
    )
}