import "server-only"
import { SignJWT, jwtVerify } from "jose"
import { cookies } from "next/headers"

const secretKey = process.env.SESSION_SECRET
const encodedKey = new TextEncoder().encode(secretKey)

const duration = 7 * 24 * 60 * 60 * 1000
const stringDuration = "7d"

type SessionPayload = {
    userID: string,
    expiresAt: Date
}

export async function deleteSession() {
    (await cookies()).delete("session")
}

export async function createSession(userID: string) {
    const expiresAt = new Date(Date.now() + duration)
    const session = await encrypt({ userID, expiresAt });

    (await cookies()).set("session", session, {
        httpOnly: true,
        secure: true,
        expires: expiresAt,
    })
}

export async function encrypt(payload: SessionPayload) {
    return new SignJWT(payload).setProtectedHeader({ alg: "HS256" }).setIssuedAt().setExpirationTime(stringDuration).sign(encodedKey)
}

export async function decrypt(session: string | undefined = "") {
    try {
        const { payload } = await jwtVerify(session, encodedKey, {
            algorithms: ["HS256"],
        })
        return payload
    } catch (error) {
        console.log("Failed to verify payload")
    }
}