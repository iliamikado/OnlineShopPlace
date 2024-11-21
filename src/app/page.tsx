import { ShopTable } from '@/components/ShopsTable/ShopsTable'
import styles from './page.module.scss'

export default function Home() {
    return <main className={styles.main}>
        <div className={styles.titleAndButtons}>
            <h2>Магазины</h2>
            <div className={styles.buttons}>
                <button className='btn secondary'>Архивированные</button>
                <button className='btn primary'>+ Новый магазин</button>
            </div>
        </div>
        <div className={styles.tableDiv}>
            <ShopTable/>
        </div>
    </main>
}