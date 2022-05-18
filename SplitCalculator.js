// Write a function splitAmount that takes the bill amount and the level of service, 
// and the number of people to split the bill between. 
// It will return the final amount for each person.



function splitAmount(amount, quality, people) {
    const tip = {
        good: amount * .2,
        fair: amount * .15,
        bad: amount * .1
    };
    
    console.log((tip[quality] + amount) / people);

    // console.log(tipAmount);

    return tip[quality];
}

const tip = splitAmount(40, 'good', 2);


