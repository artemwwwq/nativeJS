import {
    addNewBooksToUser, addNewCompanies,
    moveUser,
    moveUserToOtherHouse, refreshComponyTitle, removeBook, updateBook, updateComponyType,
    upgradeUserLaptop,
    UserType1,
    UserWithBooks,
    userWithLaptopType, WithCompaniesType
} from "./09_01";






test('reference type test', ()=>{
    let user: UserType1 = {
        name: 'Artem',
        hair: 22,
        address: {
            city: 'Yekaterinburg',
            house: 12
        }
    }
   const awesomeUser = makeHairStyle(user, 2)

    expect(awesomeUser.hair).toBe(11)
    expect(user.hair).toBe(22)
    expect(awesomeUser.address).toBe(user.address)
})




function makeHairStyle(u: UserType1, power: number) {
    const copy = {
        ...u,
        hair: u.hair / power
    }
    //copy.hair = u.hair / power
    return copy
}


test('change type test', ()=>{
    let user: userWithLaptopType = {
        name: 'Artem',
        hair: 22,
        address: {
            city: 'Yekaterinburg',
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        }
    }



    const movedUser = moveUser(user, 'Minsk')

    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.city).toBe('Minsk')
})

test('upgrade laptop to macbook', ()=>{
    let user: userWithLaptopType = {
        name: 'Artem',
        hair: 22,
        address: {
            city: 'Yekaterinburg',
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        }
    }



    const copyUser = upgradeUserLaptop(user, 'Macbook')



    expect(user.address).toBe(copyUser.address)
    expect(user).not.toBe(copyUser)
    expect(user.laptop).not.toBe(copyUser.laptop)
    expect(copyUser.laptop.title).toBe('Macbook')
    expect(user.laptop.title).toBe('Zenbook')
})


test('upgrade laptop to macbook', ()=>{
    let user: userWithLaptopType & UserWithBooks = {
        name: 'Artem',
        hair: 22,
        address: {
            city: 'Yekaterinburg',
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        },
        books: ['css', 'html', 'js']
    }



    const copyUser = moveUserToOtherHouse(user, 99)



    expect(user.address).not.toBe(copyUser.address)
    expect(user.books).toBe(copyUser.books)
    expect(user).not.toBe(copyUser)
    expect(user.laptop).toBe(copyUser.laptop)
    expect(copyUser.address.house).toBe(99)
})

test('add new books to user', ()=>{
    let user: userWithLaptopType & UserWithBooks = {
        name: 'Artem',
        hair: 22,
        address: {
            city: 'Yekaterinburg',
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        },
        books: ['css', 'html', 'js', 'react']
    }



    const copyUser = addNewBooksToUser(user, 'ts')


    expect(user).not.toBe(copyUser)
    expect(user.laptop).toBe(copyUser.laptop)
    expect(user.address).toBe(copyUser.address)
    expect(user.books).not.toBe(copyUser.books)
    expect(copyUser.books[4]).toBe('ts')
    expect(user.books.length).toBe(4)
})


test('update js to ts', ()=>{
    let user: userWithLaptopType & UserWithBooks = {
        name: 'Artem',
        hair: 22,
        address: {
            city: 'Yekaterinburg',
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        },
        books: ['css', 'html', 'js', 'react']
    }



    const copyUser = updateBook(user, 'js', 'ts')


    expect(user).not.toBe(copyUser)
    expect(user.laptop).toBe(copyUser.laptop)
    expect(user.address).toBe(copyUser.address)
    expect(user.books).not.toBe(copyUser.books)
    expect(copyUser.books[2]).toBe('ts')
})

test('update compony', ()=>{
    let user: userWithLaptopType & WithCompaniesType = {
        name: 'Artem',
        hair: 22,
        address: {
            city: 'Yekaterinburg',
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        },
        companies: [{id: 1, title: 'Epam'}, {id: 2, title: 'it-incubator'}]
    }



    const copyUser = addNewCompanies(user, [{id: 3, title: 'google'}])

    expect(copyUser.companies.length).toBe(3)
    expect(user.companies).not.toBe(copyUser.companies)
    expect(user.address).toBe(copyUser.address)
    expect(user).not.toBe(copyUser)
})


test('refresh title', ()=>{
    let user: userWithLaptopType & WithCompaniesType = {
        name: 'Artem',
        hair: 22,
        address: {
            city: 'Yekaterinburg',
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        },
        companies: [{id: 1, title: 'Epam'}, {id: 2, title: 'it-incubator'}]
    }



    const copyUser = refreshComponyTitle(user, 1, 'EPAM' ) as userWithLaptopType & WithCompaniesType

    expect(copyUser.companies.length).toBe(2)
    expect(user.companies).not.toBe(copyUser.companies)
    expect(user.address).toBe(copyUser.address)
    expect(user).not.toBe(copyUser)
    expect(copyUser.companies[0].title).toBe('EPAM')
})

test('update company', ()=>{


    let companies = {
        'Dimych': [{id: 1, title: 'epam'}, {id: 2, title: 'google'}],
        'Artem': [{id: 2, title: 'google'}]
    }

  const copy = updateComponyType(companies, 'Dimych',1, 'epam')


    expect(copy['Dimych']).not.toBe(companies['Dimych'])
    expect(copy['Artem']).toBe(companies['Artem'])
    expect(copy['Dimych'][0].title).toBe('epam')




})