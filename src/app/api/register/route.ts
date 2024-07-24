import User from "@/libs/models/auth";
import { connectMongoDB } from "@/libs/MongoConnect";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";


export async function POST (req: NextRequest) {
    await connectMongoDB();

    try {
        const { name, email, password } = await req.json();
        
        const ifUserExists = await User.findOne({ email });
        if (ifUserExists) {
            return NextResponse.json(
                {
                    error: "User Already Exists"
                },
                {
                    status: 400
                }
            );
        }

        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        const newUser = await new User({
            name, email, password: hashedPassword
        });

        const savedUser = await newUser.save();
        
        return NextResponse.json({
            message: "User created successfully",
            success: true,
            savedUser
        });

    } catch (error: any) {
        return NextResponse.json({ error: error.message}, {status:500})
    }
}