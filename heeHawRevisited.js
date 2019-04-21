/*
    Ellen Goetsch
    April 17, 2019
    heeHaw.js
    JavaScript Script which defines a function which prints numbers 1 to a number chosen by the client
    to the console and applies the heeHaw function to the list of numbers.
 */

//prompts the user to pick a number (length for the number array)
var size = prompt("Please enter a positive, whole number");
                        //OR "Please set the size of the array, number list, etc..."
                        //"you would like to create."

//initializes an empty array of a length specified by user input
var numbers = Array(size);

function makeArray()
{

    var i = 0;

    for (i = 1; i <= numbers.length; i++) {

        numbers.push(i);
    }
    return numbers;
}

function heeHaw(currentValue, index, numbers) {

    numbers[index] = currentValue;

    if (currentValue % 5 === 0 && currentValue % 3 === 0) {
        console.log("Hee Haw!");
    } else {
        if (currentValue % 3 === 0) {
            console.log("Hee! \n");
        } else if (currentValue % 5 === 0) {
            console.log("Haw! \n");
        } else {
            console.log(currentValue + "\n");
        }
    }

}
makeArray();
numbers.forEach(heeHaw);
