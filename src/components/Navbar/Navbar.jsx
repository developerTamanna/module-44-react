import React from 'react';
import Link from './Link';



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
    return (
        <nav>
          <ul className='flex'>
            {
                navigationData.map(route=><Link
                key={route.id}
                route={route}
                ></Link>)
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
        </nav>
    );
};

export default Navbar;