import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from "react-router-dom"
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from '../firebase';
import { toast } from 'react-toastify';



const ForgotPassword: React.FC = () => {

    const {
        register, 
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm();

    const onSubmit = async( data: any )=> {

        try {
            await sendPasswordResetEmail(auth, data.email)
            toast.success('sent check your mail')
            reset();
        } catch (error: any) {
            if (error.code === "auth/user-not-found") {
                toast.error("No user found with this email!");
            } else if (error.code === "auth/invalid-email") {
                toast.error("Invalid email address!");
            } else {
                toast.error("Something went wrong. Try again!");
            }
            console.error(error);
        }

    }
    // const navigate = useNavigate();

  return (
      <div className='h-screen flex-1 flex items-center justify-center px-4 py-12'>
          <div className="w-full max-w-md space-y-5">
            <div className="text-center">
                <h1 className="text-3xl text-primary font-bold tracking-tight">
                    Reset Password
                </h1>
                
                <p className="mt-2 text-secondary">
                    Enter your email to receive a reset link
                </p>
                
            <form onSubmit={handleSubmit(onSubmit)} 
                className="space-y-6">
                <div className="space-y-2">
                    <label className="text-sm font-medium leading-none text-secondary
                        peer-disabled:cursor-not-allowed peer-disabled:opacity-70" 
                        htmlFor="email">Email Address
                    </label>
                    
                    <input type="email" className="flex h-10 w-full rounded-md mt-2
                        border border-input bg-background px-3 py-2 text-base 
                        ring-offset-background file:border-0 file:bg-transparent 
                        file:text-sm file:font-medium file:text-foreground 
                        placeholder:text-muted-foreground focus-visible:outline-none 
                        focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 
                        disabled:cursor-not-allowed disabled:opacity-50 md:text-sm" 
                        id="email" placeholder="your.email@example.com" 
                        {...register('email')} />
                </div>
                {errors.email && (
                    <p className='text-red-500'>
                        {typeof errors.email === 'string' ? errors.email : ((errors.email as any)?.message ?? '')}
                    </p>
                )}
                
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap 
                    rounded-md text-sm font-medium ring-offset-background transition-colors text-white
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring 
                    focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 
                    [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 
                    bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full" 
                    type="submit">
                        Send Reset Link
                </button>
                
                <div className="text-center text-sm ">
                    <Link to="/login" className="text-primary hover:underline">
                        Back to Login
                    </Link>
                </div>
            </form>
        </div>
    </div>
      </div>
  )
}

export default ForgotPassword
