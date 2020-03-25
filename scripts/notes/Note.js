export const Note = (noteObject, criminal) => {
    return `
        <section class="note">
            <header>
                <h4>${criminal.name}</h4>
            </header>
            <p>${noteObject.noteText}</p>
            <p>
                <button id="deleteNote--${noteObject.id}">Delete Note</button>
            \</p>
        </section>
    `
}