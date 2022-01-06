import React from 'react';
import Addoption from './AddOption'; //AddOption is a default export so we dont need to curly brackets{},
import Header from './Header';
import Action from './Action';
import Option from './Option';
import Options from './Options';
import OptionModal from './OptionModal';
// here we create parent indecisionapp react component and nested other reeact component inside this;

export default class IndecisionApp extends React.Component {
    state = {
        // arr: props.arr
        arr: [],
        selectedOption: undefined
    };
    handleDeletearr = () => {
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
    handleClearSelectedOption = () => {
        this.setState(() => ({ selectedOption: undefined }));
    }
    //below we are going to create a new method that is going to be responsible for taking in an arr that we want to delete and using setstate to actually remove it.
    handleDeleteoption = (optionToRemove) => {
        this.setState((prevState) =>({
            arr: prevState.arr.filter((option) =>  optionToRemove !== option)
        }));
    }

    handlePick = () => {
        const randomnum = Math.floor(Math.random() * this.state.arr.length);  //soo here Math.render() is return a random number but that number is between 0 to 1 where number could be 0 but could not be 1
        //soo here we use another method Math.floor() which is going to round the value in decimal like 1,2,...
        const option = this.state.arr[randomnum];                            //use rendom number to pull somthing from the option array and now we are going to pull that item out and do somthing with it 
        this.setState(() => ({
         selectedOption: option 
        }));
    };
    handleAddoption = (option) => {
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
    componentDidMount = () => {
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
   

    render() {
        // const title = 'Indecision';
        const subtitle = " Put your life in the hands of a computer";
        // const arr = ['Thing one', 'Thing two', 'Thing four'];
        return (
            <div>
                {/* //here we use props and for acces that we use this.title in Header component it is refrencing to the current instances of this component
             and recat gives us accces to our props on an object that is this.props.  */}
                <Header subtitle={subtitle} />
                <div className="container">
                <Action
                    hasarr={this.state.arr.length > 0}
                    handlePick={this.handlePick}
                />
                <Options />
                <div className="widget">
                <Option 
                    arr={this.state.arr}
                    handleDeletearr={this.handleDeletearr}
                    handleDeleteoption = {this.handleDeleteoption}
                />
                <Addoption
                    handleAddoption={this.handleAddoption}
                />
                </div>
                </div>
                <OptionModal
                 selectedOption = {this.state.selectedOption}
                 handleClearSelectedOption = {this.handleClearSelectedOption}
                />

            </div>
        );
    }
}

// IndecisionApp.defaultProps = {
//     arr: []

// };

//so when we have not passing any title in our header than we can see the default value on our screen.
Header.defaultProps = {
    title: 'Indecision'
};

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
