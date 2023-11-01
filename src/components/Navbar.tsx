import Link from 'next/link'
import React from 'react'
import Menu from './Menu'
import CartIcon from './CartIcon';
import Image from 'next/image';
import UserLinks from './UserLinks';

const Navbar = () => {

  const user = false;
 
  return (

    <div className='h-12 text-red-500 p-4 flex items-center justify-between border-b-2 border-b-red-500 uppercase md:h-20 lg:px-20 xl:px-40'>
      
      {/* LEFT LINKS */}
      <div className='hidden md:flex gap-4 flex-1'>
        <Link href="/">Homepage</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/">Contact</Link>
      </div>

      {/* LOGO */}
      <div className='text-xl md:font-bold flex-1 md:text-center'>
        <Link href="/">
          Foodey
        </Link>
      </div>

      {/* MOBILE MENU */}
      <div className='md:hidden'>
        <Menu />
      </div>

      {/* RIGHT LINKS */}
      <div className='hidden md:flex justify-end gap-4 items-center flex-2'>
        <div className='md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md md:text-sm md:py-1'>
          <Image src="/phone.png" alt="" width={20} height={20}/>
          <span>+91 1242</span>
        </div>
        <UserLinks/>
        <CartIcon/>
      </div>
    </div>
  )
}

export default Navbar