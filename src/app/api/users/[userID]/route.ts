import { NextResponse } from 'next/server';
import dbConnect from '@/app/lib/dbConnect';
import UserModel from '@/app/lib/models/user/User.model';


export async function GET(req: Request, { params }: { params: { userID: string } }) {
    try {
        await dbConnect();

        const userID = params.userID;

        const user = await UserModel.findById(userID);

        if (!user) {
            return NextResponse.json({ error: 'User not found' }, { status: 404 });
        }

        return NextResponse.json(user);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}