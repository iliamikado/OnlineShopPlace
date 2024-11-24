import Image from 'next/image'
import styles from './Header.module.scss'
import BellIcon from '@/../public/bell.svg';
import ChevronIcon from '@/../public/chevron-right.svg';

export const Header = () => {
    return <header className={styles.header}>
        <button>
            <BellIcon className={styles.bell}/>
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
                <ChevronIcon/>
            </button>
        </div>
    </header>
}