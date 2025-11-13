import React from 'react';


interface CardProps {
    number: string;
    icon: React.ReactNode;
    title: string;
    description: string;
    className?: string;
}


const Card: React.FC <CardProps>= ({number, icon, title, description, className }) => {
  return (
      <div className='rounded-lg p-8 shadow-lg border-t border-gray-400 
      h-full transition-all hover:shadow-md  
      hover:border-primary
            relative'>

        <div className='bg-orange-200/60 w-12 h-12 rounded-full
            flex items-center justify-center mb-6'>

            <span className={className}>
                  {icon}
            </span>

        </div>

          <div className='absolute top-4 right-4 w-8 h-8 bg-primary 
            rounded-full flex items-center justify-center 
            text-primary-foreground font-bold'>
            <span className='text-white'>
                {number}
            </span>
        </div>

        <div className=''>
            <h4 className='text-xl font-semibold text-primary mb-3 '>
                {title}            
            </h4>

            <p className='text-secondary leading-relaxed'>
                {description}
            </p>
        </div>

      
    </div>
  )
}

export default Card;
