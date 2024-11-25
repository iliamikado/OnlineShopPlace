import { Card, Shop } from "./models";

const baseUrl = 'https://ezmp.ru/backend/';

export async function loginByBody(login: string, password: string) {
    const data = await fetch(baseUrl + 'login_by_body', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({login, password})
    }).then(data => (data.json()));
    console.log(data);
    if (data.access_token) {
        localStorage.setItem('token', data.access_token);
        console.log(window.location);
        window.location.href = location.origin;
    }
}

async function getData(url: string, init?: RequestInit): Promise<Response> {
    const token = localStorage.getItem('token');
    const data = await fetch(baseUrl + url, {
        ...init,
        headers: {
            ...init?.headers,
            "Authorization": `Bearer ${token}`
        }
    })
    if (data.status == 401) {
        window.location.href = location.origin + '/login';
    }
    return data;
}

export async function getShops(): Promise<Shop[]> {
    const data = await getData('markets');
    if (data.status != 200) {
        return [];
    }
    return await data.json();
}

export async function getShop(id: number): Promise<Shop | undefined> {
    const data = await getData(`markets/${id}`);
    if (data.status != 200) {
        return undefined;
    }
    return await data.json();
}

export function createNewShop(shop: Shop): Promise<number> {
    return new Promise((res) => {
        shop.id = shops.length + 1
        shops.push(shop)
        res(shop.id);
    })
}

export function changeShop(shop: Shop) {
    const ind = shops.findIndex((x) => (x.id == shop.id));
    if (ind != -1) {
        shops[ind] = shop;
    }
}

export function emptyShop(): Shop {
    return {
        id: 0,
        market_name: 'Новый магазин',
        market_type: 'yandex',
        status: '',
        managers: [],
        legalPerson: '',
        token: '',
        client_id: ''
    }
}

export async function getCards(): Promise<Card[]> {
    const data = await getData('cards');
    if (data.status != 200) {
        return [];
    }
    return await data.json();
}

const shops: Shop[] = [
    {
        id: 1,
        market_name: 'Магазин 1',
        market_type: 'yandex',
        status: 'Статус',
        managers: ['aaa', 'bbb'],
        legalPerson: 'bbb',
        token: 'aaaaaaaaaa',
        client_id: 'aaaaaaaaaa',
    },
    {
        id: 2,
        market_name: 'Магазин 2',
        market_type: 'yandex',
        status: 'Статус',
        managers: ['aaa', 'bbb'],
        legalPerson: 'bbb',
        token: 'aaaaaaaaaa',
        client_id: 'aaaaaaaaaa',
    },
    {
        id: 3,
        market_name: 'Магазин 3',
        market_type: 'yandex',
        status: 'Статус',
        managers: ['aaa', 'bbb'],
        legalPerson: 'bbb',
        token: 'aaaaaaaaaa',
        client_id: 'aaaaaaaaaa',
    }
]

const cards: Card[] = [
    {
        id: '1',
        id_market: '1',
        name: 'Card 1.1',
        status: 'ready'
    },
    {
        id: '2',
        id_market: '1',
        name: 'Card 1.2',
        status: 'ready'
    },
    {
        id: '3',
        id_market: '2',
        name: 'Card 2.1',
        status: 'ready'
    },
    {
        id: '4',
        id_market: '2',
        name: 'Card 2.2',
        status: 'ready'
    },
    {
        id: '5',
        id_market: '12',
        name: 'Card 12.1',
        status: 'ready'
    },
    {
        id: '6',
        id_market: '12',
        name: 'Card 12.2',
        status: 'ready'
    }
]