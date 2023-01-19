
type LocalCityType = {
    title: string
    countryTitle: string
}

type TechType = {
    id: number
    title: string
}


type AddressType = {
    streetTitle: string
    city: LocalCityType

}


export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechType>
}

export const students: StudentType = {
    id: 1,
    name: 'Artem',
    age: 22,
    isActive: true,
    address: {
        streetTitle: 'Transportnikov 50A',
        city: {
            title: 'Yekaterinburg',
            countryTitle: 'Russia'
        }
    },
    technologies: [
        {
            id: 1,
            title: 'HTML'
        }, {
            id: 2,
            title: 'CSS'
        }, {
            id: 3,
            title: 'JS'
        }
    ]
}