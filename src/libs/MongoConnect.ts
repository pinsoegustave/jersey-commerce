import mongoose from "mongoose"

export const connectMongoDB = async () => {
    if (mongoose.connections[0].readyState) {
        return true;
    }

    try {
        await mongoose.connect(process.env.MONGO_URL!);
        await mongoose.connection.on("connected", () => {
            console.log("MongoDB Connected");
        });
        return true;
    }
    catch (error: any) {
        console.log(error);
    }
}
