import React from 'react';
import {  useForm } from "react-hook-form";
import { registerUser } from '../services';
import { auth } from '../firebase';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';



const Register: React.FC = () => {

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors, isLoading, isSubmitting }
    } = useForm();

    const onSubmit = async (data: any) => {
        console.log(data);

       const { email, password } = data;

       try {
        await registerUser(email, password);
        toast.success("user successfully created", {
            autoClose: 2000,
            onClose: ()=> navigate('/login')
        })
        reset();
       } catch(err){
        console.log(err)
       }

    }


  return (
      <div className="w-full max-w-md px-4 d mx-auto mt-20">
        <div className="text-center mt-25 mb-8">
            <h1 className="text-3xl font-bold text-primary">
                Create Account
            </h1>
            
            <p className="mt-2 text-primary/80">
                Join us to manage your military leave 
                applications
            </p>
            
        </div>
        
        <form 
            className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-2">
                <label className="text-sm font-medium leading-none text-primary
                    peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Full Name
                </label>
                
                <input className="flex h-10 w-full rounded-md border border-input border-secondary/50 
                    bg-background px-3 py-2 text-base ring-offset-background file:border-0 
                    file:bg-transparent file:text-sm file:font-medium file:text-foreground 
                    placeholder:text-muted-foreground focus-visible:outline-none 
                    focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 
                    disabled:cursor-not-allowed disabled:opacity-50 md:text-sm " 
                    placeholder="John Doe" { ...register('name', {
                        required: false } )} />
                  {errors.name?.message && (<p className='text-red-500'>{ String(errors.name.message) }</p>) }
                        
            </div>
            
            <div className="space-y-2">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed 
                    peer-disabled:opacity-70 text-primary" htmlFor="email">
                        Email
                </label>
                
                <input type="email" 
                      className="flex h-10 w-full rounded-md border border-input border-secondary/50
                    bg-background px-3 py-2 text-base ring-offset-background file:border-0 
                    file:bg-transparent file:text-sm file:font-medium file:text-foreground 
                    placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 
                    focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed 
                    disabled:opacity-50 md:text-sm" id="email" placeholder="john@example.com"
                    { ...register('email', { required: "Email is required" }) } />
                    {errors.email?.message && (<p className='text-red-500'>{String(errors.email.message)}</p>)}

                
            </div>
            
            <div className="space-y-2">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed text-primary 
                    peer-disabled:opacity-70" htmlFor="password">
                        Password
                </label>
                
                <input type="password" 
                      className="flex h-10 w-full rounded-md border border-input border-secondary/50 bg-background px-3 py-2 
                        text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm 
                        file:font-medium file:text-foreground placeholder:text-muted-foreground 
                        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring 
                        focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-primary 
                        md:text-sm" id="password" placeholder="••••••••"
                        { ...register('password', { required: "Password is required", 
                            minLength: { value: 6, message: "Require atleast 6 digitd" } }) } />
                  {errors.password?.message && (<p className='text-red-500'>{String(errors.password.message)}</p>)}


            </div>
            
            <div className="space-y-2">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed text-primary
                    peer-disabled:opacity-70" htmlFor="confirmPassword">
                        Confirm Password
                </label>
                
                  <input type="password" className="flex h-10 w-full rounded-md border border-input border-secondary/50 
                    bg-background px-3 py-2 text-base ring-offset-background file:border-0 
                    file:bg-transparent file:text-sm file:font-medium file:text-foreground 
                    placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 
                    focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed 
                    disabled:opacity-50 md:text-sm" id="confirmPassword" 
                    placeholder="••••••••"
                    {...register('confirmPassword', {
                          required: "Confirm Password is required",
                          validate: (value: string) => value === watch('password') || "Passwords do not match"
                        }
                    )} />
                  {errors.confirmPassword?.message && (<p className='text-red-500'>{String(errors.confirmPassword.message)}</p>)}


            </div>
            
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md 
                text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none 
                focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none 
                disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 text-white
                bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full disable" type="submit">
                    Create Account
            </button>
            
        </form>
        
        <p className="text-center text-sm text-primary/80 mt-4 mb-2">
            Already have an account?  
            
            <a className="text-primary hover:underline ms-1" href="/login">
                Log in
            </a>
        </p>
        
    </div>
  )
}

export default Register;
