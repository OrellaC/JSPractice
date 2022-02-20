// ========== Functions ===========
// 1.  Write a function called 'describeCountry' which takes three parameters: 'country', 'population' and 'capitalCity'. Based on this input, the function returns a string with this format: 'Finland has 6 million people and its  capital city is Helsinki'

function describeCountry (country, population, capitalCity) {
    return (`${country} has ${population} and its capital city is ${capitalCity}`)
}
// 2. Call this function 3 times, with input data for 3 different countries. Store the returned values in 3 different variables, and log them to the console

const guyana = describeCountry("Guyana",700000, 'Georgetown');

const england = describeCountry("England", 55000000, "London")

const germany = describeCountry("Germany", 83000000, "Berlin")

console.log(guyana, germany, england)