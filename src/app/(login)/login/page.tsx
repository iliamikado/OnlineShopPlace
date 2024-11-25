'use client'

import { useState } from 'react';
import styles from './page.module.scss';
import { loginByBody } from '@/service/service';

export default function Page() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    return <main className={styles.page}>
        <form>
            <input placeholder="login" value={login} onChange={(e) => setLogin(e.target.value)}/>
            <input placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button className='btn primary'
                onClick={(e) => {
                    e.preventDefault();
                    loginByBody(login, password);
                }}>
                    Войти
            </button>
        </form>
    </main>

}