"use client"

import cn from 'classnames';

import styles from "./SideNavBar.module.scss";
import Image from 'next/image'
import Link from 'next/link';
import { useState } from 'react';

export const SideNavBar = () => {
    const [opened, setOpened] = useState(false);

    return <nav className={cn(styles.sideNavBar, opened ? styles.opened : styles.closed)}>
        <div className={styles.titleAndButton}>
            {opened ? <span>EZ-MARKET</span> : null}
            <button onClick={() => {setOpened((prev) => (!prev))}} className={cn(opened ? styles.rotated : "")}>
                <Image src="/chevron-right.svg"
                    width={30} 
                    height={30} 
                    alt="open menu"
                />
            </button>
        </div>

        {links.map((link, i) => (<Link href={link.href} key={i} 
            className={cn(styles.linkItem, opened ? styles.linkItemOpened : '')}>
                <div className={styles.linkIcon}>
                    <Image src={link.icon}
                        fill
                        alt="open menu"
                    />
                </div>
            {opened ? <span>{link.title}</span> : null}
        </Link>))}
    </nav>
}

interface LinkItem {
    icon: string
    title: string
    href: string
}

const links: LinkItem[] = [
    {
        icon: '/person.svg',
        title: 'магазины',
        href: '/'
    },
    {
        icon: '/person.svg',
        title: 'управляющие',
        href: '/managers'
    },
    {
        icon: '/person.svg',
        title: 'юридические лица',
        href: '/managers'
    },
    {
        icon: '/person.svg',
        title: 'товары',
        href: '/managers'
    },
    {
        icon: '/person.svg',
        title: 'карточки',
        href: '/managers'
    },
    {
        icon: '/person.svg',
        title: 'транзакции',
        href: '/managers'
    },
    {
        icon: '/person.svg',
        title: 'заказы',
        href: '/managers'
    },
    {
        icon: '/person.svg',
        title: 'складской учет',
        href: '/managers'
    },
    {
        icon: '/person.svg',
        title: 'аналитика',
        href: '/managers'
    }
]