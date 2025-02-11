import { Metadata } from "next";
import StationList from "@/app/components/station/StationList";
import ListDiv from "../layout";

export const metadata: Metadata = {
    title: "PARCHEGGI",
};

// Main Component
export default async function StationDiv() {
    return (
        <ListDiv>
            <div className="my-10">
                <h1 className="text-6xl text-center font-bold" > {metadata.title?.toString()}</h1>
            </div>
            <StationList />
        </ListDiv>
    );
}

