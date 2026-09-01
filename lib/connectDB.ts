import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = {
    conn: null,
    promise: null,
  };
}

export async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    console.log(
      "Connecting to:",
      MONGODB_URI.replace(/:[^:@]+@/, ":****@")
    );

    cached.promise = mongoose.connect(MONGODB_URI, {
      dbName: "newsongchurch",
      serverSelectionTimeoutMS: 10000,
    });
  }

  cached.conn = await cached.promise;

  console.log("MongoDB connected successfully");

  return cached.conn;
}