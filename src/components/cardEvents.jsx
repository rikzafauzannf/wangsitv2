import React from 'react'

const CardEvents = ({kecamatan,harga,stok,komoditas,tanggal,alamat}) => {
  return (
    <div className='card w-full border bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 glass'>
          <div className='card-body text-white'>
              <h1 className='text-xl font-bold'>{kecamatan}</h1>    
              <div className='flex justify-between w-full'>
                  <div className='flex-1'>
                    <div className='flex justify-start items-center'>
                        <h1>
                            <span className='font-light'>Rp</span>
                            <span className='text-2xl font-extrabold'>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(harga).replace('Rp', '')}</span>
                        </h1>
                      </div>
                      <p className='text-sm italic font-medium'>STOK: {stok}</p>
                    </div>
                  <div>
                      <p className='text-base font-medium italic '>{komoditas}</p>
                      <p className='text-sm'>{new Date(tanggal).toLocaleDateString('id-ID')}</p>
                  </div>
              </div>
              <small>{alamat}</small>
          </div>      
    </div>
  )
}

export default CardEvents