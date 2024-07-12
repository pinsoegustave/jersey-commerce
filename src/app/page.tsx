"use client"
import Cart from "@/components/frontend/Cart";
import Hero from "@/components/frontend/Hero";
import Navbar from "@/components/frontend/Navbar";
import React, { useState } from "react";


export default function Home() {

  const [ showCart, setShowCart ] = useState(false);


  return (
   <main>
      <Navbar setShowCart={setShowCart} />
      { showCart && <Cart setShowCart={setShowCart} />}
      <Hero />
   </main>
  );
}
