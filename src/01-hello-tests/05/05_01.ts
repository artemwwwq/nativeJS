export type ManType = {
    name: string
    age: number
}

const people: Array<ManType> = [
    {name: 'Alexey Petrov', age: 33},
    {name: 'Ivan Svetlov', age: 24},
    {name: 'Alena Belayeva', age: 18}
]

const artemTransformator = (man: ManType) => ({
        stack: ['css, html', 'js', 'tdd', 'react'],
        firstName: man.name.split(' ')[0],
        lastName: man.name.split(' ')[1]
    })


const devs = [
    {
        stack: ['css, html', 'js', 'tdd', 'react'],
        firstName: 'Alexey', lastName: 'Petrov'
    },
    {
        stack: ['css, html', 'js', 'tdd', 'react'],
        firstName: 'Ivan', lastName: 'Svetlov'
    },
    {
        stack: ['css, html', 'js', 'tdd', 'react'],
        firstName: 'Alena', lastName: 'Belayeva'
    }
]

const dev2 = [
    artemTransformator(people[0]),
    artemTransformator(people[1]),
    artemTransformator(people[2]),
]

const dev3 = people.map(artemTransformator)

 export const dev4 = people.map(man => ({
    stack: ['css, html', 'js', 'tdd', 'react'],
    firstName: man.name.split(' ')[0],
    lastName: man.name.split(' ')[1]
}))

export let messages = people.map(man => `Hello ${man.name.split(' ')[0]}. Welcome to IT-INCUBATOR`)


export const createGreetingMessage = (people: Array<ManType>) => {
    return people.map(man => `Hello ${man.name.split(' ')[0]}. Welcome to IT-INCUBATOR`)
}