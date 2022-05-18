// Write a function totalAmount that takes the same arguments as tipAmount 
// except it returns the total as the tip amount plus the bill amount. 
// This function may make use of tipAmount as a sub-task.



function totalAmount(amount, quality) {
    const tip = {
        good: amount * .2,
        fair: amount * .15,
        bad: amount * .1
    };
    
    console.log(tip[quality] + amount);

    return tip[quality];
}

const tip = totalAmount(40, 'good');




