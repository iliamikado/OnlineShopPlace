import { Shop } from '@/service/models'
import styles from './ShopCard.module.scss'
import cn from 'classnames';

interface Props {
    shop: Shop
}

export const ShopCard = ({shop}: Props) => {
    return <div className={cn('card', styles.shopCard)}>
        <div className={styles.innerContainer}>
            <div className={styles.lineCont}>
                <h2>{shop.name}</h2>
                <button>a</button>
            </div>
            <div>
                <label className={styles.label}>Площадка</label><br/>
                {shop.place}
            </div>
            <div>
                <label className={styles.label}>Токен</label>
                <div className={styles.lineCont}>
                    <span>********</span>
                    <button>a</button>
                </div>
            </div>
            <div>
                <label className={styles.label}>Client ID</label>
                <div className={styles.lineCont}>
                    <span>**********</span>
                    <button>a</button>
                </div>
            </div>
            <div>
                <label className={styles.label}>ID управляющего</label><br/>
                <span>99999999</span>
            </div>
            <div>
                <label className={styles.label}>ID юридического лица</label><br/>
                <span>99999999</span>
            </div>
            <div className={styles.lineCont}>
                <span className={styles.label}>Отредактировано</span>
                <span className={styles.label}>16.04.2024</span>
            </div>
            <div className={styles.lineCont}>
                <div>
                    <span className={styles.label}>Статус</span>
                    <span>● Активен</span>
                </div>
                <span className={styles.label}>16.04.2024</span>
            </div>
        </div>
    </div>
}