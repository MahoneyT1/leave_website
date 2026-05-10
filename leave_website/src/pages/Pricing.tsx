import React, { useEffect } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { submitLeaveRequest, getEmergency, getCompassionate, getHumanitarian } from '../services';
import type { LeaveRequest } from '../services';
import { auth } from '../firebase';
import { toast } from 'react-toastify';


type LeaveType = 'emergency' | 'compassionate' | 'humanitarian';

interface LeaveDoc {
    id: string;
    price?: number;
}

const Pricing: React.FC = () => {
    const [selected, setSelected] = useState('');

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm<LeaveRequest & { leaveType?: LeaveType }>();

    const [leaves, setLeaves] = useState<Record<LeaveType, LeaveDoc | null>>({
            emergency: null,
            compassionate: null,
            humanitarian: null
    });


    useEffect(() => {
            const fetchLeaves = async () => {
                try {
                    const [emergencyData, compassionateData, humanitarianData] = await Promise.all([
                        getEmergency(),
                        getCompassionate(),
                        getHumanitarian()
                    ]);
    
                    setLeaves({
                        emergency: emergencyData[0] || null,
                        compassionate: compassionateData[0] || null,
                        humanitarian: humanitarianData[0] || null
                    });
                } catch (err) {
                    console.log(err);
                    console.log(auth.currentUser?.uid)
                }
            };
            fetchLeaves();
        }, []);
    // console.log(auth.currentUser?.uid)
   
    const onSubmit = async (data: LeaveRequest) => {
        const user = auth.currentUser
    
        if (!user) {
            toast.warning('Please Login to to submit a request');
            return
        }
        try {
            await submitLeaveRequest({
                fullName: data.fullName,
                militaryId: data.militaryId,
                email: data.email,
                phoneNumber: data.phoneNumber,
                description: data.description,
                userId: user.uid,
                type: selected
            })

            toast.success("Application submitted ! ")
            reset();
    
        } catch (err) {
            console.log(err);
        }
    }

  return (
      <div className='container px-4 mx-auto mb-7 max-w-230'>
        <div className="text-center mb-9 mt-10">
            <h1 className="text-4xl font-bold text-primary mb-4">
                Military Leave Application
            </h1>
            
            <p className="text-xl text-secondary/80">
                Select your leave type and complete the 
                application form
            </p>
        </div>

          <div className=" mb-12">
            <div className="rounded-lg border border-primary bg-card text-primary shadow-sm cursor-pointer 
                transition-all ring-2 ring-primary lg:px-10  md:p-6 md:px-15">

                  <div className="flex flex-col space-y-1.5 p-6 ">
                        <h3 className="font-semibold tracking-tight text-xl">
                            Emergency Family Leave 
                        </h3>

                        <div className='mt-3 rounded bg-secondary/10 p-4 border border-secondary'>
                          <h4 className='text-primary font-bold  text-sm mb-0'>Durations: </h4>
                          <ul className='text-md  font-bold mt-1 list-disc list-inside my-3'>

                              <li className='md:ms-2 text-secondary text-sm'>
                                1 Month Leave Application Processing Fee — 410.00 CAD | 300 USD
                              </li>

                              <li className='md:ms-2 text-secondary text-sm'>
                                2 Months Leave Application Processing Fee — 684.38 CAD | 500 USD
                              </li>

                              <li className='md:ms-2 text-secondary text-sm'>
                                3 Months Leave Application Processing Fee — 1,368.76 CAD | 1,000 USD
                              </li>
                          </ul>
                        </div>
                        
                        {/* <p className="text-3xl font-bold text-primary">
                            ${leaves.emergency?.price?.toString()}
                        </p> */}
                        
                    </div>
 
                  <div className="p-6 pt-0 ">

                    <div className='bg-secondary/10 p-4 rounded mb-5'>
                        <p className='font-bold bg-amber-100 italic'>Attention ! ! !</p>
                        <p className="text-secondary mb-4  ">
                          Immediate assistance for first-family emergencies requiring urgent attention,
                          such as marriage, engagement, or the birth of a child, may still be considered
                          upon review and approval.
                        </p>
                    </div>

                        
                      <div className="space-y-2 p-4 border border-secondary rounded bg-secondary/10">
                            <p className="text-md font-semibold">
                                Requirements:</p>
                          <ul className="text-sm text-secondary space-y-1 list-disc list-inside">
                              <li className='ms-1'>Applicant’s Full Name</li>
                              <li className='ms-1'>Applicant’s Email Address</li>
                              <li className='ms-1'>Soldier’s Full Name</li>
                              <li className='ms-1'>Military Identification Number</li>
                              <li className='ms-1'>Purpose of Application / Applicable Conditions</li>
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
                    {/* <div className='text-primary font-bold'>
                        Leave Type
                    </div> */}

                    <div className='space-y-2 text-secondary'>
                        <label className='flex items-center space-x-2'>
                            <input
                                type="radio"
                                  {...register("leaveType", { required: "Please select a leave type" }) }
                                value="emergency"
                                checked={selected === "emergency"}
                                onChange={() => setSelected('emergency')}
                            />
                              <span>1 Month ${leaves.emergency?.price?.toString()}</span>
                        </label>
                        { errors.leaveType && ( <p className='text-red-500'> {errors.leaveType.message} </p> ) }

                        <label className='flex items-center space-x-2'>
                            <input
                                type="radio"
                                { ...register('leaveType', { required: "Please select a leave type" }) }
                                value="compassionate"
                                checked={selected === "compassionate"}
                                onChange={() => setSelected('compassionate')}
                            />
                              <span> 2 Months ${leaves.compassionate?.price?.toString()}</span>
                        </label>
                        {errors.leaveType && (<p className='text-red-500'> {errors.leaveType.message} </p>)}


                        <label className='flex items-center space-x-2'>
                            <input
                                type="radio"
                                {...register('leaveType', { required: "Please select a leave type" }) }
                                value="humanitarian"
                                checked={selected === "humanitarian"}
                                onChange={() => setSelected('humanitarian')}
                            />
                              <span>3 Months ${leaves.humanitarian?.price?.toString()}</span>
                        </label>
                        {errors.leaveType && (<p className='text-red-500'> {errors.leaveType.message} </p>)}

                    </div>

                    <div className='mt-8'>
                        <label htmlFor="full_name">
                              <span className='text-primary'>
                                Full Name</span>
                            <input type="text" id="full-name" 
                                  placeholder="Officer's name" 
                                  { ...register('fullName')}
                                  className="flex h-10 w-full rounded-md border border-input 
                                        bg-background px-3 py-2 text-base ring-offset-background mt-1
                                        file:border-0 file:bg-transparent file:text-sm file:font-medium 
                                        file:text-foreground placeholder:text-muted-foreground mb-3 
                                        focus-visible:outline-none focus-visible:ring-2 
                                        focus-visible:ring-ring focus-visible:ring-offset-2 
                                        disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"  />
                        </label>
                        {errors.fullName && (<p className='text-red-500'> {errors.fullName.message} </p>)}


                        <label htmlFor="military id" className='mt-4'>
                              <span className='text-primary'>Military ID</span>

                            <input type="text" id="military-id"
                                  placeholder="123456"
                                  { ...register('militaryId') } 
                                  className="flex h-10 w-full rounded-md border border-input 
                                        bg-background px-3 py-2 text-base ring-offset-background mt-1
                                        file:border-0 file:bg-transparent file:text-sm file:font-medium 
                                        file:text-foreground placeholder:text-muted-foreground mb-3 
                                        focus-visible:outline-none focus-visible:ring-2 
                                        focus-visible:ring-ring focus-visible:ring-offset-2 
                                        disabled:cursor-not-allowed disabled:opacity-50 md:text-sm" />
                        </label>
                        {errors.militaryId && (<p className='text-red-500'> {errors.militaryId.message} </p>)}


                        <label htmlFor="email">
                            Applicant's Email
                            <input type="email" id="email"
                                placeholder="john@example.com"
                                 { ...register('email', { required: "Email is required" }) }
                                  className="flex h-10 w-full rounded-md border border-input 
                                        bg-background px-3 py-2 text-base ring-offset-background mt-1
                                        file:border-0 file:bg-transparent file:text-sm file:font-medium 
                                        file:text-foreground placeholder:text-muted-foreground mb-3 
                                        focus-visible:outline-none focus-visible:ring-2 
                                        focus-visible:ring-ring focus-visible:ring-offset-2 
                                        disabled:cursor-not-allowed disabled:opacity-50 md:text-sm" />
                        </label>
                        {errors.email && (<p className='text-red-500'> {errors.email.message} </p>)}


                        <label htmlFor="phone">
                            <span className='text-primary'>Applicant's Phone</span>
                            <input type="tel" id="phone"
                                placeholder="(555) 123-4567 (Optional)"
                                 {...register('phoneNumber')}
                                  className="flex h-10 w-full rounded-md border border-input 
                                        bg-background px-3 py-2 text-base ring-offset-background mt-1
                                        file:border-0 file:bg-transparent file:text-sm file:font-medium 
                                        file:text-foreground placeholder:text-muted-foreground mb-5 
                                        focus-visible:outline-none focus-visible:ring-2 
                                        focus-visible:ring-ring focus-visible:ring-offset-2 
                                        disabled:cursor-not-allowed disabled:opacity-50 md:text-sm" />
                        </label>
                        {errors.phoneNumber && (<p className='text-red-500'> {errors.phoneNumber.message} </p>)}

                        <label htmlFor="long-text" >
                            <span className='text-primary '>Purpose</span>
                            <textarea id="long-text" 
                                placeholder='Please Describe your situation in details'
                                { ...register('description') }
                                className='flex w-full rounded-md border border-input bg-background px-3 py-2 
                                    text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none 
                                    focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 
                                    disabled:cursor-not-allowed disabled:opacity-50 min-h-[120px]'>
                            </textarea>
                        </label>
                        {errors.description && (<p className='text-red-500'> {errors.description.message} </p>)}

                    </div>

                    <div className='bg-secondary/10  rounded mt-7 '>
                        {/* <p className='text-secondary text-sm'> This fee covers the processing and review of your
                            Compassionate Reassignment application
                        </p> */}

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`bg-primary text-white font-semibold mt-5 rounded p-3 w-full ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}>
                            {isSubmitting ? 'Submitting...' : 'Submit Application'}
                        </button>
                    </div>    
                </form>
            </div>
        </div>
    </div>
  )
}

export default Pricing;
