import { Metadata } from "next"
import ReportList from "@/app/components/report/ReportList";
import ListDiv from "../layout";

export const metadata: Metadata = {
  title: "SEGNALAZIONI"
}

export default async function ReportDiv() {

  return (
    <ListDiv>
      <div className="my-10">
        <h1 className="text-6xl text-center font-bold" > {metadata.title?.toString()}</h1>
      </div>
      <ReportList />
    </ListDiv>
  )
}

