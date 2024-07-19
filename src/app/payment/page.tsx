"use client"
import CheckoutPage from '@/components/CheckoutPage';
import convertToSubcurrency from '@/libs/ConvertToSubcurrency';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js'
import { useParams } from 'next/navigation';
import React from 'react'

if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
    throw new Error("PUBLIC KEY is not defined");
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);

const Payment = ({ 
    searchParams: {amount},
    }: { 
        searchParams: { amount: number}
    }) => {

    return (
        <div className='max-w-6xl mx-auto p-10 text-white text-center border m-10 rounded-md bg-gradient-to-tr from-blue-500 to-purple-500'>
            <div className='mb-10'>
                <h1 className='text-4xl font-extrabold mb-2'>Jersey Commerce</h1>
                <h2 className='text-2xl'>has requested <span className='font-bold'>${amount}</span></h2>
            </div>

            <Elements
                stripe={stripePromise}
                options={{
                    mode: "payment",
                    amount: convertToSubcurrency(amount),
                    currency: "usd",
                }}
            >
                <CheckoutPage amount={amount} />

            </Elements>
        </div>
    )
}

export default Payment