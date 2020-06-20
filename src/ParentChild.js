import React, { Component, useState } from 'react';


// export function ParentComponent(props) {

//     const [count, setCount] = useState(0);  // hook useState
//     const [myObj, setMyObj] = useState({ count: 0 });  // hook useState

//     const updateCount = () => {
//         setCount(count + 1);
//         setMyObj({ count: myObj.count + 1 });
//     }

//     return (
//         <div style={{ background: 'gray' }}>
//             <h1>{props.h1} - {count} - {myObj.count}</h1>
//             <ChildComponent
//                 heading={props.childHeading + ' - ' + count} // input
//                 abbu_nay_maal_diya={"FROM PARENT SAMAAN"} // input
//                 increment={updateCount}  // output / cb (child will call it)
//             />
//             <span>..End Parent Component..</span>
//         </div>
//     )
// }


// function ChildComponent(props) {

//     const counterHandler = () => {
//         console.log('Clicked on Counter Buttn', props.heading);
//         props.increment();
//     }

//     return (
//         <div style={{ background: 'yellow' }}>
//             <h1>{props.heading}</h1>
//             <span>{props.abbu_nay_maal_diya}</span>
//             <button onClick={counterHandler}>child will change state of papa</button>
//         </div>
//     )
// }







                        // using constructur and this hard






export class ParentComponent extends Component {

    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    updateCount = () => {
        this.setState({ count: this.state.count + 1 }); // state update
        console.log('Parent count: ', this.state.count);
    }

    render() {
        return (
            <div style={{ background: 'red' }}>
                <h1>{this.props.h1} {this.state.count}</h1>
                <ChildComponent
                    heading={this.props.childHeading + ' - ' + this.state.count} // input
                    hello={"World"} // input
                    increment={this.updateCount}  // output / cb (child will call it)
                />
                <span>..End Parent Component..</span>
            </div>
        )
    }
}

class ChildComponent extends Component {
    constructor(props) {
        super(props);
        // this.counterHandler = this.counterHandler.bind(this);
    }


    render() {

        const counterHandler = () => {
            console.log('Clicked on Counter Buttn', this.props.heading);
            this.props.increment();
        }
        return (
            <div style={{ background: 'yellow' }}>
                <h1>{this.props.heading}</h1>
                <span>{this.props.hello}</span>
                <button onClick={counterHandler}>Counterrr</button>
            </div>
        )
    }
}
