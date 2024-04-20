// import React from 'react'

import Miniprofile from "./Miniprofile"
import Posts from "./Posts"

const Feed = () => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-3 md:max-w-6xl mx-auto">
{/* posts left */}
<section className="md:col-span-2 ">
    <Posts/>
</section>


{/* mini profile  */}
<section className="hidden md:inline-grid md:col-span-1">
    <div className="fixed w-[380px]">
    <Miniprofile/>
</div>
</section>
    </main>
  )
}

export default Feed