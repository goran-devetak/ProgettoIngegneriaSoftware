"use server"
import { redirect } from "next/navigation"
import { LoginSchemaZod } from "../../models/auth/Login"
import { createSession, deleteSession } from "./session"

const testUser = {
    id: "1",
    email: "aa@comune.trento.it",
    password: "12345678"
}

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
