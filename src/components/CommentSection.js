import React from 'react'

const commentData=[
  {
    name:"afzal khan",
    text:"very helpfull",
    replies:[]
  },
  {
    name:"India",
    text:"we'll not come to pak for wc 2023",
    replies:[
      {
        name:"pak",
        text:"you should come otherwise will not com",
        replies:[
          {
            name:"Afghan",
            text:"Okat hai tumhari",
            replies:[
              {
                name:"pk",
                text:"okat to tumse samna hoga tb btaynge",
                replies:[]
              },
            ]
          },
          {
            name:"Banglades",
            text:"Tumse ho paayi",
            replies:[]
          }
        ]
      },
      {
        name:"bhdaku khan",
        text:"padd liyo",
        replies:[
          {
            name:"shanti bai",
            text:"Coll betaa , coool !",
            replies:[]
          },
        ]
      },
    ]
  },
  {
    name:"Sharif insan",
    text:"ok bhyaa",
    replies:[]
  },
]



const Commnet=({data})=>{
  return(
    <div className="comment border 
    flex flex-row gap-2 border-slate-300 shadow-lg m-2 px-2 py-2">
      <div className="profile">
      <img src="https://t3.ftcdn.net/jpg/05/17/79/88/360_F_517798849_WuXhHTpg2djTbfNf0FQAjzFEoluHpnct.jpg" className=' w-12 pt-0' alt="" />
      </div>
     
      <div className="info">
        <h1 className='font-bold'>{data.name}</h1>
        <p className=' text-slate-700'>{data.text}</p>
        <span className=' text-sm'>Replay</span>
      </div>
    
    </div>
  )
}

const CommnetList=({comments})=>{
  return (
    comments.map((comment,ind)=>(
      <div key={ind}>
        <Commnet key={ind} data={comment} />
        <div className="replys ml-5 border-l-2">
            <CommnetList comments={comment.replies} />
        </div>
      </div>
  ))
  )
}

const CommentSection = () => {
  return (
    <div className='comment-container'>
          <h1 className='font-bold'>Comments: </h1>
        <CommnetList comments={commentData}/>
    </div>
  )
}

export default CommentSection