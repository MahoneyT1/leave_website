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
                            Your information is encrypted &amp; secure
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

                        <h3 className="text-xl font-semibold text-primary mb-3">
                            Secure &amp; Confidential
                        </h3>  

                        <p className="leading-relaxed text-secondary">
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

                          <h3 className="text-xl font-semibold text-primary mb-3">
                              Fast Processing
                          </h3>

                          <p className="text-secondary leading-relaxed">
                            Most applications are reviewed within 48-72 hours, 
                            getting answers when you need them.
                          </p>

                      </div>

                      <div className='text-center p-2'>

                          <div className="inline-flex items-center 
                            justify-center w-20 h-20 bg-primary/10 
                            rounded-full mb-6">
                              <User size={50} className="text-primary" />
                          </div>

                          <h3 className="text-xl font-semibold text-primary mb-3">
                              Dedicated Support
                          </h3>

                          <p className="text-secondary leading-relaxed">
                              Our team of military family advocates is here to 
                              help you every step of the way.
                          </p>

                      </div>

                      <div className='text-center p-2'>

                          <div className="inline-flex items-center 
                            justify-center w-20 h-20 bg-primary/10 
                            rounded-full mb-6">
                              <Award size={50} className="text-primary" />
                          </div>

                          <h3 className="text-xl font-semibold text-primary mb-3">
                              Trusted Service
                          </h3>

                          <p className="text-secondary leading-relaxed">
                              Serving military families with honor and integrity 
                              since our establishment.
                          </p>

                      </div>

                </div>

            </div>

        </div>
    </section>
  )
}

export default WhyChooseUs;
