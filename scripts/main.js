
import { CriminalList } from "./criminals/CriminalList.js";
import { getCriminals } from "./criminals/criminalProvider.js";


getCriminals().then(() => CriminalList())