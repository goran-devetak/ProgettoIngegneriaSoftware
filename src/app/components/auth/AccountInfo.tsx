import { logout } from "@/app/lib/functions/auth/action";
import { decrypt } from "@/app/lib/functions/auth/session";
import { getUserByID } from "@/app/lib/functions/auth/userFunctions";
import { User } from "@/app/lib/models/auth/user/User";
import { cookies } from "next/headers";

export default async function AccountInfo() {
    const cookie = (await cookies()).get('session')?.value
    const session = await decrypt(cookie)
    const userID = session?.userID as string
    if (!userID) return undefined
    const user = await getUserByID(userID)

    return (

        <div className="flex flex-col justify-center h-screen items-center">
            <div className="flex flex-col bg-white items-center rounded-lg shadow-lg p-8 w-96">
                <div className="flex gap-2 my-2">
                    <label className="font-bold text-base">Nome:</label>
                    <h2>{user?.name}</h2>
                </div>
                <div className="flex gap-2 my-2">
                    <label className="font-bold text-base">Email:</label>
                    <h2>{user?.email}</h2>
                </div>
                <form action={logout} className="gap-2 my-2">
                    <button type="submit" className="btn rounded-md p-3 bg-red-500 hover:bg-red-600 transition">
                        Logout
                    </button>
                </form>
            </div>
        </div>
    );
}
