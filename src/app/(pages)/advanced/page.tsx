import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Gestione avanzata"
}

export default function Advanced() {
    return (
        <div className="flex items-center h-screen justify-center py-5">
            <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10 ">
                <div className="max-w-md mx-auto ">
                    <div className="flex items-center space-x-5">
                        <div>
                            <h1 className="text-4xl text-center text-gray-800 font-bold" >Aggiungi un parcheggio</h1>
                        </div>
                    </div>
                    <div className="divide-y divide-gray-200">
                        <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                            <div className="flex flex-col">
                                <label className="leading-loose text-base font-semibold">Nome</label>
                                <input type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" />
                            </div>
                            <div className="flex flex-col">
                                <label className="leading-loose text-base font-semibold">Numero posti</label>
                                <input type="number" min={0} max={100} className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600 " />
                            </div>

                            <div className="flex space-x-2">
                                <div className="flex flex-col">
                                    <label className="leading-loose">Via</label>
                                    <input type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" />
                                </div>
                                <div className="flex flex-col">
                                    <label className="leading-loose">Civico</label>
                                    <input type="numbers" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" />
                                </div>
                            </div>
                        </div>
                        <div className="pt-4 flex items-center space-x-4">
                            <button className="flex justify-center items-center w-full text-gray-900 px-4 py-3 rounded-md focus:outline-none">
                                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                Cancel
                            </button>
                            <button className="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none hover:bg-blue-700">Create</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}