import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Signin = () => {
  return (
    <div className="flex-1 flex flex-col w-full mx-auto px-8 sm:max-w-md  justify-center gap-2 py-10">
      <div className='flex '>
        <Image src={'/logo.png'} alt="" width={200} height={200} />
        <h2 className='py-10 text-[20px] font-semibold'>Jersey Commerce</h2>
      </div>
      <div className='px-10 py-4 border border-foreground/50'>
      <h2 className="bold-32 text-3xl">Sign in.</h2>
      <form action="" className="animate-in flex-1 flex flex-col w-full justify-center mx-auto gap-2 text-foreground ">
        <label className="text-md" htmlFor="email">
          Mobile Number or Email
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border"
          name="email"
          placeholder="you@example.com"
          required
        />
        <div className='flex justify-between '>
        <label className="text-md" htmlFor="password">
          Password
        </label>
        <p className='text-blue-600 underline'>Forgot your password?</p>
        </div>
        <input
          className="rounded-md px-4 py-2 bg-inherit border"
          type="text"
          name="password"
          placeholder="Password"
          required
        />
        <button
          // formAction={signUp}
          className="border border-foreground/20 bg-blue-600 text-white rounded-md px-4 py-2 mb-2 hover:text-black"
          // pendingText="Signing Up..."
        >
          Sign In
        </button>
        <p>By continuing, you agree to Jersey Commerce&apos;s <a href="#" className='text-blue-600 underline'>Conditions Of Use</a> and <a href="#" className='text-blue-600 underline'>Privacy Policy</a> </p>
        {/* {searchParams?.message && ( */}
          <p className="mt-4 p-4 bg-foreground/10 text-red-800 text-center">
            {/* {searchParams.message} */}
          </p>
        {/* )} */}
        <p>Don't have an account? <Link href="/signup" className="rounded-md no-underline text-foreground text-md text-blue-400">
         Create here
        </Link></p>
      </form>
      </div>

    </div>
  )
}

export default Signin