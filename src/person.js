console.log('person.js is running!');
// challenge
// person.js
// name export isadult(18) - true if adult. otherwise false
// name export canDrink(18) - true is 21 and over , othewise false;

 const isadult = (age) => age >= 18;
 const canDrink = (age) => age >= 21;
 const isseniourcitizen = (age) => age >= 65;
 export{isadult, canDrink,isseniourcitizen as default};