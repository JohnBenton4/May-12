//Write a function hello which given a name, says hello to the name.


// function hello(name) {
//    console.log(`Hello, ${name}`);
// }
// hello('Mustache!');



//Modify your hello program such that if no name is given: hello(), it will print "Hello, World!", 
// otherwise it behaves the same as previously.

function hello(name) {
    let msg = '';
    if (name) {
        msg = `Hello, ${name}!`;
    } else {
        msg = `Hello, World!`;
    }
    return msg;
}
const greet = hello('');

console.log(greet);

