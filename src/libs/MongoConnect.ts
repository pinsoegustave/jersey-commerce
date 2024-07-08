import mongoose from "mongoose"


// export const connectMongoDB = async () => {
//     if (mongoose.connection.readyState === 1) {
//         return mongoose.connection.asPromise();
//     }

//     return await mongoose.connect(process.env.MONGO_URL!);
// };

export const connectMongoDB = async () => {
    if (mongoose.connections[0].readyState) {
        return true;
    }

    try {
        await mongoose.connect(process.env.MONGO_URL!);
        console.log("MongoDB Connected");
        return true;
    }
    catch (error) {
        console.log(error);
    }
}
