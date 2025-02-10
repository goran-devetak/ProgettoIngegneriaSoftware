"use server"
import { redirect } from "next/navigation"
import { Login, LoginSchemaZod } from "../../models/auth/Login"
import { createSession, deleteSession } from "./session"
import { User } from "../../models/auth/user/User"
import { getUserByEmail, getUserIdByEmail } from "./userFunctions"
import bcrypt from "bcrypt"
import dbConnect from "../../dbConnect"

export async function verifyPassword(plainPassword: string, hashedPassword: string) {
    return await bcrypt.compare(plainPassword, hashedPassword);
}

export async function login(prevState: any, formData: FormData) {
    await dbConnect();

    const formDataObj = Object.fromEntries(formData.entries());

    if (!formDataObj.email || !formDataObj.password) {
        return { errors: { email: ["Tutti i campi sono obbligatori"] } };
    }

    const result = LoginSchemaZod.safeParse(formDataObj);

    if (!result.success) {
        return {
            errors: { email: [result.error.flatten().fieldErrors] }
        };
    }

    const { email, password } = result.data;

    const registeredUser = await getUserByEmail(email) as unknown as User;

    if (!registeredUser) {
        return { errors: { email: ["Utente non trovato"] } };
    }

    const isCorrect = await verifyPassword(password, registeredUser.password);

    if (!isCorrect) {
        return {
            errors: { email: ["Credenziali errate"] }
        };
    }

    const userID = await getUserIdByEmail(email);
    if (userID) {
        await createSession(userID);
        redirect("/home");
    }
}


export async function logout() {
    await deleteSession()
    redirect("/")
}
