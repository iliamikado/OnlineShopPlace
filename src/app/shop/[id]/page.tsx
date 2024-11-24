'use client'

import { useEffect, useState } from 'react'
import styles from './page.module.scss'
import { Shop } from '@/service/models'
import { emptyShop, getShop } from '@/service/service'
import { useParams } from 'next/navigation'
import { ShopCard } from '@/components/ShopCard/ShopCard'
import Link from 'next/link'
import BackIcon from '@/../public/go-back.svg';

export default function Page() {

    const [shop, setShop] = useState<Shop | undefined>(undefined)
    const params = useParams<{id: string}>();
    useEffect(() => {
        if (params.id != 'new_shop') {  
            getShop(params.id).then((s) => {setShop(s)})
        }
    })

    if (params.id == 'new_shop') {
        return <View mode='create' shop={emptyShop()}/>
    }

    if (!shop) {
        return <main>
            Магазин не найден           
        </main> 
    }

    return <View shop={shop}/>
}

const View = ({shop, mode='view'}: {shop: Shop, mode?: ('create' | 'view')}) => {
    return <main className={styles.main}>
        <div className={styles.backAndHeader}>
            <Link href={'/'}>
                <BackIcon className={styles.backIcon}/>
            </Link>
            <span className={styles.shopsLabel}>Магазины</span>
            <span>/</span>
            <span className={styles.name}><b>{shop.name}</b></span>
        </div>
        <ShopCard shop={shop} mode={mode}/>
    </main>
}