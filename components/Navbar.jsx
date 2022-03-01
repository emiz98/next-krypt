import React, { useState } from 'react'
import { HiMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'

const NavbarItem = ({ title, classProps }) => {
  return <li className={`mx-4 cursor-pointer ${classProps}`}>{title}</li>
}

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <nav className="flex w-full items-center justify-between p-4 md:justify-center">
      <div className="mr-10 flex-initial items-center justify-center md:flex-[0.5]">
        <img
          src="/images/logo.png"
          alt="logo"
          className="w-32 cursor-pointer"
        />
      </div>
      <ul
        className="hidden flex-initial list-none flex-row items-center 
      justify-between text-white md:flex"
      >
        {['Market', 'Exchange', 'Tutorials', 'Wallets'].map((item, index) => (
          <NavbarItem key={item + index} title={item} />
        ))}
        <li className="mx-4 cursor-pointer rounded-full bg-[#2952e3] py-2 px-7 hover:bg-[#2546bd]">
          Login
        </li>
      </ul>
      <div className="relative flex">
        {toggleMenu ? (
          <AiOutlineClose
            fontSize={28}
            className="cursor-pointer text-white md:hidden"
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <HiMenuAlt4
            fontSize={28}
            className="cursor-pointer text-white md:hidden"
            onClick={() => setToggleMenu(true)}
          />
        )}

        {toggleMenu && (
          <ul
            className="blue-glassmorphism fixed top-0 -right-2 z-10 flex h-screen w-[40vw] animate-slide-in 
          list-none flex-col items-end justify-start rounded-md p-3 text-white shadow-2xl
          md:hidden"
          >
            <li className="my-2 w-full text-xl">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            {['Market', 'Exchange', 'Tutorials', 'Wallets'].map(
              (item, index) => (
                <NavbarItem
                  key={item + index}
                  title={item}
                  classProps="my-2 text-lg"
                />
              )
            )}
          </ul>
        )}
      </div>
    </nav>
  )
}

export default Navbar
