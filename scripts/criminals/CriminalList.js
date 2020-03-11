import { useCriminals } from "./criminalProvider.js";
import { Criminal } from "./CriminalHTML.js";


const contentTarget = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("crimeChosen", event => {
    // Filter the list of criminal who committed the crime

    // Get the criminals
    const criminals = useCriminals()

    // Get the crime
    const theCrimeThatWasChosen = event.detail.chosenCrime

    // Look at all of the criminals and determine if each one is a vandal
    const guiltyCriminals = criminals.filter(criminal => {
        if (criminal.conviction === theCrimeThatWasChosen) {
            return true
        }
        return false
    })

     // Clear inner HTML of the criminal list
     contentTarget.innerHTML = ""

     // Build it up again
     for (const singleCriminal of guiltyCriminals) {
         contentTarget.innerHTML += Criminal(singleCriminal)
     }
 })



export const CriminalList = () => {
    let criminalObjectsArray = useCriminals()

    for (const criminalObject of criminalObjectsArray) {
        const criminalHTMLRepresentation = Criminal(criminalObject)
        contentTarget.innerHTML += criminalHTMLRepresentation

    }
}


