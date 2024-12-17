"use client"

import Link from "next/link"
import { useState } from "react"
import { RiMenu5Fill } from "react-icons/ri"

const Menu = () => {
  
    const [open, setOpen] = useState(false)
    return (
        <div className="">
            <RiMenu5Fill 
                width={28} 
                height={28} 
                className="cursor-pointer" 
                onClick={()=>setOpen((prev) => !prev)}
            />{
                open && (
                    <div className="absolute bg-white text-black left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl z-10">
                        <Link className="navbar_link relative" href="/">HOME</Link>
                        <Link className="navbar_link relative" href="/product_list">SHOP</Link>
                        <Link className="navbar_link relative" href="/purchases">MY PURCHASES</Link> 
                    </div>
                )
            }
        </div>
  )
}

export default Menu