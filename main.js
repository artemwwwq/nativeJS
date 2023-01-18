// 

const a = 4
const b = a 

const user1 = {
    name: 'artem',
    age: 23,
    isStudent: true
}


const users = [
    {
        id: 1,
        name:"Bob",
        isStudent: true,
        address: {
            country: "Sudan",
            city: "Hartum",
        }

    },
    {
        id: 2,
        name:"Alex",
        isStudent: true,
        address: {
            country: "Sudan",
            city: "Hartum",
        }
    },
    {
        id: 3,
        name:"Ann",
        isStudent: true,
        address: {
            country: "Sudan",
            city: "Hartum",
        }
    },
    {
        id: 4,
        name:"Donald",
        isStudent: true,
        address: {
            country: "Sudan",
            city: "Hartum",
        }
    },
]


const newUser = {
    id: 5,
    name:"Donald",
    isStudent: true,
    address: {
        country: "Sudan",
        city: "Hartum",
    }
}



const users2 = [...users, newUser] // добовление элемента в массив


const users3 = users.filter(user => user.id !== 3)
console.log(users3)



// id = 1, new city = 'Sudan'
const users4 = users.map(u => u.id === 1 ? {...u, name: 'Ali' , address: {...users.address, city: 'Sudan'}} : u)

console.log(users4)

const users5 = users4.map(u => u.id === 1 ? {...u, name: 'Ali'} : u)