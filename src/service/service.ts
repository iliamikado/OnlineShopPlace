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

const shops: Shop[] = [
    {
        id: '1',
        name: 'Магазин 1',
        place: 'Market',
        status: 'Статус',
        managers: ['aaa', 'bbb'],
        legalPerson: 'bbb'
    },
    {
        id: '2',
        name: 'bbb',
        place: 'Market',
        status: 'Статус',
        managers: ['aaa', 'bbb'],
        legalPerson: 'bbb'
    },
    {
        id: '3',
        name: 'ccc',
        place: 'Market',
        status: 'Статус',
        managers: ['aaa', 'bbb'],
        legalPerson: 'bbb'
    }
]