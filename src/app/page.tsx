import { ShopTable } from '@/components/ShopsTable/ShopsTable'
import styles from './page.module.scss'
import Link from 'next/link'

export default function Home() {
    return <main className={styles.main}>
        <div className={styles.titleAndButtons}>
            <h2>Магазины</h2>
            <div className={styles.buttons}>
                <button className='btn secondary'>Архивированные</button>
                <Link href={'/shop/new_shop'} className='btn primary'>+ Новый магазин</Link>
            </div>
        </div>
        <div className={styles.tableDiv}>
            <ShopTable/>
        </div>
    </main>
}