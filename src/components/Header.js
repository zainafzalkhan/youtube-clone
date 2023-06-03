import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import  { toggleMenu } from '../utils/appSlice';
import { SEARCH_URL } from '../utils/constant';
import { cacheResults } from '../utils/searchSlice';


const Header = () => {
    const dispatch=useDispatch();
    const [searchQ,setSearchQ]=useState("");
    const [suggestData,setSuggestData]=useState([]);
    const [showSuggestion,setShowSuggestion]=useState(false);
    const searchCache=useSelector(store=>store.search)
    /**
     * searchCache={
     *  'sh':[asdfasdf,asdfasdf,asdf]
     * }
     * 
     */
    const handleSidebar=()=>{
        dispatch(toggleMenu())
    }
    useEffect(()=>{
        // make an api call on every key press
        // but if the difference is <200ms 
        // reject the api call
        
       const timer=setTimeout(() => {
        console.log('call'+searchQ)
        
        if(searchCache && searchCache[searchQ]){
            console.log('from cache')
            setSuggestData(searchCache[searchQ])
        }else{
            console.log('from api')
            getSuggestions()
        }
         
       }, 500); 
       return ()=>{
            clearTimeout(timer) 
       }
    },[searchQ]);
    const getSuggestions=async()=>{
       if(searchQ=='') return false
        let jsonData=await fetch(SEARCH_URL+searchQ);
        let data=await jsonData.json();  
        setSuggestData(data[1])
        dispatch(cacheResults({[searchQ]:data[1]}))

    }
  return (
    <div className='grid grid-flow-col p-3 m-1 shadow-xl items-center'>

        <div className="za-logo flex flex-row gap-4 col-span-1">
            <img className=' w-6 h-6 cursor-pointer'  onClick={()=>handleSidebar()} src="https://img.uxwing.com/wp-content/themes/uxwing/download/web-app-development/hamburger-menu-icon.png" alt="menu" />
            <img className=' w-15 h-6 bg-white' src="https://e7.pngegg.com/pngimages/712/480/png-clipart-social-media-marketing-youtube-digital-marketing-business-video-youtube-icon-you-tube-logo-angle-content-marketing.png" alt="" />
        </div>

        <div className="za-search flex flex-row justify-center items-center col-span-10">
            <div className="input-search-con">
                <input type="text"
                onFocus={()=>setShowSuggestion(true)}
                onBlur={()=>setShowSuggestion(false)}
                 onChange={(e)=>setSearchQ(e.target.value)}
                className=" align-middle za-search-input border rounded-l-full w-80 border-gray-800  px-4 text-lg  h-10"/>
                <button className='px-2 border border-gray-800 rounded-r-full text-lg h-10 align-middle bg-slate-800 text-white'>Search</button>
                {
                    suggestData.length>0 && showSuggestion &&
                    <ul className='fixed px-2 py-2 border border-slate-200 bg-white w-80 shadow-md rounded-md'>
                    {suggestData.map(suggest=><li key={suggest} className='py-2 px-2 shadow-sm cursor-pointer mb-1 hover:bg-slate-200 rounded-md'>{suggest}</li>)}
                </ul> 

                }
          
            </div>
           
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