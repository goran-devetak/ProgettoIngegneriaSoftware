import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/app/lib/dbConnect';
import UserModel from '@/app/lib/models/auth/user/User.model';

type Context = {
 params: {
   userID: string;
   then: <TResult1 = any, TResult2 = never>(
     onfulfilled?: ((value: any) => TResult1 | PromiseLike<TResult1>) | null | undefined,
     onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null | undefined
   ) => Promise<TResult1 | TResult2>;
   catch: <TResult = never>(
     onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null | undefined
   ) => Promise<any>;
   finally: (onfinally?: (() => void) | null | undefined) => Promise<any>;
   [Symbol.toStringTag]: string;
 }
}

export async function GET(req: NextRequest, context: Context) {
   try {
       await dbConnect();
       const userID = context.params.userID;
       const user = await UserModel.findById(userID);
       if (!user) {
           return NextResponse.json({ error: 'User not found' }, { status: 404 });
       }
       return NextResponse.json(user);
   } catch (error: any) {
       return NextResponse.json({ error: error.message }, { status: 500 });
   }
}

export async function POST(req: NextRequest) {
   try {
       await dbConnect();
       const body = await req.json();
       
       if (!body._id || !body.name || !body.surname || !body.username || !body.password) {
           return NextResponse.json({ error: 'All fields (_id, name, surname, username, password) are required' }, { status: 400 });
       }

       const existingUser = await UserModel.findById(body._id);
       if (existingUser) {
           return NextResponse.json({ error: 'User with this ID already exists' }, { status: 409 });
       }

       const newUser = new UserModel({
           _id: body._id,
           name: body.name,
           surname: body.surname,
           username: body.username,
           password: body.password,
           stillExisting: body.stillExisting ?? true
       });

       await newUser.save();
       return NextResponse.json({ message: 'User created successfully', user: newUser }, { status: 201 });
   } catch (error: any) {
       return NextResponse.json({ error: error.message }, { status: 500 });
   }
}