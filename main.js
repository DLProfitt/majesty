/*
    Define a function with a single parameter. When the function
    is invoked, an argument is required.
*/
const hailTheQueen = (nameString) => {
    return `Hail Her Majesty, ${nameString}.`  // This function returns a string
}

const charisse = hailTheQueen("Charisse Ford") // Argument value is "Charisse Ford"
console.log(charisse)

const jenna = hailTheQueen("Jenna Solis") // Argument value is "Jenna Solis"
console.log(jenna)

const athena = hailTheQueen("Athena Perez"); // Argument value is "Athena Perez"
console.log(athena);

const leanna = hailTheQueen("Leanna Profitt") // Argument value is "Leanna Profitt"
console.log(leanna)

const pamela = hailTheQueen("Pamela Profitt") // Argument value is "Pamela Profitt"
console.log(pamela)

const peggy = hailTheQueen("Peggy Lawrence") // Argument value is "Peggy Lawrence"
console.log(peggy)
