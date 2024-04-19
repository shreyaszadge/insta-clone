// import React from 'react'
'use client'
import Link from "next/link"
import Image from "next/image"
import Modal from 'react-modal'
import { signIn ,useSession,signOut} from "next-auth/react"
import { useState } from "react"
import { CgAdd } from "react-icons/cg"
import { FaCamera } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";


export default function Header() {
    const { data: session } = useSession();
    console.log(session)
    const [isOpen,setIsopen]=useState(false)
  return (
    <div className="shadow-sm border-b sticky top-0 bg-white z-30 p-3">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
            {/* logo */}
            <Link href="/" className='hidden lg:inline-flex'>
                <Image 
                src='/name.webp'
                width={96}
                alt='instragram logo'
                height={96}
                ></Image>
            </Link>
            <Link href="/" className="lg:hidden">
                <Image 
                src='/logo.webp'
                width={40}
                alt='instragram logo'
                height={40}
                ></Image>
            </Link>

            {/* search input  */}
<input type="text" placeholder="Search" className="bg-gray-50 border bordeer-gray-200 rounded text-sm w-full py-2 px-4 max-w-[210px]"/>

            {/* menu items */}



 {

    session ? (
<div className="flex gap-2 items-center">
<CgAdd  className="text-2xl cursor-pointer transform hover:scale-125 transition duration-300 hover:text-red-600" onClick={()=>setIsopen(true)}></CgAdd>
        <img src={session.user.image} alt={session.user.name} className="h-10 w-10 rounded-full cursor-pointer" onClick={signOut}></img>
  </div>  ):(
 
          <button onClick={()=>signIn()} className="text-sm font-semibold text-blue-500">Log In</button>
     
    )
}    
          </div>

          { isOpen && (
            <Modal isOpen={isOpen} className='max-w-lg w-[90%] p-6 absolute top-56 left-[50%] translate-x-[-50%] bg-white border-2 rounded-md shadow-md' onRequestClose={()=>setIsopen(false)} ariaHideApp={false}>
                <div className="flex flex-col justify-center items-center h-[100%]">
                  <FaCamera className="text-5xl text-gray-400 cursor-pointer "/>
                  <input type="text" maxLength='150' placeholder="Please enter your caption"  className="m-4 border-none text-center w-full focus:ring-0 outline-none"/>
                 <button className="w-full bg-red-600 text-white p-2 shadow-md rounded-lg hover:brightness-105 disabled:bg-gray-200 disabled:cursor-not-allowed disabled:hover:brightness-100">Upload Post</button>
                </div>
                <IoIosCloseCircle  className="cursor-pointer absolute top-2 right-2 hover:text-red-600  transition duration-300" onClick={()=>setIsopen(false)}/>
            </Modal>
          )}
    </div>
  )
}
