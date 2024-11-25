import { Shop } from '@/service/models'
import styles from './ShopCard.module.scss'
import cn from 'classnames';
import EyeIcon from '@/../public/eye.svg';
import EditIcon from '@/../public/pencil.svg';
import { useState } from 'react';
import { changeShop, createNewShop } from '@/service/service';
import Link from 'next/link';
import StorageIcon from '@/../public/storage.svg';
import TransactionsIcon from '@/../public/transactions.svg';
import OrdersIcon from '@/../public/orders.svg';
import CardsIcon from '@/../public/cards.svg';

type Mode = ('view' | 'edit' | 'create')
interface Props {
    shop: Shop,
    mode?: Mode
}

export const ShopCard = ({shop, mode = 'view'}: Props) => {
    const [visToken, setVisToken] = useState(false);
    const [visClientID, setVisClientID] = useState(false);
    const [currentMode, setCurrentMode] = useState<Mode>(mode);
    const [currentShop, setCurrentShop] = useState<Shop>(shop);
    shop = currentShop;
    console.log(shop);

    return <div className={cn('card', styles.shopCard)}>
        <div className={styles.innerContainer}>
            <div className={styles.lineCont}>
                {currentMode == 'view' ?
                    <>
                        <h2>{shop.market_name}</h2>
                        <button onClick={() => {setCurrentMode('edit')}}>
                            <EditIcon className={styles.editIcon}/>
                        </button>
                    </>
                    :
                    <input value={shop.market_name} onChange={(e) => {setCurrentShop({...shop, market_name: e.target.value})}}/>
                }
            </div>
            <div>
                <label className={styles.label}>Площадка</label><br/>
                {currentMode == 'view' ?
                    shop.market_type
                    :
                    <div className={styles.choosePlace}>
                        <button className={shop.market_type == 'yandex' ? styles.choosed : ''} onClick={() => {setCurrentShop({...shop, market_type: 'yandex'})}}>Маркет</button>
                        <button className={shop.market_type == 'wb' ? styles.choosed : ''} onClick={() => {setCurrentShop({...shop, market_type: 'wb'})}}>Wildberries</button>
                        <button className={shop.market_type == 'ozon' ? styles.choosed : ''} onClick={() => {setCurrentShop({...shop, market_type: 'ozon'})}}>Ozon</button>
                    </div>
                }
            </div>
            <div>
                <label className={styles.label}>Токен</label>
                <div className={styles.lineCont}>
                    {currentMode == 'view' ?
                        <span>{visToken ? shop.token : '*'.repeat(shop.token.length)}</span>
                        :
                        <input value={shop.token}
                            onChange={(e) => {setCurrentShop({...shop, token: e.target.value})}}
                            type={visToken ? 'text' : 'password'}
                        />
                    }
                    <button onClick={() => {setVisToken((x) => (!x))}}>
                        <EyeIcon className={styles.eyeIcon}/>
                    </button>
                </div>
            </div>
            <div>
                <label className={styles.label}>Client ID</label>
                <div className={styles.lineCont}>
                    {currentMode == 'view' ?
                        <span>{visClientID ? shop.client_id : '*'.repeat(shop.client_id?.length ?? 0)}</span>
                        :
                        <input value={shop.client_id ?? ''}
                            onChange={(e) => {setCurrentShop({...shop, client_id: e.target.value})}}
                            type={visClientID ? 'text' : 'password'}
                        />
                    }
                    <button onClick={() => {setVisClientID((x) => (!x))}}>
                        <EyeIcon className={styles.eyeIcon}/>
                    </button>
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
            {currentMode == 'view' ?
                <div className={styles.linksGroup}>
                    <Link href={`/?shopId=${shop.id}`}><StorageIcon/> склады</Link>
                    <Link href={'/'}><TransactionsIcon/> транзакции</Link>
                    <Link href={'/'}><OrdersIcon/> заказы</Link>
                    <Link href={`/cards?shopId=${shop.id}`}><CardsIcon/> карточки</Link>
                </div> : null
            }
        </div>
        {currentMode == 'edit' ?
            <button className={cn(styles.saveButton, 'primary', 'btn')}
                onClick={() => {
                    changeShop(shop);
                    setCurrentMode('view')
                }}
            >Сохранить изменения</button>
            : currentMode == 'create' ?
            <button className={cn(styles.saveButton, 'primary', 'btn')}
                onClick={() => {
                    createNewShop(shop);
                    setCurrentMode('view')
                }}
            >Создать магазин</button>
            : null
        }
    </div>
}