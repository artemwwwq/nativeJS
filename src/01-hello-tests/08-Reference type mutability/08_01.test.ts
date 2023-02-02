type UserTypes = {
    name: string
    age: number
    address: {title: string}
}
function icreaseAge(u: UserTypes) {
    u.age++
}

test('reference type test', ()=>{
    let user = {
        name: 'Artem',
        age: 22,
        address: {
            title: 'Minsk'
        }

    }
    icreaseAge(user)

    expect(user.age).toBe(23)

    const superMan = user

    superMan.age = 1000
    expect(user.age).toBe(1000)

})

test('array test', ()=>{
    let users = [
        {
        name: 'Artem',
        age: 22
    },
        {
            name: 'ivan',
            age: 23
        }
    ]

    let admins = users

    admins.push({name: 'bandygan', age: 10})

    expect(users[2]).toEqual({name: 'bandygan', age: 10})



})

test('array reverent test', ()=>{
    let usersCount = 100

    let adminsCount = usersCount


})

test('reference type test', ()=>{
    const address = {
        title: 'Minsk'
    }

    let user: UserTypes = {
        name: 'Artem',
        age: 22,
        address: address

    }
    let addr = user.address

    let user2: UserTypes = {
        name: 'Natasha',
        age: 30,
        address: address
    }

address.title ='Kanary'

    expect(user.address).toBe(user2.address)
    expect(user.address.title).toBe('Kanary')

})

test('reference type array test', ()=>{
    const address = {
        title: 'Minsk'
    }

    let user: UserTypes = {
        name: 'Artem',
        age: 22,
        address: address

    }
    let addr = user.address

    let user2: UserTypes = {
        name: 'Natasha',
        age: 30,
        address: address
    }

    const users = [user, user2, {name: 'Katya', age: 18, address: address}]



    address.title ='Kanary'

    expect(user.address).toBe(user2.address)
    expect(user.address.title).toBe('Kanary')

})
