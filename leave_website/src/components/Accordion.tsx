import React from 'react';


interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[],
  className?: string;
}

const Accordion: React.FC<AccordionProps> = ({ items, className }) => {

    const [openIndex, setOpenIndex] = React.useState<number | null>(null);

    const toggleItem = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };


  return (
    <div className='container px-4 mx-auto '>

        {items.map((item: AccordionItem, index: number) => (
            <div key={index} className="border-b border-gray-200 leading-6 py-4 text-bold">
                <button
                    className="w-full text-left py-4 flex justify-between 
                        items-center focus:outline-none"
                    onClick={() => toggleItem(index)}
                >
                    <span className="text-lg font-medium text-primary">
                        {item.question}
                    </span>
                    <span className='flex items-center justify-center animate-rotate-180 
                        text-2xl ease-in-out text-primary'>
                        {openIndex === index ? '-' : '+'}
                    </span>
                </button>
                {openIndex === index && (
                    <div className="py-2 text-secondary">
                        {item.answer}
                    </div>
                )}
            </div>
        ))}
    </div>
  )
}

export default Accordion;
