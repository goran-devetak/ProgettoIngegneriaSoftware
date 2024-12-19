import NavEl from "./NavEl";

export default function MyNav() {

    return (<>
        <section className="relative mx-auto">
            <nav className="flex justify-between bg-mycyan text-white w-screen">
                <div className="px-5 xl:px-12 py-3 flex w-full items-center">
                    <a className="text-3xl font-bold font-heading" href="/home">
                        <img className="h-9" src="http://localhost:3000/logo.png" alt="P&C" />
                    </a>
                    <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-5">
                        <NavEl pageName="Home" path='/home' />
                        <NavEl pageName="Parcheggi" path='/stations' />
                        <NavEl pageName="Segnalazioni" path='/reports' />
                        <NavEl pageName="Statistiche" path='/statistics' />
                        <NavEl pageName="Gestione avanzata" path='/advanced' />
                    </ul>
                </div>
            </nav>
        </section>
    </>);
}