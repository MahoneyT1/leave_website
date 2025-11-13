import React from 'react';
import { Shield, Clock, User, Award } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  return (
    <section>

        <div className='py-12 bg-gray-100'>

            <div className='container px-4 mx-auto '>

                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl 
                        font-bold text-primary mb-4">
                            Why Choose Us
                    </h2>

                    <p className="text-xl text-secondary 
                        max-w-2xl mx-auto">
                            We're committed to making the leave 
                            application process as smooth as possible 
                            for military families
                    </p>
                </div>

                <div className='grid grid-cols-1 gap-10 md:grid-cols-2 
                    lg:grid-cols-4'>

                    <div className='text-center  p-2'>

                        <div className="inline-flex items-center 
                            justify-center w-20 h-20 bg-primary/10 
                            rounded-full mb-6">
                            <Shield size={50} className="text-primary" />
                        </div>   

                        <h3 className="text-xl font-semibold text-foreground mb-3">
                            Secure &amp; Confidential
                        </h3>  

                        <p className="text-muted-foreground leading-relaxed">
                            Military-grade encryption ensures your family's 
                            information remains private and protected.
                        </p>      

                    </div>

                      <div className='text-center p-2'>

                          <div className="inline-flex items-center 
                            justify-center w-20 h-20 bg-primary/10 
                            rounded-full mb-6">
                              <Clock size={50} className="text-primary" />
                          </div>

                          <h3 className="text-xl font-semibold text-foreground mb-3">
                              Secure &amp; Confidential
                          </h3>

                          <p className="text-muted-foreground leading-relaxed">
                              Military-grade encryption ensures your family's
                              information remains private and protected.
                          </p>

                      </div>

                      <div className='text-center p-2'>

                          <div className="inline-flex items-center 
                            justify-center w-20 h-20 bg-primary/10 
                            rounded-full mb-6">
                              <User size={50} className="text-primary" />
                          </div>

                          <h3 className="text-xl font-semibold text-foreground mb-3">
                              Secure &amp; Confidential
                          </h3>

                          <p className="text-muted-foreground leading-relaxed">
                              Military-grade encryption ensures your family's
                              information remains private and protected.
                          </p>

                      </div>

                      <div className='text-center p-2'>

                          <div className="inline-flex items-center 
                            justify-center w-20 h-20 bg-primary/10 
                            rounded-full mb-6">
                              <Award size={50} className="text-primary" />
                          </div>

                          <h3 className="text-xl font-semibold text-foreground mb-3">
                              Secure &amp; Confidential
                          </h3>

                          <p className="text-muted-foreground leading-relaxed">
                              Military-grade encryption ensures your family's
                              information remains private and protected.
                          </p>

                      </div>

                </div>

            </div>

        </div>
    </section>
  )
}

export default WhyChooseUs;
