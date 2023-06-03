import React from 'react'
import Button from './Button'

const TagButtons = () => {
  const buttonsArr=["All","News","Programming","English","Music","Kapil","Cricket","Physics","Debates"]
  return (
    <div className=' flex'>
      {
        buttonsArr.map((buttonName,ind)=><Button key={ind} content={buttonName}/>)
      }
     
    </div>
  )
}

export default TagButtons