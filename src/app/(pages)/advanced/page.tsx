"use client";

import { useState, useEffect } from "react";

function removeDuplicates(arr: string[]): string[] {
    return [...new Set(arr)];
}


export default function Advanced() {
    const [street, setStreet] = useState("");
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchStreets = async (query: string, controller: AbortController) => {
        if (!query) {
            setSuggestions([]);
            return;
        }

        setIsLoading(true);
        try {
            const response = await fetch(`/api/advanced/streets?city=Trento&q=${encodeURIComponent(query)}`, {
                signal: controller.signal,
            });

            if (!response.ok) throw new Error("Errore nella risposta");

            const toSuggest: string[] = []

            const data = await response.json();
            const roads = (data.filter((street: { addresstype: string }) => street.addresstype === "road"))
            roads.forEach((road: { display_name: string; }) => {
                const splittedRoad = road.display_name.split(",")
                console.log(road)
                if (Number(splittedRoad.length - 2)) {
                    toSuggest.push(splittedRoad[0] + " [" + splittedRoad[splittedRoad.length - 2] + " ]")
                }
            });
            setSuggestions(removeDuplicates(toSuggest) || []);
        } catch (error) {
            console.error("Errore nel caricamento delle strade:", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        const controller = new AbortController();
        const handler = setTimeout(() => {
            fetchStreets(street, controller);
        }, 500);

        return () => {
            controller.abort(); // Cancella la richiesta precedente
            clearTimeout(handler);
        };
    }, [street]);


    return (
        <div className="flex items-center h-screen justify-center py-5">
            <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
                <div className="max-w-md mx-auto">
                    <h1 className="text-4xl text-center text-gray-800 font-bold">Aggiungi un parcheggio</h1>
                    <div className="divide-y divide-gray-200 py-8 space-y-4">
                        <div className="flex flex-col">
                            <label className="leading-loose text-base font-semibold">Nome</label>
                            <input type="text" className="px-4 py-2 border w-full sm:text-sm border-gray-300 rounded-md text-gray-600 focus:outline-none" />
                        </div>

                        <div className="flex flex-col">
                            <label className="leading-loose text-base font-semibold">Numero posti</label>
                            <input type="number" min={0} max={100} className="px-4 py-2 border w-full sm:text-sm border-gray-300 rounded-md text-gray-600 focus:outline-none" />
                        </div>

                        {/* SEZIONE INDIRIZZO */}
                        <div className="flex space-x-2 relative">
                            <div className="flex flex-col w-full">
                                <label className="leading-loose">Via</label>
                                <input
                                    type="text"
                                    value={street}
                                    onChange={(e) => setStreet(e.target.value)}
                                    className="px-4 py-2 border w-full sm:text-sm border-gray-300 rounded-md text-gray-600 focus:outline-none"
                                    placeholder="Inserisci una via..."
                                />
                                {isLoading && <p className="text-gray-500 text-sm mt-1">Caricamento...</p>}

                                {suggestions.length > 0 && (
                                    <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-md shadow-md mt-1 max-h-40 overflow-auto">
                                        {
                                            suggestions.map((suggestion, index) => (
                                                <li
                                                    key={index}
                                                    onClick={() => {
                                                        setStreet(suggestion);
                                                        setSuggestions([]); // Nasconde la lista dopo la selezione
                                                    }}
                                                    className="p-2 cursor-pointer hover:bg-gray-100"
                                                >
                                                    {suggestion}
                                                </li>
                                            ))}
                                    </ul>
                                )}
                            </div>

                            <div className="flex flex-col">
                                <label className="leading-loose">CAP</label>
                                <input type="number" className="px-4 py-2 border w-40 sm:text-sm border-gray-300 rounded-md text-gray-600 focus:outline-none" />
                            </div>
                        </div>

                        {/* BOTTONI */}
                        <div className="pt-4 flex items-center space-x-4">
                            <button className="flex justify-center items-center w-full text-gray-900 px-4 py-3 rounded-md focus:outline-none">
                                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                                Cancel
                            </button>
                            <button className="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none hover:bg-blue-700">
                                Create
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
