import mongoose from "mongoose";

const connection: { isConnected?: number } = {};

async function dbConnect() {
    if (connection.isConnected) {
        console.log("🔄 Database già connesso.");
        return;
    }

    const uri = process.env.DATABASE_URL;
    if (!uri) {
        console.error("Errore: DATABASE_URL non trovato in .env");
        return;
    }

    try {
        console.log("Connessione al DB...");
        
        const db = await mongoose.connect(uri, {
            connectTimeoutMS: 30000,
            socketTimeoutMS: 30000,
        });

        connection.isConnected = db.connections[0].readyState;
        console.log("Connessione al DB riuscita!");

        // Eventi per intercettare disconnessioni ed errori
        mongoose.connection.on("disconnected", () => {
            console.warn("Connessione a MongoDB persa. Riconnessione in corso...");
            dbConnect();
        });

        mongoose.connection.on("error", (err) => {
            console.error("Errore nella connessione a MongoDB:", err);
        });

    } catch (error) {
        console.error("Errore durante la connessione a MongoDB:", error);
        setTimeout(dbConnect, 5000);  // Tentativo di riconnessione dopo 5 secondi
    }
}

export default dbConnect;
