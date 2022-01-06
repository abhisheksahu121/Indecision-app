
class Counter extends React.Component {     
    constructor(props) {         //we know when we override constructor we get those propes and we have to call super
        super(props);  
        this.handleAdd = this.handleAdd.bind(this);     
        this.handleMinusOne = this.handleMinusOne.bind(this);     
        this.handleReset = this.handleReset.bind(this);  
        //so now here we use react component state
        this.state = {
            // count: props.count
            count: 0
        };   
        
    }
    
    componentDidMount() {
        const stringcount = localStorage.getItem('count');
        const count = JSON.parse(stringcount, 10);
        if(!isNaN(count))
        {
            this.setState(() => ({ count}));
        }

    }
   

    componentDidUpdate(prevProps, prevState) {
        if(prevState.count !== this.state.count) {
         localStorage.setItem('count', this.state.count);
        }
    }
    handleAdd() {
        // this.state.count = this.state.count +1;
        // console.log(this.state);

        //instate of above code here we call method on oue component instance it is this.setState is going to allow us to manipulate that state object.
        //and when we are manipulating it we are going to see the component refersh automatically. and this method actually gets call with single argument that is going to be a function.
        //and this function is where we are going to define the updates we want to make. so we just return object and we spacify various value that we want to change and reassign.
        
        // this.setState(() => {  
        //   return {
        //       count: 1     //here we staticlly acsses the value count. 
        //   };
        // });       

        //and now finally we are using little updated function this function right above. we actually have accses to the current state value via the first argument which is commonly called previous state.
        //so its a function argument so we could tachnically name it anything because this is our state object before our changes have been applied. so now we want to use previous value all we do by this argument(previousstate/any name) and acces that value;

        this.setState((prevState) => {
            return {
                count: prevState.count + 1

            };
        });
    }
    handleMinusOne() {
        // console.log('handleminusone');

        this.setState((prevState) => {
           return {
               count: prevState.count - 1

           };
        } );
    }
    handleReset() {
        // console.log("handlereset");
        this.setState(() => {
            return {
                count: 0
            };
        });

        // this.setState((prevState) => {
        //     return ({
        //         count: prevState.count + 1
        //     });

        // });
        
        //why we have not use below code this is explain in react course command doc file.
        // this.setState({
        //     count: 0
        // });

        // this.setState({
        //     count: this.state.count +1
        // });
    }
    
    
    render() {
        return (
            <div>
                <h1>Count: {this.state.count} </h1>
                <button onClick = {this.handleAdd}>+1</button>
                <button onClick= {this.handleMinusOne}>-1</button>
                <button onClick= {this.handleReset}>reset</button>
            </div>
        );
    }
}
// Counter.defaultProps = {
//     count: 0
// };
ReactDOM.render(<Counter />, document.getElementById('app'));






// in html we use classname as class but in ract we use classname as className
//onClick eventlistiner
// const appRoot = document.getElementById('app');
// let count = 0;
// const addone = () => {
//     count++;
//     renderCountApp();
//     console.log('add', count);
// }
// const minus = () => {
//     count--;
//     renderCountApp();
//     console.log('minus',count);
// }
// const reset = () => {
//     count =0;
//     renderCountApp();
//     console.log('reset', count);
// }

// const renderCountApp = () => {
//     const templatefour = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addone}>+1</button>
//             <button onClick={minus}>-1</button>
//             <button onClick={reset}>reset</button>
//         </div>

//     );


//     ReactDOM.render(templatefour, appRoot);
// };

// renderCountApp();
//by using this we are going to use the document API and here we are
// going to be use get element by id and fetch the element

 //const appRoot = document.getElementById('app');

//ReactDOM.render is just a method and this takes two arguments the first one is GSX 
//i would like to render and second one is the DOM element where you would like to render it.

//  ReactDOM.render(templatefour, appRoot);

//soo here we use dynamic variable. and also calling via object

// const user = {
//    name: "Abhishek",
//    age: 21,
//    location: 'New York',

// };

// var username = 'Abhishek';
// var userAge = 22;
// var userlocation = 'Lalitpur';

// function getlocation(location){
//       if(location){
//           return <p>Location: {location}</p>;
//       }
//  }
// const templatetwo = (
//     <div>
//         <h1>{user.name? user.name : 'Anonymous'}</h1>
//         {(user.age && user.age>=18) && <p>Age: {user.age}</p>}

//         {/* <p>Location: {getlocation(user.location)}</p> */}

//         {getlocation(user.location)}
//     </div>
// );

// ReactDOM.render(templatetwo, appRoot);

// challenge time
// const minus = () => {
//     console.log('minus');
// }
// const tmp = (
//     <div>
//         <h1> Count: {count}</h1>
//         <button onClick={minus}>-1</button>
//     </div>
// );
// const reset = () => {
//     console.log('reset');
// }