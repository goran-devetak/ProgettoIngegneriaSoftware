"use client";

import AddressAutocomplete from "@/app/components/address/addressAutocomplete";
import AddressDetails from "@/app/components/address/addressDetails";
import StationInfoInputs from "@/app/components/address/stationInfoInput";
import { useState, useActionState } from "react";


async function create(prevState: any, formData: FormData) {
    const stationName = String(formData.get("stationName"))
    const nSlots = Number(formData.get("slotsNum"))
    const street = String(formData.get("street"))
    const stNum = Number(formData.get("stNum"))
    const city = String(formData.get("city"))
    const zipcode = Number(formData.get("zipcode"))


    const address = `${street} ${stNum}, ${city}, ${zipcode}`;

    const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`);
    const data = await response.json();

    const location = data.length > 0 ? {
        latitude: parseFloat(data[0].lat),
        longitude: parseFloat(data[0].lon)
    } : { latitude: 46.0667, longitude: 11.1217 };

    const add = {
        street: street,
        number: stNum,
        city: city,
        zipCode: zipcode,
        longitude: location.longitude,
        latitude: location.latitude
    };

    const resStation = await fetch("/api/advanced", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            name: stationName,
            address: add,
            numSlots: nSlots,
            state: false,
            reported: false
        }),
    });
    const d = await resStation.json()
    console.log(d)
    if (resStation.ok) {

        const stationID = String(d.data._id)
        console.log(stationID)

        if (resStation.ok) {
            const resSlots = await fetch(`/api/stations/${stationID}/addslots`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ nSlots }),
            });
            const result = await resSlots.json();

            if (!resSlots.ok) {
                throw new Error(result.error || "Errore sconosciuto");
            }
            window.location.reload()
        }
    }
}   

export default function Advanced() {
    const [state, createAction] = useActionState(create, undefined);
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [cap, setCap] = useState("");

    return (
        <div className="flex items-center h-screen justify-center py-5">
            <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded sm:p-10">
                <form action={createAction} className="max-w-md mx-auto">
                    <h1 className="text-4xl text-center text-gray-800 font-bold">
                        Aggiungi un parcheggio
                    </h1>

                    <StationInfoInputs className="pt-8" />

                    <hr className="mt-4" />

                    <div className="space-y-4">
                        <AddressAutocomplete
                            street={street}
                            setStreet={setStreet}
                            setCity={setCity}
                            setCap={setCap}
                        />

                        <AddressDetails
                            city={city}
                            setCity={setCity}
                            cap={cap}
                            setCap={setCap}
                        />

                        <div className="pt-4 flex items-center space-x-4">
                            <button
                                type="submit"
                                className="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none hover:bg-blue-700"
                            >
                                Aggiungi
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}