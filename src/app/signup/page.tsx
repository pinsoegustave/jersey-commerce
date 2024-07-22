"use client";
import axios from 'axios';
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const Signup = () => {
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState("");
  const [ user, setUser ] = useState({
    name: "",
    email: "",
    password: "",
  });

  const router = useRouter();

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    return setUser((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(false);
    console.log(user);

    try {
      if ( !user.name || !user.email || !user.password ) {
        setError("Please fill all the fields");
        return;
      }

      const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
      if (!emailRegex.test(user.email)) {
        setError("Invalid Email Address");
        return;
      }

      // if ( user.password !== user.rpassword ) {
      //   setError("Password should be the same!");
      // }

      const res = await axios.post("/api/register", user);
      console.log(res.data);

      if (res.status == 200 || res.status == 201) {
        console.log("User Account Created Successfully");
        setError("");
        router.push("/");
      }
    } catch (error) {
      console.log(error);
      setError("");
    }
     finally {
      setLoading(false);
      setUser({
        name: "",
        email: "",
        password: "",
        // rpassword: "",
      });
     }
  }

  return (
    <div className="flex-1 flex flex-col w-full mx-auto px-8 sm:max-w-md  justify-center gap-2 py-10">
      <div className='flex '>
        <Image src={'/logo.png'} alt="" width={200} height={200} />
        <h2 className='py-10 text-[20px] font-semibold'>Jersey Commerce</h2>
      </div>
      <div className='px-10 py-4 border border-foreground/50'>
      <h2 className="bold-32 text-2xl py-4">Create account.</h2>
      <form onSubmit={handleSubmit} className="animate-in flex-1 flex flex-col w-full justify-center mx-auto gap-2 text-foreground ">
        <label className="text-md" htmlFor="name">
          Preferred username
        </label>
        <input
          type='text'
          className="rounded-md px-4 py-2 bg-inherit border"
          name="name"
          placeholder="John Doe"
          required
          value={user.name}
          onChange={handleInputChange}
        />
        <label className="text-md" htmlFor="email">
          Mobile Number or Email
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border"
          name="email"
          placeholder="you@example.com"
          required
          value={user.email}
          onChange={handleInputChange}
        />
        <label className="text-md" htmlFor="password">
          Password
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border"
          type="password"
          name="password"
          placeholder="Password"
          required
          value={user.password}
          onChange={handleInputChange}
        />
        <label className="text-md" htmlFor="password">
          Re-enter Password
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          type="password"
          name="rpassword"
          placeholder="Confirm Password"
          required
          value={user.password}
          onChange={handleInputChange}
        />
        <button
          // formAction={signUp}
          className="border border-foreground/20 bg-blue-600 text-white rounded-md px-4 py-2 mb-2 hover:text-black"
          // pendingText="Signing Up..."
        > 
          { loading ? "Processing..." : "Sign Up" }
        </button>
        <p>By creating an account, you agree to Jersey Commerce's <a href="#" className='text-blue-600 underline'>Conditions Of Use</a> and <a href="#" className='text-blue-600 underline'>Privacy Policy</a> </p>
        { error && (
          <p className="mt-4 p-4 bg-foreground/10 text-red-800 text-center">
            { error }
          </p>
        )} 
        <p>Already have an account?<Link href="/signin" className="rounded-md no-underline text-foreground text-md text-blue-400">
         Sign in
        </Link></p>
      </form>
      </div>

    </div>
  )
}

export default Signup