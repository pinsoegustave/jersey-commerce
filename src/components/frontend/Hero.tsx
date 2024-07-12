import React from 'react'

const Hero = () => {
  return (
    <div className='bg-[#E3EDF6] mt-4'>
        <div className='container grid md:grid-cols-2 py-8'>
            <div className='flex items-center'>
                <div className='max-w-[450px] spce-y-4'>
                    <p className='text-topHeadingSecondary'>
                        Starting at <span className='font-bold'>$25.00</span>
                    </p>
                    <h1 className='text-topHeadingPrimary font-bold text-4xl md:text-5xl'>
                        The best jersey collection since 2023
                    </h1>
                    <h3 className="text-2xl font-['Oregan', cursive]">
                        Exclusive offer <span className='text-red-600'>-10%</span>off this month
                    </h3>
                    <a href="#" className='inline-block bg-white rounded-md px-6 py-3 hover:bg-accent hover:text-white'>Shop Now</a>
                </div>
            </div>
            <div>
                <img className='size-80 ml-auto' src="/home.webp" alt="hero" />
            </div>
        </div>
    </div>
  )
}

export default Hero