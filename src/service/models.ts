export interface Shop {
    id: string
    name: string
    place: ('Market' | 'Ozon' | 'Wildberries')
    status: string
    managers: string[]
    legalPerson: string
    token: string
    clientID: string
}

export interface Card {
    id: string
    shopId: string
    name: string
    status: string
}