import { NextResponse } from 'next/server';
import dbConnect from '@/app/lib/dbConnect';
import UserModel from '@/app/lib/models/auth/user/User.model';




export async function GET(req: Request, context: { params: { userID: string } }) {
    try {
        await dbConnect();

        const userID = (context.params).userID;

        const user = await UserModel.findById(userID);

        if (!user) {
            return NextResponse.json({ error: 'User not found' }, { status: 404 });
        }

        return NextResponse.json(user);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}


export async function POST(req: Request) {
    try {
        await dbConnect();

        const body = await req.json();

        // Validate input (basic validation, expand as needed)
        if (!body._id || !body.name || !body.surname || !body.username || !body.password) {
            return NextResponse.json({ error: 'All fields (_id, name, surname, username, password) are required' }, { status: 400 });
        }

        // Check if user already exists
        const existingUser = await UserModel.findById(body._id);
        if (existingUser) {
            return NextResponse.json({ error: 'User with this ID already exists' }, { status: 409 });
        }

        // Create a new user document
        const newUser = new UserModel({
            _id: body._id,
            name: body.name,
            surname: body.surname,
            username: body.username,
            password: body.password,
            stillExisting: body.stillExisting ?? true // Use provided value or default to true
        });

        // Save the user to the database
        await newUser.save();

        return NextResponse.json({ message: 'User created successfully', user: newUser }, { status: 201 });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
