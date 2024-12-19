import { Metadata } from "next"
import ReportList from "@/app/components/report/ReportList";
import ListDiv from "../layout";

export const metadata: Metadata = {
  title: "Lista segnalazioni"
}



export default async function ReportDiv(){
  const fetchReports = async() => {
    const res = await fetch("http://localhost:3000/api/reports");
    const reports = await res.json();
    return reports;
  }

  const reports = await fetchReports();

  return(
    <ListDiv title={metadata.title}>
      <ReportList reports={reports}></ReportList>
    </ListDiv>
  )
}

