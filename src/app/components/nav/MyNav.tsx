import NavEl from "./NavEl";
import MyAccount from "./MyAccount";
import { URLS } from "../../constants"

export default function MyNav() {

    return (<>
        <section className="relative mx-auto z-10">
            <nav className="flex justify-between bg-mycyan text-white w-screen">
                <div className="px-5 xl:px-12 py-3 flex w-full items-center">
                    <a className="text-3xl font-bold font-heading" href="/home">
                        <img className="h-9" src={URLS.homepage + "/logo.png"} alt="P&C" />
                    </a>
                    <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-5">
                        <NavEl pageName="Home" path='/home' external={false} />
                        <NavEl pageName="Parcheggi" path='/stations' external={false}/>
                        <NavEl pageName="Segnalazioni" path='/reports'external={false} />
                        <NavEl pageName="Statistiche" path='/statistics' external={false}/>
                        <NavEl pageName="Gestione avanzata" path='/advanced' external={false}/>
                        <NavEl pageName="TESTING" path='/external/reserveslot' external={true}/>
                    </ul>
                    <MyAccount />
                </div>
            </nav>
        </section>
    </>);
}