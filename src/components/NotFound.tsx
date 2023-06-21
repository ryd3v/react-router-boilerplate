import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="m-4">
      <div className="container flex items-center min-h-screen mx-auto">
        <div>
          <p className="brand">404 error</p>
          <h2 className="mt-3">We can’t find that page</h2>
          <p className="mt-4 text-gray-400">
            Sorry, the page you are looking for doesn't exist or has been moved.
          </p>
          <div className="flex items-center mt-6 gap-x-3">
            <Link to="/">
              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 rounded-lg cardback">
                Take me home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound
