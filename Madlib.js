// Write a madlib function, which is given a name and a subject. 
// It will return (not print) a new string: (name)'s favorite subject in school is (subject).


function madlib(name, subj) {
    let msg = '';
    if (name) {
        msg = `${name}'s favorite subject in school is ${subj}.`;
    }
    return msg
}

const note = madlib('John', 'music');

console.log(note);
