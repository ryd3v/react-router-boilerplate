import React, { FC, ReactNode } from 'react'
import './App.css'
import { GlobalNav } from './ui/global-nav'
import Footer from './ui/footer'

interface Props {
  children: ReactNode
}

const App: FC<Props> = ({ children }) => (
  <div className="App">
    <GlobalNav />
    <div className={'m-4 mt-12 min-h-screen'}>{children}</div>
    <Footer />
  </div>
)

export default App
