// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

// 1. Create function
// 2. Take paramater (string) and make it an array separated by commas.
// 3. Iterate over the array.
// 4. Check to see what the first value is and swap it for its complementary symbol.
// 5. Itertate through the whole string
// 6. Join elelemts once iteration is complete.

const complementarySide = (sideOneDNA) => {
    let sideTwoDNA = sideOneDNA;

    for (let i = 0; i < sideTwoDNA.length; i++) {
        if (sideOneDNA[i] === "A") {
            sideTwoDNA[i] = "T";
        } else if (sideOneDNA[i] === "T") {
            sideTwoDNA[i] = "A";
        } else if (sideOneDNA[i] === "G") {
            sideTwoDNA[i] = "C";
        } else if (sideOneDNA[i] === "C") {
            sideTwoDNA[i] = "G";
        } else {
            return "Your string contains a non DNA symbol";
        }
    };
    return sideTwoDNA;
};

// const lookup = {
//     'A': 'T',
//     'T': 'A',
//     'G': 'C',
//     'C': 'G',
// }

// const complementarySide = dna => dna.split('').map(letter => lookup[letter] || letter).join('');

const testDNA1 = complementarySide("AATT")
const testDNA2 = complementarySide("ATAT")
const testDNA3 = complementarySide("GGCC")
const testDNA4 = complementarySide("GCGC")
const testDNA5 = complementarySide("ACTG")
const testDNA6 = complementarySide("GTAC")
const testDNA7 = complementarySide("GTAX")
console.log(testDNA1, "test1 should return TTAA")
console.log(testDNA2, "test2 should return TATA")
console.log(testDNA3, "test3 should return CCGG")
console.log(testDNA4, "test4 should return CGCG")
console.log(testDNA5, "test5 should return TGAC")
console.log(testDNA6, "test6 should return CATG")
console.log(testDNA7, "test7 should return error msg")