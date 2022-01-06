import React from "react";


// converted stateless functional Component
const Header =  (props) =>  (
    <div className="header">
        <div className="container">
        <h1 className="header__title">{props.title}</h1>
        {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}    
        </div> 
    </div>

);

export default Header;
// below here we use Header with react component .


//so when we use Header(any name) with the react component react forces that first letter must be in uppercase (like H in Header) in case error will be occur 

// class Header extends React.Component {            //here we get a global react and a global reactDom and here we using the global react 

// then we can go ahead and acces a value on that object that is Component and Component is a class itself. that gives us all of the feature of react. now the Header is a react component.
//  there is one thing we got to know about react component is that react component require in a method to be defined. this is a special method that is called -> render();
// render(); called with no arguments and return some jsx

//lets say we want to show about help page i want to show help in order to do that we are going to do that pass data when we intialize an instance of our components that data its known as props.
//setting up component props very similar to setting up html attribute (like- id,class)

// render() {
// console.log(this.props);
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>

//         );
//     }
// }
