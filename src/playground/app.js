
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





// here we create parent indecisionapp react component and nested other reeact component inside this;

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeletearr = this.handleDeletearr.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddoption = this.handleAddoption.bind(this);
        this.handleDeleteoption = this.handleDeleteoption.bind(this);
        this.state = {
            // arr: props.arr
            arr: []
        };
    }

    componentDidMount() {
        try{
            const json = localStorage.getItem('arr');
            const arr = JSON.parse(json);
          if(arr) {
            this.setState(() => ({ arr }));
          }
        } catch(e) {
       //Do nothing at all
        }
       
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevState.arr.length !== this.state.arr.length)
        {
            const json = JSON.stringify(this.state.arr);
            localStorage.setItem('arr', json);
            // console.log('saving');
        }
    }
    componentWillUnmount() {
        console.log('componentWillunmount');
    }

    handleDeletearr() {
        // this.setState(() => {
        //     return {
        //         arr: []
        //     };
        // });

        //aero function is going to treat curly brackets{} as the function body. so if we want to implecitly return an object we have to go ahead and wrap it in parentheses().
        // so now if we called num we would get an empty object back.
        // const num = () => ({})

        this.setState(() => ({ arr: [] }));

    }
    //below we are going to create a new method that is going to be responsible for taking in an arr that we want to delete and using setstate to actually remove it.
    handleDeleteoption(optionToRemove) {
        this.setState((prevState) =>({
            arr: prevState.arr.filter((option) =>  optionToRemove !== option)
        }));
    }

    handlePick() {
        const randomnum = Math.floor(Math.random() * this.state.arr.length);  //soo here Math.render() is return a random number but that number is between 0 to 1 where number could be 0 but could not be 1
        //soo here we use another method Math.floor() which is going to round the value in decimal like 1,2,...
        const option = this.state.arr[randomnum];                            //use rendom number to pull somthing from the option array and now we are going to pull that item out and do somthing with it 
        alert(option);
    }
    handleAddoption(option) {
        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.arr.indexOf(option) > -1) {   //here we use indexOf which will return the index of current value
            return 'This option already exists';
        }
        // this.setState((prevState) => {
        //     return {
        //         arr: prevState.arr.concat([option])  //here we use concat function which is merge the new array element with the previous one.
        //     };

        // });

        this.setState ((prevState) => ({
            arr: prevState.arr.concat([option])
        }));

    }
    render() {
        const title = 'Indecision';
        const subtitle = " Put your life in the hands of a computer";
        // const arr = ['Thing one', 'Thing two', 'Thing four'];
        return (
            <div>
                {/* //here we use props and for acces that we use this.title in Header component it is refrencing to the current instances of this component
             and recat gives us accces to our props on an object that is this.props.  */}
                <Header subtitle={subtitle} />
                <Action
                    hasarr={this.state.arr.length > 0}
                    handlePick={this.handlePick}
                />
                <Options />
                <Option
                    arr={this.state.arr}
                    handleDeletearr={this.handleDeletearr}
                    handleDeleteoption = {this.handleDeleteoption}
                />
                <Addoption
                    handleAddoption={this.handleAddoption}
                />
            </div>
        );
    }
}

// IndecisionApp.defaultProps = {
//     arr: []

// };




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
// converted stateless functional Component
const Header = (props) => {
    return (
        <div> 
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>

    );
};

//so when we have not passing any title in our header than we can see the default value on our screen.
Header.defaultProps = {
    title: 'Indecision'
};



// converted stateless functional Component
const Action = (props) => {
    return (
        <div>
            <button onClick={props.handlePick}
                disabled={!props.hasarr} >
                What should i do ?
            </button>
        </div>
    );
};

//class based component

// class Action extends React.Component {
//     // handlePick() {
//     //     alert('handelpick');
//     // }

//     render() {
//         return (
//             <div>
//                 <button onClick={this.props.handlePick}
//                         disabled={ !this.props.hasarr} > 
//                      What should i do ?
//                      </button>
//             </div>
//         );
//     }
// }

// converted to stateless functional Component
const Option = (props) => {
    return (
        <div>
            <button onClick={props.handleDeletearr}>Remove All</button>
            {props.arr.length === 0 && <p>Please add an option to get started!</p>}
            {
                props.arr.map((k) => (
                <Options 
                key={k}
                 arrtext={k}
                handleDeleteoption={props.handleDeleteoption} ></Options>
                ))
            }
        </div>
    );
};



//option -> options component here with custom classes
// class Option extends React.Component {
// constructor(props) {
//     super(props);
//     this.handleremoveall = this.handleremoveall.bind(this);
// }
// handleremoveall() {
//     console.log(this.props.arr);
//     // alert('handleremoveall');
// }

//     render() {
//         return (
//             <div>
//                 <button onClick={this.props.handleDeletearr}>Remove All</button>
//                 {
//                     this.props.arr.map((k) => <Options key={k} arrtext={k}></Options>)
//                 }
//             </div>
//         );
//     }
// }

// converted to stateless functional Component
const Options = (props) => {
    return (
        <div>
            {props.arrtext}
            <button
             onClick = {(e) => {
             props.handleDeleteoption(props.arrtext);
            }}
             >remove</button>
        </div>
    );
};

// class Options extends React.Component {
//     render() {
//         return (
//             <div>
//                 {this.props.arrtext}
//             </div>
//         );
//     }
// }

//Addoption -> addoption component here
class Addoption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddoption = this.handleAddoption.bind(this);
        this.state = {
            error: undefined
        };
    }
    handleAddoption(e) {
        e.preventDefault();
        const text = e.target.elements.arr.value.trim();  //here we use string method trim() which is going to remove all leading and trailing spaces
        const error = this.props.handleAddoption(text);

        // this.setState(() => {
        //     return { error };
        // });
        this.setState(() => ({
           error: error
        }));
        if(!error) {
            e.target.elements.arr.value = '';
        }
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddoption}>
                    <input type="text" name="arr"></input>
                    <button>Addsubmit </button>
                </form>
            </div>

        );

    }
}
// const jsx = (
//     <div>
//         <h1>Title</h1>
//         {/* inoredr to render a react component we actually create what look like a custom html*/}
//         <Header />
//         <Action />
//         <Option />
//         <Addoption />
//     </div>
// );

//Stateless Functional Component
// Stateless functional components are just function. and this function is very simialr to class component render method. and this is still allowed for props and we can pass props as a argument. and stateless functional component do not have access to this
const User = (props) => {    //here we can name that props and this is exactly the same as this.props in our class based component
    return (
        <div>
            <p>Name: {props.name} </p>
            <p>Age: {props.age} </p>
        </div>
    );
};

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
// ReactDOM.render(<User name = " abhi" age={26} />, document.getElementById('app'));