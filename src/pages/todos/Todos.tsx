import React from 'react'
import { usetodos } from '../../api/hooks/useTodos'
import type { ITodos } from '../../types'
import { useDispatch } from 'react-redux'
import { toogleTodo } from '../../redux/features/wishlistSlice'

const Todos = () => {
    const {getTodo} = usetodos()
    const {data, isLoading} = getTodo()
    const dispatch = useDispatch()
  return (
    <div className='container mx-auto grid grid-cols-4 gap-3 mt-20'>
        {isLoading && <p className='text-4xl'>Loading...</p>}
        {data?.map((todo: ITodos) => (
                <div key={todo.id} className='bg-slate-100 rounded px-3 py-1'>
                    <h3><span className='font-bold'>Title:</span> {todo.title}</h3>
                    <h3><span className='font-bold'>Completed:</span> {todo.completed ? "true" : "false"}</h3>
                    <button onClick={()=> dispatch(toogleTodo(todo))} className='border  px-3'>Like</button>
                </div>
            ))
        }
    </div>
  )
}

export default React.memo(Todos)