
import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
// const obj = {
//     name: "rahul",
//     getName() {
//         return this.name;
//     }
// };
// const name = obj.getName;           // so here we create name we are referencing obj.getName and both try to run the exact same code. but we get an error in this case because 
//the problem is that the context it ran in is very different obj.getName is in the context of an object so we have access to that object as this binding
//but when we broken out into a function like this we actually lose that context the context does not get transferred. for fix this error we are using the bind method 
//bind is a method on a function which means right here on get name i can access bind and we are going to call it we get our function back which means obj.getName and obj.getName.bind() are acxectly same
//so the reson behind the use of bind its actually useful is that you can use the first argument to set context i can set it equal to that object oncegain bringing the context back to what we would expect.
// inside bind method we can  pass whatever we want 


// const getName = obj.getName.bind(obj)
// console.log(obj.getName());

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
// ReactDOM.render(<User name = " abhi" age={26} />, document.getElementById('app'));

