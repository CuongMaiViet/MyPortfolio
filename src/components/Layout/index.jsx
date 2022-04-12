import React from 'react'
import Sidebar from '../Sidebar'
import { Outlet } from 'react-router-dom'
import SocialBar from '../Sidebar/SocialBar'

const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      <SocialBar />
      <div className="page">
        <span className="tags top-tags">&lt;body&gt;</span>

        <Outlet />

        <span className="tags bottom-tags">
          &lt;/body&gt;
          <br />
          <span className="bottom-tag-html">&lt;/html&gt;</span>
        </span>
      </div>
    </div>
  )
}

export default Layout
