import React from 'react';


//Addoption -> addoption component here
// here we set up as default export 
export default class Addoption extends React.Component {
    state = {
        error: undefined
    };
    handleAddoption = (e) => {
        e.preventDefault();
        // console.log('testting');
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
    };
    render() {
        return (
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.handleAddoption}>
                    <input className="add-option__input" type="text" name="arr"></input>
                    <button className="button">Add Option</button>
                </form>
            </div>

        );

    }
}