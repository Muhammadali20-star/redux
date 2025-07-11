import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../../redux'
import type { IComments, IUsers, IPosts, IPhotos, ITodos, IAlbums } from '../../types'
import { toogleAlbum, toogleComment, tooglePhoto, tooglePost, toogleTodo, toogleUser } from '../../redux/features/wishlistSlice'

const Wishlist = () => {
  const users = useSelector((state: RootState) => state.wishlist.users)
  const comments = useSelector((state: RootState) => state.wishlist.comments)
  const posts = useSelector((state: RootState) => state.wishlist.posts)
  const photos = useSelector((state: RootState) => state.wishlist.photos)
  const todos = useSelector((state: RootState) => state.wishlist.todos)
  const albums = useSelector((state: RootState) => state.wishlist.albums)
  const dispatch = useDispatch()

  
  
  return (
    <div className="container mx-auto p-5 space-y-10">

      <div>
        <h2 className="text-lg font-semibold mb-2">Users</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {users?.map((user: IUsers) => (
            <div key={user.id} className="border bg-gray-100 border-gray-100 rounded px-3">
                <h3><span className='font-bold'>Title:</span> {user.name}</h3>
                <h3><span className='font-bold'>Username:</span> {user.username}</h3>
                <h3><span className='font-bold'>Email</span> {user.address?.email}</h3>
                <h3><span className='font-bold'>Street</span> {user.address?.street}</h3>
                <h3><span className='font-bold'>Suite</span> {user.address?.suite}</h3>
                <h3><span className='font-bold'>City</span> {user.address?.city}</h3>
                <button onClick={()=> dispatch(toogleUser(user))} className='border  px-3'>Like</button>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-2">Comments</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {comments?.map((comment: IComments) => (
            <div key={comment.id} className="border bg-gray-100 border-gray-100 rounded px-3">
                <h2><span className='font-bold'>name:</span> {comment.name}</h2>
                <h2><span className='font-bold'>Email:</span> {comment.email}</h2>
                <h2><span className='font-bold'>Body:</span> {comment.body}</h2>
                <button onClick={()=> dispatch(toogleComment(comment))} className='border  px-3'>Like</button>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-2">Posts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {posts?.map((post: IPosts) => (
            <div key={post.id} className="border bg-gray-100 border-gray-100 rounded px-3">
              <h2><span className='font-bold'>Title:</span> {post.title}</h2>
              <h2><span className='font-bold'>Body:</span> {post.body}</h2>
              <button onClick={()=> dispatch(tooglePost(post))} className='border  px-3'>Like</button>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-2">Photos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {photos?.map((photo: IPhotos) => (
            <div key={photo.id} className="border bg-gray-100 border-gray-100 rounded px-3">
              <h3><span className='font-bold'>Title</span> {photo.title}</h3>
              <button onClick={()=> dispatch(tooglePhoto(photo))} className='border  px-3'>Like</button>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-2">Todos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {todos?.map((todo: ITodos) => (
            <div key={todo.id} className="border bg-gray-100 border-gray-100 rounded px-3">
              <h3><span className='font-bold'>Title:</span> {todo.title}</h3>
              <h3><span className='font-bold'>Completed:</span> {todo.completed ? "true" : "false"}</h3>
              <button onClick={()=> dispatch(toogleTodo(todo))} className='border  px-3'>Like</button>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-2">Albums</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {albums?.map((album: IAlbums) => (
            <div key={album.id} className="border bg-gray-100 border-gray-100 rounded px-3">
              <h2><span className='font-bold'>Title:</span> {album.title}</h2>
              <button onClick={()=> dispatch(toogleAlbum(album))} className='border  px-3'>Like</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default React.memo(Wishlist)
