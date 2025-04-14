import React from 'react';

const ProcingCart = ({pricing}) => {
    const {name, price} = pricing
    return (
        <div>
            

              {/* card header */}

            <div>
                <h3 className='3xl'>{name}</h3>
                <h4 className='2xl'>{price}</h4>
            </div>
        </div>
    );
};

export default ProcingCart;