"use client";

import { useActionState } from "react";

async function signUp(prevState: any, formData: FormData) {
    const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        password: formData.get("password"),
        confirm_password: formData.get("confirm_password"),
    };

    // Controlla che le password corrispondano
    if (data.password !== data.confirm_password) {
        return { error: "Le password non coincidono" };
    }

    // Esegui la richiesta POST al backend
    const res = await fetch("/api/users/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    const result = await res.json();

    // Se la risposta non è ok, mostra un errore
    if (!res.ok) {
        return { error: result.error || "Errore nella registrazione" };
    }

    // Se la registrazione ha successo, mostra un messaggio di conferma
    return { success: "Registrazione completata! Ora puoi accedere." };
}

export default function SignUp() {
    const [state, signUpAction, pending] = useActionState(signUp, undefined);

    return (
        <div className="flex justify-center h-screen items-center">
            <form action={signUpAction} className="flex flex-col bg-white rounded-lg shadow-lg p-8 w-96">
                <div className="pb-2">
                    <h1 className="text-4xl text-center text-gray-800 font-bold" >Registrazione</h1>
                </div>
                <hr className="py-2" />
                <div className="flex flex-col gap-2 mt-4">
                    <label className="font-semibold text-sm">Nome</label>
                    <input
                        name="name"
                        className="h-10 px-4 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        type="text"
                        required
                    />
                </div>
                <div className="flex flex-col gap-2 mt-4">
                    <label className="font-semibold text-sm">Email</label>
                    <input
                        name="email"
                        className="h-10 px-4 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        type="email"
                        required
                    />
                </div>
                <div className="flex flex-col gap-2 mt-4">
                    <label className="font-semibold text-sm">Scegli una password</label>
                    <input
                        name="password"
                        className="h-10 px-4 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        type="password"
                        required
                    />
                </div>
                <div className="flex flex-col gap-2 mt-4">
                    <label className="font-semibold text-sm">Ripeti la password</label>
                    <input
                        name="confirm_password"
                        className="h-10 px-4 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        type="password"
                        required
                    />
                </div>
                <button
                    disabled={pending}
                    type="submit"
                    className="mt-6 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-800 transition"
                >
                    {state?.success ? "Registrazione completata!" : "Registrati"}
                </button>
                {state?.error && (
                    <p className="mt-4 text-center text-sm text-red-500">{state.error}</p>
                )}
                <div className="mt-4 text-center text-sm">
                    <a className="text-blue-500 hover:underline" href="/">
                        Accedi
                    </a>
                </div>
            </form>
        </div>
    );
}
