import mongoose from "mongoose";
import { handleError } from "../utils/errorHandler";


const databaseUrl = process.env.MONGODB_URI || null;

let connectDb = false;

/**
 * Connects to MongoDB using mongoose.
 * Uses the shared `handleError` to log/format errors and then throws
 * so callers can return formatted responses if needed.
 */
export async function connectToDatabase() {
    if (connectDb) return;

    if (!databaseUrl) {
        const err = new Error("MONGODB_URI environment variable is not set");
        // Log and format the error using the shared handler
        const handled = handleError(err);
        // Throw with the formatted message so callers can act on it
        throw new Error(handled.message);
    }

    try {
        await mongoose.connect(databaseUrl);
        connectDb = true;
    } catch (error: any) {
        // Use shared handler to log and format the error, then rethrow
        const handled = handleError(error);
        throw new Error(handled.message || "Failed to connect to database");
    }
}