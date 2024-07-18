import Image from 'next/image';
import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar bg-primary shadow-md glass">
      <a className="btn btn-ghost text-xl font-extrabold">        
          <Image src="/logoKota.png" alt="Logo Kota Tasikmalaya" width={50} height={50} className="inline-block w-10 h-10 mr-2" />        
        Dashboard Wangsit
      </a>
    </div>
  )
}

export default Navbar