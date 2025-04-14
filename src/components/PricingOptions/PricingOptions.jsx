import React, { use } from 'react';
import ProcingCart from '../PricingCart/ProcingCart';
import DaisyPricings from '../DaisyPricing/DaisyPricings';

const PricingOptions = ({pricingPromise}) => {

const pricingData = use(pricingPromise)
// console.log(pricingData)


    return (
        <div>

<h3 className='text-4xl mt-10 ml-4 '>get our membership</h3>
         <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10'>
         {/* {
                pricingData.map(pricing => <ProcingCart
                key={pricing.id}
                pricing ={pricing}
                ></ProcingCart>)
            } */}

       {
        pricingData.map(pricing => <DaisyPricings
        key={pricing.id}
        pricing={pricing}
        
        ></DaisyPricings>)
       }

         </div>
        </div>
    );
};

export default PricingOptions;