import React from 'react'
import Card from './Card';
import { FileText, Mail, Clock, CircleCheck } from 'lucide-react'


const HowItWorks: React.FC = () => {
  return (
      <section className='bg-accent '>

        <div className='py-20 lg:py-20'>

            <div className='container px-4 mx-auto grid gap-6'>

                <div className='text-center mb-14'>
                    <h2 className='text-4xl md:text-5xl font-bold mb-4
                        text-primary'>
                        How it works
                    </h2>
                    
                    <p className='text-primary/60 text-lg
                        max-w-2xl mx-auto md:text-xl'>
                        Our streamlined process makes applying for 
                        military leave simple and efficient
                    </p>
                </div>

                <div className='grid grid-cols-1 gap-8 md:grid md:grid-cols-2 md:gap-8 md:gap-y-6 
                    lg:grid-cols-4'>
                    <div className=' relative'>
                        <Card number='1' icon={<FileText/>} title='Complete Application' 
                            description="Fill out our simple online application form 
                                with your family member's service details
                                anad leave request
                                information."
                            className='bg-[#f2b90c/25]'
                            />
                    </div>

                    <div className='relative'>
                        <Card number='2' icon={ <Mail size={25} />} 
                        title='Submit Documentation' 
                        description='Upload required documents securely through our
                            encrypted platform' />
                    </div>

                    <div className='relative'>
                        <Card number='3' icon={ <Clock size={25} />} 
                            className='text-primary' 
                            title='Track progress' 
                            description='Monitor your application status in real-time 
                                throguh your personal dashboard.' />
                    </div>

                    <div className='relative'>
                        <Card number='4' icon={ <CircleCheck size={25} /> } 
                            title='Receive Approval' description='Get notified immediately 
                                when your request is processed and approved.' />
                    </div>
                </div>

            </div>
            <div></div>
        </div>
    </section>
  )
}

export default HowItWorks;
