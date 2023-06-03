import React from 'react'
import MenuItems from './MenuItems'
import { useSelector } from 'react-redux'

const Sidebar = () => {
  const isMenuOpen=useSelector(store=>store.app.isMenuOpen);

  if(!isMenuOpen) return null;
  return (
    <div className='sidebar-parent col-span-1 shadow-lg w-52'>
        <MenuItems/>
    </div>
  )
}

export default Sidebar