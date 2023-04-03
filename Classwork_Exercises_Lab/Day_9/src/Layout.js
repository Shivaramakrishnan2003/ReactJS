import React from 'react'
import { Outlet,Link} from 'react-router-dom'

export const Layout = () => {
  return (
    <div>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Albums">Albums</Link></li>
                <li><Link to="/Singers">Singers</Link></li>
            </ul>
        </nav>
        <Outlet/>
    </div>
  )
}