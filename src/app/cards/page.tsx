import { Suspense } from 'react'
import styles from './page.module.scss'
import { CardsTable } from '@/components/CardsTable/CardsTable'

export default function Home() {
    return <main className={styles.main}>
        <h2>Карточки</h2>
        <div className={styles.tableDiv}>
            <Suspense>
                <CardsTable/>
            </Suspense>
        </div>
    </main>
}