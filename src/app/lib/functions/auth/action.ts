"use server"
import { redirect } from "next/navigation"
import { LoginSchemaZod } from "../../models/auth/Login"
import { createSession, deleteSession } from "./session"
import { User } from "../../models/user/User"
import { URLS } from "@/app/constants"

const testUser = {
    id: "1",
    email: "aa@comune.trento.it",
    password: "12345678"
}
export async function getUserByID(id: string): Promise<User | undefined> {
    try {
        const res = await fetch(URLS.apis + `/users/${id}`, {
            method: "GET",
            cache: "no-store",
        });

        if (!res.ok) {
            console.error(`Failed to fetch User with id ${id}:`, res.statusText);
            return undefined;
        }

        const data = await res.json();
        return data.success ? data.data : undefined;
    } catch (error) {
        console.error(`Error fetching User with id ${id}:`, error);
        return undefined;
    }
};


export async function login(prevState: any, formData: FormData) {
    const rawFormData = Object.fromEntries(formData.entries())
    const result = LoginSchemaZod.safeParse(rawFormData)



    if (!result.success) {
        redirect("/")
        // return {
        //     errors: result.error.flatten().fieldErrors,
        // }
    }

    const { email, password } = result.data

    if (email !== testUser.email || password !== testUser.password) {
        redirect("/")
        return {
            errors: {
                email: ["Credenziali errate"]
            }
        }
    }
    await createSession(testUser.id);
    redirect("/home")

}

export async function logout() {
    await deleteSession()
    redirect("/")
}
