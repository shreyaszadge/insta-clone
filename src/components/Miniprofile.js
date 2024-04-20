// import React from 'react'

'use client'
import { useSession ,signIn,signOut } from "next-auth/react"

const Miniprofile = () => {
    const {data:session}=useSession();
  return (
    <div className="flex items-center justify-between mt-14 scroll-ml-10">
        <img src={
        session?.user?.image || "/logo.webp"
        } 
        alt="userprofile"
        className="w-16 h-16 rounded-full border p-[2px]"
        ></img>

        <div className="flex-1 ml-4">
            <h2 className="font-bold">{session?.user?.username}</h2>
            <h3>welcome to Instrgram</h3>
        </div>
        {session ? (
<button className="text-blue-500 text-sm font-semibold"
onClick={signOut}
>Sign Out</button>
        ):(
<button className="text-blue-500 text-sm font-semibold"
onClick={signIn} >Sign In</button>

        )}
    </div>
  )
}

export default Miniprofile