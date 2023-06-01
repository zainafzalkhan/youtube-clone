import React from 'react'

const Header = () => {
  return (
    <div className='grid grid-flow-col p-3 m-1 shadow-xl items-center'>
        <div className="za-logo flex flex-row gap-4 col-span-1">
            <img className=' w-6 h-6' src="https://img.uxwing.com/wp-content/themes/uxwing/download/web-app-development/hamburger-menu-icon.png" alt="menu" />
            <img className=' w-15 h-6 bg-white' src="https://e7.pngegg.com/pngimages/712/480/png-clipart-social-media-marketing-youtube-digital-marketing-business-video-youtube-icon-you-tube-logo-angle-content-marketing.png" alt="" />
        </div>
        <div className="za-search flex flex-row justify-center items-center col-span-10">
            <input type="text" className="za-search-input border rounded-l-full border-gray-500  w-1/2 px-2 text-lg  h-10"/>
            <button className='border border-gray-500 px-2 bg-gray-500 rounded-r-full h-10 text-white'>Search</button>
            <button className="za-mike ">
                <img className='h-10 ml-2' src="https://www.pngitem.com/pimgs/m/208-2082049_mike-microphone-mic-speaker-voice-icon-mic-speaker.png" alt="" />
            </button>
        </div>
        <div className="za-user col-span-1">
            <img className=' h-6' src="https://t3.ftcdn.net/jpg/05/17/79/88/360_F_517798849_WuXhHTpg2djTbfNf0FQAjzFEoluHpnct.jpg" alt="user" />

        </div>
    </div>
  )
}

export default Header