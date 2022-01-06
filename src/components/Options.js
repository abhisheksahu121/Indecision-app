import React from 'react';

// converted to stateless functional Component
// export default work with class definition but illegal for constant definitions . 
const Options = (props) => (
    <div className="options">
        <p className="options__text">{props.count}. {props.arrtext}</p>
        <button 
        className="button button--link"
         onClick = {(e) => {
         props.handleDeleteoption(props.arrtext);
        }}
         >
            Remove
            </button>
    </div>
);

export default Options;

// class Options extends React.Component {
//     render() {
//         return (
//             <div>
//                 {this.props.arrtext}
//             </div>
//         );
//     }
// }