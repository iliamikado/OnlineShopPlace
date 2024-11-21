'use client'

import { useEffect, useState } from 'react'
import styles from './page.module.scss'
import { Shop } from '@/service/models'
import { getShop } from '@/service/service'
import { useParams } from 'next/navigation'

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
            <span>Магазины /</span>
            <span>{shop?.name}</span>
        </div>
    </main>
}