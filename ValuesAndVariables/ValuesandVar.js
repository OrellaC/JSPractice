// ========== JavaScript Fundamentals - Part 1 ====

// ============ Values and Variables ==========
// 1. Declare variables called 'country', 'continent' and 'population' and assign their values according to your own country (population in millions)
let country = "Guyana";
const continent = "South America";
let population = 786559;
// 2. Log their values to the console
console.log(country, continent, population);


// =========== Data Types ==============
// 1. Declare a variable called 'isIsland' and set its value according to your country. The variable should hold a Boolean value. Also declare a variable 'language', but don't assign it any value yet
let isIsland = false;

// ========= let, const, and var ============
// 1. Set the value of 'language' to the language spoken where you live (some countries have multiple languages, but just choose one)
let language = "English";
// (Data Types) 2. Log the types of 'isIsland', 'population', 'country' and 'language' to the console.
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

        // ========= Basic Operators ==============
// 1 . If your country split in half, and each half would contain half the population, then how many people would live in each half?
 console.log(population / 2);

// 2. Increase the population of your country by 1 and log the result to the console
population++;
// 3. Finland has a population of 6 million. Does your country have more people than Finland?
console.log(population > 6000000);

//  4. The average population of a country is 33 million people. Does your country have less people than the average country?
console.log(population < 33000000);
// 5. Based on the variables you created, create a new variable 'description' which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese

let description = country + " is in " + continent + " and its " + population + " thousand people speak " + language; 

console.log(description)

    // ========== Strings and Template Literals ==========
// 1. Recreate the 'description' variable from the last assignment, this time using the template literal syntax
 
let updatedDescription = `${country} is in ${continent} and its ${population} thousand people speak ${language}`

console.log(updatedDescription);

        // ========= If/Else Statements ========= 
// 1. If your country's population is greater that 33 million, log a string like this to the console:'Portugal's population is above average'. Otherwise, log a string like 'Portugal's population is 22 million below average' (the 22 is the average of 33 minus the country's population)
if (population > 33000000){
    console.log(`${country}'s population is above average`)
} else {
    console.log(`${country}'s population is ${33000000 - population} million below average`)
}

        // ======== Type Conversion and Coercion ======== 
// 1. Predict the result of these 5 operations without executing them:
// '9' - '5';
// '19' - '13' + '17';
// '19' - '13' + 17;
// '123' < 57;
// 5 + 6 + '4' + 9 - 4 - 2;

// 2. Execute the operations to check if you were right
console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);

