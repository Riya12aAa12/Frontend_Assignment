import React from 'react'

interface SingleProps {
    currColor:Boolean;
    subject:string;
    fromEmail:string;
    toEmail:string;
    body:string
}
const SingleMail:React.FC<SingleProps> = ({currColor,subject,fromEmail,toEmail,body}) => {
  return (
    <div className='mr-4  border border-gray-700 p-3 text-[14px] flex flex-col gap-2.5 text-left mb-3'> 
    <div className='flex justify-between'>
       <p>{subject}</p>
       <p className='text-[#AEAEAE]'>26 Aug 2024 : 10:17PM</p>
    </div>
    <p className='text-[#AEAEAE]'>from : {fromEmail} </p>
    <p className='text-[#AEAEAE]'>to : {toEmail}</p>
    <p className={`${currColor ? 'text-[#b7abab]':'text-[#2a2626]'} w-[500px]`}>{body.split("<p>").join("").split("</p>").join("").split("<br/>").join("").split(",")[0]} ,</p>
    <p className={`${currColor ? 'text-[#bfb4b4]':'text-[#2a2626]'} w-[500px]`}>{body.split("<p>").join("").split("</p>").join("").split("<br/>").join("").split(",").slice(1)}</p>

    </div>
  )
}

export default SingleMail
