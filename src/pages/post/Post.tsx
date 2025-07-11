import React, { useEffect, useState } from 'react'
import { api } from '../../api'
import type { IPosts } from '../../types'
import { useDispatch } from 'react-redux'
import { tooglePost } from '../../redux/features/wishlistSlice'

const Post = () => {
    const [data, setData] = useState<IPosts[]>()
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()


    useEffect(()=>{
        setLoading(true)
        api
        .get("/posts")
        .then(res => setData(res.data))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
    },[])
  return (
    <div className='container mx-auto grid grid-cols-4 gap-4 mt-20'>
        {loading && <p className='text-4xl'>Loading....</p>}
      {data?.map((post: IPosts) =>(
            <div key={post.id} className='bg-gray-100 border rounded border-gray-100 px-2 py-2'>
                <h2><span className='font-bold'>Title:</span> {post.title}</h2>
                <h2><span className='font-bold'>Body:</span> {post.body}</h2>
                <button onClick={()=>dispatch(tooglePost(post))} className='border border-gray-300 px-2'>Like</button>
            </div>
        ))
      }
    </div>
  )
}

export default React.memo(Post)