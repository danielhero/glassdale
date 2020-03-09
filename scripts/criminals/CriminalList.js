import { useCriminals } from "./criminalProvider.js";
import { Criminal } from "./CriminalHTML.js";


const contentTarget = document.querySelector(".criminalsContainer")



export const CriminalList = () => {
    let criminalObjectsArray = useCriminals()

    for (const criminalObject of criminalObjectsArray) {
        const criminalHTMLRepresentation = Criminal(criminalObject)
        contentTarget.innerHTML += criminalHTMLRepresentation

    }
}


