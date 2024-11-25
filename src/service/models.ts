export interface Shop {
    id: number
    market_name: string
    market_type: ('yandex' | 'ozon' | 'wb')
    status: string
    managers: string[]
    legalPerson: string
    token: string
    client_id: string
}

export interface Card {
    id: string
    id_market: string
    name: string
    status: string
}