import React from 'react';
import { TiTickOutline } from "react-icons/ti";

const PricingFeatures = ({feature}) => {
    console.log(feature)

    return (
        <div>
            <p className='flex ml-2'>
            <TiTickOutline className='mr-2' /> {feature}
            </p>
        </div>
    );
};

export default PricingFeatures;