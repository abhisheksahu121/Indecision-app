// argument object - no longer bound with arrow functions

// const add = (a, b,c) => {
//    // console.log(arguments);
//     return a+b+c;
// }
// console.log(add(4,4,3,2));

//this keyword - no longer bound

const user = {
    name: 'Abhishek',
    cities: ['lalitpur', 'jhanshi', 'talbehat'],


    printplaceslived() {         //because this arroe function does not bind its own value so it is no longer equal to the ibject it goes to the parent scope which is the global scope
        
        // console.log(this.name);
        // console.log(this.cities);
        // const that = this;

        // here we use another array method map (map is a array method but work diiferent from each)
        // map like for each gets called with a single function this function gets called one time for the every item in the array
        //the difference b/w forEach and map is that forEach do somthing with each item like printed to the scrren 
        // but in map we actually transform each item getting a new array back
        // the map method does not affect this.cities array at all
       
       
        return this.cities.map((city) => this.name + ' has lived in ' + city);
        // return cityMessage;
        
        // this.cities.forEach((city) => {
        //     console.log(this.name + 'has lived in ' + city); //Soo here this keyword not accses by the legal function but we access throw define this keyword in to any variable than we can use this variable in the  function 
        // });
    }
};
console.log(user.printplaceslived());

//Challenge area
// const multiplier = {
//     multiplyby: 5,
//     numbers : ['2','3','4'],
//     multiply() {
//         return this.numbers.map((x) => x*this.multiplyby);
//     }

// };
// console.log(multiplier.multiply());