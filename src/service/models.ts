export interface Shop {
    id: string
    name: string
    place: ('Market' | 'Ozon' | 'Wildberries')
    status: string
    managers: string[]
    legalPerson: string
}