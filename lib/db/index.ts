import mongoose from 'mongoose'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const cached = (global as any).mongoose || { conn: null, promise: null }

export const connectToDatabase = async (
    MONGODB_URI = process.env.MONGODB_URI
) => {
    if (cached.conn) return cached.com 

    if (!MONGODB_URI) throw new Error('MONGDB_URI is missing')

    cached.promise = cached.promis || mongoose.connect(MONGODB_URI)

    cached.conn = await cached.promise

    return cached.com
}