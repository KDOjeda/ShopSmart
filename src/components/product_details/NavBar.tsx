import Link from "next/link";
import React from 'react';

const NavBar = () => {
  return (
    
   
    <div className="hidden lg:block">
      
      

            <div className="flex w-fit gap-10 mx-auto font-medium py-1 text-blackish">
                <Link className="navbar_link relative" href="/">HOME</Link>
                <Link className="navbar_link relative" href="/pages/product">SHOP</Link>
                <Link className="navbar_link relative" href="/pages/syd">MY PURCHASES</Link>
            </div>
    </div>
  )
}

export default NavBar