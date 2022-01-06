// console.log("Visibility toggle");

//code by using component


class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleTogglevisiblity = this.handleTogglevisiblity.bind(this);
        this.state = {
            Visibility: false
        };
    }
    handleTogglevisiblity() {
        this.setState((prevState) => {
            return {
                Visibility: !prevState.Visibility

            };
        })
    }
    render() {
        return (
            <div>
                <h1>Visibility toggle</h1>
                <button onClick={this.handleTogglevisiblity}>
                    {this.state.Visibility ? 'Hide details' : 'show details'}
                </button>
                {this.state.Visibility && (
                    <div>
                        <p>Hey. These are some details now you can see!</p>
                    </div>
                )}
            </div>

        );
    }
}
let appRoot = document.getElementById('app');
ReactDOM.render(<VisibilityToggle />, appRoot);

// let Visibility = false;

// const visible = () => {
//     Visibility = !Visibility
//     show();
// };
// let appRoot = document.getElementById('app');

// const show = () => {
//     const tmp = (
//         <div>
//             <h1>Visibility toggle</h1>
//             <button onClick={visible}>
//                 {Visibility ? 'Hide details' : 'show details'}
//             </button>
//             {Visibility && (
//                 <div>
//                     <p>Hey. These are some details now you can see!</p>
//                 </div>
//             )}
//         </div>

//     );
//     ReactDOM.render(tmp, appRoot);
// };

// show();

