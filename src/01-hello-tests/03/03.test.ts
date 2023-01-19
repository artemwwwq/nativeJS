import {StudentType} from "../02/02";
import {addSkill, doesStudentLiveIn, makeStudentActive} from "./03";

let students: StudentType
beforeEach(()=> {
    students = {
        id: 1,
        name: 'Artem',
        age: 22,
        isActive: true,
        address: {
            streetTitle: 'Transportnikov 50A',
            city: {
                title: 'Yekaterinburg',
                countryTitle: 'Russia'
            }
        },
        technologies: [
            {
                id: 1,
                title: 'HTML'
            }, {
                id: 2,
                title: 'CSS'
            }, {
                id: 3,
                title: 'JS'
            }
        ]
    }
})


test('new tech skill should be added to student', ()=>{
    expect(students.technologies.length).toBe(3)

addSkill(students, 'JS')

    expect(students.technologies.length).toBe(4)
    expect(students.technologies[3].title).toBe('JS')
    expect(students.technologies[3].id).toBeDefined()


})

test('student should be made active', ()=>{
    expect(students.isActive).toBe(true)

    makeStudentActive(students)

    expect(students.isActive).toBe(false)

})


test('student lives is city', ()=>{


   let result1 = doesStudentLiveIn(students, 'Moscow')
   let result2 = doesStudentLiveIn(students, 'Yekaterinburg')

    expect(result1).toBe(false)
    expect(result2).toBe(true)

})