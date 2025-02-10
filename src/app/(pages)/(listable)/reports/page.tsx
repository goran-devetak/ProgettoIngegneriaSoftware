import { Metadata } from "next"
import ReportList from "@/app/components/report/ReportList";
import ListDiv from "../layout";

export const metadata: Metadata = {
  title: "SEGNALAZIONI"
}

export default async function ReportDiv() {

  return (
    <ListDiv title={metadata.title?.toString()}>
      <ReportList />
    </ListDiv>
  )
}

