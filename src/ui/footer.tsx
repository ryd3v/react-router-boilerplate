import React from 'react'

import { BsDiscord, BsFacebook, BsYoutube } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const today = new Date()
const brand = 'Brand'
export default function Footer() {
  return (
    <div>
      <footer>
        <div className="p-6 mx-auto">
          <hr className="h-px my-6 border-none bg-gray-700" />
          <div className="lg:flex">
            <div className="w-full -mx-6 lg:w-2/5">
              <div className="px-4">
                <Link to="/#" onClick={() => window.scroll({ top: 0, behavior: 'smooth' })}>
                  {/*<img src="/logo.png" alt="logo" height={80} width={200} />*/}
                </Link>
                <p className="py-2 px-2">Your Tagline</p>
                <div className="flex flex-row">
                  <a href="/#" target="_blank">
                    <BsYoutube className="m-2" size={36} />
                  </a>
                  <a href="/#" target="_blank">
                    <BsFacebook className="m-2" size={36} />
                  </a>
                  <a href="/#" target="_blank">
                    <BsDiscord className="m-2" size={36} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <hr className="h-px my-6 border-none bg-gray-700" />
          <div>
            <p className="text-center text-gray-400 text-base">
              © {brand} {today.getFullYear()}
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
