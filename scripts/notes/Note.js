export const Note = (noteObj) => {
    return `
        <div class="notes">
            <h4>${noteObj.Suspect}</h4>
            <p>${noteObj.noteText}</p>
        </div>
    `
}