import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "./lib/functions/auth/session";

const publicRoutes = ["/home"];

export default async function middleware(req: NextRequest) {
    const path = req.nextUrl.pathname
    const isPublic = publicRoutes.includes(path)

    const cookie = (await cookies()).get('session')?.value
    const session = await decrypt(cookie)

    if (!isPublic && !session?.userID) {
        return NextResponse.redirect(new URL("/", req.nextUrl));
    }

    if (isPublic && session?.userID) {
        return NextResponse.redirect(new URL("/home", req.nextUrl))
    }
    return NextResponse.next()
}