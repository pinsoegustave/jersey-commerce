import Link from "next/link";
import { BiArrowBack, BiArrowToRight } from "react-icons/bi";


export default function PaymentSuccess({
    searchParams: {amount},
    }: {
        searchParams: { amount: string };
    }) {
        return (
            <main className="md:max-w-6xl mx-auto p-10 text-white text-center border m-10 rounded-md bg-gradient-to-tr from-blue-500 to-purple-500">
                <div className="mb-10">
                    <h1 className="text-4xl font-extrabold mb-2">Thank You!</h1>
                    <h2 className="text-2xl">You successfully sent</h2>
                    <div className="bg-white p-2 rounded-md text-purple-500 mt-5 text-4xl font-bold">${amount}</div>
                </div>
                <Link href={'/'} className=" justify-center underline text-black">
                    <p>Back to Jersey Commerce</p>
                </Link>
            </main>
        )
    }