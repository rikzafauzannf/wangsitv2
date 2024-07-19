import Link from 'next/link'
import React from 'react'

const Navigator = ({title="",linkItem=[]}) => {
  return (
    <div className='flex justify-between items-center'>
        <h1 className='text-xl font-bold'>{title}</h1>      
        <div className="breadcrumbs text-sm md:block hidden">
            <ul>
                {linkItem.map((item, index) => (<li key={index}><Link  href={item.linkNavigate}>{item.linkName}</Link></li>))}
            </ul>
        </div>
    </div>
  )
}

export default Navigator