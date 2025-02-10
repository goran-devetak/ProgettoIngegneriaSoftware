import { Metadata } from "next";
import StationList from "@/app/components/station/StationList";
import ListDiv from "../layout";

export const metadata: Metadata = {
    title: "PARCHEGGI",
};

// Main Component
export default async function StationDiv() {
    return (
        <ListDiv title={metadata.title?.toString()}>
            <StationList />
        </ListDiv>
    );
}

