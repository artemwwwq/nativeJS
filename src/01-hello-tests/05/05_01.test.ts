import {createGreetingMessage, ManType} from "./05_01";

let people: Array<ManType> = []

beforeEach(()=> {
    people = [
        {name: 'Alexey Petrov', age: 33},
        {name: 'Ivan Svetlov', age: 24},
        {name: 'Alena Belayeva', age: 18}
    ]
})


test('should get array of greeting messages', ()=> {
    const messages = createGreetingMessage(people)

    expect(messages.length).toBe(3)
    expect(messages[0]).toBe('Hello Alexey. Welcome to IT-INCUBATOR')
    expect(messages[1]).toBe('Hello Ivan. Welcome to IT-INCUBATOR')
    expect(messages[2]).toBe('Hello Alena. Welcome to IT-INCUBATOR')
})