import React, { useEffect, useState } from 'react'
import { api } from '../../api'
import type { IComments } from '../../types'
import { useDispatch } from 'react-redux'
import { toogleComment } from '../../redux/features/wishlistSlice'

const Comments = () => {
    const [data, setData] = useState<IComments[]>()
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    
    
        useEffect(()=>{
            setLoading(true)
            api
            .get("/comments")
            .then(res => setData(res.data))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))
        },[])
  return (
    <div className='container mx-auto grid grid-cols-4 gap-4 mt-20'>
        {loading && <p className='text-4xl'>Loading....</p>}
        {data?.map((comment: IComments) =>(
            <div key={comment.id} className='bg-gray-100 border border-gray-100 px-2 py-2'>
                <h2><span className='font-bold'>name:</span> {comment.name}</h2>
                <h2><span className='font-bold'>Email:</span> {comment.email}</h2>
                <h2><span className='font-bold'>Body:</span> {comment.body}</h2>
                <button onClick={()=> dispatch(toogleComment(comment))} className='border border-gray-300 px-2'>Like</button>
            </div>
        ))
        }
    </div>
  )
}

export default React.memo(Comments)