import Link from 'next/link'
import React from 'react'
import { HiDatabase } from 'react-icons/hi'

const SideBar = () => {
    const dataLink = [
        {
            title: "Dashboard",
            linkTo: "/dashboard"
        },
        {
            title: "Events",
            linkTo: "/dashboard/events"
        },
        {
            title: "Penjualan",
            linkTo: "/dashboard/penjualan"
        },
        
    ]
  return (
      <>
        <div className='card bg-white rounded-lg shadow-lg md:w-auto w-full'>
            <div className='card-body'>
                <h1 className='font-bold'>Navigation</h1>
                  <hr />  
                  <div className='flex flex-col gap-3'>
                    <div className='gap-2 flex md:flex-col flex-row overflow-y-auto'>
                      {dataLink.map((item, index) => {
                        return (
                            <Link key={index} href={item.linkTo} className='flex justify-start items-center p-3 rounded-lg shadow-md gap-2'>
                                <HiDatabase /> <p>{ item.title}</p>
                            </Link>
                        )
                      })}  
                      </div>
                        <details className="dropdown">
                            <summary className="btn rounded-md shadow-lg bg-primary glass w-full text-white">Master Data</summary>
                            <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                <li><Link href={"/dashboard/master/kecamatan"}>Data Kecamatan</Link></li>
                                <li><Link href={"/dashboard/master/komoditas"}>Data Komoditas</Link></li>
                            </ul>
                        </details>
                </div>
            </div>
        </div>
      </>
  )
}

export default SideBar