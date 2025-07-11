import React from 'react'
import { usePhotos } from '../../api/hooks/usePhotos'
import type { IPhotos } from '../../types'
import { useDispatch } from 'react-redux'
import { tooglePhoto } from '../../redux/features/wishlistSlice'

const Photos = () => {
    const {getPhoto} =  usePhotos()
    const {data, isLoading} = getPhoto()
    const dispatch = useDispatch()

    
  return (
    <div className='container mx-auto grid grid-cols-4 gap-3 mt-20'>
        {isLoading && <p className='text-4xl'>Loading...</p>}
        {data?.map((photo: IPhotos) =>(
                <div key={photo.id} className='bg-gray-100 rounded px-3 py-2 '>
                 <h3><span className='font-bold'>Title</span> {photo.title}</h3>
                 <button onClick={()=> dispatch(tooglePhoto(photo))} className='border px-3'>Like</button>
                </div>
            ))
        }
    </div>
  )
}

export default React.memo(Photos)