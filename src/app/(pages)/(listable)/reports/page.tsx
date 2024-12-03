import { Metadata } from "next"
import ReportList from "@/app/components/report/ReportList";
export const metadata: Metadata = {
  title: "Segnalazioni"
}

/*const reports: StationReport[] = [
  new StationReport(1, "Parcheggio non disponibile", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frosecorporate.com.au%2Fapp%2Fuploads%2Fblank-photo.jpg&f=1&nofb=1&ipt=8390150180cef61b0142da197646357983a016c1cbb3d67351a0f7d6da6e5d41&ipo=images", new Date(), "email1@example.com", "+39 333 111111"),
  new StationReport(2, "Illuminazione rotta", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frosecorporate.com.au%2Fapp%2Fuploads%2Fblank-photo.jpg&f=1&nofb=1&ipt=8390150180cef61b0142da197646357983a016c1cbb3d67351a0f7d6da6e5d41&ipo=images", new Date(), "email2@example.com", "+39 333 222222"),
  new StationReport(3, "Ostacolo sulla strada", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frosecorporate.com.au%2Fapp%2Fuploads%2Fblank-photo.jpg&f=1&nofb=1&ipt=8390150180cef61b0142da197646357983a016c1cbb3d67351a0f7d6da6e5d41&ipo=images", new Date(), "email3@example.com", "+39 333 333333")
];

*/



export default async function ReportDiv(){
  const fetchReports = async() => {
    const res = await fetch("http://localhost:3000/api/reports");
    const reports = await res.json();
    return reports;
  }

  const reports = await fetchReports();

  return(
    <div>
      <h1 className="py-5 text-4xl text-center font-bold">
                Lista Segnalazioni
            </h1>
      <ReportList reports={reports}></ReportList>
    </div>
  )
}

