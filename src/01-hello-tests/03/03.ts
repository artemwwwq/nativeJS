import {students, StudentType} from "../02/02";
import {GovernmentBuildingsType, HouseType} from "../02/02_02";

export const sum =(a: number, b: number) => {
    return a + b
}


export const addSkill = (students : StudentType, skill: string) => {
    students.technologies.push(
        {
            id: new Date().getTime(),
            title: skill
        })

}

export function makeStudentActive(s: StudentType) {
        s.isActive = false
}

export const doesStudentLiveIn = (s: StudentType, cityName: string) => {
    return s.address.city.title === cityName
}

export const addMoneyToBudget = (buildings: GovernmentBuildingsType, budget: number) => {
 buildings.budget += budget
}

export const repairHouse = (houseType: HouseType) => {
    houseType.repaired = true
}

export const toFireStaff = (buildings: GovernmentBuildingsType, staffCountToFire: number) => {
    buildings.staffCount -= staffCountToFire
}

export const toHireStaff = (buildings: GovernmentBuildingsType, staffCountToHire: number) => {
buildings.staffCount += staffCountToHire
}