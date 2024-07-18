import Image from 'next/image'
import React from 'react'

const CardPenjualan = ({kecamatan, komoditas, terjual,icons}) => {
  return (
      <>
        <div className='card w-full border bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700'>
            <div className='card-body text-center text-white'>
                <div className='flex justify-center items-center'>
                    {icons && (
                        <Image src={icons} alt='icons' width={30} height={30} className='object-contain drop-shadow-md'/>        
                    )}
                </div>
                <p className='text-sm font-medium'>{komoditas}</p>
                <p className='text-base font-bold'>{kecamatan}</p>
                <p className='text-2xl font-extrabold'>{terjual}</p>
            </div>
      </div>
      </>
  )
}

export default CardPenjualan