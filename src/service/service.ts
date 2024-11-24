import { Shop } from "./models";

export function getShops(): Promise<Shop[]> {
    return new Promise((res) => {
        res(shops)
    })
}

export function getShop(id: string): Promise<Shop | undefined> {
    return new Promise((res) => {
        const shop = shops.find((x) => (x.id === id));
        res(shop);
    })
}

export function createNewShop(shop: Shop): Promise<string> {
    return new Promise((res) => {
        shop.id = `${shops.length + 1}`
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
        id: '',
        name: 'Новый магазин',
        place: 'Market',
        status: '',
        managers: [],
        legalPerson: '',
        token: '',
        clientID: ''
    }
}

const shops: Shop[] = [
    {
        id: '1',
        name: 'Магазин 1',
        place: 'Market',
        status: 'Статус',
        managers: ['aaa', 'bbb'],
        legalPerson: 'bbb',
        token: 'aaaaaaaaaa',
        clientID: 'aaaaaaaaaa',
    },
    {
        id: '2',
        name: 'bbb',
        place: 'Market',
        status: 'Статус',
        managers: ['aaa', 'bbb'],
        legalPerson: 'bbb',
        token: 'aaaaaaaaaa',
        clientID: 'aaaaaaaaaa',
    },
    {
        id: '3',
        name: 'ccc',
        place: 'Market',
        status: 'Статус',
        managers: ['aaa', 'bbb'],
        legalPerson: 'bbb',
        token: 'aaaaaaaaaa',
        clientID: 'aaaaaaaaaa',
    }
]