
import { react } from "babel-types";
import React from 'react';

// converted stateless functional Component
const Action =  (props) => (
    <div>
        <button 
        className = "big-button"
        onClick={props.handlePick}
        disabled={!props.hasarr} 
        >
            What should i do ?
        </button>
    </div>
);

export default Action;

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