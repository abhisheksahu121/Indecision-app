var namevar = 'Abhishek'
var namevar = 'appu'
console.log('namevar', namevar);

let namelet = 'jan'
namelet = 'feb'
console.log('namevar', namelet);

const nameconst = 'age'
console.log('nameconst', nameconst);
//var variable are function scoped and let ,const are blocked scoped
// var fullname = 'abhishek sahu'
// if(fullname){
//     var firstname = fullname.split(' ')[0];
//     console.log(firstname);
// }
// console.log(firstname);
//but let and const not followed above functionallety because let and const are block scoped
const fullname = 'abhishek sahu';
let first;
if(fullname){
    first = fullname.split(' ')[0];
    console.log(first);
}
console.log(first);