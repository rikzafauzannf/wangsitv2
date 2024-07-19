import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar bg-primary shadow-md glass">
      <Link href={"/"} className="btn btn-ghost text-xl font-extrabold">        
          <Image src="/logoKota.png" alt="Logo Kota Tasikmalaya" width={50} height={50} className="inline-block w-10 h-10 mr-2" />        
        Dashboard Wangsit
      </Link>
    </div>
  )
}

export default Navbar