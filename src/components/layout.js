import * as React from 'react'
import * as componentStyles from './layout.module.css'
import "./layout.css"

const Layout = ({ children }) => {
    return (
        <main className={componentStyles.container}>
            {children}
        </main>
    )
}

export default Layout