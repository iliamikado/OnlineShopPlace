'use client'

import { useEffect, useState } from 'react'
import styles from './page.module.scss'
import { Shop } from '@/service/models'
import { getShop } from '@/service/service'
import { useParams } from 'next/navigation'
import { ShopCard } from '@/components/ShopCard/ShopCard'

export default function Page() {

    const [shop, setShop] = useState<Shop | undefined>(undefined)
    const params = useParams<{id: string}>();
    useEffect(() => {
        getShop(params.id).then((s) => {setShop(s)})
    })

    if (!shop) {
        return <main>
            Магазин не найден           
        </main> 
    }

    return <main className={styles.main}>
        <div className={styles.backAndHeader}>
            <span className={styles.shopsLabel}>Магазины / </span>
            <span className={styles.name}><b>{shop.name}</b></span>
        </div>
        <ShopCard shop={shop} />
    </main>
}