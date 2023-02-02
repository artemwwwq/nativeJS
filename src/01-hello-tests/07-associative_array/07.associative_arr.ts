
type UserType = {
    [key: string]: {id: number, name: string}
}

var users: UserType = {
    '100': {id: 100, name: 'Artem'},
    '312323': {id: 312323, name: 'Natasha'},
    '1212': {id: 1212, name: 'Kirill'},
    '1': {id: 1, name: 'Ivan'}
}

let user = {id: 100500, name: 'Igor'}
users[user.id] = user
users[user.id].name = 'Vitya'


export const userArray = [
    {id: 100, name: 'Artem'},
    {id: 312323, name: 'Natasha'},
    {id: 1212, name: 'Kirill'},
    {id: 1, name: 'Ivan'}
]