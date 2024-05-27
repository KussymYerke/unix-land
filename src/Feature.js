import React from 'react';

const FeatureCard = ({ title, description, image }) => {
  return (
    <div className="bg-white rounded-[24px] lg:ml-10 lg:pr-10 shadow-lg pl-8 flex-shrink-0 max-w-[515px] h-[551px] max-[600px]:max-w-[300px] max-[600px]:max-h-[320px]">
      <h3 className="mt-4 text-[28px] text-black mb-10">{title}</h3>
      <img className="rounded-t-lg h-[205px] w-[447px] max-[600px]:w-[90%] max-[600px]:h-[50%]  object-cover" src={image} alt={title} />
      <div className='w-[85px] my-8'  style={{ border: '1.5px solid #2B2B2B' }}></div>
      <p className="mt-2 text-black leading-7 text-[22px]" dangerouslySetInnerHTML={{ __html: description }}></p>

    </div>
  );
};

export default FeatureCard;
