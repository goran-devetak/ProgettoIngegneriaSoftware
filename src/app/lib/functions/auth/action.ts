"use server"
import { redirect } from "next/navigation"
import { LoginSchemaZod } from "../../models/auth/Login"
import { createSession, deleteSession } from "./session"

const testUser = {
    id: "1",
    email: "aa@comune.trento.it",
    password: "12345"
}

export async function login(prevState: any, formData: FormData) {
    try {
        const rawFormData = Object.fromEntries(formData.entries())
        const result = LoginSchemaZod.safeParse(rawFormData)


        if (!result.success) {
            
            return {
                errors: result.error.flatten().fieldErrors,
            }
        }

        const { email, password } = result.data

        if (email !== testUser.email || password !== testUser.password) {
            return {
                errors: {
                    email: ["Credenziali errate"]
                }
            }
        }
        await createSession(testUser.id)
        redirect("/home")
    } catch (error) {
        return {
            errors: {
                email: ["Si è verificato un errore durante il login"]
            }
        }
    }
}

export async function logout() {
    await deleteSession()
    redirect("/")
}
