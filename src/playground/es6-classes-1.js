console.log("lets talking about some classes in react");


//when we work classes and components create the first uppercase named class and that lets the user of the variable person know that this is class not some object.
//  class Person {
//    constructor(name) {
//     this.name = name || 'test'; //so this logical operator says that use the name if it exists if it does not exist lets go ahead and use somthing else.
//                               //this is a constructor for the functipn class
//                               //constructor function is the function that gets call them can make a new instance and it gets called with all
//    }
//  }       


class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;

  }                      //soo here i am not putting a comma after the closing bracets of constructor this is actually a legal
  getGretting() {       //now setting up method that allow us to reuse code across
    //  return 'Hi. i am ' + this.name;
    return `Hi. I am ${this.name}`;
  }

  getDescription() {
    return `${this.name} is ${this.age} years old`;
  }

}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {             //here we override above method and change the behaviour
    //  return 'testing';     

    let description = super.getDescription();
    if (this.hasMajor()) {
      description += ` their major is ${this.major}`;
    }

    return description;
  }
}
//challenge 
//Traveler -> Person
//Add support for homeLocation
//override getGreeting
//1. hi. i am abhi . i am visiting from lalitpur.
//2 hi . i am abhi.
class Traveler extends Person {
  constructor(name, age, homelocation) {
    super(name, age);
    this.homelocation = homelocation;
  }

  hashomelocation() {
    return !!this.homelocation;
  }
  getGretting() {
    let dis = super.getGretting();
    if (this.hashomelocation()) {
      dis += `i am visiting from  ${this.homelocation}`;
    }
    return dis;
  }
}


//create new instance for person overself we are going to use new keyword when we are making a new instance of class to tell js that we want to make a new instance and it gets called with all of the arguments we passed in
const me = new Traveler('Abhi', 22, 'Lalitpur');
console.log(me.getGretting());

const other = new Traveler(undefined, undefined,"nowhere");
console.log(other.getGretting());