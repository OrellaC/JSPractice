// The Complete JavaScript Course 7
// LECTURE: Equality Operators: == vs. ===


// 1. Declare a variable 'numNeighbours' based on a prompt input like this: prompt('How many neighbour countries does your country have?');

let numNeighbors = "How many countries does your country border?"

// 2. If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality == for now)
if (numNeighbors == 1){
    console.log("Only 1 border!")

    // 3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours' is greater than 1
} else if (numNeighbors > 1) {
    console.log("More than 1 border!")
    // 4. Use an else block to log 'No borders' (this block will be executed when 'numNeighbours' is 0 or any other value)
}else if (numNeighbors <= 0){
    console.log("No borders")
}
