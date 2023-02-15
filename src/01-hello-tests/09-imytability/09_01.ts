import exp from "constants";

export type UserType1 = {
    name: string
    hair: number
    address: {city: string, house: number}
}

export type LaptopType = {
    title: string
}

export type userWithLaptopType = UserType1 & {
    laptop: LaptopType
}

export type UserWithBooks = UserType1 & {
    books: Array<string>
}

export type WithCompaniesType = {
    companies: Array<{id: number, title: string}>
}

export function makeHairStyle(u: UserType1, power: number) {
    const copy = {
        ...u,
        hair: u.hair / power
    }
    //copy.hair = u.hair / power
    return copy
}


export const moveUser = (u: userWithLaptopType, city: string) => {
    return  {
        ...u,
        address: {
            ...u.address,
            city:city
        }
    }
    /*copy.address = {...copy.address, city: city}

    return copy*/
}

export const moveUserToOtherHouse = (u: userWithLaptopType & UserWithBooks, house: number) => {
    return  {
        ...u,
        address: {
            ...u.address,
            house:house
        }
    }

}

export const upgradeUserLaptop = (u: userWithLaptopType, title: string) => {
   return  {
        ...u, laptop: {...u.laptop, title: title}
    }
}

export const addNewBooksToUser = (u:userWithLaptopType & UserWithBooks, newBooks: string) => {
  return  {
    ...u,
      books: [...u.books, newBooks]
    }
}

export const updateBook = (u:userWithLaptopType & UserWithBooks, staraya: string, newB: string ) => {
    return  {
        ...u, books: u.books.map(el=>el===staraya ? newB : el)
    }
}

export const removeBook = (u:userWithLaptopType & UserWithBooks, remove: string) => {
    return {
        ...u, books: u.books.filter(el=>el !== remove)
    }
}

export const addNewCompanies = (u: userWithLaptopType & WithCompaniesType, newArr: { id: number; title: string }[]) => {
   return  {
        ...u, companies: [...u.companies, newArr]
    }
}


export const refreshComponyTitle = (u: WithCompaniesType, id: number, title: string) => {
   return  {
        ...u, companies: u.companies.map(el=> el.id === id ? {...el, title} : el)
    }
}

export const updateComponyType = (companies: {[key: string]: Array<{ id: number; title: string }>}, userName: string, componyId: number, newTitle: string) => {
      let componyCopy = {...companies}
    componyCopy[userName] = componyCopy[userName].map(el=>el.id === componyId ? {...el, title: newTitle} : el)
return componyCopy
}