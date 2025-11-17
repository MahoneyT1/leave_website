import React from 'react'


const About: React.FC = () => {
    return (
        <section className="flex-1">
            <section className="bg-primary/50 py-35">
                <div className="container px-4 mx-auto max-w-4xl ">
                    <h1 className="text-4xl md:text-6xl font-bold text-primary
                     mb-6 text-center">
                        About Military Leave Services
                    </h1>

                    <p className="text-xl text-primary text-center leading-relaxed">
                        Supporting military families through life's most challenging moments
                        with professional, compassionate leave application services.
                    </p>
                </div>

            </section>

            <section className="py-20 bg-background">
                <div className="container px-4 mx-auto max-w-4xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold 
                            text-primary mb-6">
                            Our Mission
                        </h2>

                        <p className="text-lg text-primary leading-relaxed mb-6">
                            We exist to ease the burden on military families during times of
                            crisis and need. When family emergencies arise, service members
                            shouldn't have to navigate complex leave application processes alone.
                        </p>

                        <p className="text-lg text-primary leading-relaxed">
                            Our team of experienced professionals understands military protocols
                            and works tirelessly to ensure your leave applications are complete,
                            accurate, and processed as quickly as possible.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-secondary/30">
                <div className="container px-4 mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold 
                        text-center text-primary mb-12">
                        Our Core Values
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 
                        gap-6 max-w-6xl mx-auto">

                        <div className="rounded-lg border bg-card text-primary shadow-sm text-center">
                            <div className="p-6 pt-6">
                                <div className="inline-flex items-center justify-center w-16 h-16 
                                bg-primary/10 rounded-full mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                        height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        className="lucide lucide-shield w-8 h-8 text-primary">
                                        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z">
                                        </path>
                                    </svg>

                                </div>

                                <h3 className="text-xl font-semibold text-primary mb-3">
                                    Integrity
                                </h3>

                                <p className="text-dark leading-relaxed">
                                    We operate with the highest standards of honesty and transparency in
                                    serving military families.
                                </p>

                            </div>

                        </div>

                        <div className="rounded-lg border bg-card text-card-foreground shadow-sm text-center">
                            <div className="p-6 pt-6">
                                <div className="inline-flex items-center justify-center w-16 h-16 
                                bg-primary/10 rounded-full mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        className="lucide lucide-heart w-8 h-8 text-primary">
                                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z">
                                        </path>
                                    </svg>
                                </div>

                                <h3 className="text-xl font-semibold text-primary mb-3">
                                    Compassion
                                </h3>

                                <p className="text-primary/80 leading-relaxed">
                                    We understand the sacrifices military families make and treat every
                                    case with empathy and care.
                                </p>

                            </div>
                        </div>

                        <div className="rounded-lg border bg-card text-card-foreground shadow-sm text-center">
                            <div className="p-6 pt-6">
                                <div className="inline-flex items-center justify-center w-16 h-16 
                                bg-primary/10 rounded-full mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round"
                                        className="lucide lucide-users w-8 h-8 text-primary">
                                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2">
                                        </path>
                                        <circle cx="9" cy="7" r="4"></circle>
                                        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                    </svg>
                                </div>

                                <h3 className="text-xl font-semibold text-primary mb-3">
                                    Service
                                </h3>

                                <p className="text-primary/80 leading-relaxed">
                                    Dedicated to supporting those who serve our nation with professional,
                                    reliable assistance.
                                </p>

                            </div>
                        </div>

                        <div className="rounded-lg border bg-card text-card-foreground shadow-sm text-center">
                            <div className="p-6 pt-6">
                                <div className="inline-flex items-center justify-center 
                                w-16 h-16 bg-primary/10 rounded-full mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round"
                                        className="lucide lucide-target w-8 h-8 text-primary">
                                        <circle cx="12" cy="12" r="10">
                                        </circle>
                                        <circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle>
                                    </svg>
                                </div>

                                <h3 className="text-xl font-semibold text-primary mb-3">
                                    Excellence
                                </h3>

                                <p className="text-primary/80 leading-relaxed">
                                    Committed to providing exceptional service and achieving the best outcomes for
                                    our clients.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-background">
                <div className="container px-4 mx-auto max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-bold 
                        text-center text-primary mb-12">
                        Our Story
                    </h2>
                    <div className="space-y-6 text-lg text-primary/80 leading-relaxed">

                        <p>Military Leave Services was founded by veterans and military family members who
                            experienced firsthand the challenges of navigating leave applications during family
                            emergencies. We witnessed how the stress of paperwork and processes added to already
                            difficult situations.
                        </p>

                        <p>Today, we're proud to serve thousands of military families across all branches of
                            service. Our team includes former military personnel, administrative specialists,
                            and family advocates who bring decades of combined experience to every case.
                        </p>

                        <p>We believe that when crisis strikes, service members deserve support that's as
                            dedicated and reliable as they are to our nation. That commitment drives everything
                            we do.
                        </p>

                    </div>
                </div>

            </section>

            <section className="py-20 bg-muted/30">
                <div className="container px-4 mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                        Available 24/7
                    </h2>

                    <p className="text-lg text-primary/80 leading-relaxed mb-8">
                        Emergencies don't follow a schedule, and neither do we. Our dedicated team
                        is available around the clock to assist military families when they need us most.
                    </p>

                    <div className="inline-flex flex-col sm:flex-row gap-4 
                        items-center justify-center lg:mt-10">
                        <div className="text-center">
                            <div className="text-4xl font-bold text-primary mb-2">
                                24/7
                            </div>

                            <div className="text-sm text-primary/80">
                                Support Available
                            </div>
                        </div>
                        <div className="hidden sm:block w-px h-16 bg-border"></div>

                        <div className="text-center">

                            <div className="text-4xl font-bold text-primary mb-2">
                                48-72hr
                            </div>

                            <div className="text-sm text-primary/80">
                                Typical Processing
                            </div>
                        </div>

                        <div className="hidden sm:block w-px h-16 bg-border"></div>

                        <div className="text-center">

                            <div className="text-4xl font-bold text-primary mb-2">
                                100%
                            </div>

                            <div className="text-sm text-primary/80">
                                Dedicated to Service
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default About;
