import { getCities, getWalkerCity, getWalkers } from "./database.js"

const walkers = getWalkers()
const cities = getCities()
const walkerCities = getWalkerCity()



export const CityList = () => {
    let citiesHTML = "<ol>"

    for (const city of cities) {
        citiesHTML += `<li>${city.name}</li>`
    }

    citiesHTML += "</ol>"

    return citiesHTML
}

export const findWalkerCities = (walker) => {

    let walkerCitiesArray = []
    for(const walkerCity of walkerCities){
        if(walker.id === walkerCity.walkerId){
            walkerCitiesArray.push(walkerCity)
        }
    }
    return walkerCitiesArray
}

export const findCities = (walker) => {
    let currentWalkerCities = findWalkerCities(walker)
    let citiesString = ''
    for (const walkerCity of currentWalkerCities){
        for(const city of cities){
            if(city.id === walkerCity.cityId){
                citiesString += `${city.name}, `
            }
        }
    }
    let newCitiesString = citiesString.slice(0,-2)
    return newCitiesString
}