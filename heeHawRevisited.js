/*
    Ellen Goetsch
    April 17, 2019
    heeHaw.js
    JavaScript Script which defines a function which prints numbers 1 to a number chosen by the client
    to the console and applies the heeHaw function to the list of numbers.
 */

//prompts the user to pick a number (length for the number array)
var size = prompt("Please enter a positive, whole number");

//initializes an empty array
var numbers = [];

//creates an array using the 'size' specified by the user
function makeArray()
{
    //initializes a counter variable to keep track of how many times we have looped over the arra
    var i = 0;

    for (i = 1; i <= size; i++) {

        numbers.push(i); //adds the elements to the array
    }
    return numbers; //returns the array object for use later in the script.
}

//method which takes three properties on an array of numbers and uses them as parameters
//from which a foreach loop can easily iterate over
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



if(!(Number.isNan(size)))
{
    makeArray();
    numbers.forEach(heeHaw);
}
else
{
    console.log("Invalid entry: Please enter a positive, whole integer!");
}

