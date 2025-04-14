import React, { useState } from 'react';
import Link from './Link';

import { CiMenuBurger } from "react-icons/ci";
import { IoIosClose } from 'react-icons/io';

const navigationData = [
    {
      id: 1,
      name: "Home",
      path: "/home"
    },
    {
      id: 2,
      name: "About",
      path: "/about"
    },
    {
      id: 3,
      name: "Services",
      path: "/services"
    },
    {
      id: 4,
      name: "Contact",
      path: "/contact"
    },
    {
      id: 5,
      name: "Blog",
      path: "/blog"
    }
  ];
  
const Navbar = () => {


    const [open, setOpen] = useState(false);
    
   const links =    navigationData.map(route=><Link
    key={route.id}
    route={route}
    ></Link>)
    return (
        <nav className='flex justify-between mx-10'>
         <span className='flex items-center' onClick={()=>setOpen(!open)}>

          {
            open ? <IoIosClose className='md:hidden'></IoIosClose> :  < CiMenuBurger className='md:hidden' />
          }
       <ul className={`md:hidden absolute duration-1000 bg-gray-300 ${open? 'top-13':'-top-40' }`}>
        {links}
       </ul>
        <h1 className='ml-4'>My navBar</h1>
        
         </span>
           
          <ul className='md:flex hidden'>
            {
             links
            }
        </ul>
          {/* <ul className='flex'>
            {
                navigationData.map(route => <li className='mr-10'>
                    <a href={route.path}></a> {route.name} </li>)
            }
          </ul> */}



            {/* <ul className='flex '>
                <li className='mr-10'>
                    <a href="/home">Home</a>  </li>
                    <li className='mr-10'><a href="/blog">blog</a></li>
                   <li className='mr-10'> <a href="/about">about</a> </li>
                   <li className='mr-10'>  <a href="/contact">contact</a></li>
              
            </ul> */}
            <button>sign in</button>
        </nav>
    );
};

export default Navbar;