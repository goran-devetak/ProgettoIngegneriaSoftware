import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const city = searchParams.get("city");
    const street = searchParams.get("q");

    if (!city || !street) {
        return new Response(JSON.stringify({ error: "Missing city or street" }), {
            status: 400,
            headers: { "Content-Type": "application/json" }
        });
    }

    const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(street)},+${encodeURIComponent("Provincia di Trento")},&format=json`);

    if (!response.ok) {
        return new Response(JSON.stringify({ error: "Failed to fetch data" }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    }

    const data = await response.json();

    return new Response(JSON.stringify(data), {
        status: 200,
        headers: { "Content-Type": "application/json" }
    });
}
