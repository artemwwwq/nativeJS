type LessonType = {
    title: string
}

type ManType = {
    name: string
    age: number
    lessons: Array<LessonType>
    address: {
        street: {
            title: string
        }
    }
}


let props: ManType;
beforeEach(()=> {
    props = {
        name: 'Artem',
        age: 32,
        lessons:[ {title: '1'}, {title: '2'}],
        address: {
            street: {
                title: 'Nezavisimosti street'
            }
        }
    }
})



test('', ()=>{
   /* const age = man.age
    const lessons = man.lessons*/
    const {age, lessons} = props
    const {title} = props.address.street


    expect(age).toBe(32)
    expect(lessons.length).toBe(2)

    expect(title).toBe('Nezavisimosti street')
})

test('', ()=> {
    const l1 = props.lessons[0]
    const l2 = props.lessons[1]

    const [ls1, ls2] = props.lessons

    expect(l1.title).toBe('1')
    expect(l2.title).toBe('2')


    expect(ls1.title).toBe('1')
    expect(ls2.title).toBe('2')
})