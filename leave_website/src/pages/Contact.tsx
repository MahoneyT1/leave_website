import React from 'react'



const Contact: React.FC = () => {
    return (
        <div className="min-h-screen bg-background py-20">
            <div className="container mx-auto px-4 mt-15">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mt-5 mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold 
                            text-primary mb-4">
                                Contact Us
                        </h1>
                        
                        <p className="text-lg text-primary/80 
                            max-w-2xl mx-auto">
                                Have questions about military leave 
                                applications? We're here to help your 
                                family navigate the process.
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-2xl font-bold 
                                    text-primary mb-6">
                                    Get In Touch
                                </h2>
                                
                                <p className="text-primary/80 
                                    mb-8">
                                        Our dedicated team is available 
                                        to assist you with any questions 
                                        about military leave applications 
                                        for your loved ones.
                                </p>
                            </div>
                            
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary/10 
                                        rounded-lg">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
                                            className="lucide lucide-phone 
                                                w-6 h-6 text-primary">
                                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                            </svg>
                                            
                                    </div>
                                    
                                    <div>
                                        <h3 className="font-semibold text-primary mb-1">
                                            Phone
                                        </h3>
                                        
                                        <p className="text-muted-primary/80">
                                            1-800-MILITARY
                                        </p>
                                        
                                        <p className="text-sm text-primary/80">
                                            Mon-Fri, 8am-6pm EST
                                        </p>
                                        
                                    </div>
                                    
                                </div>
                                
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary/10 rounded-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail w-6 h-6 text-primary"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                    </svg>
                                </div>
                                
                                <div>
                                    <h3 className="font-semibold text-primary mb-1">
                                        Email
                                    </h3>
                                    
                                    <p className="text-primary/80">
                                        support@militaryleave.gov
                                    </p>
                                    
                                        <p className="text-sm text-primary/80">
                                        We respond within 24 hours
                                    </p>
                                    
                                </div>
                                
                            </div>
                            
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-primary/10 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin w-6 h-6 text-primary"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle>
                                </svg>
                            </div>
                            
                            <div>
                                <h3 className="font-semibold text-primary mb-1">
                                    Office
                                </h3>
                                
                                <p className="text-primary/80">1500 Defense Pentagon<br/>
                                    Washington, DC 20301    
                                </p>
                                
                            </div>
                        </div>
                        
                    </div>
                    
                    <div className="p-6 bg-accent/50 rounded-lg border border-border">
                    
                        <h3 className="font-semibold text-primary mb-2">
                            Emergency Support
                        </h3>
                        
                        <p className="text-sm text-muted-foreground mb-3">
                            For urgent matters requiring immediate assistance, 
                            please contact the 24/7 emergency hotline.
                        </p>
                        
                        <p className="font-semibold text-primary">
                            1-800-URGENT-00
                        </p>
                        
                    </div>
                </div>
                
                <div className="bg-card p-8 rounded-lg border 
                    border-border shadow-sm">
                        <h2 className="text-2xl font-bold 
                            text-primary mb-6">
                                Send Us a Message
                        </h2>
                        
                        <form className="space-y-6">
                            <div>
                                <label className="text-sm font-medium leading-none 
                                    peer-disabled:cursor-not-allowed peer-disabled:opacity-70" 
                                    htmlFor="name">
                                        Full Name *
                                </label>
                                
                                <input className="flex h-10 w-full rounded-md border 
                                    border-input bg-background px-3 py-2 text-base 
                                    ring-offset-background file:border-0 file:bg-transparent 
                                    file:text-sm file:font-medium file:text-primary 
                                    placeholder:text-muted-foreground focus-visible:outline-none
                                    focus-visible:ring-2 focus-visible:ring-ring 
                                    focus-visible:ring-offset-2 disabled:cursor-not-allowed 
                                    disabled:opacity-50 md:text-sm mt-2"
                                    id="name" name="name" placeholder="John Doe" />

                            </div>
                            
                            <div>
                                <label className="text-sm font-medium leading-none 
                                    peer-disabled:cursor-not-allowed peer-disabled:opacity-70" 
                                    htmlFor="email">
                                        Email Address *
                                </label>
                                
                                <input type="email" className="flex h-10 w-full rounded-md border 
                                border-input bg-background px-3 py-2 text-base ring-offset-background
                                file:border-0 file:bg-transparent file:text-sm file:font-medium 
                                file:text-primary placeholder:text-muted-foreground focus-visible:outline-none 
                                focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed 
                                disabled:opacity-50 md:text-sm mt-2" id="email" name="email" placeholder="john.doe@example.com"/>
                                
                            </div>
                            
                            <div>
                                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed 
                                    peer-disabled:opacity-70" for="phone">Phone Number *
                                </label>
                                
                                <input type="tel" className="flex h-10 w-full rounded-md border 
                                    border-input bg-background px-3 py-2 text-base ring-offset-background
                                    file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-primary 
                                    placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 
                                    focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed 
                                    disabled:opacity-50 md:text-sm mt-2" id="phone" name="phone" placeholder="(555) 123-4567"/>
                            </div>
                            
                            <div>
                                
                                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed 
                                    peer-disabled:opacity-70" htmlFor="relationship">
                                        Relationship to Service Member *
                                </label>
                                
                                <input className="flex h-10 w-full rounded-md border 
                                    border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 
                                    file:bg-transparent file:text-sm file:font-medium file:text-primary 
                                    placeholder:text-muted-foreground focus-visible:outline-none 
                                    focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 
                                    disabled:cursor-not-allowed disabled:opacity-50 md:text-sm mt-2" id="relationship" 
                                    name="relationship" placeholder="e.g., Spouse, Parent, Sibling"/>
                                
                            </div>
                            
                            <div>
                                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" 
                                    htmlFor="message">
                                        Message *
                                </label>
                        
                                <textarea className="flex w-full rounded-md border border-input bg-background px-3 py-2
                                    text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none 
                                    focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed 
                                    disabled:opacity-50 mt-2 min-h-[120px]" 
                                    id="message" name="message" placeholder="Please describe how we can help you...">
                                </textarea>
                                
                            </div>
                            
                            <button className="inline-flex items-center justify-center gap-2 
                                whitespace-nowrap rounded-md text-sm font-medium ring-offset-background 
                                transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring 
                                focus-visible:ring-offset-2 disabled:pointer-events-none 
                                disabled:opacity-50 [&amp;_svg]:pointer-events-none 
                                [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-white 
                                hover:bg-primary/90 h-10 px-4 py-2 w-full" type="submit">
                                    Send Message
                            </button>
                        </form>
                        
                    </div>
                    
                </div>
                
            </div>
        </div>

    </div>
    )
}

export default Contact;
