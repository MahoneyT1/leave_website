import React from 'react';
import Accordion from './Accordion';

interface questions {
    index: number,
    question: string;
    answer: string;
};

const items: questions[] = [
    {
        index: 1,
        question: "What types of military leave are available?",
        answer: "There are several types of military leave including\
                Emergency Family Leave, Compassionate Reassignment, and \
                Humanitarian Leave.Each has specific eligibility \
                requirements and approval processes depending on the \
                circumstances."
    },
    {
        index: 2,
        question: "How long does the application process take?",
        answer: "The typical processing time is 2-4 weeks, though \
                emergency situations may be expedited within 48-72 hours. \
                Processing times vary based on the type of leave requested \
                and the documentation provided."
    },
    {
        index: 3,
        question: "What documents do I need to apply?",
        answer: "Required documents typically include official leave request\
                forms, supporting documentation (medical records, death certificates, etc.), \
                commander's endorsement, and proof of relationship to the service \
                member. Specific requirements vary by leave type."
    },
    {
        index: 4,
        question: "Can I apply on behalf of my family member?",
        answer: "Yes, family members can initiate the leave application process. However, the service member must ultimately submit and sign the official request through their chain of command."
    },
    {
        index: 5,
        question: "What if my application is denied?",
        answer: "If denied, you'll receive written notification with the reasons. You can appeal the decision by providing additional documentation or clarification. Our support team can help guide you through the appeals process."
    },
];


const FAQ: React.FC = () => {
  return (
    <section className='py-20 bg-muted/30'>
        <div className='container px-4 mx-auto max-w-4xl lg:px-10'>

            <div className=''>
                <h1 className='text-4xl md:text-5xl font-bold text-center mb-4
                    text-primary'>
                    Frequently Asked Questions
                </h1>

                <p className='text-lg text-secondary text-center mb-12 
                    max-w-2xl mx-auto'>
                    Find answers to common questions about military leave 
                    Applications
                    and process.
                </p>
            </div>

             <div>
                <Accordion items={items} />
            </div>

        </div>
    </section>
    )   
};

export default FAQ;
