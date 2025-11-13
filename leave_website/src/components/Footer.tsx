import React from 'react'

const Footer: React.FC = () => {
  return (
      <footer className="bg-foot text-white py-12 border-t 
        border-accent/20">

            <div className="container px-4 mx-auto">
                <div className="grid md:grid-cols-3 gap-8">

                    <div>
                        <h3 className="text-xl font-bold mb-4">
                        Military Leave Services</h3>
                        <p className="text-primary-foreground/80 
                            leading-relaxed">
                                Supporting military families with professional 
                                leave application services.
                        </p>
                    </div>
                    
                    <div>
                        <h4 className="text-lg font-semibold mb-4">
                            Quick Links
                        </h4>
                        
                        <ul className="space-y-2 text-primary-foreground/80">
                            <li><a href="#" className="hover:text-accent 
                                transition-colors">How It Works </a>
                            </li>
                            
                            <li><a href="#" className="hover:text-accent 
                                transition-colors">
                                FAQ</a>
                            </li>
                            
                            <li><a href="#" className="hover:text-accent 
                                transition-colors">
                                    Contact Us</a>
                            </li>
                            
                            <li><a href="#" className="hover:text-accent 
                                transition-colors">
                                    Privacy Policy</a>
                            </li>
                        </ul>
                        
                    </div>
                    
                    <div>
                        <h4 className="text-lg font-semibold mb-4">
                            Contact
                        </h4>
                        
                        <ul className="space-y-2 text-white">
                            <li>Email: support@militaryleave.com</li>
                            <li>Phone: 1-800-MILITARY</li>
                            <li>Hours: 24/7 Support</li>
                        </ul>
                    </div>
                    
                </div>
                
                <div className="border-t border-white mt-8 
                    pt-8 text-center text-white">
                        <p>© 2025 Military Leave Services. 
                            All rights reserved.
                        </p>
                </div>
            </div>
    </footer>
  )
}

export default Footer;
