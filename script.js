// Given an array of items, reverse the order.

//old version
const reverseArray = function (array) {
    for (let i = 0; i < array.length / 2; i ++) {
    
        const temp = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = temp;
    }
    
    return array;
}

//also old version
// function reverseArray(array) {
//     return array;
// }

//new version
// const reverseArray = (array) => {
// for (let i = 0; i < array.length / 2; i ++) {
    
//     const temp = array[i];
//     array[i] = array[array.length - 1 - i];
//     array[array.length - 1 - i] = temp;
// }

//     return array;
// }
console.log(reverseArray([ 1, 2, 3, 4 ]));




// const reverseArray = (array) => {
//     // reverse the array here
//     for (let i = 0; i < array.length / 2; i++) {
//       const temp = array[i];
//       const swapIndex = array.length - 1 - i;
//       array[i] = array[swapIndex];
//       array[swapIndex] = temp;
//     }
  
//     return array;
//   }
  
  
//   console.log(reverseArray([ 1, 2, 3, 4, 5, 6]));