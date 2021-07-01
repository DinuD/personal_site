import * as React from 'react'
import * as componentStyles from './layout.module.css'
import "./layout.css"
import { StaticImage } from 'gatsby-plugin-image'

const Layout = ({ children }) => {
    return (
        <div>
            <nav>
                <ul className={componentStyles.navLinks}>
                    <li><StaticImage
                            alt="Logo"
                            src="../images/icon.png"
                            width={40}
                            height={40}
                        />
                    </li>
                    <li className={componentStyles.blogLink}>Blog</li>
                </ul>
            </nav>
            <main className={componentStyles.container}>
                {children}
            </main>
        </div>
    )
}

export default Layout