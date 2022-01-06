import React from 'react';
import Options from './Options';
// converted to stateless functional Component
const Option =  (props) => (
    <div>
        <div className="widget-header">
        <h3 className="widget-header__title">Your Options</h3>
        <button 
        className="button button--link"
        onClick={props.handleDeletearr}
        >
        
        Remove All</button>
        </div>
        {props.arr.length === 0 && <p className="widget__message">Please add an option to get started!</p>}
        {
            props.arr.map((k,index) => (
          <Options 
            key={k}
             arrtext={k}
             count = {index+1}
            handleDeleteoption={props.handleDeleteoption} ></Options>
            ))
        }
    </div>
);

export default Option;

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