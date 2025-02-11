
// components/AddressAutocomplete.tsx
"use client";

import { useState, useEffect } from "react";
import { AddressFormData, removeDuplicates } from "@/app/lib/functions/address/addressFunctions";

interface AddressAutocompleteProps {
    street: string;
    setStreet: (value: string) => void;
    setCity: (value: string) => void;
    setCap: (value: string) => void;
}

export default function AddressAutocomplete({
    street,
    setStreet,
    setCity,
    setCap
}: AddressAutocompleteProps) {
    const [suggestions, setSuggestions] = useState<AddressFormData[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchStreets = async (query: string | number | boolean, controller: AbortController) => {
        if (!query) {
            setSuggestions([]);
            return;
        }

        setIsLoading(true);
        try {
            const response = await fetch(
                `/api/advanced/streets?city=Trento&q=${encodeURIComponent(query)}`,
                { signal: controller.signal }
            );

            if (!response.ok) throw new Error("Errore nella risposta");

            const toSuggest: AddressFormData[] = [];
            const data = await response.json();
            const roads = data.filter((street: { addresstype: string }) =>
                street.addresstype === "road"
            );

            roads.forEach((road: { display_name: string }) => {
                const splittedRoad = road.display_name.split(",");
                const cityIndex = splittedRoad.findIndex((el: string) =>
                    el.trim() === "Provincia di Trento"
                ) - 2;

                if (splittedRoad.length >= 3) {
                    toSuggest.push({
                        display: `${splittedRoad[0].trim()}, ${splittedRoad[cityIndex].trim()} [${splittedRoad[splittedRoad.length - 2].trim()}]`,
                        street: splittedRoad[0].trim(),
                        city: splittedRoad[cityIndex].trim(),
                        cap: splittedRoad[splittedRoad.length - 2].trim()
                    });
                }
            });

            const list = removeDuplicates(toSuggest);
            setSuggestions(list);
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
            controller.abort();
            clearTimeout(handler);
        };
    }, [street]);

    return (
        <div className="flex flex-col">
            <label className="leading-loose text-base font-semibold">Via</label>
            <input
                name="street"
                type="text"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
                className="px-4 py-2 w-60 border sm:text-sm border-gray-300 rounded-md text-gray-600 focus:outline-none"
                placeholder="Inserisci una via..."
                required
            />
            {isLoading && <p className="text-gray-500 text-sm mt-1">Caricamento...</p>}
            {suggestions.length > 0 && (
                <ul className="absolute z-10 w-60 bg-white border border-gray-300 rounded-md shadow mt-1 max-h-40 overflow-auto">
                    {suggestions.map((suggestion, index) => (
                        <li
                            key={index}
                            onClick={() => {
                                setStreet(suggestion.street.trim());
                                setCity(suggestion.city.trim());
                                setCap(suggestion.cap.replace(/\D/g, "").trim());
                                setSuggestions([]);
                            }}
                            className="p-2 cursor-pointer hover:bg-gray-100"
                        >
                            {suggestion.display}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

