import React from 'react'
import Navbar from './Navbar'
import { Link } from "gatsby"
import 'tachyons/css/tachyons.css'
import Swup from 'swup'
import '../styles/global.css'
import '../styles/laptop.css'
import '../styles/reset.css'

export default function Layout({ children }) {
    return (
        <div className="layout">

            <Navbar />
            <div className="content">
                <div class="main">
                    {children}
                </div>
            </div>
            <footer class="ph3 ph4-ns pv6 bt b--black-10 black-70 helvetica">
                <a href="mailto:" class="link b f3 f2-ns dim black-70 lh-solid">theolfactive@protonmail.com</a>
                <p class="f6 db b ttu lh-solid">© 2022 theolfactive</p>
                <div class="mt5">
                    <a href="/language/" title="Language" class="f6 dib pr2 mid-gray dim">Language</a>
                    <a href="/terms/" title="Terms" class="f6 dib ph2 mid-gray dim">Terms of Use</a>
                    <a href="/privacy/" title="Privacy" class="f6 dib pl2 mid-gray dim">Privacy</a>
                </div>
            </footer>


        </div>
    )
}
