import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { loginUser } from '../services';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from '../firebase';
import { Eye, EyeOff } from "lucide-react";
import { doc, getDoc, setDoc } from 'firebase/firestore';



const Login: React.FC = () => {

    const [showPassword, setShowPassword] = useState(false);
    const provider = new GoogleAuthProvider();  

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }

    } = useForm()

    const navigate = useNavigate();


    const onSubmit = async (data: any )=> {

        const { email, password } = data;

        try {
            const userCredentails = await loginUser(email, password)
            const user = userCredentails.user;

            if (user) {
                toast.success("Successfully Logged in", {
                autoClose: 2000,
                onClose: ()=> navigate('/')
            })
            }
            reset();
        } catch (err: any) {
            if (err.code === "auth/user-not-found") {
                toast.error("User does not exist! ")
            }
            console.log(err)
        }

    }

    const handleGoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user

            const userRef = doc(db, "users", user.uid);
            const userSnap = await getDoc(userRef);

            // if user does not exist create document
            if(!userSnap.exists()) {
                await setDoc(userRef, {
                    id: user.uid,
                    name: user.displayName,
                    email: user.email,
                    createdAt: new Date(),
                    isAdmin: false
                })
            }

            toast.success("Successfully logged in", {
                autoClose: 2000,
                onClose: ()=> navigate('/')
            })
            
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div className='w-full h-screen'>
            <div className="w-full max-w-md space-y-8 mt-25 mx-auto px-4">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-primary">
                        Welcome Back
                    </h1>

                    <p className="mt-2 text-muted-foreground">
                        Log in to access your military leave
                        applications
                    </p>

                </div>

                <form onSubmit={handleSubmit(onSubmit )} className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed 
                            peer-disabled:opacity-70 text-primary" htmlFor="email">
                            Email
                        </label>

                        <input type="email" className="flex h-10 w-full rounded-md border border-input border-secondary/50 
                            bg-background px-3 py-2 text-base ring-offset-background 
                            file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground 
                            placeholder:text-muted-foreground focus-visible:outline-none 
                            focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 
                            disabled:cursor-not-allowed disabled:opacity-50 md:text-sm "
                            placeholder="john@example.com" 
                            { ...register('email', {
                                required: "email must be provided"
                            }) } />
                    </div>
                    {errors.email?.message && ( <p>{errors.email.message as React.ReactNode}</p>) }

                    <div className="space-y-2">
                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed 
                                    peer-disabled:opacity-70 text-primary" htmlFor="password">
                            Password
                        </label>

                    <div className="relative w-full">
                        <input
                            type={showPassword ? "text" : "password"}
                                className="flex h-10 w-full rounded-md border border-secondary/50
                                border-input bg-background px-3 py-2 text-base 
                                ring-offset-background file:border-0 file:bg-transparent 
                                file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground 
                                focus-visible:outline-none focus-visible:ring-2 
                                focus-visible:ring-ring focus-visible:ring-offset-2 
                                disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                                id="password"
                                placeholder="••••••••"
                                {...register("password")}
                            />

                            <button
                                type="button"
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>
                        
                    </div>
                    {errors.password?.message && (<p>{errors.password.message as React.ReactNode}</p>)}


                    <div className="flex items-center justify-between">
                        <a className="text-sm text-primary hover:underline" href="/forgot-password">
                            Forgot password?
                        </a>
                    </div>

                    <button className="inline-flex items-center justify-center text-white
                                gap-2 whitespace-nowrap rounded-md text-sm font-medium 
                                ring-offset-background transition-colors focus-visible:outline-none 
                                focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 
                                disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none
                                [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground 
                                hover:bg-primary/90 h-10 px-4 py-2 w-full" type="submit">
                        Log In
                    </button>

                    <button 
                        className="inline-flex items-center justify-center text-primary
                                gap-2 whitespace-nowrap rounded-md text-sm font-medium 
                                ring-offset-background transition-colors focus-visible:outline-none 
                                focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 
                                disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none
                                [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-primary text-primary-foreground 
                                hover:bg-primary/90 h-10 px-4 py-2 w-full"
                        onClick={handleGoogleLogin}>
                       <span className=''>Continue</span>  <span className=''>with</span> Google
                    </button>

                </form>
                

                <p className="text-center text-sm text-primary/80 mt-4 mb-2">
                    Don't have an account? 
                    <a className="text-primary hover:underline ms-1" href="/register">
                        Create account
                    </a>

                </p>
            </div>
        </div>
    )
}

export default Login;
