"use server";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "./app/lib/functions/auth/session";

// Rotte e cartelle pubbliche
const publicPaths = new Set(["/", "/signup"]);
const publicPrefixes = ["/external/"]; // Qualsiasi URL che inizia con questi prefissi è pubblica

const loginRoute = "/";

// Funzione per controllare se un percorso è statico
const isStaticResource = (path: string) => 
  path.includes("/_next/") || 
  path.endsWith(".ico") || 
  path.startsWith("/logo.png");

// Controlla se un percorso è pubblico
const isPublicPath = (path: string) => 
  publicPaths.has(path) || 
  publicPrefixes.some(prefix => path.startsWith(prefix));

export default async function middleware(req: NextRequest) {
  try {
    const { pathname } = req.nextUrl;
    
    if (isStaticResource(pathname)) {
      return NextResponse.next();
    }

    const isPublic = isPublicPath(pathname);
    const isLogin = pathname === loginRoute;

    const sessionCookie = (await cookies()).get("session")?.value;
    const session = await decrypt(sessionCookie);
    const userID = session?.userID;

    if (isLogin && userID) {
      return NextResponse.redirect(new URL("/home", req.nextUrl));
    }

    if (!isPublic && !userID) {
      return NextResponse.redirect(new URL("/", req.nextUrl));
    }

    return NextResponse.next();
  } catch (error) {
    console.error("Middleware Error:", error);
    return NextResponse.next();
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/public|public|_next/image|favicon.ico).*)"],
};
