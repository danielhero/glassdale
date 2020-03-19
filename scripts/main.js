
import { CriminalList } from "./criminals/CriminalList.js";
import { getCriminals } from "./criminals/criminalProvider.js";
import ConvictionSelect from "./convictions/convictionsSelect.js";
import { getConvictions } from "./convictions/convictionsProvider.js";
import NoteForm from "./notes/NotesForm.js";
import { getNotes } from "./notes/NotesProvider.js"
import NotesList from "./notes/NotesList.js";


getConvictions().then(() => ConvictionSelect())



getCriminals().then(() => CriminalList())

NoteForm()
getNotes().then(NotesList)

