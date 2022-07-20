import { getPets, getWalkers } from "./database.js"

const pets = getPets()
const walkers = getWalkers()

export const RegisteredPets = () => {
    let petHTML = "<ul>"

    for (const pet of pets) {
        petHTML += `<li id="pet--${pet.id}">${pet.name}</li>`
    }

    petHTML += "</ul>"

    return petHTML
}


document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("pet")) {
            const [,petID] = itemClicked.id.split("--")

            for (const pet of pets) {
                if (pet.id === parseInt(petID)) {
                    for(const walker of walkers){
                        if(pet.walkerId === walker.id){
                            window.alert(`${pet.name} is being walked by ${walker.name}.`)
                        }
                    }
                }
            }
        }
    }
)