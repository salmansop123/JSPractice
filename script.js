// Practice set 2
// Question 01
let marks = {
    salman: 90,
    ahsan: 80,
    afaq: 100,
    mujhtaba: 70,
    ali: 33
}

// for (let i=0;i<Object.keys(marks).length;i++){
//     console.log("Marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]]);
// }

// Question 02 using for in loop
for (let i in marks){
    console.log("Marks of " + i + " are " + marks[i]);
}