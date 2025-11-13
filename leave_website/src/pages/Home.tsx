import React from 'react';
import HeroSection from '../components/HeroSection';
import HowItWorks from '../components/HowItWorks';
import WhyChooseUs from '../components/WhyChooseUs';
import CallToAction from '../components/CallToAction';


const Home: React.FC = () => {
  return (
    <section className=''>
        <div className=''>
            <HeroSection/>
        </div>

        <div>
            <HowItWorks/>
        </div>

        <div>
            <WhyChooseUs />
        </div>

        <div>
            <CallToAction/>
        </div>

    </section>
  )
}

export default Home;
