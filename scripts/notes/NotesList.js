import { Note } from "./Note.js"
import { useNotes } from "./NotesProvider.js"

const eventHub = document.querySelector(".container")

const notesContainer /*targetcontent*/  = document.querySelector(".notesContainer")

eventHub.addEventListener("noteStateChanged", (thecustomEvent) => {
    render()
})

const render = () => {
    
    const notesArray = useNotes()

    notesContainer.innerHTML = ""

    for (const noteObj of notesArray) {
        notesContainer.innerHTML += Note(noteObj)
    }
    
}

const NotesList = () => {
    render()
}

export default NotesList