import { logout } from "@/app/lib/functions/auth/action";
import { decrypt } from "@/app/lib/functions/auth/session";
import { getUserByID } from "@/app/lib/functions/auth/action";
import { cookies } from "next/headers";

async function getAccountInfo(){
    const cookie = (await cookies()).get('session')?.value
    const session = await decrypt(cookie)
    const userID = session?.userID

    if(!userID) return undefined
    console.log(userID)
    //return getUserByID(userID);
}

export default function AccountInfo() {
    
    return (
        <div className="flex items-center justify-center">
            <form action={logout}>
                <button type="submit" className="btn rounded-md p-3 bg-red-500 hover:bg-red-600 transition">
                    Logout
                </button>
            </form>
        </div>
    );
}
