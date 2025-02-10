"use client"
import { login } from "@/app/lib/functions/auth/action"
import SubmitButton from "./SubmitButton"
import { useActionState } from "react"

export default function Login() {
    const [state, loginAction] = useActionState(login, undefined)

    return (
        <div className="flex justify-center items-center h-screen ">
            <form className="flex flex-col bg-white rounded-lg shadow-lg p-8 w-96" action={loginAction}>
                <div className="pb-2">
                    <h1 className="text-4xl text-center text-gray-800 font-bold">Accesso</h1>
                </div>
                <hr className="py-2"/>
                <div className="flex flex-col gap-2">
                    <label className="font-semibold text-sm">Email</label>
                    <input
                        name="email"
                        className="h-10 px-4 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        type="email"
                    />
                </div>
                <div className="flex flex-col gap-2 mt-4">
                    <label className="font-semibold text-sm">Password</label>
                    <input
                        name="password"
                        className="h-10 px-4 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        type="password"
                    />
                </div>
                {state?.errors?.email && (
                    <p className="text-red-500 text-sm mt-2">{/*state.errors.email*/}</p>
                )}
                <SubmitButton />
                <div className="mt-4 text-center text-sm">
                    <a className="text-red-500 hover:underline" href="/signup">Registrati</a>
                </div>
            </form>
        </div>
    )
}
