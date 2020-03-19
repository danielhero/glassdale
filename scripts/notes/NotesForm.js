import { saveNote } from "./NotesProvider.js"

saveNote
const contentTarget = document.querySelector(".noteFormContainer")

// Handle browser-generated click event in component
contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {

        // Make a new object representation of a note
        const newNote = {
            // Key/value pairs here
            noteText: document.querySelector("#noteText").value,
            Suspect: document.querySelector("#suspect").value
        }

        // Change API state and application state
        saveNote(newNote)
    }
})

const render = () => {
    contentTarget.innerHTML = `
    <fieldset>
        <label for="noteText">Note:</label>
        <input type="text" id="noteText">
    </fieldset>
    <fieldset>
        <label>Criminal:</label>
        <input type="text" id="suspect">
    </fieldset>

        <button id="saveNote">Save Note</button>
    `
}

const NoteForm = () => {
    render()
}

export default NoteForm