import React from 'react'
import { Link } from 'react-router-dom'

const MenuItems = () => {
  return (
    <div className='sidebar-menus p-3 flex flex-col gap-4'>
        <div className="home">
            <ul>
             <Link to='/'>
             <li>Home</li>
             </Link>   
                <li>Shorts</li>
                <li>Subscription</li>
            </ul>
        </div>
        <hr />
        <div className="library">
            <h1 className='font-bold
            '>Library</h1>
            <ul>
                <li>Library</li>
                <li>History</li>
                <li>Your Videos</li>
                <li>Watch later</li>
                <li>Liked videos</li>
            </ul>
        </div>
        <hr />
        <div className=" subscription">
            <h2 className=' font-bold
            '>Subscriptions</h2>
            <ul>
                <li>Persona institue</li>
                <li>Jeff Jhang</li>
                <li>Harshdeep "Kinghh"</li>
            </ul>
        </div>
        <hr />
        <div className=" explore">
            <h2 className=' font-bold'>Explore</h2>
            <ul>
                <li>Trending</li>
                <li>Shopping</li>
                <li>Music</li>
                <li>Movies</li>
                <li>Live</li>
                <li>Gamming</li>
                <li>News</li>
            </ul>
        </div>
        <hr />
        <div className="more-from-youtube">
            <h2 className='font-bold'>More from YouTube</h2>
            <ul>
                <li>YouTube Premium</li>
                <li>YouTube Studio</li>
                <li>YouTube Kids</li>
            </ul>
        </div>
    </div>
  )
}

export default MenuItems