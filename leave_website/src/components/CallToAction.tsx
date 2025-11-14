import React from 'react';


const CallToAction: React.FC = () => {
  return (
      <section className="py-20 bg-primary">

        <div className="container px-4 mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold 
                text-white mb-6">
                    Ready to Get Started?
            </h2>
            
            <p className="text-xl text-white max-w-2xl mx-auto mb-8">
                Begin your leave application today and let us handle the 
                details while you focus on what matters most - your family.    
            </p>
            
            <button className="bg-warning inline-flex items-center justify-center 
                gap-2 whitespace-nowrap font-medium ring-offset-background 
                transition-colors focus-visible:outline-none 
                focus-visible:ring-2 focus-visible:ring-ring 
                focus-visible:ring-offset-2 disabled:pointer-events-none 
                disabled:opacity-50 [&amp;_svg]:pointer-events-none 
                [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-accent 
                text-primary hover:bg-accent/90 
                shadow-[0_0_20px_hsl(var(--accent)/0.3)] 
                h-11 rounded-md text-lg px-10 py-6">
                    Apply for Leave Now
            </button>
        </div>    
    </section>
  )
}

export default CallToAction;
