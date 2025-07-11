import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/Header'

const Layout = () => {
  return (
    <div>
        <Header />
      <main className='min-h-[80vh]'>
        <Outlet />
      </main>
    </div>
  )
}

export default React.memo(Layout)