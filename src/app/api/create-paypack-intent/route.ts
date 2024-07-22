import { NextRequest, NextResponse } from "next/server";

var PaypackJs = require("paypack").default;


const paypack = PaypackJs.config(
    {
        client_id: "01a8c3f8-4801-11ef-905d-deade826d28d", 
        client_secret: "19e4a8253a57e6293fc47c06e6b00845da39a3ee5e6b4b0d3255bfef95601890afd80709"
    }
);

export async function POST (res: NextResponse, request: NextRequest) {
    try {
        // const { amount } = await request.json();

        return paypack.cashin({
            number: "0789868814",
            amount: 100,
            environment: "development/production",
        })
        .then((res) => {
            console.log(data);
        })
    } catch (error) {
        console.log(error);
    }
}