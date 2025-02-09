import NavEl from "../../nav/NavEl";
import { URLS } from "@/app/constants";

export default function TestingNav() {

    return (<>
        <section className="relative mx-auto z-10">
            <nav className="flex justify-between bg-orange-400 text-white w-screen">
                <div className="px-5 xl:px-12 py-3 flex w-full items-center">
                    <a className="text-3xl font-bold font-heading" href="/home">
                        <img className="h-9" src={URLS.homepage + "/testingLogo.png"} alt="TEST" />
                    </a>
                    <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-5">
                        <NavEl pageName="Parcheggia" path='/external/reserveslot' external={true} />
                        <NavEl pageName="Sblocca" path='/external/unlockslot' external={true} />
                        <NavEl pageName="Segnala" path='/external/newreport' external={true} />

                    </ul>
                </div>
            </nav>
        </section>
    </>);
}