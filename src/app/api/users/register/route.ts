import { NextResponse } from "next/server";
import UserModel from "@/app/lib/models/auth/user/User.model";
import dbConnect from "@/app/lib/dbConnect";
import bcrypt from "bcrypt"
import { getUserByEmail } from "@/app/lib/functions/auth/userFunctions";
import { User } from "@/app/lib/models/auth/user/User";

export async function POST(req: Request) {
    try {
        await dbConnect();
        const saltRounds = 10
        const { name, email, password } = await req.json();
        const hashedPWD = await bcrypt.hash(password, saltRounds)
        const user = new UserModel({
            name: name,
            email: email,
            password: hashedPWD,
            stillExisting: true
        })
        const possibleUser = await getUserByEmail(email);
        if (possibleUser !== null) { return NextResponse.json({ success: false, error: "Utente già registrato" }, { status: 409 }) }

        await user.save()
        return NextResponse.json(
            {
                success: true,
                data: user,
            },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json({ success: false, error: "Errore interno" }, { status: 500 });
    }
}
