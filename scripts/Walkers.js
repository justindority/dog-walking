import { findCities } from "./CityList.js"
import { getCities, getWalkerCity, getWalkers } from "./database.js"

const walkers = getWalkers()
const cities = getCities()
const walkerCities = getWalkerCity()

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("walker")) {
            const [,walkerId] = itemClicked.id.split("--")

            for (const walker of walkers) {
                if (walker.id === parseInt(walkerId)) {
                    const findEm = findCities(walker)
                    window.alert(`${walker.name} services ${findEm}`)
                }
            }
        }
    }
)





export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        walkerHTML += `<li id="walker--${walker.id}">${walker.name}</li>`
    }

    walkerHTML += "</ul>"

    return walkerHTML

}

