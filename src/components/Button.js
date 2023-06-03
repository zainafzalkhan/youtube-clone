import React from 'react'
const Button = (props) => {
  return (
    <div>
        <button className=' bg-slate-400 px-4 py-1 m-2 ml-0 rounded-md'>{props.content}</button>
    </div>
  )
}

export default Button