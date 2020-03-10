
import { CriminalList } from "./criminals/CriminalList.js";
import { getCriminals } from "./criminals/criminalProvider.js";
import ConvictionSelect from "./convictions/convictionsSelect.js";
import { getConvictions } from "./convictions/convictionsProvider.js";


getConvictions().then(() => ConvictionSelect())



getCriminals().then(() => CriminalList())