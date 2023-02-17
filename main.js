const queens = [];
const tributeChest = [];

const createQueen = (num, nameStr) => {
    const queen = {
        id: num,
        name: nameStr
    }
    queens.push(queen)
}

const hailTheQueen = (nameString) => {
    return `Hail Her Majesty, ${nameString}.`
}

// Create some queens
createQueen(1, "Trinity Terry");
createQueen(2, "Leanna Profitt");
createQueen(3, "Pamela Profitt");

// Hail all of the queens
for (const queen of queens) {

    const hailMessage = hailTheQueen(queen.name)  // What should be passed as an argument?
    console.log(hailMessage)

}

// Pay tribute to the queens
const payTribute = (tributeId, tributeDescription, queenNum) => {
    const tribute = {
        id: tributeId,
        description: tributeDescription,
        queenId: queenNum
    };
    
    tributeChest.push(tribute);
}

payTribute(1, 'IOU', 1);
payTribute(2, 'My unconditional love', 2);
payTribute(3, 'An amazing Mother\'s Day gift', 3);

for (const queen of queens) {
    for (const tribute of tributeChest) {
        if (queen.id == tribute.queenId) {
            console.log(`${queen.name} has received a tribute of ${tribute.description}.`)
        }
    }
}
