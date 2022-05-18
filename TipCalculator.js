// Write a function tipAmount that is given the bill amount and the level of service 
// (one of good, fair and poor) and returns the dollar amount for the tip.


function tipAmount(amount, quality) {
    const tip = {
        good: amount * .2,
        fair: amount * .15,
        bad: amount * .1
    };
    // if (quality === 'good') {
    //     msg = amount * .2;
    // } else if (quality === 'fair') {
    //     msg = amount * .15;
    // } else {
    //     msg = amount * .1;
    // }
    console.log(tip[quality]);
    return tip[quality];
}

const tip = tipAmount(100, 'good');


