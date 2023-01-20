import {GovernmentBuildingsType, HouseType} from "../02/02_02";

export const getStreetsTitlesOfGovermentsBuildings = (buldings: Array<GovernmentBuildingsType>) => {
    return buldings.map(b => b.address.street.title)
}

export const getStreetsTitlesOfHouse = (houses: Array<HouseType>) => {
    return houses.map(b => b.address.street.title)
}