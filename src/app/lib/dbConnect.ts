import mongoose from "mongoose";

const connection: {isConnected ?: number} = {};

async function dbConnect(){
    if(connection.isConnected){
        return;
    }
    const uri = "mongodb+srv://gorandevetak2004:KPJGy5T59BC52rNW@progingegneria.xdw19.mongodb.net/?retryWrites=true&w=majority&appName=ProgIngegneria";
    const db = await mongoose.connect(uri);

    connection.isConnected = db.connections[0].readyState;

}

export default dbConnect;