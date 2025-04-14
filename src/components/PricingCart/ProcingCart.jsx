import React from 'react';
import PricingFeatures from './PricingFeatures';

const ProcingCart = ({ pricing }) => {
    const { name, price, Description, features } = pricing;

    return (
        <div>
            {/* card header */}
            <div className='border bg-amber-900 text-white p-4 m-4'>
                <h3 className='text-3xl'>{name}</h3>
                <h4 className='text-2xl'>{price}</h4>

                {/* card body */}
                <div className='border-1 border-gray-300 p-1 bg-white text-xs text-black font-normal'>
                    <p>{Description}</p>
                </div>

                {/* features list */}
                <div className='border p-1  text-xs mt-2'>
                    {features.map((feature, index) => (
                        <PricingFeatures
                            key={index}
                            feature={feature}
                        />
                    ))}
                </div>
                <button className="btn w-full mt-2">Subscribe</button>
            </div>
        </div>
    );
};

export default ProcingCart;
