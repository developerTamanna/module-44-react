import React, { use } from 'react';
import ProcingCart from '../PricingCart/ProcingCart';

const PricingOptions = ({pricingPromise}) => {

const pricingData = use(pricingPromise)
// console.log(pricingData)


    return (
        <div>

<h3 className='tex-xl'>get our membership</h3>
            {
                pricingData.map(pricing => <ProcingCart
                key={pricing.id}
                pricing ={pricing}
                ></ProcingCart>)
            }
        </div>
    );
};

export default PricingOptions;