import {CityType, GovernmentBuildingsType, HouseType} from "../02/02_02";



const ages = [18, 20, 22, 1, 100, 98, 14]

const predicate = (age: number) => {
    return age > 90
}



const oldAges = [100]

export type coursesType = {
    title: string
    price: number
}

const courses = [
    {title: 'css', price: 110},
    {title: 'js', price: 200},
    {title: 'react', price: 150}
]


const chipPredicate = (courses: coursesType) => {
    return courses.price < 160
}



export const demolishHousesOnTheStreet = (city: CityType, street: string) => {
    city.houses = city.houses.filter(h=> h.address.street.title !== street)
}

export const getBuldingsWithStaffCountGreaterThen = (buildings: Array<GovernmentBuildingsType>, number: number) => {
    return buildings.filter(b => b.staffCount > number)
}