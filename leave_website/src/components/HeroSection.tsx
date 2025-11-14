import React from 'react';
import heroImage from "../assets/hero-image.jpg"


const HeroSection: React.FC = () => {
  return (
      <section className='relative min-h-[600px] py-15 flex items-center 
        justify-center overflow-hidden'>

        <div className="absolute inset-0 bg-cover bg-center" 
            style={{ backgroundImage: `url(${heroImage})`,     
            }}>

            <div className="absolute inset-0  bg-linear-to-r 
                from-primary/75 via-primary/60 to-primary/95 
                pointer-events-none">
            </div>
        </div>

        <div className='container px-4 m-auto z-30 py-20 '>

            <div className='max-w-3xl space-y-4 md:space-y-9'>
                <h1 className='text-white text-5xl leading-tight font-bold
                    md:text-6xl'>
                    Supporting Military Families Through Leave Applications
                </h1>

                <p className='text-xl md:text-2xl text-white mb-8 leading-relaxed'>Apply for leave for your serving family member with
                    confidence. We make the process simple, secure, and 
                    stress-free.
                </p>
            </div>

            <div className='max-w-md z-40 flex flex-col 
                sm:flew-row gap-5 md:flex-row'>
                <button className='inline-flex items-center 
                    justify-center gap-2 whitespace-nowrap 
                    font-medium h-11 rounded-md bg-warning 
                    text-lg px-8 py-6'>Start Your Application
                </button>

                <button className="inline-flex items-center 
                    justify-center gap-2 whitespace-nowrap 
                    font-medium bg-white text-secondary-foreground 
                    h-11 rounded-md text-lg px-8 py-6">
                        Learn More
                </button>
            </div>
            
        </div>
    </section>
  )
}

export default HeroSection;
