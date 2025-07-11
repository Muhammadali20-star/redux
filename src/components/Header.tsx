import React from "react"
import { NavLink } from "react-router-dom"

const Header = () => {
 

  return (
    <header className="container mx-auto flex justify-between">
        <NavLink to={'/post'}>Post</NavLink>
        <NavLink to={'/albums'}>Albums</NavLink>
        <NavLink to={'/comments'}>Comments</NavLink>
        <NavLink to={'/photos'}>Photos</NavLink>
        <NavLink to={'/todos'}>Todos</NavLink>
        <NavLink to={'/users'}>Users</NavLink>
        <NavLink to={'/wishlist'}>Wishlist</NavLink>
    </header>
  )
}

export default React.memo(Header)