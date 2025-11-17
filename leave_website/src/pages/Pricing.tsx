import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';



const Pricing: React.FC = () => {
    const [selected, setSelected] = useState('');

    const {
        register,
        reset,
        handleSubmit,
        formState : { errors, isSubmitting }
    } = useForm();

    const onSubmit = (data: any) => {
        console.log(data);
    }

  return (
      <div className='container px-4 mx-auto mb-7 max-w-230'>
        <div className="text-center mb-12 mt-30">
            <h1 className="text-4xl font-bold text-primary mb-4">
                Military Leave Application
            </h1>
            
            <p className="text-xl text-secondary/80">
                Select your leave type and complete the 
                application form
            </p>
        </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="rounded-lg border border-primary bg-card text-primary shadow-sm cursor-pointer 
                transition-all ring-2 ring-primary">
                    <div className="flex flex-col space-y-1.5 p-6">
                        <h3 className="font-semibold tracking-tight text-xl">
                            Emergency Family Leave
                        </h3>
                        
                        <p className="text-3xl font-bold text-primary">
                            $299
                        </p>
                        
                    </div>
                    
                    <div className="p-6 pt-0">
                        <p className="text-sm text-secondary mb-4">
                            Immediate assistance for family emergencies requiring urgent 
                            attention
                        </p>
                        
                        <div className="space-y-2">
                            <p className="text-sm font-semibold">
                                Requirements:</p>
                            <ul className="text-sm text-secondary space-y-1">
                                <li>• Valid military ID </li>
                                <li>• Emergency documentation</li>
                                <li>• Family relation proof</li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
                
              <div className="rounded-lg border border-primary bg-card text-primary shadow-sm cursor-pointer 
                transition-all ring-2 ring-primary">
                        <div className="flex flex-col space-y-1.5 p-6">
                            <h3 className="font-semibold tracking-tight text-xl">
                                Compassionate Reassignment
                            </h3>
                            
                            <p className="text-3xl font-bold text-primary">$499
                            </p>
                            
                        </div>
                        
                        <div className="p-6 pt-0">
                            <p className="text-sm text-secondary mb-4">
                                Reassignment due to family hardship or extraordinary 
                                circumstances
                            </p>
                            
                            <div className="space-y-2">
                                <p className="text-sm font-semibold">
                                    Requirements:
                                </p>
                                
                                <ul className="text-sm text-secondary space-y-1">
                                    <li>• Valid military ID</li>
                                    <li>• Hardship documentation</li>
                                    <li>• Commander endorsement</li>
                                </ul>
                            </div>
                            
                        </div>
                        
                    </div>
                    
              <div className="rounded-lg border border-primary bg-card text-primary shadow-sm cursor-pointer 
                transition-all ring-2 ring-primary">
                            <div className="flex flex-col space-y-1.5 p-6">
                                <h3 className="font-semibold tracking-tight text-xl">
                                    Humanitarian Leave
                                </h3>
                                
                                <p className="text-3xl font-bold text-primary">$399
                                </p>
                            </div>
                            
                            <div className="p-6 pt-0">
                                <p className="text-sm text-secondary mb-4">
                                    Leave for humanitarian reasons affecting service 
                                    member or family
                                </p>
                                
                                <div className="space-y-2">
                                    <p className="text-sm font-semibold">
                                        Requirements:
                                    </p>
                                    
                                    <ul className="text-sm text-secondary space-y-1">
                                        <li>• Valid military ID</li>
                                        <li>• Situation documentation</li>
                                        <li>• Supporting evidence</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

          <div className="rounded-lg border bg-card text-primary shadow-sm">
            <div className="flex flex-col space-y-1.5 p-6 ">
                <h3 className="text-2xl font-semibold leading-none tracking-tight">
                    Application Form
                </h3>
                <p className="text-sm text-secondary mt-2">
                    Complete the form below to apply for Emergency Family Leave
                </p>
                
            </div>
            
            <div className="p-6 pt-0 mb-4">

                <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
                    <div className='text-primary font-bold'>
                        Leave Type
                    </div>

                    <div className='space-y-2 text-secondary'>
                        <label className='flex items-center space-x-2'>
                            <input
                                type="radio"
                                  {...register("leaveType")}
                                value="emergency"
                                // checked={selected === "emergency"}
                                // onChange={() => setSelected('emergency')}
                            />
                            <span>Emergency Family Leave $299</span>
                        </label>

                        <label className='flex items-center space-x-2'>
                            <input
                                type="radio"
                                { ...register('LeaveType') }
                                value="compassionate"
                                // checked={selected === "compassionate"}
                                // onChange={() => setSelected('compassionate')}
                            />
                            <span>Compassionate Reassignment - $499</span>
                        </label>

                        <label className='flex items-center space-x-2'>
                            <input
                                type="radio"
                                {...register('leaveType') }
                                value="humanitarian"
                                // checked={selected === "humanitarian"}
                                // onChange={() => setSelected('humanitarian')}
                            />
                            <span>Humanitarian Leave - $399</span>
                        </label>
                    </div>

                    <div className='mt-8'>
                        <label htmlFor="full_name">
                              <span className='text-primary'>
                                Full Name</span>
                            <input type="text" id="full-name" 
                                  placeholder="Officer's name" 
                                  { ...register('full_name')}
                                  className="flex h-10 w-full rounded-md border border-input 
                                        bg-background px-3 py-2 text-base ring-offset-background mt-1
                                        file:border-0 file:bg-transparent file:text-sm file:font-medium 
                                        file:text-foreground placeholder:text-muted-foreground mb-3 
                                        focus-visible:outline-none focus-visible:ring-2 
                                        focus-visible:ring-ring focus-visible:ring-offset-2 
                                        disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"  />
                        </label>

                        <label htmlFor="military id" className='mt-4'>
                              <span className='text-primary'>Military ID</span>

                            <input type="text" id="military-id"
                                  placeholder="123456"
                                  { ...register('military_id') } 
                                  className="flex h-10 w-full rounded-md border border-input 
                                        bg-background px-3 py-2 text-base ring-offset-background mt-1
                                        file:border-0 file:bg-transparent file:text-sm file:font-medium 
                                        file:text-foreground placeholder:text-muted-foreground mb-3 
                                        focus-visible:outline-none focus-visible:ring-2 
                                        focus-visible:ring-ring focus-visible:ring-offset-2 
                                        disabled:cursor-not-allowed disabled:opacity-50 md:text-sm" />
                        </label>

                        <label htmlFor="email">
                            Email
                            <input type="email" id="email"
                                placeholder="john@example.com"
                                 { ...register('email') }
                                  className="flex h-10 w-full rounded-md border border-input 
                                        bg-background px-3 py-2 text-base ring-offset-background mt-1
                                        file:border-0 file:bg-transparent file:text-sm file:font-medium 
                                        file:text-foreground placeholder:text-muted-foreground mb-3 
                                        focus-visible:outline-none focus-visible:ring-2 
                                        focus-visible:ring-ring focus-visible:ring-offset-2 
                                        disabled:cursor-not-allowed disabled:opacity-50 md:text-sm" />
                        </label>

                        <label htmlFor="phone">
                            <span className='text-primary'>Phone</span>
                            <input type="tel" id="phone"
                                placeholder="(555) 123-4567"
                                 {...register('phone')}
                                  className="flex h-10 w-full rounded-md border border-input 
                                        bg-background px-3 py-2 text-base ring-offset-background mt-1
                                        file:border-0 file:bg-transparent file:text-sm file:font-medium 
                                        file:text-foreground placeholder:text-muted-foreground mb-5 
                                        focus-visible:outline-none focus-visible:ring-2 
                                        focus-visible:ring-ring focus-visible:ring-offset-2 
                                        disabled:cursor-not-allowed disabled:opacity-50 md:text-sm" />
                          </label>

                        <label htmlFor="long-text" >
                            <span className='text-primary '>Situation Description</span>
                            <textarea id="long-text" 
                                placeholder='Please Describe your situation in details'
                                { ...register('reason') }
                                className='flex w-full rounded-md border border-input bg-background px-3 py-2 
                                    text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none 
                                    focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 
                                    disabled:cursor-not-allowed disabled:opacity-50 min-h-[120px]'>
                            </textarea>
                        
                        </label>
                    </div>

                    <div className='bg-secondary/10  rounded mt-7 '>
                        <h4 className='text-lg text-primary'>Applicatetion Fee: $499</h4>
                        <p className='text-secondary text-sm'> This fee covers the processing and review of your
                            Compassionate Reassignment application
                        </p>

                        <button 
                            type='submit'
                            className='bg-primary text-white font-semibold mt-5
                                rounded p-3 '>
                                Submit Application - $499
                        </button>
                    </div>

                    
                </form>
            </div>
        </div>
    </div>
  )
}

export default Pricing
