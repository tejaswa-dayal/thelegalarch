import React from 'react';
const Hero = () => {
    return (
        <section className='h-[93vh] lg:h-[90vh] w-full block'>
        <div className="w-full h-full bg-[url('/hero2.jpg')] bg-cover bg-center relative">
        <div className="w-full h-full flex justify-center items-center bg-black/40 absolute top-0 text-white">
            <div className='min-w-1/2 flex flex-col justify-center text-center'> 
        <h1 className='font-bold text-4xl md:text-6xl '>The Legal Arch</h1>
                    <p className='font-semibold text-xl mt-16 leading-loose max-w-md'>We provide a diverse set of legal services to our clients and assist them to meet these challenges successfully.</p>
                <div className='flex justify-center gap-20 items-center'>
                    <a href="#about"><button className='bg-primary-dark text-white rounded-full py-2 px-6 text-center hover:bg-primary-lighter  transition-colors duration-300 ease-in-out font-bold mt-10'>About Us</button></a>
                    <button className='bg-secondary-neutral text-white rounded-full py-2 px-4 text-center hover:bg-secondary-lighter transition-colors duration-300 ease-in-out font-bold mt-10'>Contact Us</button>
                </div>
            </div>
        </div>
        </div>
        </section>
      )
}
export default Hero;
