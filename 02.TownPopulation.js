function solve(arr) {
    const towns = {};

    for (const info of arr) {
        let tokens = info.split(" <-> ");
        let townName = tokens[0];
        let population = Number(tokens[1]);
        if (towns[townName]) {
            towns[townName] += population;
        } else {
            towns[townName] = population;
        }
    }
    for (let name in towns) {
        console.log(`${name} : ${towns[name]}`)
    }
}

solve([
    'Sofia <-> 1200000',
    'Montana <-> 20000',
    "New York <-> 10000000",
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']
)
//expected output -
// Sofia : 1200000
// Montana : 20000
// New York : 10000000
// Washington : 2345000
// Las Vegas : 1000000