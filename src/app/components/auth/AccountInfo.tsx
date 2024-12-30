import { logout } from "@/app/lib/functions/auth/action";

export default function AccountInfo() {
    return (
        <div className="flex items-center justify-center">
            <form action={logout}>
                <button type="submit" className="btn rounded-md p-3 bg-red-400">
                    Logout
                </button>
            </form>
        </div>
    );
}
