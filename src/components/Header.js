// import React from 'react'
'use client'
import Link from "next/link"
import Image from "next/image"
import { signIn ,useSession,signOut} from "next-auth/react"
export default function Header() {
    const { data: session } = useSession();
    console.log(session)
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
        <img src={session.user.image} alt={session.user.name} className="h-10 w-10 rounded-full cursor-pointer" onClick={signOut}></img>
    ):(
 
          <button onClick={()=>signIn()} className="text-sm font-semibold text-blue-500">Log In</button>
     
    )
}    
          </div>
    </div>
  )
}
