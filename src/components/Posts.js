// import React from 'react'
import {app} from '../firebase'
import { getFirestore,query,collection,orderBy, getDocs } from 'firebase/firestore';
import Post from './Post';
const Posts =async () => {
  const db=getFirestore(app);
  const q=query(collection(db,'posts'),orderBy('TimeStamp','desc'));
  const querySnapshot=await getDocs(q);
  let data= [];
  querySnapshot.forEach((doc)=>{
    data.push({id:doc.id,...doc.data()})
  })
// console.log(data)
  
  return (
    <div>
      {data.map((post)=>(
        <Post key={post.id} post={post} ></Post>
      ))}
    </div>
  )
}

export default Posts