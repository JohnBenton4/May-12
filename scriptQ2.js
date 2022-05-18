//Write a JavaScript program to compute the sum of the two given integers. 
// If the sum is in the range 50-80, return 65. Otherwise, return 80.


function add(x, y) {
    
    const result = x + y;

    if (result >= 50 && result <= 80) {
    return 65;}

    return 80;

    // return result;
}

console.log(add(20, 5));



