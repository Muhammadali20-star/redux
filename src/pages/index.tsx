import React, { lazy } from 'react'
import { useRoutes } from "react-router-dom"
const Layout = lazy(() => import("./layout/Layout"));
const Post = lazy(() => import("./post/Post"));
const Album = lazy(() => import("./album/Album"));
const Comments = lazy(() => import("./comments/Comments"));
const Users = lazy(() => import("./users/Users"));
const Photos = lazy(() => import("./photos/Photos"));
const Todos = lazy(() => import("./todos/Todos"));
const Wishlist = lazy(() => import("./wishlist/Wishlist"));


const MainRouter = () => {
  return (
    <div>
        {
        useRoutes([
        {path: '/', element: <Layout/>, children:[
          { path: '/', element: <Post/>},
          { path: '/albums', element: <Album/>},
          { path: '/comments', element: <Comments/>},
          { path: '/users', element: <Users/>},
          { path: '/photos', element: <Photos/>},
          { path: '/todos', element: <Todos/>},
          { path: '/wishlist', element: <Wishlist/>}
        ]}
        ])
      }
    </div>
  )
}

export default React.memo(MainRouter)