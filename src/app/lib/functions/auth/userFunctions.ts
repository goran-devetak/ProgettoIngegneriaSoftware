import { URLS } from "@/app/constants";
import UserModel from "@/app/lib/models/auth/user/User.model";
import { User } from "../../models/auth/user/User";

export async function getUserByEmail(email: string): Promise<User | null> {
    const user = await UserModel.findOne({ email });
    return user ? user.toObject() as User : null;
}

export async function getUserIdByEmail(email: string): Promise<string | null> {
    const user = await UserModel.findOne({ email }).select("_id").lean();
    return user ? user._id.toString() : null;
}

export async function getPasswordByEmail(email: string): Promise<String | undefined> {
    const user = await UserModel.findOne(
        { email: email },
        { password: 1, _id: 0 }
    );
    return user?.password;
}

export async function getUserByID(id: string): Promise<User | undefined> {
    try {
        const res = await fetch(URLS.apis + `/users/${id}`, {
            method: "GET",
            cache: "no-store",
        });

        if (!res.ok) {
            console.error(`Failed to fetch User with id ${id}:`, res.statusText);
            return undefined;
        }

        const data = await res.json();
        return data.success ? data.data : undefined;
    } catch (error) {
        console.error(`Error fetching User with id ${id}:`, error);
        return undefined;
    }
};