let witnesses = []

export const useWitnesses = () => witnesses.slice()


// Get witness data state from API
export const getWitnesses = () => {
    return fetch("https://criminals.glassdale.us/witnesses")
        .then(response => response.json())
        .then(parsedWitnesses => {
                witnesses = parsedWitnesses
            })
}






