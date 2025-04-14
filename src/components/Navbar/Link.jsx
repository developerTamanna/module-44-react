import React from 'react';

const Link = ({route}) => {


    return (
        <div>
            <li className='lg:mr-10 px-4 hover:bg-amber-950 hover:text-white'>
                <a href={route.path}>{route.name}</a>
            </li>
        </div>
    );
};

export default Link;