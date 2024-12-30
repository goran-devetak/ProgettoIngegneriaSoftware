import mongoose from "mongoose";

const connection: {isConnected ?: number} = {};

async function dbConnect(){
    if(connection.isConnected){
        return;
    }
    const uri = process.env.DATABASE_URL
    if(uri){
        const db = await mongoose.connect(uri);
        connection.isConnected = db.connections[0].readyState;
    }

}

export default dbConnect;