import React from 'react'
import Navbar from './Navbar'
import 'tachyons/css/tachyons.css' 


export default function Layout({ children }) {
    return (
        <div className="layout">

            <Navbar />
            <div className="content">
                {children}
            </div>
            <footer>
                <p>footer area here</p>
            </footer>
        </div>
    )
}