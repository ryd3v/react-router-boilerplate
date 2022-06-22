import React from 'react'
import { Route, Routes } from 'react-router-dom'

// Components
import App from './App'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Error404 from './components/Error404'

function AppRoutes() {
  return (
    <App>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route element={<Error404 />} />
      </Routes>
    </App>
  )
}

export default AppRoutes
