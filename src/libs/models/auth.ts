import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, " Please write your name"],
    },
    email: {
        type: String,
        required: [true, "Provide an email"],
        unique: true,  
    },
    password: {
        type: String,
        required: [true, "Provide a password bruh!!"],
    },
});

const User = mongoose.models.user || mongoose.model("user", userSchema);

export default User;