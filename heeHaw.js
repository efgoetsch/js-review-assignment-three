
/*
    Ellen Goetsch
    April 10, 2019
    heeHaw.js
    JavaScript Script which defines a function which prints numbers 1 to 100 to the console
 */

var numbers = [];
var i;

function makeArray()
{

    for (i = 1; i <= 100; i++) {

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
