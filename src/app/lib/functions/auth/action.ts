"use server"
import { redirect } from "next/navigation"
import { LoginSchemaZod } from "../../models/auth/Login"
import { createSession, deleteSession } from "./session"
import { User } from "../../models/auth/user/User"
import { URLS } from "@/app/constants"
import { getUserByEmail, getUserIdByEmail } from "./userFunctions"
import bcrypt from "bcrypt"

export async function verifyPassword(plainPassword: string, hashedPassword: string) {
    return await bcrypt.compare(plainPassword, hashedPassword);
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

    const registeredUser = await getUserByEmail(email) as unknown as User
    console.log(registeredUser)

    const isCorrect = await verifyPassword(password, registeredUser.password)
    console.log(isCorrect)

    if (!isCorrect) {
        redirect("/")
        return {
            errors: {
                email: ["Credenziali errate"]
            }
        }
    }
    const userID = await getUserIdByEmail(email)
    if (userID) {
        await createSession(userID);
        redirect("/home")
    }
}

export async function logout() {
    await deleteSession()
    redirect("/")
}
