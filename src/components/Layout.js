import React from 'react'
import { Link } from 'gatsby'
import './layout.css'

const Layout = ({children}) => {
    return (
        <>
        <nav>            
            <div id="logo">
                <img src={'/Red_copyright.png'} alt="logo" width={50} height={50} />
            </div>
                
            <div class="menu">
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/app'>App</Link></li>
                    <li><Link to='/game'>Game</Link></li>
                </ul>
            </div>
        </nav>
        <main>
            {children}
        </main>
        </>
    )
}
export default Layout