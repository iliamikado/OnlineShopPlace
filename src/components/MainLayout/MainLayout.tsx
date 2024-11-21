import React from "react"
import { SideNavBar } from "../SideNavBar/SideNavBar"

import styles from './MainLayout.module.scss'
import { Header } from "../Header/Header"

interface Props {
    children: React.ReactNode
}

export const MainLayout = ({children}: Props) => {
    return <div className={styles.container}>
        <SideNavBar/>
        <div className={styles.page}>
            <Header/>
            {children}
        </div>
    </div>
}