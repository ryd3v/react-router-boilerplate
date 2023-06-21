import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import { MdClose, MdDragHandle } from 'react-icons/md'

export function GlobalNav() {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className="absolute top-0 left-0 right-0 z-50">
      <nav>
        <div className="mt-2 mx-auto md:flex md:justify-between md:items-center">
          <div className="flex items-center justify-between">
            <div className="px-2">
              <Link to="#">
                {/*TODO: Add your logo*/}
                {/*<img src="/logo.png" alt="logo" height={80} width={200} />*/}
              </Link>
            </div>

            {/* Mobile menu button  */}
            <div className="flex md:hidden text-white px-4">
              {!toggleMenu && (
                <MdDragHandle
                  fontSize="2rem"
                  className="md:hidden cursor-pointer"
                  onClick={() => setToggleMenu(true)}
                />
              )}
            </div>
          </div>

          {/* Mobile Menu open: "block", Menu closed: "hidden" */}
          <div className="items-center md:flex">
            <div className="flex flex-col md:flex-row md:mx-6">
              <ul className="text-xl md:flex hidden list-none flex-row items-center flex-initial uppercase">
                <li className={'px-2'}>
                  <Link to="/">Home</Link>
                </li>
                <li className={'px-2'}>
                  <Link to="/about">About</Link>
                </li>
                <li className={'px-2'}>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>

              {toggleMenu && (
                <ul
                  className="mr-4 rounded menu py-4 z-10 fixed -top-0 -right-1 w-1/2 h-auto md:hidden list-none
      flex flex-col justify-start cursor-pointer items-start text-xl pb-4"
                >
                  <div className="px-2">
                    <li className="w-full fixed -right-full mr-10 top-2 text-white">
                      <MdClose
                        fontSize="2rem"
                        className="mt-4 md:hidden cursor-pointer pr-2"
                        onClick={() => setToggleMenu(false)}
                      />
                    </li>
                    {/*TODO: Mobile menu links*/}
                    <li>
                      <Link to="/" onClick={() => setToggleMenu(false)}>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/about" onClick={() => setToggleMenu(false)}>
                        About
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact" onClick={() => setToggleMenu(false)}>
                        Contact
                      </Link>
                    </li>
                  </div>
                </ul>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
