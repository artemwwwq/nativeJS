import {CityType} from "../02/02_02";
import {coursesType, demolishHousesOnTheStreet, getBuldingsWithStaffCountGreaterThen} from "./04";

let city: CityType
beforeEach(() => {
    city = {
        title: "New York",
        houses: [
            {
                id: 1, buildedAt: 2012, repaired: false,
                address: {number: 100, street: {title: 'White street'}}
            },
            {
                id: 2, buildedAt: 2008, repaired: false,
                address: {number: 100, street: {title: 'Happy street'}}
            },
            {
                id: 3, buildedAt: 2020, repaired: false,
                address: {number: 101, street: {title: 'Happy street'}}
            }],
        governmentBuildings: [
            {type: 'HOSPITAL', budget: 200000, staffCount: 200, address: {street: {title: "Central Str"}}},
            {type: 'FIRE-STATION', budget: 500000, staffCount: 1000, address: {street: {title: "South Str"}}}
        ],
        citizensNumber: 1000000
    }
})

test('Houses should be destroyed', ()=> {
    demolishHousesOnTheStreet(city, 'Happy street')

    expect(city.houses.length).toBe(1)
    expect(city.houses[0].id).toBe(1)
})

test('buildings with correct staff count', ()=> {
    let buildings = getBuldingsWithStaffCountGreaterThen(city.governmentBuildings, 500)

    expect(buildings.length).toBe(1)
    expect(buildings[0].type).toBe('FIRE-STATION')
})



test('should take old men older then 90', () => {
    const ages = [18, 20, 22, 1, 100, 90, 14]


    const oldAges = ages.filter(age => age > 90)

    expect(oldAges.length).toBe(1)
    expect(oldAges[0]).toBe(100)
})


test('should take courses chipper 160', () => {
    const courses = [
        {title: 'css', price: 110},
        {title: 'js', price: 200},
        {title: 'react', price: 150}
    ]

    const chipPredicate = (courses: coursesType) => {
        return courses.price < 160
    }


    const chipCourses = courses.filter(courses => courses.price < 160)

    expect(chipCourses.length).toBe(2)
    expect(chipCourses[0].title).toBe('css')
    expect(chipCourses[1].title).toBe('react')
})


test('get only completed tasks', () => {
    const tasks = [
        {id: 1, title: 'Bread', isDone: false},
        {id: 2, title: 'Milk', isDone: true},
        {id: 3, title: 'Salt', isDone: false},
        {id: 4, title: 'Pivasik', isDone: true}
    ]

    const completedTask = tasks.filter(task => task.isDone)


    expect(completedTask.length).toBe(2)
    expect(completedTask[0].id).toBe(2)
    expect(completedTask[1].id).toBe(4)
})


test('get only uncompleted tasks', () => {
    const tasks = [
        {id: 1, title: 'Bread', isDone: false},
        {id: 2, title: 'Milk', isDone: true},
        {id: 3, title: 'Salt', isDone: false},
        {id: 4, title: 'Pivasik', isDone: true}
    ]

    const uncompletedTask = tasks.filter(task => !task.isDone)


    expect(uncompletedTask.length).toBe(2)
    expect(uncompletedTask[0].id).toBe(1)
    expect(uncompletedTask[1].id).toBe(3)
})