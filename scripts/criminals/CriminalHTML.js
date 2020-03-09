export const Criminal = (criminalObject) => {
    return `
    <div class="eachCriminal">
         <h4>${criminalObject.name}</h4>
            <ul class="eachCriminal__Info"> 
                <li>Age: ${criminalObject.age}</li>
                <li>Crime: ${criminalObject.conviction}</li>
                <li>Start: ${new Date(criminalObject.incarceration.start).toLocaleDateString('en-US')}</li>
                <li>End: ${new Date(criminalObject.incarceration.end).toLocaleDateString('en-US')}</li>
            </ul>
    </div>
     `
 }