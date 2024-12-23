"use client"
import { login, logout } from "@/app/lib/functions/auth/action"
import SubmitButton from "./SubmitButton"
import { useActionState } from "react"

export default function Login() {
    const [state, loginAction] = useActionState(login, undefined)

    return (
        <div className="flex flex-col justify-center items-center">
            <form className="flex flex-col bg-white rounded shadow-lg p-12 mt-12" action={loginAction}>
                <div>
                    <label className="font-semibold text-xs">Email</label>
                    <input
                        name="email"
                        className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
                        type="text"
                    />
                </div>
                {state?.errors?.email && <p className="text-red-500">{state.errors.email}</p>}
                <div>
                    <label className="font-semibold text-xs mt-3">Password</label>
                    <input
                        name="password"
                        className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
                        type="password"
                    />
                </div>
                {state?.errors?.password && <p className="text-red-500">{state.errors.password}</p>}
                <SubmitButton />
                <div className="flex mt-6 justify-center text-xs">
                    <a className="text-blue-400 hover:text-blue-500" href="#">Forgot Password</a>
                    <span className="mx-2 text-gray-300">/</span>
                    <a className="text-blue-400 hover:text-blue-500" href="#">Sign Up</a>
                </div>
            </form>
            <form action={logout}><button type="submit" className="btn rounded-md p-3 bg-red-400">Logout</button></form>
        </div>
    )
}