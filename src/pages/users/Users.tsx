import React, { type FC } from 'react'
import { useUsers } from '../../api/hooks/useUsers'
import type { IUsers } from '../../types';
import { useDispatch } from 'react-redux';
import { toogleUser } from '../../redux/features/wishlistSlice';



const Users: FC = () => {
   const {getUser} = useUsers()
    const {data, isLoading} =  getUser()
    const dispatch = useDispatch()
    
    
  return (
    <div className='container mx-auto grid grid-cols-5 gap-4 mt-20'>
      {isLoading && <p className='text-4xl'>Loading...</p>}
        {data?.map((user: IUsers) =>(
                 <div key={user.id} className='flex flex-col gap-2 bg-gray-100 rounded px-3 py-1'>
                  <h3><span className='font-bold'>Title:</span> {user.name}</h3>
                  <h3><span className='font-bold'>Username:</span> {user.username}</h3>
                  <h3><span className='font-bold'>Email</span> {user.address?.email}</h3>
                  <h3><span className='font-bold'>Street</span> {user.address?.street}</h3>
                  <h3><span className='font-bold'>Suite</span> {user.address?.suite}</h3>
                  <h3><span className='font-bold'>City</span> {user.address?.city}</h3>
                  <button onClick={()=> dispatch(toogleUser(user))} className='border  px-3'>Like</button>
                 </div>
            ))
        }
    </div>
  )
}

export default React.memo(Users)