type UserType = {
    [key: string]: {id: number, name: string}
}

let users: UserType


beforeEach(()=> {
users = {
        '100': {id: 100, name: 'Artem'},
        '312323': {id: 312323, name: 'Natasha'},
        '1212': {id: 1212, name: 'Kirill'},
        '1': {id: 1, name: 'Ivan'}
    }
})


test('should select corresponding user from obj', ()=> {
    users['1'].name = 'Lexa'
    expect(users['1'].name).toBe('Lexa')
    expect(users['1']).toEqual({id: 1, name: 'Lexa'})
})

test('should DELETED corresponding user from obj', ()=> {
  delete users['1']

    expect(users['1']).toBeUndefined()
})