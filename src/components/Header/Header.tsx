import Image from 'next/image'
import styles from './Header.module.scss'

export const Header = () => {
    return <header className={styles.header}>
        <button>
            <Image src="/person.svg" width={30} height={30} alt="notifications"/>
        </button>
        <div className={styles.userCard}>
            <div className={styles.profileIcon}>
                <Image src='/globe.svg' fill alt="user profile"/>
            </div>
            <div className={styles.nameAndEmail}>
                <span className={styles.name}>Магомедов Мариф</span>
                <span className={styles.email}>thisisemail@mail.mail</span>
            </div>
            <button className={styles.arrowDown}>
                <Image src="/chevron-right.svg"
                    fill
                    alt="more about user"
                />
            </button>
        </div>
    </header>
}