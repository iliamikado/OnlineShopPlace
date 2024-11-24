"use client"

import cn from 'classnames';

import styles from "./SideNavBar.module.scss";
import Image from 'next/image'
import Link from 'next/link';
import { useState } from 'react';
import ChevronRight from '@/../public/chevron-right.svg';
import AnalIcon from '@/../public/analitics.svg';
import CardsIcon from '@/../public/cards.svg';
import HomeIcon from '@/../public/home.svg';
import LegalPersonIcon from '@/../public/legal-person.svg';
import OrdersIcon from '@/../public/orders.svg';
import ProductsIcon from '@/../public/products.svg';
import StorageIcon from '@/../public/storage.svg';
import TransactionsIcon from '@/../public/transactions.svg';
import PersonIcon from '@/../public/person.svg';
import { usePathname } from 'next/navigation';

export const SideNavBar = () => {
    const [opened, setOpened] = useState(false);
    const path = usePathname();
    console.log(path);

    return <nav className={cn(styles.sideNavBar, opened ? styles.opened : styles.closed)}>
        <div className={styles.titleAndButton}>
            {opened ? <span>EZ-MARKET</span> : null}
            <button onClick={() => {setOpened((prev) => (!prev))}} className={cn(opened ? styles.rotated : "")}>
                <ChevronRight/>
            </button>
        </div>

        {links.map((link, i) => (<Link href={link.href} key={i} 
            className={cn(styles.linkItem, opened ? styles.linkItemOpened : '', checkPath(path, link.href) ? 'primary' : '')}>
                {link.icon}
                {opened ? <span>{link.title}</span> : null}
        </Link>))}
    </nav>
}

function checkPath(path: string, url: string): boolean {
    const page = path.split('/')[1];
    if ((page == '' || page == 'shop') && url == '/') {
        return true
    }
    if ('/' + page == url) {
        return true
    }
    return false
}

interface LinkItem {
    icon: any
    title: string
    href: string
}

const links: LinkItem[] = [
    {
        icon: <HomeIcon/>,
        title: 'магазины',
        href: '/'
    },
    {
        icon: <PersonIcon/>,
        title: 'управляющие',
        href: '/managers'
    },
    {
        icon: <LegalPersonIcon/>,
        title: 'юридические лица',
        href: '/managers'
    },
    {
        icon: <ProductsIcon/>,
        title: 'товары',
        href: '/managers'
    },
    {
        icon: <CardsIcon/>,
        title: 'карточки',
        href: '/managers'
    },
    {
        icon: <TransactionsIcon/>,
        title: 'транзакции',
        href: '/managers'
    },
    {
        icon: <OrdersIcon/>,
        title: 'заказы',
        href: '/managers'
    },
    {
        icon: <StorageIcon/>,
        title: 'складской учет',
        href: '/managers'
    },
    {
        icon: <AnalIcon/>,
        title: 'аналитика',
        href: '/managers'
    }
]