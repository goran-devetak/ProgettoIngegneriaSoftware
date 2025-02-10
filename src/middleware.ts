"use server"
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "./app/lib/functions/auth/session";

const publicRoutes: string[] = ["/", "/signup"];
const loginRoute = "/"
export default async function middleware(req: NextRequest) {

    try {
        const path = req.nextUrl.pathname
        const isPublic = publicRoutes.includes(path)
        const isLogin = path == loginRoute

        if (
            req.nextUrl.pathname.includes('/_next/') ||  // Esclude risorse Next.js
            req.nextUrl.pathname.endsWith('.ico') ||      // Esclude favicon
            req.nextUrl.pathname.startsWith('/logo.png')   // Esclude il file logo.png
        ) {
            return NextResponse.next();  // Lascia che la richiesta venga elaborata normalmente
        }


        const cookie = (await cookies()).get('session')?.value
        const session = await decrypt(cookie)

        const userID = session?.userID;
        if (isLogin && userID) {
            return NextResponse.redirect(new URL("/home", req.nextUrl));
        }
        if (!isPublic && !userID) {
            return NextResponse.redirect(new URL("/", req.nextUrl));
        }
        return NextResponse.next();

    } catch (error) {
        console.error(error)
    }
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/public|public|_next/image|favicon.ico).*)'],
}